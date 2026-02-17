"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/i18n/config";

interface NavbarProps {
  dict: {
    home: string;
    benefits: string;
    plans: string;
    testimonials: string;
    switchLang: string;
    switchLangLabel: string;
  };
  lang: Locale;
}

export function Navbar({ dict, lang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLocale = () => {
    const newLang = lang === "pt" ? "en" : "pt";
    const newPath = pathname.replace(/^\/(pt|en)/, `/${newLang}`);
    router.push(newPath);
  };

  const navLinks = [
    { href: `/${lang}#hero`, label: dict.home },
    { href: `/${lang}#benefits`, label: dict.benefits },
    { href: `/${lang}#plans`, label: dict.plans },
    { href: `/${lang}#testimonials`, label: dict.testimonials },
  ];

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 shadow-lg backdrop-blur-xl" : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href={`/${lang}`} className="flex items-center gap-2">
          <svg viewBox="0 0 28 28" className="h-7 w-7" aria-hidden="true">
            <circle cx="14" cy="14" r="13" fill="#064e3b" />
            <path
              d="M9 18c0-5 3-9 5-10 2 1 5 5 5 10"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path d="M14 8v10" stroke="#10b981" strokeWidth="1.5" />
          </svg>
          <span
            className={`font-serif text-lg font-bold transition-colors ${scrolled ? "text-green-900" : "text-white"}`}
          >
            SixGreen
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-green-500 ${
                scrolled ? "text-neutral-700" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={switchLocale}
            aria-label={dict.switchLangLabel}
            className={`rounded-full border px-3 py-1 text-xs font-bold tracking-wider transition-all hover:scale-105 ${
              scrolled
                ? "border-green-800 text-green-800 hover:bg-green-800 hover:text-white"
                : "border-white/60 text-white hover:bg-white/20"
            }`}
          >
            {dict.switchLang}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={switchLocale}
            aria-label={dict.switchLangLabel}
            className={`rounded-full border px-2.5 py-0.5 text-xs font-bold ${
              scrolled
                ? "border-green-800 text-green-800"
                : "border-white/60 text-white"
            }`}
          >
            {dict.switchLang}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`p-1 ${scrolled ? "text-green-900" : "text-white"}`}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-6 w-6"
            >
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-neutral-200/50 bg-white/95 px-4 pb-4 backdrop-blur-xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-neutral-700 hover:text-green-700"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
