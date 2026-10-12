"use client";

import React, { useState } from "react";
import Image from "next/image";
import { UtensilsCrossed, Wine, Heart, Sparkles, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

type CategoryFilter = "todos" | "comida" | "restaurante" | "bar" | "cenas";

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: "comida" | "restaurante" | "bar" | "cenas";
  categoryLabel: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  // Platillos de comida
  {
    id: "p1",
    src: "/images/restaurante/platillo-01.jpg",
    alt: "Platillo de autor con ingredientes frescos de Morelos",
    category: "comida",
    categoryLabel: "Gastronomía",
  },
  {
    id: "p2",
    src: "/images/restaurante/platillo-02.jpg",
    alt: "Presentación culinaria gourmet en Restaurante Infinito",
    category: "comida",
    categoryLabel: "Gastronomía",
  },
  {
    id: "p3",
    src: "/images/restaurante/platillo-03.jpg",
    alt: "Platillo artesanal preparado con productos de selección",
    category: "comida",
    categoryLabel: "Gastronomía",
  },
  {
    id: "p4",
    src: "/images/restaurante/platillo-04.jpg",
    alt: "Corte fino y especialidad de la casa en Orgánico Tepoztlán",
    category: "comida",
    categoryLabel: "Gastronomía",
  },
  {
    id: "p5",
    src: "/images/restaurante/platillo-05.jpg",
    alt: "Creación gastronómica contemporánea de autor",
    category: "comida",
    categoryLabel: "Gastronomía",
  },
  {
    id: "p6",
    src: "/images/restaurante/platillo-06.jpg",
    alt: "Postre y detalle dulce artesanal en Tepoztlán",
    category: "comida",
    categoryLabel: "Gastronomía",
  },

  // Espacios del Restaurante
  {
    id: "r1",
    src: "/images/restaurante/restaurante-01.jpg",
    alt: "Salón principal de Restaurante Infinito",
    category: "restaurante",
    categoryLabel: "Restaurante",
  },
  {
    id: "r2",
    src: "/images/restaurante/restaurante-02.jpg",
    alt: "Mesas de madera y diseño orgánico en el restaurante",
    category: "restaurante",
    categoryLabel: "Restaurante",
  },
  {
    id: "r3",
    src: "/images/restaurante/restaurante-03.jpg",
    alt: "Terraza y atmósfera relajada de Restaurante Infinito",
    category: "restaurante",
    categoryLabel: "Restaurante",
  },
  {
    id: "r4",
    src: "/images/restaurante/restaurante-04.jpg",
    alt: "Espacio gastronómico con vistas a la naturaleza",
    category: "restaurante",
    categoryLabel: "Restaurante",
  },

  // Bar Inestable & Mixología
  {
    id: "b1",
    src: "/images/restaurante/bar-01.jpg",
    alt: "Bar Inestable en Orgánico Hotel Boutique Tepoztlán",
    category: "bar",
    categoryLabel: "Bar & Mixología",
  },
  {
    id: "b2",
    src: "/images/restaurante/bar-02.jpg",
    alt: "Barra artesanal con destilados y mezcales selectos",
    category: "bar",
    categoryLabel: "Bar & Mixología",
  },
  {
    id: "b3",
    src: "/images/restaurante/bar-03.jpg",
    alt: "Espacio íntimo del bar con iluminación cálida",
    category: "bar",
    categoryLabel: "Bar & Mixología",
  },
  {
    id: "b4",
    src: "/images/restaurante/bar-04.jpg",
    alt: "Salón lounge del bar para coctelería al atardecer",
    category: "bar",
    categoryLabel: "Bar & Mixología",
  },

  // Cenas Románticas
  {
    id: "c1",
    src: "/images/restaurante/cena-01.jpg",
    alt: "Montaje de cena romántica privada con iluminación de velas",
    category: "cenas",
    categoryLabel: "Cena Romántica",
  },
  {
    id: "c2",
    src: "/images/restaurante/cena-02.jpg",
    alt: "Experiencia íntima a la luz de las velas en Orgánico Tepoztlán",
    category: "cenas",
    categoryLabel: "Cena Romántica",
  },
];

