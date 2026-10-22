"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Languages } from "lucide-react";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className={`group relative inline-flex h-9 items-center gap-1.5 rounded-lg border border-zinc-200/80 bg-white/90 px-2.5 text-xs font-semibold text-zinc-700 shadow-2xs backdrop-blur-xs transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 active:scale-95 dark:border-zinc-800/80 dark:bg-zinc-900/90 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:focus-visible:ring-zinc-600 ${className}`}
      aria-label={`Current language: ${language.toUpperCase()}. Click to switch to ${language === "en" ? "Indonesian" : "English"}.`}
      title={`Switch to ${language === "en" ? "Bahasa Indonesia" : "English"}`}
    >
      <Languages className="h-3.5 w-3.5 text-zinc-500 transition-colors group-hover:text-zinc-800 dark:text-zinc-400 dark:group-hover:text-zinc-200" />
      <span className="font-mono text-[11px] uppercase tracking-wide">
        <span className={language === "en" ? "font-bold text-zinc-900 dark:text-zinc-100" : "text-zinc-400 dark:text-zinc-500"}>
          EN
        </span>
        <span className="text-zinc-300 dark:text-zinc-700">/</span>
        <span className={language === "id" ? "font-bold text-zinc-900 dark:text-zinc-100" : "text-zinc-400 dark:text-zinc-500"}>
          ID
        </span>
      </span>
    </button>
  );
}
