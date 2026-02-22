import Navbar from "@/components/Navbar";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";

const Registration = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <RegistrationForm />
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
