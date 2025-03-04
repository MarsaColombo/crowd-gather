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
          red: "#EE0F0F",
          blue: "#1E40AF",
          green: "#166534"
        }
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
            background: "#f4f4f5",
            foreground: "#18181b",
            primary: {
              50: "#f0f9ff",
              100: "#e0f2fe",
              200: "#bae6fd",
              300: "#7dd3fc",
              400: "#38bdf8",
              500: "#0ea5e9",
              600: "#0284c7",
              700: "#0369a1",
              800: "#075985",
              900: "#0c4a6e",
              DEFAULT: "#0ea5e9",
              foreground: "#ffffff"
            },
            focus: "#0284c7"
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
