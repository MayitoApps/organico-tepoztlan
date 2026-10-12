import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
      },
      {
        protocol: "https",
        hostname: "static1.squarespace.com",
      },
    ],
  },
  async redirects() {
    return [
      // SEO 301 Redirect for old Squarespace /spa route to external spa or anchor
      {
        source: "/spa",
        destination: "https://www.origencentroholisticoyspa.com/",
        permanent: true,
      },
      // Clean redirect for old cart or empty squarespace pages
      {
        source: "/cart",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
