import Navbar from "@/components/Navbar";
import MissionQuiz from "@/components/MissionQuiz";
import Footer from "@/components/Footer";

const Quiz = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <MissionQuiz />
      </div>
      <Footer />
    </div>
  );
};

export default Quiz;
