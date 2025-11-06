import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Star, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
const ArmoiresQuebec = () => {
  const {
    ref: heroRef,
    isVisible: heroVisible
  } = useScrollReveal();
  const {
    ref: introRef,
    isVisible: introVisible
  } = useScrollReveal();
  const {
    ref: servicesRef,
    isVisible: servicesVisible
  } = useScrollReveal();
  const {
    ref: regionsRef,
    isVisible: regionsVisible
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
      metaDescription.setAttribute('content', 'Armoires cuisine Québec. Service Québec, Lévis, Beauport. 100% de satisfaction. Fabrication locale, délai respecté. Consultation gratuite → 581-397-3587');
    }
    document.title = "Armoires sur mesure Québec | 100% satisfaction | Fabrication locale";
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = 'https://armoirequaliprixmontreal.com/armoires-quebec';
    document.head.appendChild(canonical);
    return () => {
      document.head.removeChild(canonical);
    };
  }, []);
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };
  const regions = ["Québec", "Lévis", "Beauport", "Charlesbourg", "Sainte-Foy", "Limoilou", "Cap-Rouge", "L'Ancienne-Lorette"];
  return <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumbs */}
      <section className="pt-24 pb-6 bg-background border-b">
        
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary text-white">
        <div className="container px-4 mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6">
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">Région de Québec</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Armoires sur mesure à Québec – Entreprise québécoise fière
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            De Québec à Lévis, service complet. +25 ans d'expérience au service des familles d'ici.
          </p>
          <Button size="lg" onClick={() => window.location.href = 'tel:5813973587'} className="h-14 px-8 text-lg bg-secondary text-white hover:bg-secondary/90">
            <Phone className="w-5 h-5 mr-2" />
            Obtiens ta consultation gratuite – Québec
          </Button>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto max-w-6xl">
          {/* Intro */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Service clé en main dans toute la région de Québec
            </h2>
            <p className="text-xl text-muted-foreground">
              Depuis +25 ans, on aide les familles québécoises à créer leur cuisine idéale. 
              Qualité haut de gamme, prix d'entrepôt, livraison en 2 semaines.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>Garantie 30 ans</CardTitle>
                <CardDescription>
                  Protection totale sur tous nos produits. Contreplaqué supérieur, pas de compromis.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>Consultation gratuite</CardTitle>
                <CardDescription>
                  Consultation en ligne par vidéo. Estimation détaillée en 48h. Aucune pression, juste des conseils pro.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>Livraison rapide</CardTitle>
                <CardDescription>
                  2 semaines max. Livraison incluse dans toute la région de Québec et Lévis.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Regions Served */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Secteurs desservis</h3>
              <div className="grid grid-cols-2 gap-3">
                {regions.map((region, index) => <div key={index} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span>{region}</span>
                  </div>)}
              </div>
              <p className="mt-6 text-muted-foreground">
                Ton secteur n'est pas listé? <strong className="text-foreground">Appelle-nous!</strong> On livre dans toute la région.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Pourquoi choisir QualiPrix?</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Entreprise 100% québécoise.</strong> On comprend les besoins des familles d'ici.
                </p>
                <p>
                  <strong className="text-foreground">Prix d'entrepôt garantis.</strong> On élimine les intermédiaires pour te donner le meilleur prix.
                </p>
                <p>
                  <strong className="text-foreground">Qualité sans compromis.</strong> Contreplaqué solide, quincaillerie pro, finitions impeccables.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Ce que nos clients de Québec disent</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />)}
                  </div>
                  <CardTitle className="text-lg">Hanane Felhane</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic text-sm">
                    "Très bon service et excellente qualité des armoires ! Je suis entièrement satisfaite et je recommande fortement."
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />)}
                  </div>
                  <CardTitle className="text-lg">Samia Ghilas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic text-sm">
                    "Le vendeur a fait preuve d'une grande écoute et de professionnalisme. Il a fourni des explications claires et un excellent encadrement. Merci !"
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />)}
                  </div>
                  <CardTitle className="text-lg">Belkacem Massi</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic text-sm">
                    "Excellent service, rapide et très efficace ! Produit de qualité, je les conseille fortement : des gens de confiance."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Final */}
          <div className="text-center bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary/20 p-12 rounded-[1.25rem]">
            <h3 className="text-3xl font-bold mb-4">Prêt à transformer ta cuisine?</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Consultation gratuite, design 3D en 48h, livraison en 2 semaines. Simple et sans stress.
            </p>
            <Button size="lg" onClick={scrollToContact} className="h-14 px-8 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              581-397-3587 – Parle-nous de ton projet
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default ArmoiresQuebec;