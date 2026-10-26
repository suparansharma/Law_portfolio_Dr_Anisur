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
        legal: {
          950: "#06090f",
          900: "#0b1120",
          850: "#10182b",
          800: "#162035",
          700: "#1e293b",
          600: "#334155",
        },
        gold: {
          50: "#fdfbf7",
          100: "#fbf6ed",
          200: "#f5e8d0",
          300: "#edd4a8",
          400: "#dfb672",
          500: "#cda043", // primary classic gold
          600: "#b58731",
          700: "#8e6524",
          800: "#6e4d1f",
          900: "#543b1c",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "'Times New Roman'", "serif"],
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
      },
      backgroundImage: {
        'legal-gradient': "radial-gradient(ellipse at top, #162035 0%, #0b1120 50%, #06090f 100%)",
        'gold-shimmer': "linear-gradient(135deg, #dfb672 0%, #edd4a8 50%, #b58731 100%)",
        'card-glow': "radial-gradient(circle at 50% 0%, rgba(205, 160, 67, 0.12), transparent 70%)",
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      }
    },
  },
  plugins: [],
};
export default config;
