"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: "speed",
    title: "Carga ultra rápida",
    description:
      "Landing pages optimizadas para Core Web Vitals y PageSpeed superiores a 90 puntos.",
  },
  {
    icon: "search",
    title: "SEO listo para Google",
    description:
      "Estructura técnica optimizada para indexación, rich snippets y posicionamiento en Lima.",
  },
  {
    icon: "devices",
    title: "Diseño 100% Responsive",
    description:
      "Experiencia perfecta en móviles, tablets y escritorio, enfocada en conversión.",
  },
  {
    icon: "auto_awesome",
    title: "Animaciones modernas",
    description:
      "Interacciones suaves con Framer Motion y scroll optimizado con Lenis.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="relative py-28 overflow-hidden">
      
      {/* Imagen de fondo */}
      <Image
        src="/google.webp"
        alt="Optimización SEO y PageSpeed para páginas web profesionales"
        fill
        loading="lazy"
        className="object-cover"
      />

      {/* Overlay elegante */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-sky-50/90" />

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Heading SEO */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Beneficios de Nuestras Landing Pages Optimizadas
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            Diseñamos páginas web rápidas, modernas y optimizadas para SEO,
            pensadas para generar clientes reales en Lima y todo Perú.
          </p>
        </motion.header>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: i * 0.08,
              }}
              className="group rounded-2xl p-6 bg-white border border-neutral-200 shadow-sm hover:shadow-xl transition"
            >
              <span className="material-symbols-outlined text-sky-600 text-4xl mb-4 block group-hover:scale-110 transition">
                {item.icon}
              </span>

              <h3 className="text-lg font-semibold mb-2 text-neutral-900">
                {item.title}
              </h3>

              <p className="text-sm text-neutral-600 leading-relaxed">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* SEO oculto */}
        <p className="sr-only">
          Beneficios de páginas web optimizadas en Lima, landing pages rápidas,
          diseño web profesional, SEO técnico, Core Web Vitals y PageSpeed.
        </p>
      </div>
    </section>
  );
}
