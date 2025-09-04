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

        // Varianti trasparenti
        goldGlass: "rgba(255,213,79,0.2)",
        blueGlass: "rgba(0,207,255,0.15)",
        crimsonGlass: "rgba(255,0,79,0.2)",
        emeraldGlass: "rgba(46,204,113,0.2)",

        // Gradienti base
        gradientVelvet: "linear-gradient(135deg, #0e0e0e, #1c1c1c)",
        gradientGold: "linear-gradient(135deg, #FFD54F, #FFB300)",
        gradientBlue: "linear-gradient(135deg, #00CFFF, #0066FF)",
        gradientCrimson: "linear-gradient(135deg, #FF004F, #FF4F81)",
        gradientEmerald: "linear-gradient(135deg, #2ECC71, #00FFB2)",
      },
      boxShadow: {
        glowGold: "0 0 25px rgba(255,213,79,0.55)",
        glowBlue: "0 0 25px rgba(0,207,255,0.65)",
        glowCrimson: "0 0 30px rgba(255,0,79,0.65)",
        glowEmerald: "0 0 25px rgba(46,204,113,0.65)",
        innerGlass: "inset 0 0 20px rgba(255,255,255,0.05)",
      },
      backdropBlur: {
        xs: "2px",
        md: "12px",
        xl: "24px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        neonFlicker: "neonFlicker 2.5s infinite alternate",
        gradientShimmer: "gradientShimmer 6s linear infinite",
        breathe: "breathe 8s ease-in-out infinite",
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
        neonFlicker: {
          "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": { opacity: "1" },
          "20%, 24%, 55%": { opacity: "0.3" },
        },
        gradientShimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.85" },
          "50%": { transform: "scale(1.05)", opacity: "1" },
        },
      },
      backgroundSize: {
        "200%": "200% 200%",
        "300%": "300% 300%",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
      },
    },
  },
  plugins: [],
};
