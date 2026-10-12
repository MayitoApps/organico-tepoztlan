"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

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

            {/* Espacio equilibrador a la derecha (mismo ancho que el logo para centrado perfecto) */}
            <div className="hidden lg:block lg:w-[170px]" aria-hidden="true" />

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

      {/* Menú Móvil - Sin botón de reservar ni de WhatsApp */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#16241C]/98 backdrop-blur-2xl flex flex-col justify-center items-center px-6 lg:hidden animate-fadeIn">
          <div className="mb-10">
            <Image
              src="/images/logo-blanco.png"
              alt="Orgánico Hotel Boutique Tepoztlán"
              width={170}
              height={48}
              className="h-10 w-auto object-contain"
            />
          </div>

          <nav className="flex flex-col items-center gap-6 text-center" aria-label="Navegación móvil">
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

          <p className="mt-12 text-[11px] uppercase tracking-[0.3em] text-[#A1B3A7]/70 text-center">
            Tepoztlán, Morelos · México
          </p>
        </div>
      )}
    </>
  );
}
