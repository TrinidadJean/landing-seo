"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    icon: "bolt",
    title: "Páginas Web Ultra Rápidas",
    description:
      "Desarrollamos landing pages y sitios web que cargan en menos de 1 segundo, optimizados para Google.",
  },
  {
    icon: "search",
    title: "SEO Profesional en Lima",
    description:
      "Estructura técnica y contenido optimizado para posicionar tu negocio en Google Perú.",
  },
  {
    icon: "shopping_cart",
    title: "Tiendas Online & Ecommerce",
    description:
      "Creamos ecommerce con Shopify, WordPress o a medida, listos para vender desde el día uno.",
  },
  {
    icon: "devices",
    title: "Diseño Responsive Premium",
    description:
      "Experiencia perfecta en móviles, tablets y escritorio, enfocada en conversión.",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative py-28 overflow-hidden"
    >
      {/* Fondo con imagen */}
      <Image
        src="feauture.webp"
        alt="Servicios de desarrollo web y diseño de páginas web en Lima"
        fill
        loading="lazy"
        className="object-cover"
      />

      {/* Overlay suave */}
      <div className="absolute inset-0 bg-white/90" />

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header SEO */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Servicios de Desarrollo Web en Lima
          </h2>

          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            Diseñamos páginas web modernas, ecommerce y sistemas a medida
            enfocados en velocidad, SEO y resultados reales.
          </p>
        </motion.header>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="group rounded-2xl p-6 bg-white border border-neutral-200 shadow-sm hover:shadow-xl transition"
            >
              {/* Icono */}
              <span className="material-symbols-outlined text-sky-600 text-4xl mb-4 block group-hover:scale-110 transition">
                {service.icon}
              </span>

              <h3 className="font-semibold text-lg mb-2 text-neutral-900">
                {service.title}
              </h3>

              <p className="text-neutral-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* SEO hidden keywords */}
        <p className="sr-only">
          Diseño web en Lima, desarrollo de páginas web profesionales,
          landing pages optimizadas para SEO, ecommerce en Perú,
          desarrollo web con WordPress, Shopify y Next.js.
        </p>
      </div>
    </section>
  );
}
