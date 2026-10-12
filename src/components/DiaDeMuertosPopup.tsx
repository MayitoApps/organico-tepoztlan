"use client";

import React, { useEffect, useState, useCallback } from "react";
import { X, ArrowRight } from "lucide-react";

const STORAGE_KEY = "gohb_seen_tepoz_ddm";
const DELAY_MS = 1400;

interface DiaDeMuertosEvent {
  tag: string;
  name: string;
  desc: string;
}

const EVENTS: DiaDeMuertosEvent[] = [
  {
    tag: "SÁBADO 31 DE OCTUBRE · $1,200 MXN",
    name: "Menú Emplatado de Gala (5 Tiempos)",
    desc: "Canapés, crema de calabaza, manchamantel tradicional, pan de muerto con ganache de cempasúchil y mezcalita artesanal.",
  },
  {
    tag: "SÁBADO 31 DE OCTUBRE · GRAN PREMIO",
    name: "Concurso de Disfraz de Catrinas y Catrines",
    desc: "Pasarela tradicional para honrar nuestras raíces (exclusivo Catrinas y Catrines). Premio estelar: Spa en Pareja.",
  },
  {
    tag: "SÁBADO 31 OCT · CORTESÍA CON HABITACIÓN",
    name: "Cine de Terror al Aire Libre",
    desc: "Función bajo las estrellas con barra de snacks (pan de muerto, atole, palomitas) y coctel de bienvenida en cortesía.",
  },
  {
    tag: "EXPERIENCIA MÍSTICA",
    name: "Altar de Muertos & Copal Ancestral",
    desc: "Ofrenda ceremonial y atmósfera consagrada al pie de los riscos milenarios del Tepozteco.",
  },
];

