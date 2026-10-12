export const HOTEL_INFO = {
  name: "Orgánico Hotel Boutique Tepoztlán",
  tagline: "Así se siente un Pueblo Mágico, Así se Siente Orgánico Tepoztlán",
  address: "C. Netzahualcóyotl 47, Barrio de Santo Domingo, 62520 Tepoztlán, Mor.",
  fullAddress: "C. Netzahualcóyotl 47, Barrio de Santo Domingo, 62520 Tepoztlán, Morelos, México",
  mapsUrl: "https://maps.google.com/?q=C.+Netzahualc%C3%B3yotl+47,+Santo+Domingo,+62520+Tepoztl%C3%A1n,+Mor.",
  phone: "+52 55 7455 5091",
  whatsappNumber: "525574555091",
  email: "artes.grupoorganico@gmail.com",
  instagram: "https://www.instagram.com/ohbtepoztlan",
  instagramHandle: "@ohbtepoztlan",
  bookingEngineUrl: "https://booking.easy-rez.com/organico-hotel-boutique-tepoztlan/es/home",
  spaUrl: "https://www.origencentroholisticoyspa.com/",
  grupoUrl: "https://www.gohb.com.mx/",
  grupoVideoId: "r2tnnrp-G6Y",
};

/**
 * Generate customized WhatsApp link for any service, room, or experience
 */
export function getWhatsAppLink(serviceOrMessage: string): string {
  const baseMessage = serviceOrMessage.startsWith("Hola")
    ? serviceOrMessage
    : `Hola, me gustaría solicitar informes y disponibilidad sobre ${serviceOrMessage} en Orgánico Hotel Boutique Tepoztlán.`;
  return `https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent(baseMessage)}`;
}

export const ROOMS_DATA = [
  {
    id: "habitacion-estandar",
    name: "Habitación Estándar",
    slug: "estandar",
    price: "$3,500.00 MXN",
    category: "Hospedaje Boutique",
    description:
      "Cama King Size, terraza privada, jardín privado y muebles de jardín en una atmósfera de quietud absoluta.",
    amenities: [
      "Cama King Size",
      "Terraza privada",
      "Jardín privado",
      "Muebles de jardín",
    ],
    maxOccupancy: "2 adultos",
    image: "/images/rooms/estandar-1.png",
    gallery: [
      "/images/rooms/estandar-1.png",
      "/images/rooms/estandar-2.png",
      "/images/rooms/estandar-3.png",
      "/images/rooms/estandar-4.png",
    ],
    whatsappMessage:
      "Hola, me gustaría consultar disponibilidad y reservar la Habitación Estándar ($3,500.00 MXN) en Orgánico Tepoztlán.",
  },
  {
    id: "habitacion-master",
    name: "Habitación Master",
    slug: "master",
    price: "$4,500.00 MXN",
    category: "Suites de Alta Gama",
    description:
      "Cama King Size, sala de estar con muebles de diseño, terraza privada, jardín privado y muebles de jardín.",
    amenities: [
      "Cama King Size",
      "Sala de estar con muebles de diseño",
      "Terraza privada",
      "Jardín privado",
      "Muebles de jardín",
    ],
    maxOccupancy: "2 a 3 personas",
    image: "/images/rooms/premium-1.png",
    gallery: [
      "/images/rooms/premium-1.png",
      "/images/rooms/premium-2.png",
      "/images/rooms/premium-3.png",
      "/images/rooms/premium-4.png",
      "/images/rooms/premium-5.png",
      "/images/rooms/premium-6.png",
    ],
    whatsappMessage:
      "Hola, me gustaría consultar disponibilidad y reservar la Habitación Master ($4,500.00 MXN) en Orgánico Tepoztlán.",
  },
];

