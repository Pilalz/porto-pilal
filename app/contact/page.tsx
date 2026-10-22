"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { personalInfo } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [msgCopied, setMsgCopied] = useState(false);

  const maxChars = 2000;
  const charsRemaining = maxChars - formData.message.length;

  const constructMailtoUrl = (name: string, email: string, message: string) => {
    const subject = encodeURIComponent(`[Portfolio Inquiry] From ${name.trim()}`);
    const body = encodeURIComponent(
      `Hello Rafi,\n\nMy name is ${name.trim()} (${email.trim()}).\n\n${message.trim()}\n\nBest regards,\n${name.trim()}`
    );
    return `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || formData.message.trim().length < 10) {
      return;
    }

    setLoading(true);

    const mailtoUrl = constructMailtoUrl(
      formData.name,
      formData.email,
      formData.message
    );

    // Launch default email client
    try {
      window.location.href = mailtoUrl;
    } catch {
      // Fallback window open
      window.open(mailtoUrl, "_blank");
    }

    // Set state to confirmation with recovery options
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 400);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(formData.message);
    setMsgCopied(true);
    setTimeout(() => setMsgCopied(false), 2000);
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      {/* Page Header */}
      <div className="space-y-3">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
          {t.contactPage.title}
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
          {t.contactPage.description}
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
        {/* Left Column: Direct Contact Channels & Proof */}
        <div className="space-y-4 lg:col-span-5">
          <div className="rounded-2xl border border-zinc-200/90 bg-white/90 p-6 shadow-2xs backdrop-blur-xs sm:p-7 dark:border-zinc-800/90 dark:bg-zinc-900/60">
            <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
              {t.contactPage.infoTitle}
            </h2>
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              {t.contactPage.infoSubtitle}
            </p>

            <div className="mt-6 space-y-3.5">
              {/* Direct Email Card with 1-Click Copy */}
              <div className="group flex items-center justify-between gap-3 rounded-xl border border-zinc-200/80 bg-zinc-50/70 p-3.5 transition-all hover:border-zinc-300 hover:bg-zinc-100/70 dark:border-zinc-800/80 dark:bg-zinc-800/40 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/70">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex min-w-0 flex-1 items-center gap-3 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200/80 bg-white text-zinc-700 shadow-2xs dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold text-zinc-500 uppercase dark:text-zinc-400">
                      Email
                    </p>
                    <p className="truncate text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex min-h-[38px] min-w-[38px] shrink-0 items-center justify-center rounded-lg border border-zinc-200/80 bg-white p-2 text-zinc-600 shadow-2xs transition-all hover:bg-zinc-50 hover:text-zinc-900 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 active:scale-95 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-zinc-100"
                  aria-label={emailCopied ? "Email copied" : "Copy email address"}
                  title={emailCopied ? t.contactPage.copied : t.contactPage.copyEmail}
                >
                  {emailCopied ? (
                    <Check className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-zinc-200/80 bg-zinc-50/70 p-3.5 transition-all hover:border-zinc-300 hover:bg-zinc-100/70 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 dark:border-zinc-800/80 dark:bg-zinc-800/40 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/70"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200/80 bg-white text-zinc-700 shadow-2xs dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    <LinkedinIcon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold text-zinc-500 uppercase dark:text-zinc-400">
                      LinkedIn
                    </p>
                    <p className="truncate text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      linkedin.com/in/rafihilal
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-zinc-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-zinc-700 dark:group-hover:text-zinc-200" />
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-zinc-200/80 bg-zinc-50/70 p-3.5 transition-all hover:border-zinc-300 hover:bg-zinc-100/70 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 dark:border-zinc-800/80 dark:bg-zinc-800/40 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/70"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200/80 bg-white text-zinc-700 shadow-2xs dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    <GithubIcon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold text-zinc-500 uppercase dark:text-zinc-400">
                      GitHub
                    </p>
                    <p className="truncate text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      github.com/Pilalz
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-zinc-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-zinc-700 dark:group-hover:text-zinc-200" />
              </a>

              {/* Location Badge */}
              <div className="flex items-center gap-3 rounded-xl border border-zinc-200/80 bg-zinc-50/70 p-3.5 dark:border-zinc-800/80 dark:bg-zinc-800/40">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200/80 bg-white text-zinc-700 shadow-2xs dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-zinc-500 uppercase dark:text-zinc-400">
                    {language === "en" ? "Location" : "Lokasi"}
                  </p>
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {language === "en" ? "Bekasi, West Java, Indonesia" : personalInfo.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Hardened Form & Action Hub */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-zinc-200/90 bg-white/90 p-6 shadow-2xs backdrop-blur-xs sm:p-8 dark:border-zinc-800/90 dark:bg-zinc-900/60">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
              {t.contactPage.formTitle}
            </h2>
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              {t.contactPage.formSubtitle}
            </p>

            {submitted ? (
              /* Hardened Confirmation State: Never Loses User Data */
              <div className="mt-6 flex flex-col items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50/50 p-6 text-center sm:p-8 dark:border-emerald-900/50 dark:bg-emerald-950/20">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-bold text-zinc-900 dark:text-zinc-100">
                  {t.contactPage.successTitle}
                </h3>
                <p className="mt-1.5 max-w-md text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {t.contactPage.successDesc}
                </p>

                {/* Direct Action Hub */}
                <div className="mt-6 flex w-full max-w-sm flex-col gap-2.5">
                  <a
                    href={constructMailtoUrl(formData.name, formData.email, formData.message)}
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-zinc-900 px-4 py-2.5 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-zinc-800 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>{t.contactPage.successAction}</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-xs font-medium text-zinc-800 shadow-2xs transition-colors hover:bg-zinc-50 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
                  >
                    {msgCopied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                    <span>{msgCopied ? t.contactPage.copied : "Copy Formatted Message"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="mt-2 text-xs font-medium text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
                  >
                    {t.contactPage.sendAnother}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold text-zinc-800 dark:text-zinc-200"
                  >
                    {t.contactPage.nameLabel} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    minLength={2}
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder={t.contactPage.namePlaceholder}
                    className="mt-1.5 w-full rounded-lg border border-zinc-200 bg-white px-3.5 py-2.5 text-base sm:text-sm text-zinc-900 shadow-2xs placeholder:text-zinc-400 focus:border-zinc-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-zinc-600 dark:focus-visible:ring-zinc-600"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-zinc-800 dark:text-zinc-200"
                  >
                    {t.contactPage.emailLabel} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder={t.contactPage.emailPlaceholder}
                    className="mt-1.5 w-full rounded-lg border border-zinc-200 bg-white px-3.5 py-2.5 text-base sm:text-sm text-zinc-900 shadow-2xs placeholder:text-zinc-400 focus:border-zinc-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-zinc-600 dark:focus-visible:ring-zinc-600"
                  />
                </div>

                {/* Message Body */}
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-zinc-800 dark:text-zinc-200"
                    >
                      {t.contactPage.messageLabel} <span className="text-rose-500">*</span>
                    </label>
                    <span
                      className={`text-[11px] font-mono ${
                        charsRemaining < 100
                          ? "text-amber-600 font-semibold dark:text-amber-400"
                          : "text-zinc-400 dark:text-zinc-500"
                      }`}
                    >
                      {formData.message.length}/{maxChars}
                    </span>
                  </div>
                  <textarea
                    id="message"
                    required
                    minLength={10}
                    maxLength={maxChars}
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder={t.contactPage.messagePlaceholder}
                    className="mt-1.5 w-full rounded-lg border border-zinc-200 bg-white px-3.5 py-2.5 text-base sm:text-sm text-zinc-900 shadow-2xs placeholder:text-zinc-400 focus:border-zinc-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-zinc-600 dark:focus-visible:ring-zinc-600"
                  />
                  {formData.message.length > 0 && formData.message.length < 10 && (
                    <p className="mt-1 text-[11px] text-amber-600 dark:text-amber-400">
                      {t.contactPage.minMessageHint}
                    </p>
                  )}
                </div>

                {/* Submit Trigger with Loading State */}
                <button
                  type="submit"
                  disabled={loading || formData.message.length < 10}
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-zinc-800 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 active:scale-95 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus-visible:ring-zinc-600"
                >
                  {loading ? (
                    <span>{t.contactPage.submitting}</span>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>{t.contactPage.submitButton}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
