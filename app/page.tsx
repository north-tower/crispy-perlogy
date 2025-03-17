
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/About";
import StatsSection from "@/components/ StatsSection";
import ServicesSection from "@/components/ServicesSection";
import SolutionsSection from "@/components/SolutionsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
     <Navbar />
     <Hero />
     <AboutSection />
     <StatsSection />
     <ServicesSection />
     <SolutionsSection />
     <TestimonialsSection />
     <PartnersSection />
     <Footer />
    </>
   
  );
}
