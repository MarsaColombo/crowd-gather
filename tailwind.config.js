// tailwind.config.js
import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        political: {
          red: "#E53935",     // Rouge pour symboliser les partis de gauche
          blue: "#1565C0",    // Bleu pour symboliser les partis de droite
          green: "#2E7D32"    // Vert pour les partis écologistes
        },
        primary: {
          50: "#e3f2fd",
          100: "#bbdefb",
          200: "#90caf9",
          300: "#64b5f6",
          400: "#42a5f5",
          500: "#1976D2", // Couleur principale - bleu politique standard
          600: "#1565C0",
          700: "#0d47a1",
          800: "#0a3880",
          900: "#072a60",
          DEFAULT: "#1976D2",
          foreground: "#ffffff"
        },
        secondary: {
          50: "#ffebee",
          100: "#ffcdd2",
          200: "#ef9a9a",
          300: "#e57373",
          400: "#ef5350",
          500: "#D32F2F", // Rouge politique
          600: "#c62828",
          700: "#b71c1c",
          800: "#8e1515",
          900: "#5e0e0e",
          DEFAULT: "#D32F2F",
          foreground: "#ffffff"
        }
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif']
      },
      boxShadow: {
        'event-card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        "crowd-gather-theme": {
          extend: "light",
          colors: {
            background: "#f8f9fa",
            foreground: "#212121",
            primary: {
              50: "#e3f2fd",
              100: "#bbdefb",
              200: "#90caf9",
              300: "#64b5f6",
              400: "#42a5f5",
              500: "#1976D2", // Bleu politique
              600: "#1565C0",
              700: "#0d47a1",
              800: "#0a3880",
              900: "#072a60",
              DEFAULT: "#1976D2",
              foreground: "#ffffff"
            },
            secondary: {
              50: "#ffebee",
              100: "#ffcdd2",
              200: "#ef9a9a",
              300: "#e57373",
              400: "#ef5350",
              500: "#D32F2F", // Rouge politique
              600: "#c62828",
              700: "#b71c1c",
              800: "#8e1515",
              900: "#5e0e0e",
              DEFAULT: "#D32F2F",
              foreground: "#ffffff"
            },
            focus: "#1565C0"
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px"
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px"
            }
          }
        }
      }
    })
  ]
};