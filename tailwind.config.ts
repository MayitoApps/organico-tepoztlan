import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#16241C",
        surface: {
          DEFAULT: "#22362C",
          muted: "#1B2C23",
          elevated: "#273D32",
        },
        gold: {
          DEFAULT: "#C5B49F",
          light: "#E2D8CC",
          dark: "#A4927B",
        },
        sage: {
          DEFAULT: "#A1B3A7",
          light: "#C2D0C7",
          dark: "#7B8E82",
        },
        cream: {
          DEFAULT: "#F4F5F1",
          pure: "#FFFFFF",
          muted: "#E0E2DC",
        },
        terracotta: "#C37250",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
