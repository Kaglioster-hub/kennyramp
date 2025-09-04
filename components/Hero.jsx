"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/bg/kenny1.jpg", "/bg/kenny2.jpg", "/bg/kenny3.jpg"];

export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % images.length), 8000);
    return () => clearInterval(t);
  }, []);

  return (
    <header className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background slideshow */}
      <AnimatePresence>
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          style={{
            backgroundImage: `url(${images[i]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* Overlay vellutato */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f]/95 via-[#0f0f0f]/90 to-[#0f0f0f]/95" />

      {/* Contenuto */}
      <div className="relative z-10 container text-center flex flex-col items-center gap-6 px-6">
        {/* Avatar centrale */}
        <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-[360px] lg:h-[360px] drop-shadow-2xl">
          <img
            src="/avatar.png"
            alt="Kenny Ramp Avatar"
            className="object-contain rounded-full border-4 border-gold shadow-glowGold"
          />
        </div>

        {/* Titolo */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-gold tracking-wide drop-shadow-lg text-glow">
          Kenny Ramp
        </h1>

        {/* Sottotitolo */}
        <p className="text-base md:text-xl text-gray-300/90 italic leading-relaxed max-w-3xl">
          Hip-hop • Urban Tech • Lo-fi • Chill • Rap
        </p>

        {/* Social icons in SVG inline */}
        <div className="flex gap-6 mt-4">
          {/* Spotify */}
          <a
            href="https://open.spotify.com/intl-it/artist/49LflvfRzQAxMF7UDFwmCu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gold transition transform hover:scale-110"
            aria-label="Spotify"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              fill="currentColor"
              className="w-9 h-9"
            >
              <path d="M248 8C111 8 0 119 0 256s111 248 248 248 
              248-111 248-248S385 8 248 8zm100.7 365.8c-4.2 
              6.9-13.2 9-20.1 4.8-55.3-34.3-124.9-42-207.5-23.4-7.9 
              1.8-15.9-3.3-17.7-11.2-1.8-7.9 3.3-15.9 
              11.2-17.7 89.4-20.1 166.3-11.4 229.2 
              26.2 6.9 4.1 9 13.1 4.9 20.1zm28.6-63.4c-5.3 
              8.4-16.6 11-25 5.7-63.2-39.1-159.8-50.6-234.6-27.8-9.5 
              2.8-19.5-2.6-22.4-12.1-2.8-9.5 
              2.6-19.5 12.1-22.4 84.2-25 191.4-12.1 
              264.1 32.6 8.4 5.3 11 16.6 5.8 25zm2.3-65.2c-75.2-45-199.6-49.2-272.7-27.1-11 
              3.3-22.7-3-26-14-3.3-11 3-22.7 14-26 
              81.2-24.6 218.9-19.9 304.7 31.4 10.1 
              6 13.4 19.2 7.4 29.3-6 10.1-19.2 
              13.4-29.4 7.4z" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/channel/UCmYb2ejLgKTp9ypVJX_-Gyw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gold transition transform hover:scale-110"
            aria-label="YouTube"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
              className="w-9 h-9"
            >
              <path d="M549.655 124.083c-6.281-23.65-24.79-42.148-48.433-48.433C465.1 
              64 288 64 288 64s-177.1 0-213.222 
              11.65c-23.65 6.285-42.152 24.783-48.433 
              48.433C16.695 160.204 16.695 256 
              16.695 256s0 95.796 9.65 131.917c6.281 
              23.65 24.783 42.148 48.433 48.433C110.9 
              448 288 448 288 448s177.1 0 213.222-11.65c23.643-6.285 
              42.152-24.783 48.433-48.433C559.305 
              351.796 559.305 256 559.305 256s0-95.796-9.65-131.917zM232 
              338.5v-165l142 82.5-142 82.5z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/kennyramp.official"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gold transition transform hover:scale-110"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="currentColor"
              className="w-9 h-9"
            >
              <path d="M224.1 141c-63.6 0-114.9 
              51.3-114.9 114.9s51.3 114.9 114.9 
              114.9S339 319.5 339 255.9 287.7 141 224.1 
              141zm146.4-76.1c0 14.9-12 26.9-26.9 
              26.9s-26.9-12-26.9-26.9 12-26.9 
              26.9-26.9 26.9 12 26.9 26.9zm76.1 
              27.2c-1.7-35.7-9.9-67.3-36.2-93.6C384.3 
              2.9 352 .7 316.6 0 280.9-.7 167.1-.7 
              131.4 0 95.7.7 63.7 2.9 37.6 29.5 
              11.3 55.8 3.1 87.4 1.4 123.1.7 159.4.7 
              224.1c0 64.7.6 100.8 1.4 136.5.7 
              35.7 9.9 67.3 36.2 93.6 26.3 26.3 58.1 
              34.4 93.6 36.2 36.5 2.3 72.4 2.8 
              108.4 2.8 64.7 0 100.8-.6 
              136.5-1.4 35.7-.7 67.3-9.9 
              93.6-36.2 26.3-26.3 34.5-58 
              36.2-93.6.8-36.1 1.3-72.7 
              1.3-108.8s-.5-72.7-1.3-108.8z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
