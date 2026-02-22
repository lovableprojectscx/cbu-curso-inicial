import { useState } from "react";
import {
  Flame, BookOpenCheck, Megaphone, Globe2, MessageCircle, Compass, Users2, ChevronRight, Calendar, Clock, MapPin
} from "lucide-react";

const modules = [
  {
    number: "01",
    icon: Flame,
    title: "Movimiento Estudiantil",
    description:
      "Conoce la historia y visión del movimiento estudiantil cristiano a nivel mundial y en el Perú. Entiende cómo AGEUP es parte de algo más grande.",
    tag: "Fundamentos",
    accent: "crimson",
    date: "Lun 02 de Marzo",
    time: "8:00 – 9:30 PM",
    mode: "Virtual",
  },
  {
    number: "02",
    icon: BookOpenCheck,
    title: "Compromiso con las Escrituras",
    description:
      "Exploramos la centralidad de la Biblia en nuestra vida y ministerio. Aprende métodos de estudio bíblico inductivo y cómo aplicar la Palabra.",
    tag: "Bíblico",
    accent: "gold",
    date: "Mié 04 de Marzo",
    time: "8:00 – 9:30 PM",
    mode: "Virtual",
  },
  {
    number: "03",
    icon: Megaphone,
    title: "Evangelización Creativa",
    description:
      "Descubre formas auténticas y contextuales de compartir el evangelio en el campus universitario. Herramientas prácticas para tu contexto.",
    tag: "Práctica",
    accent: "crimson",
    date: "Vie 06 de Marzo",
    time: "8:00 – 9:30 PM",
    mode: "Virtual",
  },
  {
    number: "04",
    icon: Globe2,
    title: "Misión Cristiana",
    description:
      "La universidad como campo misionero. Entiende el llamado a la misión integral y cómo ser testigo en tu facultad y ciudad.",
    tag: "Misión",
    accent: "gold",
    date: "Lun 09 de Marzo",
    time: "8:00 – 9:30 PM",
    mode: "Virtual",
  },
  {
    number: "05",
    icon: MessageCircle,
    title: "Testimonios",
    description:
      "Vidas transformadas por el evangelio en el contexto universitario. Historias reales que inspiran y muestran el poder del ministerio estudiantil.",
    tag: "Inspiración",
    accent: "crimson",
    date: "Mié 11 de Marzo",
    time: "8:00 – 9:30 PM",
    mode: "Virtual",
  },
  {
    number: "06",
    icon: Compass,
    title: "Identidad Misionera",
    description:
      "¿Quién eres en Cristo como estudiante universitario? Descubre tu identidad y propósito para ser agente de cambio en tu generación.",
    tag: "Identidad",
    accent: "gold",
    date: "Vie 13 de Marzo",
    time: "8:00 – 9:30 PM",
    mode: "Virtual",
  },
  {
    number: "07",
    icon: Users2,
    title: "Células · Clausura y Certificados",
    description:
      "La célula como corazón de la CBU. Aprende la dinámica, propósito y funcionamiento de los grupos pequeños. Clausura oficial con entrega de certificados.",
    tag: "Comunidad",
    accent: "crimson",
    date: "Sáb 14 de Marzo",
    time: "10:00 AM",
    mode: "Presencial",
  },
];

