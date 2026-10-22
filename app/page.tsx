"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  Copy,
  Check,
  Terminal,
  Code2,
  Database,
  Layers,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import ProjectCard from "@/components/ProjectCard";
import { personalInfo, projectsData } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";

export default function HomePage() {
  const { t, language } = useLanguage();
  const [activeCodeTab, setActiveCodeTab] = useState<"profile" | "stack">("profile");
  const [copied, setCopied] = useState(false);

  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);

  const statsList = [
    { label: t.stats.experience, value: "1+" },
    { label: t.stats.projects, value: "7+" },
    { label: t.stats.clients, value: "3+" },
    { label: t.stats.satisfaction, value: "99%" },
  ];

  const categorizedStack = [
    {
      group: language === "en" ? "Frontend & UI Craft" : "Frontend & Antarmuka",
      icon: Code2,
      skills: ["React 19", "Next.js 16", "TypeScript", "Tailwind CSS v4"],
    },
    {
      group: language === "en" ? "Backend & Architecture" : "Backend & Arsitektur",
      icon: Layers,
      skills: ["Node.js", "Express.js", "Laravel", "REST APIs"],
    },
    {
      group: language === "en" ? "Data & Infrastructure" : "Data & Infrastruktur",
      icon: Database,
      skills: ["PostgreSQL", "SQL Server", "Git", "Vite"],
    },
  ];

  const profileSnippet = `// rafi.config.ts
export const engineer = {
  name: "Rafi Hilal Zahir",
  role: "Full Stack Software Engineer",
  focus: ["Frontend Craft", "Scalable Systems"],
  location: "Bekasi, Indonesia",
  status: "open_for_opportunities",
  availableFor: ["Full-time", "Contract", "Consulting"],
  contact: "rafihilalzahir@gmail.com"
} as const;`;

  const stackSnippet = `// architecture.config.ts
export const productionStack = {
  frontend: ["Next.js 16", "React 19", "TypeScript", "Tailwind"],
  backend: ["Node.js", "Express.js", "Laravel", "PostgreSQL"],
  standards: [
    "WCAG 2.1 AA Accessibility",
    "Sub-100ms Core Web Vitals",
    "Clean Modular Domain Architecture"
  ]
} as const;`;

  const handleCopyCode = () => {
    const textToCopy = activeCodeTab === "profile" ? profileSnippet : stackSnippet;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      {/* Hero Section: 2-Column Responsive Layout */}
      <section className="relative grid grid-cols-1 items-center gap-12 pt-4 pb-16 lg:grid-cols-12 lg:gap-8">
        {/* Left Column: Hero Copy & Actions */}
        <div className="flex flex-col items-start gap-6 lg:col-span-7">
          {/* Availability Status Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-white/90 px-3.5 py-1 text-xs font-medium text-zinc-700 shadow-2xs backdrop-blur-xs transition-all hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-300 dark:hover:border-zinc-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span>{t.hero.status}</span>
          </div>

          {/* Heading Statement */}
          <div className="animate-fade-in-up space-y-4 [animation-delay:100ms]">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-50">
              {t.hero.greeting}{" "}
              <span className="font-black text-zinc-900 dark:text-white">
                {personalInfo.shortName}
              </span>
              .
            </h1>
            <p className="text-lg font-medium text-zinc-700 sm:text-xl dark:text-zinc-300">
              {t.hero.role}.
            </p>
            <p className="max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
              {t.hero.bio}
            </p>
          </div>

          {/* CTA Row */}
          <div className="animate-fade-in-up flex flex-wrap items-center gap-3 pt-2 [animation-delay:200ms]">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-md focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 active:scale-95 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus-visible:ring-zinc-600"
            >
              <span>{t.hero.viewProjects}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white/90 px-5 py-2.5 text-sm font-medium text-zinc-800 shadow-xs backdrop-blur-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-zinc-50 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 active:scale-95 dark:border-zinc-700 dark:bg-zinc-900/90 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:focus-visible:ring-zinc-600"
            >
              <Mail className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
              <span>{t.hero.contactMe}</span>
            </Link>
            <div className="flex items-center gap-2 pl-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="inline-flex min-h-[40px] min-w-[40px] items-center justify-center rounded-lg border border-zinc-200 bg-white/90 p-2.5 text-zinc-600 shadow-2xs backdrop-blur-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:text-zinc-900 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 active:scale-95 dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-100 dark:focus-visible:ring-zinc-600"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="inline-flex min-h-[40px] min-w-[40px] items-center justify-center rounded-lg border border-zinc-200 bg-white/90 p-2.5 text-zinc-600 shadow-2xs backdrop-blur-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:text-zinc-900 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 active:scale-95 dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-100 dark:focus-visible:ring-zinc-600"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Engineering Artifact (Interactive Code Inspector) */}
        <div className="animate-fade-in-up w-full lg:col-span-5 [animation-delay:250ms]">
          <div className="relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-xl shadow-zinc-200/50 backdrop-blur-md transition-all dark:border-zinc-800/90 dark:bg-zinc-950 dark:shadow-zinc-950/70">
            {/* macOS Window Chrome Header */}
            <div className="flex items-center justify-between border-b border-zinc-200/80 bg-zinc-100/80 px-4 py-2.5 dark:border-zinc-800/80 dark:bg-zinc-900/80">
              {/* Window Controls */}
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-rose-400/90" />
                <span className="h-3 w-3 rounded-full bg-amber-400/90" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
              </div>

              {/* Tabs Switcher */}
              <div role="tablist" aria-label="Code Snippets" className="flex items-center gap-1 rounded-lg bg-zinc-200/60 p-0.5 dark:bg-zinc-800/60">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeCodeTab === "profile"}
                  onClick={() => setActiveCodeTab("profile")}
                  className={`rounded-md px-2.5 py-1 font-mono text-[11px] font-medium transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 ${
                    activeCodeTab === "profile"
                      ? "bg-white text-zinc-900 shadow-2xs dark:bg-zinc-900 dark:text-zinc-100"
                      : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
                  }`}
                >
                  rafi.config.ts
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeCodeTab === "stack"}
                  onClick={() => setActiveCodeTab("stack")}
                  className={`rounded-md px-2.5 py-1 font-mono text-[11px] font-medium transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 ${
                    activeCodeTab === "stack"
                      ? "bg-white text-zinc-900 shadow-2xs dark:bg-zinc-900 dark:text-zinc-100"
                      : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
                  }`}
                >
                  stack.config.ts
                </button>
              </div>

              {/* Copy Button with Feedback */}
              <button
                type="button"
                onClick={handleCopyCode}
                className="inline-flex items-center justify-center rounded-md p-1.5 text-zinc-500 transition-colors hover:bg-zinc-200/80 hover:text-zinc-800 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 dark:focus-visible:ring-zinc-600"
                aria-label={copied ? "Code copied to clipboard" : "Copy code snippet"}
                title={copied ? "Copied!" : "Copy code"}
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>

            {/* Code Content Area with Syntax Highlighting */}
            <div className="overflow-x-auto p-4 sm:p-5">
              {activeCodeTab === "profile" ? (
                <div className="font-mono text-[11.5px] leading-relaxed text-zinc-700 sm:text-xs dark:text-zinc-300">
                  <div className="text-zinc-400 dark:text-zinc-500">// rafi.config.ts</div>
                  <div>
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">export const</span>{" "}
                    <span className="font-bold text-zinc-900 dark:text-zinc-100">engineer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-600 dark:text-zinc-400">name:</span>{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">&quot;Rafi Hilal Zahir&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-600 dark:text-zinc-400">role:</span>{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">&quot;Full Stack Software Engineer&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-600 dark:text-zinc-400">focus:</span> [
                    <span className="text-emerald-600 dark:text-emerald-400">&quot;Frontend Craft&quot;</span>,{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">&quot;Scalable Systems&quot;</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-600 dark:text-zinc-400">location:</span>{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">&quot;Bekasi, Indonesia&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-600 dark:text-zinc-400">status:</span>{" "}
                    <span className="text-amber-600 dark:text-amber-400">&quot;open_for_opportunities&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-600 dark:text-zinc-400">contact:</span>{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">&quot;rafihilalzahir@gmail.com&quot;</span>
                  </div>
                  <div>&#125; <span className="text-indigo-600 dark:text-indigo-400">as const</span>;</div>
                </div>
              ) : (
                <div className="font-mono text-[11.5px] leading-relaxed text-zinc-700 sm:text-xs dark:text-zinc-300">
                  <div className="text-zinc-400 dark:text-zinc-500">// architecture.config.ts</div>
                  <div>
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">export const</span>{" "}
                    <span className="font-bold text-zinc-900 dark:text-zinc-100">productionStack</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-600 dark:text-zinc-400">frontend:</span> [
                    <span className="text-emerald-600 dark:text-emerald-400">&quot;Next.js 16&quot;</span>,{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">&quot;React 19&quot;</span>,{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">&quot;TypeScript&quot;</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-600 dark:text-zinc-400">backend:</span> [
                    <span className="text-emerald-600 dark:text-emerald-400">&quot;Node.js&quot;</span>,{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">&quot;Express.js&quot;</span>,{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">&quot;Laravel&quot;</span>,{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">&quot;PostgreSQL&quot;</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-600 dark:text-zinc-400">standards:</span> [
                    <div className="pl-3 text-emerald-600 dark:text-emerald-400">&quot;WCAG 2.1 AA Accessibility&quot;,</div>
                    <div className="pl-3 text-emerald-600 dark:text-emerald-400">&quot;Sub-100ms Core Web Vitals&quot;,</div>
                    <div className="pl-3 text-emerald-600 dark:text-emerald-400">&quot;Modular Domain Architecture&quot;</div>
                    ]
                  </div>
                  <div>&#125; <span className="text-indigo-600 dark:text-indigo-400">as const</span>;</div>
                </div>
              )}
            </div>

            {/* Terminal Status Footer */}
            <div className="flex items-center justify-between border-t border-zinc-100 bg-zinc-50/80 px-4 py-2 font-mono text-[10px] text-zinc-500 dark:border-zinc-900 dark:bg-zinc-900/40 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>git:(main)</span>
                <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">|</span>
                <span className="hidden sm:inline">TypeScript 5.x</span>
              </div>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">100% strict</span>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Stats Bar with gap-px grid divider */}
      <section className="my-8">
        <div className="overflow-hidden rounded-2xl border border-zinc-200/90 bg-zinc-200/80 shadow-xs dark:border-zinc-800/90 dark:bg-zinc-800/80">
          <div className="grid grid-cols-2 gap-px lg:grid-cols-4">
            {statsList.map((stat, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-center bg-white/95 p-5 transition-all duration-200 hover:bg-zinc-50 sm:p-6 dark:bg-zinc-900/90 dark:hover:bg-zinc-800/60"
              >
                <p className="font-mono text-3xl font-extrabold tracking-tight text-zinc-900 transition-transform duration-200 group-hover:scale-105 sm:text-4xl dark:text-zinc-50">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-xs font-semibold tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorized Tech Stack Section */}
      <section className="py-12">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
            {t.techStack.title}
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {t.techStack.subtitle}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {categorizedStack.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.group}
                className="group rounded-2xl border border-zinc-200/80 bg-white/80 p-6 shadow-2xs backdrop-blur-xs transition-all duration-200 hover:-translate-y-1 hover:border-zinc-300 hover:bg-white hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200/80 bg-zinc-100 text-zinc-800 shadow-2xs dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {category.group}
                  </h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-zinc-200/70 bg-zinc-50/80 px-2.5 py-1 font-mono text-xs font-medium text-zinc-700 transition-colors group-hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-800/70 dark:text-zinc-300 dark:group-hover:border-zinc-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Projects Highlight Section */}
      <section className="py-12">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
              {t.featuredProjects.title}
            </h2>
            <p className="mt-1 max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {t.featuredProjects.subtitle}
            </p>
          </div>

          <Link
            href="/projects"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 transition-colors hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-300"
          >
            <span>{t.featuredProjects.viewAll}</span>
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
      <section className="relative my-12 overflow-hidden rounded-2xl border border-zinc-200/90 bg-zinc-900 p-8 text-white shadow-xl sm:p-12 dark:border-zinc-800/90 dark:bg-zinc-950">
        <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl space-y-2">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-zinc-50">
              {t.ctaBanner.title}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              {t.ctaBanner.description}
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-100 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white active:scale-95"
          >
            <span>{t.ctaBanner.button}</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
