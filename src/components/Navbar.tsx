"use client";

import React, { useState, useEffect } from "react";
import { Award, Menu, X, ArrowUpRight, Sparkles, PhoneCall } from "lucide-react";

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Nitany Experience", href: "#nitany-experience" },
    { name: "Track Record", href: "#portfolio" },
    { name: "Grant Calculator", href: "#calculator" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07080b]/90 backdrop-blur-md border-b border-[#d4af37]/20 py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Monogram */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-[#d4af37]/60 flex items-center justify-center bg-gradient-to-br from-[#1d202d] to-[#0a0b0f] group-hover:border-[#d4af37] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <span className="font-serif font-bold text-lg gold-gradient-text">✦</span>
          </div>
          <div>
            <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wide text-white block leading-tight group-hover:text-[#faeed1] transition-colors">
              VALERIE STERLING
            </span>
            <span className="text-[10px] tracking-[0.22em] text-[#d4af37] uppercase font-sans font-medium">
              Principal Grant Strategist
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-300 hover:text-[#faeed1] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#d4af37] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="gold-button px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
            <span>Book Consultation</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-neutral-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#d4af37]" /> : <Menu className="w-6 h-6 text-[#d4af37]" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0b0f]/98 border-b border-[#d4af37]/20 px-6 py-6 backdrop-blur-xl animate-in slide-in-from-top">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-neutral-200 hover:text-[#faeed1] py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="gold-button w-full py-3 rounded-xl text-center text-xs uppercase tracking-wider font-bold mt-2 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-neutral-900" />
              <span>Book Strategy Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
