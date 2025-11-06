import { Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Final CTA Section AVANT footer */}
      <div className="bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 text-white py-20">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Ta nouvelle cuisine en 2 semaines<br />
            <span className="text-white/90">(pas 6 mois)</span>
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl mx-auto">
            100% de satisfaction client. Garantie 30 ans. Prix d'entrepôt.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:5813973587"
              className="inline-flex items-center gap-3 bg-white text-secondary px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-2xl"
            >
              📞 581-397-3587
            </a>
            <button 
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
            >
              Consultation gratuite →
            </button>
          </div>
        </div>
      </div>
      
      {/* Footer classique */}
      <div className="py-8">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-5 gap-6 mb-6">
          {/* Company Info */}
          <div>
            <img 
              src={logo} 
              alt="Logo Armoire Qualiprix" 
              className="h-16 mb-4"
            />
            <p className="text-primary-foreground/80 font-body leading-relaxed">
              Fier partenaire de vos cuisines québécoises
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2 font-body">
              <li>
                <button onClick={() => scrollToSection("collections")} className="text-primary-foreground/80 font-body link-underline">
                  Nos cuisines
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("portfolio")} className="text-primary-foreground/80 font-body link-underline">
                  Réalisations
                </button>
              </li>
              <li>
                <a href="/prix-delais" className="text-primary-foreground/80 font-body link-underline">
                  Prix & Délais
                </a>
              </li>
              <li>
                <button onClick={() => scrollToSection("faq")} className="text-primary-foreground/80 font-body link-underline">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-primary-foreground/80 font-body link-underline">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Régions - Mieux organisé */}
          <div>
            <h4 className="font-bold text-lg mb-4">Nos régions</h4>
            <ul className="space-y-2 font-body">
              <li>
                <a href="/armoires-montreal" className="text-primary-foreground/80 font-body link-underline">
                  🏙️ Montréal
                </a>
              </li>
              <li>
                <a href="/armoires-laval" className="text-primary-foreground/80 font-body link-underline">
                  🏘️ Laval
                </a>
              </li>
              <li>
                <a href="/armoires-rive-nord" className="text-primary-foreground/80 font-body link-underline">
                  🌲 Rive-Nord
                </a>
              </li>
              <li>
                <a href="/armoires-rive-sud" className="text-primary-foreground/80 font-body link-underline">
                  🌊 Rive-Sud
                </a>
              </li>
              <li>
                <a href="/armoires-quebec" className="text-primary-foreground/80 font-body link-underline">
                  ⚜️ Québec
                </a>
              </li>
              <li className="pt-2 border-t border-primary-foreground/20">
                <a href="/zones-desservies" className="text-primary-foreground font-body font-semibold link-underline">
                  → Toutes les zones
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-lg mb-4">Suivez-nous</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61563783007983" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center transition-all duration-180 ease-out hover:bg-secondary hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/armoirequaliprix/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center transition-all duration-180 ease-out hover:bg-secondary hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contactez-nous</h4>
            <ul className="space-y-2 text-primary-foreground/80 font-body">
              <li><a href="tel:5813973587" className="hover:text-primary-foreground transition-colors">581-397-3587</a></li>
              <li>info@armoiresqualiprix.ca</li>
              <li>Québec et environs</li>
            </ul>
            <div className="mt-4 text-sm">
              <p className="font-semibold text-primary-foreground mb-1">Heures d'ouverture</p>
              <p className="text-primary-foreground/70">Lun-Ven: 9h-17h</p>
              <p className="text-primary-foreground/70">Sam: Sur rendez-vous</p>
            </div>
          </div>
        </div>

        {/* Legal & Quality Badge */}
        <div className="border-t border-primary-foreground/20 pt-6 pb-4">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-6 py-3 rounded-full">
              <span className="text-sm font-semibold">🏗️ Matériaux solides – Contreplaqué supérieur</span>
            </div>
            <div className="text-sm text-primary-foreground/70 space-y-2">
              <p><strong>Comment ça marche:</strong> 500$ d'acompte pour démarrer la fabrication • Solde restant payable 48h avant livraison</p>
              <p><strong>Modes de paiement:</strong> Comptant, Interac, Visa/MC, financement disponible</p>
              <p className="text-xs">Offres non cumulables. Prix sujets à changement sans préavis.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-4 text-center text-primary-foreground/70 font-body">
          <p>&copy; {new Date().getFullYear()} Armoire Qualiprix. Tous droits réservés.</p>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
