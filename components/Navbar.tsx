"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-900/85 backdrop-blur border-b border-white/10">
      <nav
        className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Navegación principal"
      >
        {/* LOGO */}
        <a
          href="#"
          className="font-extrabold text-xl text-blue-300 tracking-tight hover:text-blue-400 transition-colors"
        >
          Trinidev
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-sm text-blue-200">
          <a
            href="#servicios"
            className="hover:text-blue-300 transition-colors"
          >
            Servicios
          </a>
          <a
            href="#beneficios"
            className="hover:text-blue-300 transition-colors"
          >
            Beneficios
          </a>
          <a
            href="#contacto"
            className="hover:text-blue-300 transition-colors"
          >
            Contacto
          </a>
        </div>

        {/* CTA DESKTOP */}
        <a
          href="#contacto"
          className="hidden md:inline-flex bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Cotizar
        </a>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-blue-200 hover:text-blue-300 transition-colors"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <span className="material-symbols-outlined text-3xl">
            menu
          </span>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden bg-slate-900 border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-5 text-blue-100">
              <a
                href="#servicios"
                onClick={() => setOpen(false)}
                className="hover:text-blue-300 transition-colors"
              >
                Servicios
              </a>
              <a
                href="#beneficios"
                onClick={() => setOpen(false)}
                className="hover:text-blue-300 transition-colors"
              >
                Beneficios
              </a>
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="hover:text-blue-300 transition-colors"
              >
                Contacto
              </a>

              <a
                href="#contacto"
                className="bg-blue-500 hover:bg-blue-400 text-white text-center py-2 rounded-lg font-medium transition-colors"
              >
                Cotizar
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
