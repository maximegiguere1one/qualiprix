import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ArmoiresRiveSud = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();
  const { ref: testimonialsRef, isVisible: testimonialsVisible } = useScrollReveal();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal();
  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Cuisines sur mesure Rive-Sud. Longueuil, Brossard, St-Jean. 100% de satisfaction 5⭐. Qualité garantie 30 ans. Consultation gratuite → 581-397-3587');
    }
    document.title = "Armoires sur mesure Rive-Sud | 100% satisfaction 5⭐ | Garantie 30 ans";
    
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = 'https://armoirequaliprixmontreal.com/armoires-rive-sud';
    document.head.appendChild(canonical);

    return () => {
      document.head.removeChild(canonical);
    };
  }, []);

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  const cities = [
    "Longueuil", "Brossard", "Saint-Jean-sur-Richelieu", "Chambly",
    "Saint-Hubert", "Boucherville", "Varennes", "Saint-Bruno"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-primary text-white">
        <div className="container px-4 mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6">
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">Rive-Sud</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Armoires sur mesure sur la Rive-Sud – Qualité locale garantie
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Longueuil, Brossard, Saint-Jean. Service clé en main, délai respecté.
          </p>
          <Button size="lg" onClick={scrollToContact} className="h-14 px-8 text-lg bg-white text-primary hover:bg-white/90">
            <Phone className="w-5 h-5 mr-2" />
            Consultation gratuite – Rive-Sud
          </Button>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Villes desservies sur la Rive-Sud</h2>
              <div className="grid grid-cols-2 gap-3">
                {cities.map((city, index) => (
                  <div key={index} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span>{city}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">L'avantage QualiPrix Rive-Sud</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  100% de satisfaction sur la Rive-Sud. De Longueuil à Saint-Jean, on livre partout.
                </p>
                <p>
                  <strong className="text-foreground">Pas de frais de transport cachés.</strong> Livraison incluse dans le prix.
                </p>
                <p>
                  <strong className="text-foreground">Installation pro disponible.</strong> Partenaires certifiés sur la Rive-Sud.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Témoignages Rive-Sud</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <CardTitle>Projet à Brossard</CardTitle>
                  <CardDescription>Cuisine complète polymère, 21 000$</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">
                    "Service A1. Livré en 15 jours comme promis. On adore!"
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <CardTitle>Projet à Saint-Bruno</CardTitle>
                  <CardDescription>Cuisine sur mesure, 28 500$</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">
                    "Prix honnête, qualité exceptionnelle. Merci l'équipe!"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Final */}
          <div className="text-center bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 p-12 rounded-[1.25rem]">
            <h3 className="text-3xl font-bold mb-4">Ta cuisine de rêve t'attend</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Rencontre gratuite, design 3D, livraison rapide. C'est simple avec QualiPrix.
            </p>
            <Button size="lg" onClick={scrollToContact} className="h-14 px-8 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Contacte-nous maintenant
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArmoiresRiveSud;
