export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  category: "Web App" | "Mobile App" | "UI/UX" ;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: string;
  imageUrl?: string;
  images?: string[];
  videoUrl?: string;
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
  badgeType: "Certification" | "Award" | "Competition";
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
  location: "Bekasi, Jawa Barat",
  status: "Available for new opportunities",
  email: "rafihilalzahir@gmail.com",
  socials: {
    github: "https://github.com/Pilalz",
    linkedin: "https://linkedin.com/in/rafihilal",
    email: "mailto:rafihilalzahir@gmail.com",
  },
  stats: [
    { label: "Tahun Pengalaman", value: "1+" },
    { label: "Proyek Selesai", value: "7+" },
    { label: "Klien & Kolaborator", value: "3+" },
    { label: "Kepuasan Klien", value: "99%" },
  ],
};

export const featuredTechStack = [
  "Laravel",
  "Next.js",
  "Express.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "SQL Server",
  "Git",
];

export const projectsData: Project[] = [
  {
    id: "prj-9",
    title: "Meeting Ticketing System",
    description: 
    `
    Guest Ticketing System fullstack berbasis 3 aplikasi terpisah (REST API backend, dashboard admin, dan portal direktur) dengan manajemen lifecycle 
    tiket end-to-end dan konfigurasi CORS per-origin. Dilengkapi validasi past-datetime, statistik harian, serta dashboard direktur interaktif (React + Vite) 
    bergaya Google Calendar dengan auto-polling untuk sinkronisasi data real-time.
    `,
    tags: ["React", "Node.js", "Express.js", "PostgreSQL", "Next.js", "Vite", "Tailwind CSS", "Lucide Icons", "Rest API"],
    category: "Web App",
    liveUrl: "#",
    githubUrl: "https://github.com/Pilalz/ticketing-admin-frontend",
    featured: true,
    year: "2026",
    images: [
      "/projects/ticketing/1.png",
      "/projects/ticketing/2.png",
      "/projects/ticketing/3.png",
      "/projects/ticketing/4.png"
    ],
  },
  {
    id: "prj-8",
    title: "Mail Tracker",
    description: 
    `
    Sistem Manajemen Surat berbasis Filament Panel dengan fitur live camera capture, RBAC, audit trail, dan private storage streaming berpassword.
     Dioptimalkan menggunakan asynchronous database queue untuk memangkas latensi form submission dari ~6 detik menjadi <500 ms (>90% lebih cepat) 
     serta mengeliminasi 100% orphaned files via cascade cleanup.
    `,
    tags: ["Laravel", "Filament", "PHP", "Livewire", "Alpine.js", "Tailwind CSS", "PostgreSQL", "PHPUnit"],
    category: "Web App",
    liveUrl: "#",
    githubUrl: "https://github.com/Pilalz/arsip-surat",
    featured: true,
    year: "2026",
    images: [
      "/projects/arsip-surat/1.png",
      "/projects/arsip-surat/2.png",
      "/projects/arsip-surat/3.png",
      "/projects/arsip-surat/4.png",
      "/projects/arsip-surat/5.png"
    ],
  },
  {
    id: "prj-7",
    title: "Greenhouse",
    description: "Portal showcase modern Teaching Factory Greenhouse SV IPB dengan integrasi teknologi Smart Agriculture 4.0, katalog produk riset, dan layanan pelatihan agribisnis.",
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Web App",
    liveUrl: "#",
    githubUrl: "https://github.com/Pilalz/greenhouse-web",
    featured: false,
    year: "2026",
    images: [
      "/projects/greenhouse/img1.png",
      "/projects/greenhouse/img2.png",
      "/projects/greenhouse/img3.png",
      "/projects/greenhouse/img4.png",
      "/projects/greenhouse/img5.png"
    ],
  },
  {
    id: "prj-6",
    title: "Asset Management",
    description: 
    `
    Sistem Manajemen Aset Multi-Tenant berbasis Laravel untuk kalkulasi depresiasi (komersial & fiskal) dengan pelaporan real-time via SSE dan Redis 
    Queue Batching. Dilengkapi Redis distributed lock, isolasi data global scope, dan audit trail, serta dioptimalkan via in-memory grouping dan bulk 
    insert yang memangkas waktu proses dari 5 hari kerja menjadi <3 menit (>99% efisiensi).
    `,
    tags: ["Laravel", "Tailwind CSS", "PHP", "Node.js", "Redis", "PostgreSQL"],
    category: "Web App",
    liveUrl: "#",
    githubUrl: "https://github.com/Pilalz/asset-management",
    featured: true,
    year: "2025",
    images: [
      "/projects/am/1.png",
      "/projects/am/2.png",
      "/projects/am/3.png",
      "/projects/am/4.png",
      "/projects/am/5.png"
    ],
  },
  {
    id: "prj-5",
    title: "RSUD Sindangbarang",
    description: 
    `
    Portal showcase RSUD Sindangbarang berbasis Laravel dan MySQL yang mencakup 12+ modul operasional dengan proteksi RBAC bertingkat dan disk 
    cleanup otomatis untuk memblokir orphan files. Dioptimalkan lewat Eloquent Eager Loading yang memangkas query database hingga ~65% serta 
    agregasi data langsung yang menjaga latensi dashboard di bawah 200 ms.
    `,
    tags: ["Laravel", "PHP", "Bootstrap", "MySQL", "JavaScript"],
    category: "Web App",
    liveUrl: "#",
    githubUrl: "https://github.com/Pilalz/Website_RS-Sindangbarang",
    featured: false,
    year: "2025",
    images: [
      "/projects/rsud/1.png",
      "/projects/rsud/2.png",
      "/projects/rsud/3.png"
    ],
  },
  {
    id: "prj-4",
    title: "Toko Susu Bahagia",
    description: 
    `
    Platform e-commerce kebutuhan bayi dan manajemen inventaris berbasis Laravel 11 & MySQL dengan transaksi atomik, alokasi stok FEFO otomatis, 
    pelacakan pesanan berbasis UUID, serta notifikasi WhatsApp asinkron via Fonnte API. Dioptimalkan lewat Eager Loading yang memangkas eksekusi 
    query hingga ~75% serta fitur ekspor laporan PDF instan (< 2 detik).
    `,
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap", "Foonte API"],
    category: "Web App",
    liveUrl: "#",
    githubUrl: "https://github.com/Pilalz/Website-E-Comerce-Toko-Susu-Bahagia-",
    featured: false,
    year: "2024",
    images: [
      "/projects/tsb/1.png",
      "/projects/tsb/2.png",
      "/projects/tsb/3.png",
      "/projects/tsb/4.png",
      "/projects/tsb/5.png",
      "/projects/tsb/6.png",
      "/projects/tsb/7.png",
      "/projects/tsb/8.png",
      "/projects/tsb/9.png",
      "/projects/tsb/10.png",
      "/projects/tsb/11.png"
    ],
  },
  {
    id: "prj-3",
    title: "Verdant Coffee",
    description: 
    `
    Aplikasi web POS dan self-ordering restoran (QR meja) berbasis Laravel & MySQL dengan katalog menu hierarkis, RBAC multi-role, serta 
    keranjang belanja berbasis HTTP session yang meniadakan 100% database write overhead sebelum checkout. Dioptimalkan lewat agregasi 
    query SQL yang memangkas konsumsi memori server sebesar ~35% serta penerapan standardisasi PSR-12 untuk menjamin konsistensi dan 
    integritas data transaksi.
    `,
    tags: ["Laravel", "PHP", "Bootstrap", "MySQL", "JavaScript"],
    category: "Web App",
    liveUrl: "#",
    githubUrl: "https://github.com/Pilalz/verdant",
    featured: false,
    year: "2023",
    images: [
      "/projects/verdant/1.png",
      "/projects/verdant/2.png",
      "/projects/verdant/3.png",
      "/projects/verdant/4.png",
      "/projects/verdant/5.png"
    ],
  },
  {
    id: "prj-2",
    title: "KRAFS Mobile Apps",
    description: 
    `
    Aplikasi mobile Android (Java, Volley, MongoDB Atlas) untuk katalog produk kopi dan keranjang belanja dinamis yang terintegrasi 
    dengan AI Chatbot via OpenAI API. Dioptimalkan menggunakan caching Picasso dan ConstraintLayout pada RecyclerView yang memangkas 
    waktu muat gambar hingga 45% (mencapai 60 FPS scrolling), serta dilengkapi manajemen sesi SharedPreferences, ViewBinding, dan 
    penanganan error terpusat guna mencegah runtime crash.
    `,
    tags: ["Java", "Android SDK", "MongoDB", "AI", "OpenAI API"],
    category: "Mobile App",
    liveUrl: "#",
    githubUrl: "https://github.com/Pilalz/KRAFS-MOBILE",
    featured: false,
    year: "2023",
    images: [
      "/projects/krafs/1.png",
      "/projects/krafs/2.png",
      "/projects/krafs/3.png",
      "/projects/krafs/4.png",
      "/projects/krafs/5.png"
    ],
  },
  {
    id: "prj-1",
    title: "FlexiPay",
    description: "Portal showcase modern untuk implementasi sistem pembayaran digital dengan berbagai metode pembayaran.",
    tags: ["Figma", "UI/UX"],
    category: "UI/UX",
    liveUrl: "https://youtu.be/9xah45t_4YA?feature=shared",
    githubUrl: "https://www.figma.com/design/O0lEbEWglWTvTc9jP1vT6z/KRRAN?node-id=7-4&t=6xDLgBqMQ30TaW9W-1",
    featured: false,
    year: "2023",
    images: [
      "/projects/flexipay/1.png",
      "/projects/flexipay/2.png"
    ],
  },
];

