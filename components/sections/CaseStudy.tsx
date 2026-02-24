"use client";

import { motion } from "framer-motion";

const metrics = [
  { label: "Posición promedio en Google", before: "#34", after: "#2" },
  { label: "Visitas orgánicas mensuales", before: "180", after: "1,240" },
  { label: "Consultas nuevas por mes", before: "8", after: "31" },
  { label: "Keywords en top 3", before: "0", after: "14" },
];

const timeline = [
  { month: "Mes 1", action: "Auditoría técnica, optimización on-page y Google Business Profile" },
  { month: "Mes 2", action: "Construcción de autoridad local, citas NAP, landing de servicios" },
  { month: "Mes 3", action: "Primeras posiciones top 10. Aparición en el pack local de Google Maps" },
  { month: "Mes 4", action: "Top 3 para 'dentista en Miraflores' y especialidades principales" },
];

export default function CaseStudy() {
  return (
    <section
      id="caso-de-exito"
      aria-label="Caso de éxito SEO para clínica odontológica en Miraflores"
      className="py-28 bg-neutral-50 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-sky-600 uppercase">
            Caso de éxito
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
            De invisible a líder en Miraflores en 4 meses
          </h2>
          <p className="mt-4 text-neutral-500 max-w-xl mx-auto">
            Clínica odontológica con 6 años de operación pero sin presencia digital.
            Hoy es el resultado #1 orgánico para su distrito.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Métricas antes/después */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-widest mb-6">
              Resultados a los 4 meses
            </h3>

            <div className="space-y-4">
              {metrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-2xl border border-neutral-200 p-5"
                >
                  <p className="text-xs text-neutral-400 mb-3">{metric.label}</p>
                  <div className="flex items-center gap-4">
                    {/* Antes */}
                    <div className="text-center">
                      <p className="text-2xl font-bold text-neutral-300">{metric.before}</p>
                      <p className="text-xs text-neutral-400 mt-0.5">Antes</p>
                    </div>

                    {/* Flecha */}
                    <div className="flex-1 flex items-center gap-1">
                      <div className="flex-1 h-px bg-gradient-to-r from-neutral-200 to-sky-400" />
                      <svg className="w-4 h-4 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>

                    {/* Después */}
                    <div className="text-center">
                      <p className="text-2xl font-bold text-sky-600">{metric.after}</p>
                      <p className="text-xs text-neutral-400 mt-0.5">Después</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-widest mb-6">
              Qué hicimos mes a mes
            </h3>

            <div className="relative pl-6 border-l border-neutral-200 space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.month}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  {/* Dot */}
                  <div className="absolute -left-[1.65rem] top-1 w-3 h-3 rounded-full bg-sky-500 border-2 border-white ring-2 ring-sky-100" />

                  <p className="text-xs font-bold text-sky-600 uppercase tracking-widest mb-1">
                    {item.month}
                  </p>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {item.action}
                  </p>
                </motion.div>
              ))}

              {/* Resultado final */}
              <div className="relative">
                <div className="absolute -left-[1.65rem] top-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white ring-2 ring-emerald-100" />
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">
                  Resultado
                </p>
                <p className="text-neutral-900 font-semibold text-sm">
                  #1 orgánico en Google para "dentista en Miraflores" y 14 keywords adicionales en top 3.
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="mt-8 text-xs text-neutral-400">
              * Datos reales de cliente. Nombre omitido por confidencialidad.
              Los resultados varían según competencia del distrito y estado inicial del sitio.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}