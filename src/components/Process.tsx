import { Card, CardContent } from "@/components/ui/card";
import { Ruler, Palette, Wrench, Truck, Shield } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Process = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  const steps = [
    {
      number: "1",
      icon: Ruler,
      title: "Consultation gratuite",
      description: "Appel conférence avec nos experts. Tu nous montres ton espace par vidéo, on discute de tes besoins, on t'écoute.",
      duration: "1h, gratuit, sans pression"
    },
    {
      number: "2",
      icon: Palette,
      title: "Design 3D",
      description: "Tu reçois ton plan 3D réaliste en 48h. Tu visualises tout avant de dire oui.",
      duration: "Révisions illimitées"
    },
    {
      number: "3",
      icon: Wrench,
      title: "Fabrication",
      description: "Assemblé au Québec avec du contreplaqué supérieur. Pas de shortcuts.",
      duration: "10-15 jours"
    },
    {
      number: "4",
      icon: Truck,
      title: "Installation",
      description: "Nos partenaires certifiés installent avec soin. Propre, rapide, professionnel.",
      duration: "1-2 jours selon projet"
    }
  ];

  return (
    <section ref={sectionRef} id="process" className="py-12 md:py-20 lg:py-24 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div 
            className={`text-center mb-16 transition-all duration-320 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Processus clé en main – sans stress, sans surprises
            </h2>
            <p className="text-xl text-muted-foreground font-body">
              De l'idée à ta nouvelle cuisine, en 4 étapes simples
            </p>
          </div>

          {/* Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {steps.map((step, index) => (
              <Card 
                key={index}
                className={`border-none shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 rounded-[1.25rem] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
                style={{ transitionDelay: `${150 + index * 80}ms` }}
              >
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center shadow-[var(--shadow-soft)] border-4 border-secondary">
                    <span className="text-2xl font-bold text-secondary">{step.number}</span>
                  </div>
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shadow-[var(--shadow-soft)] backdrop-blur-sm border border-primary/10">
                    <step.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed mb-4">{step.description}</p>
                  <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
                    <span className="text-sm font-semibold text-secondary">{step.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Guarantee Badge */}
          <div 
            className={`flex items-center justify-center gap-4 bg-gradient-to-r from-secondary/10 via-secondary/5 to-secondary/10 border-2 border-secondary/20 px-8 py-6 rounded-[1.25rem] shadow-[var(--shadow-soft)] transition-all duration-320 ease-out ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'
            }`}
            style={{ transitionDelay: '470ms' }}
          >
            <Shield className="w-10 h-10 text-secondary" strokeWidth={1.5} />
            <div>
              <div className="text-lg md:text-xl font-bold text-foreground">Garantie "Tranquillité d'esprit"</div>
              <div className="text-muted-foreground font-body">Ajustements gratuits 30 jours après installation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
