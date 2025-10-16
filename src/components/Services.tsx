import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ruler, Package, Truck } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Services = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  
  const services = [
    {
      icon: Ruler,
      title: "Consultation & Design 3D",
      description: "Plans 3D détaillés et adaptés à chaque espace. Visualisez votre cuisine avant l'achat."
    },
    {
      icon: Package,
      title: "Mesurage & préparation",
      description: "On vient chez toi mesurer GRATUITEMENT. Au millimètre près. Photos, mesures, notes. Tu n'as rien à faire."
    },
    {
      icon: Truck,
      title: "Livraison & installation",
      description: "Livré en 3 semaines (moyenne réelle 2024). Installation en 1-2 jours selon la taille. On nettoie tout après."
    }
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} id="services" className="py-12 md:py-20 lg:py-24 bg-gradient-animated relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="blob-decoration w-96 h-96 bg-primary/5 top-20 left-10" style={{ animationDelay: '0s' }} />
      <div className="blob-decoration w-80 h-80 bg-secondary/5 bottom-20 right-10" style={{ animationDelay: '3s' }} />
      <div className="container px-4 mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nos services
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto transition-all duration-1000 delay-100">
            Un accompagnement de A à Z, de la conception initiale au choix des modèles et à la livraison
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`border-none shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-800 rounded-[1.25rem] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${150 + index * 100}ms` }}
            >
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary/10 flex items-center justify-center">
                  <service.icon className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center transition-all duration-800 delay-[500ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6"
          >
            <span className="sm:hidden">📞 Parler à un expert maintenant</span>
            <span className="hidden sm:inline">📞 Parler à un expert maintenant (gratuit, 2 min)</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
