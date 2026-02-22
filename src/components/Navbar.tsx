import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import cbuLogo from "@/assets/cbu-logo.png";
import ageupLogo from "@/assets/ageup-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { label: "Inicio", path: "/#hero" },
    { label: "Módulos", path: "/#modules" },
    { label: "Quiz", path: "/quiz" },
  ];

  const goHome = () => {
    setIsOpen(false);
    if (location.pathname === "/") {
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const handleLinkClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    if (path.startsWith("/#")) {
      if (location.pathname === "/") {
        document.getElementById(path.slice(2))?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/" + path.slice(1));
      }
    } else {
      navigate(path);
    }
  };

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card-light border-b border-white/40">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <button onClick={goHome} className="flex items-center gap-2 cursor-pointer group">
          <div className="flex items-center -space-x-2">
            <img src={cbuLogo} alt="CBU" className="h-10 w-10 rounded-lg object-cover border-2 border-white shadow-sm z-10" />
            <img src={ageupLogo} alt="AGEUP" className="h-8 w-8 rounded-lg object-contain bg-white p-1 border border-gray-100 shadow-sm transition-transform group-hover:translate-x-1" />
          </div>
          <div className="text-left ml-2">
            <p className="font-heading font-800 text-sm text-crimson leading-tight">CBU</p>
            <p className="text-[10px] text-muted-foreground leading-tight font-600">AGEUP · IFES</p>
          </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((item) => (
            <a
              key={item.path}
              href={item.path}
              onClick={(e) => handleLinkClick(item.path, e)}
              className="text-sm font-medium text-foreground/70 hover:text-crimson transition-colors duration-200 font-heading no-underline"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/inscripcion"
            onClick={(e) => {
              e.preventDefault();
              navigate("/inscripcion");
            }}
            className="btn-gold text-sm px-5 py-2 no-underline"
          >
            Inscríbete
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute w-full glass-card-light border-b border-white/40 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-64 py-4" : "max-h-0"}`}>
        <div className="flex flex-col items-center gap-4 px-4 overflow-hidden">
          {navLinks.map((item) => (
            <a
              key={item.path}
              href={item.path}
              onClick={(e) => handleLinkClick(item.path, e)}
              className="text-base font-600 text-foreground/80 hover:text-crimson transition-colors font-heading no-underline"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/inscripcion"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              navigate("/inscripcion");
            }}
            className="btn-gold text-sm px-8 py-3 w-full max-w-[200px] text-center no-underline"
          >
            Inscríbete
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