export default function DiaDeMuertosPopup() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  const openPopup = useCallback(() => {
    setIsRendered(true);
    requestAnimationFrame(() => {
      setTimeout(() => {
        setIsOpen(true);
      }, 20);
    });
  }, []);

  const closePopup = useCallback(() => {
    setIsOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Manejo de navegación privada
    }
    setTimeout(() => {
      setIsRendered(false);
    }, 320);
  }, []);

  // Bloqueo de scroll de la página y scroll horizontal mientras el modal está abierto
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalOverflowX = document.documentElement.style.overflowX;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflowX = "hidden";

      return () => {
        document.body.style.overflow = originalOverflow;
        document.documentElement.style.overflowX = originalOverflowX;
      };
    }
  }, [isOpen]);

  useEffect(() => {
    setMounted(true);

    if (typeof window !== "undefined") {
      (window as unknown as { gohbOpenPopup: (id?: string) => void }).gohbOpenPopup = () => {
        openPopup();
      };
      (window as unknown as { gohbClosePopup: (id?: string) => void }).gohbClosePopup = () => {
        closePopup();
      };
    }

    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(STORAGE_KEY) === "true";
    } catch {
      alreadySeen = false;
    }

    if (!alreadySeen) {
      const timer = setTimeout(() => {
        openPopup();
      }, DELAY_MS);
      return () => clearTimeout(timer);
    }
  }, [openPopup, closePopup]);

  // Tecla Escape para cerrar
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closePopup();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closePopup]);

  if (!mounted || !isRendered) return null;

  return (
    <div
      id="gohb-modal-tepoz"
      role="dialog"
      aria-modal="true"
      aria-labelledby="gohb-modal-title"
      className={`fixed inset-0 z-[99999999] flex items-center justify-center p-3 sm:p-4 overflow-x-hidden overflow-y-auto transition-all duration-300 ease-out ${
        isOpen
          ? "opacity-100 visible pointer-events-auto"
          : "opacity-0 invisible pointer-events-none"
      }`}
    >
      {/* Fondo semitransparente con desenfoque (Backdrop) */}
      <div
        onClick={closePopup}
        className="fixed inset-0 bg-[#0E0B09]/85 backdrop-blur-md cursor-pointer transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Contenedor Tarjeta Modal - Perfectamente Centrado y Sin Scroll Horizontal */}
      <div
        className={`relative z-10 my-auto mx-auto w-full max-w-[510px] max-h-[88vh] max-h-[88dvh] overflow-y-auto overflow-x-hidden bg-[#1D1815] border border-[#D9822B]/45 rounded-2xl sm:rounded-[20px] p-5 sm:p-7 text-[#F2E8DC] shadow-[0_25px_65px_-10px_rgba(0,0,0,0.95),0_0_40px_rgba(217,130,43,0.22)] transition-all duration-300 ease-out custom-scrollbar ${
          isOpen ? "translate-y-0 scale-100" : "translate-y-5 scale-95"
        }`}
        style={{
          fontFamily:
            "'Plus Jakarta Sans', var(--font-outfit), system-ui, -apple-system, sans-serif",
          boxSizing: "border-box",
        }}
      >
        {/* Resplandor decorativo de cempasúchil en la parte superior */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[120px] pointer-events-none rounded-t-2xl sm:rounded-t-[20px] overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(217, 130, 43, 0.24) 0%, rgba(184, 74, 41, 0.08) 50%, transparent 80%)",
          }}
        />

        {/* Botón de Cerrar */}
        <button
          type="button"
          onClick={closePopup}
          aria-label="Cerrar ventana"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/[0.06] hover:bg-[#D9822B] text-[#F2E8DC] hover:text-[#1D1815] border border-[#D9822B]/30 flex items-center justify-center transition-all duration-200 z-20 hover:rotate-90 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Encabezado del Pop-up */}
        <div className="relative text-center mb-4 sm:mb-5 pt-0.5">
          <div className="inline-flex items-center gap-1.5 bg-[#D9822B]/10 border border-dashed border-[#D9822B]/50 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[0.12em] text-[#D9822B] uppercase mb-2.5 max-w-full">
            <span className="flex-shrink-0">🔥</span>
            <span className="truncate">DÍA DE MUERTOS 2026 · TEPOZTLÁN</span>
          </div>

          <h2
            id="gohb-modal-title"
            className="text-lg sm:text-[22px] font-bold text-[#F2E8DC] leading-snug tracking-wide mb-1.5 break-words"
            style={{
              fontFamily: "'Cinzel', var(--font-cinzel), var(--font-cormorant), Georgia, serif",
              background:
                "linear-gradient(135deg, #FFFFFF 20%, #F59E42 70%, #D9822B 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Recordar es volver a encontrarnos
          </h2>

          <p className="text-[12px] sm:text-[13px] text-[#A89B91] max-w-[400px] mx-auto leading-relaxed break-words">
            Alta gastronomía, concurso de catrinas y cine bajo el misticismo del
            Cerro del Tepozteco.
          </p>
        </div>

        {/* Lista de Eventos Clave */}
        <div className="relative flex flex-col gap-2.5 mb-5 overflow-hidden">
          {EVENTS.map((event, idx) => (
            <div
              key={idx}
              className="bg-[#261F1B]/75 hover:bg-[#2D241F]/90 border border-[#B84A29]/30 hover:border-[#D9822B]/60 border-l-[3px] border-l-[#D9822B] rounded-[10px] p-3 sm:p-3.5 text-left transition-colors duration-200 overflow-hidden"
            >
              <div className="text-[9.5px] sm:text-[10px] font-bold tracking-[0.06em] text-[#D9822B] uppercase mb-0.5 break-words">
                {event.tag}
              </div>
              <div
                className="text-[13px] sm:text-[14px] font-bold text-[#F2E8DC] mb-1 leading-snug break-words"
                style={{
                  fontFamily: "'Cinzel', var(--font-cinzel), var(--font-cormorant), Georgia, serif",
                }}
              >
                {event.name}
              </div>
              <div className="text-[11px] sm:text-[12px] text-[#A89B91] leading-relaxed break-words">
                {event.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Botón de Llamado a la Acción */}
        <div className="relative text-center w-full">
          <a
            id="gohb-cta-tepoz"
            href="https://dia-de-muertos-gohb.vercel.app/organico-tepoz"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 sm:px-6 rounded-xl bg-gradient-to-r from-[#D9822B] to-[#B84A29] hover:from-[#E68E35] hover:to-[#C45330] text-white font-bold text-xs sm:text-[13px] tracking-wider uppercase transition-all duration-200 shadow-[0_6px_20px_rgba(217,130,43,0.4)] hover:shadow-[0_10px_28px_rgba(217,130,43,0.6)] cursor-pointer box-border"
          >
            <span className="truncate">Ver Menú y Reservar Tepoztlán</span>
            <ArrowRight className="w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          <p className="text-[10px] sm:text-[11px] text-[#A89B91]/80 mt-2 break-words">
            Cupo limitado para la cena y el concurso · Reserva con anticipación
          </p>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #D9822B rgba(0, 0, 0, 0.2);
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #D9822B;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}
