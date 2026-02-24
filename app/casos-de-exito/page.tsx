// app/casos-de-exito/page.tsx
// Server Component puro — SEO máximo

import type { Metadata } from "next";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Casos de Éxito – SEO para Clínicas Odontológicas en Lima",
  description:
    "Resultados reales de clínicas odontológicas en Miraflores, Surco, La Molina y San Borja que pasaron de invisible a liderar Google en 90 días.",
  alternates: {
    canonical: `${BRAND.url}/casos-de-exito`,
  },
};

const casos = [
  {
    slug: "clinica-miraflores",
    distrito: "Miraflores",
    tipo: "Clínica odontológica general",
    duracion: "4 meses",
    metrics: [
      { label: "Posición Google", before: "#34", after: "#2" },
      { label: "Visitas orgánicas/mes", before: "180", after: "1,240" },
      { label: "Consultas nuevas/mes", before: "8", after: "31" },
    ],
    descripcion:
      "Clínica con 6 años de trayectoria pero sin presencia digital. Optimización técnica, Google Business Profile y contenido local posicionaron la clínica como el resultado orgánico #1 para 'dentista en Miraflores'.",
    keywords: ["dentista en Miraflores", "clínica dental Miraflores", "ortodoncia Miraflores"],
    color: "sky",
  },
  {
    slug: "clinica-surco",
    distrito: "Surco",
    tipo: "Especialista en ortodoncia",
    duracion: "5 meses",
    metrics: [
      { label: "Posición Google", before: "#28", after: "#1" },
      { label: "Visitas orgánicas/mes", before: "95", after: "820" },
      { label: "Consultas nuevas/mes", before: "5", after: "24" },
    ],
    descripcion:
      "Ortodoncista con consultorio premium en Surco. La estrategia se enfocó en keywords de alta intención ('ortodoncia invisible Surco', 'brackets Surco'). En 5 meses, primer resultado orgánico y pack local.",
    keywords: ["ortodoncia Surco", "brackets Surco", "ortodoncia invisible Surco"],
    color: "violet",
  },
  {
    slug: "clinica-la-molina",
    distrito: "La Molina",
    tipo: "Centro odontológico familiar",
    duracion: "3 meses",
    metrics: [
      { label: "Posición Google", before: "#52", after: "#3" },
      { label: "Visitas orgánicas/mes", before: "60", after: "510" },
      { label: "Consultas nuevas/mes", before: "4", after: "19" },
    ],
    descripcion:
      "Centro familiar en La Molina con menor competencia que Miraflores. Los resultados fueron más rápidos: top 3 en 3 meses gracias a una estrategia de contenido hiperlocal y optimización técnica profunda.",
    keywords: ["dentista La Molina", "clínica dental La Molina", "odontólogo La Molina"],
    color: "emerald",
  },
];

const colorMap: Record<string, { badge: string; accent: string; dot: string }> = {
  sky: {
    badge: "bg-sky-50 text-sky-700 border-sky-200",
    accent: "text-sky-600",
    dot: "bg-sky-500",
  },
  violet: {
    badge: "bg-violet-50 text-violet-700 border-violet-200",
    accent: "text-violet-600",
    dot: "bg-violet-500",
  },
  emerald: {
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    accent: "text-emerald-600",
    dot: "bg-emerald-500",
  },
};

export default function CasosPage() {
  const casosSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Casos de éxito SEO para clínicas odontológicas en Lima",
    itemListElement: casos.map((caso, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `SEO para clínica odontológica en ${caso.distrito}`,
      description: caso.descripcion,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(casosSchema) }}
      />

      <main id="main-content" className="min-h-screen bg-white">

        {/* Breadcrumb */}
        <nav aria-label="Ruta de navegación" className="max-w-6xl mx-auto px-6 pt-8">
          <ol className="flex items-center gap-2 text-xs text-neutral-400">
            <li><a href="/" className="hover:text-neutral-600 transition-colors">Inicio</a></li>
            <li aria-hidden="true">·</li>
            <li className="text-neutral-600" aria-current="page">Casos de éxito</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-sky-600 uppercase mb-4">
            Resultados reales
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-[1.1] mb-6 max-w-3xl">
            Clínicas odontológicas que lideran Google en Lima
          </h1>
          <p className="text-lg text-neutral-500 max-w-2xl leading-relaxed">
            Cada caso es diferente. La competencia en Miraflores no es la misma que en
            La Molina. Estos son resultados reales con la estrategia aplicada mes a mes.
          </p>
        </header>

        {/* Casos */}
        <section className="max-w-6xl mx-auto px-6 pb-24 space-y-10">
          {casos.map((caso) => {
            const c = colorMap[caso.color];
            return (
              <article
                key={caso.slug}
                className="border border-neutral-200 rounded-2xl overflow-hidden"
                aria-label={`Caso de éxito: ${caso.tipo} en ${caso.distrito}`}
              >
                {/* Header del caso */}
                <div className="bg-neutral-50 border-b border-neutral-200 px-8 py-5 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${c.dot}`} aria-hidden="true" />
                    <h2 className="font-semibold text-neutral-900">
                      {caso.tipo} · {caso.distrito}
                    </h2>
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full border ${c.badge}`}>
                    Resultados en {caso.duracion}
                  </span>
                </div>

                <div className="p-8 grid md:grid-cols-[2fr_1fr] gap-10">

                  {/* Descripción + keywords */}
                  <div>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                      {caso.descripcion}
                    </p>

                    <div>
                      <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-3">
                        Keywords posicionadas
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {caso.keywords.map((kw) => (
                          <span
                            key={kw}
                            className="text-xs bg-neutral-100 text-neutral-600 px-3 py-1.5 rounded-lg border border-neutral-200"
                          >
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Métricas */}
                  <div className="space-y-4">
                    {caso.metrics.map((m) => (
                      <div key={m.label} className="bg-neutral-50 rounded-xl p-4 border border-neutral-200">
                        <p className="text-xs text-neutral-400 mb-2">{m.label}</p>
                        <div className="flex items-center gap-3">
                          <span className="text-xl font-bold text-neutral-300">{m.before}</span>
                          <svg className="w-4 h-4 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                          <span className={`text-xl font-bold ${c.accent}`}>{m.after}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </article>
            );
          })}
        </section>

        {/* CTA final */}
        <section className="bg-neutral-950 py-20 text-white text-center px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-sky-400 uppercase mb-4">
            Tu clínica puede ser el próximo caso
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Empieza con una auditoría gratuita
          </h2>
          <p className="text-neutral-400 max-w-lg mx-auto mb-8">
            Analizo el estado de tu clínica en Google sin costo. Te digo exactamente
            qué está fallando y qué hay que hacer primero.
          </p>
          <a
            href="/auditoria-seo-gratuita"
            className="inline-block bg-sky-500 hover:bg-sky-400 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105"
          >
            Solicitar auditoría gratuita
          </a>
        </section>

      </main>
    </>
  );
}