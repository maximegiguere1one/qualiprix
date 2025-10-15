import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  // Navigation luxury - 2 liens max pour clarté absolue
  const menuItems = [
    { label: "Collections", href: "#collections" },
    { label: "Réalisations", href: "#portfolio" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);
      setIsCompact(scrollY > 100); // Sticky smart: réduction après 100px
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
    <header className={`fixed top-0 w-full z-50 backdrop-blur-xl bg-background/80 border-b transition-all duration-500 ${
      isScrolled ? 'border-foreground/20 shadow-2xl' : 'border-foreground/5 shadow-sm'
    }`}>
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className={`flex items-center justify-between transition-all duration-500 ${
          isCompact ? 'py-4' : 'py-6 md:py-8'
        }`}>
          
          {/* Logo ultra-premium avec badge */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="focus-ring group transition-transform duration-300 hover:scale-105 hover:rotate-1 flex flex-col items-start"
          >
            <img 
              src={logo} 
              alt="Armoire Qualiprix" 
              className={`w-auto transition-all duration-500 ${
                isCompact ? 'h-12 md:h-14' : 'h-14 md:h-20'
              }`}
            />
            <span className={`hidden md:block text-[10px] text-foreground/60 font-medium tracking-wider mt-1 transition-opacity duration-500 ${
              isCompact ? 'opacity-0' : 'opacity-100'
            }`}>
              30 ans • +500 cuisines
            </span>
          </button>

          {/* Navigation luxury ultra-clean */}
          <nav className="hidden lg:flex items-center gap-12">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-xs font-medium text-foreground/70 hover:text-foreground transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-secondary group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            
            {/* Séparateur vertical */}
            <div className="w-px h-6 bg-foreground/10" />
            
            {/* Hero Phone Badge */}
            <a 
              href="tel:5813973587"
              className="flex items-center gap-2.5 px-6 py-3 text-sm font-bold text-foreground bg-secondary/5 border-2 border-secondary/40 rounded-full hover:border-secondary hover:shadow-lg hover:shadow-secondary/30 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-secondary/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
              <Phone className="w-4 h-4 relative z-10" />
              <span className="relative z-10">581-397-3587</span>
            </a>
          </nav>

          {/* CTA principal luxury avec gradient animé */}
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="hidden lg:flex items-center gap-2.5 px-10 py-4 text-base bg-gradient-to-r from-secondary via-orange-500 to-secondary bg-[length:200%_100%] hover:bg-secondary/90 text-white font-bold rounded-full shadow-[0_10px_30px_rgb(249_115_22_/_40%)] hover:shadow-[0_20px_50px_rgb(249_115_22_/_70%)] transition-all duration-300 hover:scale-105 animate-[gradient-shift_3s_ease-in-out_infinite]"
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
              <div className="flex flex-col h-full">
                {/* Badge premium en haut */}
                <div className="text-center py-4 border-b border-foreground/10">
                  <span className="text-xs text-foreground/60 font-medium tracking-wider">
                    30 ans d'expertise • +500 cuisines livrées
                  </span>
                </div>
                
                <nav className="flex flex-col gap-6 mt-8 flex-1">
                  {menuItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => scrollToSection(item.href)}
                      className="text-foreground font-bold text-lg text-left py-2 hover:text-secondary transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                  
                  <button
                    onClick={scrollToContact}
                    className="text-foreground font-bold text-lg text-left py-2 hover:text-secondary transition-colors"
                  >
                    Contact
                  </button>
                </nav>
                
                {/* Phone et CTA en bas */}
                <div className="space-y-3 pb-6 border-t border-foreground/10 pt-6">
                  <a 
                    href="tel:5813973587"
                    className="flex items-center justify-center gap-2 px-6 py-4 bg-secondary/5 border-2 border-secondary/40 text-foreground rounded-full font-bold"
                  >
                    <Phone className="w-4 h-4" />
                    581-397-3587
                  </a>
                  <Button 
                    onClick={scrollToContact} 
                    size="lg"
                    className="w-full bg-gradient-to-r from-secondary via-orange-500 to-secondary bg-[length:200%_100%]"
                  >
                    Consultation gratuite
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
