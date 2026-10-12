import React from "react";
import { Metadata } from "next";
import { Trees, Waves, Sparkles, UtensilsCrossed, Coffee, Briefcase, Flame, Trophy, Compass, ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import OrigenSpaBanner from "@/components/OrigenSpaBanner";
import PhotoGridWithModal, { GalleryPhoto } from "@/components/PhotoGridWithModal";

export const metadata: Metadata = {
  title: "Nuestros Espacios & Jardines | Orgánico Hotel Boutique Tepoztlán",
  description:
    "Conoce a detalle cada uno de nuestros espacios con su propia galería fotográfica: Alberca, Jardines, Restaurante Infinito, Casa Club, Salón Imperfecto y más.",
};

interface SpaceSectionData {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  whatsappMessage: string;
  photos: GalleryPhoto[];
}

const DETAILED_SPACES: SpaceSectionData[] = [
  {
    id: "alberca",
    name: "Alberca",
    subtitle: "Un oasis sereno de descanso bajo el cálido sol de Tepoztlán y vistas a los riscos.",
    badge: "Área Acuática & Sol",
    icon: <Waves className="w-4 h-4 text-[#C5B49F]" />,
    description:
      "Nuestra alberca es el corazón del descanso al aire libre. Diseñada con acabados naturales que se integran al paisaje morelense, rodeada de camastros ergonómicos y áreas de sombra para disfrutar de una lectura, un cóctel fresco o un baño reparador con la cordillera como testigo.",
    features: [
      "Área de camastros y asoleadero de madera",
      "Vistas panorámicas hacia las formaciones montañosas",
      "Servicio de bebidas y toallas boutique",
    ],
    whatsappMessage: "Hola, deseo información y reservaciones para disfrutar de la Alberca en Orgánico Hotel Boutique Tepoztlán.",
    photos: [
      { src: "/images/spaces_gallery/alberca/alberca-01.jpg", alt: "Alberca y asoleadero en Orgánico Tepoztlán" },
      { src: "/images/spaces_gallery/alberca/alberca-02.jpg", alt: "Camastros y área de descanso junto a la alberca" },
      { src: "/images/spaces_gallery/alberca/alberca-03.jpg", alt: "Vista panorámica de la alberca y montañas de Tepoztlán" },
      { src: "/images/spaces_gallery/alberca/alberca-04.jpg", alt: "Aguas cristalinas y entorno vegetal de la alberca" },
      { src: "/images/spaces_gallery/alberca/alberca-05.jpg", alt: "Zona de relajación y sol en la alberca boutique" },
      { src: "/images/spaces_gallery/alberca/alberca-06.jpg", alt: "Perspectiva arquitectónica de la alberca" },
      { src: "/images/spaces_gallery/alberca/alberca-07.jpg", alt: "Detalle de camastros y naturaleza circundante" },
      { src: "/images/spaces_gallery/alberca/alberca-08.jpg", alt: "Atardecer reflejado en la alberca del hotel" },
    ],
  },
  {
    id: "jardines",
    name: "Jardines",
    subtitle: "Senderos botánicos y amplias áreas verdes que invitan al silencio y a la reconexión.",
    badge: "Botánica & Paisajismo",
    icon: <Trees className="w-4 h-4 text-[#C5B49F]" />,
    description:
      "Extensos jardines cuidados minuciosamente con flora nativa de Morelos, árboles centenarios y senderos de piedra volcánica. Un santuario natural donde el cantar de las aves y la suave brisa crean la atmósfera perfecta para meditar, pasear descalzo o simplemente contemplar la inmensidad del horizonte.",
    features: [
      "Jardín Central con senderos y áreas de descanso",
      "Jardín Infinito con vista despejada al valle",
      "Rincones de lectura y conexión con la naturaleza",
    ],
    whatsappMessage: "Hola, me gustaría información sobre los Jardines y experiencias al aire libre en Orgánico Tepoztlán.",
    photos: [
      { src: "/images/spaces_gallery/jardines/jardines-01.jpg", alt: "Senderos botánicos en los jardines de Orgánico Tepoztlán" },
      { src: "/images/spaces_gallery/jardines/jardines-02.jpg", alt: "Jardín Central con vegetación nativa y árboles" },
      { src: "/images/spaces_gallery/jardines/jardines-03.jpg", alt: "Rincón verde de descanso y relajación" },
      { src: "/images/spaces_gallery/jardines/jardines-04.jpg", alt: "Extensión panorámica de los jardines hacia las montañas" },
      { src: "/images/spaces_gallery/jardines/jardines-05.jpg", alt: "Senderos de piedra rodeados de naturaleza viva" },
      { src: "/images/spaces_gallery/jardines/jardines-06.jpg", alt: "Jardín Infinito y vista abierta de Tepoztlán" },
      { src: "/images/spaces_gallery/jardines/jardines-07.jpg", alt: "Vegetación exuberante y paz en los jardines" },
      { src: "/images/spaces_gallery/jardines/jardines-08.jpg", alt: "Área de césped y contemplación ecológica" },
    ],
  },
  {
    id: "restaurante",
    name: "Restaurante Infinito & Bar Inestable",
    subtitle: "Gastronomía inspirada en los ingredientes de Morelos y coctelería botánica de autor.",
    badge: "Gastronomía & Mixología",
    icon: <UtensilsCrossed className="w-4 h-4 text-[#C5B49F]" />,
    description:
      "Una experiencia culinaria que celebra el producto local, el fuego y las recetas de raíz contemporánea. Restaurante Infinito ofrece desayunos artesanales, comidas pausadas con vista al valle y cenas íntimas a la luz de las velas, mientras que Bar Inestable sorprende con mixología de mezcales, hierbas y destilados selectos.",
    features: [
      "Menú de autor con productos orgánicos de temporada",
      "Barra de mixología y cata de mezcales artesanales",
      "Terraza comedor con vistas panorámicas",
    ],
    whatsappMessage: "Hola, deseo reservar una mesa en Restaurante Infinito & Bar Inestable de Orgánico Tepoztlán.",
    photos: [
      { src: "/images/spaces_gallery/restaurante/restaurante-01.jpg", alt: "Salón principal de Restaurante Infinito" },
      { src: "/images/spaces_gallery/restaurante/restaurante-02.jpg", alt: "Diseño y ambientación cálida en Restaurante Infinito" },
      { src: "/images/spaces_gallery/restaurante/restaurante-03.jpg", alt: "Mesas con vista panorámica a la montaña" },
      { src: "/images/spaces_gallery/restaurante/restaurante-04.jpg", alt: "Ambiente nocturno e iluminación acogedora del restaurante" },
      { src: "/images/spaces_gallery/restaurante/restaurante-05.jpg", alt: "Bar Inestable y barra de mixología" },
      { src: "/images/spaces_gallery/restaurante/restaurante-06.jpg", alt: "Área lounge del bar con coctelería artesanal" },
      { src: "/images/spaces_gallery/restaurante/restaurante-07.jpg", alt: "Detalle de cocteles y barra de bebidas" },
      { src: "/images/spaces_gallery/restaurante/restaurante-08.jpg", alt: "Atmósfera íntima al atardecer en Bar Inestable" },
    ],
  },
  {
    id: "casa-club",
    name: "Casa Club",
    subtitle: "Punto de encuentro, convivencia y calidez con diseño arquitectónico contemporáneo.",
    badge: "Convivencia & Lounge",
    icon: <Coffee className="w-4 h-4 text-[#C5B49F]" />,
    description:
      "La Casa Club es el refugio social de Orgánico Tepoztlán. Concebida para brindar calidez en cualquier época del año, cuenta con amplias salas lounge, detalles de madera, chimenea y espacios idóneos para una charla distendida, juegos de mesa, lectura o una copa de vino al atardecer.",
    features: [
      "Salas lounge con sillones de diseño y chimenea",
      "Mobiliario en maderas nobles y textiles cálidos",
      "Ambiente privado y acogedor para huéspedes",
    ],
    whatsappMessage: "Hola, deseo información sobre la Casa Club y espacios comunes en Orgánico Tepoztlán.",
    photos: [
      { src: "/images/spaces_gallery/casa-club/casa-club-01.jpg", alt: "Vista general de la Casa Club en Orgánico Tepoztlán" },
      { src: "/images/spaces_gallery/casa-club/casa-club-02.jpg", alt: "Salas lounge y chimenea de Casa Club" },
      { src: "/images/spaces_gallery/casa-club/casa-club-03.jpg", alt: "Detalle de mobiliario artesanal y diseño interior" },
      { src: "/images/spaces_gallery/casa-club/casa-club-04.jpg", alt: "Espacio de lectura y convivencia social" },
      { src: "/images/spaces_gallery/casa-club/casa-club-05.jpg", alt: "Atmósfera cálida de noche en Casa Club" },
      { src: "/images/spaces_gallery/casa-club/casa-club-06.jpg", alt: "Rincón de descanso con vista a los jardines" },
    ],
  },
  {
    id: "salon-imperfecto",
    name: "Salón Imperfecto",
    subtitle: "Espacio versátil para reuniones ejecutivas, retiros holísticos y momentos privados.",
    badge: "Eventos & Retiros",
    icon: <Briefcase className="w-4 h-4 text-[#C5B49F]" />,
    description:
      "Bautizado bajo la filosofía del arte y la naturaleza orgánica, este salón multifuncional ofrece un entorno inspirador lejos del bullicio urbano. Ideal para talleres de bienestar, juntas directivas, conferencias y celebraciones privadas con montaje a la medida.",
    features: [
      "Capacidad flexible con diversos tipos de montaje",
      "Iluminación natural envolvente y climatización",
      "Conectividad de alta velocidad y privacidad absoluta",
    ],
    whatsappMessage: "Hola, me gustaría cotizar el Salón Imperfecto para un evento o reunión privada en Orgánico Tepoztlán.",
    photos: [
      { src: "/images/spaces_gallery/salon-imperfecto/salon-imperfecto-01.jpg", alt: "Salón Imperfecto con vista amplia" },
      { src: "/images/spaces_gallery/salon-imperfecto/salon-imperfecto-02.jpg", alt: "Montaje flexible para reuniones y retiros" },
      { src: "/images/spaces_gallery/salon-imperfecto/salon-imperfecto-03.jpg", alt: "Diseño minimalista y acogedor del salón" },
      { src: "/images/spaces_gallery/salon-imperfecto/salon-imperfecto-04.jpg", alt: "Iluminación natural en Salón Imperfecto" },
    ],
  },
  {
    id: "asador",
    name: "Área de Asador",
    subtitle: "Encuentros campestres al aire libre bajo los árboles y el cielo abierto.",
    badge: "Parrilladas & Aire Libre",
    icon: <Flame className="w-4 h-4 text-[#C5B49F]" />,
    description:
      "Diseñada para quienes aprecian los momentos culinarios al aire libre. Nuestro asador campestre cuenta con mobiliario rústico de jardín, áreas de preparación y todo lo necesario para organizar una comida memorable entre amigos o en familia rodeados de vegetación.",
    features: [
      "Parrilla profesional de carbón y leña",
      "Comedor exterior con sombra natural",
      "Servicio de insumos y asistencia por nuestro personal",
    ],
    whatsappMessage: "Hola, deseo reservar el Área de Asador para una convivencia en Orgánico Tepoztlán.",
    photos: [
      { src: "/images/spaces_gallery/asador/asador-01.jpg", alt: "Área de asador al aire libre en Tepoztlán" },
      { src: "/images/spaces_gallery/asador/asador-02.jpg", alt: "Instalaciones de parrilla y comedor rústico" },
      { src: "/images/spaces_gallery/asador/asador-03.jpg", alt: "Entorno natural y árboles rodeando el asador" },
      { src: "/images/spaces_gallery/asador/asador-04.jpg", alt: "Mobiliario campestre para parrilladas privadas" },
    ],
  },
  {
    id: "squash",
    name: "Cancha de Squash",
    subtitle: "Dinamismo, deporte y energía en instalaciones privadas integradas a la montaña.",
    badge: "Deporte & Energía",
    icon: <Trophy className="w-4 h-4 text-[#C5B49F]" />,
    description:
      "Para los entusiastas de la actividad física y el deporte de raqueta, ponemos a disposición una cancha de squash reglamentaria completamente equipada para mantenerte activo durante tu estancia sin salir de la propiedad.",
    features: [
      "Cancha techada con medidas oficiales",
      "Piso de duela amortiguada de alto rendimiento",
      "Equipo de raquetas y pelotas disponible para huéspedes",
    ],
    whatsappMessage: "Hola, me gustaría reservar turno en la Cancha de Squash de Orgánico Tepoztlán.",
    photos: [
      { src: "/images/spaces_gallery/squash/squash-01.jpg", alt: "Cancha de Squash en Orgánico Tepoztlán" },
      { src: "/images/spaces_gallery/squash/squash-02.jpg", alt: "Detalle de duela e iluminación de cancha" },
      { src: "/images/spaces_gallery/squash/squash-03.jpg", alt: "Instalaciones deportivas privadas del hotel" },
    ],
  },
  {
    id: "recepcion",
    name: "Recepción & Bienvenida",
    subtitle: "La cálida bienvenida donde comienza tu experiencia mística en Tepoztlán.",
    badge: "Hospitalidad & Concierge",
    icon: <Compass className="w-4 h-4 text-[#C5B49F]" />,
    description:
      "Desde el primer instante en que cruzas nuestras puertas, nuestro equipo de concierge boutique te recibe con hospitalidad genuina, bebidas de cortesía y atención dedicada para coordinar cada detalle de tu estancia y excursiones.",
    features: [
      "Atención personalizada y check-in boutique",
      "Asesoría de experiencias, rutas y gastronomía local",
      "Ambiente sereno con diseño en piedra y maderas",
    ],
    whatsappMessage: "Hola, deseo comunicarme con la Recepción de Orgánico Hotel Boutique Tepoztlán.",
    photos: [
      { src: "/images/spaces_gallery/recepcion/recepcion-01.jpg", alt: "Recepción y entrada boutique de Orgánico Tepoztlán" },
      { src: "/images/spaces_gallery/recepcion/recepcion-02.jpg", alt: "Mostrador y detalles de diseño arquitectónico" },
      { src: "/images/spaces_gallery/recepcion/recepcion-03.jpg", alt: "Espacio de bienvenida con cálida iluminación" },
    ],
  },
];

export default function NuestrosEspaciosPage() {
  return (
    <div className="pt-28 pb-20 bg-[#16241C] text-[#F4F5F1]">
      {/* Header */}
      <section className="relative py-20 px-4 text-center max-w-4xl mx-auto space-y-4 reveal-on-scroll">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#C5B49F]/30 text-[#C5B49F] text-xs uppercase tracking-[0.25em]">
          <Trees className="w-3.5 h-3.5" />
          <span>Arquitectura & Paisajismo</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#F4F5F1]">
          Nuestros Espacios
        </h1>
        <p className="text-base md:text-lg text-[#A1B3A7] leading-relaxed max-w-2xl mx-auto">
          Cada rincón de nuestro hotel boutique fue concebido para honrar la energía de Tepoztlán, conectando el descanso con la inmensidad de los riscos.
        </p>
      </section>

      {/* Quick Jump Bar */}
      <nav aria-label="Navegación de espacios" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-3 rounded-2xl bg-[#22362C]/70 backdrop-blur-sm border border-white/5">
          {DETAILED_SPACES.map((space) => (
            <a
              key={space.id}
              href={`#${space.id}`}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[#A1B3A7] hover:text-[#16241C] hover:bg-[#C5B49F] transition-all duration-200"
            >
              {space.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Individual Space Sections with Titles, Subtitles, and Photo Galleries */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 mb-24">
        {DETAILED_SPACES.map((space, idx) => {
          const spaceWa = getWhatsAppLink(space.whatsappMessage);
          return (
            <section
              key={space.id}
              id={space.id}
              className={`pt-10 scroll-mt-32 ${idx > 0 ? "border-t border-white/10" : ""}`}
            >
              {/* Space Header: Title, Subtitle, Description & WhatsApp CTA */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10 reveal-on-scroll">
                <div className="lg:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-[#C5B49F]/30 text-[#C5B49F] text-xs uppercase tracking-wider font-semibold">
                    {space.icon}
                    <span>{space.badge}</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F4F5F1]">
                    {space.name}
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl font-serif text-[#C5B49F] italic leading-relaxed">
                    {space.subtitle}
                  </p>
                  <p className="text-sm md:text-base text-[#A1B3A7] leading-relaxed pt-2 max-w-3xl">
                    {space.description}
                  </p>

                  {/* Bullet features */}
                  <div className="pt-2 flex flex-wrap gap-y-2 gap-x-6 text-xs text-[#F4F5F1]/80">
                    {space.features.map((feat, fIdx) => (
                      <span key={fIdx} className="inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5B49F]" />
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex lg:justify-end">
                  <a
                    href={spaceWa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#C5B49F] hover:bg-[#D6C8B5] text-[#16241C] font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Reservar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Dedicated Photo Gallery for this Space */}
              <PhotoGridWithModal
                photos={space.photos}
                columns={space.photos.length <= 4 ? (space.photos.length as 2 | 3 | 4) : 4}
              />
            </section>
          );
        })}
      </div>

      {/* Spa signature section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <OrigenSpaBanner />
      </div>
    </div>
  );
}
