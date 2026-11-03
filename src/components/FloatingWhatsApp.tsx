'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import { HOTEL_INFO, getWhatsAppLink } from '@/lib/constants';

export default function FloatingWhatsApp() {
  const whatsappUrl = getWhatsAppLink(
    "Hola Orgánico Tepoztlán, me comunico desde su sitio web y me gustaría recibir información y asistencia."
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
        className="pointer-events-auto group relative flex items-center gap-2.5 sm:gap-3 px-3.5 py-2.5 sm:px-4 sm:py-3 bg-[#121714]/95 hover:bg-[#1A221E] text-[#F4F5F1] rounded-full border border-[#C5B49F]/35 hover:border-[#C5B49F] shadow-2xl shadow-black/80 backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95 max-w-[calc(100vw-3rem)]"
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
        className="pointer-events-auto group relative flex items-center gap-3 p-3.5 bg-[#121714]/95 hover:bg-[#1A221E] text-[#F4F5F1] rounded-full border border-white/15 shadow-2xl shadow-black/80 backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95 hover:border-[#25D366]/50"
        aria-label={`Contactar por WhatsApp a Orgánico Tepoztlán (${HOTEL_INFO.whatsappNumber})`}
      >
        <div className="relative w-7 h-7 sm:w-8 sm:h-8 shrink-0 flex items-center justify-center">
          <Image
            src="/images/icons/whatsapp.png"
            alt="WhatsApp Orgánico Tepoztlán"
            width={32}
            height={32}
            className="w-full h-full object-contain"
          />
        </div>
        <span className="hidden sm:inline-block pr-2 text-xs font-semibold tracking-wider uppercase text-[#F4F5F1] group-hover:text-white transition-colors">
          WhatsApp
        </span>
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#25D366]" />
        </span>
      </a>
    </aside>
  );
}
