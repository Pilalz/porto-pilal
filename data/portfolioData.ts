export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  category: "Web App" | "Mobile App" | "Full Stack" | "UI/UX";
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: "Full-time" | "Contract" | "Internship" | "Freelance";
  responsibilities: string[];
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  description: string;
  badgeType: "Certification" | "Award" | "Hackathon";
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  description: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level?: "Proficient" | "Advanced" | "Familiar" }[];
}

export const personalInfo = {
  name: "Rafi Hilal Zahir",
  shortName: "Rafi",
  role: "Full Stack & Web Developer",
  tagline: "Membangun antarmuka web modern, cepat, dan terukur dengan standar performa tinggi.",
  bio: "Saya adalah seorang Software Engineer yang berfokus pada pengembangan aplikasi web modern berbasis TypeScript, React, dan Next.js. Senang merancang sistem yang bersih, arsitektur scalable, dan pengalaman pengguna yang mulus.",
  location: "Bekasi, Indonesia",
  status: "Available for new opportunities",
  email: "rafihilalzahir@gmail.com",
  socials: {
    github: "https://github.com/Pilalz",
    linkedin: "https://linkedin.com/in/rafihilal",
    email: "mailto:rafihilalzahir@gmail.com",
  },
  stats: [
    { label: "Tahun Pengalaman", value: "3+" },
    { label: "Proyek Selesai", value: "20+" },
    { label: "Klien & Kolaborator", value: "12+" },
    { label: "Kepuasan Klien", value: "99%" },
  ],
};

export const featuredTechStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Git",
];

export const projectsData: Project[] = [
  {
    id: "omnicommerce",
    title: "OmniCommerce Platform",
    description: "Platform e-commerce modern dengan integrasi pembayaran real-time, manajemen inventaris, dan checkout teroptimasi.",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Stripe", "Prisma", "PostgreSQL"],
    category: "Full Stack",
    liveUrl: "https://example.com/omnicommerce",
    githubUrl: "https://github.com/Pilalz/omnicommerce",
    featured: true,
    year: "2024",
  },
  {
    id: "flowsync-dashboard",
    title: "FlowSync Analytics & Workspace",
    description: "Dashboard analitik kolaboratif untuk tim pengembang dengan visualisasi metrik performa dan pipeline deployment.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Supabase"],
    category: "Web App",
    liveUrl: "https://example.com/flowsync",
    githubUrl: "https://github.com/Pilalz/flowsync-dashboard",
    featured: true,
    year: "2024",
  },
  {
    id: "mindcanvas-ai",
    title: "MindCanvas AI Note Engine",
    description: "Aplikasi pencatatan berbasis markdown dengan asisten AI terintegrasi untuk perangkuman dokumen dan semantic search.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "Vector DB"],
    category: "Full Stack",
    liveUrl: "https://example.com/mindcanvas",
    githubUrl: "https://github.com/Pilalz/mindcanvas-ai",
    featured: true,
    year: "2023",
  },
  {
    id: "devpulse-api",
    title: "DevPulse Status Monitor",
    description: "Sistem monitoring uptime API real-time dengan notifikasi otomatis via Webhook Telegram dan Discord.",
    tags: ["Node.js", "TypeScript", "Express", "Redis", "Docker"],
    category: "Full Stack",
    liveUrl: "https://example.com/devpulse",
    githubUrl: "https://github.com/Pilalz/devpulse-status",
    featured: false,
    year: "2023",
  },
  {
    id: "zenith-ui",
    title: "Zenith Minimalist UI Kit",
    description: "Koleksi komponen UI aksesibel dan modular berbasis Tailwind CSS dan Radix Primitives.",
    tags: ["TypeScript", "Tailwind CSS", "React", "Storybook"],
    category: "UI/UX",
    liveUrl: "https://example.com/zenith-ui",
    githubUrl: "https://github.com/Pilalz/zenith-ui",
    featured: false,
    year: "2023",
  },
  {
    id: "rentalku-mobile",
    title: "RentalKu Vehicle Booking",
    description: "Aplikasi pemesanan sewa kendaraan berbasis mobile-first web dengan tracking lokasi dan integrasi midtrans.",
    tags: ["Next.js", "Tailwind CSS", "PWA", "Firebase"],
    category: "Web App",
    liveUrl: "https://example.com/rentalku",
    githubUrl: "https://github.com/Pilalz/rentalku",
    featured: false,
    year: "2022",
  },
];

