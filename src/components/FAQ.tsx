import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FAQ = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  // Add FAQ Schema.org structured data
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Combien coûte une cuisine sur mesure ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nos cuisines débutent à partir de 8 995 $ installation incluse. Le prix varie selon les dimensions, les matériaux choisis et les options de quincaillerie. Demandez une soumission gratuite pour un prix exact."
          }
        },
        {
          "@type": "Question",
          "name": "Quelle est la différence entre mélamine et polymère ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La mélamine offre un excellent rapport qualité-prix avec une bonne résistance. Le polymère est plus durable, résiste mieux à l'humidité et aux rayures, et offre un fini plus luxueux. Nos conseillers vous aident à choisir selon votre budget et vos besoins."
          }
        },
        {
          "@type": "Question",
          "name": "Est-ce que vous offrez le service d'installation ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Malheureusement non, nous n'offrons pas ce service directement. Cependant, nous pouvons vous référer à nos installateurs partenaires, certifiés Qualiprix, qui se démarquent par leur rigueur, leur professionnalisme et leur excellent service à la clientèle."
          }
        },
        {
          "@type": "Question",
          "name": "Comment puis-je visualiser mon projet avant l'achat ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lors de la consultation gratuite, nous préparons une estimation détaillée avec croquis et spécifications complètes. Vous recevrez un devis précis incluant dimensions, matériaux et plan d'agencement pour visualiser votre projet."
          }
        },
        {
          "@type": "Question",
          "name": "Quels sont vos délais de livraison ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nos délais standards sont de 10 à 15 jours ouvrables après confirmation de la commande. Pour les offres spéciales, la livraison peut être garantie sous 30 jours. Nous respectons nos engagements de délais."
          }
        }
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const faqs = [
    {
      emoji: "💰",
      question: "Combien coûte vraiment une cuisine complète ?",
      answer: (
        <>
          Une cuisine Armoire Qualiprix complète (armoires + quincaillerie + installation) se situe en moyenne entre <strong>8 000 $ et 14 000 $</strong>, selon la taille et les finis choisis.
          <br /><br />
          C'est le <strong>prix d'une cuisine haut de gamme</strong>, mais <strong>au coût d'un modèle d'entrepôt</strong>. Grâce à notre modèle direct-usine, tu ne paies <strong>aucune salle de montre</strong> ni intermédiaire.
          <br /><br />
          💡 <em>Exemple :</em> une cuisine équivalente à 20 000 $ ailleurs revient souvent à 12 000 $ chez nous — garantie 30 ans incluse.
        </>
      )
    },
    {
      emoji: "🪵",
      question: "Quelle est la différence entre mélamine et polymère ?",
      answer: (
        <>
          La <strong>mélamine</strong> est durable et économique — parfaite pour les projets modernes et pratiques. Le <strong>polymère</strong> offre un fini plus raffiné et une meilleure résistance à l'humidité et aux chocs.
          <br /><br />
          Chez Armoire Qualiprix, on t'offre les deux :
          <ul className="list-disc ml-6 mt-2">
            <li><strong>Cuisino / Cuisino Plus</strong> — mélamine et contreplaqué (garantie 15 à 30 ans)</li>
            <li><strong>Prestige</strong> — polymère et bois éco Tafisa, pour un effet haut de gamme</li>
          </ul>
          🌿 Tu choisis selon ton style et ton budget, sans jamais sacrifier la qualité.
        </>
      )
    },
    {
      emoji: "🔧",
      question: "Qui installe ma cuisine ?",
      answer: (
        <>
          Ton installation est réalisée par <strong>nos équipes certifiées</strong> — des professionnels locaux qui travaillent <strong>exclusivement</strong> pour Armoire Qualiprix.
          <br /><br />
          Ils partagent nos valeurs : <em>travail bien fait, respect du client et souci du détail</em>.
          <br /><br />
          🤝 Résultat : une installation propre, rapide et sans stress.
        </>
      )
    },
    {
      emoji: "🖥️",
      question: "Comment puis-je visualiser mon projet avant l'achat ?",
      answer: (
        <>
          Tu vois ta cuisine avant même qu'elle soit fabriquée. Nos designers créent un <strong>rendu 3D ultra-réaliste</strong> à partir de ton espace et de tes goûts.
          <br /><br />
          Tu peux demander <strong>autant de modifications que tu veux</strong> jusqu'à ce que ce soit parfait.
          <br /><br />
          🎁 <strong>Service gratuit et sans engagement</strong> — visualise ta future cuisine dès maintenant.
        </>
      )
    },
    {
      emoji: "🚚",
      question: "Combien de temps avant de recevoir ma cuisine ?",
      answer: (
        <>
          Nos cuisines sont <strong>fabriquées et livrées en 10 à 15 jours ouvrables</strong> après l'approbation du plan 3D.
          <br /><br />
          C'est un <strong>record au Québec</strong> rendu possible par notre production locale et nos stocks prêts à assembler.
          <br /><br />
          ⏰ Et si un retard survient, on te le rembourse — c'est garanti.
        </>
      )
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="py-16 bg-accent">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 
          className={`text-3xl font-bold text-primary mb-8 text-center transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          FAQ — On répond à vos vraies questions 👇
        </h2>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details 
              key={index}
              className={`border-b border-border pb-4 group transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <summary className="text-xl font-semibold cursor-pointer flex justify-between items-center text-foreground hover:text-primary transition-colors">
                <span>{faq.emoji} {faq.question}</span>
                <span className="transition-transform group-open:rotate-180 text-muted-foreground">▼</span>
              </summary>
              <div className="mt-3 text-muted-foreground leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              scrollToContact();
            }}
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-2xl text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            📞 Réserver ma rencontre 3D gratuite
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
