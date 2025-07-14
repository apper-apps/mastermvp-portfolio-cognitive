import React from "react";
import HeroSection from "@/components/organisms/HeroSection";
import CapabilitiesSection from "@/components/organisms/CapabilitiesSection";
import ProcessSection from "@/components/organisms/ProcessSection";
import TestimonialsSection from "@/components/organisms/TestimonialsSection";
import CTASection from "@/components/organisms/CTASection";

const HomePage = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <CapabilitiesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;