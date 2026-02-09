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
      { label: "Mirabel", href: "/armoires-mirabel", icon: "🏗️" },
      { label: "Saint-Agathe", href: "/armoires-saint-agathe-des-monts", icon: "⛰️" },
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
                <NavigationMenuTrigger className="h-11 px-5 text-[15px] font-semibold relative hover:bg-gradient-to-br hover:from-primary/10 hover:to-primary/5 hover:text-primary hover:scale-[1.02] hover:shadow-md transition-all duration-300 ease-out before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-primary before:to-secondary before:transition-all before:duration-300 hover:before:w-3/4 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  Nos Cuisines
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-2 p-4 bg-white/100 dark:bg-card border border-border shadow-elegant rounded-xl animate-slide-down">
                    {navigationItems.cuisines.map((item, index) => (
                      <li key={item.label} style={{ animationDelay: `${index * 50}ms` }} className="animate-menu-stagger">
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => handleNavigation(item.href)}
                            className="block w-full text-left select-none rounded-lg px-4 py-3 text-sm font-medium leading-none no-underline outline-none transition-all duration-200 hover:bg-gradient-to-r hover:from-primary/10 hover:via-primary/5 hover:to-transparent hover:text-primary hover:shadow-md hover:translate-x-1 hover:border-l-2 hover:border-primary focus-visible:ring-2 focus-visible:ring-primary group relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/5 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-300 hover:before:translate-x-0"
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
                <NavigationMenuTrigger className="h-11 px-5 text-[15px] font-semibold relative hover:bg-gradient-to-br hover:from-primary/10 hover:to-primary/5 hover:text-primary hover:scale-[1.02] hover:shadow-md transition-all duration-300 ease-out before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-primary before:to-secondary before:transition-all before:duration-300 hover:before:w-3/4 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  Nos Régions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[320px] p-4 bg-white/100 dark:bg-card border border-border shadow-elegant rounded-xl animate-slide-down">
                    <ul className="grid grid-cols-2 gap-2.5 mb-3 max-h-[280px] overflow-y-auto">
                      {navigationItems.regions.filter(r => !r.featured).map((item, index) => (
                        <li key={item.label} style={{ animationDelay: `${index * 50}ms` }} className="animate-menu-stagger">
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="flex items-center gap-2 select-none rounded-lg px-3 py-2.5 text-sm font-medium leading-none no-underline outline-none transition-all duration-300 ease-out hover:bg-gradient-to-br hover:from-primary/10 hover:to-primary/5 hover:text-primary hover:scale-105 hover:shadow-lg border border-transparent hover:border-primary/30 focus-visible:ring-2 focus-visible:ring-primary group relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:via-white/40 before:to-white/20 before:translate-x-[-200%] before:skew-x-[-25deg] hover:before:translate-x-[200%] before:transition-transform before:duration-700"
                            >
                              <span className="text-base group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">{item.icon}</span>
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
                          className="flex items-center justify-between select-none rounded-lg px-4 py-3 text-sm font-bold bg-gradient-to-r from-secondary/10 to-secondary/5 border border-secondary/20 leading-none no-underline outline-none transition-all duration-300 hover:from-secondary/20 hover:to-secondary/10 hover:border-secondary/40 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:scale-[1.02] text-secondary focus-visible:ring-2 focus-visible:ring-secondary group relative overflow-hidden"
                        >
                          <span>Toutes les zones</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Ressources */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-11 px-5 text-[15px] font-semibold relative hover:bg-gradient-to-br hover:from-primary/10 hover:to-primary/5 hover:text-primary hover:scale-[1.02] hover:shadow-md transition-all duration-300 ease-out before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-primary before:to-secondary before:transition-all before:duration-300 hover:before:w-3/4 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  Ressources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[280px] gap-2 p-4 bg-white/100 dark:bg-card border border-border shadow-elegant rounded-xl animate-slide-down">
                    {navigationItems.ressources.map((item, index) => (
                      <li key={item.label} style={{ animationDelay: `${index * 50}ms` }} className="animate-menu-stagger">
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => handleNavigation(item.href)}
                            className="block w-full text-left select-none rounded-lg px-4 py-3 text-sm font-medium leading-none no-underline outline-none transition-all duration-200 hover:bg-gradient-to-r hover:from-primary/10 hover:via-primary/5 hover:to-transparent hover:text-primary hover:shadow-md hover:translate-x-1 hover:border-l-2 hover:border-primary focus-visible:ring-2 focus-visible:ring-primary group relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/5 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-300 hover:before:translate-x-0"
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
              className="flex flex-col items-end gap-0.5 text-sm font-semibold text-foreground hover:text-primary transition-all duration-300 group hover:scale-105"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 animate-pulse" />
                <span className="tracking-tight">581-397-3587</span>
              </div>
              <span className="text-xs text-muted-foreground font-normal">On répond maintenant</span>
            </a>

            <Button 
              onClick={scrollToContact}
              className="items-center gap-2.5 px-6 py-2.5 h-11 text-[15px] font-semibold bg-secondary text-white rounded-full hover:bg-secondary/90 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:scale-105 transition-all duration-300 group relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-200%] before:skew-x-[-25deg] hover:before:translate-x-[200%] before:transition-transform before:duration-700 focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
            >
              Prix gratuit sous 24h
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
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
                        className="text-left py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent hover:text-primary hover:translate-x-2 transition-all duration-300 text-sm font-medium border border-transparent hover:border-primary/20 hover:shadow-md hover:border-l-4 hover:border-l-primary focus-visible:ring-2 focus-visible:ring-primary"
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
                    {navigationItems.regions.filter(r => !r.featured).map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="text-left py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent hover:text-primary hover:translate-x-2 transition-all duration-300 text-sm font-medium border border-transparent hover:border-primary/20 hover:shadow-md hover:border-l-4 hover:border-l-primary focus-visible:ring-2 focus-visible:ring-primary"
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
                        className="text-left py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent hover:text-primary hover:translate-x-2 transition-all duration-300 text-sm font-medium border border-transparent hover:border-primary/20 hover:shadow-md hover:border-l-4 hover:border-l-primary focus-visible:ring-2 focus-visible:ring-primary"
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
                    className="w-full bg-secondary text-white hover:bg-secondary/90 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:scale-105 transition-all duration-300 group relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-200%] before:skew-x-[-25deg] hover:before:translate-x-[200%] before:transition-transform before:duration-700"
                  >
                    Prix gratuit sous 24h
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
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
