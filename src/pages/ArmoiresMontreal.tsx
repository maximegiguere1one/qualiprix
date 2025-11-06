import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ArmoiresMontreal = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: introRef, isVisible: introVisible } = useScrollReveal();
  const { ref: neighborhoodRef, isVisible: neighborhoodVisible } = useScrollReveal();
  const { ref: whyUsRef, isVisible: whyUsVisible } = useScrollReveal();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollReveal();
  const { ref: testimonialsRef, isVisible: testimonialsVisible } = useScrollReveal();
  const { ref: linksRef, isVisible: linksVisible } = useScrollReveal();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal();
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  useEffect(() => {
    // Add Montreal-specific Schema.org markup
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Armoires de cuisine sur mesure",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Armoire QualiPrix"
      },
      "areaServed": {
        "@type": "City",
        "name": "Montréal"
      }
    });
    document.head.appendChild(script);

    // Add BreadcrumbList
    const breadcrumb = document.createElement('script');
    breadcrumb.type = 'application/ld+json';
    breadcrumb.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Accueil",
          "item": "https://armoirequaliprixmontreal.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Armoires Montréal",
          "item": "https://armoirequaliprixmontreal.com/armoires-montreal"
        }
      ]
    });
    document.head.appendChild(breadcrumb);

    // Update meta tags for Montreal page
    document.title = "Armoires sur mesure Montréal 2025 | 100% satisfaction | QualiPrix";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Expert armoires cuisine à Montréal depuis 25 ans. Du Plateau à NDG, Rosemont à Villeray. 100% satisfaction, livrés en 2 semaines. Consultation gratuite → 581-397-3587');
    }

    // Add canonical tag
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = 'https://armoirequaliprixmontreal.com/armoires-montreal';
    document.head.appendChild(canonical);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(breadcrumb);
      document.head.removeChild(canonical);
    };
  }, []);

  const neighborhoods = [
    "Plateau-Mont-Royal", "Rosemont", "Villeray", "Ahuntsic", 
    "Notre-Dame-de-Grâce (NDG)", "Côte-des-Neiges", "Mile-End",
    "Hochelaga-Maisonneuve", "Verdun", "Saint-Laurent"
  ];

  const testimonials = [
    {
      name: "Sophie T.",
      area: "Plateau-Mont-Royal",
      text: "Cuisine moderne deux-tons parfaite pour mon condo. Livrée en 3 semaines!",
      rating: 5
    },
    {
      name: "Jean-François L.",
      area: "Rosemont",
      text: "Qualité incroyable, prix honnête. Mon voisin a payé 40% plus cher ailleurs.",
      rating: 5
    },
    {
      name: "Amélie D.",
      area: "Villeray",
      text: "Service impeccable du début à la fin. Je recommande à tous mes amis!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 bg-gradient-to-br from-secondary via-secondary to-primary text-white">
        <div className="container px-4 mx-auto text-center">
          <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6 transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">Montréal & environs</span>
          </div>
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 delay-100 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Armoires sur mesure à Montréal – Expert local depuis 25 ans
          </h1>
          <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            De Rosemont au Plateau, en passant par NDG et Villeray. 100% de satisfaction client, 2 semaines de délai garanti.
          </p>
          <Button size="lg" className={`h-14 px-8 text-lg bg-white text-primary hover:bg-white/90 transition-all duration-1000 delay-300 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Phone className="w-5 h-5 mr-2" />
            Consultation gratuite à Montréal – 581-397-3587
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto max-w-6xl">
          {/* Intro */}
          <div ref={introRef} className={`mb-16 transition-all duration-1000 ${
            introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-lg leading-relaxed mb-6">
              De <strong>Rosemont</strong> à <strong>Notre-Dame-de-Grâce</strong>, en passant par le <strong>Plateau-Mont-Royal</strong> et <strong>Villeray</strong>, 
              on garantit un <strong>taux de satisfaction client de 100%</strong>. 
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Nos clients du <strong>Mile-End</strong> adorent notre style <strong>moderne deux-tons</strong>. 
              Ceux d'<strong>Ahuntsic</strong> préfèrent le <strong>Shaker classique</strong>. 
              Et nos projets à <strong>Côte-des-Neiges</strong> prouvent qu'on peut avoir du <strong>luxe sans se ruiner</strong>.
            </p>
          </div>

          {/* Quartiers desservis */}
          <div ref={neighborhoodRef} className="mb-16">
            <h2 className={`text-3xl font-bold mb-8 text-center transition-all duration-1000 ${
              neighborhoodVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>Quartiers desservis à Montréal</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {neighborhoods.map((neighborhood, index) => (
                <Card 
                  key={index} 
                  className={`text-center p-4 hover:shadow-[var(--shadow-elegant)] transition-all duration-800 ${
                    neighborhoodVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${100 + index * 60}ms` }}
                >
                  <CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-sm">{neighborhood}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Pourquoi nous choisir à Montréal */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Pourquoi choisir QualiPrix à Montréal?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-primary" />
                    Atelier près du centre-ville
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    À 15 minutes du centre-ville. Livraison rapide dans tous les quartiers de Montréal.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    Expertise condos montréalais
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    On connaît les défis des condos à Montréal: plafonds bas, espaces restreints, horaires d'ascenseur.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-6 h-6 text-primary" />
                    100% de satisfaction client
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Clients montréalais satisfaits qui recommandent QualiPrix à leurs amis et famille.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Projets récents */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Nos projets récents à Montréal</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Cuisine moderne Plateau</CardTitle>
                  <p className="text-sm text-muted-foreground">Plateau-Mont-Royal</p>
                </CardHeader>
                <CardContent>
                  <p className="font-bold text-primary text-xl mb-2">22 500$ tout inclus</p>
                  <ul className="text-sm space-y-1">
                    <li>• Polymère deux-tons blanc/gris</li>
                    <li>• Comptoir quartz</li>
                    <li>• Îlot central avec rangement</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Rénovation complète</CardTitle>
                  <p className="text-sm text-muted-foreground">Rosemont</p>
                </CardHeader>
                <CardContent>
                  <p className="font-bold text-primary text-xl mb-2">18 900$ tout inclus</p>
                  <ul className="text-sm space-y-1">
                    <li>• Mélamine haute qualité</li>
                    <li>• 15 pi linéaires</li>
                    <li>• Livré en 3 semaines</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Îlot sur mesure</CardTitle>
                  <p className="text-sm text-muted-foreground">Villeray</p>
                </CardHeader>
                <CardContent>
                  <p className="font-bold text-primary text-xl mb-2">28 800$ tout inclus</p>
                  <ul className="text-sm space-y-1">
                    <li>• Laque européenne</li>
                    <li>• Grande cuisine familiale</li>
                    <li>• Finitions luxe</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Témoignages Montréal */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Ce que disent nos clients montréalais</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-primary/5">
                  <CardHeader>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{testimonial.area}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Internal Links */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Découvre nos services ailleurs au Québec</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <Link to="/armoires-laval">
                <Button variant="outline" className="w-full h-auto py-4">
                  Armoires Laval
                </Button>
              </Link>
              <Link to="/armoires-rive-nord">
                <Button variant="outline" className="w-full h-auto py-4">
                  Armoires Rive-Nord
                </Button>
              </Link>
              <Link to="/armoires-rive-sud">
                <Button variant="outline" className="w-full h-auto py-4">
                  Armoires Rive-Sud
                </Button>
              </Link>
              <Link to="/prix-delais">
                <Button variant="outline" className="w-full h-auto py-4">
                  Prix & Délais
                </Button>
              </Link>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 md:p-12 rounded-[1.25rem] text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt pour ta nouvelle cuisine à Montréal?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Consultation gratuite, estimation complète offerte, prix clair dès la première rencontre.
            </p>
            <Button size="lg" onClick={scrollToContact} className="h-14 px-8 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Appelle maintenant – 581-397-3587
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArmoiresMontreal;
