/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        onyx: "#050505",
        chrome: "#e0e0e0",
        "signal-white": "#ffffff",
        "industrial-gold": "#FFBB00",
        "glass-border": "rgba(255, 255, 255, 0.1)",
        "glass-bg": "rgba(255, 255, 255, 0.03)",
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        sans: ["var(--font-geist-sans)", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "vibration": "vibration 0.05s infinite",
      },
      keyframes: {
        vibration: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(2px)" },
        },
      },
    },
  },
  plugins: [],
};
