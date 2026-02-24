"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section id="contacto"
    className="relative overflow-hidden py-24 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400 text-white">
      
      {/* Glow decorativo */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-4xl mx-auto text-center px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-white">
          ¿Listo para llevar tu negocio al siguiente nivel?
        </h2>

        <p className="text-lg text-white/80 mb-10">
          Diseñamos landing pages, ecommerce y sistemas a medida
          enfocados en ventas reales y posicionamiento en Google.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* CTA PRINCIPAL */}
          <a
            href="https://wa.me/51986929877"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-blue-500/20 hover:scale-105 hover:shadow-blue-600/40 transition"
          >
            WhatsApp inmediato
          </a>

          {/* CTA SECUNDARIO */}
          <a
            href="mailto:ventas@tudominio.com?subject=Reserva%20de%20asesoría"
            className="border border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/10 backdrop-blur transition"
          >
            Reservar por correo
          </a>
        </div>
      </motion.div>
    </section>
  );
}
