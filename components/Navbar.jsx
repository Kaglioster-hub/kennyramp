"use client";
export default function Navbar(){
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/65 backdrop-blur-md border-b border-white/10">
      <div className="container h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Kenny Ramp Logo" className="h-9 drop-shadow-glowBlue" />
          <span className="text-lg md:text-xl font-semibold tracking-wide">
            <span className="text-gold">KennyRamp</span>{" "}
            <span className="text-gray-300">H501Crew</span>
          </span>
        </div>
        <div className="hidden md:flex gap-6 text-gray-200 font-medium text-sm">
          <a href="#bio" className="hover:text-gold">Bio</a>
          <a href="#discografia" className="hover:text-gold">Discografia</a>
          <a href="#merch" className="hover:text-gold">Merch</a>
          <a href="#booking" className="hover:text-gold">Booking</a>
          <a href="#news" className="hover:text-gold">News</a>
          <a href="#links" className="hover:text-gold">Links</a>
          <a href="#contatti" className="hover:text-gold">Contatti</a>
        </div>
      </div>
    </nav>
  );
}