export const experiencesData: Experience[] = [
  {
    id: "exp-1",
    role: "Full Stack Web Developer",
    company: "TechInovasi Digital Nusantara",
    companyUrl: "https://example.com",
    location: "Jakarta, Indonesia (Hybrid)",
    period: "Jan 2023 - Sekarang",
    type: "Full-time",
    responsibilities: [
      "Memimpin perancangan dan refactoring arsitektur frontend web portal enterprise menggunakan Next.js App Router dan TypeScript.",
      "Mengurangi waktu loading halaman utama sebesar 38% melalui optimasi SSR, streaming server components, dan dynamic code splitting.",
      "Membangun reusable component library internal yang diadopsi oleh 4 tim produk berbeda.",
      "Berkolaborasi erat dengan tim backend untuk mendesain RESTful dan GraphQL APIs yang efisien dan aman.",
    ],
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Docker", "REST API"],
  },
  {
    id: "exp-2",
    role: "Frontend Developer",
    company: "Sinergi Media Kreatif",
    companyUrl: "https://example.com",
    location: "Bandung, Indonesia (Remote)",
    period: "Agu 2021 - Des 2022",
    type: "Contract",
    responsibilities: [
      "Mengembangkan antarmuka responsif untuk lebih dari 10 proyek web klien korporat dengan tingkat kepatuhan standar WCAG AA.",
      "Mengintegrasikan CMS headless (Strapi) dan state management React Query untuk data caching yang konsisten.",
      "Mengimplementasikan automated testing menggunakan Jest dan React Testing Library, meningkatkan code coverage hingga 80%.",
    ],
    skills: ["React", "JavaScript", "Tailwind CSS", "REST API", "Git", "Figma"],
  },
  {
    id: "exp-3",
    role: "Software Engineering Intern",
    company: "Inovasi Piranti Solusindo",
    companyUrl: "https://example.com",
    location: "Jakarta, Indonesia (On-site)",
    period: "Feb 2021 - Jul 2021",
    type: "Internship",
    responsibilities: [
      "Membantu pengembangan modul dashboard internal analitik data karyawan menggunakan React dan Node.js.",
      "Menulis unit testing dan dokumentasi endpoint API untuk sistem autentikasi OAuth2.",
      "Melakukan debugging dan perbaikan berkala pada issue tracker Jira sprint mingguan.",
    ],
    skills: ["React", "Node.js", "Express", "MySQL", "Git"],
  },
];

export const achievementsData: Achievement[] = [
  {
    id: "ach-1",
    title: "Meta Frontend Developer Professional Certificate",
    issuer: "Meta / Coursera",
    date: "Desember 2023",
    credentialUrl: "https://coursera.org",
    description: "Sertifikasi profesional komprehensif yang mencakup React, JavaScript tingkat lanjut, UX design principles, dan Version Control.",
    badgeType: "Certification",
  },
  {
    id: "ach-2",
    title: "Juara 1 Hackathon Nasional Inovasi Digital",
    issuer: "Kemenkominfo & TechHub ID",
    date: "Oktober 2023",
    credentialUrl: "https://example.com/hackathon",
    description: "Mengembangkan solusi web real-time agrikultur pintar yang menghubungkan petani lokal langsung dengan distributor tanpa perantara.",
    badgeType: "Hackathon",
  },
  {
    id: "ach-3",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "Juni 2023",
    credentialUrl: "https://aws.amazon.com/verification",
    description: "Validasi pemahaman menyeluruh tentang infrastruktur cloud AWS, keamanan, arsitektur dasar, dan model deployment.",
    badgeType: "Certification",
  },
  {
    id: "ach-4",
    title: "Best Graduation Project Award",
    issuer: "Fakultas Ilmu Komputer",
    date: "September 2022",
    credentialUrl: "https://example.com/award",
    description: "Penghargaan skripsi terbaik dalam kategori implementasi sistem terdistribusi dan komputasi awan.",
    badgeType: "Award",
  },
];

export const educationData: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Sarjana Komputer (S.Kom) - Teknik Informatika",
    institution: "Universitas Indonesia",
    location: "Depok, Indonesia",
    period: "2018 - 2022",
    gpa: "3.84 / 4.00 (Cum Laude)",
    description: "Fokus pada Rekayasa Perangkat Lunak, Sistem Basis Data, Arsitektur Web, dan Algoritma Struktur Data.",
    highlights: [
      "Koordinator Asisten Laboratorium Rekayasa Perangkat Lunak (2020-2021)",
      "Ketua Divisi Web Development pada Komunitas Mahasiswa IT",
      "Mempublikasikan paper terkait optimasi cache pada web application di konferensi mahasiswa nasional",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Bahasa Pemrograman",
    description: "Bahasa utama yang digunakan dalam pengembangan frontend, backend, dan scripting.",
    skills: [
      { name: "TypeScript", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "HTML5 & Semantic UI", level: "Advanced" },
      { name: "CSS3 / Modern Styling", level: "Advanced" },
      { name: "SQL", level: "Proficient" },
      { name: "Python", level: "Familiar" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    description: "Ekosistem frontend dan backend modern untuk membangun aplikasi web cepat dan skalabel.",
    skills: [
      { name: "Next.js (App Router)", level: "Advanced" },
      { name: "React.js", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Node.js & Express", level: "Proficient" },
      { name: "Prisma ORM", level: "Proficient" },
      { name: "Zustand & Redux", level: "Proficient" },
    ],
  },
  {
    title: "Database & Backend Services",
    description: "Penyimpanan data relasional dan non-relasional serta layanan cloud pendukung.",
    skills: [
      { name: "PostgreSQL", level: "Proficient" },
      { name: "MySQL", level: "Proficient" },
      { name: "MongoDB", level: "Familiar" },
      { name: "Supabase", level: "Proficient" },
      { name: "Redis", level: "Familiar" },
      { name: "RESTful APIs", level: "Advanced" },
    ],
  },
  {
    title: "Tools & Workflow",
    description: "Peralatan kerja sehari-hari untuk version control, testing, container, dan deployment.",
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Docker", level: "Familiar" },
      { name: "Vercel", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
      { name: "Figma (Handoff & UI)", level: "Proficient" },
      { name: "Postman", level: "Proficient" },
    ],
  },
];
