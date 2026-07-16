/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        ink: {
          950: "#02040a",
          900: "#05070f",
          850: "#080b16",
          800: "#0b0f1c",
          700: "#111528",
          600: "#1b2038",
        },
        paper: {
          50: "#fbfbfd",
          100: "#f4f5f9",
          200: "#e9ebf3",
        },
        accent: {
          cyan: "#22d3ee",
          blue: "#6366f1",
          violet: "#a78bfa",
          emerald: "#34d399",
        },
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)",
        "grid-light":
          "linear-gradient(to right, rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.05) 1px, transparent 1px)",
        "aurora":
          "radial-gradient(45% 45% at 20% 20%, rgba(34,211,238,0.25) 0%, transparent 60%), radial-gradient(40% 40% at 80% 15%, rgba(167,139,250,0.22) 0%, transparent 60%), radial-gradient(50% 50% at 50% 100%, rgba(99,102,241,0.18) 0%, transparent 60%)",
        "brand-gradient": "linear-gradient(115deg, #22d3ee 0%, #6366f1 55%, #a78bfa 100%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(148,163,184,0.08), 0 8px 30px -8px rgba(34,211,238,0.25)",
        "glow-lg": "0 20px 60px -15px rgba(99,102,241,0.35)",
        card: "0 1px 0 rgba(255,255,255,0.06) inset, 0 20px 40px -20px rgba(0,0,0,0.6)",
      },
      screens: {
        xs: "375px",
        sm: "425px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 14s linear infinite",
        blink: "blink 1s step-end infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
}
