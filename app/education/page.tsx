import { GraduationCap, BookOpen, Layers, CheckCircle2 } from "lucide-react";
import { educationData, skillCategories } from "@/data/portfolioData";

export default function EducationPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      {/* Header */}
      <div className="animate-fade-in-up space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          <GraduationCap className="h-3.5 w-3.5" />
          <span>Latar Belakang</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
          Education & Skills
        </h1>
        <p className="max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
          Fondasi akademis serta kapabilitas teknis yang dikembangkan melalui studi formal, eksplorasi mandiri, dan penerapan proyek nyata.
        </p>
      </div>

      {/* Education History Section */}
      <section className="animate-fade-in-up mt-12 [animation-delay:100ms]">
        <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          <BookOpen className="h-4 w-4" />
          <span>Riwayat Pendidikan</span>
        </div>
        <h2 className="mt-1 text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-100">
          Pendidikan Formal
        </h2>

        <div className="mt-6 space-y-6">
          {educationData.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-zinc-200/80 bg-white/80 p-6 shadow-2xs backdrop-blur-xs transition-all duration-300 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-zinc-700"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    {item.degree}
                  </h3>
                  <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    {item.institution} • <span className="text-zinc-500">{item.location}</span>
                  </p>
                </div>
                <div className="mt-1 flex items-center gap-2 sm:mt-0">
                  <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                    {item.period}
                  </span>
                  {item.gpa && (
                    <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-semibold text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                      GPA: {item.gpa}
                    </span>
                  )}
                </div>
              </div>

              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>

              {item.highlights && item.highlights.length > 0 && (
                <div className="mt-4 border-t border-zinc-100 pt-4 dark:border-zinc-800/60">
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Aktivitas & Penghargaan:
                  </p>
                  <ul className="mt-2 space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                    {item.highlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-zinc-400" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills Grouping Section */}
      <section className="animate-fade-in-up mt-16 border-t border-zinc-200/80 pt-12 [animation-delay:200ms] dark:border-zinc-800/80">
        <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          <Layers className="h-4 w-4" />
          <span>Keahlian & Penguasaan</span>
        </div>
        <h2 className="mt-1 text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-100">
          Skills & Tech Stack
        </h2>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          Pengelompokan keahlian teknis berdasarkan bidang spesialisasi.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group flex flex-col rounded-xl border border-zinc-200/80 bg-white/80 p-6 shadow-2xs backdrop-blur-xs transition-all duration-300 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-zinc-700"
            >
              <h3 className="text-base font-semibold text-zinc-900 transition-colors group-hover:text-zinc-700 dark:text-zinc-100 dark:group-hover:text-zinc-300">
                {category.title}
              </h3>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                {category.description}
              </p>

              {/* Skills Badges with micro-hover effect */}
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/pill inline-flex items-center gap-1.5 rounded-lg border border-zinc-200/90 bg-zinc-50/90 px-2.5 py-1 text-xs font-medium text-zinc-700 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-white hover:shadow-xs active:scale-95 dark:border-zinc-800 dark:bg-zinc-800/70 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"
                  >
                    <span>{skill.name}</span>
                    {skill.level && (
                      <span className="text-[10px] text-zinc-400 dark:text-zinc-500">
                        ({skill.level})
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
