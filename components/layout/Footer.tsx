// components/layout/Footer.tsx
// Server Component — sin "use client" necesario
import { MapPin, Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";
import { BRAND, ROUTES } from "@/lib/constants";

const links = {
  servicios: [
    { label: "SEO para Clínicas Dentales", href: ROUTES.servicios },
    { label: "Google Business Profile", href: `${ROUTES.servicios}#gbp` },
    { label: "SEO Técnico Médico", href: `${ROUTES.servicios}#tecnico` },
    { label: "Contenido Local", href: `${ROUTES.servicios}#contenido` },
  ],
  recursos: [
    { label: "Blog SEO Odontológico", href: ROUTES.blog },
    { label: "Casos de Éxito", href: ROUTES.casos },
    { label: "Auditoría SEO Gratuita", href: ROUTES.auditoria },
  ],
  distritos: [
    { label: "SEO Dentistas Miraflores", href: `${ROUTES.servicios}#miraflores` },
    { label: "SEO Dentistas Surco", href: `${ROUTES.servicios}#surco` },
    { label: "SEO Dentistas La Molina", href: `${ROUTES.servicios}#la-molina` },
    { label: "SEO Dentistas San Borja", href: `${ROUTES.servicios}#san-borja` },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400">

      {/* Franja superior CTA */}
      <div className="border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold text-lg">
              ¿Tu clínica no aparece en Google?
            </p>
            <p className="text-neutral-400 text-sm mt-0.5">
              Auditoría SEO gratuita · Resultado en 48 horas · Sin compromiso
            </p>
          </div>
          <a
            href={ROUTES.auditoria}
            className="flex-shrink-0 bg-sky-500 hover:bg-sky-400 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:scale-105 text-sm"
          >
            Solicitar auditoría gratuita
          </a>
        </div>
      </div>

      {/* Cuerpo principal */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">

        {/* Columna marca — ocupa 2 columnas */}
        <div className="lg:col-span-2">
          <a href="/" className="inline-block text-white font-bold text-xl mb-3">
            {BRAND.name}
          </a>
          <p className="text-sm leading-relaxed mb-5 max-w-xs">
            Especialistas en SEO local para clínicas odontológicas en Lima.
            Más pacientes desde Google en Miraflores, Surco, La Molina y San Borja.
          </p>

          {/* Autoridad personal */}
          <div className="flex items-center gap-3 mb-6 p-3 rounded-xl bg-neutral-900 border border-neutral-800 w-fit">
            <div className="w-9 h-9 rounded-full bg-sky-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">JT</span>
            </div>
            <div>
              <p className="text-white text-sm font-medium leading-tight">{BRAND.founder}</p>
              <p className="text-neutral-500 text-xs">Especialista SEO · Lima, Perú</p>
            </div>
          </div>

          {/* Contacto */}
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-sky-500 flex-shrink-0" />
              <span>Atención digital · Lima, Perú</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-sky-500 flex-shrink-0" />
              <a href={`mailto:${BRAND.email}`} className="hover:text-white transition-colors">
                {BRAND.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-sky-500 flex-shrink-0" />
              <a href={`tel:${BRAND.phone}`} className="hover:text-white transition-colors">
                {BRAND.phone}
              </a>
            </div>
          </div>

          {/* Redes */}
          <div className="flex gap-3 mt-5">
            {[
              { icon: Facebook, label: "Facebook Trinidev", href: "https://facebook.com/trinidev" },
              { icon: Instagram, label: "Instagram Trinidev", href: "https://www.instagram.com/dev_a_medida/" },
              { icon: Linkedin, label: "LinkedIn Jeanpiere Trinidad", href: "https://www.linkedin.com/in/jean-piere-trinidad-949872288/" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-800 hover:bg-sky-600 flex items-center justify-center transition-colors"
              >
                <Icon size={16} className="text-neutral-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Servicios */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Servicios</h4>
          <ul className="space-y-2.5">
            {links.servicios.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Recursos */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Recursos</h4>
          <ul className="space-y-2.5">
            {links.recursos.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SEO por distrito — interno linking valioso */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Por distrito</h4>
          <ul className="space-y-2.5">
            {links.distritos.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Footer bottom */}
      <div className="border-t border-neutral-800 py-5 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-500">
          <p>
            © {new Date().getFullYear()} {BRAND.name} · SEO para clínicas odontológicas en Lima, Perú
          </p>
          <div className="flex items-center gap-4">
            <a href="/privacidad" className="hover:text-neutral-300 transition-colors">
              Política de privacidad
            </a>
            <a href="/terminos" className="hover:text-neutral-300 transition-colors">
              Términos
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}