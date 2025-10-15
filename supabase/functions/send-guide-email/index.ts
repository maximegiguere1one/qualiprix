import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const generateGuideEmailHTML = (email: string) => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="font-family: Arial, sans-serif; background: #f5f5f5; padding: 40px;">
  <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden;">
    
    <div style="background: linear-gradient(135deg, #1a365d 0%, #2d5a8a 100%); padding: 40px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 28px;">🏠 Ton guide est arrivé!</h1>
    </div>
    
    <div style="padding: 40px;">
      <h2 style="color: #1e293b; margin-top: 0;">Les 10 erreurs à éviter en rénovation de cuisine 🍁</h2>
      
      <ol style="line-height: 2; color: #475569; font-size: 16px;">
        <li><strong>Sous-estimer le budget:</strong> Prévoir toujours 15-20% de marge pour les imprévus. Sinon, risque d'arrêt de chantier en plein milieu!</li>
        <li><strong>Choisir le style avant les dimensions:</strong> Mesure d'abord, rêve ensuite. Un îlot de rêve inutile s'il bloque le passage...</li>
        <li><strong>Négliger l'éclairage:</strong> Une cuisine sombre = ambiance déprimante. Prévois éclairage direct sur comptoirs + ambiance.</li>
        <li><strong>Oublier le triangle d'or:</strong> Frigo-Évier-Cuisinière doivent former un triangle efficace. Sinon, tu cours partout!</li>
        <li><strong>Trop de portes d'armoires:</strong> Les tiroirs = 10x plus pratiques. Privilégie-les pour l'ergonomie.</li>
        <li><strong>Comptoir trop petit:</strong> Minimum 36 pouces de surface de travail continu. Sinon, impossible de cuisiner!</li>
        <li><strong>Prises électriques mal placées:</strong> Planifie AVANT la pose des armoires. Sinon, rallonges partout = look cheap.</li>
        <li><strong>Ventilation insuffisante:</strong> Une hotte puissante = essentiel. Minimum 400 CFM pour cuisinière standard.</li>
        <li><strong>Matériaux cheap:</strong> Économiser 500$ aujourd'hui = dépenser 2000$ dans 3 ans. Investis dans la qualité.</li>
        <li><strong>Pas de plan B:</strong> Réno cuisine = 4-6 semaines sans cuisine. Prévois BBQ, micro-ondes, coin café temporaire!</li>
      </ol>
      
      <div style="background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%); padding: 30px; border-radius: 8px; margin: 30px 0; text-align: center;">
        <h3 style="margin-top: 0; color: #1e293b;">🎁 Bonus: Consultation gratuite</h3>
        <p style="color: #475569; margin-bottom: 20px;">Parlons de TON projet maintenant!</p>
        <a href="https://armoirequaliprixmontreal.com/#contact" style="display: inline-block; background: #3b82f6; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold;">
          Demande ton plan gratuit maintenant
        </a>
      </div>
      
      <div style="text-align: center; margin-top: 40px; padding: 20px; background: #f8fafc; border-radius: 8px;">
        <p style="margin: 0 0 10px 0; font-size: 18px; font-weight: bold; color: #1e293b;">
          Prêt à démarrer ton projet?
        </p>
        <p style="color: #64748b; margin: 0;">
          📞 <strong style="color: #1e293b;">581-397-3587</strong><br/>
          📧 <a href="mailto:info@armoiresqualiprix.ca" style="color: #3b82f6; text-decoration: none;">info@armoiresqualiprix.ca</a>
        </p>
      </div>
    </div>
    
    <div style="background: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
      <p style="color: #64748b; margin: 0; font-size: 14px;">
        <strong>Armoire QualiPrix</strong> – Cuisine de rêve sans stress ni surprises<br/>
        Montréal • Laval • Rive-Nord • Québec
      </p>
    </div>
    
  </div>
</body>
</html>
  `;
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const resendApiKey = Deno.env.get("rendicaresendapi");

    if (!resendApiKey) {
      throw new Error("Resend API key not configured");
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    const { email, name } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ error: "Email invalide" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Save lead to database
    const { error: dbError } = await supabase
      .from("lead_guides")
      .insert([
        { 
          email, 
          name: name || null,
          guide_sent: true,
          ip_address: req.headers.get("x-forwarded-for") || null,
          user_agent: req.headers.get("user-agent") || null
        }
      ])
      .select();

    if (dbError && !dbError.message.includes("unique")) {
      console.error("Database error:", dbError);
    }

    // Send email via Resend
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Armoires Qualiprix <noreply@armoirequaliprixmontreal.com>",
        to: [email],
        subject: "🏠 Ton guide gratuit: 10 erreurs à éviter en réno cuisine",
        html: generateGuideEmailHTML(email),
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text();
      console.error("Resend error:", errorData);
      throw new Error("Failed to send email via Resend");
    }

    console.log("✅ Guide sent to:", email);

    return new Response(
      JSON.stringify({ success: true, message: "Guide envoyé!" }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );

  } catch (error) {
    console.error("❌ Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Échec envoi email";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
};

serve(handler);
