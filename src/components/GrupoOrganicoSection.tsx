import React from "react";
import { ArrowUpRight, Compass } from "lucide-react";
import { HOTEL_INFO } from "@/lib/constants";

export default function GrupoOrganicoSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#16241C] text-[#F4F5F1] overflow-hidden border-t border-b border-white/5">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C5B49F]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle badge & Title */}
        <div className="reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[#C5B49F] text-[11px] uppercase tracking-[0.25em] mb-6">
            <Compass className="w-3.5 h-3.5" />
            <span>Colección de Hoteles Boutique</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-[#F4F5F1] tracking-wide uppercase max-w-4xl mx-auto leading-tight mb-12">
            DESCUBRE EL UNIVERSO DE GRUPO ORGÁNICO HOTELES BOUTIQUE
          </h2>
        </div>

        {/* High-Quality Video Container with minimal chrome */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#22362C] mb-14 group reveal-scale-up delay-150">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${HOTEL_INFO.grupoVideoId}?rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
            title="Descubre el Universo de Grupo Orgánico Hoteles Boutique"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full object-cover border-0"
          />
        </div>

        {/* Description Below Video */}
        <div className="max-w-3xl mx-auto text-[#A1B3A7] text-base md:text-lg leading-relaxed space-y-6 text-center reveal-on-scroll delay-200">
          <p className="text-xl md:text-2xl font-serif text-[#F4F5F1] italic">
            Un universo de destinos, experiencias y momentos inolvidables.
          </p>

          <p>
            Déjate envolver por la serenidad del bosque y la energía mística de Valle de Bravo y Tepoztlán; reconecta con la naturaleza, el aire puro y la esencia de la montaña en Ajusco; o descubre el encanto histórico, el arte y la vida cultural que distinguen a Tlalpan y a la vibrante Roma Norte.
          </p>

          <p>
            Y cuando el cuerpo pida mar, calidez y tradición, Veracruz te espera con su brisa, su sabor y esa forma única de hacerte sentir bienvenido.
          </p>

          <div className="py-4 space-y-2 text-lg sm:text-xl md:text-2xl font-serif text-[#C5B49F] tracking-wide leading-relaxed">
            <p>Cada destino tiene su propia esencia.</p>
            <p>Cada espacio, una historia por vivir.</p>
            <p>Cada experiencia, un momento para recordar.</p>
          </div>

          <p className="text-sm md:text-base uppercase tracking-[0.2em] text-[#F4F5F1] font-medium pt-2">
            Todo forma parte del Universo de Grupo Orgánico.
          </p>
        </div>

        {/* Button to Group Website */}
        <div className="mt-12 reveal-on-scroll delay-300">
          <a
            href={HOTEL_INFO.grupoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-white/[0.04] hover:bg-[#C5B49F] border border-[#C5B49F]/40 hover:border-[#C5B49F] text-[#F4F5F1] hover:text-[#16241C] font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-xl group"
          >
            <span>Explorar Grupo Orgánico Hoteles Boutique</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
