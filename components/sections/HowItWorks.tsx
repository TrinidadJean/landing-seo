"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Auditoría SEO gratuita",
    description:
      "Analizamos el estado actual de tu clínica en Google: visibilidad local, Google Business Profile, velocidad del sitio, errores técnicos y qué buscan tus pacientes potenciales en tu distrito.",
    detail: "Resultado en 48 horas · Sin compromiso",
  },
  {
    number: "02",
    title: "Estrategia a medida",
    description:
      "Diseñamos un plan específico para tu clínica y tu zona: Miraflores, Surco, La Molina o San Borja. No existe una estrategia genérica — cada distrito tiene su propia competencia y demanda.",
    detail: "Plan personalizado · Entregable en PDF",
  },
  {
    number: "03",
    title: "Implementación y resultados",
    description:
      "Ejecutamos la estrategia: optimizamos tu sitio web, tu Google Business Profile y construimos autoridad local. Reportes mensuales con métricas reales de posicionamiento y nuevos pacientes.",
    detail: "Primeros resultados en 90 días · Reportes mensuales",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="proceso"
      aria-label="Cómo funciona el SEO para clínicas odontológicas"
      className="py-28 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl mb-20"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-sky-600 uppercase">
            Proceso
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
            Cómo llevamos tu clínica al top de Google
          </h2>
          <p className="mt-4 text-neutral-500 text-lg">
            Un proceso claro, sin tecnicismos innecesarios. Sabrás exactamente
            qué hacemos y por qué en cada etapa.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">

          {/* Línea vertical conectora — solo desktop */}
          <div
            className="hidden md:block absolute left-[2.75rem] top-8 bottom-8 w-px bg-neutral-200"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.12, duration: 0.45 }}
                className="flex gap-8 items-start"
              >
                {/* Número */}
                <div className="relative flex-shrink-0">
                  <div className="w-[5.5rem] h-[5.5rem] rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-sky-600 tabular-nums">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="pt-3 flex-1">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-500 leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <span className="inline-block text-xs font-medium text-sky-600 bg-sky-50 border border-sky-100 px-3 py-1 rounded-full">
                    {step.detail}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA inline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-16 p-8 rounded-2xl bg-neutral-950 text-white flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="font-semibold text-lg">
              Empieza por la auditoría gratuita
            </p>
            <p className="text-neutral-400 text-sm mt-1">
              Sin costo · Sin compromiso · Resultado en 48 horas
            </p>
          </div>
          <a
            href="/auditoria-seo-gratuita"
            className="flex-shrink-0 bg-sky-500 hover:bg-sky-400 text-white font-semibold px-7 py-3 rounded-xl transition-all hover:scale-105"
          >
            Solicitar auditoría
          </a>
        </motion.div>

      </div>
    </section>
  );
}
