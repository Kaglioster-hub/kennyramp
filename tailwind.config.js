/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: "#FFD54F",
        velvet: "#0e0e0e",
        neonblue: "#00CFFF",
        graphite: "#1c1c1c",
        crimson: "#FF004F",
        emerald: "#2ECC71",
      },
      boxShadow: {
        glowGold: "0 0 20px rgba(255,213,79,0.45)",
        glowBlue: "0 0 20px rgba(0,207,255,0.55)",
        glowCrimson: "0 0 25px rgba(255,0,79,0.55)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { textShadow: "0 0 10px rgba(255,213,79,0.6)" },
          "50%": { textShadow: "0 0 25px rgba(255,213,79,1)" },
        },
      },
    },
  },
  plugins: [],
};