export const experiencesData: Experience[] = [
  {
    id: "exp-1",
    role: "Digital Marketing",
    company: "Digiclass Indonesia",
    companyUrl: "https://www.instagram.com/digiclass_indonesia/",
    location: "Bekasi, Indonesia (Remote)",
    period: "Agustus 2021 - November 2021",
    type: "Internship",
    responsibilities: [
      "Mengelola akun media sosial perusahaan dan membuat konten yang menarik",
      "Mempromosikan produk perusahaan melalui media sosial",
    ],
    skills: ["Wordpress", "Canva", "Digital Marketing", "Social Media Management"],
  },
  {
    id: "exp-2",
    role: "ICT Support",
    company: "PT Bagas Bumi Persada",
    companyUrl: "https://www.linkedin.com/company/pt-bagas-bumi-persada/home/",
    location: "Jakarta, Indonesia (Hybrid)",
    period: "Juni 2025 - Sekarang",
    type: "Internship",
    responsibilities: [
      "Mengelola infrastruktur IT perusahaan dan memberikan dukungan teknis kepada pengguna",
      "Mengelola dan memelihara sistem keamanan siber perusahaan",
      "Mengelola dan memelihara sistem penyimpanan data perusahaan",
    ],
    skills: ["React", "JavaScript", "Tailwind CSS", "REST API", "Git", "Figma"],
  }
];

