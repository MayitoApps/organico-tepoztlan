import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { HOTEL_INFO } from "@/lib/constants";

interface OrigenSpaBannerProps {
  compact?: boolean;
}

export default function OrigenSpaBanner({ compact = false }: OrigenSpaBannerProps) {
  if (compact) {
    return (
      <div className="relative bg-gradient-to-r from-[#22362C] to-[#1B2C23] border border-[#C5B49F]/30 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1.5 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.25em] text-[#C5B49F]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Bienestar & Rituales</span>
          </div>
          <h4 className="text-xl md:text-2xl font-serif text-[#F4F5F1]">
            Origen Centro Holístico y Spa
          </h4>
          <p className="text-sm text-[#A1B3A7] max-w-xl">
            Masajes terapéuticos, rituales de sanación y experiencias holísticas en el corazón místico de Tepoztlán.
          </p>
        </div>

        <a
          href={HOTEL_INFO.spaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#C5B49F] hover:bg-[#D6C8B5] text-[#16241C] font-semibold text-xs uppercase tracking-widest transition-all duration-300 flex-shrink-0 group shadow-md"
        >
          <span>Visitar Origen Spa</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    );
  }

  return (
    <section className="relative py-20 md:py-28 bg-[#1B2C23] text-[#F4F5F1] overflow-hidden border-t border-b border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,180,159,0.08),transparent_50%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6 reveal-slide-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#C5B49F]/30 text-[#C5B49F] text-xs uppercase tracking-[0.25em]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Santuario de Bienestar Holístico</span>
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F4F5F1] leading-tight">
              Reconecta cuerpo y espíritu en{" "}
              <span className="text-[#C5B49F] italic">Origen Centro Holístico y Spa</span>
            </h3>

            <p className="text-[#A1B3A7] text-base md:text-lg leading-relaxed">
              En Orgánico Tepoztlán honramos el descanso integral. Por ello, te invitamos a vivir los rituales ancestrales, masajes terapéuticos, hidroterapia y ceremonias de bienestar en las instalaciones de <strong>Origen Centro Holístico y Spa</strong>.
            </p>

            <div className="pt-2">
              <a
                href={HOTEL_INFO.spaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-[#C5B49F] hover:bg-[#D6C8B5] text-[#16241C] font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-xl group"
              >
                <span>Conoce Origen Centro Holístico y Spa</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 reveal-slide-right delay-150">
            <div className="relative p-8 rounded-2xl bg-[#16241C]/80 border border-white/10 backdrop-blur-md space-y-5">
              <div className="text-xs uppercase tracking-[0.25em] text-[#C5B49F] font-semibold">
                Rituales & Tratamientos
              </div>
              <ul className="space-y-3.5 text-sm text-[#F4F5F1]/90">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5B49F] mt-2 flex-shrink-0" />
                  <span>Masajes relajantes, descontracturantes y con piedras calientes volcánicas</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5B49F] mt-2 flex-shrink-0" />
                  <span>Rituales de pareja con aromaterapia y exfoliación botánica</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5B49F] mt-2 flex-shrink-0" />
                  <span>Faciales rejuvenecedores con ingredientes orgánicos certificados</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5B49F] mt-2 flex-shrink-0" />
                  <span>Sesiones de meditación guiada y alineación de chakras</span>
                </li>
              </ul>
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#A1B3A7]">
                <span>Tepoztlán, Morelos</span>
                <span className="text-[#C5B49F]">Convenio Exclusivo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
