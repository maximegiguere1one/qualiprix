import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock, DollarSign } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PriceCalculator from "@/components/PriceCalculator";

const PrixDelais = () => {
  const pricingTiers = [
    {
      name: "Essentiel",
      price: "12 000$ - 18 000$",
      features: [
        "Mélamine haute densité",
        "Quincaillerie standard",
        "Design sobre et efficace",
        "Charnières de qualité"
      ],
      delay: "15 jours",
      popular: false
    },
    {
      name: "Standard",
      price: "18 000$ - 30 000$",
      features: [
        "Polymère 2 tons au choix",
        "Soft-close premium",
        "Comptoir quartz inclus",
        "Design personnalisé"
      ],
      delay: "15 jours",
      popular: true
    },
    {
      name: "Premium",
      price: "30 000$ - 45 000$+",
      features: [
        "Laque européenne haute qualité",
        "Quincaillerie Blum",
        "Quartz premium (4 choix)",
        "Design sur mesure complet",
        "Finitions ultra-luxe"
      ],
      delay: "4 semaines",
      popular: false
    }
  ];

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary text-white">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Prix et délais – Armoires sur mesure au Québec
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Transparent, clair, sans surprise. C'est ça, la différence QualiPrix.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Nos gammes de prix
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {pricingTiers.map((tier, index) => (
                <Card 
                  key={index}
                  className={`relative ${tier.popular ? 'border-4 border-secondary shadow-[var(--shadow-elegant)]' : 'border-2'}`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-6 py-1 rounded-full text-sm font-bold">
                      ⭐ Plus populaire
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <CardDescription className="text-3xl font-bold text-primary mt-2">
                      {tier.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {tier.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-5 h-5" />
                      <span>Délai: <span className="font-bold text-foreground">{tier.delay}</span></span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mb-16">
              <Button size="lg" onClick={scrollToContact} className="h-14 px-8 text-lg">
                <DollarSign className="w-5 h-5 mr-2" />
                Obtiens ton prix clair aujourd'hui
              </Button>
            </div>

            {/* Price Calculator */}
            <div className="mb-16">
              <PriceCalculator />
            </div>

            {/* FAQ Pricing */}
            <div className="max-w-3xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold text-center mb-8">Questions sur les prix</h3>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Qu'est-ce qui est inclus dans le prix?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Le prix comprend: armoires complètes, quincaillerie, livraison au Québec. 
                    Non inclus: installation (nous référons des installateurs certifiés), électroménagers, plomberie.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Comment fonctionnent les paiements?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    500$ d'acompte pour démarrer. Le solde est dû 48h avant la livraison. 
                    Paiements acceptés: virement Interac, chèque, comptant.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pourquoi des délais si rapides?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    On travaille directement avec notre réseau de fabricants québécois. 
                    Pas d'intermédiaires = délais respectés, toujours.
                  </p>
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

export default PrixDelais;
