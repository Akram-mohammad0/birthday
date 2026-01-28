/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F172A", // Midnight Blue
          light: "#1E293B",
          dark: "#020617",
        },
        secondary: {
          DEFAULT: "#C8A75E", // Champagne Gold
          light: "#E6D29F",
          dark: "#997A3D",
        },
        accent: {
          DEFAULT: "#7DD3FC", // Sky Blue Accent
          light: "#E0F2FE",
        },
        background: {
          DEFAULT: "#020617", // Dark Midnight
          light: "#0F172A",
        },
        surface: {
          DEFAULT: "#1E293B",
          light: "#334155",
        },
        text: {
          DEFAULT: "#F1F5F9",
          light: "#94A3B8",
          dark: "#0F172A",
        }
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Outfit", "sans-serif"],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: 1, scale: 1 },
          '50%': { opacity: 0.5, scale: 1.1 },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%)',
      }
    },
  },
  plugins: [],
};


