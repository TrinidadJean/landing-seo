"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "¿Cuánto tiempo tarda en verse resultados de SEO para mi clínica dental?",
    answer:
      "Los primeros movimientos en posiciones se notan entre el mes 2 y 3. Resultados consolidados —aparecer en el top 3 para las búsquedas principales de tu distrito— ocurren entre el mes 3 y 6, dependiendo de la competencia en tu zona. Miraflores tiene más competencia que La Molina, por ejemplo. Trabajamos con plazos reales, no con promesas de 'resultados inmediatos'.",
  },
  {
    question: "¿Qué diferencia hay entre SEO general y SEO local para clínicas odontológicas?",
    answer:
      "El SEO local para clínicas implica optimizar para búsquedas con intención geográfica ('dentista en Surco'), gestionar tu Google Business Profile de forma especializada para servicios de salud, aplicar schema markup de tipo Dentist y MedicalBusiness, y construir autoridad local con citas NAP consistentes. Las agencias generalistas no dominan estos detalles específicos del sector salud (YMYL — Your Money Your Life), que Google evalúa con criterios mucho más estrictos.",
  },
  {
    question: "¿Necesito tener una página web para contratar el servicio de SEO?",
    answer:
      "Sí, necesitas un sitio web. Si no tienes uno o el tuyo está desactualizado, lo incluimos en el plan de trabajo. Una web técnicamente optimizada es la base del SEO — sin ella, Google Business Profile sigue siendo útil pero limitado. Diseñamos sitios específicamente construidos para posicionar clínicas odontológicas.",
  },
  {
    question: "¿Trabajan solo con distritos de Lima o atienden otras ciudades?",
    answer:
      "Nuestro foco y especialización están en los distritos premium de Lima: Miraflores, Surco, La Molina y San Borja. Conocemos la competencia local, los hábitos de búsqueda de pacientes en cada zona y los directorios médicos relevantes. Podemos evaluar casos en otras ciudades, pero la profundidad de nuestro conocimiento local es mayor en Lima.",
  },
  {
    question: "¿Qué incluye exactamente el plan de SEO para clínicas?",
    answer:
      "Incluye: auditoría técnica SEO, optimización on-page de todo el sitio, gestión completa de Google Business Profile, construcción de citas locales (NAP), schema markup médico especializado, creación de contenido optimizado para tus servicios y distrito, y reportes mensuales con métricas reales de posicionamiento, tráfico y consultas generadas.",
  },
  {
    question: "¿La auditoría SEO gratuita tiene algún compromiso de contratación?",
    answer:
      "Ninguno. La auditoría es un análisis real del estado de tu clínica en Google — no un documento de ventas genérico. Te entrego un informe con los problemas exactos que tienes y las acciones prioritarias. Si decides contratar el servicio completo después de verlo, perfecto. Si no, el informe es tuyo y puedes implementarlo con quien quieras.",
  },
];

function FAQItem({
  faq,
  index,
}: {
  faq: (typeof faqs)[0];
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      className="border-b border-neutral-200 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-start justify-between gap-4 py-6 text-left group"
      >
        <span className="font-medium text-neutral-900 text-base leading-snug group-hover:text-sky-600 transition-colors">
          {faq.question}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border border-neutral-300 flex items-center justify-center transition-all mt-0.5 ${
            open ? "bg-sky-500 border-sky-500 rotate-45" : "group-hover:border-sky-400"
          }`}
          aria-hidden="true"
        >
          <svg
            className={`w-3 h-3 transition-colors ${open ? "text-white" : "text-neutral-400"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-neutral-500 leading-relaxed text-sm">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  // Schema FAQPage — inyectado aquí para mantenerlo junto al contenido
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      id="preguntas-frecuentes"
      aria-label="Preguntas frecuentes sobre SEO para clínicas odontológicas"
      className="py-28 bg-white"
    >
      {/* JSON-LD FAQPage — rich snippet en Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">

          {/* Sidebar sticky */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:sticky md:top-28"
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-sky-600 uppercase">
              FAQ
            </span>
            <h2 className="mt-3 text-3xl font-bold text-neutral-900 leading-tight">
              Preguntas frecuentes
            </h2>
            <p className="mt-4 text-neutral-500 text-sm leading-relaxed">
              Todo lo que necesitas saber antes de invertir en SEO para tu clínica
              odontológica en Lima.
            </p>

            <div className="mt-8 p-5 rounded-2xl bg-sky-50 border border-sky-100">
              <p className="text-sm font-medium text-neutral-900 mb-1">
                ¿Tienes otra pregunta?
              </p>
              <p className="text-xs text-neutral-500 mb-4">
                Escríbeme directamente. Respondo el mismo día.
              </p>
              <a
                href="https://wa.me/51982226070?text=Hola%20Jeanpiere,%20tengo%20una%20consulta%20sobre%20SEO%20para%20mi%20cl%C3%ADnica"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors"
              >
                Consultar por WhatsApp
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Acordeón */}
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={faq.question} faq={faq} index={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}