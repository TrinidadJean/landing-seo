// app/servicios/seo-para-clinicas-dentales/page.tsx
import type { Metadata } from "next";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "SEO para Clínicas Dentales en Lima – Servicio Especializado",
  description:
    "Servicio de SEO local especializado para clínicas odontológicas en Miraflores, Surco, La Molina y San Borja. Más pacientes desde Google en 90 días.",
  alternates: {
    canonical: `${BRAND.url}/servicios/seo-para-clinicas-dentales`,
  },
};

const planes = [
  {
    nombre: "Local Starter",
    precio: "S/ 890",
    periodo: "/mes",
    descripcion: "Para clínicas que recién empiezan a invertir en SEO local.",
    ideal: "Clínicas con menos de 3 años o sin presencia digital previa",
    incluye: [
      "Auditoría SEO técnica completa",
      "Optimización Google Business Profile",
      "On-page SEO (hasta 5 páginas)",
      "Schema markup Dentist + LocalBusiness",
      "1 artículo de blog mensual",
      "Reporte mensual de posicionamiento",
      "Soporte WhatsApp",
    ],
    destacado: false,
  },
  {
    nombre: "Local Authority",
    precio: "S/ 1,490",
    periodo: "/mes",
    descripcion: "El plan más contratado. Para clínicas que quieren dominar su distrito.",
    ideal: "Clínicas establecidas en Miraflores, Surco, La Molina o San Borja",
    incluye: [
      "Todo lo del plan Starter",
      "Optimización de Google Business Profile avanzada",
      "On-page SEO (hasta 12 páginas)",
      "Construcción de citas NAP locales (20+)",
      "3 artículos de blog mensuales",
      "Link building local especializado salud",
      "Optimización de reseñas Google",
      "Reporte quincenal con métricas reales",
      "Llamada mensual de estrategia 1:1",
    ],
    destacado: true,
  },
  {
    nombre: "Multi-sede",
    precio: "Desde S/ 2,200",
    periodo: "/mes",
    descripcion: "Para grupos odontológicos con varias sedes en Lima.",
    ideal: "2 o más sedes en distintos distritos",
    incluye: [
      "Todo lo del plan Authority por sede",
      "Estrategia de SEO multi-localización",
      "Landing pages individuales por sede",
      "GBP optimizado por cada ubicación",
      "Estrategia de contenido centralizada",
      "Dashboard de métricas unificado",
      "Reuniones quincenales de estrategia",
    ],
    destacado: false,
  },
];

const serviciosDetalle = [
  {
    titulo: "Auditoría SEO técnica",
    descripcion:
      "Análisis completo de tu sitio: velocidad, Core Web Vitals, errores de indexación, estructura de URLs, canonical tags y todos los factores técnicos que Google evalúa para el sector salud (YMYL).",
  },
  {
    titulo: "Google Business Profile",
    descripcion:
      "Optimización profunda de tu perfil: categorías correctas para odontología, atributos de servicio, fotos profesionales, posts regulares y estrategia de generación de reseñas verificadas.",
  },
  {
    titulo: "SEO On-Page especializado",
    descripcion:
      "Cada página de tu sitio optimizada: H1/H2 con keywords locales, meta descriptions para CTR, contenido orientado a intención de búsqueda de pacientes y estructura semántica correcta.",
  },
  {
    titulo: "Schema markup médico",
    descripcion:
      "Implementación de schema tipos Dentist, MedicalBusiness, Service y FAQPage. Estos datos estructurados le dicen a Google exactamente qué eres, dónde estás y qué tratamientos ofreces.",
  },
  {
    titulo: "Contenido local estratégico",
    descripcion:
      "Artículos orientados a keywords long-tail de alta intención: 'ortodoncia invisible Surco', 'implantes dentales Miraflores precio'. Contenido que atrae pacientes listos para agendar.",
  },
  {
    titulo: "Construcción de autoridad local",
    descripcion:
      "Citas NAP en directorios médicos relevantes (Doctoralia, Medifinder, etc.), menciones locales y link building en medios del sector salud en Perú.",
  },
];

