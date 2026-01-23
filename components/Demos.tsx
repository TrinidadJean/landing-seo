"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const demos = [
  {
    name: "Restobar Providencia",
    url: "https://restobarprovidencia.cl",
    image: "/restobar.webp",
    category: "Restaurante / Bar",
    description:
      "Landing moderna para restaurante con enfoque en reservas y conversión.",
  },
  {
    name: "Sanguchón Peruano",
    url: "https://sanguchonperuano.cl",
    image: "/sanguchon.webp",
    category: "Restaurante",
    description:
      "Página web rápida y optimizada para móviles y pedidos por WhatsApp.",
  },
  {
    name: "Demo Ecommerce",
    url: "/demo-ecommerce",
    image: "/ecommerce.webp",
    category: "Ecommerce",
    description:
      "Demo de tienda online optimizada para ventas y SEO.",
  },
];

export default function Demos() {
  return (
    <section className="py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header SEO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
            Demos de Páginas Web Profesionales
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            Explora demos reales de páginas web para restaurantes, negocios
            locales y ecommerce. Todos optimizados para SEO y velocidad.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {demos.map((demo, i) => (
            <motion.article
              key={demo.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition border"
            >
              {/* Imagen */}
              <div className="relative h-52">
                <Image
                  src={demo.image}
                  alt={`Demo web ${demo.name}`}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>

              {/* Contenido */}
              <div className="p-6">
                <span className="text-xs text-sky-600 font-medium uppercase">
                  {demo.category}
                </span>

                <h3 className="mt-2 text-lg font-semibold text-neutral-900">
                  {demo.name}
                </h3>

                <p className="text-sm text-neutral-600 mt-2">
                  {demo.description}
                </p>

                {/* CTA */}
                <a
                  href={demo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 text-sky-600 font-medium hover:underline"
                >
                  Ver demo
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* SEO oculto */}
        <p className="sr-only">
          Demos de páginas web en Lima, ejemplos de landing pages,
          páginas web para restaurantes, ecommerce y negocios locales.
        </p>
      </div>
    </section>
  );
}
