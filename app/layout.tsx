import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import AutoTheme from "@/components/AutoTheme";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Diseño Web Profesional | Trinidev",
  description:
    "Creamos páginas web rápidas, optimizadas para SEO y conversiones.",
  openGraph: {
    title: "Diseño Web Profesional",
    description: "Webs rápidas y optimizadas para SEO",
    url: "https://trinidev.com",
    siteName: "Trinidev",
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased bg-white text-gray-900">
        <AutoTheme />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
