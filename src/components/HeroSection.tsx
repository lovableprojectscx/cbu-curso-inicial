import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import cbuLogo from "@/assets/cbu-logo.png";
import ageupLogo from "@/assets/ageup-logo.png";
import { ChevronDown, Users, BookOpen, Globe } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToModules = () => {
    document.getElementById("modules")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      {/* Decorative elements */}
      <div
        className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10 animate-float"
        style={{ background: "var(--gradient-gold)", filter: "blur(60px)" }}
      />
      <div
        className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-8"
        style={{ background: "hsl(var(--gold) / 0.15)", filter: "blur(40px)" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6 animate-fade-in">
          <div className="relative">
            <img
              src={cbuLogo}
              alt="CBU"
              className="h-28 w-28 rounded-2xl shadow-2xl animate-float"
              style={{ boxShadow: "0 20px 60px hsl(0 0% 0% / 0.5)" }}
            />
            <div
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full animate-pulse-glow"
              style={{ background: "var(--gradient-gold)" }}
            />
          </div>
        </div>

        <div
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl mb-6 animate-fade-up shadow-lg backdrop-blur-md"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(212, 175, 55, 0.3)",
            animationDelay: "0.1s",
          }}
        >
          <img src={ageupLogo} alt="AGEUP" className="h-10 w-auto object-contain drop-shadow-md" />
          <div className="h-8 w-px bg-white/20 mx-1" />
          <span className="text-white font-heading font-700 tracking-wider text-xs md:text-sm">MOVIMIENTO ESTUDIANTIL AGEUP · IFES</span>
        </div>

        <h1
          className="text-5xl md:text-7xl font-heading font-900 text-white mb-4 animate-fade-up leading-tight"
          style={{ animationDelay: "0.2s", textShadow: "0 2px 20px hsl(0 0% 0% / 0.3)" }}
        >
          Curso Inicial
        </h1>
        <h2
          className="text-2xl md:text-3xl font-heading font-700 mb-6 animate-fade-up"
          style={{ animationDelay: "0.3s", color: "hsl(var(--gold))" }}
        >
          Comunidad Bíblica Universitaria
        </h2>

        <p
          className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up leading-relaxed"
          style={{ animationDelay: "0.4s" }}
        >
          Descubre quiénes somos, hacia dónde vamos y cómo la CBU, parte del ministerio estudiantil de AGEUP, puede
          transformar tu vida universitaria y tu fe.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          {[
            { icon: Users, value: "7", label: "Módulos Temáticos" },
            { icon: BookOpen, value: "CBU", label: "Comunidad Viva" },
            { icon: Globe, value: "IFES", label: "Red Mundial" },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="glass-card rounded-2xl px-6 py-4 text-center">
              <Icon className="mx-auto mb-1 text-gold" size={22} />
              <p className="text-gold font-heading font-800 text-2xl">{value}</p>
              <p className="text-white/70 text-xs font-500">{label}</p>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <button onClick={() => navigate("/inscripcion")} className="btn-gold text-base no-underline">
            Inscríbete Ahora
          </button>
          <button
            onClick={scrollToModules}
            className="btn-crimson text-base border border-white/30"
            style={{ background: "hsl(0 0% 100% / 0.1)", backdropFilter: "blur(10px)" }}
          >
            Ver Módulos
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToModules}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
