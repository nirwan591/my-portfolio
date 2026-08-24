/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
        sans: ["'Inter'", "sans-serif"],
      },
      colors: {
        bg: {
          primary: "#080c14",
          secondary: "#0f1520",
          card: "#141c2e",
          hover: "#1a2440",
        },
        accent: {
          blue: "#60a5fa",
          cyan: "#22d3ee",
          purple: "#a78bfa",
          green: "#4ade80",
        },
        border: {
          dim: "rgba(255,255,255,0.06)",
          mid: "rgba(255,255,255,0.12)",
          accent: "rgba(96,165,250,0.3)",
        },
      },
      animation: {
        blink: "blink 1.1s step-end infinite",
        float: "float 6s ease-in-out infinite",
        "slide-up": "slideUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        blink: { "50%": { opacity: 0 } },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        slideUp: {
          from: { opacity: 0, transform: "translateY(24px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        glowPulse: {
          "0%,100%": { opacity: 0.4 },
          "50%": { opacity: 0.8 },
        },
      },
    },
  },
  plugins: [],
};
