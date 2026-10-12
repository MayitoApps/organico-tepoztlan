import React from "react";
import { HOTEL_INFO, getWhatsAppLink } from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function FloatingWhatsApp() {
  const whatsappUrl = getWhatsAppLink(
    "Hola, me gustaría solicitar información y disponibilidad para reservar en Orgánico Hotel Boutique Tepoztlán."
  );

  return (
    <aside aria-label="Contacto directo por WhatsApp">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp para reservaciones"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#C5B49F] hover:bg-[#D6C8B5] text-[#16241C] shadow-2xl shadow-[#C5B49F]/30 hover:shadow-[#C5B49F]/50 transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-[#C5B49F] focus:ring-offset-2 focus:ring-offset-[#16241C]"
      >
        {/* Subtle breathing glow ring */}
        <span className="absolute -inset-1 rounded-full bg-[#C5B49F]/30 animate-pulse pointer-events-none" />

        {/* Black WhatsApp Icon provided by user */}
        <div className="relative z-10 flex items-center justify-center">
          <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8" size={32} />
        </div>

        {/* Tooltip on hover */}
        <span className="absolute right-full mr-3.5 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#22362C]/95 border border-white/10 text-[#F4F5F1] text-xs font-semibold uppercase tracking-[0.16em] whitespace-nowrap shadow-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 translate-x-2 group-hover:translate-x-0 hidden sm:flex items-center gap-1.5">
          <span>Reservar</span>
        </span>
      </a>
    </aside>
  );
}
