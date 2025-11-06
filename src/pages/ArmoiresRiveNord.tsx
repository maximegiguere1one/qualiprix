import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
const ArmoiresRiveNord = () => {
  const {
    ref: heroRef,
    isVisible: heroVisible
  } = useScrollReveal();
  const {
    ref: contentRef,
    isVisible: contentVisible
  } = useScrollReveal();
  const {
    ref: testimonialsRef,
    isVisible: testimonialsVisible
  } = useScrollReveal();
  const {
    ref: ctaRef,
    isVisible: ctaVisible
  } = useScrollReveal();
  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Armoires cuisine Rive-Nord. 100% de satisfaction à Terrebonne, Repentigny, Mascouche. Livraison 2 semaines garantie. Soumission gratuite → 581-397-3587');
    }
    document.title = "Armoires sur mesure Rive-Nord | 100% satisfaction | Livraison rapide";
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
  const cities = ["Terrebonne", "Repentigny", "Mascouche", "Saint-Jérôme", "Mirabel", "Blainville", "Boisbriand", "Sainte-Thérèse"];
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumbs */}
      <section className="pt-24 pb-6 bg-background border-b">
        
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
            De Terrebonne à Saint-Jérôme, on livre en 2 semaines. Qualité garantie, prix d'entrepôt.
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
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-2 border-primary/10 bg-gradient-to-br from-background to-primary/5 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-secondary/20">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">Villes desservies sur la Rive-Nord</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {cities.map((city, index) => <div key={index} className="flex items-center gap-2 p-2 rounded-lg hover:bg-secondary/10 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                      <span className="font-medium">{city}</span>
                    </div>)}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-secondary/20 bg-gradient-to-br from-background to-secondary/5 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <Star className="w-6 h-6 text-primary fill-primary" />
                  </div>
                  <CardTitle className="text-2xl">Pourquoi QualiPrix sur la Rive-Nord?</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-base leading-relaxed">
                    On connaît la Rive-Nord comme le fond de notre poche. <span className="font-bold text-foreground">Taux de satisfaction 100%.</span>
                  </p>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-base leading-relaxed">
                      <strong className="text-foreground">Livraison rapide incluse.</strong> En 2 semaines max, ta cuisine est installée.
                    </p>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/5 border border-secondary/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <p className="text-base leading-relaxed">
                      <strong className="text-foreground">Prix clairs, sans surprise.</strong> Aucun frais caché. Ce qu'on te dit, c'est ce que tu paies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Clients satisfaits sur la Rive-Nord</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />)}
                  </div>
                  <CardTitle>Jo</CardTitle>
                  <CardDescription className="flex items-center gap-2 text-secondary">
                    <MapPin className="w-3 h-3" />
                    Client vérifié
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic leading-relaxed">
                    "Super service et très belle cuisine, rapport qualité-prix excellent. Livraison rapide et sans souci."
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />)}
                  </div>
                  <CardTitle>Belkacem Massi</CardTitle>
                  <CardDescription className="flex items-center gap-2 text-secondary">
                    <MapPin className="w-3 h-3" />
                    Client vérifié
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic leading-relaxed">
                    "Excellent service, rapide et très efficace ! Produit de qualité, je les conseille fortement : des gens de confiance."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Final */}
          <div className="text-center bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary/20 p-12 rounded-[1.25rem]">
            <h3 className="text-3xl font-bold mb-4">Prêt pour ta nouvelle cuisine?</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Consultation gratuite à domicile, estimation en 48h, livraison en 2 semaines.
            </p>
            <Button size="lg" onClick={scrollToContact} className="h-14 px-8 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              581-397-3587 – Appelle maintenant
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default ArmoiresRiveNord;