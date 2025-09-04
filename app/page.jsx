import Hero from "../components/Hero";
import Bio from "../components/Bio";
import Discografia from "../components/Discografia";
import Merch from "../components/Merch";
import Booking from "../components/Booking";
import News from "../components/News";
import Player from "../components/Player"; // 👈 aggiunto
import Links from "../components/Links";
import Contatti from "../components/Contatti";

export default function Page() {
  return (
    <main className="scroll-smooth">
      {/* 🏠 Hero / Intro */}
      <section id="hero" className="relative overflow-hidden">
        <Hero />
      </section>

      {/* 🧾 Bio */}
      <section id="bio" className="py-20 relative overflow-hidden">
        <Bio />
      </section>

      {/* 💿 Discografia */}
      <section id="discografia" className="py-20 relative overflow-hidden">
        <Discografia />
      </section>

      {/* 🛒 Merch */}
      <section id="merch" className="py-20 relative overflow-hidden">
        <Merch />
      </section>

      {/* 📅 Booking */}
      <section id="booking" className="py-20 relative overflow-hidden">
        <Booking />
      </section>

      {/* 📰 News */}
      <section id="news" className="py-20 relative overflow-hidden">
        <News />
      </section>

      {/* 🎧 Player Spotify */}
      <section id="player" className="py-20 relative overflow-hidden">
        <Player />
      </section>

      {/* 🌐 Links */}
      <section id="links" className="py-20 relative overflow-hidden">
        <Links />
      </section>

      {/* 📩 Contatti */}
      <section id="contatti" className="py-20 relative overflow-hidden">
        <Contatti />
      </section>
    </main>
  );
}
