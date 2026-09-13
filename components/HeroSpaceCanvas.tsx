"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export const HeroSpaceCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    
    // Add subtle fog for atmospheric depth
    scene.fog = new THREE.FogExp2(0x0d0d11, 0.0012);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 80;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch (e) {
      console.warn("WebGL not available for 3D Hero canvas", e);
      return;
    }

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Groups for organization and rotation
    const spaceGroup = new THREE.Group();
    scene.add(spaceGroup);

    // 1. STARFIELD (Particles)
    const starCount = 3500;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);

    const palette = [
      new THREE.Color("#FFFCF2"),
      new THREE.Color("#EB5E28"),
      new THREE.Color("#CCC5B9"),
      new THREE.Color("#8A2BE2"),
      new THREE.Color("#00F0FF"),
    ];

    for (let i = 0; i < starCount; i++) {
      const radius = 50 + Math.random() * 250;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      starPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = radius * Math.cos(phi);

      const color = palette[Math.floor(Math.random() * palette.length)];
      starColors[i * 3] = color.r;
      starColors[i * 3 + 1] = color.g;
      starColors[i * 3 + 2] = color.b;

      starSizes[i] = Math.random() * 2.5 + 0.5;
    }

    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starPositions, 3)
    );
    starGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(starColors, 3)
    );

    // Custom Canvas Texture for smooth circular points
    const createParticleTexture = () => {
      const pCanvas = document.createElement("canvas");
      pCanvas.width = 64;
      pCanvas.height = 64;
      const ctx = pCanvas.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.8)");
        gradient.addColorStop(0.6, "rgba(255, 255, 255, 0.2)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      return new THREE.CanvasTexture(pCanvas);
    };

    const starMaterial = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      map: createParticleTexture(),
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const starPoints = new THREE.Points(starGeometry, starMaterial);
    spaceGroup.add(starPoints);

    // 2. CENTRAL 3D CELESTIAL STRUCTURE (Wireframe Icosahedron + Outer Torus Rings)
    const coreGroup = new THREE.Group();

    // Inner Glowing Polyhedron
    const icoGeo = new THREE.IcosahedronGeometry(14, 2);
    const icoMat = new THREE.MeshPhysicalMaterial({
      color: 0xeb5e28,
      emissive: 0x331005,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: true,
      transparent: true,
      opacity: 0.65,
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    coreGroup.add(icoMesh);

    // Core Solid Core Gem
    const innerGemGeo = new THREE.IcosahedronGeometry(8, 0);
    const innerGemMat = new THREE.MeshStandardMaterial({
      color: 0xfffcf2,
      emissive: 0xeb5e28,
      emissiveIntensity: 0.8,
      roughness: 0.1,
      metalness: 0.9,
    });
    const innerGem = new THREE.Mesh(innerGemGeo, innerGemMat);
    coreGroup.add(innerGem);

    // Orbital Ring 1
    const ring1Geo = new THREE.TorusGeometry(24, 0.2, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0xeb5e28,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    coreGroup.add(ring1);

    // Orbital Ring 2 (Counter rotating)
    const ring2Geo = new THREE.TorusGeometry(32, 0.15, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 4;
    coreGroup.add(ring2);

    // Position structure slightly to the right on desktop, centered on mobile
    const updateCorePosition = () => {
      if (window.innerWidth >= 1024) {
        coreGroup.position.set(30, 0, -10);
      } else {
        coreGroup.position.set(0, -10, -20);
      }
    };
    updateCorePosition();

    spaceGroup.add(coreGroup);

    // 3. AMBIENT & POINT LIGHTS
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xeb5e28, 4, 150);
    pointLight1.position.set(30, 20, 20);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x00f0ff, 3, 150);
    pointLight2.position.set(-40, -20, 10);
    scene.add(pointLight2);

    // Mouse Parallax Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const halfX = window.innerWidth / 2;
      const halfY = window.innerHeight / 2;
      mouseX = (e.clientX - halfX) / halfX;
      mouseY = (e.clientY - halfY) / halfY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Window Resize Handler
    const handleResize = () => {
      if (!canvasRef.current) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      updateCorePosition();
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse damping
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Rotate 3D space group gently
      spaceGroup.rotation.y = elapsedTime * 0.03 + targetX * 0.3;
      spaceGroup.rotation.x = elapsedTime * 0.01 + targetY * 0.2;

      // Rotate core elements at varied speeds
      icoMesh.rotation.x = elapsedTime * 0.15;
      icoMesh.rotation.y = elapsedTime * 0.25;

      innerGem.rotation.y = -elapsedTime * 0.4;
      innerGem.rotation.z = elapsedTime * 0.2;

      ring1.rotation.z = elapsedTime * 0.1;
      ring2.rotation.z = -elapsedTime * 0.15;

      // Pulse lighting intensity slightly
      pointLight1.intensity = 3.5 + Math.sin(elapsedTime * 2) * 0.8;
      pointLight2.intensity = 2.5 + Math.cos(elapsedTime * 1.5) * 0.6;

      // Camera parallax shift
      camera.position.x = targetX * 6;
      camera.position.y = -targetY * 6;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      innerGemGeo.dispose();
      innerGemMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <canvas ref={canvasRef} className="w-full h-full block opacity-90" />
    </div>
  );
};
