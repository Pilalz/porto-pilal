"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import * as THREE from "three";

export default function ThreeInteractiveBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  const stateRef = useRef({
    isDark: true,
    mouseX: 0,
    mouseY: 0,
    targetMouseX: 0,
    targetMouseY: 0,
    scrollY: 0,
    targetScrollY: 0,
    maxScroll: 1000,
    isVisible: true,
  });

  // Keep theme in sync
  useEffect(() => {
    stateRef.current.isDark = resolvedTheme === "dark";
  }, [resolvedTheme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // --- 1. Scene, Camera, Renderer ---
    const scene = new THREE.Scene();

    let width = window.innerWidth;
    let height = window.innerHeight;

    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    // Initial camera position for ambient perspective
    camera.position.set(0, 18, 42);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));

    // --- 2. 3D Terrain Wave Particle Grid (65 x 65 = 4,225 particles) ---
    const gridCols = 68;
    const gridRows = 68;
    const numGridParticles = gridCols * gridRows;
    const gridSpacing = 1.35;

    const gridPositions = new Float32Array(numGridParticles * 3);
    const baseGridPositions = new Float32Array(numGridParticles * 2); // original x, z

    let pIdx = 0;
    const halfWidth = (gridCols * gridSpacing) / 2;
    const halfDepth = (gridRows * gridSpacing) / 2;

    for (let i = 0; i < gridCols; i++) {
      for (let j = 0; j < gridRows; j++) {
        const x = i * gridSpacing - halfWidth;
        const z = j * gridSpacing - halfDepth;

        gridPositions[pIdx * 3] = x;
        gridPositions[pIdx * 3 + 1] = 0; // y will be computed in animation loop
        gridPositions[pIdx * 3 + 2] = z;

        baseGridPositions[pIdx * 2] = x;
        baseGridPositions[pIdx * 2 + 1] = z;

        pIdx++;
      }
    }

    const gridGeometry = new THREE.BufferGeometry();
    const positionAttribute = new THREE.BufferAttribute(gridPositions, 3);
    gridGeometry.setAttribute("position", positionAttribute);

    const isDarkInitial = stateRef.current.isDark;
    const gridMaterial = new THREE.PointsMaterial({
      color: isDarkInitial ? 0x38bdf8 : 0x0284c7, // Sky blue in dark, rich blue in light
      size: isDarkInitial ? 0.14 : 0.12,
      transparent: true,
      opacity: isDarkInitial ? 0.65 : 0.35,
      blending: isDarkInitial ? THREE.AdditiveBlending : THREE.NormalBlending,
      depthWrite: false,
    });

    const gridPoints = new THREE.Points(gridGeometry, gridMaterial);
    // Lower the grid slightly so it acts as an expansive floor stretching backward
    gridPoints.position.set(0, -6, -8);
    gridPoints.rotation.x = 0.28; // gentle tilt toward viewer
    scene.add(gridPoints);

    // --- 3. Ambient Drifting Dust Stars (180 particles floating overhead) ---
    const starCount = 180;
    const starPositions = new Float32Array(starCount * 3);
    for (let s = 0; s < starCount; s++) {
      starPositions[s * 3] = (Math.random() - 0.5) * 80;
      starPositions[s * 3 + 1] = Math.random() * 30 - 5;
      starPositions[s * 3 + 2] = (Math.random() - 0.5) * 70;
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starPositions, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      color: isDarkInitial ? 0x818cf8 : 0x64748b, // Indigo in dark, slate in light
      size: 0.11,
      transparent: true,
      opacity: isDarkInitial ? 0.55 : 0.28,
      blending: isDarkInitial ? THREE.AdditiveBlending : THREE.NormalBlending,
      depthWrite: false,
    });
    const starPoints = new THREE.Points(starGeometry, starMaterial);
    scene.add(starPoints);

    // --- 4. Window Event Listeners: Mouse Parallax & Scroll Depth ---
    const onPointerMove = (e: PointerEvent) => {
      // Normalized coordinates (-1 to 1)
      stateRef.current.targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      stateRef.current.targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const updateScrollMetrics = () => {
      stateRef.current.targetScrollY = window.scrollY;
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
      stateRef.current.maxScroll = Math.max(docHeight - window.innerHeight, 1);
    };

    const onScroll = () => {
      updateScrollMetrics();
    };

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      updateScrollMetrics();
    };

    const onVisibilityChange = () => {
      stateRef.current.isVisible = !document.hidden;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);
    updateScrollMetrics();

    // --- 5. Animation Render Loop ---
    let animationFrameId: number;
    let clock = new THREE.Clock();
    let currentDark = isDarkInitial;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!stateRef.current.isVisible) return;

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Check for theme transition
      if (stateRef.current.isDark !== currentDark) {
        currentDark = stateRef.current.isDark;
        gridMaterial.color.setHex(currentDark ? 0x38bdf8 : 0x0284c7);
        gridMaterial.opacity = currentDark ? 0.65 : 0.35;
        gridMaterial.blending = currentDark
          ? THREE.AdditiveBlending
          : THREE.NormalBlending;
        gridMaterial.needsUpdate = true;

        starMaterial.color.setHex(currentDark ? 0x818cf8 : 0x64748b);
        starMaterial.opacity = currentDark ? 0.55 : 0.28;
        starMaterial.blending = currentDark
          ? THREE.AdditiveBlending
          : THREE.NormalBlending;
        starMaterial.needsUpdate = true;
      }

      // Smooth interpolation for mouse
      stateRef.current.mouseX = THREE.MathUtils.lerp(
        stateRef.current.mouseX,
        stateRef.current.targetMouseX,
        0.05
      );
      stateRef.current.mouseY = THREE.MathUtils.lerp(
        stateRef.current.mouseY,
        stateRef.current.targetMouseY,
        0.05
      );

      // Smooth interpolation for scroll (Scrollytelling Depth)
      stateRef.current.scrollY = THREE.MathUtils.lerp(
        stateRef.current.scrollY,
        stateRef.current.targetScrollY,
        0.06
      );

      const scrollProgress = Math.min(
        Math.max(stateRef.current.scrollY / stateRef.current.maxScroll, 0),
        1
      );

      // --- Scrollytelling Camera Movement ---
      // At Hero (progress = 0): Camera at (0, 18, 42)
      // At middle sections (progress = 0.5): Camera lowers and moves forward
      // At bottom sections (progress = 1.0): Camera settles into wide horizon
      const targetCamY = 18 - scrollProgress * 7;
      const targetCamZ = 42 - scrollProgress * 14;
      const targetTilt = 0.28 + scrollProgress * 0.15;

      camera.position.x = stateRef.current.mouseX * 3.5;
      camera.position.y = targetCamY + stateRef.current.mouseY * 2.0;
      camera.position.z = targetCamZ;

      gridPoints.rotation.x = targetTilt;
      gridPoints.rotation.y = stateRef.current.mouseX * 0.08 + scrollProgress * 0.12;
      gridPoints.rotation.z = Math.sin(elapsedTime * 0.1) * 0.02;

      // Mouse projection on 3D grid space for interactive ripple
      const mouseWorldX = stateRef.current.mouseX * 24;
      const mouseWorldZ = -stateRef.current.mouseY * 18;

      // --- Wave & Terrain Mathematics ---
      const positions = positionAttribute.array as Float32Array;
      const waveSpeed = 0.85 + scrollProgress * 0.4;
      const waveFreq = 0.14;

      for (let i = 0; i < numGridParticles; i++) {
        const bx = baseGridPositions[i * 2];
        const bz = baseGridPositions[i * 2 + 1];

        // Harmonic waves
        const wave1 = Math.sin(bx * waveFreq + elapsedTime * waveSpeed) * 1.1;
        const wave2 =
          Math.cos(bz * (waveFreq * 1.15) + elapsedTime * (waveSpeed * 0.8)) *
          1.0;
        const wave3 =
          Math.sin((bx + bz) * 0.08 + elapsedTime * 0.5) * 0.6;

        // Interactive mouse proximity displacement
        const dx = bx - mouseWorldX;
        const dz = bz - mouseWorldZ;
        const distSq = dx * dx + dz * dz;
        const mouseLift = Math.exp(-distSq * 0.015) * 2.8;

        positions[i * 3 + 1] = wave1 + wave2 + wave3 + mouseLift;
      }
      positionAttribute.needsUpdate = true;

      // Gentle floating stars
      starPoints.rotation.y = elapsedTime * 0.02 + scrollProgress * 0.2;
      starPoints.rotation.x = elapsedTime * 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // --- 6. Cleanup on Unmount ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);

      gridGeometry.dispose();
      gridMaterial.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full select-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Three.js Full-Viewport Canvas */}
      <canvas ref={canvasRef} className="h-full w-full outline-hidden" />

      {/* Smooth Vignette Mask to blend with page typography */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_20%,rgba(250,250,250,0.6)_85%,#fafafa_100%] dark:bg-radial-[circle_at_center,transparent_20%,rgba(9,9,11,0.6)_85%,#09090b_100%]" />

      {/* Top ambient glow gradient */}
      <div className="absolute top-0 left-1/2 h-[500px] w-[800px] max-w-full -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.06)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.08)_0%,transparent_70%)]" />
    </div>
  );
}