const faqs = [
  {
    q: "¿En cuánto tiempo veo resultados?",
    a: "Los primeros movimientos en posiciones se notan entre el mes 2 y 3. Posicionamiento consolidado en top 3 para las búsquedas principales de tu distrito: entre el mes 4 y 6.",
  },
  {
    q: "¿Necesito ya tener un sitio web?",
    a: "Sí. Si no tienes uno o está desactualizado, lo incluimos en el diagnóstico y podemos desarrollarlo como parte del proyecto.",
  },
  {
    q: "¿Hay permanencia mínima?",
    a: "Recomendamos mínimo 6 meses para resultados sólidos. El contrato inicial es de 3 meses, renovable mensualmente.",
  },
  {
    q: "¿Qué diferencia hay con otras agencias?",
    a: "Especialización exclusiva en clínicas odontológicas en Lima. Conocemos el sector salud (YMYL), la competencia por distrito y los hábitos de búsqueda de pacientes en cada zona.",
  },
];

export default function ServicioPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO Local para Clínicas Odontológicas en Lima",
    provider: { "@type": "ProfessionalService", name: BRAND.name, url: BRAND.url },
    description:
      "Servicio especializado de SEO local para clínicas dentales en Miraflores, Surco, La Molina y San Borja. Estrategia técnica, Google Business Profile y contenido orientado a conseguir más pacientes.",
    areaServed: [
      { "@type": "City", name: "Miraflores" },
      { "@type": "City", name: "Surco" },
      { "@type": "City", name: "La Molina" },
      { "@type": "City", name: "San Borja" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Planes SEO para clínicas",
      itemListElement: planes.map((plan) => ({
        "@type": "Offer",
        name: plan.nombre,
        description: plan.descripcion,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <main id="main-content" className="min-h-screen bg-white">

        {/* Breadcrumb */}
        <nav aria-label="Ruta de navegación" className="max-w-6xl mx-auto px-6 pt-8">
          <ol className="flex items-center gap-2 text-xs text-neutral-400">
            <li><a href="/" className="hover:text-neutral-600 transition-colors">Inicio</a></li>
            <li aria-hidden="true">·</li>
            <li><a href="/servicios" className="hover:text-neutral-600 transition-colors">Servicios</a></li>
            <li aria-hidden="true">·</li>
            <li className="text-neutral-600" aria-current="page">SEO para Clínicas Dentales</li>
          </ol>
        </nav>

        {/* Hero de página */}
        <header className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-sky-600 uppercase mb-4">
              Servicio especializado
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-[1.1] mb-6">
              SEO local para clínicas odontológicas en Lima
            </h1>
            <p className="text-lg text-neutral-500 leading-relaxed mb-8">
              Posicionamos tu clínica dental en Google para que pacientes en{" "}
              <strong className="text-neutral-700">Miraflores, Surco, La Molina y San Borja</strong>{" "}
              te encuentren antes que a la competencia. Estrategia técnica, sin
              promesas vacías, con resultados medibles.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/auditoria-seo-gratuita"
                className="bg-sky-500 hover:bg-sky-400 text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:scale-105"
              >
                Auditoría gratuita
              </a>
              <a
                href={`https://wa.me/${BRAND.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-neutral-300 hover:border-neutral-400 text-neutral-700 font-medium px-7 py-3.5 rounded-xl transition-colors"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>

          {/* Stats rápidos */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: "90 días", l: "Para primeros resultados" },
              { v: "12+", l: "Clínicas posicionadas" },
              { v: "YMYL", l: "Especialistas en sector salud" },
              { v: "Lima", l: "Foco en distritos premium" },
            ].map((s) => (
              <div
                key={s.l}
                className="bg-neutral-50 border border-neutral-200 rounded-2xl p-5"
              >
                <p className="text-2xl font-bold text-sky-600 mb-1">{s.v}</p>
                <p className="text-xs text-neutral-500">{s.l}</p>
              </div>
            ))}
          </div>
        </header>

        {/* Qué incluye el servicio */}
        <section aria-label="Qué incluye el servicio SEO" className="bg-neutral-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
              Qué trabajamos en tu clínica
            </h2>
            <p className="text-neutral-500 mb-12 max-w-2xl">
              No existe un template genérico. Cada clínica y cada distrito tiene su propia
              estrategia, pero estos son los pilares que siempre están presentes.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviciosDetalle.map((s) => (
                <div
                  key={s.titulo}
                  className="bg-white border border-neutral-200 rounded-2xl p-6"
                >
                  <h3 className="font-semibold text-neutral-900 mb-2">{s.titulo}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{s.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Planes */}
        <section aria-label="Planes y precios SEO para clínicas" className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3 text-center">
              Planes y precios
            </h2>
            <p className="text-neutral-500 text-center mb-12 max-w-xl mx-auto">
              Precios en soles. Sin costos ocultos. El plan incluye todo lo listado,
              sin upsells sorpresa.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {planes.map((plan) => (
                <div
                  key={plan.nombre}
                  className={`rounded-2xl border p-7 flex flex-col ${
                    plan.destacado
                      ? "bg-neutral-950 border-neutral-800 text-white ring-2 ring-sky-500"
                      : "bg-white border-neutral-200 text-neutral-900"
                  }`}
                >
                  {plan.destacado && (
                    <span className="self-start text-xs font-semibold bg-sky-500 text-white px-3 py-1 rounded-full mb-4">
                      Más popular
                    </span>
                  )}

                  <h3 className={`font-bold text-xl mb-1 ${plan.destacado ? "text-white" : "text-neutral-900"}`}>
                    {plan.nombre}
                  </h3>
                  <p className={`text-sm mb-4 ${plan.destacado ? "text-neutral-400" : "text-neutral-500"}`}>
                    {plan.descripcion}
                  </p>

                  <div className="flex items-baseline gap-1 mb-1">
                    <span className={`text-3xl font-bold ${plan.destacado ? "text-white" : "text-neutral-900"}`}>
                      {plan.precio}
                    </span>
                    <span className={`text-sm ${plan.destacado ? "text-neutral-400" : "text-neutral-400"}`}>
                      {plan.periodo}
                    </span>
                  </div>

                  <p className={`text-xs mb-6 ${plan.destacado ? "text-neutral-500" : "text-neutral-400"}`}>
                    Ideal para: {plan.ideal}
                  </p>

                  <ul className="space-y-2.5 flex-1 mb-7">
                    {plan.incluye.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <svg
                          className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.destacado ? "text-sky-400" : "text-sky-500"}`}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className={plan.destacado ? "text-neutral-300" : "text-neutral-600"}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/auditoria-seo-gratuita"
                    className={`block text-center font-semibold py-3 rounded-xl transition-all hover:scale-105 text-sm ${
                      plan.destacado
                        ? "bg-sky-500 hover:bg-sky-400 text-white"
                        : "border border-neutral-300 hover:border-sky-400 text-neutral-700 hover:text-sky-600"
                    }`}
                  >
                    Empezar con auditoría gratuita
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section aria-label="Preguntas frecuentes sobre el servicio" className="bg-neutral-50 py-20">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-neutral-900 mb-10">
              Preguntas frecuentes sobre el servicio
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white border border-neutral-200 rounded-2xl p-6">
                  <h3 className="font-semibold text-neutral-900 mb-2">{faq.q}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-20 bg-neutral-950 text-white text-center px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-sky-400 uppercase mb-4">
            Primer paso sin riesgo
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Empieza con la auditoría gratuita
          </h2>
          <p className="text-neutral-400 max-w-lg mx-auto mb-8">
            Te digo exactamente en qué posición está tu clínica, qué está fallando
            y cuál sería el plan de acción. Sin costo, sin compromiso.
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