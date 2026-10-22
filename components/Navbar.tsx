"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Code2 } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.projects, href: "/projects" },
    { label: t.nav.experience, href: "/experience" },
    { label: t.nav.education, href: "/education" },
  ];

  // Close mobile menu on pathname change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Track scroll position for dynamic elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key and return focus
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu if window resizes to desktop breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-zinc-200/80 bg-white/85 shadow-2xs backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/85"
            : "border-b border-zinc-200/50 bg-white/60 backdrop-blur-sm dark:border-zinc-800/50 dark:bg-zinc-950/60"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand Logo with micro-interaction and visible focus */}
          <Link
            href="/"
            aria-label="pilal.dev home"
            className="group flex items-center gap-2.5 rounded-lg text-sm font-semibold tracking-tight text-zinc-900 transition-all hover:opacity-90 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-zinc-100 dark:focus-visible:ring-zinc-500 dark:focus-visible:ring-offset-zinc-950"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200/80 bg-zinc-100/80 text-zinc-800 shadow-2xs transition-all duration-300 group-hover:scale-105 group-hover:rotate-3 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-200">
              <Code2 className="h-4 w-4 transition-transform group-hover:scale-110" aria-hidden="true" />
            </div>
            <span className="font-semibold">
              pilal<span className="text-zinc-400 dark:text-zinc-500">.dev</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden items-center gap-1 md:flex">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:scale-95 dark:focus-visible:ring-zinc-500 dark:focus-visible:ring-offset-zinc-950 ${
                    isActive
                      ? "bg-zinc-900 text-white shadow-xs dark:bg-zinc-100 dark:text-zinc-900"
                      : "text-zinc-600 hover:bg-zinc-100/80 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900/80 dark:hover:text-zinc-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Controls (LanguageToggle + ThemeToggle + CTA) */}
          <div className="hidden items-center gap-2 md:flex">
            <LanguageToggle />
            <ThemeToggle />
            <Link
              href="/contact"
              aria-current={pathname === "/contact" ? "page" : undefined}
              className={`group ml-1 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold shadow-2xs transition-all duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:scale-95 dark:focus-visible:ring-zinc-500 dark:focus-visible:ring-offset-zinc-950 ${
                pathname === "/contact"
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "border border-zinc-200/80 bg-white text-zinc-800 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"
              }`}
            >
              <span>{t.nav.cta}</span>
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Mobile Controls (LanguageToggle + ThemeToggle + Hamburger with 44px hit target) */}
          <div className="flex items-center gap-1.5 md:hidden">
            <LanguageToggle />
            <ThemeToggle />
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg p-2.5 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:scale-95 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100 dark:focus-visible:ring-zinc-500 dark:focus-visible:ring-offset-zinc-950"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 rotate-90 transition-transform duration-200" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5 transition-transform duration-200" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <nav
            id="mobile-navigation-drawer"
            aria-label="Mobile Navigation"
            className="relative z-50 border-b border-zinc-200/80 bg-white/95 px-4 pt-2 pb-6 shadow-lg backdrop-blur-xl md:hidden dark:border-zinc-800/80 dark:bg-zinc-950/95"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex min-h-[44px] items-center justify-between rounded-lg px-3.5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-zinc-500 dark:focus-visible:ring-offset-zinc-950 ${
                      isActive
                        ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                        : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span
                        className="h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-emerald-500/20"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                );
              })}
              <div className="mt-2 border-t border-zinc-100 pt-3 dark:border-zinc-800/80">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={pathname === "/contact" ? "page" : undefined}
                  className={`flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-center text-sm font-semibold shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-zinc-500 dark:focus-visible:ring-offset-zinc-950 ${
                    pathname === "/contact"
                      ? "bg-zinc-900 text-white ring-1 ring-zinc-700 dark:bg-zinc-100 dark:text-zinc-900"
                      : "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                  }`}
                >
                  <span>{t.nav.cta}</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </nav>
        )}
      </header>

      {/* Mobile Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-16 z-40 bg-zinc-950/20 backdrop-blur-xs transition-opacity duration-200 md:hidden dark:bg-black/40"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
