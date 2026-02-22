import { useState } from "react";
import { CheckCircle, ArrowRight, RotateCcw, Compass } from "lucide-react";

const questions = [
  {
    question: "En el campus, tú normalmente...",
    options: [
      { text: "Ayudas a compañeros con sus problemas", type: "shepherd" },
      { text: "Invitas amigos a discutir ideas profundas", type: "scholar" },
      { text: "Organizas eventos y conectas personas", type: "builder" },
      { text: "Compartes tu fe con personas nuevas", type: "evangelist" },
    ],
  },
  {
    question: "¿Qué describe mejor tu pasión?",
    options: [
      { text: "Cuidar y acompañar a otros en su fe", type: "shepherd" },
      { text: "Estudiar la Biblia en profundidad", type: "scholar" },
      { text: "Construir comunidad y pertenencia", type: "builder" },
      { text: "Llevar el evangelio a nuevos lugares", type: "evangelist" },
    ],
  },
  {
    question: "Si organizaras un evento de CBU, sería...",
    options: [
      { text: "Un retiro de sanación y oración", type: "shepherd" },
      { text: "Un seminario de apologética", type: "scholar" },
      { text: "Una noche de comunión y testimonios", type: "builder" },
      { text: "Un evento abierto de evangelización", type: "evangelist" },
    ],
  },
  {
    question: "Tu versículo favorito habla de...",
    options: [
      { text: "El amor y el cuidado de Dios por cada persona", type: "shepherd" },
      { text: "La sabiduría y el conocimiento de Dios", type: "scholar" },
      { text: "La unidad del cuerpo de Cristo", type: "builder" },
      { text: "Id por todo el mundo y predicad el evangelio", type: "evangelist" },
    ],
  },
];

const results: Record<string, { title: string; description: string; color: string; emoji: string }> = {
  shepherd: {
    title: "El Pastor Universitario",
    description: "Tienes un corazón para el cuidado y el acompañamiento. En la CBU, serías clave en el discipulado y en los grupos de célula, siendo ese amigo que todos necesitan.",
    color: "hsl(0 85% 32%)",
    emoji: "",
  },
  scholar: {
    title: "El Estudiante de la Palabra",
    description: "Tu amor por la Biblia y la reflexión profunda te hace un pilar del compromiso con las Escrituras. Serías el que guía los estudios bíblicos con profundidad y rigor.",
    color: "hsl(37 92% 40%)",
    emoji: "",
  },
  builder: {
    title: "El Constructor de Comunidad",
    description: "Tienes el don de unir personas y crear sentido de pertenencia. En la CBU, liderarías la vida comunitaria y harías que cada estudiante se sienta bienvenido.",
    color: "hsl(0 95% 22%)",
    emoji: "",
  },
  evangelist: {
    title: "El Misionero del Campus",
    description: "Tu pasión por compartir el evangelio te define. Serías el motor de la evangelización creativa, llevando las buenas nuevas a cada rincón de tu universidad.",
    color: "hsl(37 75% 38%)",
    emoji: "",
  },
};

const MissionQuiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (type: string) => {
    const newAnswers = [...answers, type];
    if (currentQ < questions.length - 1) {
      setAnswers(newAnswers);
      setCurrentQ(currentQ + 1);
    } else {
      // Count most frequent type
      const counts: Record<string, number> = {};
      newAnswers.forEach((a) => {
        counts[a] = (counts[a] || 0) + 1;
      });
      const winner = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
      setResult(winner);
    }
  };

  const restart = () => {
    setCurrentQ(0);
    setAnswers([]);
    setResult(null);
  };

  const progress = ((currentQ) / questions.length) * 100;

  return (
    <section id="quiz" className="pt-24 pb-16 px-4 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(0 95% 22%) 0%, hsl(0 85% 18%) 100%)" }}>
      {/* Decorative blur */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: "hsl(var(--gold))", filter: "blur(80px)" }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-8"
        style={{ background: "hsl(var(--gold))", filter: "blur(60px)" }} />

      <div className="container mx-auto max-w-2xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{ background: "hsl(var(--gold) / 0.2)", border: "1px solid hsl(var(--gold) / 0.4)" }}>
            <Compass size={16} style={{ color: "hsl(var(--gold))" }} />
            <span className="text-sm font-heading font-600 tracking-wider uppercase" style={{ color: "hsl(var(--gold))" }}>
              Quiz Misionero
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-800 text-white mb-4">
            Quiz de Identidad <span className="text-gradient-gold">Misionera</span>
          </h2>
          <p className="text-white/70 text-lg">
            Responde 4 preguntas y descubre tu rol en el ministerio estudiantil
          </p>
          <div className="section-divider mx-auto mt-6" />
        </div>

        {!result ? (
          <div className="glass-card rounded-2xl p-8">
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between text-white/60 text-sm mb-2">
                <span>Pregunta {currentQ + 1} de {questions.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ background: "hsl(0 0% 100% / 0.15)" }}>
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${progress}%`, background: "var(--gradient-gold)" }}
                />
              </div>
            </div>

            <h3 className="text-white font-heading font-700 text-lg sm:text-xl md:text-2xl mb-8 text-center">
              {questions[currentQ].question}
            </h3>

            <div className="space-y-3">
              {questions[currentQ].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(opt.type)}
                  className="w-full text-left p-4 rounded-xl font-body text-white/85 transition-all duration-200 group"
                  style={{
                    background: "hsl(0 0% 100% / 0.07)",
                    border: "1px solid hsl(0 0% 100% / 0.12)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "hsl(var(--gold) / 0.2)";
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "hsl(var(--gold) / 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "hsl(0 0% 100% / 0.07)";
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "hsl(0 0% 100% / 0.12)";
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-700 font-heading flex-shrink-0"
                      style={{ background: "hsl(0 0% 100% / 0.12)", color: "hsl(var(--gold))" }}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    {opt.text}
                    <ArrowRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "hsl(var(--gold))" }} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="glass-card rounded-2xl p-6 sm:p-8 text-center animate-fade-up">
            <div className="text-5xl sm:text-6xl mb-4">{results[result].emoji}</div>
            <CheckCircle size={40} className="mx-auto mb-4" style={{ color: "hsl(var(--gold))" }} />
            <h3 className="text-white font-heading font-800 text-2xl md:text-3xl mb-3">
              ¡Eres {results[result].title}!
            </h3>
            <p className="text-white/75 text-base leading-relaxed mb-8 max-w-lg mx-auto">
              {results[result].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-gold"
              >
                ¡Quiero inscribirme! →
              </button>
              <button
                onClick={restart}
                className="flex items-center gap-2 justify-center px-6 py-3 rounded-xl font-heading font-600 text-white/70 transition-colors hover:text-white"
                style={{ border: "1px solid hsl(0 0% 100% / 0.2)" }}
              >
                <RotateCcw size={16} /> Repetir quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MissionQuiz;
