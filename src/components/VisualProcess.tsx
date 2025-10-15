import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle } from "lucide-react";
import realisationCuisineIlotBois from "@/assets/realisation-cuisine-ilot-bois-comptoir-repentigny.jpg";
import realisationCuisineOuverte from "@/assets/realisation-cuisine-ouverte-escalier-montreal.jpg";
import realisationCuisineBlancheIlot from "@/assets/realisation-cuisine-blanche-ilot-quartz-laval.jpg";

const VisualProcess = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  const steps = [
    {
      number: 1,
      title: "Consultation gratuite",
      description: "Appel conférence vidéo avec nos experts, on évalue ton projet, on discute de tes besoins",
      icon: "📏",
      duration: "1 heure"
    },
    {
      number: 2,
      title: "Design 3D personnalisé",
      description: "Tu vois ton projet en 3D avant la production",
      icon: "🎨",
      duration: "2-3 jours",
      image: realisationCuisineIlotBois
    },
    {
      number: 3,
      title: "Fabrication locale",
      description: "Armoires fabriquées au Québec, qualité contrôlée",
      icon: "🏭",
      duration: "3 semaines"
    },
    {
      number: 4,
      title: "Installation professionnelle",
      description: "Notre équipe installe tout, tu profites!",
      icon: "🔧",
      duration: "2-4 jours",
      image: realisationCuisineOuverte
    },
    {
      number: 5,
      title: "Résultat final",
      description: "Ta nouvelle cuisine, prête à vivre!",
      icon: "✨",
      image: realisationCuisineBlancheIlot
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div 
          className={`text-center mb-16 transition-all duration-320 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Notre processus étape par étape
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
            De la première consultation à ta cuisine de rêve
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className={`relative mb-12 last:mb-0 transition-all duration-320 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Ligne verticale (sauf dernier) */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20 hidden md:block" />
              )}

              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Numéro et icône */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-[var(--shadow-elegant)]">
                    {step.number}
                  </div>
                  <div className="absolute -bottom-1 -right-1 text-2xl">
                    {step.icon}
                  </div>
                </div>

                {/* Contenu */}
                <div className="flex-grow">
                  <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                    <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                    <span className="inline-flex items-center gap-2 bg-muted px-3 py-1 rounded-full text-sm">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-lg text-muted-foreground mb-4">{step.description}</p>
                  
                  {/* Image si disponible */}
                  {step.image && (
                    <div className="rounded-xl overflow-hidden shadow-[var(--shadow-soft)] mt-4">
                      <img 
                        src={step.image}
                        alt={`Étape ${step.number}: ${step.title} - Armoires Qualiprix`}
                        className="w-full h-48 md:h-64 object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualProcess;
