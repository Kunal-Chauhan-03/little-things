import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        espresso: "#211814",
        coffee: "#6F4E37",
        blush: "#E8A0B5",
        cream: "#F7EDE3",
        champagne: "#D6B27C"
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        hand: ["var(--font-caveat)", "cursive"],
        body: ["var(--font-work-sans)", "sans-serif"]
      },
      backgroundImage: {
        grain: "url('/illustrations/grain.svg')"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-in": "fade-in 1.2s ease forwards"
      }
    }
  },
  plugins: []
};

export default config;
