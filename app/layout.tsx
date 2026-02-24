// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import { BRAND } from "@/lib/constants";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatBot from "@/components/ChatBot";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title: {
    default: `SEO para Clínicas Odontológicas en Lima | ${BRAND.name}`,
    template: `%s | ${BRAND.name}`,
  },
  description:
    "Especialistas en SEO local para clínicas odontológicas en Miraflores, Surco, La Molina y San Borja. Más pacientes desde Google. Auditoría gratuita.",
  keywords: [
    "SEO para clínicas odontológicas Lima",
    "posicionamiento web dentistas Miraflores",
    "SEO local Lima",
    "marketing digital clínicas dentales",
    "Google Business Profile Lima",
    "Jeanpiere Trinidad SEO",
  ],
  authors: [{ name: BRAND.founder, url: BRAND.url }],
  creator: BRAND.founder,
  publisher: BRAND.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BRAND.url,
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: BRAND.url,
    siteName: BRAND.name,
    title: "SEO para Clínicas Odontológicas en Lima | Trinidev",
    description:
      "Jeanpiere Trinidad – Especialista en SEO local para clínicas odontológicas en distritos premium de Lima. Auditoría SEO gratuita.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Trinidev – SEO para Clínicas Odontológicas en Lima",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO para Clínicas Odontológicas en Lima",
    description:
      "Más pacientes desde Google. Especialistas en SEO local para dentistas en Miraflores, Surco y La Molina.",
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
};

// Script inline bloqueante — previene flash de tema incorrecto.
// Va en <head> antes del paint, no como componente client.
const autoThemeScript = `
  (function() {
    var hour = new Date().getHours();
    var isNightHour = hour >= 18 || hour < 6;
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isNightHour || prefersDark) {
      document.documentElement.classList.add('dark');
    }
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-PE" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Auto dark mode sin flash — debe ejecutarse antes del paint */}
        <script dangerouslySetInnerHTML={{ __html: autoThemeScript }} />

        {/* Preconnect — reducen latencia de Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Material Symbols — carga como stylesheet normal, sin onLoad string */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=block"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <LenisProvider>{children}</LenisProvider>
        <Footer/>
        <ChatBot />
      </body>
    </html>
  );
}
