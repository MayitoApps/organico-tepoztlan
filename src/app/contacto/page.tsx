import React from "react";
import { Metadata } from "next";
import { MapPin, MessageSquare } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { HOTEL_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contacto & Reservaciones | Orgánico Hotel Boutique Tepoztlán",
  description:
    "Comunícate directamente con nuestro equipo de concierge para reservaciones de habitaciones, experiencias, eventos y gastronomía en Tepoztlán.",
};

export default function ContactoPage() {
  return (
    <div className="pt-28 pb-20 bg-[#16241C] text-[#F4F5F1]">
      {/* Header */}
      <section className="reveal-on-scroll relative py-16 px-4 text-center max-w-4xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] text-[#C5B49F] font-semibold">
          Estamos a tu servicio
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#F4F5F1]">
          Contacto & Reservaciones
        </h1>
        <p className="text-base md:text-lg text-[#A1B3A7] leading-relaxed max-w-2xl mx-auto">
          ¿Deseas planear una escapada, cotizar un evento privado o resolver cualquier duda? Completa nuestro formulario oficial o escríbenos directamente a nuestro WhatsApp boutique.
        </p>
      </section>

      {/* Info Cards (Formulario Oficial & Ubicación) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card: Formulario Oficial */}
          <div className="reveal-on-scroll delay-75 bg-[#22362C] p-7 rounded-2xl border border-white/10 space-y-4 flex flex-col justify-between shadow-xl">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#C5B49F]/10 border border-[#C5B49F]/30 flex items-center justify-center text-[#C5B49F]">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif text-[#F4F5F1]">Formulario Oficial</h3>
              <p className="text-xs text-[#A1B3A7] leading-relaxed">
                Envía tus requerimientos detallados para habitaciones, retiros y celebraciones privadas.
              </p>
            </div>
            <a
              href="#formulario"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5B49F] hover:text-[#D6C8B5] font-semibold pt-2"
            >
              <span>Completar Formulario Abajo</span>
            </a>
          </div>

          {/* Card: Dirección & Ubicación */}
          <div className="reveal-on-scroll delay-150 bg-[#22362C] p-7 rounded-2xl border border-white/10 space-y-4 flex flex-col justify-between shadow-xl">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#C5B49F]/10 border border-[#C5B49F]/30 flex items-center justify-center text-[#C5B49F]">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif text-[#F4F5F1]">Ubicación en Tepoztlán</h3>
              <p className="text-xs text-[#A1B3A7] leading-relaxed">
                {HOTEL_INFO.fullAddress}
              </p>
            </div>
            <a
              href={HOTEL_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5B49F] hover:text-[#D6C8B5] font-semibold pt-2"
            >
              <span>Abrir en Google Maps</span>
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Form Component */}
      <section id="formulario" className="reveal-on-scroll max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </section>
    </div>
  );
}
