/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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

        // Dark mode colors (migraineSafe)
        darkBg: "#121212",
        darkSurface: "#1E1E1E",
        darkText: "#E0E0E0",

        // Light mode colors
        lightBg: "#ffffff",
        lightSurface: "#ecedd3",
        lightText: "#111827",
      },
      fontFamily: {
        // Custom fonts to use app-wide
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        logo: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',    // 12px
        sm: '0.875rem',   // 14px
        base: '1rem',     // 16px
        lg: '1.125rem',   // 18px
        xl: '1.25rem',    // 20px
        xxl: '1.5rem',  // 24px
      },
      borderRadius: {
        sm: '6px',
        DEFAULT: '12px',
        lg: '16px',
        full: '9999px',
      },
      boxShadow: {
        subtle: '0 1px 3px rgba(0,0,0,0.1)',
        card: '0 4px 6px rgba(0,0,0,0.1)',
        strong: '0 8px 10px rgba(0,0,0,0.15)',
      },
      spacing: {
        // Custom spacing values (padding/margin)
        18: '4.5rem',
        22: '5.5rem',
      }
    },
  },
  plugins: [],
};
