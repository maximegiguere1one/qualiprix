import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, CheckCircle, Star, Clock, Shield, Truck, Home, Ruler, Paintbrush, Wrench, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ArmoiresMirabel = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: introRef, isVisible: introVisible } = useScrollReveal();
  const { ref: sectorsRef, isVisible: sectorsVisible } = useScrollReveal();
  const { ref: whyUsRef, isVisible: whyUsVisible } = useScrollReveal();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollReveal();
  const { ref: processRef, isVisible: processVisible } = useScrollReveal();
  const { ref: testimonialsRef, isVisible: testimonialsVisible } = useScrollReveal();
  const { ref: faqRef, isVisible: faqVisible } = useScrollReveal();
  const { ref: linksRef, isVisible: linksVisible } = useScrollReveal();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal();

  useEffect(() => {
    // Schema.org LocalBusiness + Service
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Armoires de cuisine sur mesure",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Armoire QualiPrix",
        "telephone": "+1-581-397-3587",
        "url": "https://armoirequaliprixmontreal.com",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": "47",
          "bestRating": "5"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": "Mirabel",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Laurentides, Québec"
        }
      },
      "description": "Armoires de cuisine sur mesure à Mirabel. Livraison rapide, garantie 30 ans, prix d'entrepôt."
    });
    document.head.appendChild(script);

    // BreadcrumbList
    const breadcrumb = document.createElement('script');
    breadcrumb.type = 'application/ld+json';
    breadcrumb.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://armoirequaliprixmontreal.com" },
        { "@type": "ListItem", "position": 2, "name": "Zones desservies", "item": "https://armoirequaliprixmontreal.com/zones-desservies" },
        { "@type": "ListItem", "position": 3, "name": "Armoires Mirabel", "item": "https://armoirequaliprixmontreal.com/armoires-mirabel" }
      ]
    });
    document.head.appendChild(breadcrumb);

    // FAQ Schema
    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Livrez-vous des armoires à Mirabel?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui! On livre et installe des armoires de cuisine sur mesure partout à Mirabel, incluant Saint-Janvier, Saint-Augustin et les nouveaux quartiers. Livraison en 2 semaines." }
        },
        {
          "@type": "Question",
          "name": "Combien coûte une cuisine à Mirabel?",
          "acceptedAnswer": { "@type": "Answer", "text": "Le prix varie entre 8 000$ et 28 000$ selon la taille et les matériaux. On offre des prix d'entrepôt sans intermédiaire — bien en dessous des détaillants traditionnels." }
        },
        {
          "@type": "Question",
          "name": "Offrez-vous des consultations à domicile à Mirabel?",
          "acceptedAnswer": { "@type": "Answer", "text": "Absolument! La consultation et la prise de mesures à domicile sont 100% gratuites partout à Mirabel et les environs." }
        },
        {
          "@type": "Question",
          "name": "Vos armoires conviennent-elles aux maisons neuves?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui! On travaille régulièrement avec des propriétaires de maisons neuves à Mirabel. On s'adapte aux plans des constructeurs et on maximise chaque pouce d'espace." }
        }
      ]
    });
    document.head.appendChild(faqSchema);

    document.title = "Armoires cuisine Mirabel | Sur mesure | Livraison rapide | QualiPrix";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Armoires sur mesure Mirabel. Saint-Janvier, Saint-Augustin, nouveaux quartiers. Garantie 30 ans, livraison 2 semaines, prix d\'entrepôt. Consultation gratuite → 581-397-3587');
    }

    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = 'https://armoirequaliprixmontreal.com/armoires-mirabel';
    document.head.appendChild(canonical);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(breadcrumb);
      document.head.removeChild(faqSchema);
      document.head.removeChild(canonical);
    };
  }, []);

  const sectors = [
    "Mirabel (centre)", "Saint-Janvier", "Saint-Augustin", "Saint-Benoît",
    "Saint-Canut", "Saint-Hermas", "Domaine-Vert", "Côte Saint-Louis",
    "Sainte-Scholastique", "Les Hauteurs", "Le Versant", "Blainville (limitrophe)"
  ];

  const testimonials = [
    {
      name: "Caroline L.",
      location: "Mirabel",
      text: "On a fait construire à Mirabel et on cherchait des armoires de qualité à bon prix. QualiPrix a dépassé nos attentes. La cuisine est absolument magnifique!",
      rating: 5
    },
    {
      name: "Patrick B.",
      location: "Saint-Janvier",
      text: "Service rapide et professionnel. Les armoires sont arrivées en 2 semaines comme promis. Le rapport qualité-prix est imbattable dans la région.",
      rating: 5
    },
    {
      name: "Nathalie R.",
      location: "Domaine-Vert",
      text: "Troisième projet avec QualiPrix! Après notre cuisine, on a fait la salle de bain et le laundry. Toujours satisfaits. Une équipe de confiance.",
      rating: 5
    }
  ];

  const projects = [
    {
      title: "Cuisine maison neuve",
      location: "Mirabel",
      price: "21 500$",
      details: ["Polymère blanc haute brillance", "Comptoir quartz Blanc Nordique", "Grand îlot 8 pieds", "Garde-manger walk-in"]
    },
    {
      title: "Rénovation complète",
      location: "Saint-Janvier",
      price: "17 900$",
      details: ["Shaker gris et blanc", "Comptoir quartz", "14 pi linéaires", "Éclairage intégré DEL"]
    },
    {
      title: "Cuisine ouverte familiale",
      location: "Domaine-Vert",
      price: "26 800$",
      details: ["Style contemporain deux-tons", "Îlot waterfall", "Rangement optimisé", "Finitions haut de gamme"]
    }
  ];

  const faqs = [
    {
      question: "Livrez-vous des armoires à Mirabel?",
      answer: "Oui! On livre et installe des armoires de cuisine sur mesure partout à Mirabel — Saint-Janvier, Saint-Augustin, Domaine-Vert, les nouveaux quartiers et les secteurs ruraux. Livraison en 2 semaines garantie."
    },
    {
      question: "Combien coûte une cuisine complète à Mirabel?",
      answer: "Le prix varie entre 8 000$ et 28 000$ selon la taille, les matériaux et la complexité. On offre des prix d'entrepôt sans intermédiaire — en moyenne 30-40% moins cher que les bannières traditionnelles."
    },
    {
      question: "Offrez-vous des consultations à domicile à Mirabel?",
      answer: "Absolument! On se déplace gratuitement partout à Mirabel pour la consultation et la prise de mesures. On te fait une soumission détaillée sur place, sans engagement."
    },
    {
      question: "Vos armoires conviennent-elles aux maisons neuves?",
      answer: "Oui, c'est une de nos spécialités! Mirabel est en pleine expansion avec de nombreuses constructions neuves. On travaille avec les plans des constructeurs pour maximiser chaque pouce d'espace dans ta nouvelle maison."
    },
    {
      question: "Quelle est la garantie sur vos armoires?",
      answer: "Toutes nos armoires sont garanties 30 ans — couvrant la structure, les charnières et les mécanismes. C'est l'une des meilleures garanties disponibles au Québec."
    },
    {
      question: "Faites-vous aussi les comptoirs?",
      answer: "Oui! On offre des comptoirs en quartz de qualité supérieure, installés professionnellement. Plusieurs modèles disponibles : Blanc Nordique, Athabaska, Perle Blanche et plus encore."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 md:py-28 bg-gradient-to-br from-secondary via-secondary/95 to-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-56 h-56 bg-primary/30 rounded-full blur-3xl" />
        </div>
        <div className="container px-4 mx-auto text-center relative z-10">
          <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-4 transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Building2 className="w-5 h-5" />
            <span className="font-semibold">Mirabel & environs</span>
          </div>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight transition-all duration-1000 delay-100 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Armoires sur mesure à<br />
            <span className="text-white/90">Mirabel</span>
          </h1>
          <p className={`text-lg md:text-2xl mb-4 max-w-3xl mx-auto font-medium transition-all duration-1000 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            La ville la plus dynamique des Laurentides mérite des cuisines à la hauteur. Prix d'entrepôt, garantie 30 ans.
          </p>
          <p className={`text-base md:text-lg mb-8 max-w-2xl mx-auto text-white/80 transition-all duration-1000 delay-250 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Saint-Janvier, Saint-Augustin, Domaine-Vert et tous les nouveaux quartiers — on est là.
          </p>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 transition-all duration-1000 delay-300 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button size="lg" onClick={() => window.location.href = '/#contact'} className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white font-bold rounded-full shadow-lg">
              <Phone className="w-5 h-5 mr-2" />
              Consultation gratuite – 581-397-3587
            </Button>
            <Button size="lg" variant="outline" asChild className="h-14 px-8 text-lg bg-white/10 hover:bg-white/20 text-white border-white/30 font-bold rounded-full">
              <a href="tel:5813973587">
                Appelle maintenant
              </a>
            </Button>
          </div>

          {/* Trust signals */}
          <div className={`flex flex-wrap justify-center gap-4 md:gap-8 text-sm transition-all duration-1000 delay-400 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Star className="w-4 h-4 fill-white text-white" />
              <span>5/5 étoiles</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Shield className="w-4 h-4" />
              <span>Garantie 30 ans</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Truck className="w-4 h-4" />
              <span>Livraison 2 semaines</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / Contexte local */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto max-w-4xl">
          <div ref={introRef} className={`transition-all duration-1000 ${introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold mb-6 text-center">
              L'expert armoires de <span className="text-secondary">Mirabel</span>
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              <strong className="text-foreground">Mirabel</strong> est en pleine croissance — et les nouvelles maisons méritent des cuisines exceptionnelles. Chez <strong className="text-foreground">Armoire QualiPrix</strong>, on accompagne les propriétaires de Mirabel depuis le premier coup de crayon jusqu'à l'installation finale.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              Que tu emménages dans une <strong className="text-foreground">maison neuve au Domaine-Vert</strong>, que tu rénoves ta cuisine à <strong className="text-foreground">Saint-Janvier</strong> ou que tu modernises ton espace à <strong className="text-foreground">Saint-Augustin</strong>, on a l'expertise et les collections pour réaliser ta vision — le tout à prix d'entrepôt.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-secondary/5 rounded-xl border border-secondary/10">
                <div className="text-3xl font-black text-secondary mb-1">100%</div>
                <div className="text-sm text-muted-foreground font-medium">Satisfaction client</div>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-xl border border-primary/10">
                <div className="text-3xl font-black text-primary mb-1">30 ans</div>
                <div className="text-sm text-muted-foreground font-medium">De garantie</div>
              </div>
              <div className="text-center p-4 bg-secondary/5 rounded-xl border border-secondary/10">
                <div className="text-3xl font-black text-secondary mb-1">2 sem.</div>
                <div className="text-sm text-muted-foreground font-medium">Délai de livraison</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secteurs desservis */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto max-w-6xl">
          <div ref={sectorsRef}>
            <h2 className={`text-3xl font-bold mb-3 text-center transition-all duration-1000 ${sectorsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Secteurs desservis à Mirabel
            </h2>
            <p className={`text-center text-muted-foreground mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-100 ${sectorsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              On couvre tous les quartiers de Mirabel et les villes limitrophes.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {sectors.map((sector, index) => (
                <Card
                  key={index}
                  className={`text-center border-2 hover:border-secondary/30 hover:shadow-md transition-all duration-500 ${sectorsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${100 + index * 50}ms` }}
                >
                  <CardContent className="p-4 flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="font-semibold text-sm">{sector}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto max-w-6xl">
          <div ref={whyUsRef}>
            <h2 className={`text-3xl font-bold mb-3 text-center transition-all duration-1000 ${whyUsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Pourquoi choisir QualiPrix à Mirabel?
            </h2>
            <p className={`text-center text-muted-foreground mb-10 max-w-2xl mx-auto transition-all duration-1000 delay-100 ${whyUsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              On s'adapte aux besoins spécifiques des propriétaires de Mirabel, que ce soit une maison neuve ou une rénovation.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Building2, title: "Spécialistes maisons neuves", desc: "Mirabel grandit vite. On travaille avec les plans des constructeurs pour des cuisines parfaitement intégrées." },
                { icon: Truck, title: "Livraison rapide garantie", desc: "2 semaines de délai, livraison incluse partout à Mirabel. Pas de frais cachés, pas de mauvaises surprises." },
                { icon: Shield, title: "Garantie 30 ans", desc: "Structure, charnières, mécanismes — tout est couvert pendant 30 ans. On investit dans la durabilité." },
                { icon: Ruler, title: "100% sur mesure", desc: "Chaque cuisine est conçue en 3D selon tes mesures exactes. Aucun compromis sur l'espace ou le style." }
              ].map((item, index) => (
                <Card
                  key={index}
                  className={`border-2 hover:shadow-lg transition-all duration-800 ${whyUsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/10 to-primary/10 flex items-center justify-center mb-3">
                      <item.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projets récents */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto max-w-6xl">
          <div ref={projectsRef}>
            <h2 className={`text-3xl font-bold mb-3 text-center transition-all duration-1000 ${projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Projets récents à Mirabel
            </h2>
            <p className={`text-center text-muted-foreground mb-10 max-w-2xl mx-auto transition-all duration-1000 delay-100 ${projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Des cuisines conçues et livrées pour des propriétaires de Mirabel.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className={`border-2 hover:shadow-lg transition-all duration-800 ${projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${150 + index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <MapPin className="w-4 h-4 text-secondary" />
                      {project.location}
                    </div>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-black text-secondary text-2xl mb-4">{project.price} <span className="text-sm font-medium text-muted-foreground">tout inclus</span></p>
                    <ul className="space-y-2">
                      {project.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notre processus */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto max-w-5xl">
          <div ref={processRef}>
            <h2 className={`text-3xl font-bold mb-3 text-center transition-all duration-1000 ${processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Comment ça fonctionne?
            </h2>
            <p className={`text-center text-muted-foreground mb-10 max-w-2xl mx-auto transition-all duration-1000 delay-100 ${processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Du premier appel à l'installation — simple, rapide et transparent.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", icon: Phone, title: "Appel gratuit", desc: "On discute de ton projet et on planifie la visite à Mirabel." },
                { step: "2", icon: Home, title: "Visite à domicile", desc: "On se déplace chez toi pour les mesures exactes. 100% gratuit." },
                { step: "3", icon: Paintbrush, title: "Design 3D", desc: "Tu vois ta cuisine en 3D avant de commander. Zéro surprise." },
                { step: "4", icon: Wrench, title: "Livraison 2 sem.", desc: "Tes armoires arrivent en 2 semaines, prêtes à installer." }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`text-center transition-all duration-800 ${processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/70 text-white flex items-center justify-center mx-auto mb-4 text-xl font-black shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto max-w-5xl">
          <div ref={testimonialsRef}>
            <h2 className={`text-3xl font-bold mb-3 text-center transition-all duration-1000 ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Ce que disent nos clients de Mirabel
            </h2>
            <p className={`text-center text-muted-foreground mb-10 transition-all duration-1000 delay-100 ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              100% de satisfaction. Chaque projet, chaque fois.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, index) => (
                <Card
                  key={index}
                  className={`border-2 bg-background transition-all duration-800 ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${150 + index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-3">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <p className="italic text-muted-foreground mb-4 leading-relaxed">"{t.text}"</p>
                    <div>
                      <p className="font-bold text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {t.location}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto max-w-4xl">
          <div ref={faqRef}>
            <h2 className={`text-3xl font-bold mb-3 text-center transition-all duration-1000 ${faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Questions fréquentes — Mirabel
            </h2>
            <p className={`text-center text-muted-foreground mb-10 transition-all duration-1000 delay-100 ${faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Tout ce que tu dois savoir avant de commander.
            </p>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card
                  key={index}
                  className={`border-2 transition-all duration-800 ${faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${100 + index * 80}ms` }}
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-bold">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Liens internes */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 mx-auto max-w-6xl">
          <div ref={linksRef}>
            <h3 className={`text-2xl font-bold mb-6 text-center transition-all duration-1000 ${linksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              On dessert aussi ces régions
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Armoires Saint-Agathe", to: "/armoires-saint-agathe-des-monts" },
                { label: "Armoires Montréal", to: "/armoires-montreal" },
                { label: "Armoires Laval", to: "/armoires-laval" },
                { label: "Armoires Rive-Nord", to: "/armoires-rive-nord" },
                { label: "Armoires Rive-Sud", to: "/armoires-rive-sud" },
                { label: "Armoires Québec", to: "/armoires-quebec" },
                { label: "Prix & Délais", to: "/prix-delais" },
                { label: "Zones desservies", to: "/zones-desservies" }
              ].map((link, index) => (
                <Link key={index} to={link.to}>
                  <Button variant="outline" className="w-full h-auto py-3 text-sm font-semibold">
                    {link.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto max-w-4xl">
          <div ref={ctaRef} className={`text-center bg-gradient-to-br from-secondary/10 via-primary/5 to-secondary/10 border-2 border-secondary/15 p-8 md:p-14 rounded-2xl transition-all duration-1000 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Prêt pour ta nouvelle cuisine<br />à <span className="text-secondary">Mirabel</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Consultation gratuite à domicile. Estimation en 48h. Livraison en 2 semaines. Zéro engagement.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" onClick={() => window.location.href = '/#contact'} className="h-14 px-8 text-lg font-bold rounded-full shadow-lg">
                <Phone className="w-5 h-5 mr-2" />
                581-397-3587
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.location.href = '/#contact'} className="h-14 px-8 text-lg font-bold rounded-full">
                Demander une soumission
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArmoiresMirabel;
