import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "@/components/Footer";
import ConsultancyIndustries from "@/components/ConsultancyIndustries";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsSection from "@/components/TestimonialSection";
import LogoCarousel from "@/components/LogoCarousel";
import RequestCallbackSection from "@/components/RequestCallbackSection";
import ConsultancySection from "@/components/ConsultancySection";
import ConsultantBanner from "@/components/ConsultBanner";
import LatestNewsSection from "@/components/LatestNewsSection";
import FloatingNavbar from "@/components/FloatingNavBar";

export default function Home() {
  return (
    <div className="bg-white">
      <FloatingNavbar/>
      <Navbar />
      <Hero />
      <Services />
      <ConsultancyIndustries />
      <ExperienceSection/>
      <TestimonialsSection/>
      <LogoCarousel/>
      <RequestCallbackSection/>
      <ConsultancySection/>
      <ConsultantBanner/>
      <LatestNewsSection/>
      <Footer />
      {/* Add additional sections/components as needed */}
    </div>
  );
}
