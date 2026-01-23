import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      
      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">

        {/* Empresa */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">
            Trinidev
          </h3>
          <p className="text-sm leading-relaxed">
            Diseño y desarrollo de páginas web profesionales en Lima.
            Creamos sitios rápidos, optimizados para SEO y enfocados en
            generar ventas para tu negocio.
          </p>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contacto</h4>
          <div className="space-y-2 text-sm">

            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-blue-600" />
              <span>Atención digital · Lima, Perú</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} className="text-blue-600" />
              <a
                href="mailto:ventas@trinidev.com"
                className="hover:underline"
              >
                ventas@trinidev.com
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} className="text-blue-600" />
              <a
                href="tel:+51982226070"
                className="hover:underline"
              >
                +51 982 226 070
              </a>
            </div>

          </div>
        </div>

        {/* Redes */}
        <div>
          <h4 className="text-white font-semibold mb-3">Síguenos</h4>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Facebook Trinidev"
              className="hover:text-blue-600 transition-colors"
            >
              <Facebook size={22} />
            </a>

            <a
              href="#"
              aria-label="Instagram Trinidev"
              className="hover:text-blue-600 transition-colors"
            >
              <Instagram size={22} />
            </a>

            <a
              href="#"
              aria-label="LinkedIn Trinidev"
              className="hover:text-blue-600 transition-colors"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>

        {/* CTA SEO */}
        <div>
          <h4 className="text-white font-semibold mb-3">
            ¿Necesitas una web?
          </h4>
          <p className="text-sm mb-3">
            Solicita tu página web profesional en Lima y empieza a vender
            online hoy mismo.
          </p>
          <a
            href="https://wa.me/51982226070"
            className="inline-block text-sm text-blue-600 hover:underline transition-colors"
          >
            Escríbenos por WhatsApp →
          </a>
        </div>

      </div>

      {/* Footer bottom */}
      <div className="border-t border-neutral-800 py-4 text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} Trinidev · Diseño de páginas web en Lima, Perú
      </div>

      {/* Schema SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Trinidev",
            url: "https://trinidev.com",
            email: "ventas@trinidev.com",
            telephone: "+51982226070",
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Lima, Perú",
            },
            sameAs: [
              "https://www.facebook.com/",
              "https://www.instagram.com/",
              "https://www.linkedin.com/",
            ],
          }),
        }}
      />
    </footer>
  );
}
