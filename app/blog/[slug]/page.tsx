// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BRAND } from "@/lib/constants";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  sections: { heading: string; content: string }[];
  cta: { text: string; buttonText: string; href: string };
  relatedPosts: string[];
};

const posts: Record<string, Post> = {
  "como-aparecer-en-google-maps-dentista-miraflores": {
    slug: "como-aparecer-en-google-maps-dentista-miraflores",
    title: "Cómo aparecer en Google Maps como dentista en Miraflores",
    excerpt:
      "El pack local de Google Maps es el activo más valioso para una clínica dental. Aparecer en los 3 primeros resultados significa ser visto antes que tu competencia.",
    category: "Google Business Profile",
    readTime: "8 min",
    date: "2025-01-15",
    author: BRAND.founder,
    sections: [
      {
        heading: "¿Qué es el pack local de Google y por qué importa tanto?",
        content:
          "Cuando alguien busca 'dentista en Miraflores' en Google, los primeros 3 resultados que aparecen —con mapa, estrellas y teléfono— son el pack local. Según datos de BrightLocal, el 42% de los clics en búsquedas con intención local van a esos 3 resultados. Si no estás ahí, eres invisible para casi la mitad de tus pacientes potenciales.",
      },
      {
        heading: "El factor más importante: la completitud de tu Google Business Profile",
        content:
          "Google premia los perfiles completos. Eso significa categoría principal correcta (Dentist, no Healthcare Provider genérico), horarios exactos incluyendo feriados, descripción con keywords locales naturales, y al menos 10 fotos reales de tu clínica. Los perfiles incompletos pierden posición frente a competidores aunque tengan peor reputación.",
      },
      {
        heading: "Las reseñas: cantidad, velocidad y respuesta",
        content:
          "Para el pack local de Miraflores necesitas mínimo 15-20 reseñas con 4.5+ estrellas. Pero la cantidad no es el único factor: Google también mide la velocidad de generación de reseñas (cuántas recibes por mes) y si respondes a todas. Un consultorio con 30 reseñas que no responde pierde frente a uno con 20 reseñas que responde en menos de 24 horas.",
      },
      {
        heading: "NAP: la consistencia que Google no perdona",
        content:
          "NAP significa Name, Address, Phone. Tu nombre de clínica, dirección y teléfono deben ser exactamente iguales en Google Business Profile, tu sitio web, directorios médicos (Doctoralia, Medifinder), redes sociales y cualquier otra mención digital. Un solo campo diferente —aunque sea una abreviatura de calle— genera señales contradictorias que Google penaliza bajando tu posición en el pack local.",
      },
      {
        heading: "La señal que más clínicas ignoran: el sitio web local",
        content:
          "Google cruza tu Business Profile con tu sitio web. Si tu web no menciona Miraflores explícitamente, si no tiene una página de servicios con keywords locales, si carga lento o si no tiene schema markup de tipo Dentist, Google reduce la confianza en tu perfil. El pack local y el SEO orgánico están más conectados de lo que parece.",
      },
    ],
    cta: {
      text: "¿Quieres que analice el estado de tu Google Business Profile?",
      buttonText: "Solicitar auditoría gratuita",
      href: "/auditoria-seo-gratuita",
    },
    relatedPosts: [
      "google-business-profile-odontologos-guia-2025",
      "por-que-clinica-dental-no-aparece-google",
    ],
  },

  "google-business-profile-odontologos-guia-2025": {
    slug: "google-business-profile-odontologos-guia-2025",
    title: "Google Business Profile para odontólogos: guía completa 2025",
    excerpt:
      "Optimizar tu perfil de Google Business no es solo rellenar campos. Hay configuraciones específicas para el sector salud que la mayoría de clínicas ignora y que determinan si apareces o no.",
    category: "Google Business Profile",
    readTime: "12 min",
    date: "2025-01-22",
    author: BRAND.founder,
    sections: [
      {
        heading: "Por qué Google Business Profile es diferente para clínicas de salud",
        content:
          "Google clasifica las clínicas odontológicas como negocios YMYL (Your Money Your Life). Esto significa que el algoritmo aplica criterios de evaluación más estrictos que para una pizzería o una tienda de ropa. Tu perfil necesita demostrar autoridad, confiabilidad y experiencia —los tres pilares de E-E-A-T— desde la primera señal que Google recibe.",
      },
      {
        heading: "La categoría principal: el error que comete el 60% de clínicas",
        content:
          "La categoría correcta para una clínica odontológica general es 'Dentist', no 'Medical clinic' ni 'Healthcare provider'. Esta diferencia determina en qué búsquedas compites. Si eres ortodoncista, agrega 'Orthodontist' como categoría secundaria. Si haces implantes, agrega 'Dental implants periodontist'. Cada categoría secundaria relevante amplía tu visibilidad.",
      },
      {
        heading: "Atributos de servicio: la configuración que nadie completa",
        content:
          "Google Business Profile tiene docenas de atributos específicos para clínicas: 'Acepta nuevos pacientes', 'Estacionamiento disponible', 'Acceso para sillas de ruedas', 'Pago con tarjeta'. Cada atributo completado es una señal adicional de relevancia. Los perfiles con todos los atributos relevantes completos tienen entre 30% y 50% más visibilidad en el pack local.",
      },
      {
        heading: "Fotos: cantidad, calidad y frecuencia",
        content:
          "Los perfiles con más de 100 fotos reciben 520% más llamadas que los que tienen menos de 10. Pero no cualquier foto: necesitas fotos del exterior (para que los pacientes reconozcan tu clínica al llegar), del interior, del equipo médico y del equipamiento. Actualiza con nuevas fotos al menos cada 2 semanas para mantener la señal de actividad.",
      },
      {
        heading: "Posts de Google Business: el canal que el 90% de clínicas ignora",
        content:
          "Google Business Profile tiene una función de publicaciones similar a redes sociales. Publicar 2-3 veces por semana sobre servicios, promociones o contenido educativo genera señales de actividad que mejoran tu posicionamiento en el pack local. Los posts caducan cada 7 días, así que la constancia es la clave.",
      },
      {
        heading: "Gestión de reseñas: el protocolo correcto",
        content:
          "Responde a todas las reseñas, positivas y negativas, en menos de 24 horas. Para las negativas, nunca discutas ni reveles información del paciente (confidencialidad médica). La respuesta correcta es siempre empática, ofrece continuar por privado y demuestra que tu clínica se preocupa por la experiencia. Google evalúa la tasa y velocidad de respuesta como señal de calidad.",
      },
    ],
    cta: {
      text: "¿Quieres que revise el Google Business Profile de tu clínica?",
      buttonText: "Solicitar auditoría gratuita",
      href: "/auditoria-seo-gratuita",
    },
    relatedPosts: [
      "como-aparecer-en-google-maps-dentista-miraflores",
      "por-que-clinica-dental-no-aparece-google",
    ],
  },

  "por-que-clinica-dental-no-aparece-google": {
    slug: "por-que-clinica-dental-no-aparece-google",
    title: "Por qué tu clínica dental no aparece en Google (y cómo solucionarlo)",
    excerpt:
      "Los 7 errores técnicos más comunes que impiden que una clínica odontológica en Lima sea indexada correctamente por Google. Diagnóstico y solución para cada uno.",
    category: "SEO Técnico",
    readTime: "10 min",
    date: "2025-02-01",
    author: BRAND.founder,
    sections: [
      {
        heading: "Error 1: Google Business Profile sin verificar o incompleto",
        content:
          "Un perfil sin verificar es invisible en el pack local. El proceso de verificación puede tardar hasta 14 días por postal o ser inmediato por video. Además, un perfil verificado pero con menos del 80% de campos completados compite en desventaja. Empieza aquí antes de cualquier otra acción.",
      },
      {
        heading: "Error 2: Sitio web sin versión móvil optimizada",
        content:
          "El 78% de las búsquedas de dentistas en Lima se hacen desde celular. Si tu sitio carga en más de 3 segundos en móvil o tiene problemas de usabilidad, Google lo penaliza directamente. Core Web Vitals —LCP, FID, CLS— son factores de ranking confirmados desde 2021.",
      },
      {
        heading: "Error 3: Sin schema markup de tipo Dentist",
        content:
          "El schema markup es código invisible que le dice a Google exactamente qué es tu negocio. Sin schema de tipo Dentist y LocalBusiness, Google infiere tu categoría del contenido de la página, con mucho menor precisión. Esto reduce tu relevancia en búsquedas específicas como 'implantes dentales Surco'.",
      },
      {
        heading: "Error 4: NAP inconsistente entre plataformas",
        content:
          "Si tu clínica se llama 'Clínica Dental Salinas' en Google pero 'Consultorio Salinas' en Doctoralia y 'Dr. Salinas Odontología' en Facebook, Google recibe señales contradictorias y reduce la confianza en tu perfil. La consistencia exacta de nombre, dirección y teléfono en todas las plataformas es fundamental.",
      },
      {
        heading: "Error 5: Sin páginas de servicio individuales",
        content:
          "Tener una sola página que liste todos tus servicios ('ortodoncia, implantes, blanqueamiento...') es mucho menos efectivo que tener una página dedicada para cada servicio con contenido específico. Google necesita páginas individuales para posicionar búsquedas como 'ortodoncia invisible Miraflores'.",
      },
      {
        heading: "Error 6: Pocas reseñas o reseñas sin respuesta",
        content:
          "Menos de 10 reseñas en Google coloca a tu clínica en desventaja competitiva en Lima. Pero más grave aún es tener reseñas negativas sin respuesta: Google interpreta la falta de respuesta como señal de abandono del perfil, lo que reduce el ranking.",
      },
      {
        heading: "Error 7: Sin contenido local relevante",
        content:
          "Si tu sitio web nunca menciona el distrito donde estás, los barrios cercanos o referencias locales, Google no puede asociar tu clínica con búsquedas geográficas. El contenido local —artículos, páginas de servicio, descripciones— es la señal más potente para el SEO local.",
      },
    ],
    cta: {
      text: "¿Cuántos de estos errores tiene tu clínica?",
      buttonText: "Descubrirlo con auditoría gratuita",
      href: "/auditoria-seo-gratuita",
    },
    relatedPosts: [
      "google-business-profile-odontologos-guia-2025",
      "schema-markup-medico-clinicas-dentales",
    ],
  },

  "seo-local-vs-seo-nacional-clinica-dental-lima": {
    slug: "seo-local-vs-seo-nacional-clinica-dental-lima",
    title: "SEO local vs SEO nacional: qué necesita una clínica dental en Lima",
    excerpt:
      "No es lo mismo posicionarse para 'dentista' a nivel nacional que para 'dentista en Surco'. Las estrategias son completamente distintas y confundirlas es uno de los errores más caros.",
    category: "Estrategia SEO",
    readTime: "7 min",
    date: "2025-02-10",
    author: BRAND.founder,
    sections: [
      {
        heading: "La diferencia fundamental entre SEO local y nacional",
        content:
          "El SEO nacional compite por keywords genéricas con volumen alto pero intención difusa: 'dentista', 'ortodoncia', 'implantes dentales'. El SEO local compite por keywords con intención geográfica clara: 'dentista en Miraflores', 'ortodoncia Surco precio'. La segunda tiene menos volumen pero muchísima más intención de conversión.",
      },
      {
        heading: "Por qué una clínica dental casi nunca necesita SEO nacional",
        content:
          "Un paciente que vive en La Molina no va a viajar a Ate para ver a un dentista, por más que ese dentista tenga mejor posicionamiento nacional. El radio de acción efectivo de una clínica odontológica en Lima es de 5-10 km. Invertir en SEO nacional para una clínica local es un desperdicio de recursos.",
      },
      {
        heading: "El pack local de Google: el activo más valioso para clínicas",
        content:
          "El pack local —los 3 resultados con mapa que aparecen en búsquedas con intención local— genera entre el 35% y 44% de todos los clics en búsquedas de servicios locales. Este posicionamiento no se logra con SEO nacional; requiere estrategias específicas de Google Business Profile, citas locales y señales de relevancia geográfica.",
      },
      {
        heading: "Señales locales vs señales nacionales: en qué se trabaja",
        content:
          "El SEO nacional se enfoca en backlinks de alto DA, contenido de largo alcance y autoridad de dominio general. El SEO local se enfoca en consistencia NAP, citas en directorios locales y médicos, reseñas geoetiquetadas, schema markup de LocalBusiness y contenido hiperlocal que mencione distritos, referencias geográficas y términos que usan los pacientes de esa zona.",
      },
    ],
    cta: {
      text: "¿Quieres saber cómo posicionar tu clínica en tu distrito específico?",
      buttonText: "Solicitar auditoría gratuita",
      href: "/auditoria-seo-gratuita",
    },
    relatedPosts: [
      "por-que-clinica-dental-no-aparece-google",
      "como-aparecer-en-google-maps-dentista-miraflores",
    ],
  },

  "cuanto-cuesta-seo-clinicas-dentales-peru": {
    slug: "cuanto-cuesta-seo-clinicas-dentales-peru",
    title: "¿Cuánto cuesta el SEO para clínicas dentales en Perú?",
    excerpt:
      "Una guía honesta sobre precios, qué incluye un buen servicio de SEO para clínicas odontológicas, y por qué el precio más barato suele ser el más caro a largo plazo.",
    category: "Guías",
    readTime: "9 min",
    date: "2025-02-18",
    author: BRAND.founder,
    sections: [
      {
        heading: "El rango real de precios en el mercado peruano",
        content:
          "En Lima, los servicios de SEO para clínicas dentales van desde S/ 300/mes (freelancers sin especialización) hasta S/ 3,000+/mes (agencias grandes). El rango más común para un servicio serio y especializado está entre S/ 800 y S/ 1,800 mensuales. Por debajo de S/ 600/mes, raramente hay suficientes horas de trabajo para mover el posicionamiento de forma significativa.",
      },
      {
        heading: "Qué debería incluir un servicio de SEO para clínicas",
        content:
          "Un servicio completo incluye: auditoría técnica inicial, optimización on-page continua, gestión de Google Business Profile, construcción de citas locales, creación de contenido (mínimo 1-2 artículos/mes), reporte mensual con métricas reales y acceso directo al especialista. Si alguno de estos elementos falta, el servicio está incompleto.",
      },
      {
        heading: "Por qué el SEO más barato suele ser el más caro",
        content:
          "Un servicio de S/ 300/mes que no mueve posiciones en 6 meses te habrá costado S/ 1,800 sin retorno. Un servicio de S/ 1,200/mes que en 4 meses genera 15 pacientes nuevos adicionales por mes —a un ticket promedio de S/ 300 por consulta inicial— tiene un ROI de 500% mensual. El costo del SEO hay que evaluarlo frente al valor de un paciente nuevo, no frente al precio de otros servicios.",
      },
      {
        heading: "Señales de alarma para detectar servicios de baja calidad",
        content:
          "Desconfía si: garantizan posición #1 en menos de 30 días, no muestran casos anteriores con resultados verificables, cobran por 'keywords' en lugar de por estrategia integral, no incluyen reportes detallados, o subcontratan todo el trabajo offshore sin supervisión local. El SEO para el mercado peruano requiere conocimiento del mercado local.",
      },
    ],
    cta: {
      text: "¿Quieres saber exactamente cuánto invertiría tu clínica y qué resultado puedes esperar?",
      buttonText: "Solicitar auditoría gratuita",
      href: "/auditoria-seo-gratuita",
    },
    relatedPosts: [
      "seo-local-vs-seo-nacional-clinica-dental-lima",
      "por-que-clinica-dental-no-aparece-google",
    ],
  },

  "schema-markup-medico-clinicas-dentales": {
    slug: "schema-markup-medico-clinicas-dentales",
    title: "Schema markup para clínicas dentales: la guía técnica completa",
    excerpt:
      "El schema de tipo Dentist y MedicalBusiness es el código invisible que le dice a Google exactamente qué es tu clínica, dónde está y qué servicios ofrece.",
    category: "SEO Técnico",
    readTime: "11 min",
    date: "2025-02-24",
    author: BRAND.founder,
    sections: [
      {
        heading: "Qué es el schema markup y por qué importa para clínicas",
        content:
          "Schema markup es un vocabulario de código (JSON-LD) que agrega contexto semántico a tu sitio web. Sin schema, Google infiere qué es tu negocio del texto de la página. Con schema, le dices explícitamente: 'soy una clínica dental, estoy en Miraflores, mi horario es este, estos son mis servicios'. La diferencia en precisión de indexación es enorme.",
      },
      {
        heading: "Los tipos de schema obligatorios para una clínica odontológica",
        content:
          "Toda clínica dental necesita al menos: Dentist (tipo principal), LocalBusiness (para señales de negocio local), MedicalBusiness (para credenciales YMYL), y Service (para cada tratamiento que ofreces). Opcionalmente: FAQPage (para el bloque de preguntas frecuentes), Review (si tienes testimonios en el sitio) y Person (para posicionar la autoridad del doctor principal).",
      },
      {
        heading: "Implementación correcta del schema Dentist",
        content:
          "El schema Dentist debe incluir: name exacto (igual al de Google Business Profile), address con addressLocality del distrito, telephone con formato internacional, openingHours en formato schema.org, priceRange referencial, y sameAs con URLs de todas tus redes sociales y directorios. Cada campo adicional que completes es una señal más para Google.",
      },
      {
        heading: "Schema de servicios: cómo estructurar tratamientos",
        content:
          "Para cada tratamiento principal (ortodoncia, implantes, blanqueamiento), crea un schema de tipo MedicalProcedure o Service con nombre, descripción, proveedor y área de servicio. Esto permite que Google muestre rich snippets específicos cuando alguien busca ese tratamiento en tu distrito.",
      },
      {
        heading: "Cómo verificar que tu schema funciona correctamente",
        content:
          "Usa la herramienta Rich Results Test de Google (search.google.com/test/rich-results) para verificar que tu schema no tiene errores. Un schema con errores puede ser peor que no tener schema, porque genera señales contradictorias. Después de implementar, revisa Google Search Console en la sección 'Mejoras' para ver el estado de indexación de tus datos estructurados.",
      },
    ],
    cta: {
      text: "¿Tu clínica tiene schema markup implementado correctamente?",
      buttonText: "Verificar con auditoría gratuita",
      href: "/auditoria-seo-gratuita",
    },
    relatedPosts: [
      "por-que-clinica-dental-no-aparece-google",
      "seo-local-vs-seo-nacional-clinica-dental-lima",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return { title: "Artículo no encontrado" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author, url: BRAND.url }],
    alternates: {
      canonical: `${BRAND.url}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${BRAND.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [BRAND.url],
      tags: [post.category, "SEO Lima", "clínicas odontológicas"],
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("es-PE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `${BRAND.url}/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      url: BRAND.url,
    },
    publisher: {
      "@type": "Organization",
      name: BRAND.name,
      url: BRAND.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BRAND.url}/blog/${post.slug}`,
    },
    articleSection: post.category,
    wordCount: post.sections.reduce(
      (acc, s) => acc + s.content.split(" ").length,
      0
    ),
  };

  const relatedPosts = post.relatedPosts
    .map((s) => posts[s])
    .filter(Boolean) as Post[];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <main id="main-content" className="min-h-screen bg-white">

        {/* Breadcrumb */}
        <nav aria-label="Ruta de navegación" className="max-w-3xl mx-auto px-6 pt-8">
          <ol className="flex items-center gap-2 text-xs text-neutral-400 flex-wrap">
            <li>
              <a href="/" className="hover:text-neutral-600 transition-colors">
                Inicio
              </a>
            </li>
            <li aria-hidden="true">·</li>
            <li>
              <a href="/blog" className="hover:text-neutral-600 transition-colors">
                Blog
              </a>
            </li>
            <li aria-hidden="true">·</li>
            <li
              className="text-neutral-600 truncate max-w-[200px]"
              aria-current="page"
            >
              {post.category}
            </li>
          </ol>
        </nav>

        {/* Article header */}
        <header className="max-w-3xl mx-auto px-6 py-10">
          <span className="text-xs font-semibold tracking-[0.2em] text-sky-600 uppercase">
            {post.category}
          </span>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-neutral-900 leading-[1.15] mb-5">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-400 pb-8 border-b border-neutral-100">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-sky-100 flex items-center justify-center">
                <span className="text-sky-600 font-bold text-xs">JT</span>
              </div>
              <span className="text-neutral-600 font-medium">{post.author}</span>
            </div>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>{post.readTime} de lectura</span>
          </div>

          <p className="mt-8 text-lg text-neutral-600 leading-relaxed border-l-4 border-sky-200 pl-5">
            {post.excerpt}
          </p>
        </header>

        {/* Article body */}
        <article className="max-w-3xl mx-auto px-6 pb-16">
          <div className="space-y-10">
            {post.sections.map((section, i) => (
              <section key={i}>
                <h2 className="text-xl font-bold text-neutral-900 mb-3">
                  {section.heading}
                </h2>
                <p className="text-neutral-600 leading-relaxed">
                  {section.content}
                </p>
              </section>
            ))}
          </div>

          {/* CTA inline */}
          <div className="mt-14 bg-neutral-950 text-white rounded-2xl p-8">
            <p className="font-semibold text-lg mb-2">{post.cta.text}</p>
            <p className="text-neutral-400 text-sm mb-5">
              Auditoría sin costo · Resultado en 48 horas · Sin compromiso
            </p>
            <a
              href={post.cta.href}
              className="inline-block bg-sky-500 hover:bg-sky-400 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:scale-105 text-sm"
            >
              {post.cta.buttonText}
            </a>
          </div>
        </article>

        {/* Artículos relacionados */}
        {relatedPosts.length > 0 && (
          <aside
            aria-label="Artículos relacionados"
            className="bg-neutral-50 border-t border-neutral-200 py-16"
          >
            <div className="max-w-3xl mx-auto px-6">
              <p className="text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase mb-6">
                Seguir leyendo
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((related) => (
                  <a
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group block bg-white border border-neutral-200 rounded-2xl p-6 hover:border-sky-200 hover:shadow-sm transition-all"
                  >
                    <span className="text-xs font-medium text-sky-600 uppercase tracking-widest">
                      {related.category}
                    </span>
                    <h3 className="mt-2 font-semibold text-neutral-900 leading-snug group-hover:text-sky-600 transition-colors">
                      {related.title}
                    </h3>
                    <p className="mt-2 text-xs text-neutral-400">
                      {related.readTime}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        )}

      </main>
    </>
  );
}