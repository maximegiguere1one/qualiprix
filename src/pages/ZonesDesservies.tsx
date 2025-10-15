import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ZonesDesservies = () => {
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
      highlights: ["Livraison incluse", "Support après-vente", "Garantie 30 ans"],
      icon: "🏞️"
    },
    {
      name: "Rive-Sud",
      description: "Longueuil, Brossard, Saint-Jean-sur-Richelieu, Chambly, Saint-Hubert",
      highlights: ["Installation pro", "Prix d'entrepôt", "Design 3D gratuit"],
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
      <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-primary text-white">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Zones desservies – Service clé en main au Québec
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            On livre partout au Québec. Service local, qualité constante, prix imbattables.
          </p>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full">
            <MapPin className="w-5 h-5" />
            <span className="font-bold">+1000 projets à travers le Québec</span>
          </div>
        </div>
      </section>

      {/* Regions Grid */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Nos régions de service
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {regions.map((region, index) => (
                <Card key={index} className="border-2 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-4xl">{region.icon}</span>
                      <CardTitle className="text-2xl">{region.name}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {region.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {region.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-secondary" />
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 p-8 rounded-[1.25rem] max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Ta région n'est pas listée?</h3>
                <p className="text-muted-foreground mb-6">
                  On livre partout au Québec. Contacte-nous pour confirmer la disponibilité dans ta région.
                </p>
                <Button size="lg" onClick={scrollToContact} className="h-14 px-8 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Appelle-nous maintenant
                </Button>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-16">
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                  <CardTitle>Notre zone de service</CardTitle>
                  <CardDescription>Du Grand Montréal jusqu'aux Laurentides et Montérégie</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="bg-muted h-96 flex items-center justify-center text-muted-foreground">
                    <div className="text-center space-y-2">
                      <MapPin className="w-16 h-16 mx-auto" />
                      <p className="font-semibold">Carte interactive à venir</p>
                      <p className="text-sm">En attendant, contacte-nous pour confirmer ton secteur</p>
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
