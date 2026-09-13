"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projectsData, Project } from "@/data/portfolioData";
import { Layers, FolderGit2 } from "lucide-react";

const categories = ["All", "Full Stack", "Web App", "UI/UX"] as const;

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      {/* Header */}
      <div className="animate-fade-in-up space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          <FolderGit2 className="h-3.5 w-3.5" />
          <span>Koleksi Karya</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
          Projects
        </h1>
        <p className="max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
          Daftar proyek terpilih yang telah saya bangun, mulai dari aplikasi full stack terintegrasi, dashboard analitik, hingga komponen antarmuka yang modular.
        </p>
      </div>

      {/* Category Filter Pills with micro-animations */}
      <div className="animate-fade-in-up mt-8 flex flex-wrap items-center gap-2 border-b border-zinc-200/80 pb-6 [animation-delay:100ms] dark:border-zinc-800/80">
        <div className="mr-2 flex items-center gap-1.5 text-xs text-zinc-400">
          <Layers className="h-3.5 w-3.5" />
          <span>Filter:</span>
        </div>
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 active:scale-95 ${
                isActive
                  ? "bg-zinc-900 text-white shadow-xs dark:bg-zinc-100 dark:text-zinc-900"
                  : "border border-zinc-200 bg-white/90 text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-200"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="animate-fade-in-up mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 [animation-delay:200ms]">
        {filteredProjects.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="mt-12 rounded-xl border border-dashed border-zinc-300 p-12 text-center text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
          Tidak ada proyek dalam kategori ini.
        </div>
      )}
    </div>
  );
}
