import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, CheckCircle, Star, Clock, Shield, Truck, TreePine, Home, Ruler, Paintbrush, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ArmoiresSaintAgathe = () => {
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
        "name": "Saint-Agathe-des-Monts",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Laurentides, Québec"
        }
      },
      "description": "Armoires de cuisine sur mesure à Saint-Agathe-des-Monts. Livraison rapide dans les Laurentides. Garantie 30 ans."
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
        { "@type": "ListItem", "position": 3, "name": "Armoires Saint-Agathe-des-Monts", "item": "https://armoirequaliprixmontreal.com/armoires-saint-agathe-des-monts" }
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
          "name": "Livrez-vous des armoires à Saint-Agathe-des-Monts?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui! On livre et installe des armoires de cuisine sur mesure à Saint-Agathe-des-Monts et dans toute la région des Laurentides. Livraison en 2 à 3 semaines." }
        },
        {
          "@type": "Question",
          "name": "Quel est le prix moyen d'une cuisine à Saint-Agathe?",
          "acceptedAnswer": { "@type": "Answer", "text": "Le prix moyen varie entre 8 000$ et 25 000$ selon la taille, les matériaux et la complexité. On offre des prix d'entrepôt sans intermédiaire." }
        },
        {
          "@type": "Question",
          "name": "Offrez-vous une garantie sur vos armoires?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui, toutes nos armoires sont couvertes par une garantie de 30 ans. C'est l'une des meilleures garanties au Québec." }
        },
        {
          "@type": "Question",
          "name": "Faites-vous la consultation à domicile à Saint-Agathe?",
          "acceptedAnswer": { "@type": "Answer", "text": "Absolument! On se déplace gratuitement à Saint-Agathe-des-Monts et dans les Laurentides pour une prise de mesures et une consultation complète." }
        }
      ]
    });
    document.head.appendChild(faqSchema);

    document.title = "Armoires cuisine Saint-Agathe-des-Monts | Laurentides | QualiPrix";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Armoires sur mesure Saint-Agathe-des-Monts & Laurentides. Livraison rapide, garantie 30 ans, prix d\'entrepôt. Consultation gratuite à domicile → 581-397-3587');
    }

    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = 'https://armoirequaliprixmontreal.com/armoires-saint-agathe-des-monts';
    document.head.appendChild(canonical);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(breadcrumb);
      document.head.removeChild(faqSchema);
      document.head.removeChild(canonical);
    };
  }, []);

  const sectors = [
    "Saint-Agathe-des-Monts", "Sainte-Adèle", "Val-David", "Val-Morin",
    "Saint-Sauveur", "Mont-Tremblant", "Sainte-Agathe-Nord", "Ivry-sur-le-Lac",
    "Lac-des-Seize-Îles", "Lantier", "Saint-Adolphe-d'Howard", "Piedmont"
  ];

  const testimonials = [
    {
      name: "Marie-Claude T.",
      location: "Saint-Agathe-des-Monts",
      text: "Incroyable rapport qualité-prix! Ils ont fait le déplacement jusqu'à Saint-Agathe et le résultat est magnifique. Notre chalet a maintenant une cuisine digne d'un magazine.",
      rating: 5
    },
    {
      name: "Jean-François D.",
      location: "Sainte-Adèle",
      text: "Service impeccable du début à la fin. La livraison dans les Laurentides s'est faite sans aucun problème. Je recommande à 100%.",
      rating: 5
    },
    {
      name: "Isabelle M.",
      location: "Val-David",
      text: "On cherchait quelqu'un qui comprenait le style chalet. QualiPrix a livré exactement ce qu'on voulait. Qualité haut de gamme, prix raisonnable.",
      rating: 5
    }
  ];

  const projects = [
    {
      title: "Cuisine chalet moderne",
      location: "Saint-Agathe-des-Monts",
      price: "19 500$",
      details: ["Shaker blanc et bois naturel", "Comptoir quartz Athabaska", "Îlot avec espace repas", "Éclairage sous-armoires DEL"]
    },
    {
      title: "Rénovation complète",
      location: "Sainte-Adèle",
      price: "16 800$",
      details: ["Polymère gris anthracite", "12 pi linéaires", "Garde-manger intégré", "Livré en 2 semaines"]
    },
    {
      title: "Cuisine familiale",
      location: "Val-David",
      price: "24 200$",
      details: ["Style deux-tons contemporain", "Grand îlot waterfall", "Rangement optimisé", "Quartz blanc nordique"]
    }
  ];

  const faqs = [
    {
      question: "Livrez-vous des armoires à Saint-Agathe-des-Monts?",
      answer: "Oui! On livre et installe des armoires de cuisine sur mesure à Saint-Agathe-des-Monts et dans toute la région des Laurentides. Livraison en 2 à 3 semaines, sans frais cachés."
    },
    {
      question: "Quel est le prix moyen d'une cuisine à Saint-Agathe?",
      answer: "Le prix moyen varie entre 8 000$ et 25 000$ selon la taille, les matériaux et la complexité du projet. On offre des prix d'entrepôt sans intermédiaire — jusqu'à 40% moins cher que les bannières traditionnelles."
    },
    {
      question: "Offrez-vous une garantie sur vos armoires?",
      answer: "Absolument. Toutes nos armoires sont couvertes par une garantie de 30 ans — l'une des meilleures au Québec. On est confiants dans la durabilité de nos produits."
    },
    {
      question: "Faites-vous la consultation à domicile à Saint-Agathe?",
      answer: "Oui, on se déplace gratuitement à Saint-Agathe-des-Monts et partout dans les Laurentides. On prend les mesures, on discute de vos besoins et on vous fait une soumission détaillée sur place."
    },
    {
      question: "Vos armoires sont-elles adaptées au style chalet?",
      answer: "Tout à fait! On propose des collections qui s'intègrent parfaitement au style chalet laurentien : finitions bois, tons chauds, et matériaux résistants à l'humidité. On s'adapte à votre vision."
    },
    {
      question: "Quel est le délai de livraison pour Saint-Agathe?",
      answer: "En général, on livre en 2 à 3 semaines après l'approbation du design 3D. C'est un des délais les plus courts dans l'industrie, même pour les Laurentides."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 md:py-28 bg-gradient-to-br from-primary via-primary/95 to-secondary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-secondary/30 rounded-full blur-3xl" />
        </div>
        <div className="container px-4 mx-auto text-center relative z-10">
          <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-4 transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <TreePine className="w-5 h-5" />
            <span className="font-semibold">Laurentides</span>
          </div>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight transition-all duration-1000 delay-100 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Armoires sur mesure à<br />
            <span className="text-secondary">Saint-Agathe-des-Monts</span>
          </h1>
          <p className={`text-lg md:text-2xl mb-4 max-w-3xl mx-auto font-medium transition-all duration-1000 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Qualité haut de gamme livrée dans les Laurentides. Prix d'entrepôt, garantie 30 ans, consultation gratuite à domicile.
          </p>
          <p className={`text-base md:text-lg mb-8 max-w-2xl mx-auto text-white/80 transition-all duration-1000 delay-250 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            De Saint-Agathe à Mont-Tremblant, en passant par Sainte-Adèle et Val-David — on dessert toute la région.
          </p>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 transition-all duration-1000 delay-300 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button size="lg" onClick={() => window.location.href = '/#contact'} className="h-14 px-8 text-lg bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full shadow-lg">
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
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span>5/5 étoiles</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Shield className="w-4 h-4" />
              <span>Garantie 30 ans</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Truck className="w-4 h-4" />
              <span>Livraison 2-3 sem.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / Contexte local */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto max-w-4xl">
          <div ref={introRef} className={`transition-all duration-1000 ${introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold mb-6 text-center">
              Votre expert armoires dans les <span className="text-secondary">Laurentides</span>
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              <strong className="text-foreground">Saint-Agathe-des-Monts</strong>, c'est le cœur des Laurentides. Entre les chalets au bord du lac, les résidences familiales et les condos modernes, chaque cuisine a son style. Chez <strong className="text-foreground">Armoire QualiPrix</strong>, on comprend l'esthétique laurentienne — et on la sublime.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              Que tu rénoves un <strong className="text-foreground">chalet à Ivry-sur-le-Lac</strong>, une maison familiale à <strong className="text-foreground">Sainte-Adèle</strong> ou un condo à <strong className="text-foreground">Val-David</strong>, on a la collection parfaite pour toi. Style rustique-chic, contemporain épuré ou classique intemporel — on s'adapte à ta vision.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-primary/5 rounded-xl border border-primary/10">
                <div className="text-3xl font-black text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground font-medium">Satisfaction client</div>
              </div>
              <div className="text-center p-4 bg-secondary/5 rounded-xl border border-secondary/10">
                <div className="text-3xl font-black text-secondary mb-1">30 ans</div>
                <div className="text-sm text-muted-foreground font-medium">De garantie</div>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-xl border border-primary/10">
                <div className="text-3xl font-black text-primary mb-1">2-3 sem.</div>
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
              Villes et secteurs desservis
            </h2>
            <p className={`text-center text-muted-foreground mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-100 ${sectorsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              On couvre toute la région des Laurentides, de Saint-Sauveur jusqu'à Mont-Tremblant.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {sectors.map((sector, index) => (
                <Card
                  key={index}
                  className={`text-center border-2 hover:border-primary/30 hover:shadow-md transition-all duration-500 ${sectorsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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
              Pourquoi choisir QualiPrix à Saint-Agathe?
            </h2>
            <p className={`text-center text-muted-foreground mb-10 max-w-2xl mx-auto transition-all duration-1000 delay-100 ${whyUsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              On combine qualité haut de gamme, prix imbattables et un service adapté aux réalités des Laurentides.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: TreePine, title: "Experts du style chalet", desc: "On maîtrise les finitions bois, les tons chauds et l'esthétique laurentienne qui fait toute la différence." },
                { icon: Truck, title: "Livraison Laurentides incluse", desc: "Pas de frais supplémentaires pour la livraison à Saint-Agathe et les environs. Tout est inclus dans le prix." },
                { icon: Shield, title: "Garantie 30 ans", desc: "Nos armoires résistent à l'humidité des chalets et aux changements de température. Garantie béton." },
                { icon: Ruler, title: "Sur mesure à 100%", desc: "Chaque cuisine est unique. On conçoit en 3D selon tes mesures exactes et tes goûts personnels." }
              ].map((item, index) => (
                <Card
                  key={index}
                  className={`border-2 hover:shadow-lg transition-all duration-800 ${whyUsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-3">
                      <item.icon className="w-6 h-6 text-primary" />
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
              Projets récents dans les Laurentides
            </h2>
            <p className={`text-center text-muted-foreground mb-10 max-w-2xl mx-auto transition-all duration-1000 delay-100 ${projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Voici des exemples de cuisines réalisées pour nos clients de la région.
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
                    <p className="font-black text-primary text-2xl mb-4">{project.price} <span className="text-sm font-medium text-muted-foreground">tout inclus</span></p>
                    <ul className="space-y-2">
                      {project.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
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
              Un processus simple, transparent et sans stress — même à distance.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", icon: Phone, title: "Appel gratuit", desc: "On discute de ton projet par téléphone ou vidéo. Zéro engagement." },
                { step: "2", icon: Home, title: "Visite à domicile", desc: "On se déplace à Saint-Agathe pour prendre les mesures exactes." },
                { step: "3", icon: Paintbrush, title: "Design 3D", desc: "Tu visualises ta future cuisine en 3D avant de commander." },
                { step: "4", icon: Wrench, title: "Livraison & installation", desc: "Tes armoires arrivent en 2-3 semaines, prêtes à installer." }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`text-center transition-all duration-800 ${processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-secondary/70 text-white flex items-center justify-center mx-auto mb-4 text-xl font-black shadow-lg">
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
              Ce que disent nos clients des Laurentides
            </h2>
            <p className={`text-center text-muted-foreground mb-10 transition-all duration-1000 delay-100 ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              100% de satisfaction client. Voici pourquoi.
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
                    <div className="flex items-center gap-2">
                      <div>
                        <p className="font-bold text-sm">{t.name}</p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {t.location}
                        </p>
                      </div>
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
              Questions fréquentes — Saint-Agathe
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
                { label: "Armoires Mirabel", to: "/armoires-mirabel" },
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
          <div ref={ctaRef} className={`text-center bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 border-2 border-primary/15 p-8 md:p-14 rounded-2xl transition-all duration-1000 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Prêt pour ta nouvelle cuisine<br />à <span className="text-secondary">Saint-Agathe</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Consultation gratuite à domicile. Estimation complète en 48h. Livraison en 2-3 semaines. Zéro engagement.
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

export default ArmoiresSaintAgathe;
