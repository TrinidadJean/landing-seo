"use client";

// app/auditoria-seo-gratuita/AuditoriaForm.tsx
// Client Component — formulario de conversión

import { useState } from "react";
import { BRAND } from "@/lib/constants";

type FormState = "idle" | "loading" | "success" | "error";

const distritos = [
  "Miraflores",
  "Surco",
  "La Molina",
  "San Borja",
  "San Isidro",
  "Barranco",
  "Otro",
];

export default function AuditoriaForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    nombre: "",
    clinica: "",
    web: "",
    distrito: "",
    whatsapp: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");

    // Redirección a WhatsApp con los datos del formulario pre-rellenados
    // Reemplaza por tu endpoint de formulario (Resend, Formspree, etc.) si prefieres email
    const mensaje = encodeURIComponent(
      `Hola Jeanpiere, solicito la auditoría SEO gratuita.\n\n` +
        `Nombre: ${form.nombre}\n` +
        `Clínica: ${form.clinica}\n` +
        `Web actual: ${form.web || "Sin web"}\n` +
        `Distrito: ${form.distrito}\n` +
        `WhatsApp: ${form.whatsapp}`
    );

    // Simula un pequeño delay para feedback visual
    await new Promise((r) => setTimeout(r, 600));
    setState("success");

    setTimeout(() => {
      window.open(`https://wa.me/${BRAND.whatsapp}?text=${mensaje}`, "_blank");
    }, 800);
  }

  if (state === "success") {
    return (
      <div className="bg-white border border-neutral-200 rounded-2xl p-8 text-center shadow-sm">
        <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-neutral-900 mb-2">
          ¡Solicitud enviada!
        </h3>
        <p className="text-sm text-neutral-500">
          Abriendo WhatsApp para completar tu solicitud. Te contactaré en menos
          de 24 horas con tu auditoría.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm">
      <h2 className="text-xl font-bold text-neutral-900 mb-1">
        Solicita tu auditoría gratuita
      </h2>
      <p className="text-sm text-neutral-400 mb-6">
        Sin costo · Sin compromiso · Resultado en 48 horas
      </p>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>

        {/* Nombre */}
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-neutral-700 mb-1.5">
            Tu nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            autoComplete="name"
            placeholder="Dr. Rodrigo Salinas"
            value={form.nombre}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
          />
        </div>

        {/* Clínica */}
        <div>
          <label htmlFor="clinica" className="block text-sm font-medium text-neutral-700 mb-1.5">
            Nombre de tu clínica
          </label>
          <input
            id="clinica"
            name="clinica"
            type="text"
            required
            placeholder="Clínica Dental Salinas"
            value={form.clinica}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
          />
        </div>

        {/* Web */}
        <div>
          <label htmlFor="web" className="block text-sm font-medium text-neutral-700 mb-1.5">
            Sitio web actual{" "}
            <span className="text-neutral-400 font-normal">(si tienes)</span>
          </label>
          <input
            id="web"
            name="web"
            type="url"
            autoComplete="url"
            placeholder="https://tuclinica.com"
            value={form.web}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
          />
        </div>

        {/* Distrito */}
        <div>
          <label htmlFor="distrito" className="block text-sm font-medium text-neutral-700 mb-1.5">
            Distrito de tu clínica
          </label>
          <select
            id="distrito"
            name="distrito"
            required
            value={form.distrito}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition bg-white appearance-none"
          >
            <option value="" disabled>
              Selecciona tu distrito
            </option>
            {distritos.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        {/* WhatsApp */}
        <div>
          <label htmlFor="whatsapp" className="block text-sm font-medium text-neutral-700 mb-1.5">
            Tu WhatsApp
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+51 999 999 999"
            value={form.whatsapp}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
          />
        </div>

        <button
          type="submit"
          disabled={state === "loading"}
          className="w-full bg-sky-500 hover:bg-sky-400 disabled:bg-sky-300 text-white font-semibold py-4 rounded-xl transition-all hover:scale-[1.02] active:scale-100 text-sm"
        >
          {state === "loading" ? "Enviando..." : "Solicitar auditoría gratuita"}
        </button>

        <p className="text-center text-xs text-neutral-400">
          Tus datos no se comparten con terceros. Solo los uso para preparar tu auditoría.
        </p>

      </form>
    </div>
  );
}