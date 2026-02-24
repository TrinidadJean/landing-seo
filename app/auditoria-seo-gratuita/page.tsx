// app/auditoria-seo-gratuita/page.tsx
// Server Component — máximo SEO + Client form embebido

import type { Metadata } from "next";
import { BRAND } from "@/lib/constants";
import AuditoriaForm from "./AuditoriaForm";

export const metadata: Metadata = {
  title: "Auditoría SEO Gratuita para Clínicas Odontológicas en Lima",
  description:
    "Descubre por qué tu clínica dental no aparece en Google. Análisis SEO local gratuito para clínicas en Miraflores, Surco, La Molina y San Borja. Resultado en 48 horas, sin compromiso.",
  alternates: {
    canonical: `${BRAND.url}/auditoria-seo-gratuita`,
  },
  openGraph: {
    title: "Auditoría SEO Gratuita para Tu Clínica Dental en Lima",
    description:
      "Jeanpiere Trinidad analiza el SEO de tu clínica odontológica gratis. Resultado en 48 horas.",
    url: `${BRAND.url}/auditoria-seo-gratuita`,
  },
};

const auditoriaSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Auditoría SEO Gratuita para Clínicas Odontológicas",
  provider: {
    "@type": "ProfessionalService",
    name: BRAND.name,
    url: BRAND.url,
  },
  description:
    "Análisis completo del posicionamiento web de tu clínica dental en Lima. Detectamos por qué Google no te muestra ante pacientes en Miraflores, Surco, La Molina y San Borja.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "PEN",
  },
  areaServed: { "@type": "City", name: "Lima" },
};

const checklist = [
  "Posición actual en Google para tus servicios principales",
  "Estado de tu Google Business Profile",
  "Velocidad y Core Web Vitals de tu sitio web",
  "Errores técnicos que bloquean tu indexación",
  "Análisis de competidores en tu distrito",
  "Oportunidades de keywords con alta intención de búsqueda",
  "Plan de acción priorizado por impacto",
];

const trustSignals = [
  { value: "12+", label: "Clínicas posicionadas" },
  { value: "48h", label: "Tiempo de entrega" },
  { value: "0", label: "Costo de la auditoría" },
];

export default function AuditoriaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(auditoriaSchema) }}
      />

      <main id="main-content" className="min-h-screen bg-white">

        {/* Breadcrumb */}
        <nav
          aria-label="Ruta de navegación"
          className="max-w-6xl mx-auto px-6 pt-8 pb-0"
        >
          <ol className="flex items-center gap-2 text-xs text-neutral-400">
            <li>
              <a href="/" className="hover:text-neutral-600 transition-colors">
                Inicio
              </a>
            </li>
            <li aria-hidden="true">·</li>
            <li className="text-neutral-600" aria-current="page">
              Auditoría SEO Gratuita
            </li>
          </ol>
        </nav>

        {/* Hero de página */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-16 items-start">

          {/* Columna izquierda — copy */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-sky-600 uppercase mb-4">
              {BRAND.founder} · {BRAND.founderTitle}
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-[1.1] mb-6">
              Auditoría SEO gratuita para tu clínica dental en Lima
            </h1>

            <p className="text-lg text-neutral-500 leading-relaxed mb-8">
              Analizo el posicionamiento de tu clínica odontológica en Google y
              te entrego un informe detallado con los problemas exactos que
              impiden que nuevos pacientes en{" "}
              <strong className="text-neutral-700">
                Miraflores, Surco, La Molina o San Borja
              </strong>{" "}
              te encuentren.
            </p>

            {/* Trust signals */}
            <div className="flex gap-8 mb-10">
              {trustSignals.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-sky-600">{s.value}</p>
                  <p className="text-xs text-neutral-400 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Qué incluye */}
            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6">
              <p className="text-sm font-semibold text-neutral-900 mb-4">
                Qué incluye tu auditoría:
              </p>
              <ul className="space-y-2.5">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-600">
                    <svg
                      className="w-4 h-4 text-sky-500 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Columna derecha — formulario */}
          <div className="md:sticky md:top-28">
            <AuditoriaForm />
          </div>

        </section>

        {/* Por qué SEO especializado */}
        <section
          aria-label="Por qué una clínica necesita SEO local especializado"
          className="bg-neutral-950 text-white py-20"
        >
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              ¿Por qué una clínica odontológica necesita SEO local especializado?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-neutral-400 text-sm leading-relaxed">
              <p>
                El 77% de los pacientes que buscan dentista en Lima usa Google para
                decidir a qué clínica ir. Si tu clínica no aparece en el top 3 para
                búsquedas como <em className="text-neutral-300">"dentista en Miraflores"</em>{" "}
                o <em className="text-neutral-300">"clínica dental Surco"</em>, estás
                cediendo esos pacientes a la competencia —muchas veces clínicas con
                peor servicio que el tuyo.
              </p>
              <p>
                El sector salud está clasificado como YMYL (Your Money Your Life) por
                Google, lo que significa que los criterios de evaluación son más
                estrictos. Las agencias generalistas desconocen estas reglas. Trabajar
                con un especialista en SEO para clínicas odontológicas marca la
                diferencia entre aparecer o ser invisible.
              </p>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}