"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { HOTEL_INFO } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Habitaciones", href: "/habitaciones" },
  { label: "Nuestros Espacios", href: "/nuestros-espacios" },
  { label: "Restaurante", href: "/restaurante" },
  { label: "Momentos", href: "/momentos" },
  { label: "Eventos", href: "/eventos" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#16241C]/95 backdrop-blur-md py-3.5 border-b border-white/10 shadow-2xl"
            : "bg-gradient-to-b from-[#16241C]/90 via-[#16241C]/40 to-transparent py-4 md:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo a la izquierda */}
            <div className="flex-shrink-0 lg:w-[170px]">
              <Link
                href="/"
                className="inline-block transition-transform duration-300 hover:scale-105"
                aria-label="Orgánico Hotel Boutique Tepoztlán - Inicio"
              >
                <Image
                  src="/images/logo-blanco.png"
                  alt="Orgánico Hotel Boutique Tepoztlán"
                  width={160}
                  height={44}
                  priority
                  className="h-8 md:h-9 w-auto object-contain drop-shadow-md"
                />
              </Link>
            </div>

            {/* Menú Centrado - Textos más pequeños, en una sola línea sin saltos, estético y legible */}
            <nav
              className="hidden lg:flex flex-1 items-center justify-center gap-5 xl:gap-7 whitespace-nowrap"
              aria-label="Navegación principal"
            >
              {NAV_LINKS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-[11px] xl:text-[11.5px] uppercase tracking-[0.15em] transition-all duration-300 relative py-1 font-medium whitespace-nowrap ${
                      isActive
                        ? "text-[#C5B49F] font-semibold"
                        : "text-[#F4F5F1]/85 hover:text-[#C5B49F]"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C5B49F] rounded-full animate-fadeIn" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Botón Reservar a la derecha (motor Easy-Rez) */}
            <div className="hidden lg:flex lg:w-[170px] items-center justify-end">
              <a
                href={HOTEL_INFO.bookingEngineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#C5B49F]/30 bg-[#C5B49F]/10 hover:bg-[#C5B49F] text-[#F4F5F1] hover:text-[#16241C] text-[10.5px] uppercase tracking-[0.16em] font-medium transition-all duration-300 shadow-sm hover:shadow-[0_4px_16px_rgba(197,180,159,0.25)]"
              >
                <span>Reservar</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Botón de Menú Móvil */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#F4F5F1] hover:text-[#C5B49F] transition-colors"
                aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menú Móvil */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#16241C]/98 backdrop-blur-2xl flex flex-col justify-center items-center px-6 lg:hidden animate-fadeIn">
          <div className="mb-8">
            <Image
              src="/images/logo-blanco.png"
              alt="Orgánico Hotel Boutique Tepoztlán"
              width={170}
              height={48}
              className="h-10 w-auto object-contain"
            />
          </div>

          <nav className="flex flex-col items-center gap-5 text-center" aria-label="Navegación móvil">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm uppercase tracking-[0.25em] transition-colors ${
                pathname === "/" ? "text-[#C5B49F] font-semibold" : "text-[#F4F5F1]/85"
              }`}
            >
              Inicio
            </Link>

            {NAV_LINKS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm uppercase tracking-[0.25em] transition-colors ${
                    isActive ? "text-[#C5B49F] font-semibold" : "text-[#F4F5F1]/85 hover:text-[#C5B49F]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 w-full max-w-xs flex flex-col items-center">
            <a
              href={HOTEL_INFO.bookingEngineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-[#C5B49F]/40 bg-[#C5B49F] text-[#16241C] text-[11px] uppercase tracking-[0.18em] font-semibold transition-all duration-300 shadow-[0_4px_16px_rgba(197,180,159,0.3)] active:scale-[0.98]"
            >
              <span>Reservar</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-[#A1B3A7]/70 text-center">
            Tepoztlán, Morelos · México
          </p>
        </div>
      )}
    </>
  );
}
