import { useNavigate, useLocation } from "react-router-dom";
import cbuLogo from "@/assets/cbu-logo.png";
import ageupLogo from "@/assets/ageup-logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goHome = () => {
    if (location.pathname === "/") {
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

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
        <div className="hidden md:flex items-center gap-6">
          {[
            { label: "Inicio", path: "/#hero" },
            { label: "Módulos", path: "/#modules" },
            { label: "Quiz", path: "/quiz" },
          ].map((item) => (
            <a
              key={item.path}
              href={item.path}
              onClick={(e) => {
                e.preventDefault();
                if (item.path.startsWith("/#")) {
                  if (location.pathname === "/") {
                    document.getElementById(item.path.slice(2))?.scrollIntoView({ behavior: "smooth" });
                  } else {
                    navigate("/" + item.path.slice(1));
                  }
                } else {
                  navigate(item.path);
                }
              }}
              className="text-sm font-medium text-foreground/70 hover:text-crimson transition-colors duration-200 font-heading no-underline"
            >
              {item.label}
            </a>
          ))}
        </div>
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
    </nav>
  );
};

export default Navbar;
