import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  // Navigation ultra-minimaliste - 3 liens max
  const menuItems = [
    { label: "Collections", href: "#collections" },
    { label: "Réalisations", href: "#portfolio" },
    { label: "Contact", href: "#contact" }
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
      isScrolled ? 'border-foreground/10 shadow-sm' : 'border-foreground/5'
    }`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className={`flex items-center justify-between transition-all duration-500 ${
          isCompact ? 'py-3' : 'py-5'
        }`}>
          
          {/* Logo ultra-clean */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="focus-ring"
          >
            <img 
              src={logo} 
              alt="Armoire Qualiprix" 
              className={`w-auto transition-all duration-500 ${
                isCompact ? 'h-11 md:h-13' : 'h-13 md:h-16'
              }`}
            />
          </button>

          {/* Navigation ultra-minimaliste */}
          <nav className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-xs font-medium text-foreground/70 hover:text-foreground transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-secondary group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            
            {/* CTA téléphone discret (ghost) */}
            <a 
              href="tel:5813973587"
              className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-secondary transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              581-397-3587
            </a>
          </nav>

          {/* CTA principal ultra-premium */}
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="hidden lg:flex items-center gap-2 px-8 py-3.5 bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full shadow-[0_10px_30px_rgb(249_115_22_/_40%)] hover:shadow-[0_15px_40px_rgb(249_115_22_/_60%)] transition-all duration-300 hover:scale-105"
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
