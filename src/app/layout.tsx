import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans, Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollObserver from "@/components/ScrollObserver";
import DiaDeMuertosPopup from "@/components/DiaDeMuertosPopup";
import { Analytics } from "@vercel/analytics/next";
import { HOTEL_INFO } from "@/lib/constants";

const fontOutfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const fontSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const fontCinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.organicohotelboutiquetepoz.com"),
  title: {
    default: "Hotel Boutique en Tepoztlán | Orgánico Hotel Boutique Tepoztlán",
    template: "%s | Orgánico Hotel Boutique Tepoztlán",
  },
  description:
    "Descubre el encanto y misticismo de Orgánico Hotel Boutique en Tepoztlán. Habitaciones de lujo, alberca, vistas panorámicas a la montaña, Restaurante Infinito y bienestar. Consulta disponibilidad.",
  keywords: [
    "hotel boutique tepoztlan",
    "organico hotel boutique tepoztlan",
    "hospedaje de lujo tepoztlan",
    "hotel con alberca tepoztlan",
    "habitaciones pet friendly tepoztlan",
    "restaurante infinito tepoztlan",
    "bodas y retiros tepoztlan",
    "grupo organico hoteles boutique",
    "escapada romantica tepoztlan",
  ],
  authors: [{ name: "Grupo Orgánico Hoteles Boutique" }],
  creator: "Grupo Orgánico Hoteles Boutique",
  publisher: "Grupo Orgánico Hoteles Boutique",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.organicohotelboutiquetepoz.com",
  },
  openGraph: {
    title: "Hotel Boutique en Tepoztlán | Orgánico Hotel Boutique Tepoztlán",
    description:
      "Así se siente un Pueblo Mágico, Así se Siente Orgánico Tepoztlán. Confort, vistas a la montaña, chimenea y el mejor descanso. Consulta disponibilidad y reserva.",
    url: "https://www.organicohotelboutiquetepoz.com",
    siteName: "Orgánico Hotel Boutique Tepoztlán",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/images/hero-alberca.png",
        width: 1920,
        height: 1080,
        alt: "Orgánico Hotel Boutique Tepoztlán - Alberca con vista a los riscos del Tepozteco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Boutique en Tepoztlán | Orgánico Hotel Boutique Tepoztlán",
    description:
      "Conoce nuestras exclusivas habitaciones y suites en Tepoztlán. Confort, vistas a la montaña y el mejor descanso.",
    images: ["/images/hero-alberca.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "Orgánico Tepoztlán",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": "https://www.organicohotelboutiquetepoz.com/#hotel",
    name: HOTEL_INFO.name,
    description:
      "Hotel boutique exclusivo en Tepoztlán, Morelos. Rodeado de riscos y naturaleza, cuenta con alberca, suites de alta gama, Restaurante Infinito y experiencias místicas.",
    url: "https://www.organicohotelboutiquetepoz.com",
    telephone: HOTEL_INFO.phone,
    image: "https://www.organicohotelboutiquetepoz.com/images/hero-alberca.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "C. Netzahualcóyotl 47, Barrio de Santo Domingo",
      addressLocality: "Tepoztlán",
      addressRegion: "Morelos",
      postalCode: "62520",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "18.9866",
      longitude: "-99.0975",
    },
    starRating: {
      "@type": "Rating",
      ratingValue: "5",
    },
    petsAllowed: true,
    priceRange: "$$$$",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Alberca", value: true },
      { "@type": "LocationFeatureSpecification", name: "Restaurante Infinito", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wi-Fi de Alta Velocidad", value: true },
      { "@type": "LocationFeatureSpecification", name: "Estacionamiento", value: true },
      { "@type": "LocationFeatureSpecification", name: "Pet Friendly", value: true },
      { "@type": "LocationFeatureSpecification", name: "Cancha de Squash", value: true },
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "Grupo Orgánico Hoteles Boutique",
      url: HOTEL_INFO.grupoUrl,
    },
  };

  return (
    <html
      lang="es-MX"
      className={`${fontOutfit.variable} ${fontSans.variable} ${fontCinzel.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col w-full max-w-full overflow-x-hidden bg-[#16241C] text-[#F4F5F1] font-sans antialiased selection:bg-[#C5B49F] selection:text-[#16241C]">
        <ScrollObserver />
        <Navbar />
        <main className="flex-grow w-full max-w-full overflow-x-hidden">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <DiaDeMuertosPopup />
        <Analytics />
      </body>
    </html>
  );
}
