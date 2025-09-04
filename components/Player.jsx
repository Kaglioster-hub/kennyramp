"use client";
import { useState } from "react";
import { X } from "lucide-react";

export default function Player() {
  const [showPopup, setShowPopup] = useState(true);
  const [active, setActive] = useState(false);

  return (
    <>
      {/* 🔹 Popup iniziale */}
      {showPopup && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-xl">
          <div className="bg-gradient-to-br from-graphite to-black text-white rounded-2xl p-8 max-w-md text-center shadow-glowBlue animate-fadeIn">
            <h3 className="text-xl font-bold mb-4 text-gold drop-shadow-glowGold">
              Vuoi ascoltare la playlist <br />
              <span className="text-neonblue">This Is Kenny Ramp</span>?
            </h3>
            <p className="text-gray-300 mb-6 text-sm">
              Riproduzione diretta da Spotify, aggiornata con tutte le tracce ufficiali.
            </p>
            <div className="flex justify-center gap-4">
              <button
                className="px-5 py-2 bg-gold text-black font-bold rounded-lg shadow-glowGold hover:scale-105 transition"
                onClick={() => {
                  setActive(true);
                  setShowPopup(false);
                }}
              >
                🎧 Sì
              </button>
              <button
                className="px-5 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
                onClick={() => {
                  setActive(false);
                  setShowPopup(false);
                }}
              >
                🚫 No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 🔹 Tray compatta */}
      {!showPopup && !active && (
        <div className="fixed bottom-4 right-4 z-50 bg-black/80 backdrop-blur-md rounded-xl shadow-glowBlue px-4 py-2 flex items-center gap-3 animate-fadeIn">
          <span className="text-gray-300 text-sm">Player disponibile</span>
          <button
            className="px-3 py-1 bg-gold text-black font-semibold rounded-lg hover:scale-105 transition"
            onClick={() => setActive(true)}
          >
            ▶️ Apri Player
          </button>
        </div>
      )}

      {/* 🔹 Player Spotify embed */}
      {active && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-t border-white/10 animate-slideUp">
          <div className="flex justify-between items-center px-4 py-2">
            <span className="text-gold font-semibold">🎶 Playlist ufficiale</span>
            <button
              className="text-gray-300 hover:text-gold transition"
              onClick={() => setActive(false)}
            >
              <X size={22} />
            </button>
          </div>
          <iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO2qCrCQ?utm_source=generator"
            width="100%"
            height="200"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-t-xl shadow-glowBlue"
          ></iframe>
          {/* ℹ️ Messaggio + link esterno */}
          <div className="px-4 py-3 text-center text-gray-400 text-xs bg-black/70 border-t border-white/5">
            ℹ️ Con Spotify Free ascolti solo le anteprime (30s). 
            <a
              href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO2qCrCQ"
              target="_blank"
              className="ml-2 text-neonblue hover:underline font-semibold"
            >
              Apri su Spotify →
            </a>
          </div>
        </div>
      )}
    </>
  );
}
