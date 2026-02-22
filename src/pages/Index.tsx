import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ModulesSection from "@/components/ModulesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ModulesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
