import Navbar from "@/components/Navbar";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";

const Resources = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <ResourcesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Resources;
