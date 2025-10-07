import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChefHat, Ruler, Palette, Package, Wrench, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "Conception et design",
      description: "Plans 3D détaillés et adaptés à votre espace, optimisant chaque centimètre pour créer la cuisine de vos rêves."
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Armoires de cuisine",
      description: "Armoires en contreplaqué solide avec garantie jusqu'à 30 ans. Qualité supérieure au prix d'entrepôt."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Comptoirs",
      description: "Large sélection de comptoirs: quartz, granit, stratifié. Matériaux durables et designs modernes."
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Livraison rapide",
      description: "Délais de 10 à 15 jours seulement. Nos partenaires fiables assurent une livraison ponctuelle et sécurisée."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Installation professionnelle",
      description: "Équipe d'installateurs expérimentés pour une finition impeccable et un service clé en main."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Service personnalisé",
      description: "Accompagnement de A à Z: conception, sélection, commande et suivi jusqu'à la livraison complète."
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Solutions complètes pour votre cuisine, de la conception à l'installation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
