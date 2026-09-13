"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export const GlobalSpaceCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;

    // Scene & Camera
    const scene = new THREE.Scene();
    
    // Pure black cosmic fog background
    scene.background = new THREE.Color("#000000");

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1200
    );
    camera.position.z = 80;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: false,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch (e) {
      console.warn("WebGL not available for Global Space Canvas", e);
      return;
    }

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Master Space Group
    const spaceGroup = new THREE.Group();
    scene.add(spaceGroup);

    // 3D STARFIELD SYSTEM (8,000 Stars across deep space coordinates)
    const starCount = 8000;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);

    const palette = [
      new THREE.Color("#FFFFFF"),
      new THREE.Color("#FFFCF2"),
      new THREE.Color("#F2A65A"),
      new THREE.Color("#E0E0E0"),
      new THREE.Color("#8A2BE2"),
      new THREE.Color("#00F0FF"),
    ];

    for (let i = 0; i < starCount; i++) {
      // Wide distribution in 3D space (-500 to +500 along X/Y, -800 to +300 along Z)
      starPositions[i * 3] = (Math.random() - 0.5) * 800;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 800;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 1000;

      // Color variation: 80% white/warm white, 20% accent tint
      const isAccent = Math.random() > 0.8;
      const color = isAccent
        ? palette[Math.floor(Math.random() * palette.length)]
        : palette[Math.floor(Math.random() * 2)];

      starColors[i * 3] = color.r;
      starColors[i * 3 + 1] = color.g;
      starColors[i * 3 + 2] = color.b;

      // Varied star sizes for depth effect
      starSizes[i] = Math.random() * 2.8 + 0.6;
    }

    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starPositions, 3)
    );
    starGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(starColors, 3)
    );

    // Custom Canvas Texture for smooth circular stars
    const createParticleTexture = () => {
      const pCanvas = document.createElement("canvas");
      pCanvas.width = 64;
      pCanvas.height = 64;
      const ctx = pCanvas.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.2, "rgba(255, 255, 255, 0.9)");
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.3)");
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
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const starPoints = new THREE.Points(starGeometry, starMaterial);
    spaceGroup.add(starPoints);

    // Interaction state variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let currentScroll = 0;
    let targetScroll = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const halfX = window.innerWidth / 2;
      const halfY = window.innerHeight / 2;
      mouseX = (e.clientX - halfX) / halfX;
      mouseY = (e.clientY - halfY) / halfY;
    };

    const handleScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        targetScroll = window.scrollY / maxScroll;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Resize Handler
    const handleResize = () => {
      if (!canvasRef.current) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Damping mouse & scroll
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      currentScroll += (targetScroll - currentScroll) * 0.06;

      // Gentle cosmic starfield rotation & scroll flight depth
      spaceGroup.rotation.y = elapsedTime * 0.015 + currentScroll * Math.PI * 0.4;
      spaceGroup.rotation.x = elapsedTime * 0.008 + targetY * 0.1;

      // Camera depth movement along z axis as user scrolls
      camera.position.z = 80 - currentScroll * 200;
      camera.position.x = targetX * 8;
      camera.position.y = -currentScroll * 180 - targetY * 8;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-black"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
