"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Sparkles, ArrowRight, Building2 } from "lucide-react";

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
    { name: "Nitany Experience", href: "#nitany-experience", special: true },
    { name: "Track Record", href: "#portfolio" },
    { name: "Grant Calculator", href: "#calculator" },
    { name: "Methodology", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-2.5 bg-[#07080b]/95 backdrop-blur-xl border-b border-[#d4af37]/20 shadow-[0_8px_30px_rgba(0,0,0,0.85)]"
          : "py-4 sm:py-5 bg-gradient-to-b from-[#07080b]/95 via-[#07080b]/60 to-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          {/* Logo / Monogram (Left) */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0 transition-transform"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#d4af37]/60 flex items-center justify-center bg-gradient-to-br from-[#1d202d] via-[#12141c] to-[#0a0b0f] group-hover:border-[#d4af37] transition-all shadow-[0_0_12px_rgba(212,175,55,0.2)]">
              <span className="font-serif font-bold text-base sm:text-lg gold-gradient-text">✦</span>
            </div>

            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg font-semibold tracking-wide text-white group-hover:text-[#faeed1] transition-colors leading-tight">
                VALERIE STERLING
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] text-[#d4af37] uppercase font-sans font-medium">
                Principal Grant Strategist
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Compact & responsive, strictly fits desktop) */}
          <nav className="hidden xl:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 ${
                  link.special
                    ? "text-[#faeed1] bg-[#d4af37]/15 border border-[#d4af37]/30 hover:bg-[#d4af37]/25 font-semibold"
                    : "text-neutral-300 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Condensed Nav for Mid-Sized Displays (lg screens ~ 1024px-1279px) */}
          <nav className="hidden lg:flex xl:hidden items-center gap-1 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <a
              href="#nitany-experience"
              className="text-[11px] font-semibold text-[#faeed1] bg-[#d4af37]/15 border border-[#d4af37]/30 px-2.5 py-1 rounded-full"
            >
              Nitany (Lori)
            </a>
            <a href="#portfolio" className="text-[11px] text-neutral-300 hover:text-white px-2 py-1">
              Track Record
            </a>
            <a href="#calculator" className="text-[11px] text-neutral-300 hover:text-white px-2 py-1">
              Calculator
            </a>
            <a href="#services" className="text-[11px] text-neutral-300 hover:text-white px-2 py-1">
              Services
            </a>
          </nav>

          {/* Action Button (Right) & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="gold-button px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs uppercase tracking-wider font-bold flex items-center gap-1.5 sm:gap-2 cursor-pointer shadow-md hover:shadow-lg transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-neutral-950 shrink-0" />
              <span className="whitespace-nowrap">Book Consultation</span>
            </button>

            {/* Mobile Hamburger (Visible on lg and below) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-300 hover:text-white rounded-lg bg-white/5 border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#d4af37]" /> : <Menu className="w-5 h-5 text-[#d4af37]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0b0f]/98 border-b border-[#d4af37]/25 px-5 py-5 backdrop-blur-2xl shadow-2xl animate-in slide-in-from-top">
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium py-2.5 px-3.5 rounded-xl border-b border-white/5 flex items-center justify-between ${
                  link.special
                    ? "text-[#faeed1] bg-[#d4af37]/15 font-semibold"
                    : "text-neutral-200 hover:text-[#faeed1]"
                }`}
              >
                <span>{link.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#d4af37]" />
              </a>
            ))}

            <div className="pt-3 mt-1 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="gold-button w-full py-3 rounded-xl text-center text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-neutral-900" />
                <span>Book VIP Consultation</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
