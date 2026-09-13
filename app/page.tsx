import Link from "next/link";
import { ArrowRight, Sparkles, Terminal, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import ProjectCard from "@/components/ProjectCard";
import { personalInfo, projectsData, featuredTechStack } from "@/data/portfolioData";

export default function HomePage() {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      {/* Hero Section */}
      <section className="relative flex flex-col items-start gap-6 pt-4 pb-12 sm:pb-16">
        {/* Availability Badge with pulsing glow */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-white/90 px-3.5 py-1 text-xs font-medium text-zinc-700 shadow-2xs backdrop-blur-xs transition-all hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-300 dark:hover:border-zinc-700">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          <span>{personalInfo.status}</span>
        </div>

        {/* Name & Role */}
        <div className="animate-fade-in-up max-w-3xl space-y-3 [animation-delay:100ms]">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-50">
            Halo, saya{" "}
            <span className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-800 bg-clip-text text-transparent underline decoration-zinc-300 underline-offset-8 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-200 dark:decoration-zinc-700">
              {personalInfo.shortName}
            </span>
            .
          </h1>
          <p className="text-xl font-medium text-zinc-700 sm:text-2xl dark:text-zinc-300">
            {personalInfo.role} based in {personalInfo.location}.
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
            {personalInfo.bio}
          </p>
        </div>

        {/* Call to Actions (CTA) with micro-animations */}
        <div className="animate-fade-in-up flex flex-wrap items-center gap-3 pt-2 [animation-delay:200ms]">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-md active:scale-95 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            <span>Lihat Proyek</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white/90 px-5 py-2.5 text-sm font-medium text-zinc-800 shadow-xs backdrop-blur-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-zinc-50 active:scale-95 dark:border-zinc-700 dark:bg-zinc-900/90 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            <Mail className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
            <span>Hubungi Saya</span>
          </Link>
          <div className="flex items-center gap-2 pl-2">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="rounded-lg border border-zinc-200 bg-white/90 p-2.5 text-zinc-600 shadow-2xs backdrop-blur-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:text-zinc-900 active:scale-95 dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-100"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="rounded-lg border border-zinc-200 bg-white/90 p-2.5 text-zinc-600 shadow-2xs backdrop-blur-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:text-zinc-900 active:scale-95 dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-100"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Stats Strip with hover highlight */}
        <div className="animate-fade-in-up mt-8 grid w-full grid-cols-2 gap-4 border-y border-zinc-200/80 py-6 sm:grid-cols-4 [animation-delay:300ms] dark:border-zinc-800/80">
          {personalInfo.stats.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-lg p-2 transition-all duration-200 hover:bg-zinc-100/60 dark:hover:bg-zinc-900/40"
            >
              <p className="text-2xl font-bold tracking-tight text-zinc-900 transition-transform duration-200 group-hover:scale-105 sm:text-3xl dark:text-zinc-100">
                {stat.value}
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Tech Stack Section */}
      <section className="py-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          <Terminal className="h-3.5 w-3.5" />
          <span>Tech Stack Utama</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {featuredTechStack.map((tech) => (
            <div
              key={tech}
              className="group flex items-center gap-1.5 rounded-lg border border-zinc-200/80 bg-white/80 px-3.5 py-1.5 font-mono text-xs font-medium text-zinc-700 shadow-2xs backdrop-blur-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-white hover:shadow-xs dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 transition-all duration-200 group-hover:scale-125 group-hover:bg-emerald-500 dark:bg-zinc-600" />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Highlight Section */}
      <section className="py-12">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Sorotan Proyek</span>
            </div>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
              Proyek Pilihan
            </h2>
            <p className="mt-1 max-w-xl text-sm text-zinc-600 dark:text-zinc-400">
              Beberapa proyek pilihan terbaru yang berfokus pada arsitektur bersih, performa cepat, dan solusi nyata.
            </p>
          </div>

          <Link
            href="/projects"
            className="group inline-flex items-center gap-1 text-sm font-medium text-zinc-900 transition-colors hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-300"
          >
            <span>Semua Proyek</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Quick CTA Banner */}
      <section className="relative my-8 overflow-hidden rounded-2xl border border-zinc-200/80 bg-gradient-to-r from-zinc-100/90 via-zinc-100/60 to-zinc-200/50 p-8 shadow-2xs backdrop-blur-xs transition-all duration-300 hover:border-zinc-300 sm:p-10 dark:border-zinc-800/80 dark:from-zinc-900/60 dark:via-zinc-900/40 dark:to-zinc-800/30 dark:hover:border-zinc-700">
        <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-xl space-y-2">
            <h3 className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-100">
              Punya ide proyek atau peluang kolaborasi?
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau peluang menjadi bagian dari tim Anda.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 active:scale-95 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            <span>Mari Terhubung</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