export const SPACES_DATA = [
  {
    id: "alberca",
    name: "Alberca",
    description:
      "Espejo de agua rodeado de imponentes riscos, asoleadero con camastros de diseño y servicio de coctelería para tardes sin prisa.",
    image: "/images/spaces/alberca.png",
    category: "Bienestar & Relajación",
    whatsappMessage: "Hola, me gustaría información sobre el acceso a la Alberca y servicios de day pass en Orgánico Tepoztlán.",
  },
  {
    id: "jardines",
    name: "Jardines",
    description:
      "Más de 730 m² de áreas verdes sagradas protegidas por la vegetación tepozteca, con capacidad para hasta 150 invitados en eventos íntimos.",
    image: "/images/spaces/jardines.png",
    category: "Naturaleza & Escenarios",
    whatsappMessage: "Hola, quisiera cotizar y conocer más sobre los Jardines para una estancia o evento en Orgánico Tepoztlán.",
  },
  {
    id: "restaurante-infinito",
    name: "Restaurante Infinito",
    description:
      "Gastronomía de autor con ingredientes frescos de la huerta y productores morelenses. Un espacio donde el tiempo se detiene y florecen los sentidos.",
    image: "/images/spaces/restaurante.png",
    category: "Gastronomía",
    whatsappMessage: "Hola, deseo hacer una reservación en el Restaurante Infinito de Orgánico Tepoztlán.",
  },
  {
    id: "casa-club",
    name: "Casa Club",
    description:
      "Un punto de encuentro con alma: chimenea encendida, biblioteca, juegos de salón y rincón acogedor para compartir vino y largas conversaciones.",
    image: "/images/spaces/casa-club.png",
    category: "Convivencia & Calidez",
    whatsappMessage: "Hola, me gustaría saber más de las instalaciones de Casa Club en Orgánico Tepoztlán.",
  },
  {
    id: "area-asador",
    name: "Área de Asador & Grill",
    description:
      "Espacio exterior rústico-elegante equipado para experiencias culinarias a las brasas, picnics privados y reuniones entre amigos.",
    image: "/images/spaces/asador.png",
    category: "Experiencias al Fuego",
    whatsappMessage: "Hola, me gustaría cotizar una tarde de asado privado en el Área de Grill de Orgánico Tepoztlán.",
  },
  {
    id: "cancha-squash",
    name: "Cancha de Squash",
    description:
      "Para quienes combinan el descanso con la actividad física, cancha reglamentaria inmersa en la atmósfera del hotel.",
    image: "/images/spaces/squash.png",
    category: "Deporte & Energía",
    whatsappMessage: "Hola, quisiera informes sobre el uso de la Cancha de Squash durante mi estancia en Orgánico Tepoztlán.",
  },
  {
    id: "salon-imperfecto",
    name: "Salón Imperfecto",
    description:
      "Un salón versátil para retiros, sesiones de yoga, meditación, conferencias boutique y eventos privados que honran la estética wabi-sabi.",
    image: "/images/spaces/salon-imperfecto.png",
    category: "Eventos & Retiros",
    whatsappMessage: "Hola, quisiera cotizar el Salón Imperfecto para un retiro o evento en Orgánico Tepoztlán.",
  },
];

export const EXPERIENCES_DATA = [
  {
    id: "cena-romantica",
    title: "Cena Romántica Privada",
    category: "Momentos Íntimos",
    description:
      "Montaje exclusivo a la luz de las velas o bajo las estrellas, menú maridaje de varios tiempos y atención personalizada para celebrar el amor.",
    image: "/images/experiences/cena-romantica.png",
    whatsappMessage: "Hola, deseo reservar una Cena Romántica Privada en Orgánico Tepoztlán.",
  },
  {
    id: "picnic",
    title: "Picnic en los Jardines",
    category: "Momentos Íntimos",
    description:
      "Cojines artesanales, canasta gourmet, selección de quesos, charcutería fina, pan rústico y vino para una tarde inolvidable en el jardín.",
    image: "/images/experiences/picnic.jpg",
    whatsappMessage: "Hola, me interesa reservar la experiencia de Picnic Gourmet en Orgánico Tepoztlán.",
  },
  {
    id: "cuatrimotos",
    title: "Ruta en Cuatrimotos",
    category: "Momentos de Aventura",
    description:
      "Explora senderos místicos de montaña, caminos empedrados y paisajes ocultos de Tepoztlán con guías expertos.",
    image: "/images/experiences/cuatrimotos.jpeg",
    whatsappMessage: "Hola, quiero reservar la ruta en Cuatrimotos en Orgánico Tepoztlán.",
  },
  {
    id: "rzr",
    title: "Aventura Extrema en RZR",
    category: "Momentos de Aventura",
    description:
      "Recorre brechas todoterreno con potencia y adrenalina mientras admiras las cumbres del Parque Nacional El Tepozteco.",
    image: "/images/experiences/rzr.jpeg",
    whatsappMessage: "Hola, quiero consultar disponibilidad y reservar la experiencia RZR en Orgánico Tepoztlán.",
  },
  {
    id: "cabalgata",
    title: "Cabalgata al Atardecer",
    category: "Momentos de Aventura",
    description:
      "Paseo a caballo guiado entre valles y faldas de la montaña, conectando con el ritmo pausado del campo morelense.",
    image: "/images/experiences/cabalgata.jpeg",
    whatsappMessage: "Hola, me gustaría reservar la Cabalgata guiada en Orgánico Tepoztlán.",
  },
  {
    id: "senderismo",
    title: "Hiking & Senderismo Sagrado",
    category: "Momentos de Aventura",
    description:
      "Caminata consciente por rutas ancestrales entre cañadas, cuevas y miradores de alta vibración energética.",
    image: "/images/experiences/hiking.jpeg",
    whatsappMessage: "Hola, me gustaría programar una ruta de Hiking / Senderismo en Orgánico Tepoztlán.",
  },
];