const ModulesSection = () => {
  const [activeModule, setActiveModule] = useState<number | null>(null);

  return (
    <section id="modules" className="scroll-mt-20 py-24 px-4" style={{ background: "var(--gradient-section)" }}>
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{ background: "hsl(var(--crimson) / 0.08)", border: "1px solid hsl(var(--crimson) / 0.2)" }}>
            <span className="text-crimson text-sm font-heading font-600 tracking-wider uppercase">
              El Mapa Formativo
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-800 text-foreground mb-4">
            7 Módulos que <span className="text-gradient-gold">Transforman</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un recorrido progresivo diseñado para que descubras la identidad, misión y comunidad del ministerio estudiantil.
          </p>
          <div className="section-divider mx-auto mt-6 mb-6" />
          {/* Fechas de inicio y fin */}
          <div className="inline-flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-heading font-700"
              style={{ background: "hsl(var(--gold) / 0.12)", color: "hsl(var(--gold))", border: "1px solid hsl(var(--gold) / 0.25)" }}>
              <Calendar size={14} />
              Inicio: Lun 02 de Marzo 2026
            </span>
            <span className="text-muted-foreground font-heading">→</span>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-heading font-700"
              style={{ background: "hsl(var(--crimson) / 0.08)", color: "hsl(var(--crimson))", border: "1px solid hsl(var(--crimson) / 0.2)" }}>
              <Calendar size={14} />
              Clausura: Sáb 14 de Marzo 2026
            </span>
          </div>
        </div>

        {/* Timeline-style modules */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: "linear-gradient(180deg, hsl(var(--crimson) / 0.2), hsl(var(--gold) / 0.4), hsl(var(--crimson) / 0.2))" }} />

          <div className="space-y-6 md:space-y-10">
            {modules.map((mod, idx) => {
              const Icon = mod.icon;
              const isActive = activeModule === idx;
              const isLeft = idx % 2 === 0;
              const isCrimson = mod.accent === "crimson";
              const accentColor = isCrimson ? "hsl(var(--crimson))" : "hsl(var(--gold))";
              const accentBg = isCrimson
                ? "linear-gradient(135deg, hsl(0 95% 22%), hsl(0 80% 35%))"
                : "linear-gradient(135deg, hsl(37 92% 45%), hsl(42 95% 58%))";

              return (
                <div key={idx} className={`relative flex flex-col ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-4 md:gap-8`}>
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full items-center justify-center shadow-lg transition-transform duration-300"
                    style={{
                      background: isActive ? accentBg : "hsl(var(--card))",
                      border: `2px solid ${accentColor}`,
                      transform: isActive ? "scale(1.2)" : undefined,
                    }}>
                    <span className="font-heading font-800 text-xs" style={{ color: isActive ? "white" : accentColor }}>
                      {mod.number}
                    </span>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block flex-1" />

                  {/* Card */}
                  <div
                    className="flex-1 w-full md:max-w-[calc(50%-3rem)] rounded-2xl p-6 cursor-pointer transition-all duration-300 group"
                    onClick={() => setActiveModule(isActive ? null : idx)}
                    style={{
                      background: "hsl(var(--card))",
                      border: isActive ? `2px solid ${accentColor}` : "2px solid hsl(var(--border))",
                      boxShadow: isActive ? "var(--shadow-deep)" : "var(--shadow-card)",
                      transform: isActive ? "scale(1.02)" : undefined,
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                        style={{ background: accentBg }}>
                        <Icon size={22} className="text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="text-xs font-heading font-700 px-2.5 py-1 rounded-full"
                            style={{
                              background: isCrimson ? "hsl(var(--crimson) / 0.08)" : "hsl(var(--gold) / 0.12)",
                              color: accentColor,
                              border: `1px solid ${isCrimson ? "hsl(var(--crimson) / 0.2)" : "hsl(var(--gold) / 0.3)"}`,
                            }}>
                            {mod.tag}
                          </span>
                          {idx === 6 && (
                            <span className="text-xs font-heading font-700 px-2.5 py-1 rounded-full"
                              style={{ background: "hsl(var(--gold) / 0.15)", color: "hsl(var(--gold))", border: "1px solid hsl(var(--gold) / 0.3)" }}>
                              ⭐ Final
                            </span>
                          )}
                          {/* Mobile number */}
                          <span className="md:hidden font-heading font-900 text-lg opacity-20 ml-auto" style={{ color: accentColor }}>
                            {mod.number}
                          </span>
                        </div>
                        <h3 className="font-heading font-700 text-foreground text-lg leading-tight group-hover:text-crimson transition-colors mt-2">
                          {mod.title}
                        </h3>
                        {/* Date & time info */}
                        <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-muted-foreground">
                          <span className="inline-flex items-center gap-1">
                            <Calendar size={12} style={{ color: accentColor }} />
                            {mod.date}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Clock size={12} style={{ color: accentColor }} />
                            {mod.time}
                          </span>
                          {mod.mode === "Presencial" && (
                            <span className="inline-flex items-center gap-1 font-heading font-700 px-2 py-0.5 rounded-full"
                              style={{ background: "hsl(var(--crimson) / 0.1)", color: "hsl(var(--crimson))", border: "1px solid hsl(var(--crimson) / 0.2)" }}>
                              <MapPin size={11} />
                              Presencial
                            </span>
                          )}
                        </div>
                      </div>
                      <ChevronRight
                        size={18}
                        className="flex-shrink-0 mt-1 transition-all duration-300 text-muted-foreground"
                        style={{
                          transform: isActive ? "rotate(90deg)" : undefined,
                          color: isActive ? accentColor : undefined,
                        }}
                      />
                    </div>

                    <div className={`overflow-hidden transition-all duration-400 ${isActive ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                      <p className="text-muted-foreground text-sm leading-relaxed pl-16">
                        {mod.description}
                      </p>
                    </div>

                    {/* Progress bar */}
                    <div className="mt-4 h-1 rounded-full overflow-hidden" style={{ background: "hsl(var(--muted))" }}>
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ background: accentBg, width: isActive ? "100%" : "0%" }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-center text-muted-foreground text-sm mt-10">
          💡 <span className="font-600">Tip:</span> Haz clic en cada módulo para leer más detalles
        </p>
      </div>
    </section>
  );
};

export default ModulesSection;
