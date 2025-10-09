import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ruler, Package, Truck } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Ruler,
      title: "Consultation & Design 3D",
      description: "Plans 3D détaillés et adaptés à chaque espace. Visualisez votre cuisine avant l'achat."
    },
    {
      icon: Package,
      title: "Mesurage & préparation",
      description: "Service de mesurage professionnel sur place. Prise de mesures précise et préparation complète."
    },
    {
      icon: Truck,
      title: "Livraison & installation",
      description: "Rapidité, propreté et efficacité. Installation professionnelle en 10-15 jours."
    }
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-12 md:py-20 lg:py-24 bg-gradient-animated relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="blob-decoration w-96 h-96 bg-primary/5 top-20 left-10" style={{ animationDelay: '0s' }} />
      <div className="blob-decoration w-80 h-80 bg-secondary/5 bottom-20 right-10" style={{ animationDelay: '3s' }} />
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nos services
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
            Un accompagnement de A à Z, de la conception initiale au choix des modèles et à la livraison
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 rounded-[1.25rem]">
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

        <div className="text-center">
          <Button 
            size="lg"
            onClick={scrollToContact}
          >
            Réservez une consultation gratuite
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
