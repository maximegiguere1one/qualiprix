import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Contact = () => {
  const { toast } = useToast();
  const { ref: sectionRef, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message envoyé!",
      description: "Nous vous contacterons sous 24h. Merci!",
    });

    setFormData({ name: "", email: "", phone: "", city: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section ref={sectionRef} id="contact" className="py-12 md:py-20 lg:py-24 bg-gradient-animated relative overflow-hidden">
      {/* Mesh gradient decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="blob-decoration w-[600px] h-[600px] bg-primary/10 top-0 left-0" style={{ animationDelay: '2s' }} />
        <div className="blob-decoration w-[500px] h-[500px] bg-accent/10 bottom-0 right-0" style={{ animationDelay: '5s' }} />
      </div>
      <div className="container px-4 mx-auto">
        <div 
          className={`text-center mb-16 transition-all duration-320 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Demandez votre soumission gratuite
          </h2>
          <p 
            className={`text-xl text-muted-foreground transition-all duration-320 ease-out delay-75 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            Un conseiller vous rappelle sous 24h, sans obligation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Formulaire de contact</CardTitle>
                <CardDescription>
                  Remplissez le formulaire ci-dessous et nous vous contacterons rapidement
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="relative">
                    <label 
                      htmlFor="name" 
                      className={`absolute left-3 transition-all duration-200 ease-out pointer-events-none ${
                        formData.name 
                          ? 'top-[-6px] text-xs bg-card px-1 text-primary' 
                          : 'top-3 text-sm text-muted-foreground'
                      }`}
                    >
                      Nom complet *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={formData.name ? "" : "Jean Tremblay"}
                      required
                      className="pt-2 focus-ring"
                    />
                  </div>

                  <div className="relative">
                    <label 
                      htmlFor="email" 
                      className={`absolute left-3 transition-all duration-200 ease-out pointer-events-none ${
                        formData.email 
                          ? 'top-[-6px] text-xs bg-card px-1 text-primary' 
                          : 'top-3 text-sm text-muted-foreground'
                      }`}
                    >
                      Courriel *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={formData.email ? "" : "jean.tremblay@exemple.com"}
                      required
                      className="pt-2 focus-ring"
                    />
                  </div>

                  <div className="relative">
                    <label 
                      htmlFor="phone" 
                      className={`absolute left-3 transition-all duration-200 ease-out pointer-events-none ${
                        formData.phone 
                          ? 'top-[-6px] text-xs bg-card px-1 text-primary' 
                          : 'top-3 text-sm text-muted-foreground'
                      }`}
                    >
                      Téléphone *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={formData.phone ? "" : "(514) 555-1234"}
                      required
                      className="pt-2 focus-ring"
                    />
                  </div>

                  <div className="relative">
                    <label 
                      htmlFor="city" 
                      className={`absolute left-3 transition-all duration-200 ease-out pointer-events-none ${
                        formData.city 
                          ? 'top-[-6px] text-xs bg-card px-1 text-primary' 
                          : 'top-3 text-sm text-muted-foreground'
                      }`}
                    >
                      Ville des travaux *
                    </label>
                    <Input
                      id="city"
                      name="city"
                      type="text"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder={formData.city ? "" : "Québec"}
                      required
                      className="pt-2 focus-ring"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre projet de cuisine..."
                      rows={5}
                      className="focus-ring"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Soumettre ma demande gratuite
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Téléphone</h3>
                    <p className="text-muted-foreground">581-397-3587</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Courriel</h3>
                    <p className="text-muted-foreground break-words">info@armoiresqualiprix.ca</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Région</h3>
                    <p className="text-muted-foreground">Québec et environs</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-gradient-to-br from-primary to-secondary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2">Heures d'ouverture</h3>
                <div className="space-y-1 text-sm">
                  <p>Lundi - Vendredi: 9h - 17h</p>
                  <p>Samedi: Sur rendez-vous</p>
                  <p>Dimanche: Fermé</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
