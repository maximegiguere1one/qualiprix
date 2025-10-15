import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

const ArmoiresMontreal = () => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary text-white">
        <div className="container px-4 mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6">
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">Montréal & environs</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Armoires sur mesure à Montréal – Service clé en main local
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Livraison rapide, installation pro, équipe locale. +300 projets réalisés à Montréal.
          </p>
          <Button size="lg" onClick={scrollToContact} className="h-14 px-8 text-lg bg-white text-primary hover:bg-white/90">
            <Phone className="w-5 h-5 mr-2" />
            Demande ton plan gratuit à Montréal
          </Button>
        </div>
      </section>
      <section className="py-16">
        <div className="container px-4 mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Pourquoi choisir QualiPrix à Montréal?</h2>
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p>Depuis +25 ans, on aide les familles montréalaises à transformer leur cuisine. Du Plateau à NDG, de Rosemont à Côte-des-Neiges, on connaît Montréal comme le fond de notre poche.</p>
            <p><strong>Projets réalisés à Montréal:</strong> Plateau-Mont-Royal, Rosemont, Villeray, NDG, Côte-des-Neiges, Ahuntsic, Hochelaga.</p>
            <p className="font-bold text-foreground">Livraison en 4 semaines. Garantie 30 ans. Prix d'entrepôt.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ArmoiresMontreal;
