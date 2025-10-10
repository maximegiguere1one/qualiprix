import { Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-4 gap-6 mb-6">
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
                <button
                  onClick={() => scrollToSection("collections")}
                  className="text-primary-foreground/80 font-body link-underline focus-ring"
                >
                  Produits
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-primary-foreground/80 font-body link-underline focus-ring"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-primary-foreground/80 font-body link-underline focus-ring"
                >
                  Contact
                </button>
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
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center transition-all duration-180 ease-out hover:bg-secondary hover:scale-110 focus-ring"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/armoirequaliprix/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center transition-all duration-180 ease-out hover:bg-secondary hover:scale-110 focus-ring"
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
              <li>581-397-3587</li>
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
            <div className="text-sm text-primary-foreground/70 space-y-1">
              <p>500$ d'acompte pour démarrer. Solde dû 48h avant la livraison.</p>
              <p>Offres non cumulables. Sujettes à changement sans préavis.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-4 text-center text-primary-foreground/70 font-body">
          <p>&copy; {new Date().getFullYear()} Armoire Qualiprix. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
