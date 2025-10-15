import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

const ArmoiresLaval = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-primary text-white">
        <div className="container px-4 mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6">
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">Laval</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Armoires sur mesure à Laval – Qualité locale garantie
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Chomedey, Vimont, Sainte-Rose, Auteuil. Service rapide, prix clairs.
          </p>
          <Button size="lg" className="h-14 px-8 text-lg bg-white text-primary hover:bg-white/90">
            <Phone className="w-5 h-5 mr-2" />
            Plan gratuit à Laval
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ArmoiresLaval;
