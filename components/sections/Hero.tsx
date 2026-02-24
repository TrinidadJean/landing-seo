// components/sections/Hero.tsx
// Mantiene "use client" por la animación de entrada con framer-motion
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BRAND, ROUTES } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      aria-label="Especialistas en SEO para clínicas odontológicas en Lima"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* 
        CAMBIO ESTRATÉGICO: La imagen de hero debe mostrar 
        resultados reales (dashboard de Google Analytics/Search Console 
        con una clínica dental como cliente) — no una imagen genérica.
        Esto genera confianza instantánea con el decision maker de la clínica.
      */}
      <Image
        src="/hero-seo-clinicas.webp"
        alt="Dashboard de SEO mostrando crecimiento de pacientes para clínica dental en Miraflores"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/40" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 max-w-4xl text-center text-white"
      >
        {/*
          AUTORIDAD PERSONAL PRIMERO:
          El cliente de clínica premium no compra a "agencias", 
          compra al especialista. El nombre va arriba.
        */}
        <p className="text-sky-400 font-medium text-sm md:text-base mb-4 tracking-wide uppercase">
          {BRAND.founder} · {BRAND.founderTitle}
        </p>

        {/*
          H1 OPTIMIZADO:
          Target keywords: "SEO clínicas odontológicas Lima" + distritos premium
          Formato: Beneficio + Audiencia específica + Contexto geográfico
        */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Más Pacientes para Tu{" "}
          <span className="text-sky-400">Clínica Dental</span> en Lima
        </h1>

        <p className="mt-5 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
          SEO local especializado para clínicas odontológicas en{" "}
          <strong className="text-white">Miraflores, Surco, La Molina y San Borja</strong>.
          Aparece primero en Google cuando alguien busca dentista en tu zona.
        </p>

        {/* Micro-prueba social en el hero — decisivo para conversión */}
        <p className="mt-4 text-sky-300 text-sm">
          +12 clínicas odontológicas posicionadas · Resultados en 90 días
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {/* CTA PRIMARIO: Auditoría gratuita — lead magnet de bajo riesgo */}
          <Link
            href={ROUTES.auditoria}
            className="bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-sky-500/25 hover:shadow-sky-400/40 hover:scale-105"
          >
            Solicitar Auditoría SEO Gratuita
          </Link>

          {/* CTA SECUNDARIO: WhatsApp directo */}
          <a
            href={`https://wa.me/${BRAND.whatsapp}?text=Hola%20Jeanpiere,%20quiero%20saber%20c%C3%B3mo%20mejorar%20el%20SEO%20de%20mi%20cl%C3%ADnica`}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/30 hover:bg-white/10 px-8 py-4 rounded-xl transition backdrop-blur-sm"
          >
            WhatsApp directo
          </a>
        </div>
      </motion.div>
    </section>
  );
}