import { useState } from "react";
import { CheckCircle, Send, User } from "lucide-react";

type FormData = {
  fullName: string;
  phone: string;
  email: string;
  gender: string;
  cbu: string;
  howDidYouHear: string;
};

const inputClass = "w-full px-4 py-3 rounded-xl font-body text-foreground text-sm transition-all duration-200 outline-none focus:ring-2"
  + " bg-background border border-border focus:ring-crimson/30 focus:border-crimson/50";

const labelClass = "block text-sm font-heading font-600 text-foreground/80 mb-1.5";

const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<FormData>({
    fullName: "", phone: "", email: "", gender: "",
    cbu: "", howDidYouHear: "",
  });

  const set = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const scriptURL = "https://script.google.com/macros/s/AKfycbzDmP44ugvVa2QwjItUHx-e_g-de5ABNXBxmyDNzc_Nbv5P5EnqUXiF3j6Q90FiaW-wkQ/exec";

      const formData = new URLSearchParams();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      // Since mode is 'no-cors', we won't get a proper response body, 
      // but we assume success if no exception is thrown
      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Hubo un problema al enviar tu inscripción. Por favor, intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="registration" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{ background: "hsl(var(--crimson) / 0.08)", border: "1px solid hsl(var(--crimson) / 0.2)" }}>
            <span className="text-crimson text-sm font-heading font-600 tracking-wider uppercase">
              Inscripción
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-800 text-foreground mb-4">
            Da el <span className="text-gradient-gold">Primer Paso</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Únete al Curso Inicial. Solo necesitamos algunos datos básicos.
          </p>
          <div className="section-divider mx-auto mt-6" />
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-[var(--shadow-deep)] overflow-hidden border border-border">
            <div className="p-6 border-b border-border flex items-center gap-2" style={{ background: "hsl(var(--muted) / 0.5)" }}>
              <User size={18} className="text-crimson" />
              <span className="font-heading font-700 text-foreground">Datos de Inscripción</span>
            </div>

            <div className="p-8 space-y-5">
              <div>
                <label className={labelClass}>Nombre Completo *</label>
                <input className={inputClass} placeholder="Ej: María González López" value={form.fullName} onChange={set("fullName")} required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Teléfono / WhatsApp *</label>
                  <input className={inputClass} placeholder="+51 999 999 999" value={form.phone} onChange={set("phone")} required />
                </div>
                <div>
                  <label className={labelClass}>Correo Electrónico *</label>
                  <input type="email" className={inputClass} placeholder="tu@correo.com" value={form.email} onChange={set("email")} required />
                </div>
              </div>

              <div>
                <label className={labelClass}>Género *</label>
                <select className={inputClass} value={form.gender} onChange={set("gender")} required>
                  <option value="">Selecciona...</option>
                  <option>Masculino</option>
                  <option>Femenino</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>¿A qué CBU perteneces? *</label>
                <input className={inputClass} placeholder="Ej: CBU UNSCH" value={form.cbu} onChange={set("cbu")} required />
              </div>

              <div>
                <label className={labelClass}>¿Cómo te enteraste del curso?</label>
                <select className={inputClass} value={form.howDidYouHear} onChange={set("howDidYouHear")}>
                  <option value="">Selecciona...</option>
                  <option>Un amigo</option>
                  <option>Redes sociales</option>
                  <option>Evento en el campus</option>
                  <option>Mi iglesia</option>
                  <option>Otro</option>
                </select>
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm text-center">
                  {error}
                </div>
              )}

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold flex items-center gap-2 text-sm w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={16} className={isSubmitting ? "animate-pulse" : ""} />
                  {isSubmitting ? "Enviando..." : "Enviar Inscripción"}
                </button>
              </div>
            </div>
          </form>
        ) : (
          <div className="text-center py-16 animate-fade-up">
            <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow"
              style={{ background: "var(--gradient-gold)" }}>
              <CheckCircle size={44} style={{ color: "hsl(0 5% 10%)" }} />
            </div>
            <h3 className="text-3xl font-heading font-800 text-foreground mb-4">
              ¡Inscripción Exitosa!
            </h3>
            <p className="text-muted-foreground text-lg max-w-md mx-auto mb-8">
              Bienvenido/a a la familia CBU-AGEUP. Pronto recibirás los detalles del Curso Inicial.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-700"
              style={{ background: "hsl(var(--crimson) / 0.08)", border: "1px solid hsl(var(--crimson) / 0.25)", color: "hsl(var(--crimson))" }}>
              🕊️ ¡Bienvenido/a al movimiento estudiantil!
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RegistrationForm;
