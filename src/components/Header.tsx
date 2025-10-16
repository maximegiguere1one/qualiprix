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
import logo from "@/assets/logo-qualiprix.png";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  // Navigation structure
  const navigationItems = {
    cuisines: [
      { label: "Collections", href: "#collections" },
      { label: "Réalisations", href: "#portfolio" },
      { label: "Notre processus", href: "#process" },
      { label: "Prix & Délais", href: "/prix-delais" },
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
      <a 
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-secondary focus:text-white focus:px-6 focus:py-3 focus:rounded-lg focus:shadow-2xl focus:outline-none focus:ring-4 focus:ring-secondary/50"
      >
        Aller au contenu principal
      </a>
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className={cn(
          "flex items-center justify-between transition-all duration-300",
          isCompact ? 'py-3' : 'py-4'
        )}>
          
          {/* Logo */}
          <Link to="/" className="hover:opacity-80 transition-opacity duration-200 flex items-center">
            <img 
              src={logo} 
              alt="Armoire Qualiprix" 
              className={cn("w-auto transition-all duration-300", isCompact ? 'h-14 sm:h-16' : 'h-16 sm:h-20')}
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-2">
              
              {/* Nos Cuisines */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-11 px-5 text-[15px] font-semibold hover:bg-primary/5 hover:text-primary transition-all duration-200">
                  Nos Cuisines
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-2 p-4 bg-white/100 dark:bg-card border border-border shadow-elegant rounded-xl animate-slide-down">
                    {navigationItems.cuisines.map((item, index) => (
                      <li key={item.label} style={{ animationDelay: `${index * 50}ms` }} className="animate-menu-stagger">
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => handleNavigation(item.href)}
                            className="block w-full text-left select-none rounded-lg px-4 py-3 text-sm font-medium leading-none no-underline outline-none transition-all duration-200 hover:bg-primary/5 hover:text-primary hover:shadow-sm focus-visible:ring-2 focus-visible:ring-primary"
                          >
                            {item.label}
                          </button>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Nos Régions */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-11 px-5 text-[15px] font-semibold hover:bg-primary/5 hover:text-primary transition-all duration-200">
                  Nos Régions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[320px] p-4 bg-white/100 dark:bg-card border border-border shadow-elegant rounded-xl animate-slide-down">
                    <ul className="grid grid-cols-2 gap-2.5 mb-3">
                      {navigationItems.regions.slice(0, 5).map((item, index) => (
                        <li key={item.label} style={{ animationDelay: `${index * 50}ms` }} className="animate-menu-stagger">
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="flex items-center gap-2 select-none rounded-lg px-3 py-2.5 text-sm font-medium leading-none no-underline outline-none transition-all duration-200 hover:bg-primary/5 hover:text-primary border border-transparent hover:border-primary/20 hover:shadow-sm focus-visible:ring-2 focus-visible:ring-primary"
                            >
                              <span className="text-base">{item.icon}</span>
                              <span className="text-sm font-medium">{item.label}</span>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Separator + Featured link */}
                    <div className="border-t border-foreground/10 pt-3">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/zones-desservies"
                          className="flex items-center justify-between select-none rounded-lg px-4 py-3 text-sm font-bold bg-gradient-to-r from-secondary/10 to-secondary/5 border border-secondary/20 leading-none no-underline outline-none transition-all duration-200 hover:bg-secondary/15 hover:border-secondary/30 hover:shadow-md text-secondary focus-visible:ring-2 focus-visible:ring-secondary"
                        >
                          <span>Toutes les zones</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Ressources */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-11 px-5 text-[15px] font-semibold hover:bg-primary/5 hover:text-primary transition-all duration-200">
                  Ressources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[280px] gap-2 p-4 bg-white/100 dark:bg-card border border-border shadow-elegant rounded-xl animate-slide-down">
                    {navigationItems.ressources.map((item, index) => (
                      <li key={item.label} style={{ animationDelay: `${index * 50}ms` }} className="animate-menu-stagger">
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => handleNavigation(item.href)}
                            className="block w-full text-left select-none rounded-lg px-4 py-3 text-sm font-medium leading-none no-underline outline-none transition-all duration-200 hover:bg-primary/5 hover:text-primary hover:shadow-sm focus-visible:ring-2 focus-visible:ring-primary"
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
              className="flex flex-col items-end gap-0.5 text-sm font-semibold text-foreground hover:text-primary transition-colors duration-200 group"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="tracking-tight">581-397-3587</span>
              </div>
              <span className="text-xs text-muted-foreground font-normal">On répond maintenant</span>
            </a>

            <Button 
              onClick={scrollToContact}
              className="items-center gap-2.5 px-6 py-2.5 h-11 text-[15px] font-semibold bg-secondary text-white rounded-full hover:bg-secondary/90 hover:shadow-lg transition-all duration-200"
            >
              Prix gratuit sous 24h
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger className="lg:hidden p-2 hover:bg-accent rounded-lg transition-colors">
              <Menu className="w-6 h-6" />
              <span className="sr-only">Ouvrir le menu</span>
            </SheetTrigger>
            <SheetContent className="w-[300px] overflow-y-auto">
              <div className="flex flex-col h-full py-6">
                
                {/* Cuisines Section */}
                <div className="mb-6">
                  <h3 className="text-xs font-bold text-primary/70 uppercase tracking-wider mb-3 px-3">
                    Nos Cuisines
                  </h3>
                  <nav className="flex flex-col gap-1.5">
                    {navigationItems.cuisines.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => handleNavigation(item.href)}
                        className="text-left py-3 px-4 rounded-lg hover:bg-primary/5 hover:text-primary transition-all duration-200 text-sm font-medium border border-transparent hover:border-primary/10"
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Régions Section */}
                <div className="mb-6">
                  <h3 className="text-xs font-bold text-primary/70 uppercase tracking-wider mb-3 px-3">
                    Nos Régions
                  </h3>
                  <nav className="flex flex-col gap-1.5">
                    {navigationItems.regions.slice(0, 5).map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="text-left py-3 px-4 rounded-lg hover:bg-primary/5 hover:text-primary transition-all duration-200 text-sm font-medium border border-transparent hover:border-primary/10"
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
                  <h3 className="text-xs font-bold text-primary/70 uppercase tracking-wider mb-3 px-3">
                    Ressources
                  </h3>
                  <nav className="flex flex-col gap-1.5">
                    {navigationItems.ressources.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => handleNavigation(item.href)}
                        className="text-left py-3 px-4 rounded-lg hover:bg-primary/5 hover:text-primary transition-all duration-200 text-sm font-medium border border-transparent hover:border-primary/10"
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
