"use client";

import dynamic from "next/dynamic";

const ThreeInteractiveBackground = dynamic(
  () => import("@/components/ThreeInteractiveBackground"),
  {
    ssr: false,
    loading: () => null,
  }
);

export default function AbstractBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Three.js Living 3D Particle Wave Field & Scrollytelling Depth */}
      <ThreeInteractiveBackground />

      {/* Hardware-Accelerated Static Ambient Glow (Zero Paint Invalidation) */}
      <div className="absolute top-0 left-1/2 h-[500px] w-[800px] max-w-full -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.04)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.06)_0%,transparent_70%)]" />

      {/* Ambient Vignette for Depth */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_0%,rgba(0,0,0,0.015)_100%] dark:bg-radial-[circle_at_center,transparent_0%,rgba(0,0,0,0.25)_100%]" />
    </div>
  );
}
