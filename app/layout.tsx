import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import AbstractBackground from "@/components/AbstractBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rafi Hilal Zahir | Software Engineer & Web Developer",
  description:
    "Portofolio pribadi Rafi Hilal Zahir - Software Engineer & Web Developer yang berfokus pada Next.js, TypeScript, React, dan modern web performance.",
  keywords: [
    "Portfolio",
    "Web Developer",
    "Software Engineer",
    "Next.js",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Rafi Hilal Zahir",
  ],
  authors: [{ name: "Rafi Hilal Zahir" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="relative flex min-h-full flex-col bg-zinc-50 text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <AbstractBackground />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
