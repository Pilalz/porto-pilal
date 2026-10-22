"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { personalInfo } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();

  const footerLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.projects, href: "/projects" },
    { label: t.nav.experience, href: "/experience" },
    { label: t.nav.education, href: "/education" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <footer className="mt-auto border-t border-zinc-200/80 bg-white/50 dark:border-zinc-800/80 dark:bg-zinc-950/50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Left info */}
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <p className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              {personalInfo.name}
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              {personalInfo.role} • {language === "en" ? "Bekasi, Indonesia" : personalInfo.location}
            </p>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-zinc-600 dark:text-zinc-400">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-zinc-900 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 dark:hover:text-zinc-100 dark:focus-visible:ring-zinc-600"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Socials */}
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[36px] min-w-[36px] items-center justify-center rounded-lg p-2 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100 dark:focus-visible:ring-zinc-600"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[36px] min-w-[36px] items-center justify-center rounded-lg p-2 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100 dark:focus-visible:ring-zinc-600"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href={personalInfo.socials.email}
              className="inline-flex min-h-[36px] min-w-[36px] items-center justify-center rounded-lg p-2 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100 dark:focus-visible:ring-zinc-600"
              aria-label="Send Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 flex flex-col items-center justify-between border-t border-zinc-100 pt-6 text-center text-xs text-zinc-400 sm:flex-row dark:border-zinc-900 dark:text-zinc-500">
          <p>© {currentYear} {personalInfo.name}. {t.footer.rights}</p>
          <p className="mt-2 flex items-center gap-1 sm:mt-0">
            {t.footer.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
}
