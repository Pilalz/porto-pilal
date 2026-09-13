"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { personalInfo } from "@/data/portfolioData";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending message
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 800);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          <MessageSquare className="h-3.5 w-3.5" />
          <span>Komunikasi & Kolaborasi</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
          Contact Me
        </h1>
        <p className="max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
          Tertarik untuk mendiskusikan proyek baru, penawaran kerja, atau sekadar bertukar sapa seputar teknologi? Silakan hubungi saya melalui jalur berikut.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
        {/* Left Column: Contact Cards & Info */}
        <div className="space-y-4 lg:col-span-5">
          <div className="rounded-xl border border-zinc-200/80 bg-white p-6 shadow-2xs dark:border-zinc-800/80 dark:bg-zinc-900/60">
            <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
              Informasi Kontak
            </h2>
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              Jangan ragu untuk mengirim pesan melalui email atau terhubung di platform profesional.
            </p>

            <div className="mt-6 space-y-4">
              {/* Email */}
              <a
                href={personalInfo.socials.email}
                className="group flex items-center gap-3.5 rounded-lg border border-zinc-100 p-3 transition-colors hover:border-zinc-200 hover:bg-zinc-50 dark:border-zinc-800/80 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/50"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Email</p>
                  <p className="truncate text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3.5 rounded-lg border border-zinc-100 p-3 transition-colors hover:border-zinc-200 hover:bg-zinc-50 dark:border-zinc-800/80 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/50"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  <LinkedinIcon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">LinkedIn</p>
                  <p className="truncate text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    linkedin.com/in/rafipilal
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3.5 rounded-lg border border-zinc-100 p-3 transition-colors hover:border-zinc-200 hover:bg-zinc-50 dark:border-zinc-800/80 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/50"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  <GithubIcon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">GitHub</p>
                  <p className="truncate text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    github.com/Pilalz
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3.5 rounded-lg border border-zinc-100 p-3 dark:border-zinc-800/80">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Lokasi</p>
                  <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Message Form */}
        <div className="lg:col-span-7">
          <div className="rounded-xl border border-zinc-200/80 bg-white p-6 shadow-2xs sm:p-8 dark:border-zinc-800/80 dark:bg-zinc-900/60">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Kirim Pesan Singkat
            </h2>
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              Isi formulir di bawah ini dan saya akan membalas pesan Anda secepatnya.
            </p>

            {submitted ? (
              <div className="mt-6 flex flex-col items-center justify-center rounded-lg border border-emerald-200 bg-emerald-50/60 p-8 text-center dark:border-emerald-900/50 dark:bg-emerald-950/20">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  Pesan Berhasil Terkirim!
                </h3>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                  Terima kasih sudah menghubungi. Saya akan segera membalas ke email Anda.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-5 rounded-lg bg-zinc-900 px-4 py-2 text-xs font-medium text-white shadow-2xs hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Contoh: John Doe"
                    className="mt-1.5 w-full rounded-lg border border-zinc-200 bg-white px-3.5 py-2 text-sm text-zinc-900 shadow-2xs placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-hidden focus:ring-1 focus:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-zinc-600 dark:focus:ring-zinc-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="nama@domain.com"
                    className="mt-1.5 w-full rounded-lg border border-zinc-200 bg-white px-3.5 py-2 text-sm text-zinc-900 shadow-2xs placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-hidden focus:ring-1 focus:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-zinc-600 dark:focus:ring-zinc-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tuliskan pesan, penawaran proyek, atau pertanyaan Anda di sini..."
                    className="mt-1.5 w-full rounded-lg border border-zinc-200 bg-white px-3.5 py-2 text-sm text-zinc-900 shadow-2xs placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-hidden focus:ring-1 focus:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-zinc-600 dark:focus:ring-zinc-600"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-xs transition-colors hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  {loading ? (
                    <span>Mengirim...</span>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Kirim Pesan</span>
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
