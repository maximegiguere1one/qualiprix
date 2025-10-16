import { Card, CardContent } from "@/components/ui/card";
import { Ruler, Palette, Truck, HardHat, Shield } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Process = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  const steps = [
    {
      number: "1",
      icon: Ruler,
      title: "Consultation gratuite",
      description: "Appel vidéo 100% gratuit (45 min). Tu nous montres ta cuisine actuelle sur ton cell, on discute de tes rêves et de ton budget réel. Zéro pression.",
      duration: "1h, gratuit, sans pression"
    },
    {
      number: "2",
      icon: Palette,
      title: "Rencontre design",
      description: "Estimation détaillée livrée en 48h par courriel. Tu VOIS ta future cuisine avant de dire oui. Modifications illimitées jusqu'à ce que ce soit parfait.",
      duration: "Révisions illimitées"
    },
    {
      number: "3",
      icon: Truck,
      title: "Livraison",
      description: "Préparé et assemblé au Québec avec du VRAI contreplaqué ¾\" (pas du MDF cheap). Livré directement chez toi en 10-15 jours.",
      duration: "10-15 jours"
    },
    {
      number: "4",
      icon: HardHat,
      title: "Installation",
      description: "Installées par des pros certifiés qu'on connaît personnellement. Notre équipe d'installateurs partage nos valeurs : travail bien fait, respect du client et souci du détail.",
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-4">
              Processus clé en main – sans stress, sans surprises
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-body px-4">
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
            className={`flex flex-col items-center justify-center gap-4 bg-gradient-to-r from-secondary/10 via-secondary/5 to-secondary/10 border-2 border-secondary/20 px-8 py-6 rounded-[1.25rem] shadow-[var(--shadow-soft)] transition-all duration-320 ease-out ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'
            }`}
            style={{ transitionDelay: '470ms' }}
          >
            <Shield className="w-10 h-10 text-secondary" strokeWidth={1.5} />
            <div className="text-center">
              <div className="text-lg md:text-xl font-bold text-foreground">Garantie "On répare ce qui cloche" ✊</div>
              <div className="text-muted-foreground font-body">Ajustements gratuits 30 jours après installation + garantie 30 ans sur les matériaux</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
