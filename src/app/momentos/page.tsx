import React from "react";
import { Metadata } from "next";
import { Compass, Film, UtensilsCrossed, Heart, Zap, Shield, Mountain, ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import OrigenSpaBanner from "@/components/OrigenSpaBanner";
import PhotoGridWithModal, { GalleryPhoto } from "@/components/PhotoGridWithModal";

export const metadata: Metadata = {
  title: "Momentos & Experiencias en Tepoztlán | Orgánico Hotel Boutique",
  description:
    "Descubre cada una de nuestras experiencias con su propia galería fotográfica: Cinema Orgánico, Picnic Gourmet, Cenas Románticas, Cuatrimotos & RZR, Cabalgatas y Hiking.",
};

interface MomentSectionData {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  whatsappMessage: string;
  photos: GalleryPhoto[];
}

const DETAILED_MOMENTS: MomentSectionData[] = [
  {
    id: "cinema-organico",
    title: "Cinema Orgánico",
    subtitle: "Cine bajo el manto estelar de Tepoztlán con comodidad de ensueño y servicio personalizado.",
    badge: "Momento Íntimo",
    icon: <Film className="w-4 h-4 text-[#C5B49F]" />,
    description:
      "Una experiencia cinematográfica privada al aire libre en nuestros jardines. Proyectamos tu película favorita bajo el cielo nocturno de Tepoztlán, con mantas térmicas, cojines artesanales, palomitas recién preparadas y servicio exclusivo de coctelería para una velada mágica.",
    features: [
      "Pantalla de alta definición al aire libre con audio envolvente",
      "Montaje bohemio con cojines, mantas y fogata ambiental",
      "Palomitas gourmet, botanas artesanales y bebidas de autor",
    ],
    whatsappMessage: "Hola, deseo reservar la experiencia de Cinema Orgánico en Orgánico Hotel Boutique Tepoztlán.",
    photos: [
      { src: "/images/momentos_gallery/cinema-organico/cinema-organico-01.jpg", alt: "Cinema Orgánico al aire libre bajo las estrellas" },
      { src: "/images/momentos_gallery/cinema-organico/cinema-organico-02.jpg", alt: "Montaje con mantas y cojines en los jardines para cine" },
      { src: "/images/momentos_gallery/cinema-organico/cinema-organico-03.jpg", alt: "Ambiente cálido e iluminación nocturna en Cinema Orgánico" },
    ],
  },
  {
    id: "picnic",
    title: "Picnic Gourmet en los Jardines",
    subtitle: "Delicias artesanales, tabla de quesos y vinos finos sobre el césped con vista a los riscos sagrados.",
    badge: "Momento Íntimo",
    icon: <UtensilsCrossed className="w-4 h-4 text-[#C5B49F]" />,
    description:
      "Un montaje campestre chic diseñado para pausar el reloj. Disfruta de una canasta de mimbre con selección de quesos de la región, carnes frías de calidad, frutos deshidratados, pan rústico horneado y una botella de vino mexicano o champaña en la serenidad de nuestros jardines.",
    features: [
      "Montaje bohemio con tapetes, cojines y sombrilla de jardín",
      "Canasta gourmet con delicias locales y pan artesanal",
      "Vino de selección o coctelería fresca preparada al momento",
    ],
    whatsappMessage: "Hola, deseo reservar la experiencia de Picnic Gourmet en Orgánico Hotel Boutique Tepoztlán.",
    photos: [
      { src: "/images/momentos_gallery/picnic/picnic-01.jpg", alt: "Picnic gourmet montado sobre el césped en Orgánico Tepoztlán" },
      { src: "/images/momentos_gallery/picnic/picnic-02.jpg", alt: "Canasta artesanal con quesos, pan y vino" },
      { src: "/images/momentos_gallery/picnic/picnic-03.jpg", alt: "Detalle de alimentos y copas en el picnic boutique" },
      { src: "/images/momentos_gallery/picnic/picnic-04.jpg", alt: "Tarde relajada de picnic con vista a la vegetación" },
      { src: "/images/momentos_gallery/picnic/picnic-05.jpg", alt: "Experiencia al aire libre en pareja o con amigos" },
    ],
  },
  {
    id: "cena-romantica",
    title: "Cena Romántica Privada",
    subtitle: "Veladas de ensueño a la luz de las velas para celebrar aniversarios, propuestas o momentos únicos.",
    badge: "Momento Íntimo",
    icon: <Heart className="w-4 h-4 text-[#C5B49F]" />,
    description:
      "El romance elevado al más alto nivel en el misticismo de Tepoztlán. Un sendero iluminado por cientos de velas te conduce a un rincón reservado con decoración floral, música tenue y un menú maridaje de cuatro tiempos diseñado exclusivamente para la ocasión por nuestro chef.",
    features: [
      "Montaje exclusivo en jardín privado, terraza o salón íntimo",
      "Caminos de velas, pétalos de rosa y arreglos florales frescos",
      "Menú de 3 o 4 tiempos con maridaje y servicio de mesero privado",
    ],
    whatsappMessage: "Hola, deseo cotizar y reservar una Cena Romántica Privada en Orgánico Tepoztlán.",
    photos: [
      { src: "/images/momentos_gallery/cena-romantica/cena-romantica-01.jpg", alt: "Montaje de cena romántica con iluminación de velas" },
      { src: "/images/momentos_gallery/cena-romantica/cena-romantica-02.jpg", alt: "Mesa privada para parejas con decoración exclusiva" },
    ],
  },
  {
    id: "cuatrimotos-rzr",
    title: "Rutas en Cuatrimotos & RZR",
    subtitle: "Adrenalina y aventura todoterreno a través de senderos de montaña y cañadas naturales.",
    badge: "Momento Rebeldía & Aventura",
    icon: <Zap className="w-4 h-4 text-[#C5B49F]" />,
    description:
      "Explora el lado más audaz y salvaje de Tepoztlán al volante de cuatrimotos y vehículos utilitarios todoterreno (RZR). Rutas trazadas por caminos empedrados, terracería, cruces de agua y miradores escénicos guiadas por instructores locales certificados.",
    features: [
      "Vehículos todoterreno de alta potencia revisados al 100%",
      "Equipo de protección homologado (casco y gafas)",
      "Guías expertos conocedores de la geografía del valle",
    ],
    whatsappMessage: "Hola, deseo reservar una ruta de Cuatrimotos / RZR en Orgánico Tepoztlán.",
    photos: [
      { src: "/images/momentos_gallery/cuatrimotos-rzr/cuatrimotos-rzr-01.jpg", alt: "Ruta todoterreno en cuatrimoto por caminos de Tepoztlán" },
      { src: "/images/momentos_gallery/cuatrimotos-rzr/cuatrimotos-rzr-02.jpg", alt: "Aventura en RZR cruzando senderos de montaña" },
      { src: "/images/momentos_gallery/cuatrimotos-rzr/cuatrimotos-rzr-03.jpg", alt: "Vehículos todoterreno listos para la travesía" },
      { src: "/images/momentos_gallery/cuatrimotos-rzr/cuatrimotos-rzr-04.jpg", alt: "Paisajes montañosos durante la ruta extrema" },
      { src: "/images/momentos_gallery/cuatrimotos-rzr/cuatrimotos-rzr-05.jpg", alt: "Adrenalina y velocidad en senderos de terracería" },
      { src: "/images/momentos_gallery/cuatrimotos-rzr/cuatrimotos-rzr-06.jpg", alt: "Parada panorámica con vista al Parque Nacional" },
    ],
  },
  {
    id: "cabalgata",
    title: "Cabalgata al Atardecer",
    subtitle: "Paseos ecuestres serenos entre el bosque y el misticismo del campo morelense.",
    badge: "Momento Rebeldía & Aventura",
    icon: <Shield className="w-4 h-4 text-[#C5B49F]" />,
    description:
      "Conecta con la nobleza de los caballos en un recorrido pausado entre pastizales y faldas de la sierra. Guiado por arrieros tradicionales que conocen cada sendero, disfrutarás del silencio campestre y los colores del atardecer tiñendo los acantilados de piedra.",
    features: [
      "Caballos mansos y entrenados para jinetes de cualquier nivel",
      "Ruta campestre tranquila con vistas despejadas",
      "Acompañamiento personalizado y equipo ecuestre de calidad",
    ],
    whatsappMessage: "Hola, me gustaría reservar la Cabalgata al Atardecer en Orgánico Tepoztlán.",
    photos: [
      { src: "/images/momentos_gallery/cabalgata/cabalgata-01.jpg", alt: "Cabalgata guiada al atardecer en los valles de Tepoztlán" },
    ],
  },
  {
    id: "hiking",
    title: "Hiking Sagrado & Caminata al Volcán",
    subtitle: "Exploración consciente por senderos ancestrales, formaciones volcánicas y miradores energéticos.",
    badge: "Momento Rebeldía & Aventura",
    icon: <Mountain className="w-4 h-4 text-[#C5B49F]" />,
    description:
      "Adéntrate a pie en la mística y geología del Tepozteco. Una caminata interpretativa donde descubrirás cuevas ancestrales, vegetación endémica y miradores con energía viva, guiada por especialistas en montaña y patrimonio local.",
    features: [
      "Ruta guiada por senderos naturales y miradores escénicos",
      "Interpretación botánica, histórica y energética del entorno",
      "Bastones de senderismo y kit de hidratación incluidos",
    ],
    whatsappMessage: "Hola, me interesa reservar la ruta de Hiking / Caminata al Volcán en Orgánico Tepoztlán.",
    photos: [
      { src: "/images/momentos_gallery/hiking/hiking-01.jpg", alt: "Senderismo por formaciones rocosas y caminos sagrados" },
      { src: "/images/momentos_gallery/hiking/hiking-02.jpg", alt: "Exploración de la naturaleza y senderos montañosos en Tepoztlán" },
    ],
  },
];

export default function MomentosPage() {
  return (
    <div className="pt-28 pb-20 bg-[#16241C] text-[#F4F5F1]">
      {/* Header */}
      <section className="relative py-20 px-4 text-center max-w-4xl mx-auto space-y-4 reveal-on-scroll">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#C5B49F]/30 text-[#C5B49F] text-xs uppercase tracking-[0.25em]">
          <Compass className="w-3.5 h-3.5" />
          <span>Experiencias & Aventuras</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#F4F5F1]">
          Nuestros Momentos
        </h1>
        <p className="text-base md:text-lg text-[#A1B3A7] leading-relaxed max-w-2xl mx-auto">
          La verdadera esencia de Tepoztlán se descubre explorando su naturaleza viva. Hemos curado vivencias que despiertan la adrenalina y abrazan el corazón.
        </p>
      </section>

      {/* Quick Jump Bar */}
      <nav aria-label="Navegación de experiencias" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-3 rounded-2xl bg-[#22362C]/70 backdrop-blur-sm border border-white/5">
          {DETAILED_MOMENTS.map((moment) => (
            <a
              key={moment.id}
              href={`#${moment.id}`}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[#A1B3A7] hover:text-[#16241C] hover:bg-[#C5B49F] transition-all duration-200"
            >
              {moment.title}
            </a>
          ))}
        </div>
      </nav>

      {/* Individual Moment Sections with Titles, Subtitles, and Photo Galleries */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 mb-24">
        {DETAILED_MOMENTS.map((moment, idx) => {
          const momentWa = getWhatsAppLink(moment.whatsappMessage);
          return (
            <section
              key={moment.id}
              id={moment.id}
              className={`pt-10 scroll-mt-32 ${idx > 0 ? "border-t border-white/10" : ""}`}
            >
              {/* Moment Header: Title, Subtitle, Description & WhatsApp CTA */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10 reveal-on-scroll">
                <div className="lg:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-[#C5B49F]/30 text-[#C5B49F] text-xs uppercase tracking-wider font-semibold">
                    {moment.icon}
                    <span>{moment.badge}</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F4F5F1]">
                    {moment.title}
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl font-serif text-[#C5B49F] italic leading-relaxed">
                    {moment.subtitle}
                  </p>
                  <p className="text-sm md:text-base text-[#A1B3A7] leading-relaxed pt-2 max-w-3xl">
                    {moment.description}
                  </p>

                  {/* Bullet features */}
                  <div className="pt-2 flex flex-wrap gap-y-2 gap-x-6 text-xs text-[#F4F5F1]/80">
                    {moment.features.map((feat, fIdx) => (
                      <span key={fIdx} className="inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5B49F]" />
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex lg:justify-end">
                  <a
                    href={momentWa}
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

              {/* Dedicated Photo Gallery for this Moment */}
              <PhotoGridWithModal
                photos={moment.photos}
                columns={
                  moment.photos.length === 1
                    ? 2
                    : moment.photos.length <= 3
                    ? (moment.photos.length as 2 | 3)
                    : 4
                }
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
