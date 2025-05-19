/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        // Shared across all themes
        mainGreen: "#4CAF50",
        mainGray: "#A0A0A0",
        accent: "#A5D6A7",
        accent2: "#2d6a4f",

        // Theme-specific groups
        migraineSafe: {
          bg: "#121212",
          surface: "#1E1E1E",
          text: "#E0E0E0",
        },
        light: {
          bg: "#ffffff",
          surface: "#ecedd3",
          text: "#111827",
        },
      }
    },
  },
  plugins: [],
};
