import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  const menuItems = [
    { label: "Collections", href: "#collections" },
    { label: "Réalisations", href: "#portfolio" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);
      setIsCompact(scrollY > 100);
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
    <header className={`fixed top-0 w-full z-50 backdrop-blur-xl bg-background/80 border-b transition-all duration-300 ${
      isScrolled ? 'border-foreground/10 shadow-lg' : 'border-foreground/5'
    }`}>
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isCompact ? 'py-3' : 'py-5'
        }`}>
          
          {/* Logo minimaliste */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="focus-ring hover:opacity-80 transition-opacity duration-200"
          >
            <img 
              src={logo} 
              alt="Armoire Qualiprix" 
              className={`w-auto transition-all duration-300 ${
                isCompact ? 'h-14' : 'h-16'
              }`}
            />
          </button>

          {/* Navigation minimaliste */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-xs font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-secondary/60 group-hover:w-1/2 transition-all duration-200" />
              </button>
            ))}
            
            {/* Téléphone discret */}
            <a 
              href="tel:5813973587"
              className="flex items-center gap-1.5 text-xs font-medium text-foreground/60 hover:text-foreground transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>581-397-3587</span>
            </a>
          </nav>

          {/* CTA principal minimaliste */}
          <Button 
            onClick={scrollToContact}
            className="hidden lg:flex items-center gap-2 px-8 py-3 text-sm font-semibold bg-secondary text-white rounded-full hover:bg-secondary/90 hover:shadow-lg transition-all duration-200 ml-auto"
          >
            Consultation gratuite
            <ArrowRight className="w-4 h-4" />
          </Button>

          {/* Menu mobile */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger className="lg:hidden">
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col h-full">
                <nav className="flex flex-col gap-4 mt-6 flex-1">
                  {menuItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => scrollToSection(item.href)}
                      className="text-foreground font-semibold text-base text-left py-2 hover:text-secondary transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  ))}
                  
                  <button
                    onClick={scrollToContact}
                    className="text-foreground font-semibold text-base text-left py-2 hover:text-secondary transition-colors duration-200"
                  >
                    Contact
                  </button>
                </nav>
                
                <div className="mt-auto space-y-3 pb-6 border-t border-foreground/10 pt-6">
                  <a 
                    href="tel:5813973587"
                    className="flex items-center justify-center gap-2 py-3 text-foreground font-semibold"
                  >
                    <Phone className="w-4 h-4" />
                    581-397-3587
                  </a>
                  <Button 
                    onClick={scrollToContact}
                    className="w-full bg-secondary text-white hover:bg-secondary/90"
                  >
                    Consultation gratuite
                    <ArrowRight className="w-4 h-4 ml-2" />
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
