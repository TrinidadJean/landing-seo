// lib/schema.ts
import { BRAND } from "./constants";

// Schema para la homepage — ProfessionalService + Person (autoridad personal)
export function getHomepageSchema() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${BRAND.url}/#organization`,
      name: BRAND.name,
      url: BRAND.url,
      email: BRAND.email,
      telephone: BRAND.phone,
      description:
        "Agencia especializada en SEO local para clínicas odontológicas en distritos premium de Lima: Miraflores, Surco, La Molina y San Borja.",
      founder: {
        "@type": "Person",
        "@id": `${BRAND.url}/#founder`,
        name: BRAND.founder,
        jobTitle: BRAND.founderTitle,
        url: BRAND.url,
        sameAs: [
          "https://www.linkedin.com/in/jeanpiere-trinidad",
        ],
      },
      areaServed: BRAND.areaServed.map((area) => ({
        "@type": "City",
        name: area,
        containedInPlace: {
          "@type": "Country",
          name: "Perú",
        },
      })),
      knowsAbout: [
        "SEO local para clínicas dentales",
        "Posicionamiento web en Lima",
        "Google Business Profile para odontólogos",
        "Marketing digital para clínicas",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de SEO para Clínicas Odontológicas",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Auditoría SEO Gratuita para Clínicas",
              url: `${BRAND.url}/auditoria-seo-gratuita`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SEO Local para Clínicas Odontológicas en Lima",
              url: `${BRAND.url}/servicios/seo-para-clinicas-dentales`,
            },
          },
        ],
      },
    },
    // Schema de Persona — fundamental para E-E-A-T (Experience demostrable)
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${BRAND.url}/#founder`,
      name: BRAND.founder,
      jobTitle: BRAND.founderTitle,
      worksFor: {
        "@id": `${BRAND.url}/#organization`,
      },
      url: BRAND.url,
    },
  ];
}

// Schema específico para landing de auditoría gratuita
export function getAuditoriaSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Auditoría SEO Gratuita para Clínicas Odontológicas",
    provider: { "@id": `${BRAND.url}/#organization` },
    description:
      "Análisis completo del posicionamiento web de tu clínica dental en Lima. Detectamos por qué Google no te muestra ante pacientes en Miraflores, Surco, La Molina y San Borja.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "PEN",
    },
    areaServed: {
      "@type": "City",
      name: "Lima",
    },
  };
}