import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Check, BedDouble } from "lucide-react";
import { ROOMS_DATA, getWhatsAppLink } from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import OrigenSpaBanner from "@/components/OrigenSpaBanner";

export const metadata: Metadata = {
  title: "Habitaciones & Suites en Tepoztlán | Orgánico Hotel Boutique",
  description:
    "Conoce nuestras suites exclusivas con chimenea, terrazas privadas con vista a los riscos del Tepozteco y confort boutique en Tepoztlán. Consulta disponibilidad.",
};

export default function HabitacionesPage() {
  return (
    <div className="pt-28 pb-20 bg-[#16241C] text-[#F4F5F1]">
      {/* Header Banner */}
      <section className="relative py-20 px-4 text-center max-w-4xl mx-auto space-y-4 reveal-on-scroll">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#C5B49F]/30 text-[#C5B49F] text-xs uppercase tracking-[0.25em]">
          <BedDouble className="w-3.5 h-3.5" />
          <span>Descanso & Serenidad</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#F4F5F1]">
          Nuestras Habitaciones
        </h1>
        <p className="text-base md:text-lg text-[#A1B3A7] leading-relaxed max-w-2xl mx-auto">
          Refugios íntimos en Tepoztlán concebidos con materiales nobles, lencería de alta gama y vistas inspiradoras para una desconexión total.
        </p>
      </section>

      {/* Room Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 mb-24">
        {ROOMS_DATA.map((room, index) => {
          const roomWa = getWhatsAppLink(room.whatsappMessage);
          const isReversed = index % 2 !== 0;

          return (
            <div
              id={room.slug}
              key={room.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-[#22362C] p-6 sm:p-10 rounded-2xl border border-white/10 shadow-2xl reveal-on-scroll ${
                index % 2 === 0 ? "delay-75" : "delay-150"
              }`}
            >
              {/* Gallery / Image Column */}
              <div
                className={`lg:col-span-7 space-y-4 ${
                  isReversed ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/5 shadow-xl">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    priority={index === 0}
                    className="object-cover"
                  />
                </div>

                {/* Sub-gallery thumbnails */}
                <div className="grid grid-cols-4 gap-3">
                  {room.gallery.slice(0, 4).map((thumb, tIdx) => (
                    <div
                      key={tIdx}
                      className="relative aspect-video rounded-lg overflow-hidden border border-white/5 hover:border-[#C5B49F]/40 transition-colors"
                    >
                      <Image
                        src={thumb}
                        alt={`${room.name} foto ${tIdx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Information Column */}
              <div
                className={`lg:col-span-5 space-y-6 ${
                  isReversed ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs uppercase tracking-[0.25em] text-[#C5B49F] font-semibold">
                      Capacidad: {room.maxOccupancy}
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl md:text-3xl font-serif text-[#C5B49F] font-semibold">
                        {room.price}
                      </span>
                      <span className="text-xs text-[#A1B3A7]">/ noche</span>
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif text-[#F4F5F1]">
                    {room.name}
                  </h2>
                </div>

                <p className="text-sm md:text-base text-[#A1B3A7] leading-relaxed">
                  {room.description}
                </p>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-[#F4F5F1] font-semibold">
                    Amenidades Incluidas:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {room.amenities.map((amenity, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-[#F4F5F1]/85">
                        <Check className="w-3.5 h-3.5 text-[#C5B49F] flex-shrink-0" />
                        <span>{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Personalized Action Buttons: Reservar por WhatsApp o por Formulario */}
                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <a
                    href={roomWa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-[#C5B49F] hover:bg-[#D6C8B5] text-[#16241C] font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Reservar</span>
                  </a>

                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center px-5 py-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[#F4F5F1] text-xs uppercase tracking-wider transition-colors"
                  >
                    <span>Formulario</span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Spa Mention */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <OrigenSpaBanner />
      </div>
    </div>
  );
}
