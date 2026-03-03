import { useEffect } from "react";
import { initGsapAnimations } from "@/lib/gsap-animations";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Products } from "@/components/sections/Products";
import { Workshops } from "@/components/sections/Workshops";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  useEffect(() => {
    initGsapAnimations();
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Workshops />
      <WhyUs />
      <Testimonials />
      <CTA />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
