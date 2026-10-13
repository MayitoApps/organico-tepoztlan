import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BedDouble, Check } from "lucide-react";
import {
  ROOMS_DATA,
  SPACES_DATA,
  EXPERIENCES_DATA,
  getWhatsAppLink,
} from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import HeroSection from "@/components/HeroSection";
import GrupoOrganicoSection from "@/components/GrupoOrganicoSection";
import OrigenSpaBanner from "@/components/OrigenSpaBanner";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <div className="bg-[#16241C] text-[#F4F5F1] selection:bg-[#C5B49F] selection:text-[#16241C]">
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* ========================================================
          GRUPO ORGÁNICO HOTELES BOUTIQUE (JUSTO DESPUÉS DEL HERO)
          ======================================================== */}
      <GrupoOrganicoSection />

      {/* ========================================================
          NUESTRA FILOSOFÍA (CON FOTOGRAFÍA DE CARPETAS)
          ======================================================== */}
      <section className="relative py-24 md:py-32 bg-[#16241C] text-[#F4F5F1] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Foto de nuestras carpetas sin texto encima */}
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group reveal-slide-left">
              <Image
                src="/images/filosofia.png"
                alt="Arquitectura y detalles de Orgánico Hotel Boutique Tepoztlán"
                fill
                quality={90}
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Texto editorial */}
            <div className="lg:col-span-6 space-y-6 reveal-slide-right delay-150">
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5B49F] font-semibold">
                Nuestra Filosofía
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F4F5F1] leading-tight">
                El tiempo parece desacelerar para dar paso al deleite de los sentidos.
              </h2>
              <div className="w-16 h-0.5 bg-[#C5B49F] my-4" />
              <p className="text-[#A1B3A7] text-base md:text-lg leading-relaxed">
                Orgánico Hotel Boutique Tepoztlán es una oda al descanso consciente. Una arquitectura que dialoga con los muros de piedra volcánica, la madera curada y la vegetación nativa para crear una atmósfera íntima y sanadora.
              </p>
              <p className="text-[#A1B3A7] text-base md:text-lg leading-relaxed">
                Aquí cada respiración reconecta con el origen. Sin prisa, con el confort de una suite de alta gama y la tranquilidad de saberte cuidado en cada detalle.
              </p>
              <div className="pt-2">
                <Link
                  href="/nosotros"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5B49F] hover:text-[#D6C8B5] transition-colors font-semibold group"
                >
                  <span>Conocer más de nuestra historia</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          HABITACIONES (ROOMS) SECTION
          ======================================================== */}
      <section className="relative py-24 md:py-32 bg-[#1B2C23] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal-on-scroll">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5B49F] font-semibold">
                <BedDouble className="w-4 h-4" />
                <span>Hospedaje de Autor</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F4F5F1]">
                Nuestras Habitaciones
              </h2>
              <p className="text-sm md:text-base text-[#A1B3A7] max-w-lg">
                Espacios concebidos para despertar con vistas a las cumbres y dormirse con la calidez del fuego.
              </p>
            </div>

            <Link
              href="/habitaciones"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5B49F] hover:text-[#D6C8B5] transition-colors group"
            >
              <span>Ver todas las amenidades</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {ROOMS_DATA.map((room, idx) => {
              const roomWa = getWhatsAppLink(room.whatsappMessage);
              return (
                <div
                  key={room.id}
                  className={`group relative bg-[#22362C] rounded-2xl overflow-hidden border border-white/10 hover:border-[#C5B49F]/40 transition-all duration-500 flex flex-col shadow-2xl reveal-on-scroll ${
                    idx % 2 === 0 ? "delay-100" : "delay-250"
                  }`}
                >
                  {/* Image container sin texto encima */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Room details */}
                  <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                        <h3 className="text-2xl md:text-3xl font-serif text-[#F4F5F1]">
                          {room.name}
                        </h3>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-xl sm:text-2xl font-serif text-[#C5B49F] font-semibold">
                            {room.price}
                          </span>
                          <span className="text-xs text-[#A1B3A7]">/ noche</span>
                        </div>
                      </div>
                      <p className="text-sm text-[#A1B3A7] leading-relaxed">
                        {room.description}
                      </p>
                    </div>

                    {/* Amenities list */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-white/5">
                      {room.amenities.map((amenity, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#F4F5F1]/85">
                          <Check className="w-3.5 h-3.5 text-[#C5B49F] flex-shrink-0" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>

                    {/* Botón Reservar: solo dice "Reservar" con icono negro de WhatsApp */}
                    <div className="pt-4 flex flex-col sm:flex-row gap-3">
                      <a
                        href={roomWa}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-[#C5B49F] hover:bg-[#D6C8B5] text-[#16241C] font-semibold text-xs uppercase tracking-[0.16em] transition-all duration-300 shadow-md"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        <span>Reservar</span>
                      </a>

                      <Link
                        href={`/habitaciones#${room.slug}`}
                        className="inline-flex items-center justify-center px-4 py-3.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[#F4F5F1] text-xs uppercase tracking-wider transition-colors"
                      >
                        Detalles
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          NUESTROS ESPACIOS SECTION
          ======================================================== */}
      <section className="relative py-24 md:py-32 bg-[#16241C] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3 reveal-on-scroll">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5B49F] font-semibold">
              Instalaciones & Rincón Natural
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F4F5F1]">
              Nuestros Espacios
            </h2>
            <p className="text-sm md:text-base text-[#A1B3A7]">
              Rincones creados con nobleza de materiales para reconectar con el presente, compartir o disfrutar en soledad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SPACES_DATA.slice(0, 6).map((space, idx) => {
              const spaceWa = getWhatsAppLink(space.whatsappMessage);
              return (
                <div
                  key={space.id}
                  className={`group relative bg-[#22362C] rounded-xl overflow-hidden border border-white/10 hover:border-[#C5B49F]/30 transition-all duration-300 flex flex-col shadow-lg reveal-on-scroll ${
                    idx % 3 === 0 ? "delay-75" : idx % 3 === 1 ? "delay-150" : "delay-250"
                  }`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={space.image}
                      alt={space.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-serif text-[#F4F5F1] group-hover:text-[#C5B49F] transition-colors">
                        {space.name}
                      </h3>
                      <p className="text-xs text-[#A1B3A7] leading-relaxed line-clamp-3">
                        {space.description}
                      </p>
                    </div>

                    <a
                      href={spaceWa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5B49F] hover:text-[#D6C8B5] font-semibold pt-2"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span>Reservar</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center reveal-on-scroll delay-150">
            <Link
              href="/nuestros-espacios"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[#F4F5F1] text-xs uppercase tracking-[0.2em] transition-all"
            >
              <span>Explorar Todos los Espacios</span>
              <ArrowRight className="w-4 h-4 text-[#C5B49F]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          ORIGEN CENTRO HOLÍSTICO Y SPA SECTION
          ======================================================== */}
      <OrigenSpaBanner />

      {/* ========================================================
          EXPERIENCIAS & MOMENTOS SECTION
          ======================================================== */}
      <section className="relative py-24 md:py-32 bg-[#1B2C23] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal-on-scroll">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5B49F] font-semibold">
                Tiempos Inolvidables
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F4F5F1]">
                Nuestros Momentos & Aventuras
              </h2>
              <p className="text-sm md:text-base text-[#A1B3A7] max-w-lg">
                Desde rutas extremas por cañadas hasta cenas privadas bajo la luna tepozteca.
              </p>
            </div>

            <Link
              href="/momentos"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5B49F] hover:text-[#D6C8B5] transition-colors group"
            >
              <span>Ver todas las experiencias</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXPERIENCES_DATA.map((exp, idx) => {
              const expWa = getWhatsAppLink(exp.whatsappMessage);
              return (
                <div
                  key={exp.id}
                  className={`group relative bg-[#22362C] rounded-xl overflow-hidden border border-white/10 hover:border-[#C5B49F]/40 transition-all duration-300 flex flex-col shadow-lg reveal-on-scroll ${
                    idx % 3 === 0 ? "delay-75" : idx % 3 === 1 ? "delay-150" : "delay-250"
                  }`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-serif text-[#F4F5F1] group-hover:text-[#C5B49F] transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-xs text-[#A1B3A7] leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    <a
                      href={expWa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between w-full pt-3 border-t border-white/5 text-xs uppercase tracking-wider text-[#C5B49F] hover:text-[#D6C8B5] font-semibold"
                    >
                      <span className="flex items-center gap-2">
                        <WhatsAppIcon className="w-3.5 h-3.5" />
                        Reservar
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          CONTACT FORM SECTION
          ======================================================== */}
      <section id="contacto" className="relative py-24 md:py-32 bg-[#16241C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
