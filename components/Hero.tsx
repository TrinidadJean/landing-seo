"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      
      {/* Imagen fondo optimizada */}
      <Image
        src="/hero.webp"
        alt="Diseño de páginas web profesionales en Lima - Trinidev"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay azul elegante */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-sky-900/60 to-white/10" />

      {/* Contenido */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative z-10 max-w-4xl text-center text-white"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Diseño de Páginas Web Profesionales en Lima
        </h1>

        <p className="mt-5 text-lg md:text-xl text-sky-100 max-w-2xl mx-auto">
          Creamos <strong>landing pages</strong>, <strong>eCommerce</strong> y
          <strong> sistemas a medida</strong> optimizados para SEO, velocidad y conversión.
          Trabajamos con Next.js, WordPress y Shopify.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/51986929877"
            className="bg-sky-500 hover:bg-sky-600 text-white px-7 py-3 rounded-xl font-semibold transition shadow-lg"
          >
            Cotizar por WhatsApp
          </a>

          <a
            href="#servicios"
            className="border border-white/40 hover:bg-white/10 px-7 py-3 rounded-xl transition"
          >
            Ver servicios
          </a>
        </div>
      </motion.div>
    </section>
  );
}
