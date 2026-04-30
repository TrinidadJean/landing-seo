"use client";

// components/ChatBot.tsx
// Chatbot embudo de conversión para clínicas odontológicas
// Flujo: califica el lead → resuelve dudas → si no puede → WhatsApp con resumen

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND } from "@/lib/constants";

// ─── Tipos ────────────────────────────────────────────────────────────────────

type Role = "bot" | "user";

type Message = {
  id: number;
  role: Role;
  text: string;
};

type Option = {
  label: string;
  value: string;
};

type Step = {
  id: string;
  botMessage: string;
  options?: Option[];
  freeInput?: boolean;
  inputPlaceholder?: string;
};

// ─── Datos recolectados del lead ───────────────────────────────────────────────

type LeadData = {
  distrito?: string;
  tieneWeb?: string;
  problema?: string;
  nombre?: string;
};

// ─── Flujo del chatbot ────────────────────────────────────────────────────────
// Funciona como árbol de decisión. Cada step puede tener opciones o texto libre.

const STEPS: Step[] = [
  {
    id: "bienvenida",
    botMessage: `¡Hola! Soy el asistente de ${BRAND.founder}. En 3 preguntas rápidas te digo si puedo ayudarte a conseguir más pacientes desde Google. ¿Empezamos?`,
    options: [
      { label: "Sí, empecemos 👍", value: "si" },
      { label: "¿Qué hace Jeanpiere?", value: "que_hace" },
    ],
  },
  {
    id: "distrito",
    botMessage: "¿En qué distrito está tu clínica odontológica?",
    options: [
      { label: "Miraflores", value: "Miraflores" },
      { label: "Surco", value: "Surco" },
      { label: "La Molina", value: "La Molina" },
      { label: "San Borja", value: "San Borja" },
      { label: "Otro distrito", value: "Otro" },
    ],
  },
  {
    id: "tiene_web",
    botMessage: "¿Tu clínica tiene sitio web actualmente?",
    options: [
      { label: "Sí, tenemos web", value: "si" },
      { label: "No tenemos web", value: "no" },
      { label: "Tenemos una pero está desactualizada", value: "desactualizada" },
    ],
  },
  {
    id: "problema",
    botMessage: "¿Cuál es el principal problema que tienes hoy?",
    options: [
      { label: "No aparezco en Google", value: "no_aparezco" },
      { label: "Aparezco pero no llaman", value: "no_llaman" },
      { label: "La competencia me supera en Maps", value: "competencia" },
      { label: "Quiero más pacientes nuevos", value: "mas_pacientes" },
      { label: "No sé cuál es mi problema", value: "no_se" },
    ],
  },
  {
    id: "nombre",
    botMessage: "Perfecto, ya tengo una idea clara de tu situación. ¿Cómo te llamas?",
    freeInput: true,
    inputPlaceholder: "Tu nombre o el de tu clínica...",
  },
];

// Respuestas a la opción "¿Qué hace Jeanpiere?"
const QUE_HACE_RESPONSE =
  "Jeanpiere Trinidad es especialista en SEO local para clínicas odontológicas en Lima. Su trabajo es hacer que tu clínica aparezca en los primeros resultados de Google cuando alguien busca un dentista en tu distrito. ¿Te interesa saber si puedo ayudar a tu clínica?";

// Mensajes de respaldo según el problema detectado
const RESPUESTAS_FAQ: Record<string, string> = {
  no_aparezco:
    "Si no apareces en Google, lo más probable es que tengas problemas de indexación, Google Business Profile incompleto o falta de autoridad local. La auditoría gratuita te dice exactamente qué está fallando.",
  no_llaman:
    "Aparecer en Google pero no recibir llamadas suele indicar problemas de confianza: pocas reseñas, fotos deficientes o información incompleta en tu perfil. Es solucionable con la estrategia correcta.",
  competencia:
    "Superar a competidores en Google Maps requiere trabajar señales locales: reseñas, citas NAP, fotos actualizadas y el peso de tu sitio web. En 3-4 meses se puede dar vuelta esa situación.",
  mas_pacientes:
    "Para conseguir más pacientes nuevos desde Google, el SEO local es la inversión con mejor ROI para clínicas dentales en Lima. El costo por paciente adquirido es significativamente menor que publicidad paga.",
  no_se:
    "No saber el problema es normal — la mayoría de clínicas no tienen visibilidad sobre su posicionamiento. Por eso la auditoría gratuita es tan útil: te da un diagnóstico claro en 48 horas.",
};

