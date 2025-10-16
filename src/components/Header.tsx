import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Phone, ArrowRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  // Navigation structure
  const navigationItems = {
    cuisines: [
      { label: "Collections", href: "#collections", description: "Shaker, Elite, Prestige" },
      { label: "Réalisations", href: "#portfolio", description: "+500 projets livrés" },
      { label: "Notre processus", href: "#process", description: "4 étapes simples" },
      { label: "Prix & Délais", href: "/prix-delais", description: "Transparence totale" },
    ],
    regions: [
      { label: "Montréal", href: "/armoires-montreal", icon: "🏙️" },
      { label: "Laval", href: "/armoires-laval", icon: "🏘️" },
      { label: "Rive-Nord", href: "/armoires-rive-nord", icon: "🌲" },
      { label: "Rive-Sud", href: "/armoires-rive-sud", icon: "🌊" },
      { label: "Québec", href: "/armoires-quebec", icon: "⚜️" },
      { label: "Toutes les zones →", href: "/zones-desservies", featured: true },
    ],
    ressources: [
      { label: "Questions fréquentes", href: "#faq" },
      { label: "Témoignages clients", href: "#testimonials" },
      { label: "Blog & conseils", href: "/blog" },
      { label: "Nous contacter", href: "#contact" },
    ],
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);
      setIsCompact(scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    } else if (href.startsWith('/')) {
      window.location.href = href;
    }
    setIsMenuOpen(false);
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 backdrop-blur-xl bg-background/95 border-b transition-all duration-300",
      isScrolled ? 'border-foreground/10 shadow-lg' : 'border-foreground/5'
    )}>
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className={cn(
          "flex items-center justify-between transition-all duration-300",
          isCompact ? 'py-3' : 'py-5'
        )}>
          
          {/* Logo */}
          <Link to="/" className="focus-ring hover:opacity-80 transition-opacity duration-200">
            <img 
              src={logo} 
              alt="Armoire Qualiprix" 
              className={cn("w-auto transition-all duration-300", isCompact ? 'h-14' : 'h-16')}
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              
              {/* Nos Cuisines */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">
                  Nos Cuisines
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {navigationItems.cuisines.map((item) => (
                      <li key={item.label}>
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => handleNavigation(item.href)}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left w-full"
                          >
                            <div className="text-sm font-medium leading-none">{item.label}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </button>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Nos Régions */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">
                  Nos Régions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-2 p-4">
                    {navigationItems.regions.map((item) => (
                      <li key={item.label}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className={cn(
                              "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                              item.featured && "bg-secondary/10 border border-secondary/20 font-semibold"
                            )}
                          >
                            <span className="mr-2">{item.icon}</span>
                            {item.label}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Ressources */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">
                  Ressources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-2 p-4">
                    {navigationItems.ressources.map((item) => (
                      <li key={item.label}>
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => handleNavigation(item.href)}
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left w-full"
                          >
                            {item.label}
                          </button>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>

          {/* Phone + CTA Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            <a 
              href="tel:5813973587"
              className="flex flex-col items-start gap-0.5 text-xs font-medium text-foreground/60 hover:text-foreground transition-colors duration-200"
            >
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                <span>581-397-3587</span>
              </div>
              <span className="text-[10px] text-muted-foreground">(on répond maintenant)</span>
            </a>

            <Button 
              onClick={scrollToContact}
              className="items-center gap-2 px-8 py-3 text-sm font-semibold bg-secondary text-white rounded-full hover:bg-secondary/90 hover:shadow-lg transition-all duration-200"
            >
              Prix gratuit sous 24h
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger className="lg:hidden">
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent className="w-[300px] overflow-y-auto">
              <div className="flex flex-col h-full py-6">
                
                {/* Cuisines Section */}
                <div className="mb-6">
                  <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
                    Nos Cuisines
                  </h3>
                  <nav className="flex flex-col gap-1">
                    {navigationItems.cuisines.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => handleNavigation(item.href)}
                        className="text-left py-2.5 px-3 rounded-md hover:bg-accent transition-colors text-sm font-medium"
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Régions Section */}
                <div className="mb-6">
                  <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
                    Nos Régions
                  </h3>
                  <nav className="flex flex-col gap-1">
                    {navigationItems.regions.slice(0, 5).map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="text-left py-2.5 px-3 rounded-md hover:bg-accent transition-colors text-sm font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="mr-2">{item.icon}</span>
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </div>

                {/* Ressources Section */}
                <div className="mb-auto">
                  <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
                    Ressources
                  </h3>
                  <nav className="flex flex-col gap-1">
                    {navigationItems.ressources.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => handleNavigation(item.href)}
                        className="text-left py-2.5 px-3 rounded-md hover:bg-accent transition-colors text-sm font-medium"
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                </div>
                
                {/* Mobile Footer CTA */}
                <div className="mt-auto space-y-3 pt-6 border-t border-foreground/10">
                  <a 
                    href="tel:5813973587"
                    className="flex items-center justify-center gap-2 py-3 text-foreground font-semibold hover:bg-accent rounded-md transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    581-397-3587
                  </a>
                  <Button 
                    onClick={scrollToContact}
                    className="w-full bg-secondary text-white hover:bg-secondary/90"
                  >
                    Prix gratuit sous 24h
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
