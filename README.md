# Orgánico Hotel Boutique Tepoztlán

Sitio web oficial de **Orgánico Hotel Boutique Tepoztlán**, perteneciente a la colección de **Grupo Orgánico Hoteles Boutique**.

Una experiencia digital boutique de alta gama diseñada con estética editorial, animaciones de scroll fluidas, tipografía refinada y galerías fotográficas interactivas.

---

## 🌿 Características Principales

- **Arquitectura Moderna:** Desarrollado con Next.js 15 (App Router), React 19, TypeScript y Tailwind CSS.
- **Identidad Visual Boutique:** Paleta de tonos orgánicos (`#16241C`, `#22362C`, `#C5B49F`), tipografías *Cormorant Garamond* y *Outfit*.
- **Galerías Fotográficas con Lightbox:**
  - **Restaurante Infinito:** Filtros por categoría (Comida, Restaurante, Bar, Cenas Románticas).
  - **Nuestros Espacios:** Alberca, Jardines, Restaurante, Casa Club, Salón Imperfecto, Asador, Squash y Recepción.
  - **Momentos:** Cinema Orgánico, Picnic Gourmet, Cenas Románticas, Rutas RZR/Cuatrimotos, Cabalgata y Hiking.
  - **Eventos Empresariales:** Galería fotográfica para retiros y eventos corporativos.
- **Animaciones de Scroll de Alto Rendimiento:**
  - Observador nativo (`IntersectionObserver`) sin librerías pesadas.
  - Efectos de fade, elevación suave (`translateY`) y escalonado progresivo (*stagger*).
  - Accesibilidad integrada con soporte para `prefers-reduced-motion`.
- **Reservaciones Boutique:**
  - Integración directa con WhatsApp Concierge con mensajes contextuales pre-redactados por cada espacio y habitación.
  - Formulario oficial de contacto interactivo conectado a API Route con validación.
- **SEO & Performance:** Metadatos completos por ruta, Schema.org estructurado tipo `Hotel`, OpenGraph, Twitter Cards, `sitemap.xml` y `robots.txt`.
- **Favicons y PWA:** Suite completa de favicons generados (ICO, PNGs 96px, Apple Touch Icon 180px, Web App Manifest 192px/512px).

---

## 🛠️ Tecnologías

- **Framework:** [Next.js 15](https://nextjs.org/)
- **UI & Lenguaje:** [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Iconografía:** [Lucide React](https://lucide.dev/)
- **Analíticas:** [@vercel/analytics](https://vercel.com/analytics)

---

## 🚀 Instalación y Desarrollo Local

1. **Clonar repositorio:**
   ```bash
   git clone https://github.com/MayitoApps/organico-hotel-boutique-tepoztlan.git
   cd organico-hotel-boutique-tepoztlan
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

4. **Compilar para producción:**
   ```bash
   npm run build
   npm run start
   ```

---

© Orgánico Hotel Boutique Tepoztlán — Grupo Orgánico Hoteles Boutique.
