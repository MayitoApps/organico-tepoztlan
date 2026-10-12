import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Instagram,
  ArrowUpRight,
  Shield,
  HeartHandshake,
  MessageSquare,
} from "lucide-react";
import { HOTEL_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#101A14] text-[#F4F5F1] border-t border-white/5 relative overflow-hidden">
      {/* Decorative subtle glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C5B49F]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/5">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-blanco.png"
                alt="Orgánico Hotel Boutique Tepoztlán"
                width={180}
                height={50}
                className="h-11 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-[#A1B3A7] leading-relaxed max-w-sm">
              Un santuario de calma, misticismo y naturaleza en el corazón de Tepoztlán, Morelos. Donde el confort de lujo y la energía de la montaña se encuentran en perfecta armonía.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={HOTEL_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C5B49F] text-[#F4F5F1] hover:text-[#16241C] border border-white/10 flex items-center justify-center transition-all duration-300"
                aria-label="Instagram de Orgánico Tepoztlán"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <span className="text-xs text-[#A1B3A7] font-medium tracking-wide">
                {HOTEL_INFO.instagramHandle}
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C5B49F] font-semibold">
              Explorar
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A1B3A7]">
              <li>
                <Link href="/habitaciones" className="hover:text-[#F4F5F1] transition-colors">
                  Habitaciones
                </Link>
              </li>
              <li>
                <Link href="/nuestros-espacios" className="hover:text-[#F4F5F1] transition-colors">
                  Nuestros Espacios
                </Link>
              </li>
              <li>
                <Link href="/restaurante" className="hover:text-[#F4F5F1] transition-colors">
                  Restaurante Infinito & Bar
                </Link>
              </li>
              <li>
                <Link href="/momentos" className="hover:text-[#F4F5F1] transition-colors">
                  Momentos & Aventura
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="hover:text-[#F4F5F1] transition-colors">
                  Eventos & Retiros
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-[#F4F5F1] transition-colors">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-[#F4F5F1] transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Bienestar & Grupo */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C5B49F] font-semibold">
              Alianzas & Grupo
            </h4>
            <ul className="space-y-3.5 text-sm text-[#A1B3A7]">
              <li>
                <a
                  href={HOTEL_INFO.spaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 hover:text-[#F4F5F1] transition-colors"
                >
                  <span>Origen Centro Holístico y Spa</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C5B49F] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <p className="text-xs text-[#A1B3A7]/70 mt-0.5">
                  Bienestar, masajes y rituales en Tepoztlán
                </p>
              </li>

              <li className="pt-2">
                <a
                  href={HOTEL_INFO.grupoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 hover:text-[#F4F5F1] transition-colors"
                >
                  <span>Grupo Orgánico Hoteles Boutique</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C5B49F] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <p className="text-xs text-[#A1B3A7]/70 mt-0.5">
                  Ajusco · Tepoztlán · Valle de Bravo · Roma Norte · Tlalpan · Veracruz
                </p>
              </li>
            </ul>
          </div>

          {/* Contact Details (Without raw email, focusing on Form and WhatsApp) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C5B49F] font-semibold">
              Ubicación & Contacto
            </h4>
            <div className="space-y-3 text-sm text-[#A1B3A7]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5B49F] flex-shrink-0 mt-1" />
                <a
                  href={HOTEL_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F4F5F1] transition-colors"
                >
                  {HOTEL_INFO.fullAddress}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5B49F] flex-shrink-0" />
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="hover:text-[#F4F5F1] transition-colors"
                >
                  {HOTEL_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#C5B49F] flex-shrink-0" />
                <Link
                  href="/contacto"
                  className="hover:text-[#F4F5F1] text-[#C5B49F] transition-colors"
                >
                  Formulario de Contacto & Cotizaciones
                </Link>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-[#A1B3A7]/70">
                <HeartHandshake className="w-3.5 h-3.5 text-[#C5B49F]" />
                <span>Pet Friendly con reservación previa</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A1B3A7]/60">
          <p>
            © {new Date().getFullYear()} Orgánico Hotel Boutique Tepoztlán. Miembro de Grupo Orgánico Hoteles Boutique. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3 h-3 text-[#C5B49F]" />
              <span>Reserva Segura</span>
            </span>
            <Link href="/contacto" className="hover:text-[#C5B49F] transition-colors">
              Aviso de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
