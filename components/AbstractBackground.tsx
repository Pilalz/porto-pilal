export default function AbstractBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Precision Dot Grid Pattern with Smooth Radial Mask */}
      <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] [background-size:24px_24px] opacity-70 mask-[radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] dark:opacity-45" />

      {/* Hardware-Accelerated Static Ambient Glow (Zero Paint Invalidation) */}
      <div className="absolute top-0 left-1/2 h-[450px] w-[750px] max-w-full -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(24,24,27,0.03)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04)_0%,transparent_70%)]" />

      {/* Ambient Vignette for Depth */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_0%,rgba(0,0,0,0.015)_100%] dark:bg-radial-[circle_at_center,transparent_0%,rgba(0,0,0,0.25)_100%]" />
    </div>
  );
}
