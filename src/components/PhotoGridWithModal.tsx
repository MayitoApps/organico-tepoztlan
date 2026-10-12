"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export interface GalleryPhoto {
  src: string;
  alt: string;
}

interface PhotoGridWithModalProps {
  photos: GalleryPhoto[];
  columns?: 2 | 3 | 4;
  aspectRatio?: string;
  className?: string;
}

export default function PhotoGridWithModal({
  photos,
  columns = 4,
  aspectRatio = "aspect-[4/3]",
  className = "",
}: PhotoGridWithModalProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") setSelectedIdx(null);
      if (e.key === "ArrowLeft") setSelectedIdx((selectedIdx - 1 + photos.length) % photos.length);
      if (e.key === "ArrowRight") setSelectedIdx((selectedIdx + 1) % photos.length);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx, photos.length]);

  const colClasses = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  }[columns];

  return (
    <>
      <div className={`grid ${colClasses} gap-5 ${className}`}>
        {photos.map((photo, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedIdx(idx)}
            className={`group relative ${aspectRatio} rounded-2xl overflow-hidden border border-white/10 bg-[#22362C] shadow-xl hover:border-[#C5B49F]/50 transition-all duration-500 cursor-pointer reveal-on-scroll ${
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
              src={photo.src}
              alt={photo.alt}
              fill
              quality={85}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />

            {/* Subtle expand icon on hover, NO text over the photo */}
            <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
              <div className="w-10 h-10 rounded-full bg-[#16241C]/80 backdrop-blur-sm border border-white/20 flex items-center justify-center text-[#C5B49F] shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && photos[selectedIdx] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedIdx(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedIdx(null)}
            aria-label="Cerrar vista completa"
            className="absolute top-5 right-5 sm:top-7 sm:right-7 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-200"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Previous button */}
          {photos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIdx((selectedIdx - 1 + photos.length) % photos.length);
              }}
              aria-label="Foto anterior"
              className="absolute left-3 sm:left-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next button */}
          {photos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIdx((selectedIdx + 1) % photos.length);
              }}
              aria-label="Siguiente foto"
              className="absolute right-3 sm:right-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Image Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[75vh] max-h-[75vh]">
              <Image
                src={photos[selectedIdx].src}
                alt={photos[selectedIdx].alt}
                fill
                quality={92}
                className="object-contain"
                priority
              />
            </div>
            {photos.length > 1 && (
              <div className="mt-3 text-center text-xs tracking-widest text-[#A1B3A7] uppercase">
                <span>
                  {selectedIdx + 1} / {photos.length}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
