import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { Sparkles, HeartHandshake, Compass, Check } from "lucide-react";
import GrupoOrganicoSection from "@/components/GrupoOrganicoSection";

export const metadata: Metadata = {
  title: "¿Quiénes Somos? | Orgánico Hotel Boutique Tepoztlán",
  description:
    "Energía, silencio y naturaleza en un solo lugar. Conoce la filosofía de Orgánico Hotel Boutique Tepoztlán y nuestra política Pet Friendly.",
};

export default function NosotrosPage() {
  return (
    <div className="pt-28 pb-20 bg-[#16241C] text-[#F4F5F1]">
      {/* Header */}
      <section className="relative py-20 px-4 text-center max-w-4xl mx-auto space-y-4 reveal-on-scroll">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#C5B49F]/30 text-[#C5B49F] text-xs uppercase tracking-[0.25em]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Esencia & Mística</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#F4F5F1]">
          ¿Quiénes Somos?
        </h1>
        <p className="text-base md:text-lg text-[#A1B3A7] leading-relaxed max-w-2xl mx-auto">
          Energía, silencio y naturaleza en un solo lugar. La escapada perfecta para recargar energía a pocos minutos del centro histórico de Tepoztlán.
        </p>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#22362C] p-8 sm:p-12 rounded-2xl border border-white/10 shadow-2xl reveal-on-scroll">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-[#F4F5F1]">
              Un santuario en las faldas del Tepozteco
            </h2>
            <p className="text-sm md:text-base text-[#A1B3A7] leading-relaxed">
              En Orgánico Tepoztlán creemos que el verdadero lujo es el silencio, el tiempo sin prisa y la conexión profunda con la tierra. Nuestro hotel boutique fue diseñado respetando la topografía de la montaña, utilizando materiales locales, piedra, vigas y plantas autóctonas que transmiten paz desde el primer instante.
            </p>
            <p className="text-sm md:text-base text-[#A1B3A7] leading-relaxed">
              Formamos parte de <strong>Grupo Orgánico Hoteles Boutique</strong>, un sello de hospitalidad con presencia en los destinos más emblemáticos de México.
            </p>
          </div>

          <div className="relative aspect-square w-full rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/spaces/alberca.png"
              alt="Orgánico Tepoztlán"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Pet Friendly Card */}
        <div className="bg-[#22362C] p-8 sm:p-12 rounded-2xl border border-[#C5B49F]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 reveal-on-scroll delay-150">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5B49F] font-semibold">
              <HeartHandshake className="w-4 h-4" />
              <span>Pet Friendly Certificado</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-serif text-[#F4F5F1]">
              Tu mejor amigo también es bienvenido
            </h3>
            <p className="text-sm text-[#A1B3A7] leading-relaxed">
              En Orgánico sabemos que tu mascota es parte indispensable de tu familia. Por eso abrimos nuestras puertas y jardines para que disfruten juntos de la naturaleza de Tepoztlán con total comodidad.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 text-xs text-[#F4F5F1]/85 space-y-2 flex-shrink-0 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#C5B49F]" />
              <span>Jardines abiertos para paseos</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#C5B49F]" />
              <span>Camitas y recipientes disponibles</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#C5B49F]" />
              <span>Registro previo al reservar</span>
            </div>
          </div>
        </div>
      </section>

      {/* Universe Section */}
      <GrupoOrganicoSection />
    </div>
  );
}
