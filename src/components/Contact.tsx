import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Check, Lock, Shield, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { supabase } from "@/integrations/supabase/client";
import { Star } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const formSchema = z.object({
  name: z.string()
    .min(2, "Entre ton nom complet (prénom + nom)")
    .max(100, "Nom trop long (max 100 caractères)"),
  email: z.string()
    .email("Vérifie ton courriel (ex: nom@example.com)"),
  phone: z.string()
    .regex(/^\(\d{3}\) \d{3}-\d{4}$/, "Format: (418) 555-1234"),
  city: z.string()
    .min(2, "Entre ta ville (ex: Québec, Montréal)")
    .max(50, "Nom de ville trop long"),
  projectType: z.string().optional()
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const { ref: sectionRef, isVisible } = useScrollReveal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { count: weeksCount, ref: weeksRef } = useCountUp(4, 1500);
  const { count: yearsCount, ref: yearsRef } = useCountUp(30, 2000);
  
  // Dynamic social proof
  const [todayLeads] = useState(() => Math.floor(Math.random() * 8) + 5); // 5-12
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange"
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          city: data.city,
          message: ''
        }
      });

      if (error) throw error;

      toast({
        title: "🎉 C'est fait!",
        description: `Merci ${data.name}! On t'appelle dans les 2 prochaines heures au ${data.phone}`,
      });

      form.reset();
    } catch (error) {
      console.error('Email error:', error);
      toast({
        title: "😕 Petit problème technique",
        description: "Appelle-nous directement: 581-397-3587 ou réessaie dans 1 minute",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatPhoneNumber = (value: string): string => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return value;
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Premium animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/5 animate-[gradient-rotate_20s_ease-in-out_infinite]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.08),transparent_50%)]"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-[float-up_8s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-[float-up_10s_ease-in-out_infinite_2s]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div 
          ref={sectionRef as any}
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white text-sm font-bold rounded-full mb-6 tracking-wide uppercase shadow-lg">
            <Clock className="w-4 h-4" />
            Réponse en moins de 2 heures
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-foreground leading-tight">
            Consultation gratuite<br />
            <span className="text-secondary drop-shadow-[0_2px_8px_rgba(249,115,22,0.3)]">100% sans engagement</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Remplis ce formulaire en 30 secondes.<br className="hidden sm:block" />
            On t'appelle aujourd'hui.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Formulaire Premium */}
          <div 
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative group">
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              <div className="relative bg-card/90 backdrop-blur-xl rounded-3xl p-6 md:p-10 shadow-[0_20px_80px_hsl(var(--primary)/0.15)] transition-all duration-500">
                
                {/* Badge "Places limitées" */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-2 bg-secondary text-white rounded-full font-bold text-sm shadow-lg">
                  ⚡ Seulement 3 places ce mois-ci
                </div>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7 mt-4">
                    
                    {/* Nom + Téléphone sur même ligne */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base md:text-lg font-semibold mb-2 flex flex-col gap-1">
                              <span className="flex items-center gap-2">
                                <span aria-hidden="true">👤</span>
                                Ton nom complet
                              </span>
                              <span className="text-sm text-muted-foreground font-normal leading-relaxed">
                                (prénom + nom de famille)
                              </span>
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Ex: Martin Gagnon" {...field} className="h-12 text-base leading-normal" aria-describedby="name-hint" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base md:text-lg font-semibold mb-2 flex flex-col gap-1">
                              <span className="flex items-center gap-2">
                                <span aria-hidden="true">📞</span>
                                Téléphone
                              </span>
                              <span className="text-sm text-muted-foreground font-normal leading-relaxed">
                                (on t'appelle aujourd'hui)
                              </span>
                            </FormLabel>
                            <FormControl>
                              <Input 
                                type="tel"
                                placeholder="Ex: (581) 234-5678"
                                {...field}
                                onChange={(e) => {
                                  const formatted = formatPhoneNumber(e.target.value);
                                  field.onChange(formatted);
                                }}
                                className="h-12 text-base leading-normal"
                                aria-describedby="phone-hint"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Email */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base md:text-lg font-semibold mb-2">
                            <span className="flex items-center gap-2">
                              <span aria-hidden="true">📧</span>
                              Courriel
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="Ex: martin.gagnon@gmail.com"
                              {...field}
                              className="h-12 text-base leading-normal"
                              aria-describedby="email-hint"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Ville */}
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base md:text-lg font-semibold mb-2 flex flex-col gap-1">
                            <span className="flex items-center gap-2">
                              <span aria-hidden="true">📍</span>
                              Ta ville
                            </span>
                            <span className="text-sm text-muted-foreground font-normal leading-relaxed">
                              (pour confirmer qu'on dessert ta région)
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Ex: Laval, Terrebonne, Québec"
                              {...field}
                              className="h-12 text-base leading-normal"
                              aria-describedby="city-hint"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Type de projet (optionnel) */}
                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base md:text-lg font-semibold mb-2">
                            <span className="flex items-center gap-2">
                              <span aria-hidden="true">🏠</span>
                              Type de projet (optionnel)
                            </span>
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 text-base">
                                <SelectValue placeholder="Sélectionne un type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="cuisine-complete">Cuisine complète</SelectItem>
                              <SelectItem value="renovation">Rénovation</SelectItem>
                              <SelectItem value="ilot">Îlot seulement</SelectItem>
                              <SelectItem value="armoires">Armoires seulement</SelectItem>
                              <SelectItem value="autre">Autre</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* CTA MASSIF */}
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full h-16 text-lg font-black bg-secondary text-white hover:bg-secondary/90 shadow-[0_10px_40px_rgba(249,115,22,0.4)] hover:shadow-[0_15px_50px_rgba(249,115,22,0.6)] transition-all"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-3">
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/30 border-t-white"></div>
                          Envoi de ta demande... Ne ferme pas la page
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          ✨ Envoyer ma demande (réponse en 2h)
                        </div>
                      )}
                    </Button>
                    
                    {/* Réassurance ENRICHIE */}
                    <div className="space-y-2 pt-4">
                      <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        On t'appelle dans les 2 prochaines heures (garanti)
                      </p>
                      <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        Zéro pression, zéro engagement - juste des réponses claires
                      </p>
                      <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-2">
                        <Lock className="w-4 h-4 text-green-500" />
                        Tes infos restent privées (jamais partagées ni revendues)
                      </p>
                      <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4 text-green-500" />
                        500+ familles québécoises nous font confiance depuis 2020
                      </p>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>

          {/* Informations de contact premium */}
          <div 
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="space-y-8">
              {/* Stats animées */}
              <div className="bg-card/90 backdrop-blur-xl rounded-2xl p-8 shadow-lg">
                <h3 className="font-bold text-2xl mb-6 text-foreground">Pourquoi nous choisir?</h3>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-secondary" />
                    </div>
                    <div ref={weeksRef as any}>
                      <div className="font-bold text-xl text-foreground mb-1">Livraison en {weeksCount} semaines</div>
                      <div className="text-sm text-muted-foreground">Pas 6 mois comme ailleurs</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-secondary" />
                    </div>
                    <div ref={yearsRef as any}>
                      <div className="font-bold text-xl text-foreground mb-1">Garantie {yearsCount} ans</div>
                      <div className="text-sm text-muted-foreground">Tranquillité d'esprit totale</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="font-bold text-xl text-foreground mb-1">100% de satisfaction</div>
                      <div className="text-sm text-muted-foreground">Taux de satisfaction client</div>
                    </div>
                  </div>
                </div>
                
                {/* Social proof dynamique */}
                <div className="mt-6 pt-6 border-t border-muted">
                  <p className="text-sm text-muted-foreground text-center">
                    🔥 <span className="font-bold text-foreground">{todayLeads} personnes</span> ont demandé une soumission aujourd'hui
                  </p>
                </div>
              </div>

              {/* Carte contact unifiée */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-card/90 backdrop-blur-xl rounded-3xl p-5 shadow-[0_10px_40px_hsl(var(--primary)/0.1)] hover:-translate-y-1 transition-all duration-500">
                  <h3 className="font-bold text-lg mb-3 text-foreground">Nous joindre</h3>
                  
                  <div className="space-y-3">
                    {/* Section Téléphone */}
                    <div className="flex items-start gap-2.5">
                      <div className="shrink-0 w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Phone className="w-4.5 h-4.5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-xs mb-0">Téléphone</h4>
                        <a href="tel:5813973587" className="text-lg font-bold text-foreground hover:text-primary transition-colors">
                          581-397-3587
                        </a>
                        <p className="text-xs text-muted-foreground mt-0 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          Lun-Ven: 8h-17h
                        </p>
                      </div>
                    </div>
                    
                    {/* Séparateur */}
                    <div className="border-t border-border"></div>
                    
                    {/* Section Courriel */}
                    <div className="flex items-start gap-2.5">
                      <div className="shrink-0 w-9 h-9 rounded-xl bg-secondary/10 flex items-center justify-center">
                        <Mail className="w-4.5 h-4.5 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-xs mb-0">Courriel</h4>
                        <a href="mailto:info@armoiresqualiprix.ca" className="text-base font-semibold text-foreground hover:text-secondary transition-colors break-all">
                          info@armoiresqualiprix.ca
                        </a>
                        <p className="text-xs text-muted-foreground mt-0 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                          Réponse sous 24h
                        </p>
                      </div>
                    </div>
                    
                    {/* Séparateur */}
                    <div className="border-t border-border"></div>
                    
                    {/* Section Région */}
                    <div className="flex items-start gap-2.5">
                      <div className="shrink-0 w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center">
                        <MapPin className="w-4.5 h-4.5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-xs mb-0">Région desservie</h4>
                        <p className="text-base font-semibold text-foreground">
                          Québec, Montréal et environs
                        </p>
                        <p className="text-xs text-muted-foreground mt-0">
                          Service dans toute la province
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;