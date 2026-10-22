"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "id";

export interface Translations {
  nav: {
    home: string;
    projects: string;
    experience: string;
    education: string;
    contact: string;
    cta: string;
  };
  hero: {
    status: string;
    greeting: string;
    role: string;
    bio: string;
    viewProjects: string;
    contactMe: string;
  };
  stats: {
    experience: string;
    projects: string;
    clients: string;
    satisfaction: string;
  };
  techStack: {
    title: string;
    subtitle: string;
  };
  featuredProjects: {
    title: string;
    subtitle: string;
    viewAll: string;
  };
  ctaBanner: {
    title: string;
    description: string;
    button: string;
  };
  footer: {
    rights: string;
    builtWith: string;
  };
  contactPage: {
    title: string;
    description: string;
    infoTitle: string;
    infoSubtitle: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    submitting: string;
    successTitle: string;
    successDesc: string;
    successAction: string;
    sendAnother: string;
    copyEmail: string;
    copied: string;
    minMessageHint: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      experience: "Experience",
      education: "Education & Skills",
      contact: "Contact",
      cta: "Get in Touch",
    },
    hero: {
      status: "Available for new opportunities",
      greeting: "Hi, I'm",
      role: "Full Stack & Web Developer based in Bekasi, Indonesia",
      bio: "Software Engineer specializing in modern, high-performance web applications built with TypeScript, React, and Next.js. Driven by clean architecture, scalable systems, and meticulous user experience craft.",
      viewProjects: "View Projects",
      contactMe: "Get in Touch",
    },
    stats: {
      experience: "Years of Experience",
      projects: "Completed Projects",
      clients: "Teams & Clients",
      satisfaction: "Client Satisfaction",
    },
    techStack: {
      title: "Core Technologies",
      subtitle: "Primary languages, frameworks, and database engines I use to build scalable products.",
    },
    featuredProjects: {
      title: "Featured Projects",
      subtitle: "A selection of recent applications focused on solid architecture, speed, and real-world impact.",
      viewAll: "All Projects",
    },
    ctaBanner: {
      title: "Have a project or engineering role in mind?",
      description: "I'm always open to discussing new projects, high-impact engineering challenges, or joining forward-thinking teams.",
      button: "Let's Connect",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with Next.js & Tailwind CSS",
    },
    contactPage: {
      title: "Get in Touch",
      description: "Interested in discussing a new role, freelance project, or architectural challenge? Send me a message or reach out directly.",
      infoTitle: "Direct Channels",
      infoSubtitle: "Feel free to reach out via email or connect across professional platforms.",
      formTitle: "Send a Message",
      formSubtitle: "Fill out the details below to draft and dispatch an email directly to my inbox.",
      nameLabel: "Your Name",
      namePlaceholder: "e.g. Alex Morgan",
      emailLabel: "Your Email Address",
      emailPlaceholder: "alex@company.com",
      messageLabel: "Message / Project Brief",
      messagePlaceholder: "Describe your project scope, engineering role, or questions...",
      submitButton: "Send via Email",
      submitting: "Preparing dispatch...",
      successTitle: "Ready to Dispatch!",
      successDesc: "Your message has been formatted. If your email client didn't open automatically, use the direct actions below.",
      successAction: "Open in Mail Client",
      sendAnother: "Write Another Message",
      copyEmail: "Copy Email Address",
      copied: "Copied!",
      minMessageHint: "Please enter at least 10 characters.",
    },
  },
  id: {
    nav: {
      home: "Beranda",
      projects: "Proyek",
      experience: "Pengalaman",
      education: "Pendidikan & Keahlian",
      contact: "Kontak",
      cta: "Hubungi Saya",
    },
    hero: {
      status: "Terbuka untuk peluang baru",
      greeting: "Halo, saya",
      role: "Full Stack & Web Developer berbasis di Bekasi, Jawa Barat",
      bio: "Software Engineer yang berfokus pada pengembangan aplikasi web modern berbasis TypeScript, React, dan Next.js. Senang merancang sistem yang bersih, arsitektur scalable, dan pengalaman pengguna yang mulus.",
      viewProjects: "Lihat Proyek",
      contactMe: "Hubungi Saya",
    },
    stats: {
      experience: "Tahun Pengalaman",
      projects: "Proyek Selesai",
      clients: "Klien & Kolaborator",
      satisfaction: "Kepuasan Klien",
    },
    techStack: {
      title: "Teknologi Utama",
      subtitle: "Bahasa pemrograman, framework, dan database utama yang saya andalkan untuk membangun produk terukur.",
    },
    featuredProjects: {
      title: "Proyek Pilihan",
      subtitle: "Beberapa proyek pilihan terbaru yang berfokus pada arsitektur bersih, performa cepat, dan solusi nyata.",
      viewAll: "Semua Proyek",
    },
    ctaBanner: {
      title: "Punya ide proyek atau peluang kolaborasi?",
      description: "Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau peluang menjadi bagian dari tim Anda.",
      button: "Mari Terhubung",
    },
    footer: {
      rights: "Hak cipta dilindungi undang-undang.",
      builtWith: "Dibuat dengan Next.js & Tailwind CSS",
    },
    contactPage: {
      title: "Hubungi Saya",
      description: "Tertarik untuk mendiskusikan peluang kerja, proyek baru, atau tantangan rekayasa web? Silakan kirim pesan atau hubungi saya langsung.",
      infoTitle: "Informasi Kontak",
      infoSubtitle: "Jangan ragu untuk mengirim pesan melalui email atau terhubung di platform profesional.",
      formTitle: "Kirim Pesan",
      formSubtitle: "Isi formulir di bawah ini untuk mengirim pesan langsung ke inbox email saya.",
      nameLabel: "Nama Lengkap",
      namePlaceholder: "Contoh: Budi Santoso",
      emailLabel: "Alamat Email",
      emailPlaceholder: "budi@perusahaan.com",
      messageLabel: "Pesan / Brief Proyek",
      messagePlaceholder: "Tuliskan detail proyek, penawaran kerja, atau pertanyaan Anda di sini...",
      submitButton: "Kirim via Email",
      submitting: "Menyiapkan pesan...",
      successTitle: "Pesan Siap Dikirim!",
      successDesc: "Pesan Anda telah disiapkan. Jika aplikasi email Anda tidak terbuka otomatis, silakan gunakan tombol di bawah ini.",
      successAction: "Buka di Aplikasi Email",
      sendAnother: "Tulis Pesan Lain",
      copyEmail: "Salin Alamat Email",
      copied: "Tersalin!",
      minMessageHint: "Pesan minimal 10 karakter.",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_lang") as Language | null;
    if (saved === "en" || saved === "id") {
      setLanguageState(saved);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio_lang", lang);
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "id" : "en");
  };

  return (
    <LanguageContext.Provider
      value={{
        language: mounted ? language : "en",
        setLanguage,
        toggleLanguage,
        t: translations[mounted ? language : "en"],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
