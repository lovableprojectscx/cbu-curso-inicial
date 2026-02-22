import { Download, BookOpen, Compass, History, ExternalLink } from "lucide-react";

const resources = [
  {
    icon: BookOpen,
    title: "Manual EBI",
    subtitle: "Estudio Bíblico Inductivo",
    description: "Metodología completa para estudiar la Biblia de forma profunda y sistemática. Incluye guías de observación, interpretación y aplicación.",
    tags: ["Biblia", "Metodología"],
    color: "hsl(0 95% 22%)",
    gradient: "linear-gradient(135deg, hsl(0 95% 22%), hsl(0 80% 35%))",
    size: "2.4 MB · PDF",
  },
  {
    icon: Compass,
    title: "Manual de Misión",
    subtitle: "Misión Integral Universitaria",
    description: "Fundamentos teológicos y prácticos de la misión cristiana en el contexto universitario peruano. Afiliado a IFES.",
    tags: ["Misión", "Teología"],
    color: "hsl(37 92% 40%)",
    gradient: "linear-gradient(135deg, hsl(37 92% 40%), hsl(42 95% 55%))",
    size: "1.8 MB · PDF",
  },
  {
    icon: History,
    title: "Historia de AGEUP",
    subtitle: "Nuestros inicios y legado",
    description: "La historia del movimiento estudiantil evangélico en el Perú desde sus inicios hasta hoy. Conoce los pioneros de la fe universitaria.",
    tags: ["Historia", "Identidad"],
    color: "hsl(0 85% 30%)",
    gradient: "linear-gradient(135deg, hsl(0 85% 30%), hsl(10 80% 42%))",
    size: "3.1 MB · PDF",
  },
];

const ResourcesSection = () => {
  return (
    <section id="resources" className="py-24 px-4" style={{ background: "hsl(var(--muted) / 0.5)" }}>
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{ background: "hsl(var(--crimson) / 0.08)", border: "1px solid hsl(var(--crimson) / 0.2)" }}>
            <Download size={14} className="text-crimson" />
            <span className="text-crimson text-sm font-heading font-600 tracking-wider uppercase">
              Repositorio de Recursos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-800 text-foreground mb-4">
            Manuales y <span className="text-gradient-gold">Materiales</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Accede a los recursos oficiales de AGEUP para profundizar tu formación en el ministerio estudiantil.
          </p>
          <div className="section-divider mx-auto mt-6" />
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {resources.map((res, idx) => {
            const Icon = res.icon;
            return (
              <div key={idx} className="module-card group overflow-hidden">
                {/* Color strip */}
                <div className="h-1.5 w-full" style={{ background: res.gradient }} />

                <div className="p-6">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: res.gradient }}>
                    <Icon size={26} className="text-white" />
                  </div>

                  {/* Tags */}
                  <div className="flex gap-2 mb-3">
                    {res.tags.map((tag) => (
                      <span key={tag} className="text-xs font-heading font-600 px-2 py-0.5 rounded-full"
                        style={{ background: "hsl(var(--muted))", color: "hsl(var(--muted-foreground))" }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-heading font-800 text-foreground text-xl mb-1 group-hover:text-crimson transition-colors">
                    {res.title}
                  </h3>
                  <p className="text-sm font-600 mb-3" style={{ color: res.color }}>
                    {res.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {res.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">{res.size}</span>
                    <button
                      className="flex items-center gap-1.5 text-sm font-heading font-700 transition-all duration-200 hover:gap-2.5"
                      style={{ color: res.color }}
                    >
                      <Download size={15} />
                      Descargar
                      <ExternalLink size={12} className="opacity-50" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* IFES badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 px-8 py-5 rounded-2xl"
            style={{ background: "hsl(var(--crimson) / 0.06)", border: "1px solid hsl(var(--crimson) / 0.15)" }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(135deg, hsl(var(--crimson)), hsl(var(--crimson-light)))" }}>
              <span className="text-white font-heading font-900 text-xs">IFES</span>
            </div>
            <div className="text-left">
              <p className="font-heading font-700 text-foreground text-sm">AGEUP está afiliada a IFES</p>
              <p className="text-muted-foreground text-xs">International Fellowship of Evangelical Students · Red global en 170+ países</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
