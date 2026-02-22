import { useNavigate, useLocation } from "react-router-dom";
import cbuLogo from "@/assets/cbu-logo.png";
import ageupLogo from "@/assets/ageup-logo.png";
import { Heart, Instagram, Facebook, Mail } from "lucide-react";

const TikTokIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.43a8.16 8.16 0 004.76 1.52V7.5a4.83 4.83 0 01-1-.81z" />
  </svg>
);

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/cbu.unsch/" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61552071391025" },
  { icon: TikTokIcon, href: "https://www.tiktok.com/@cbu_unsch" },
];

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Inicio", path: "/" },
    { label: "Módulos", path: "/#modules" },
    { label: "Quiz Misionero", path: "/quiz" },
    { label: "Inscripción", path: "/inscripcion" },
    { label: "Recursos", path: "/recursos" },
  ];

  const handleNavClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (path.startsWith("/#")) {
      const elementId = path.substring(2);
      if (location.pathname === "/") {
        document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(path);
      }
    } else if (path === "/") {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
      }
    } else {
      navigate(path);
    }
  };

  return (
    <footer className="py-16 px-4"
      style={{ background: "linear-gradient(180deg, hsl(0 95% 16%), hsl(0 95% 12%))" }}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4 mb-4 cursor-pointer group" onClick={(e) => handleNavClick("/", e)}>
              <div className="flex items-center -space-x-2">
                <img src={cbuLogo} alt="CBU" className="h-14 w-14 rounded-xl border-2 border-white/10 z-10" />
                <img src={ageupLogo} alt="AGEUP" className="h-10 w-10 rounded-lg object-contain bg-white p-1 transition-transform group-hover:translate-x-1" />
              </div>
              <div>
                <p className="font-heading font-800 text-white text-xl leading-tight">CBU</p>
                <p className="text-white/50 text-[10px] font-600 tracking-wide uppercase">Comunidad Bíblica Universitaria</p>
                <p className="text-gold/80 text-[10px] font-700">Afiliada a AGEUP · IFES</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Formando estudiantes que transformen sus universidades y el mundo a través del evangelio de Jesucristo.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-700 text-white mb-4">Navegación</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.path}
                    onClick={(e) => handleNavClick(item.path, e)}
                    className="text-white/60 text-sm hover:text-gold transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-700 text-white mb-4">Contacto</h4>
            <div className="space-y-3">
              <a href="mailto:cbu.unsch@gmail.com" className="flex items-center gap-2 text-white/60 text-sm hover:text-gold transition-colors">
                <Mail size={15} />
                cbu.unsch@gmail.com
              </a>
              <div className="flex items-center gap-4 pt-2">
                {socialLinks.map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{ background: "hsl(0 0% 100% / 0.1)", border: "1px solid hsl(0 0% 100% / 0.15)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "hsl(var(--gold) / 0.25)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "hsl(0 0% 100% / 0.1)"; }}
                  >
                    <Icon size={16} className="text-white/70" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: "hsl(0 0% 100% / 0.1)" }}>
          <p className="text-white/40 text-sm">
            © 2026 CBU · AGEUP · Afiliada a IFES · Todos los derechos reservados
          </p>
          <p className="text-white/40 text-sm flex items-center gap-1.5">
            Hecho con <Heart size={12} style={{ color: "hsl(var(--gold))" }} /> para el ministerio estudiantil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
