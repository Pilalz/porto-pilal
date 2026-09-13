export default function AbstractBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Subtle Dot Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] [background-size:24px_24px] opacity-70 mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] dark:opacity-50" />

      {/* Ambient Gradient Blob 1: Top-left / center violet & indigo */}
      <div
        className="animate-blob-float absolute -top-32 -left-20 h-96 w-96 rounded-full bg-gradient-to-tr from-violet-400/25 via-indigo-300/20 to-purple-400/15 blur-[100px] sm:h-[480px] sm:w-[480px] sm:blur-[130px] dark:from-violet-600/15 dark:via-indigo-500/10 dark:to-purple-700/10"
      />

      {/* Ambient Gradient Blob 2: Top-right cyan & sky */}
      <div
        className="animate-blob-float-delayed absolute top-20 -right-24 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-400/20 via-sky-300/20 to-blue-400/15 blur-[100px] sm:h-[450px] sm:w-[450px] sm:blur-[130px] dark:from-cyan-600/10 dark:via-sky-500/10 dark:to-blue-700/10"
      />

      {/* Ambient Gradient Blob 3: Center-bottom soft warm rose / emerald glow */}
      <div
        className="animate-blob-pulse absolute top-1/2 left-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-tr from-rose-300/15 via-amber-200/15 to-emerald-200/10 blur-[90px] sm:h-[400px] sm:w-[400px] sm:blur-[120px] dark:from-rose-500/10 dark:via-amber-500/5 dark:to-emerald-600/5"
      />

      {/* Soft Vignette Overlay for smooth depth */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_0%,rgba(0,0,0,0.02)_100%] dark:bg-radial-[circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%]" />
    </div>
  );
}
