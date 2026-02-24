// app/page.tsx — Server Component puro
import { getHomepageSchema } from "@/lib/schema";
import type { Metadata } from "next";
import { BRAND } from "@/lib/constants";

// Metadata específica de homepage (override del layout)
export const metadata: Metadata = {
  title: `SEO para Clínicas Odontológicas en Lima | ${BRAND.name}`,
  description:
    "Especialistas en SEO local para clínicas dentales en Miraflores, Surco, La Molina y San Borja. Consigue más pacientes desde Google. Auditoría gratuita sin compromiso.",
  alternates: {
    canonical: BRAND.url,
  },
};

// Importa las secciones — algunas serán client, pero el page es server
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import CaseStudy from "@/components/sections/CaseStudy";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA"; 

export default function HomePage() {
  const schemas = getHomepageSchema();

  return (
    <>
      {/* JSON-LD — inyectado en el Server Component, no en footer */}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main id="main-content">
        <Hero />
        <SocialProof />   {/* Logos de clínicas, Google reviews count */}
        <Services />
        <HowItWorks />    {/* 3 pasos: Auditoría → Estrategia → Resultados */}
        <CaseStudy />     {/* Caso real con números */}
        <FAQ />           {/* 6 preguntas target keywords long-tail */}
        <FinalCTA />
      </main>
    </>
  );
}