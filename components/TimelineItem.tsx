import { Calendar, MapPin, Building2, CheckCircle2 } from "lucide-react";
import { Experience } from "@/data/portfolioData";

interface TimelineItemProps {
  experience: Experience;
  isLast?: boolean;
}

export default function TimelineItem({ experience, isLast = false }: TimelineItemProps) {
  return (
    <div className="group relative flex gap-6 sm:gap-8">
      {/* Left indicator line and node */}
      <div className="relative flex flex-col items-center">
        {/* Dot marker with micro-pulse on hover */}
        <div className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border-2 border-zinc-900 bg-white shadow-2xs transition-all duration-300 group-hover:scale-115 group-hover:border-zinc-700 dark:border-zinc-100 dark:bg-zinc-950 dark:group-hover:border-zinc-400">
          <div className="h-2 w-2 rounded-full bg-zinc-900 transition-all duration-300 group-hover:bg-zinc-600 dark:bg-zinc-100 dark:group-hover:bg-zinc-300" />
        </div>

        {/* Vertical connector line */}
        {!isLast && (
          <div className="w-[1.5px] grow bg-zinc-200 transition-colors duration-300 group-hover:bg-zinc-300 dark:bg-zinc-800 dark:group-hover:bg-zinc-700" />
        )}
      </div>

      {/* Content block */}
      <div className={`grow pb-10 ${isLast ? "pb-2" : ""}`}>
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <h3 className="text-base font-semibold tracking-tight text-zinc-900 transition-colors group-hover:text-zinc-700 dark:text-zinc-100 dark:group-hover:text-zinc-300">
              {experience.role}
            </h3>
            <div className="mt-0.5 flex flex-wrap items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <span className="flex items-center gap-1 font-medium text-zinc-800 dark:text-zinc-200">
                <Building2 className="h-3.5 w-3.5 text-zinc-400" />
                {experience.company}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
                <MapPin className="h-3 w-3 text-zinc-400" />
                {experience.location}
              </span>
            </div>
          </div>

          <div className="mt-1 flex items-center gap-2 sm:mt-0">
            <span className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50/80 px-2.5 py-0.5 font-mono text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-400">
              <Calendar className="h-3 w-3 text-zinc-400" />
              {experience.period}
            </span>
            <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
              {experience.type}
            </span>
          </div>
        </div>

        {/* Bullet points of responsibilities / achievements */}
        <ul className="mt-3.5 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
          {experience.responsibilities.map((resp, idx) => (
            <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
              <CheckCircle2 className="mt-1 h-3.5 w-3.5 shrink-0 text-zinc-400 transition-colors group-hover:text-zinc-600 dark:text-zinc-500 dark:group-hover:text-zinc-300" />
              <span>{resp}</span>
            </li>
          ))}
        </ul>

        {/* Skills applied */}
        {experience.skills && experience.skills.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {experience.skills.map((skill) => (
              <span
                key={skill}
                className="rounded border border-zinc-200/60 bg-zinc-50/80 px-2 py-0.5 text-[11px] text-zinc-500 transition-colors hover:border-zinc-300 hover:text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-200"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
