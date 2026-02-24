// app/blog/page.tsx
// Server Component — SEO máximo para el hub de contenido

import type { Metadata } from "next";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog SEO para Clínicas Odontológicas – Guías y Estrategias",
  description:
    "Artículos especializados en SEO local para dentistas en Lima. Aprende a posicionar tu clínica odontológica en Miraflores, Surco, La Molina y San Borja.",
  alternates: {
    canonical: `${BRAND.url}/blog`,
  },
};

// En producción, estos posts vendrían de un CMS (Sanity, Contentful, MDX)
// Por ahora los definimos aquí como data estática
const posts = [
  {
    slug: "como-aparecer-en-google-maps-dentista-miraflores",
    title: "Cómo aparecer en Google Maps como dentista en Miraflores",
    excerpt:
      "El pack local de Google Maps es el activo más valioso para una clínica dental. Aparecer en los 3 primeros resultados significa ser visto antes que tu competencia. Esta es la guía técnica completa.",
    category: "Google Business Profile",
    readTime: "8 min",
    date: "2025-01-15",
    featured: true,
  },
  {
    slug: "google-business-profile-odontologos-guia-2025",
    title: "Google Business Profile para odontólogos: guía completa 2025",
    excerpt:
      "Optimizar tu perfil de Google Business no es solo rellenar campos. Hay configuraciones específicas para el sector salud que la mayoría de clínicas ignora y que determinan si apareces o no.",
    category: "Google Business Profile",
    readTime: "12 min",
    date: "2025-01-22",
    featured: true,
  },
  {
    slug: "por-que-clinica-dental-no-aparece-google",
    title: "Por qué tu clínica dental no aparece en Google (y cómo solucionarlo)",
    excerpt:
      "Los 7 errores técnicos más comunes que impiden que una clínica odontológica en Lima sea indexada correctamente por Google. Diagnóstico y solución para cada uno.",
    category: "SEO Técnico",
    readTime: "10 min",
    date: "2025-02-01",
    featured: false,
  },
  {
    slug: "seo-local-vs-seo-nacional-clinica-dental-lima",
    title: "SEO local vs SEO nacional: qué necesita una clínica dental en Lima",
    excerpt:
      "No es lo mismo posicionarse para 'dentista' a nivel nacional que para 'dentista en Surco'. Las estrategias son completamente distintas y confundirlas es uno de los errores más caros.",
    category: "Estrategia SEO",
    readTime: "7 min",
    date: "2025-02-10",
    featured: false,
  },
  {
    slug: "cuanto-cuesta-seo-clinicas-dentales-peru",
    title: "¿Cuánto cuesta el SEO para clínicas dentales en Perú?",
    excerpt:
      "Una guía honesta sobre precios, qué incluye un buen servicio de SEO para clínicas odontológicas, y por qué el precio más barato suele ser el más caro a largo plazo.",
    category: "Guías",
    readTime: "9 min",
    date: "2025-02-18",
    featured: false,
  },
  {
    slug: "schema-markup-medico-clinicas-dentales",
    title: "Schema markup para clínicas dentales: la guía técnica completa",
    excerpt:
      "El schema de tipo Dentist y MedicalBusiness es el código invisible que le dice a Google exactamente qué es tu clínica, dónde está y qué servicios ofrece. Implementarlo correctamente puede duplicar tu visibilidad.",
    category: "SEO Técnico",
    readTime: "11 min",
    date: "2025-02-24",
    featured: false,
  },
];

const categories = [...new Set(posts.map((p) => p.category))];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("es-PE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const featured = posts.filter((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog Trinidev – SEO para Clínicas Odontológicas",
    url: `${BRAND.url}/blog`,
    publisher: {
      "@type": "Person",
      name: BRAND.founder,
      url: BRAND.url,
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `${BRAND.url}/blog/${post.slug}`,
      datePublished: post.date,
      author: { "@type": "Person", name: BRAND.founder },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <main id="main-content" className="min-h-screen bg-white">

        {/* Breadcrumb */}
        <nav aria-label="Ruta de navegación" className="max-w-6xl mx-auto px-6 pt-8">
          <ol className="flex items-center gap-2 text-xs text-neutral-400">
            <li><a href="/" className="hover:text-neutral-600 transition-colors">Inicio</a></li>
            <li aria-hidden="true">·</li>
            <li className="text-neutral-600" aria-current="page">Blog</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="max-w-6xl mx-auto px-6 py-14">
          <p className="text-xs font-semibold tracking-[0.2em] text-sky-600 uppercase mb-4">
            Conocimiento especializado
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-[1.1] mb-4 max-w-3xl">
            SEO para clínicas odontológicas: guías y estrategias
          </h1>
          <p className="text-lg text-neutral-500 max-w-2xl">
            Artículos técnicos y estratégicos escritos por {BRAND.founder}.
            Sin contenido genérico — solo lo que funciona en el mercado peruano.
          </p>
        </header>

        <div className="max-w-6xl mx-auto px-6 pb-24">

          {/* Posts destacados */}
          {featured.length > 0 && (
            <section aria-label="Artículos destacados" className="mb-14">
              <p className="text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase mb-6">
                Destacados
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {featured.map((post) => (
                  <a
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block bg-neutral-950 text-white rounded-2xl p-8 hover:bg-neutral-900 transition-colors"
                  >
                    <span className="text-xs font-medium text-sky-400 uppercase tracking-widest">
                      {post.category}
                    </span>
                    <h2 className="mt-3 text-xl font-bold leading-snug group-hover:text-sky-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-neutral-400 text-sm leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 flex items-center justify-between text-xs text-neutral-500">
                      <span>{formatDate(post.date)}</span>
                      <span>{post.readTime} lectura</span>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Filtro de categorías */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-xs bg-neutral-900 text-white px-3 py-1.5 rounded-full font-medium">
              Todos
            </span>
            {categories.map((cat) => (
              <span
                key={cat}
                className="text-xs bg-neutral-100 text-neutral-600 px-3 py-1.5 rounded-full border border-neutral-200 hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Grid de posts */}
          <section aria-label="Todos los artículos">
            <div className="divide-y divide-neutral-100">
              {rest.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col md:flex-row md:items-start gap-4 py-7 hover:bg-neutral-50 -mx-4 px-4 rounded-xl transition-colors"
                >
                  <div className="flex-shrink-0 w-28 hidden md:block">
                    <time
                      dateTime={post.date}
                      className="text-xs text-neutral-400"
                    >
                      {formatDate(post.date)}
                    </time>
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-medium text-sky-600 uppercase tracking-widest">
                      {post.category}
                    </span>
                    <h2 className="mt-1.5 font-semibold text-neutral-900 group-hover:text-sky-600 transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm text-neutral-500 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-xs text-neutral-400 self-start pt-1">
                    {post.readTime}
                  </div>
                </a>
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  );
}