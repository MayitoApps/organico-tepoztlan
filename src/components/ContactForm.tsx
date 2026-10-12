"use client";

import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Sparkles,
  Calendar,
  Users,
  MessageSquare,
  Loader2,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  RotateCcw,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { HOTEL_INFO, getWhatsAppLink } from "@/lib/constants";

interface FormState {
  nombre: string;
  correo: string;
  telefono: string;
  motivo: string;
  huespedes: string;
  fecha: string;
  mensaje: string;
  website_hp: string;
  avisoPrivacidad: boolean;
}

const MOTIVOS_OPTIONS = [
  "Reservaciones & Hospedaje",
  "Experiencias en Tepoztlan",
  "Gastronomía & Cenas Privadas",
  "Eventos Empresariales & Retiros",
  "Celebraciones Sociales",
  "Spa & Bienestar Holístico",
  "Sesiones Fotográficas & Producción",
  "Consulta General o Especial",
];

const INITIAL_STATE: FormState = {
  nombre: "",
  correo: "",
  telefono: "",
  motivo: "Reservaciones & Hospedaje",
  huespedes: "",
  fecha: "",
  mensaje: "",
  website_hp: "",
  avisoPrivacidad: false,
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!form.nombre.trim() || form.nombre.trim().length < 2) {
      setErrorMessage("Por favor ingresa tu nombre completo.");
      setStatus("error");
      return;
    }

    if (!form.correo.trim()) {
      setErrorMessage("Por favor ingresa un correo electrónico.");
      setStatus("error");
      return;
    }

    if (!form.telefono.trim()) {
      setErrorMessage("Por favor ingresa un teléfono o WhatsApp de contacto.");
      setStatus("error");
      return;
    }

    if (!form.mensaje.trim() || form.mensaje.trim().length < 5) {
      setErrorMessage("El mensaje debe contener al menos 5 caracteres.");
      setStatus("error");
      return;
    }

    if (!form.avisoPrivacidad) {
      setErrorMessage("Debes aceptar el aviso de privacidad para continuar.");
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
      } else {
        setErrorMessage(data.error || "Ocurrió un error al enviar el formulario.");
        setStatus("error");
      }
    } catch {
      setErrorMessage(
        "No se pudo conectar con el servidor. Por favor verifica tu conexión o contáctanos por WhatsApp."
      );
      setStatus("error");
    }
  };

  const handleReset = () => {
    setForm(INITIAL_STATE);
    setStatus("idle");
    setErrorMessage("");
  };

  const whatsappFollowUpMessage = `Hola, acabo de enviar un formulario en su página web sobre ${form.motivo}. Mi nombre es ${form.nombre || "un huésped"} y quisiera dar seguimiento personalizado.`;
  const whatsappUrl = getWhatsAppLink(whatsappFollowUpMessage);

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Decorative ambient glowing orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#C5B49F]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-[#A1B3A7]/10 rounded-full blur-3xl" />
      </div>

      {/* Main Glassmorphic Card */}
      <div className="relative bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl rounded-2xl p-6 md:p-10 text-[#F4F5F1]">
        {status === "success" ? (
          <div className="py-8 text-center space-y-6 animate-fadeIn">
            <div className="w-20 h-20 mx-auto rounded-full bg-[#C5B49F]/10 border border-[#C5B49F]/30 flex items-center justify-center text-[#C5B49F]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5B49F] font-semibold">
                Solicitud Recibida
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-[#F4F5F1]">
                ¡Gracias por escribirnos, {form.nombre.split(" ")[0]}!
              </h3>
              <p className="text-[#A1B3A7] max-w-md mx-auto text-sm md:text-base leading-relaxed">
                Hemos recibido los detalles de tu solicitud. Nuestro equipo de Concierge boutique se comunicará contigo muy pronto al correo{" "}
                <span className="text-[#F4F5F1] underline">{form.correo}</span>.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#C5B49F] hover:bg-[#D6C8B5] text-[#16241C] font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#C5B49F]/20"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Seguimiento por WhatsApp
              </a>

              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[#F4F5F1] font-medium text-xs uppercase tracking-widest transition-all duration-300"
              >
                <RotateCcw className="w-4 h-4 text-[#A1B3A7]" />
                Enviar otro mensaje
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Header info inside card */}
            <div className="space-y-1 mb-6">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5B49F] font-semibold">
                Atención Personalizada
              </span>
              <h2 className="text-2xl md:text-3xl font-serif text-[#F4F5F1]">
                Diseña tu Estancia en Tepoztlán
              </h2>
              <p className="text-xs md:text-sm text-[#A1B3A7]">
                Completa este formulario y nos pondremos en contacto contigo a la brevedad.
              </p>
            </div>

            {/* Error banner */}
            {status === "error" && errorMessage && (
              <div className="p-4 rounded-lg bg-red-950/40 border border-red-500/30 text-red-200 text-sm flex items-start gap-3">
                <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-400 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Invisible honeypot */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website_hp">Website HP</label>
              <input
                type="text"
                id="website_hp"
                name="website_hp"
                tabIndex={-1}
                autoComplete="off"
                value={form.website_hp}
                onChange={handleChange}
              />
            </div>

            {/* Row 1: Nombre y Correo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label
                  htmlFor="nombre"
                  className="block text-xs uppercase tracking-wider text-[#A1B3A7] font-medium"
                >
                  Nombre Completo <span className="text-[#C5B49F]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A1B3A7]">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    placeholder="Ej. Sofía Morales"
                    value={form.nombre}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-[#22362C]/70 border border-white/10 rounded-lg text-sm text-[#F4F5F1] placeholder-[#A1B3A7]/50 focus:outline-none focus:border-[#C5B49F] focus:ring-1 focus:ring-[#C5B49F] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="correo"
                  className="block text-xs uppercase tracking-wider text-[#A1B3A7] font-medium"
                >
                  Correo Electrónico <span className="text-[#C5B49F]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A1B3A7]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    required
                    placeholder="sofia@ejemplo.com"
                    value={form.correo}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-[#22362C]/70 border border-white/10 rounded-lg text-sm text-[#F4F5F1] placeholder-[#A1B3A7]/50 focus:outline-none focus:border-[#C5B49F] focus:ring-1 focus:ring-[#C5B49F] transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Teléfono y Motivo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label
                  htmlFor="telefono"
                  className="block text-xs uppercase tracking-wider text-[#A1B3A7] font-medium"
                >
                  Teléfono / WhatsApp <span className="text-[#C5B49F]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A1B3A7]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    required
                    placeholder="+52 55 ..."
                    value={form.telefono}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-[#22362C]/70 border border-white/10 rounded-lg text-sm text-[#F4F5F1] placeholder-[#A1B3A7]/50 focus:outline-none focus:border-[#C5B49F] focus:ring-1 focus:ring-[#C5B49F] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="motivo"
                  className="block text-xs uppercase tracking-wider text-[#A1B3A7] font-medium"
                >
                  Motivo de Interés <span className="text-[#C5B49F]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A1B3A7]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <select
                    id="motivo"
                    name="motivo"
                    value={form.motivo}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-[#22362C] border border-white/10 rounded-lg text-sm text-[#F4F5F1] focus:outline-none focus:border-[#C5B49F] focus:ring-1 focus:ring-[#C5B49F] transition-all appearance-none cursor-pointer"
                  >
                    {MOTIVOS_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#22362C] text-[#F4F5F1]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Row 3: Huéspedes y Fecha (Opcionales) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label
                  htmlFor="huespedes"
                  className="block text-xs uppercase tracking-wider text-[#A1B3A7] font-medium"
                >
                  Nº de Huéspedes / Asistentes <span className="text-xs text-[#A1B3A7]/60">(Opcional)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A1B3A7]">
                    <Users className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="huespedes"
                    name="huespedes"
                    placeholder="Ej. 2 personas"
                    value={form.huespedes}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-[#22362C]/70 border border-white/10 rounded-lg text-sm text-[#F4F5F1] placeholder-[#A1B3A7]/50 focus:outline-none focus:border-[#C5B49F] focus:ring-1 focus:ring-[#C5B49F] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="fecha"
                  className="block text-xs uppercase tracking-wider text-[#A1B3A7] font-medium"
                >
                  Fecha Estimada de Visita <span className="text-xs text-[#A1B3A7]/60">(Opcional)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A1B3A7]">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input
                    type="date"
                    id="fecha"
                    name="fecha"
                    value={form.fecha}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-[#22362C]/70 border border-white/10 rounded-lg text-sm text-[#F4F5F1] placeholder-[#A1B3A7]/50 focus:outline-none focus:border-[#C5B49F] focus:ring-1 focus:ring-[#C5B49F] transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Mensaje */}
            <div className="space-y-2">
              <label
                htmlFor="mensaje"
                className="block text-xs uppercase tracking-wider text-[#A1B3A7] font-medium"
              >
                Mensaje o Detalles de la Visita <span className="text-[#C5B49F]">*</span>
              </label>
              <div className="relative">
                <div className="absolute top-3.5 left-3.5 pointer-events-none text-[#A1B3A7]">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  required
                  placeholder="Cuéntanos sobre tu plan: tipo de habitación preferida, ocasión especial o cualquier requerimiento específico..."
                  value={form.mensaje}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-[#22362C]/70 border border-white/10 rounded-lg text-sm text-[#F4F5F1] placeholder-[#A1B3A7]/50 focus:outline-none focus:border-[#C5B49F] focus:ring-1 focus:ring-[#C5B49F] transition-all"
                />
              </div>
            </div>

            {/* Aviso de privacidad */}
            <div className="flex items-start gap-3 pt-1">
              <input
                type="checkbox"
                id="avisoPrivacidad"
                name="avisoPrivacidad"
                required
                checked={form.avisoPrivacidad}
                onChange={handleChange}
                className="mt-1 w-4 h-4 rounded border-white/20 bg-[#22362C] text-[#C5B49F] focus:ring-[#C5B49F] focus:ring-offset-0 cursor-pointer"
              />
              <label htmlFor="avisoPrivacidad" className="text-xs text-[#A1B3A7] leading-relaxed cursor-pointer">
                He leído y acepto el{" "}
                <span className="text-[#C5B49F] underline hover:text-[#D6C8B5]">
                  Aviso de Privacidad
                </span>{" "}
                de Orgánico Hotel Boutique Tepoztlán para el tratamiento de mis datos personales de contacto y reservación.
              </label>
            </div>

            {/* Submit button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 px-8 rounded-lg bg-[#C5B49F] hover:bg-[#D6C8B5] disabled:bg-[#C5B49F]/50 text-[#16241C] font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-[#C5B49F]/10 cursor-pointer disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Enviando mensaje...</span>
                  </>
                ) : (
                  <span>Enviar Mensaje</span>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
