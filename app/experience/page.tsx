import { Briefcase, Award, ExternalLink, Calendar } from "lucide-react";
import TimelineItem from "@/components/TimelineItem";
import { experiencesData, achievementsData } from "@/data/portfolioData";

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      {/* Header */}
      <div className="animate-fade-in-up space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          <Briefcase className="h-3.5 w-3.5" />
          <span>Riwayat Karir</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
          Experience & Achievements
        </h1>
        <p className="max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
          Perjalanan karir profesional saya di bidang software engineering, kontribusi tim, serta sertifikasi dan pencapaian yang telah diraih.
        </p>
      </div>

      {/* Work Experience Section with Vertical Timeline */}
      <section className="animate-fade-in-up mt-12 [animation-delay:100ms]">
        <h2 className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-100">
          Pengalaman Kerja & Magang
        </h2>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          Ringkasan peran profesional, tanggung jawab, dan dampak teknologi yang diberikan.
        </p>

        <div className="mt-8">
          {experiencesData.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              experience={exp}
              isLast={index === experiencesData.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Certifications & Achievements Section */}
      <section className="animate-fade-in-up mt-16 border-t border-zinc-200/80 pt-12 [animation-delay:200ms] dark:border-zinc-800/80">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          <Award className="h-3.5 w-3.5" />
          <span>Kredensial & Rekognisi</span>
        </div>
        <h2 className="mt-1 text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-100">
          Sertifikasi & Penghargaan
        </h2>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          Validasi kompetensi industri, sertifikasi internasional, dan kompetisi yang dimenangkan.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between rounded-xl border border-zinc-200/80 bg-white/80 p-5 shadow-2xs backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-zinc-700"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-300">
                    {item.badgeType}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-xs text-zinc-400">
                    <Calendar className="h-3 w-3" />
                    {item.date}
                  </span>
                </div>

                <h3 className="mt-3 text-base font-semibold text-zinc-900 transition-colors group-hover:text-zinc-700 dark:text-zinc-100 dark:group-hover:text-zinc-300">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  {item.issuer}
                </p>

                <p className="mt-2.5 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </div>

              {item.credentialUrl && (
                <div className="mt-4 border-t border-zinc-100 pt-3 dark:border-zinc-800/60">
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-zinc-800 transition-colors hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-400"
                  >
                    <span>Lihat Sertifikat</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
