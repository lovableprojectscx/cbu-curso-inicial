import { useNavigate, useLocation } from "react-router-dom";
import cbuLogo from "@/assets/cbu-logo.png";

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
        <button onClick={goHome} className="flex items-center gap-3 cursor-pointer">
          <img src={cbuLogo} alt="CBU" className="h-10 w-10 rounded-lg object-cover" />
          <div className="text-left">
            <p className="font-heading font-800 text-sm text-crimson leading-tight">CBU</p>
            <p className="text-xs text-muted-foreground leading-tight">Comunidad Bíblica Universitaria</p>
          </div>
        </button>
        <div className="hidden md:flex items-center gap-6">
          {[
            { label: "Inicio", path: "/#hero" },
            { label: "Módulos", path: "/#modules" },
            { label: "Quiz", path: "/quiz" },
            { label: "Recursos", path: "/recursos" },
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
