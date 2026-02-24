// lib/constants.ts
// NAP unificado — crítico para SEO local. 
// Un solo número inconsistente destruye rankings en Google Business.

export const BRAND = {
  name: "Trinidev",
  founder: "Jeanpiere Trinidad",
  founderTitle: "Especialista en SEO Local para Clínicas Odontológicas",
  url: "https://trinidev.com",
  email: "ventas@trinidev.com",
  // UN SOLO NÚMERO — el de footer decía 982226070, hero decía 986929877
  // Unifica esto. Usaré el del footer como referencia:
  phone: "+51982226070",
  whatsapp: "51982226070",
  location: "Lima, Perú",
  areaServed: ["Miraflores", "Surco", "La Molina", "San Borja", "Lima"],
} as const;

export const ROUTES = {
  auditoria: "/auditoria-seo-gratuita",
  servicios: "/servicios/seo-para-clinicas-dentales",
  casos: "/casos-de-exito",
  blog: "/blog",
} as const;