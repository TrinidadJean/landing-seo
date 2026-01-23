"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Phone, X, User } from "lucide-react";

const knowledgeBase = [
  {
    keywords: ["precio", "costo", "cuanto esta", "plan"],
    reply:
      "En Trinidev trabajamos con precios según el tipo de proyecto. Creamos landing pages, eCommerce y sistemas a medida. Escríbenos por WhatsApp y te cotizamos rápido.",
  },
  {
    keywords: ["tiempo", "demora", "entrega"],
    reply:
      "Una landing page suele entregarse en 5 a 7 días. Proyectos más grandes se planifican según funcionalidades.",
  },
  {
    keywords: ["seo", "posicionar", "google"],
    reply:
      "Todas nuestras webs están optimizadas para SEO, velocidad y conversión para atraer clientes desde Google.",
  },
  {
    keywords: ["wordpress", "shopify", "ecommerce"],
    reply:
      "Trabajamos con WordPress, Shopify, Next.js y eCommerce totalmente personalizados.",
  },
  {
    keywords: ["trinidev", "empresa", "quienes"],
    reply:
      "Trinidev es una agencia digital especializada en diseño web, eCommerce y sistemas a medida para negocios en Perú.",
  },
  {
    keywords: ["landing", "pagina web", "web"],
    reply:
      "Diseñamos páginas web modernas, rápidas y optimizadas para convertir visitas en clientes.",
  },
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { from: "user" | "bot"; text: string }[]
  >([]);
  const [hasNotification, setHasNotification] = useState(false);

  // 🔔 Notificación automática
  useEffect(() => {
    const timer = setTimeout(() => setHasNotification(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const normalize = (text: string) =>
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input;
    const text = normalize(input);

    setMessages(prev => [...prev, { from: "user", text: userMessage }]);
    setInput("");

    const match = knowledgeBase.find(item =>
      item.keywords.some(k => text.includes(k))
    );

    setTimeout(() => {
      if (match) {
        setMessages(prev => [
          ...prev,
          { from: "bot", text: match.reply },
        ]);
      } else {
        setMessages(prev => [
          ...prev,
          {
            from: "bot",
            text:
              "Entiendo 👍 Para ayudarte mejor, porfavor pulsa el boton de whatsapp para derivarte con un asesor",
          },
        ]);
      }
    }, 600);
  };

  return (
    <>
      {/* Botón flotante */}
      {!open && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
          {hasNotification && (
            <div   className="bg-white border border-neutral-200
               shadow-xl rounded-xl
               px-4 py-2
               text-sm font-medium
               text-neutral-800
               animate-bounce"
            >
              💬 ¿Buscas una web profesional?
            </div>
          )}
          <button
            onClick={() => {
              setOpen(true);
              setHasNotification(false);
              setMessages([
                {
                  from: "bot",
                  text:
                    "👋 Hola, somos Trinidev. ¿En qué podemos ayudarte hoy?",
                },
              ]);
            }}
            className="relative bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-xl"
          >
            <MessageCircle size={22} />
          </button>
        </div>
      )}

      {/* Chat */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-80 rounded-2xl shadow-2xl bg-white overflow-hidden">
          {/* Header */}
          <div className="bg-neutral-900 text-white px-4 py-3 flex justify-between items-center">
            <div>
              <p className="font-semibold text-sm">Trinidev</p>
              <p className="text-xs text-neutral-400">
                Web · E-commerce · Sistemas
              </p>
            </div>
            <button onClick={() => setOpen(false)}>
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 space-y-2 text-sm max-h-72 overflow-y-auto">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${
                  m.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`rounded-2xl px-3 py-2 text-xs max-w-[85%] ${
                    m.from === "user"
                      ? "bg-emerald-600 text-white"
                      : "bg-neutral-100 text-neutral-800"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t space-y-2">
            <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Escribe tu mensaje..."
            className="w-full border rounded-xl p-2 text-sm 
                       text-neutral-800 
                       placeholder:text-neutral-400 
                       bg-white
                       focus:ring-2 focus:ring-emerald-500 outline-none"
            onKeyDown={e => e.key === "Enter" && handleSend()}
          />

            <button
              onClick={handleSend}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-xl text-sm"
            >
              Enviar
            </button>

            {/* CTA humano */}
            <div className="flex gap-2">
              <a
                href="https://wa.me/51986929877"
                className="flex-1 text-center text-sm font-medium
                           text-neutral-800
                           border border-neutral-300
                           rounded-xl py-2
                           hover:bg-neutral-100 transition"
              >
                WhatsApp
              </a>
            
              <a
                href="tel:+51982226070"
                className="flex-1 text-center text-sm font-medium
                           text-neutral-800
                           border border-neutral-300
                           rounded-xl py-2
                           hover:bg-neutral-100 transition
                           flex items-center justify-center gap-1"
              >
                <Phone size={14} /> Llamar
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
