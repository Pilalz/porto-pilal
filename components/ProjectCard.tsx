import { ExternalLink, FolderGit2 } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { Project } from "@/data/portfolioData";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col justify-between rounded-xl border border-zinc-200/80 bg-white/80 p-6 shadow-2xs backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-200/40 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-zinc-700 dark:hover:shadow-zinc-950/60">
      <div>
        {/* Top Header: Category & Year */}
        <div className="flex items-center justify-between gap-2 text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-1.5 font-medium text-zinc-700 dark:text-zinc-300">
            <FolderGit2 className="h-3.5 w-3.5 text-zinc-400 transition-transform duration-200 group-hover:scale-110" />
            <span>{project.category}</span>
          </div>
          <span className="font-mono text-[11px] text-zinc-400">{project.year}</span>
        </div>

        {/* Title */}
        <h3 className="mt-3 text-lg font-semibold tracking-tight text-zinc-900 transition-colors group-hover:text-zinc-700 dark:text-zinc-100 dark:group-hover:text-zinc-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>

        {/* Tech Stack Badges with micro-hover */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-zinc-200/80 bg-zinc-50/90 px-2 py-0.5 font-mono text-[11px] font-medium text-zinc-600 transition-all duration-150 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Links */}
      <div className="mt-6 flex items-center gap-3 border-t border-zinc-100 pt-4 dark:border-zinc-800/60">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-1.5 text-xs font-medium text-zinc-900 transition-all duration-150 hover:text-zinc-600 active:scale-95 dark:text-zinc-100 dark:hover:text-zinc-300"
          >
            <span>Live Demo</span>
            <ExternalLink className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 transition-all duration-150 hover:text-zinc-900 active:scale-95 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            <GithubIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:scale-110" />
            <span>Repository</span>
          </a>
        )}
      </div>
    </div>
  );
}
