import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ArmoiresRiveNord = () => {
  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Armoires cuisine Rive-Nord. +80 projets à Terrebonne, Repentigny, Mascouche. Livraison 4 semaines garantie. Soumission gratuite → 581-397-3587');
    }
    document.title = "Armoires sur mesure Rive-Nord | +80 projets | Livraison rapide";
    
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = 'https://armoirequaliprixmontreal.com/armoires-rive-nord';
    document.head.appendChild(canonical);

    return () => {
      document.head.removeChild(canonical);
    };
  }, []);

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  const cities = [
    "Terrebonne", "Repentigny", "Mascouche", "Saint-Jérôme", 
    "Mirabel", "Blainville", "Boisbriand", "Sainte-Thérèse"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumbs */}
      <section className="pt-24 pb-6 bg-background border-b">
        <div className="container px-4 mx-auto max-w-6xl">
          <Breadcrumb 
            items={[
              { label: "Nos régions", href: "/zones-desservies" },
              { label: "Rive-Nord" }
            ]} 
          />
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary text-white">
        <div className="container px-4 mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6">
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">Rive-Nord</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Armoires sur mesure sur la Rive-Nord – Service local rapide
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            De Terrebonne à Saint-Jérôme, on livre en 4 semaines. Qualité garantie, prix d'entrepôt.
          </p>
          <Button size="lg" onClick={scrollToContact} className="h-14 px-8 text-lg bg-white text-primary hover:bg-white/90">
            <Phone className="w-5 h-5 mr-2" />
            Demande ta consultation gratuite – Rive-Nord
          </Button>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Villes desservies sur la Rive-Nord</h2>
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
              <h2 className="text-3xl font-bold mb-6">Pourquoi QualiPrix sur la Rive-Nord?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  On connaît la Rive-Nord comme le fond de notre poche. +200 projets réalisés de Terrebonne à Saint-Jérôme.
                </p>
                <p>
                  <strong className="text-foreground">Livraison rapide incluse.</strong> En 4 semaines max, ta cuisine est installée.
                </p>
                <p>
                  <strong className="text-foreground">Prix clairs, sans surprise.</strong> Aucun frais caché. Ce qu'on te dit, c'est ce que tu paies.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Clients satisfaits sur la Rive-Nord</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <CardTitle>Projet à Terrebonne</CardTitle>
                  <CardDescription>Cuisine moderne deux-tons, 24 500$</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">
                    "Livraison en 3 semaines, installation impeccable. Équipe super professionnelle!"
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
                  <CardTitle>Projet à Mascouche</CardTitle>
                  <CardDescription>Cuisine premium laque, 32 000$</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">
                    "Qualité incroyable, prix honnête. Exactement ce qu'on voulait."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Final */}
          <div className="text-center bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary/20 p-12 rounded-[1.25rem]">
            <h3 className="text-3xl font-bold mb-4">Prêt pour ta nouvelle cuisine?</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Consultation gratuite à domicile, plan 3D en 48h, livraison en 4 semaines.
            </p>
            <Button size="lg" onClick={scrollToContact} className="h-14 px-8 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              581-397-3587 – Appelle maintenant
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArmoiresRiveNord;
