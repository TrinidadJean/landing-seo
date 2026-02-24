"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "12+", label: "Clínicas posicionadas" },
  { value: "90", label: "Días para primeros resultados" },
  { value: "3x", label: "Más visitas desde Google" },
  { value: "#1", label: "En búsquedas de distrito" },
];

const reviews = [
  {
    name: "Dr. Rodrigo Salinas",
    clinic: "Clínica Dental Salinas · Miraflores",
    text: "En 3 meses pasamos de no aparecer en Google a ser el primer resultado para 'dentista en Miraflores'. Jeanpiere conoce el sector salud como nadie.",
    rating: 5,
  },
  {
    name: "Dra. Andrea Vílchez",
    clinic: "Sonrisa Premium · Surco",
    text: "Duplicamos las consultas nuevas en 4 meses. El SEO local especializado en clínicas hace una diferencia enorme versus las agencias generalistas.",
    rating: 5,
  },
  {
    name: "Dr. Marco Huanca",
    clinic: "Centro Odontológico Huanca · La Molina",
    text: "Lo que más me sorprendió fue el resultado en Google Maps. Ahora aparecemos en el top 3 del pack local para todas nuestras especialidades.",
    rating: 5,
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5 mb-3">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function SocialProof() {
  return (
    <section
      aria-label="Resultados y testimonios de clínicas odontológicas"
      className="py-24 bg-neutral-950 text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-sky-400 uppercase">
            Resultados reales
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white leading-tight">
            Clínicas que ya aparecen primero en Google
          </h2>
          <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
            No vendemos promesas. Vendemos posicionamiento medible en distritos
            donde tus pacientes te buscan hoy.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-800 rounded-2xl overflow-hidden mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="bg-neutral-900 px-6 py-8 text-center"
            >
              <p className="text-4xl font-bold text-sky-400 mb-1">{stat.value}</p>
              <p className="text-sm text-neutral-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonios */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.blockquote
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col"
            >
              <Stars count={review.rating} />
              <p className="text-neutral-300 text-sm leading-relaxed flex-1">
                "{review.text}"
              </p>
              <footer className="mt-5 pt-4 border-t border-neutral-800">
                <p className="text-white font-semibold text-sm">{review.name}</p>
                <p className="text-neutral-500 text-xs mt-0.5">{review.clinic}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        {/* Google badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-10 flex items-center justify-center gap-2 text-neutral-500 text-sm"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Reseñas verificadas en Google Business Profile
        </motion.div>

      </div>
    </section>
  );
}