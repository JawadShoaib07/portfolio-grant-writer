"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MetricsBanner from "@/components/MetricsBanner";
import NitanyExperience from "@/components/NitanyExperience";
import Framework from "@/components/Framework";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import GrantCalculator from "@/components/GrantCalculator";
import ServicesPricing from "@/components/ServicesPricing";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";

export default function Home() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const handleOpenConsultation = () => {
    setIsConsultationModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationModalOpen(false);
  };

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#07080b] text-[#f0f2f7] flex flex-col selection:bg-[#d4af37]/30 selection:text-[#faeed1]">
      {/* Navigation */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* Quantitative Metrics Banner */}
        <MetricsBanner />

        {/* Dedicated Nitany Grant Writing & Lori (Owner) Spotlight */}
        <NitanyExperience />

        {/* 4-Pillar Methodology & Framework */}
        <Framework />

        {/* Interactive Case Studies & Portfolio */}
        <PortfolioShowcase />

        {/* Interactive Grant Readiness & Capital Estimator */}
        <GrantCalculator onOpenConsultation={handleOpenConsultation} />

        {/* Retainer Models & Services */}
        <ServicesPricing onOpenConsultation={handleOpenConsultation} />

        {/* Client Endorsements & Peer Reviews */}
        <Testimonials />

        {/* Institutional FAQs */}
        <FaqSection />

        {/* Strategic Contact & RFP Intake Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={handleCloseConsultation}
      />
    </div>
  );
}
