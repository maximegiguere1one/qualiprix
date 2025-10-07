const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              ARMOIRE QUALIPRIX
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Qualité au prix du gros. Plus de 25 ans d'expérience en rénovation et conception de cuisines au Québec.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Nos services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contactez-nous</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Téléphone: 581-397-3587</li>
              <li>Courriel: info@armoiresqualiprix.ca</li>
              <li>Région: Québec et environs</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} Armoire Qualiprix. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
