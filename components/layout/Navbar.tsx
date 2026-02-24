// components/layout/Navbar.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { BRAND, ROUTES } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-neutral-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Navegación principal"
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
      >
        <Link
          href="/"
          className={`font-bold text-lg transition-colors ${
            scrolled ? "text-neutral-900" : "text-white"
          }`}
          aria-label={`${BRAND.name} – inicio`}
        >
          {BRAND.name}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {[
            { href: ROUTES.servicios, label: "Servicios" },
            { href: ROUTES.casos, label: "Casos de éxito" },
            { href: ROUTES.blog, label: "Blog" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-sky-400 ${
                scrolled ? "text-neutral-600" : "text-white/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href={ROUTES.auditoria}
          className="bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all hover:scale-105"
        >
          Auditoría gratuita
        </Link>
      </nav>
    </header>
  );
}