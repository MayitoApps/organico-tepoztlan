import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { Sparkles, Users } from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Eventos Empresariales, Retiros & Bodas Boutique | Orgánico Tepoztlán",
  description:
    "El escenario perfecto en Tepoztlán para retiros de bienestar, eventos corporativos boutique, bodas íntimas y celebraciones rodeadas de naturaleza.",
};

const EVENT_GALLERY = [
  { src: "/images/eventos/evento-01.jpg", alt: "Terraza y jardines para eventos corporativos en Tepoztlán" },
  { src: "/images/eventos/evento-02.jpg", alt: "Montaje ejecutivo y coffee break al aire libre" },
  { src: "/images/eventos/evento-03.jpg", alt: "Salón de juntas y trabajo con muros de piedra volcánica" },
  { src: "/images/eventos/evento-04.png", alt: "Mesa directiva y catering boutique en Tepoztlán" },
  { src: "/images/eventos/evento-05.jpg", alt: "Área para conferencias y presentaciones privadas" },
  { src: "/images/eventos/evento-06.jpg", alt: "Jardines para team building y dinámicas de grupo" },
  { src: "/images/eventos/evento-07.jpg", alt: "Montaje nocturno y ambientación cálida para eventos" },
  { src: "/images/eventos/evento-08.jpg", alt: "Cóctel y networking en terraza con vista al Tepozteco" },
  { src: "/images/eventos/evento-09.jpg", alt: "Área lounge y convivencia rodeada de naturaleza" },
  { src: "/images/eventos/evento-10.jpg", alt: "Servicio gastronómico y banquetes de autor" },
  { src: "/images/eventos/evento-11.jpg", alt: "Sesiones de integración en espacios abiertos" },
  { src: "/images/eventos/evento-12.jpg", alt: "Atardecer en las instalaciones de eventos boutique" },
];

export default function EventosPage() {
  const eventosWa = getWhatsAppLink(
    "Hola, me gustaría solicitar una cotización para un evento empresarial / retiro en Orgánico Hotel Boutique Tepoztlán."
  );

  return (
    <div className="pt-28 pb-20 bg-[#16241C] text-[#F4F5F1]">
      {/* Header */}
      <section className="relative py-20 px-4 text-center max-w-4xl mx-auto space-y-4 reveal-on-scroll">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#C5B49F]/30 text-[#C5B49F] text-xs uppercase tracking-[0.25em]">
          <Users className="w-3.5 h-3.5" />
          <span>OTAM · Eventos de Alto Nivel</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#F4F5F1]">
          Eventos Empresariales & Sociales
        </h1>
        <p className="text-base md:text-lg text-[#A1B3A7] leading-relaxed max-w-2xl mx-auto">
          Somos el escenario perfecto para reunir, celebrar e inspirar. Espacios rodeados de riscos, hospedaje boutique, gastronomía de autor y producción a la medida.
        </p>

        <div className="pt-4">
          <a
            href={eventosWa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#C5B49F] hover:bg-[#D6C8B5] text-[#16241C] font-semibold text-xs uppercase tracking-widest transition-all shadow-xl"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Reservar</span>
          </a>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#22362C] p-8 rounded-2xl border border-white/10 space-y-4 reveal-on-scroll delay-75">
            <h3 className="text-2xl font-serif text-[#F4F5F1]">
              Retiros de Bienestar & Yoga
            </h3>
            <p className="text-sm text-[#A1B3A7] leading-relaxed">
              Jardines serenos de más de 700 m² y el Salón Imperfecto con acústica natural para prácticas de meditación, respiración consciente y alineación integral.
            </p>
          </div>

          <div className="bg-[#22362C] p-8 rounded-2xl border border-white/10 space-y-4 reveal-on-scroll delay-150">
            <h3 className="text-2xl font-serif text-[#F4F5F1]">
              Offsites Empresariales
            </h3>
            <p className="text-sm text-[#A1B3A7] leading-relaxed">
              Espacios privados para juntas directivas, planeación estratégica, dinámicas de integración (team building en senderismo y cuatrimotos) y alta conectividad.
            </p>
          </div>

          <div className="bg-[#22362C] p-8 rounded-2xl border border-white/10 space-y-4 reveal-on-scroll delay-250">
            <h3 className="text-2xl font-serif text-[#F4F5F1]">
              Celebraciones Boutique
            </h3>
            <p className="text-sm text-[#A1B3A7] leading-relaxed">
              Bodas íntimas, aniversarios significativos y cumpleaños memorables diseñados con menús degustación, ambientación con velas y servicio de coctelería.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3 reveal-on-scroll">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5B49F] font-semibold">
            Instalaciones & Montajes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F4F5F1]">
            Galería de Eventos Empresariales
          </h2>
          <p className="text-sm md:text-base text-[#A1B3A7]">
            Espacios adaptables con alta conectividad, luz natural, servicio de catering de autor y la serenidad de los riscos de Tepoztlán.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENT_GALLERY.map((item, idx) => (
            <div
              key={idx}
              className={`group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-[#22362C] shadow-xl hover:border-[#C5B49F]/40 transition-all duration-500 reveal-on-scroll ${
                idx % 3 === 0 ? "delay-75" : idx % 3 === 1 ? "delay-150" : "delay-250"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                quality={85}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
        <ContactForm />
      </section>
    </div>
  );
}
