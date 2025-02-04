import Navbar from "../components/Navbar";
import HeroSection from "./HeroSection";
import VerifiedSection from "./VerifiedSection";
import PackageSection from "./PackageSection";
import ArmadaSection from "./ArmadaSection";
import TestimoniSection from "./TestimoniSection";
import GallerySection from "./GallerySection";
import ContactSection from "./ContactSection";
import Footer from "../components/Footer";
import CompanyProfileSection from "./CompanyProfileSection";

const Home = () => {
  return (
    <main className="w-full min-h-screen">
      <Navbar />
      <HeroSection />
      <CompanyProfileSection />
      <VerifiedSection />
      <PackageSection />
      <ArmadaSection />
      <TestimoniSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Home;
