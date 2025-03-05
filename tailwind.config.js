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
        primary: {
          50: "#e3f2fd",
          100: "#bbdefb",
          200: "#90caf9",
          300: "#64b5f6",
          400: "#42a5f5",
          500: "#2196F3", // Primary blue
          600: "#1e88e5",
          700: "#1976d2",
          800: "#1565c0",
          900: "#0d47a1",
          DEFAULT: "#2196F3",
          foreground: "#ffffff"
        },
        secondary: {
          50: "#fce4ec",
          100: "#f8bbd0",
          200: "#f48fb1",
          300: "#f06292",
          400: "#ec407a",
          500: "#e91e63", // Secondary pink
          600: "#d81b60",
          700: "#c2185b",
          800: "#ad1457",
          900: "#880e4f",
          DEFAULT: "#e91e63",
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
        "light": {
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
              500: "#2196F3", // Primary blue
              600: "#1e88e5",
              700: "#1976d2",
              800: "#1565c0",
              900: "#0d47a1",
              DEFAULT: "#2196F3",
              foreground: "#ffffff"
            },
            secondary: {
              50: "#fce4ec",
              100: "#f8bbd0",
              200: "#f48fb1",
              300: "#f06292",
              400: "#ec407a",
              500: "#e91e63", // Secondary pink
              600: "#d81b60",
              700: "#c2185b",
              800: "#ad1457",
              900: "#880e4f",
              DEFAULT: "#e91e63",
              foreground: "#ffffff"
            },
            focus: "#2196F3"
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