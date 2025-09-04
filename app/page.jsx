import Hero from "../components/Hero";
import Bio from "../components/Bio";
import Discografia from "../components/Discografia";
import Merch from "../components/Merch";
import Booking from "../components/Booking";
import News from "../components/News";
import Links from "../components/Links";
import Contatti from "../components/Contatti";

export default function Page() {
  return (
    <main className="scroll-smooth">
      {/* Hero / Intro */}
      <section id="hero">
        <Hero />
      </section>

      {/* Bio */}
      <section id="bio" className="py-16">
        <Bio />
      </section>

      {/* Discografia */}
      <section id="discografia" className="py-16">
        <Discografia />
      </section>

      {/* Merch */}
      <section id="merch" className="py-16">
        <Merch />
      </section>

      {/* Booking */}
      <section id="booking" className="py-16">
        <Booking />
      </section>

      {/* News */}
      <section id="news" className="py-16">
        <News />
      </section>

      {/* Links */}
      <section id="links" className="py-16">
        <Links />
      </section>

      {/* Contatti */}
      <section id="contatti" className="py-16">
        <Contatti />
      </section>
    </main>
  );
}
