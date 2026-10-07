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
    scene.background = new THREE.Color("#121212");

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
        alpha: false,
        antialias: false, // Performance optimization: turn off expensive WebGL antialiasing for points
        powerPreference: "high-performance",
      });
    } catch (e) {
      console.warn("WebGL not available for Global Space Canvas", e);
      return;
    }

    // Caps pixel ratio to max 1.5 to guarantee 60fps on Retina displays
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    // Master Space Group
    const spaceGroup = new THREE.Group();
    scene.add(spaceGroup);

    // Optimized Starfield: 3,500 Stars for ultra-smooth scrolling
    const starCount = 3500;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const palette = [
      new THREE.Color("#FFFFFF"),
      new THREE.Color("#FFFCF2"),
      new THREE.Color("#EB5E28"),
      new THREE.Color("#E0E0E0"),
      new THREE.Color("#9d4edd"),
    ];

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 800;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 800;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 1000;

      const isAccent = Math.random() > 0.85;
      const color = isAccent
        ? palette[Math.floor(Math.random() * palette.length)]
        : palette[Math.floor(Math.random() * 2)];

      starColors[i * 3] = color.r;
      starColors[i * 3 + 1] = color.g;
      starColors[i * 3 + 2] = color.b;
    }

    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starPositions, 3)
    );
    starGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(starColors, 3)
    );

    // Particle Texture
    const createParticleTexture = () => {
      const pCanvas = document.createElement("canvas");
      pCanvas.width = 32;
      pCanvas.height = 32;
      const ctx = pCanvas.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.8)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 32, 32);
      }
      return new THREE.CanvasTexture(pCanvas);
    };

    const starMaterial = new THREE.PointsMaterial({
      size: 2.0,
      vertexColors: true,
      map: createParticleTexture(),
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const starPoints = new THREE.Points(starGeometry, starMaterial);
    spaceGroup.add(starPoints);

    // Light-weight interaction state
    let targetX = 0;
    let targetY = 0;
    let targetScroll = 0;
    let currentScroll = 0;

    let tick = 0;
    const handleMouseMove = (e: MouseEvent) => {
      tick++;
      if (tick % 2 !== 0) return; // Throttle mouse calculations by 50%
      const halfX = window.innerWidth / 2;
      const halfY = window.innerHeight / 2;
      targetX = (e.clientX - halfX) / halfX;
      targetY = (e.clientY - halfY) / halfY;
    };

    const handleScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        targetScroll = window.scrollY / maxScroll;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

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

      // Ultra-smooth lerping
      currentScroll += (targetScroll - currentScroll) * 0.08;

      spaceGroup.rotation.y = elapsedTime * 0.012 + currentScroll * Math.PI * 0.3;
      spaceGroup.rotation.x = elapsedTime * 0.006 + targetY * 0.05;

      camera.position.z = 80 - currentScroll * 150;
      camera.position.x = targetX * 5;
      camera.position.y = -currentScroll * 140 - targetY * 5;

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
      className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#121212]"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