export const achievementsData: Achievement[] = [
  {
    id: "ach-1",
    title: "Juara 2 Prototype Mobile Apps",
    issuer: "Cyber Tech 2023 / Cyber University",
    date: "Juli 2023",
    credentialUrl: "https://drive.google.com/file/d/1rH6g5H_2UXf2ADx4-fBOczouiMn0Zn54/view?usp=sharing",
    description: "Juara 2 Lomba Prototype Mobile Apps untuk implementasi sistem pembayaran digital dengan berbagai metode pembayaran bernama 'Flexipay'",
    badgeType: "Competition",
  },
  {
    id: "ach-2",
    title: "Certificate of Competency",
    issuer: "PT. Java Web Media Edukasi Indonesia & SMK Taruna Bangsa",
    date: "Mei 2022",
    credentialUrl: "https://drive.google.com/file/d/11dIYfxQo-vhaBtofvlBJYumXQ4os1u-E/view?usp=sharing",
    description: "Sertifikasi Uji Kompetensi Keahlian pada Materi Pemrograman Aplikasi Berbasis Desktop menggunakan VB.Net",
    badgeType: "Certification",
  }
];

export const educationData: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Rekayasa Perangkat Lunak",
    institution: "SMK Taruna Bangsa",
    location: "Bekasi, Jawa Barat",
    period: "2019 - 2022",
    gpa: "85 / 100",
    description: "Fokus pada Rekayasa Perangkat Lunak, Sistem Basis Data, Arsitektur Web, dan Algoritma Struktur Data.",
    highlights: [
      "Koordinator Asisten Laboratorium Rekayasa Perangkat Lunak (2020-2021)",
      "Ketua Divisi Web Development pada Komunitas Mahasiswa IT",
      "Mempublikasikan paper terkait optimasi cache pada web application di konferensi mahasiswa nasional",
    ],
  },
  {
    id: "edu-2",
    degree: "Sarjana Terapan Komputer (S.Tr.Kom) - Teknik Rekayasa Perangkat Lunak",
    institution: "IPB University",
    location: "Bogor, Indonesia",
    period: "2022 - 2026",
    gpa: "3.68 / 4.00",
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
      { name: "TypeScript", level: "Proficient" },
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
      { name: "Next.js (App Router)", level: "Proficient" },
      { name: "React.js", level: "Proficient" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Node.js & Express", level: "Proficient" },
      { name: "Laravel", level: "Advanced" },
    ],
  },
  {
    title: "Database & Backend Services",
    description: "Penyimpanan data relasional dan non-relasional serta layanan cloud pendukung.",
    skills: [
      { name: "PostgreSQL", level: "Proficient" },
      { name: "MySQL", level: "Proficient" },
      { name: "MongoDB", level: "Proficient" },
      { name: "SQL Server", level: "Familiar" },
      { name: "Supabase", level: "Familiar" },
      { name: "Redis", level: "Familiar" },
      { name: "RESTful APIs", level: "Advanced" },
    ],
  },
  {
    title: "Tools & Workflow",
    description: "Peralatan kerja sehari-hari untuk version control, testing, container, dan deployment.",
    skills: [
      { name: "Git & GitHub", level: "Proficient" },
      { name: "Docker", level: "Familiar" },
      { name: "Vercel", level: "Familiar" },
      { name: "VS Code", level: "Advanced" },
      { name: "Figma", level: "Proficient" },
      { name: "Postman", level: "Familiar" },
    ],
  },
];