const FILTERS: { key: CategoryFilter; label: string; icon: React.ReactNode; count: number }[] = [
  {
    key: "todos",
    label: "Todo",
    icon: <Sparkles className="w-3.5 h-3.5" />,
    count: GALLERY_ITEMS.length,
  },
  {
    key: "comida",
    label: "Comida & Platillos",
    icon: <UtensilsCrossed className="w-3.5 h-3.5" />,
    count: GALLERY_ITEMS.filter((i) => i.category === "comida").length,
  },
  {
    key: "restaurante",
    label: "Restaurante",
    icon: <Sparkles className="w-3.5 h-3.5" />,
    count: GALLERY_ITEMS.filter((i) => i.category === "restaurante").length,
  },
  {
    key: "bar",
    label: "Bar & Coctelería",
    icon: <Wine className="w-3.5 h-3.5" />,
    count: GALLERY_ITEMS.filter((i) => i.category === "bar").length,
  },
  {
    key: "cenas",
    label: "Cenas Románticas",
    icon: <Heart className="w-3.5 h-3.5" />,
    count: GALLERY_ITEMS.filter((i) => i.category === "cenas").length,
  },
];

export default function RestaurantGallery() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("todos");
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const filteredItems =
    activeFilter === "todos"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const openLightbox = (index: number) => {
    setSelectedIdx(index);
  };

  const closeLightbox = () => {
    setSelectedIdx(null);
  };

  const nextImage = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx + 1) % filteredItems.length);
  };

  const prevImage = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-4 reveal-on-scroll">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#C5B49F]/30 text-[#C5B49F] text-xs uppercase tracking-[0.25em]">
          <UtensilsCrossed className="w-3.5 h-3.5" />
          <span>Galería Fotográfica</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F4F5F1]">
          Galería de Restaurante & Gastronomía
        </h2>
        <p className="text-sm md:text-base text-[#A1B3A7] leading-relaxed">
          Recorre visualmente la arquitectura de Restaurante Infinito, nuestra barra de coctelería y las creaciones culinarias inspiradas en los sabores de Morelos.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 reveal-on-scroll delay-75">
        {FILTERS.map((f) => {
          const isActive = activeFilter === f.key;
          return (
            <button
              key={f.key}
              onClick={() => {
                setActiveFilter(f.key);
                setSelectedIdx(null);
              }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                isActive
                  ? "bg-[#C5B49F] text-[#16241C] shadow-lg shadow-[#C5B49F]/20"
                  : "bg-[#22362C] text-[#A1B3A7] hover:text-[#F4F5F1] hover:bg-[#2c4438] border border-white/5"
              }`}
            >
              {f.icon}
              <span>{f.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive ? "bg-[#16241C]/20 text-[#16241C]" : "bg-white/5 text-[#A1B3A7]"
                }`}
              >
                {f.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Image Grid - Clean luxury cards without text over the image */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => openLightbox(idx)}
            className={`group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-[#22362C] shadow-xl hover:border-[#C5B49F]/50 transition-all duration-500 cursor-pointer reveal-on-scroll ${
              idx % 4 === 0
                ? "delay-75"
                : idx % 4 === 1
                ? "delay-150"
                : idx % 4 === 2
                ? "delay-200"
                : "delay-300"
            }`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              quality={85}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />

            {/* Subtle expand icon on hover, NO text over the image */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
              <div className="w-10 h-10 rounded-full bg-[#16241C]/80 backdrop-blur-sm border border-white/20 flex items-center justify-center text-[#C5B49F] shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && filteredItems[selectedIdx] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            aria-label="Cerrar vista completa"
            className="absolute top-5 right-5 sm:top-7 sm:right-7 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-200"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Foto anterior"
            className="absolute left-3 sm:left-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Siguiente foto"
            className="absolute right-3 sm:right-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Image Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[75vh] max-h-[75vh]">
              <Image
                src={filteredItems[selectedIdx].src}
                alt={filteredItems[selectedIdx].alt}
                fill
                quality={92}
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-3 text-center text-xs tracking-widest text-[#A1B3A7] uppercase">
              <span>
                {selectedIdx + 1} / {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
