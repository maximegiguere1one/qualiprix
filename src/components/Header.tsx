import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { label: "Nos cuisines", href: "#collections" },
    { label: "Notre processus", href: "#process" },
    { label: "Prix & Délais", href: "/prix-delais" },
    { label: "Zones desservies", href: "/zones-desservies" },
    { label: "Inspirations", href: "/blog" },
    { label: "À propos", href: "#about" },
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
    <header className={`sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-[var(--shadow-soft)] transition-all duration-300 ease-out ${
      isScrolled ? 'h-16' : 'h-20'
    }`}>
      <div className="container px-4 mx-auto">
        <div className={`flex items-center justify-between transition-all duration-300 ease-out ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="focus-ring"
          >
            <img 
              src={logo} 
              alt="Logo BOUM" 
              className={`transition-all duration-300 ease-out ${
                isScrolled ? 'h-12' : 'h-16'
              }`}
            />
          </button>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground font-bold text-base lg:text-lg hover:text-primary transition-colors link-underline focus-ring"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button onClick={scrollToContact}>
              Consultation gratuite 📞
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground focus-ring rounded-lg"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-border animate-scale-in">
            <div className="flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground font-bold text-lg text-left py-2 hover:text-primary transition-colors link-underline focus-ring animate-menu-stagger"
                  style={{ 
                    animationDelay: `${index * 60}ms`,
                    opacity: 0,
                    animationFillMode: 'forwards'
                  }}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={scrollToContact} 
                className="mt-4 animate-menu-stagger"
                style={{ 
                  animationDelay: `${menuItems.length * 60}ms`,
                  opacity: 0,
                  animationFillMode: 'forwards'
                }}
              >
                Soumission gratuite
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
