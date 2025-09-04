"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#bio", label: "Bio" },
    { href: "#discografia", label: "Discografia" },
    { href: "#merch", label: "Merch" },
    { href: "#booking", label: "Booking" },
    { href: "#news", label: "News" },
    { href: "#links", label: "Links" },
    { href: "#contatti", label: "Contatti" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/65 backdrop-blur-md border-b border-white/10">
      <nav className="container h-16 flex items-center justify-between">
        {/* Logo + Brand */}
        <a href="#hero" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Kenny Ramp Logo"
            className="h-9 drop-shadow-glowBlue hover:scale-105 transition-transform"
          />
          <span className="text-lg md:text-xl font-semibold tracking-wide">
            <span className="text-gold">KennyRamp</span>{" "}
            <span className="text-gray-300">H501Crew</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-200 font-medium text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-gold hover:drop-shadow-glowGold transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-200 hover:text-gold transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Drawer Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black/90 backdrop-blur-xl border-l border-white/10 z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0 animate-slideInRight" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-white/10">
          <span className="text-gold font-bold text-lg">Menu</span>
          <button
            className="text-gray-200 hover:text-gold transition"
            onClick={() => setIsOpen(false)}
            aria-label="Chiudi menu"
          >
            <X size={26} />
          </button>
        </div>

        <div className="flex flex-col p-6 gap-6 text-gray-200 font-medium text-base">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-gold hover:drop-shadow-glowGold transition"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
