"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { getWhatsAppLink } from "@/lib/constants";

export default function HeroSection() {
  const generalBookingWa = getWhatsAppLink(
    "Hola, me gustaría consultar disponibilidad general para hospedarme en Orgánico Hotel Boutique Tepoztlán."
  );

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-20 px-5 sm:px-8 overflow-hidden bg-[#16241C]">
      {/* Background Image & Multi-layered Scrims */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-alberca.png"
          alt="Orgánico Hotel Boutique Tepoztlán - Alberca y riscos del Tepozteco"
          fill
          priority
          loading="eager"
          className="object-cover object-center scale-105 transform animate-in fade-in duration-1000"
          sizes="100vw"
        />
        {/* Multi-layered dark gradients for atmospheric depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#16241C] via-[#16241C]/60 to-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(22,36,28,0.8)_100%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-6 mt-8 reveal-stagger">
        {/* Overline tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 text-[11px] uppercase tracking-[0.3em] text-[#C5B49F] font-semibold reveal">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5B49F] animate-pulse" />
          <span>Tepoztlán · Pueblo Mágico · Morelos</span>
        </div>

        {/* Mandatory Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[72px] xl:text-8xl font-light text-[#F4F5F1] tracking-tight leading-[1.08] max-w-4xl reveal">
          Así se siente un Pueblo Mágico, <br />
          <span className="font-normal text-[#C5B49F]">
            Así se siente Orgánico Tepoztlán.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-[#9AA39D] font-light max-w-2xl leading-relaxed reveal">
          Un refugio exclusivo de paz y descanso en las faldas del Tepozteco. Confort refinado, cocina de autor y naturaleza en perfecta armonía.
        </p>

        {/* Direct Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto reveal">
          <a
            href={generalBookingWa}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#C5B49F] text-[#16241C] text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-[#D6C8B5] hover:shadow-lg hover:shadow-[#C5B49F]/20 active:scale-[0.98] transition-all duration-300 shadow-2xl select-none"
            aria-label="Reservar por WhatsApp para Orgánico Tepoztlán"
          >
            <WhatsAppIcon size={18} className="w-4 h-4 shrink-0" />
            <span>Reservar por WhatsApp</span>
          </a>
          <Link
            href="/habitaciones"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider text-[#F4F5F1] bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 backdrop-blur-md transition-all duration-300 group"
          >
            <span>Ver Habitaciones</span>
            <ArrowRight className="w-4 h-4 text-[#C5B49F] group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Quick Metrics */}
        <div className="grid grid-cols-3 gap-6 sm:gap-12 pt-12 border-t border-white/10 w-full max-w-2xl text-center reveal-stagger">
          <div className="reveal">
            <p className="text-xl sm:text-2xl font-light text-[#F4F5F1]">Riscos</p>
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8E9B93] mt-1">Vistas al Tepozteco</p>
          </div>
          <div className="reveal">
            <p className="text-xl sm:text-2xl font-light text-[#F4F5F1]">Alberca</p>
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8E9B93] mt-1">Confort & Descanso</p>
          </div>
          <div className="reveal">
            <p className="text-xl sm:text-2xl font-light text-[#F4F5F1]">Pet Friendly</p>
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8E9B93] mt-1">100% Bienvenidos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
