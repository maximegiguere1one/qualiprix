import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ZonesDesservies = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: regionsHeaderRef, isVisible: regionsHeaderVisible } = useScrollReveal();
  const { ref: regionsGridRef, isVisible: regionsGridVisible } = useScrollReveal();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal();
  const { ref: mapRef, isVisible: mapVisible } = useScrollReveal();
  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Zones desservies armoires cuisine. Montréal, Laval, Rive-Nord, Rive-Sud, Québec. Livraison rapide partout au Québec. Carte interactive → 581-397-3587');
    }
    document.title = "Zones desservies | Armoires sur mesure partout au Québec";
    
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = 'https://armoirequaliprixmontreal.com/zones-desservies';
    document.head.appendChild(canonical);

    return () => {
      document.head.removeChild(canonical);
    };
  }, []);
  const regions = [
    {
      name: "Montréal",
      description: "Service complet: Plateau, Rosemont, Villeray, NDG, Côte-des-Neiges, Ahuntsic",
      highlights: ["Livraison rapide", "Installation disponible", "Consultation à domicile gratuite"],
      icon: "🏙️"
    },
    {
      name: "Laval",
      description: "Toutes les zones de Laval couvertes: Chomedey, Vimont, Sainte-Rose, Auteuil",
      highlights: ["Service clé en main", "Délai garanti 15 jours", "Équipe locale"],
      icon: "🏘️"
    },
    {
      name: "Rive-Nord",
      description: "Terrebonne, Repentigny, Saint-Jérôme, Mirabel, Mascouche, Blainville",
      highlights: ["Livraison incluse", "Support après-vente", "Consultation gratuite"],
      icon: "🏞️"
    },
    {
      name: "Rive-Sud",
      description: "Longueuil, Brossard, Saint-Jean-sur-Richelieu, Chambly, Saint-Hubert",
      highlights: ["Installation pro", "Prix d'entrepôt", "Consultation gratuite"],
      icon: "🌳"
    },
    {
      name: "Laurentides",
      description: "Mont-Tremblant, Sainte-Agathe, Val-David, Saint-Sauveur, Sainte-Adèle",
      highlights: ["Consultation gratuite", "Transport inclus", "Équipe expérimentée"],
      icon: "⛰️"
    },
    {
      name: "Montérégie",
      description: "Granby, Beloeil, Sorel-Tracy, Varennes, Sainte-Julie, Mont-Saint-Hilaire",
      highlights: ["Livraison rapide", "Service local", "Prix transparent"],
      icon: "🌾"
    }
  ];

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary text-white relative overflow-visible">
        {/* Decorative blobs with animation */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-blob-float" style={{ animationDelay: '0s' }} />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-blob-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/4 w-36 h-36 bg-white rounded-full blur-3xl animate-blob-float" style={{ animationDelay: '4s' }} />
        </div>
        <div className="container px-4 mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Zones desservies – Service clé en main au Québec
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto font-semibold leading-relaxed opacity-95">
            On livre partout au Québec. Service local, qualité constante, prix imbattables.
          </p>
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 px-8 py-4 rounded-full shadow-[var(--shadow-soft)] hover:bg-white/20 transition-all duration-300">
            <MapPin className="w-6 h-6" />
            <span className="font-semibold text-lg">25 ans dans le domaine</span>
          </div>
        </div>
      </section>

      {/* Regions Grid */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Nos régions de service
            </h2>
            <p className="text-center text-muted-foreground text-lg md:text-xl mb-16 max-w-2xl mx-auto">
              Découvre toutes les zones où nous offrons nos services d'armoires sur mesure
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {regions.map((region, index) => (
                <Card key={index} className="border-2 border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] hover:scale-[1.02] transition-all duration-300 hover:border-secondary/50 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{region.icon}</span>
                      <CardTitle className="text-3xl font-bold">{region.name}</CardTitle>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {region.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {region.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-muted-foreground">
                          <div className="w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(var(--secondary),0.3)]" />
                          <span className="text-sm font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-br from-secondary/10 via-primary/5 to-secondary/5 border-2 border-secondary/30 p-12 rounded-[1.5rem] max-w-3xl mx-auto shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] transition-all duration-500">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Ta région n'est pas listée?
                </h3>
                <p className="text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed max-w-xl mx-auto">
                  On livre partout au Québec. Contacte-nous pour confirmer la disponibilité dans ta région.
                </p>
                <Button size="lg" onClick={scrollToContact} className="h-16 px-10 text-lg font-semibold shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
                  <Phone className="w-6 h-6 mr-3" />
                  Appelle-nous maintenant
                </Button>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-24">
              <Card className="overflow-hidden shadow-[var(--shadow-elegant)] border-2">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8">
                  <CardTitle className="text-3xl font-bold">Notre zone de service</CardTitle>
                  <CardDescription className="text-lg">Du Grand Montréal jusqu'aux Laurentides et Montérégie</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="bg-muted h-96 flex items-center justify-center text-muted-foreground">
                    <div className="text-center space-y-4">
                      <MapPin className="w-20 h-20 mx-auto text-secondary" />
                      <p className="font-semibold text-xl">Carte interactive à venir</p>
                      <p className="text-base">En attendant, contacte-nous pour confirmer ton secteur</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ZonesDesservies;
