"use client";

import { Benefits } from "./landing/Benefits";
import { CompaniesCarousel } from "./landing/CompaniesCarousel";
import { Footer } from "./landing/Footer";
import { HeroSection } from "./landing/HeroSection";
import { LandingStyles } from "./landing/LandingStyles";
import { Navbar } from "./landing/Navbar";
import { QuienesSomos } from "./landing/QuienesSomos";
import { RedesSociales } from "./landing/RedesSociales";
import { Testimonials } from "./landing/Testimonials";
import { FloatingWhatsApp } from "./landing/FloatingWhatsApp";

export default function BiantLanding() {
  return (
    <>
      <LandingStyles />

      <div className="text-[#4C4C4C] overflow-x-hidden font-sans">
        <Navbar />
        <HeroSection />
        <Benefits />
        <RedesSociales />
        <CompaniesCarousel />
        <QuienesSomos />
        <Testimonials />
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
}
