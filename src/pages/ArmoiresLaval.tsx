import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, CheckCircle, Star } from "lucide-react";

const ArmoiresLaval = () => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  useEffect(() => {
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Cuisines sur mesure Laval. +50 projets livrés à Chomedey, Vimont, Sainte-Rose. Qualité boutique, prix d\'entrepôt. Évaluation gratuite → 581-397-3587');
    }

    document.title = "Armoires sur mesure Laval | +50 projets 5⭐ | Service rapide";

    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = 'https://armoirequaliprixmontreal.com/armoires-laval';
    document.head.appendChild(canonical);

    return () => {
      document.head.removeChild(canonical);
    };
  }, []);

  const neighborhoods = [
    "Chomedey", "Vimont", "Sainte-Rose", "Auteuil",
    "Laval-des-Rapides", "Pont-Viau", "Sainte-Dorothée", "Duvernay"
  ];

  const testimonials = [
    {
      name: "Sophie Dumas",
      area: "Chomedey",
      text: "Service impeccable, prix honnête. Ma cuisine est magnifique!",
      rating: 5
    },
    {
      name: "Martin Gagnon",
      area: "Vimont",
      text: "Livré en 4 semaines comme promis. Je recommande à 100%!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-primary text-white">
        <div className="container px-4 mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6">
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">Laval</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Armoires sur mesure à Laval – Qualité locale garantie
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Chomedey, Vimont, Sainte-Rose, Auteuil. Service rapide, prix clairs.
          </p>
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="h-14 px-8 text-lg bg-white text-primary hover:bg-white/90"
          >
            <Phone className="w-5 h-5 mr-2" />
            Plan gratuit à Laval – 581-397-3587
          </Button>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto max-w-6xl">
          
          {/* Neighborhoods Served */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Zones desservies à Laval
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {neighborhoods.map((neighborhood, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="p-4 text-center">
                    <MapPin className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <p className="font-semibold">{neighborhood}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Pourquoi choisir QualiPrix à Laval?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Service local rapide</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Livraison express à Laval. On connaît le territoire comme notre poche.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Prix compétitifs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Qualité boutique à prix d'entrepôt. Zéro compromis sur la qualité.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Garantie 30 ans</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Confiance totale. Nos armoires sont garanties trois décennies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Nos clients à Laval témoignent
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="mb-4 italic text-muted-foreground">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.area}, Laval</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-gradient-to-br from-primary/10 to-secondary/10 p-8 md:p-12 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">
              Prêt pour ta nouvelle cuisine à Laval?
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Consultation gratuite, plan 3D offert. Zéro engagement.
            </p>
            <Button size="lg" onClick={scrollToContact} className="h-14 px-8 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Contacte-nous maintenant – 581-397-3587
            </Button>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArmoiresLaval;
