import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "@/components/Footer";
import ConsultancyIndustries from "@/components/ConsultancyIndustries";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Services />
      <ConsultancyIndustries />
      <Footer />
      {/* Add additional sections/components as needed */}
    </div>
  );
}
