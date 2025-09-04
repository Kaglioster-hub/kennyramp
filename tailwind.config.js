/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // 🎨 Palette
      colors: {
        gold: "#FFD54F",
        velvet: "#0e0e0e",
        neonblue: "#00CFFF",
        graphite: "#1c1c1c",
        crimson: "#FF004F",
        emerald: "#2ECC71",

        // Varianti trasparenti / glass
        goldGlass: "rgba(255,213,79,0.2)",
        blueGlass: "rgba(0,207,255,0.15)",
        crimsonGlass: "rgba(255,0,79,0.2)",
        emeraldGlass: "rgba(46,204,113,0.2)",
        darkGlass: "rgba(15,15,15,0.7)",
        whiteGlass: "rgba(255,255,255,0.08)",

        // Gradienti potenti
        gradientVelvet: "linear-gradient(135deg, #0e0e0e, #1c1c1c)",
        gradientGold: "linear-gradient(135deg, #FFD54F, #FFB300)",
        gradientBlue: "linear-gradient(135deg, #00CFFF, #0066FF)",
        gradientCrimson: "linear-gradient(135deg, #FF004F, #FF4F81)",
        gradientEmerald: "linear-gradient(135deg, #2ECC71, #00FFB2)",
        gradientNeon: "linear-gradient(90deg, #FF004F, #FFD54F, #00CFFF, #2ECC71)",
      },

      // 🌟 Ombre e glow
      boxShadow: {
        glowGold: "0 0 25px rgba(255,213,79,0.55)",
        glowBlue: "0 0 25px rgba(0,207,255,0.65)",
        glowCrimson: "0 0 30px rgba(255,0,79,0.65)",
        glowEmerald: "0 0 25px rgba(46,204,113,0.65)",
        glowNeon: "0 0 40px rgba(0,255,255,0.75)",
        deepInner: "inset 0 0 40px rgba(0,0,0,0.6)",
        innerGlass: "inset 0 0 20px rgba(255,255,255,0.05)",
      },

      // 🔲 Blur
      backdropBlur: {
        xs: "2px",
        sm: "6px",
        md: "12px",
        lg: "18px",
        xl: "24px",
        "2xl": "40px",
      },

      // 🎞️ Animazioni
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        neonFlicker: "neonFlicker 2.5s infinite alternate",
        gradientShimmer: "gradientShimmer 6s linear infinite",
        gradientDiagonal: "gradientDiagonal 8s linear infinite",
        breathe: "breathe 8s ease-in-out infinite",
        fadeIn: "fadeIn 0.5s ease-out",
        slideInRight: "slideInRight 0.4s ease-out",
        slideUp: "slideUp 0.5s ease-out",
        flip: "flip 1.2s ease-in-out infinite",
        tilt: "tilt 10s ease-in-out infinite",
        blurPulse: "blurPulse 4s ease-in-out infinite",
        dissolve: "dissolve 1s ease-in forwards",
      },

      // ⏺️ Keyframes
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { textShadow: "0 0 10px rgba(255,213,79,0.6)" },
          "50%": { textShadow: "0 0 30px rgba(255,213,79,1)" },
        },
        neonFlicker: {
          "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": { opacity: "1" },
          "20%, 24%, 55%": { opacity: "0.2" },
        },
        gradientShimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        gradientDiagonal: {
          "0%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
          "100%": { backgroundPosition: "0% 0%" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.85" },
          "50%": { transform: "scale(1.08)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(50%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        flip: {
          "0%": { transform: "rotateY(0)" },
          "50%": { transform: "rotateY(180deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        tilt: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        blurPulse: {
          "0%, 100%": { filter: "blur(0px)" },
          "50%": { filter: "blur(4px)" },
        },
        dissolve: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },

      // 📏 Extra utilities
      backgroundSize: {
        "200%": "200% 200%",
        "300%": "300% 300%",
        "400%": "400% 400%",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
        "6xl": "4rem",
      },
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
    },
  },
  plugins: [],
};
