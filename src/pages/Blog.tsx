import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const articles = [
    {
      title: "Tendances cuisines 2025 au Québec – Ce qui cartonne",
      excerpt: "Découvre les styles qui font fureur en 2025: armoires deux-tons, quartz veinage dramatique, et îlots surdimensionnés.",
      date: "15 oct 2025",
      readTime: "5 min",
      image: "/assets/kitchen-island.jpg",
      slug: "tendances-cuisines-2025"
    },
    {
      title: "3 trucs pour un effet luxe sans se ruiner",
      excerpt: "Comment obtenir un look haut de gamme sans exploser ton budget. Nos astuces testées par +1000 clients satisfaits.",
      date: "10 oct 2025",
      readTime: "4 min",
      image: "/assets/kitchen-white.jpg",
      slug: "effet-luxe-pas-cher"
    },
    {
      title: "Armoires deux-tons : pourquoi ça marche au Québec",
      excerpt: "Le secret du style signature des cuisines québécoises modernes. Base foncée, hauts pâles: l'équilibre parfait.",
      date: "5 oct 2025",
      readTime: "6 min",
      image: "/assets/kitchen-bar.jpg",
      slug: "armoires-deux-tons"
    },
    {
      title: "Guide complet : comment choisir son comptoir quartz en 2025",
      excerpt: "Perle Blanche, Bottocino, ou Noir Vintage? On décortique les 4 options les plus populaires au Québec.",
      date: "1 oct 2025",
      readTime: "8 min",
      image: "/assets/quartz-blanc-texture.jpg",
      slug: "choisir-comptoir-quartz"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary text-white">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Inspirations & Conseils
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Tout ce que tu dois savoir pour créer la cuisine de tes rêves
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {articles.map((article, index) => (
                <Card key={index} className="border-2 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 overflow-hidden group cursor-pointer">
                  <div className="aspect-video bg-muted overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <span className="text-4xl">📸</span>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="group/btn p-0 h-auto">
                      Lire l'article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-16">
              <Card className="border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 to-secondary/10">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">Reçois nos nouveaux articles 📧</CardTitle>
                  <CardDescription className="text-base">
                    Conseils, inspirations, et tendances directement dans ta boîte de réception
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input 
                      type="email" 
                      placeholder="ton@email.com" 
                      className="flex-1 px-4 py-3 rounded-lg border-2 border-border focus:border-secondary outline-none transition-colors"
                    />
                    <Button size="lg" className="sm:w-auto">
                      S'abonner
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
