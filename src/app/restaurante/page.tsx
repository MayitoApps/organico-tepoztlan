import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { UtensilsCrossed, Wine, Heart } from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import RestaurantGallery from "@/components/RestaurantGallery";

export const metadata: Metadata = {
  title: "Restaurante Infinito & Bar | Gastronomía en Orgánico Tepoztlán",
  description:
    "Cocina de autor con productos frescos de Morelos, mixología de autor, coctelería al atardecer y cenas románticas privadas en Tepoztlán.",
};

export default function RestaurantePage() {
  const mesaWa = getWhatsAppLink(
    "Hola, deseo reservar una mesa en Restaurante Infinito en Orgánico Hotel Boutique Tepoztlán."
  );
  const cenaRomanticaWa = getWhatsAppLink(
    "Hola, me gustaría cotizar y reservar una Cena Romántica Privada en Restaurante Infinito - Orgánico Tepoztlán."
  );
  const mixologiaWa = getWhatsAppLink(
    "Hola, quisiera información sobre el Bar y experiencias de mixología en Orgánico Tepoztlán."
  );

  return (
    <div className="pt-28 pb-20 bg-[#16241C] text-[#F4F5F1]">
      {/* Header */}
      <section className="relative py-20 px-4 text-center max-w-4xl mx-auto space-y-4 reveal-on-scroll">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#C5B49F]/30 text-[#C5B49F] text-xs uppercase tracking-[0.25em]">
          <UtensilsCrossed className="w-3.5 h-3.5" />
          <span>Gastronomía & Mixología</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#F4F5F1]">
          Restaurante Infinito & Bar
        </h1>
        <p className="text-base md:text-lg text-[#A1B3A7] leading-relaxed max-w-2xl mx-auto">
          Un espacio donde el tiempo se siente distinto. Sabores auténticos inspirados en la tierra morelense, coctelería de autor y veladas a la luz de las velas.
        </p>
      </section>

      {/* Main Feature: Restaurante Infinito */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#22362C] p-6 sm:p-12 rounded-2xl border border-white/10 shadow-2xl reveal-on-scroll">
          <div className="lg:col-span-7 relative aspect-[16/10] w-full rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/spaces/restaurante.png"
              alt="Restaurante Infinito en Orgánico Tepoztlán"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5B49F] font-semibold">
                Cocina de Autor
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#F4F5F1]">
                Restaurante Infinito
              </h2>
            </div>

            <p className="text-sm md:text-base text-[#A1B3A7] leading-relaxed">
              Inspirado en la riqueza botánica y culinaria de Tepoztlán, Restaurante Infinito rinde tributo a los ingredientes frescos, pescados de selección, cortes finos y hierbas aromáticas de nuestro propio entorno.
            </p>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 text-xs text-[#F4F5F1]/85">
              <p>· Desayunos energéticos y artesanales</p>
              <p>· Comidas relajadas con vista panorámica</p>
              <p>· Cenas íntimas con servicio maridaje personalizado</p>
            </div>

            <div className="pt-2">
              <a
                href={mesaWa}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-[#C5B49F] hover:bg-[#D6C8B5] text-[#16241C] font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Reservar</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Grid: Bar & Cenas Románticas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card: Bar de Autor */}
          <div className="bg-[#22362C] rounded-2xl overflow-hidden border border-white/10 p-8 space-y-6 flex flex-col justify-between reveal-on-scroll delay-100">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#C5B49F]/10 border border-[#C5B49F]/30 flex items-center justify-center text-[#C5B49F]">
                <Wine className="w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-[#F4F5F1]">
                Bar & Mixología de Autor
              </h3>
              <p className="text-sm text-[#A1B3A7] leading-relaxed">
                Coctelería botánica elaborada con mezcales artesanales de la región, infusiones herbales locales, bitters caseros y vinos mexicanos seleccionados. Ideal para ver el atardecer desvanecerse en las montañas.
              </p>
            </div>

            <a
              href={mixologiaWa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5B49F] hover:text-[#D6C8B5] font-semibold"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Reservar</span>
            </a>
          </div>

          {/* Card: Cenas Románticas Privadas */}
          <div className="bg-[#22362C] rounded-2xl overflow-hidden border border-white/10 p-8 space-y-6 flex flex-col justify-between reveal-on-scroll delay-200">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#C5B49F]/10 border border-[#C5B49F]/30 flex items-center justify-center text-[#C5B49F]">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-[#F4F5F1]">
                Cenas Privadas & Románticas
              </h3>
              <p className="text-sm text-[#A1B3A7] leading-relaxed">
                Diseñamos montajes de ensueño para aniversarios, propuestas de matrimonio o celebraciones únicas: caminos de velas, flores frescas, música ambiental y un menú especial de tres a cuatro tiempos.
              </p>
            </div>

            <a
              href={cenaRomanticaWa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5B49F] hover:text-[#D6C8B5] font-semibold"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Reservar</span>
            </a>
          </div>
        </div>
      </section>

      {/* Photo Gallery: Restaurant & Food */}
      <RestaurantGallery />

      {/* Bottom Reservation Call to Action */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal-on-scroll">
        <div className="bg-[#22362C] p-8 sm:p-10 rounded-2xl border border-white/10 shadow-2xl space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5B49F] font-semibold">
            Vive la Experiencia
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif text-[#F4F5F1]">
            Reserva tu Mesa o Experiencia Gastronómica
          </h3>
          <p className="text-sm text-[#A1B3A7] max-w-xl mx-auto leading-relaxed">
            Abierto tanto para huéspedes como para visitantes que buscan alta cocina y mixología en un entorno natural y sereno.
          </p>
          <div className="pt-2">
            <a
              href={mesaWa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#C5B49F] hover:bg-[#D6C8B5] text-[#16241C] font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Reservar por WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
