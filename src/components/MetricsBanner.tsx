"use client";

import React from "react";
import { TrendingUp, Award, Layers, CheckCircle } from "lucide-react";

export default function MetricsBanner() {
  const metrics = [
    {
      value: "$48.5M+",
      label: "Direct Funding Secured",
      detail: "Across Federal, State & Philanthropic Portfolios",
      icon: TrendingUp,
    },
    {
      value: "89.4%",
      label: "Proposal Win Rate",
      detail: "vs. 22% National Peer Review Benchmark",
      icon: Award,
    },
    {
      value: "$14.2M+",
      label: "Nitany Grant Writing Wins",
      detail: "Achieved in direct collaboration with Lori",
      icon: Layers,
    },
    {
      value: "140+",
      label: "Competitive Grants Awarded",
      detail: "Zero compliance flags or audit disqualifications",
      icon: CheckCircle,
    },
  ];

  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="luxury-card rounded-2xl p-6 sm:p-10 border border-[#d4af37]/30 shadow-2xl relative overflow-hidden">
        {/* Subtle gold line accent at top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-70" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y md:divide-y-0 lg:divide-x divide-[#d4af37]/15">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex flex-col justify-between pt-6 md:pt-0 ${
                  index !== 0 ? "lg:pl-6" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                    {item.label}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight gold-gradient-text mb-2">
                  {item.value}
                </div>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