// ─── Componente ───────────────────────────────────────────────────────────────

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [leadData, setLeadData] = useState<LeadData>({});
  const [inputValue, setInputValue] = useState("");
  const [finished, setFinished] = useState(false);
  const [typing, setTyping] = useState(false);
  const [started, setStarted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const msgId = useRef(0);

  function nextId() {
    return ++msgId.current;
  }

  // Scroll al último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // Inicia el chat con el primer mensaje del bot
  function startChat() {
    setStarted(true);
    addBotMessage(STEPS[0].botMessage);
  }

  function addBotMessage(text: string) {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { id: nextId(), role: "bot", text }]);
    }, 700);
  }

  function addUserMessage(text: string) {
    setMessages((prev) => [...prev, { id: nextId(), role: "user", text }]);
  }

  function handleOption(option: Option) {
    const currentStep = STEPS[currentStepIndex];
    addUserMessage(option.label);

    // Caso especial: "¿Qué hace Jeanpiere?"
    if (option.value === "que_hace") {
      setTimeout(() => {
        addBotMessage(QUE_HACE_RESPONSE);
        // Avanza al siguiente paso (distrito)
        setTimeout(() => {
          setCurrentStepIndex(1);
          addBotMessage(STEPS[1].botMessage);
        }, 1200);
      }, 300);
      return;
    }

    // Guarda dato del lead según el step actual
    const updatedLead = { ...leadData };
    if (currentStep.id === "distrito") updatedLead.distrito = option.value;
    if (currentStep.id === "tiene_web") updatedLead.tieneWeb = option.value;
    if (currentStep.id === "problema") {
      updatedLead.problema = option.value;
      // Da una respuesta contextual antes de continuar
      setTimeout(() => {
        addBotMessage(RESPUESTAS_FAQ[option.value] || "");
      }, 300);
    }
    setLeadData(updatedLead);

    const nextIndex = currentStepIndex + 1;

    setTimeout(() => {
      if (nextIndex < STEPS.length) {
        setCurrentStepIndex(nextIndex);
        const delay = currentStep.id === "problema" ? 1500 : 400;
        setTimeout(() => addBotMessage(STEPS[nextIndex].botMessage), delay);
      }
    }, 300);
  }

  function handleFreeInput(e: React.FormEvent) {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const currentStep = STEPS[currentStepIndex];
    addUserMessage(inputValue.trim());

    const updatedLead = { ...leadData };
    if (currentStep.id === "nombre") updatedLead.nombre = inputValue.trim();
    setLeadData(updatedLead);
    setInputValue("");

    const nextIndex = currentStepIndex + 1;

    if (nextIndex >= STEPS.length) {
      // Flujo completado — genera resumen y ofrece WhatsApp
      setTimeout(() => {
        const summary = buildSummary({ ...updatedLead });
        addBotMessage(summary);
        setTimeout(() => setFinished(true), 800);
      }, 400);
    } else {
      setCurrentStepIndex(nextIndex);
      setTimeout(() => addBotMessage(STEPS[nextIndex].botMessage), 400);
    }
  }

  function buildSummary(lead: LeadData): string {
    const distrito = lead.distrito || "tu distrito";
    const nombre = lead.nombre || "Hola";
    const problema =
      {
        no_aparezco: "no aparece en Google",
        no_llaman: "aparece en Google pero no recibe llamadas",
        competencia: "la competencia le supera en Google Maps",
        mas_pacientes: "quiere conseguir más pacientes nuevos",
        no_se: "no conoce su situación de posicionamiento actual",
      }[lead.problema || ""] || "tiene oportunidades de mejora en SEO";

    return `Gracias, ${nombre}. Tengo tu caso claro: clínica en ${distrito}, ${
      lead.tieneWeb === "si"
        ? "con sitio web"
        : lead.tieneWeb === "no"
        ? "sin sitio web"
        : "con web desactualizada"
    }, y el principal problema es que ${problema}. Puedo ayudarte con eso. ¿Quieres que Jeanpiere te contacte directamente con el diagnóstico?`;
  }

  function buildWhatsAppURL(lead: LeadData): string {
    const msg = encodeURIComponent(
      `Hola Jeanpiere, vengo del chatbot de tu web.\n\n` +
        `📍 Distrito: ${lead.distrito || "No especificado"}\n` +
        `🌐 Web: ${lead.tieneWeb === "si" ? "Sí tienen" : lead.tieneWeb === "no" ? "No tienen" : "Desactualizada"}\n` +
        `⚠️ Problema: ${
          {
            no_aparezco: "No aparecen en Google",
            no_llaman: "Aparecen pero no llaman",
            competencia: "La competencia les supera en Maps",
            mas_pacientes: "Quieren más pacientes nuevos",
            no_se: "No conocen su situación",
          }[lead.problema || ""] || "No especificado"
        }\n` +
        `👤 Nombre: ${lead.nombre || "No especificado"}\n\n` +
        `Me interesa la auditoría SEO gratuita.`
    );
    return `https://wa.me/${BRAND.whatsapp}?text=${msg}`;
  }

  const currentStep = STEPS[currentStepIndex];

  return (
    <>
      {/* Botón flotante */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

        {/* Burbuja de atención */}
        <AnimatePresence>
          {!open && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              className="bg-white border border-neutral-200 shadow-lg rounded-2xl px-4 py-2.5 text-sm text-neutral-700 max-w-[200px] text-right"
            >
              ¿Tu clínica aparece en Google?
              <div className="absolute bottom-[-6px] right-5 w-3 h-3 bg-white border-r border-b border-neutral-200 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Botón */}
        <button
          onClick={() => {
            setOpen(!open);
            if (!started && !open) startChat();
          }}
          aria-label={open ? "Cerrar chat" : "Abrir chat de consulta"}
          className="w-14 h-14 bg-sky-500 hover:bg-sky-400 rounded-full shadow-xl shadow-sky-500/30 flex items-center justify-center transition-all hover:scale-110"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.svg
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="w-6 h-6 text-white"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </motion.svg>
            ) : (
              <motion.svg
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="w-6 h-6 text-white"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </motion.svg>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Ventana del chat */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-neutral-200 flex flex-col overflow-hidden"
            style={{ maxHeight: "520px" }}
          >

            {/* Header */}
            <div className="bg-neutral-950 px-5 py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-sky-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">JT</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{BRAND.founder}</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                  <p className="text-neutral-400 text-xs">Asistente SEO · Disponible</p>
                </div>
              </div>
            </div>

            {/* Mensajes */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-neutral-50">
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-sky-500 text-white rounded-br-sm"
                          : "bg-white text-neutral-700 border border-neutral-200 rounded-bl-sm shadow-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}

                {/* Indicador de typing */}
                {typing && (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white border border-neutral-200 shadow-sm px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                      {[0, 0.15, 0.3].map((delay, i) => (
                        <motion.span
                          key={i}
                          className="w-1.5 h-1.5 bg-neutral-400 rounded-full"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ repeat: Infinity, duration: 0.6, delay }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>

            {/* Opciones / Input / CTA final */}
            <div className="border-t border-neutral-200 bg-white px-4 py-3">
              {!typing && !finished && started && (
                <>
                  {/* Opciones de botón */}
                  {currentStep?.options && currentStepIndex === STEPS.findIndex(
                    (s) => s.id === currentStep.id
                  ) && (
                    <div className="flex flex-wrap gap-2">
                      {currentStep.options.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => handleOption(opt)}
                          className="text-xs bg-neutral-100 hover:bg-sky-50 hover:border-sky-300 border border-neutral-200 text-neutral-700 px-3 py-2 rounded-xl transition-colors"
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Input de texto libre */}
                  {currentStep?.freeInput && (
                    <form onSubmit={handleFreeInput} className="flex gap-2">
                      <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder={currentStep.inputPlaceholder}
                        autoFocus
                        className="flex-1 text-sm border border-neutral-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      />
                      <button
                        type="submit"
                        className="bg-sky-500 hover:bg-sky-400 text-white px-4 rounded-xl transition-colors text-sm font-medium"
                      >
                        Enviar
                      </button>
                    </form>
                  )}
                </>
              )}

              {/* CTA final — handoff a WhatsApp con resumen */}
              {finished && (
                <div className="space-y-2">
                  <a
                    href={buildWhatsAppURL(leadData)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold py-3 rounded-xl transition-colors text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M11.999 2C6.477 2 2 6.484 2 12.017c0 1.99.52 3.863 1.438 5.484L2.018 22l4.614-1.394A9.932 9.932 0 0012 21.976C17.523 21.976 22 17.491 22 11.958 22 6.442 17.523 2 11.999 2zm0 18.132a8.256 8.256 0 01-4.232-1.163l-.303-.18-3.15.953.893-3.111-.197-.32a8.33 8.33 0 01-1.272-4.43c0-4.57 3.688-8.29 8.261-8.29 4.573 0 8.261 3.72 8.261 8.29 0 4.57-3.688 8.251-8.261 8.251z" />
                    </svg>
                    Hablar con Jeanpiere ahora
                  </a>
                  <a
                    href="/auditoria-seo-gratuita"
                    className="block text-center text-xs text-neutral-400 hover:text-neutral-600 transition-colors py-1"
                  >
                    O solicitar auditoría escrita →
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}