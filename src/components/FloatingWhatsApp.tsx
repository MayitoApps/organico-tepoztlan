import React from "react";
import { Sparkles } from "lucide-react";
import { HOTEL_INFO, getWhatsAppLink } from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function FloatingWhatsApp() {
  const whatsappUrl = getWhatsAppLink(
    "Hola, me gustaría solicitar información y disponibilidad para reservar en Orgánico Hotel Boutique Tepoztlán."
  );
  const spaUrl = "https://www.origencentroholisticoyspa.com/";

  return (
    <aside
      aria-label="Accesos flotantes de contacto y spa"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5 sm:gap-3 pointer-events-none"
    >
      {/* Botón flotante: Origen Centro Holístico y Spa */}
      <a
        href={spaUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex items-center gap-2.5 sm:gap-3 px-3.5 py-2.5 sm:px-4 sm:py-3 bg-[#16241C]/95 hover:bg-[#22362C] text-[#F4F5F1] rounded-full border border-[#C5B49F]/40 hover:border-[#C5B49F] shadow-2xl shadow-black/80 backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95 max-w-[calc(100vw-3rem)] focus:outline-none focus:ring-2 focus:ring-[#C5B49F] focus:ring-offset-2 focus:ring-offset-[#16241C]"
        aria-label="Ir a Origen Centro Holístico y Spa"
      >
        <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#C5B49F]/15 flex items-center justify-center shrink-0 text-[#C5B49F] group-hover:text-[#F4F5F1] group-hover:bg-[#C5B49F]/30 transition-colors">
          <Sparkles className="w-4 h-4 text-[#C5B49F]" />
        </div>
        <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-[#F4F5F1] group-hover:text-white transition-colors pr-1 sm:pr-2 whitespace-nowrap">
          Origen Centro Holístico y Spa
        </span>
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5B49F] opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C5B49F]" />
        </span>
      </a>

      {/* Botón flotante: WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp para reservaciones"
        className="pointer-events-auto relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#C5B49F] hover:bg-[#D6C8B5] text-[#16241C] shadow-2xl shadow-[#C5B49F]/30 hover:shadow-[#C5B49F]/50 transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-[#C5B49F] focus:ring-offset-2 focus:ring-offset-[#16241C]"
      >
        {/* Subtle breathing glow ring */}
        <span className="absolute -inset-1 rounded-full bg-[#C5B49F]/30 animate-pulse pointer-events-none" />

        {/* Black WhatsApp Icon */}
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
