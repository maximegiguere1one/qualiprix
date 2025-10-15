import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation réduite à 4 liens max
  const menuItems = [
    { label: "Collections", href: "#collections" },
    { label: "Processus", href: "#process" },
    { label: "Réalisations", href: "#portfolio" },
    { label: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    } else {
      window.location.href = href;
    }
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-background/80 border-b border-foreground/5">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo AGRANDI + Badge */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="focus-ring"
            >
              <img 
                src={logo} 
                alt="Armoire Qualiprix" 
                className="h-12 md:h-14"
              />
            </button>
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-secondary/10 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-secondary">+500 cuisines livrées</span>
            </div>
          </div>

          {/* Navigation RÉDUITE */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-semibold text-foreground/80 hover:text-secondary transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            
            {/* CTA téléphone PROÉMINENT */}
            <a 
              href="tel:5813973587"
              className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-full font-bold hover:scale-105 transition-transform shadow-lg hover:shadow-2xl"
            >
              <Phone className="w-4 h-4" />
              581-397-3587
            </a>
          </nav>

          {/* CTA principal MASSIF */}
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="hidden md:flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full shadow-[0_10px_30px_rgb(249_115_22_/_40%)] hover:shadow-[0_15px_40px_rgb(249_115_22_/_60%)] transition-all"
          >
            Consultation gratuite
            <ArrowRight className="w-5 h-5" />
          </Button>

          {/* Menu mobile */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger className="lg:hidden">
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-6 mt-8">
                {menuItems.map((item, index) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="text-foreground font-bold text-lg text-left py-2 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <a 
                  href="tel:5813973587"
                  className="flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-full font-bold mt-4"
                >
                  <Phone className="w-4 h-4" />
                  581-397-3587
                </a>
                <Button 
                  onClick={scrollToContact} 
                  size="lg"
                  className="w-full"
                >
                  Consultation gratuite
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
