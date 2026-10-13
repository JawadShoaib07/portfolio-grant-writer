"use client";

import React from "react";
import { Sparkles, ArrowUp, ShieldCheck, Award } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050608] border-t border-[#d4af37]/20 pt-16 pb-12 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#d4af37]/60 flex items-center justify-center bg-gradient-to-br from-[#1d202d] to-[#0a0b0f]">
                <span className="font-serif font-bold text-lg gold-gradient-text">✦</span>
              </div>
              <div>
                <span className="font-serif text-xl font-medium tracking-wide text-white block">
                  VALERIE STERLING
                </span>
                <span className="text-[10px] tracking-[0.22em] text-[#d4af37] uppercase font-sans">
                  Principal Grant Strategist
                </span>
              </div>
            </div>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Architecting transformative multimillion-dollar grant awards for elite institutions, universities, and healthcare networks. Proud past tenure with founder <strong className="text-white">Lori</strong> at <strong className="text-[#faeed1]">Nitany Grant Writing</strong>.
            </p>

            <div className="flex items-center gap-2 pt-2 text-[#d4af37] text-[11px]">
              <Award className="w-4 h-4" />
              <span>$48.5M+ Cumulative Secured • 89.4% Win Rate</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-wider text-white font-medium mb-4">
              Explore Portfolio
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#about" className="hover:text-[#faeed1] transition-colors">
                  Methodology & Framework
                </a>
              </li>
              <li>
                <a href="#nitany-experience" className="hover:text-[#faeed1] transition-colors">
                  Nitany Grant Writing (Lori)
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#faeed1] transition-colors">
                  Funded Grant Blueprints
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#faeed1] transition-colors">
                  Grant Readiness Calculator
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#faeed1] transition-colors">
                  Bespoke Retainer Models
                </a>
              </li>
            </ul>
          </div>

          {/* Credentials */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-wider text-white font-medium mb-4">
              Standards & Codes
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>GPA Code of Ethics</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>2 CFR 200 Uniform Guidance</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>SAM.gov & Grants.gov Certified</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Zero Contingency Commission</span>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-wider text-white font-medium mb-4">
              Advisory Office
            </h4>
            <p className="text-neutral-400 text-xs mb-2">
              Washington, D.C. & National Practice
            </p>
            <p className="text-white text-xs font-mono mb-2">
              inquiries@sterlinggrantstrategy.com
            </p>
            <p className="text-neutral-400 text-xs">
              +1 (202) 555-0189
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-400 text-[11px] text-center sm:text-left">
            © 2026 Valerie Sterling & Aura Grant Advisory. All rights reserved. Special acknowledgment to Lori, Owner of Nitany Grant Writing.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-[#d4af37] hover:text-[#faeed1] transition-colors cursor-pointer group"
          >
            <span>Return to Top</span>
            <div className="w-6 h-6 rounded-full border border-[#d4af37]/40 flex items-center justify-center group-hover:border-[#d4af37]">
              <ArrowUp className="w-3 h-3" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
