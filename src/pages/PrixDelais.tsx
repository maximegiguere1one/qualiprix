import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock, DollarSign } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickEstimate from "@/components/QuickEstimate";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PrixDelais = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: factorsHeaderRef, isVisible: factorsHeaderVisible } = useScrollReveal();
  const { ref: factorsGridRef, isVisible: factorsGridVisible } = useScrollReveal();
  const { ref: testimonialsRef, isVisible: testimonialsVisible } = useScrollReveal();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal();
  const { ref: estimateRef, isVisible: estimateVisible } = useScrollReveal();
  const { ref: faqRef, isVisible: faqVisible } = useScrollReveal();
  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Prix clairs sans surprise. Délai 2 semaines garanti. Découvre ce qui influence ton investissement cuisine au Québec. Soumission gratuite en 24h.');
    }
    document.title = "Prix & Délais | Transparence totale | Livraison 2 semaines";
    
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = 'https://armoirequaliprixmontreal.com/prix-delais';
    document.head.appendChild(canonical);

    return () => {
      document.head.removeChild(canonical);
    };
  }, []);

  const priceFactors = [
    {
      icon: "📏",
      title: "Dimensions de ta cuisine",
      description: "Petite, moyenne, grande? Nombre de pieds linéaires d'armoires?",
    },
    {
      icon: "🎨",
      title: "Finition choisie",
      description: "Mélamine haute densité, polymère deux-tons, ou laque européenne?",
    },
    {
      icon: "💎",
      title: "Comptoir",
      description: "Quartz inclus? Quel type et quelle surface totale?",
    },
    {
      icon: "🔧",
      title: "Complexité du projet",
      description: "Îlot? Garde-manger intégré? Électroménagers encastrés?",
    },
    {
      icon: "🚚",
      title: "Livraison et installation",
      description: "Distance de livraison et complexité de l'installation",
    },
    {
      icon: "⚡",
      title: "Options premium",
      description: "Éclairage LED, quincaillerie Blum, organisateurs intérieurs",
    },
  ];

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary via-primary to-secondary text-white overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float-up"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float-up" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container px-4 mx-auto text-center relative z-10">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6 animate-fade-in">
            <DollarSign className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide uppercase">Transparence garantie</span>
          </div>
          
          {/* Main heading with hierarchy */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="block text-3xl md:text-4xl font-semibold mb-3 text-white/90">Prix et délais</span>
            <span className="block bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Transparence totale, sans surprise
            </span>
          </h1>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white/70"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/50"></div>
          </div>
          
          {/* Subtitle with emphasis */}
          <p className="text-lg md:text-2xl lg:text-3xl mb-4 max-w-4xl mx-auto font-light leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Chaque projet est unique.
          </p>
          <p className="text-base md:text-xl lg:text-2xl max-w-3xl mx-auto text-white/90 font-normal animate-fade-in" style={{ animationDelay: '0.4s' }}>
            On te donne un prix clair <span className="font-bold text-white border-b-2 border-white/50">APRÈS avoir vu</span> ton espace.
          </p>
        </div>
      </section>

      {/* Price Factors */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Ce qui influence ton investissement
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Pas de fourchette vague. On évalue TON projet spécifiquement et on te donne un prix exact en 24h.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {priceFactors.map((factor, index) => (
                <Card key={index} className="border-2">
                  <CardHeader>
                    <div className="text-5xl mb-3">{factor.icon}</div>
                    <CardTitle className="text-xl">{factor.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{factor.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Testimonials about pricing */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8">Nos clients parlent de nos prix</h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <Card className="border-2">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500">⭐</span>
                      ))}
                    </div>
                    <p className="mb-4 italic">
                      "J'avais peur que ça coûte une fortune. Leur prix était 40% moins cher que la compétition pour la même qualité!"
                    </p>
                    <p className="font-semibold">— Marie, Laval</p>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500">⭐</span>
                      ))}
                    </div>
                    <p className="mb-4 italic">
                      "Prix honnête, pas de coûts cachés. Exactement ce qu'ils avaient annoncé au début!"
                    </p>
                    <p className="font-semibold">— Jean, Terrebonne</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mb-16">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl max-w-3xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Obtiens TON prix en 24h – pas une fourchette vague
                </h3>
                <p className="text-muted-foreground mb-6">
                  Évaluation gratuite, sans engagement. On regarde ton espace et on te donne un prix exact.
                </p>
                <Button size="lg" onClick={scrollToContact} className="h-14 px-8 text-lg">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Demande ton évaluation gratuite
                </Button>
              </div>
            </div>

            {/* Quick Estimate */}
            <div className="mb-16">
              <QuickEstimate />
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
