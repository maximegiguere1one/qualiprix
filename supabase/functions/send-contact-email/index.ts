import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@3.5.0";

const resend = new Resend(Deno.env.get("rendicaresendapi"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone: string;
  city: string;
  message?: string;
}

const generateInternalEmailHTML = (data: ContactEmailRequest, refId: string): string => {
  const formattedDate = new Date().toLocaleString('fr-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); border-radius: 12px; overflow: hidden;">
          
          <!-- Header avec branding -->
          <tr>
            <td style="background: linear-gradient(135deg, #1a365d 0%, #2d5a8a 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                🏠 ARMOIRES QUALIPRIX
              </h1>
              <div style="margin-top: 15px; display: inline-block; background-color: #fbbf24; color: #1a365d; padding: 8px 20px; border-radius: 20px; font-weight: 600; font-size: 14px;">
                🔔 NOUVELLE DEMANDE DE SOUMISSION
              </div>
            </td>
          </tr>

          <!-- Contenu principal -->
          <tr>
            <td style="padding: 40px 30px;">
              
              <!-- Informations client -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 15px; background-color: #f8fafc; border-left: 4px solid #3b82f6; margin-bottom: 10px;">
                    <div style="font-size: 12px; color: #64748b; margin-bottom: 4px; font-weight: 600; text-transform: uppercase;">👤 Nom complet</div>
                    <div style="font-size: 18px; color: #1e293b; font-weight: 600;">${data.name}</div>
                  </td>
                </tr>
                <tr><td style="height: 10px;"></td></tr>
                <tr>
                  <td style="padding: 15px; background-color: #f8fafc; border-left: 4px solid #10b981;">
                    <div style="font-size: 12px; color: #64748b; margin-bottom: 4px; font-weight: 600; text-transform: uppercase;">📧 Courriel</div>
                    <div style="font-size: 16px; color: #1e293b;">
                      <a href="mailto:${data.email}" style="color: #3b82f6; text-decoration: none; font-weight: 500;">${data.email}</a>
                    </div>
                  </td>
                </tr>
                <tr><td style="height: 10px;"></td></tr>
                <tr>
                  <td style="padding: 15px; background-color: #f8fafc; border-left: 4px solid #f59e0b;">
                    <div style="font-size: 12px; color: #64748b; margin-bottom: 4px; font-weight: 600; text-transform: uppercase;">📞 Téléphone</div>
                    <div style="font-size: 16px; color: #1e293b;">
                      <a href="tel:${data.phone.replace(/\D/g, '')}" style="color: #3b82f6; text-decoration: none; font-weight: 500;">${data.phone}</a>
                    </div>
                  </td>
                </tr>
                <tr><td style="height: 10px;"></td></tr>
                <tr>
                  <td style="padding: 15px; background-color: #f8fafc; border-left: 4px solid #8b5cf6;">
                    <div style="font-size: 12px; color: #64748b; margin-bottom: 4px; font-weight: 600; text-transform: uppercase;">📍 Ville des travaux</div>
                    <div style="font-size: 16px; color: #1e293b; font-weight: 500;">${data.city}</div>
                  </td>
                </tr>
                ${data.message ? `
                <tr><td style="height: 10px;"></td></tr>
                <tr>
                  <td style="padding: 15px; background-color: #f8fafc; border-left: 4px solid #ec4899;">
                    <div style="font-size: 12px; color: #64748b; margin-bottom: 8px; font-weight: 600; text-transform: uppercase;">💬 Message du client</div>
                    <div style="font-size: 15px; color: #475569; line-height: 1.6; font-style: italic;">"${data.message}"</div>
                  </td>
                </tr>
                ` : ''}
              </table>

              <!-- Métadonnées -->
              <div style="padding: 20px; background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%); border-radius: 8px; margin-top: 30px;">
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; font-size: 14px; color: #475569;">
                      <strong style="color: #1e293b;">⏰ Date de réception:</strong> ${formattedDate}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-size: 14px; color: #475569;">
                      <strong style="color: #1e293b;">🆔 Référence:</strong> <code style="background-color: #ffffff; padding: 4px 8px; border-radius: 4px; font-family: monospace; color: #3b82f6;">${refId}</code>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- CTA Button -->
              <div style="text-align: center; margin-top: 35px;">
                <a href="mailto:${data.email}?subject=Re: Demande de soumission (${refId})" style="display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: #ffffff; padding: 16px 40px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 6px rgba(59, 130, 246, 0.3);">
                  📧 Répondre au client
                </a>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
              <div style="font-size: 14px; color: #64748b; margin-bottom: 10px;">
                <strong style="color: #1e293b;">Armoires Qualiprix</strong>
              </div>
              <div style="font-size: 13px; color: #94a3b8; line-height: 1.6;">
                📞 581-397-3587<br>
                📧 info@armoiresqualiprix.ca<br>
                📍 Région de Québec, QC
              </div>
              <div style="margin-top: 15px; font-size: 12px; color: #94a3b8;">
                Cet email a été envoyé automatiquement depuis votre site web
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};

const generateClientConfirmationHTML = (data: ContactEmailRequest): string => {
  const firstName = data.name.split(' ')[0];

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); border-radius: 12px; overflow: hidden;">
          
          <!-- Header accueillant -->
          <tr>
            <td style="background: linear-gradient(135deg, #1a365d 0%, #2d5a8a 100%); padding: 50px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">
                🏠 ARMOIRES QUALIPRIX
              </h1>
              <p style="margin: 15px 0 0 0; color: #e0e7ff; font-size: 16px;">
                Fabricant d'armoires de cuisine sur mesure
              </p>
            </td>
          </tr>

          <!-- Message de remerciement -->
          <tr>
            <td style="padding: 40px 30px; text-align: center;">
              <h2 style="margin: 0 0 20px 0; color: #1e293b; font-size: 26px; font-weight: 700;">
                Merci ${firstName}! 🎉
              </h2>
              <p style="margin: 0; color: #475569; font-size: 17px; line-height: 1.6;">
                Nous avons bien reçu votre demande de <strong style="color: #3b82f6;">soumission gratuite</strong>.
              </p>
            </td>
          </tr>

          <!-- Résumé de la demande -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <div style="background-color: #f8fafc; border-radius: 8px; padding: 25px; border-left: 4px solid #3b82f6;">
                <div style="font-size: 14px; color: #64748b; margin-bottom: 15px; font-weight: 600; text-transform: uppercase;">
                  📋 Votre demande
                </div>
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; font-size: 15px; color: #475569;">
                      <strong style="color: #1e293b;">Ville:</strong> ${data.city}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-size: 15px; color: #475569;">
                      <strong style="color: #1e293b;">Courriel:</strong> ${data.email}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-size: 15px; color: #475569;">
                      <strong style="color: #1e293b;">Téléphone:</strong> ${data.phone}
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>

          <!-- Timeline des prochaines étapes -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <div style="text-align: center; margin-bottom: 25px;">
                <h3 style="margin: 0; color: #1e293b; font-size: 22px; font-weight: 700;">
                  Prochaines étapes
                </h3>
              </div>
              
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 15px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); border-radius: 8px; margin-bottom: 10px;">
                    <div style="color: #ffffff; font-size: 18px; font-weight: 600;">
                      ✅ Demande reçue
                    </div>
                    <div style="color: #d1fae5; font-size: 14px; margin-top: 5px;">
                      Votre demande a été transmise à notre équipe
                    </div>
                  </td>
                </tr>
                <tr><td style="height: 10px;"></td></tr>
                <tr>
                  <td style="padding: 15px; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); border-radius: 8px;">
                    <div style="color: #ffffff; font-size: 18px; font-weight: 600;">
                      📞 Appel sous 24h
                    </div>
                    <div style="color: #dbeafe; font-size: 14px; margin-top: 5px;">
                      Un expert vous contactera rapidement
                    </div>
                  </td>
                </tr>
                <tr><td style="height: 10px;"></td></tr>
                <tr>
                  <td style="padding: 15px; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); border-radius: 8px;">
                    <div style="color: #ffffff; font-size: 18px; font-weight: 600;">
                      📋 Soumission gratuite
                    </div>
                    <div style="color: #fef3c7; font-size: 14px; margin-top: 5px;">
                      Sans engagement, adaptée à vos besoins
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Contact info -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <div style="background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%); border-radius: 8px; padding: 25px; text-align: center;">
                <div style="font-size: 16px; color: #475569; margin-bottom: 15px;">
                  <strong style="color: #1e293b;">Une question? Contactez-nous!</strong>
                </div>
                <div style="font-size: 18px; color: #1e293b; margin-bottom: 8px;">
                  <a href="tel:5813973587" style="color: #3b82f6; text-decoration: none; font-weight: 600;">📞 581-397-3587</a>
                </div>
                <div style="font-size: 15px; color: #64748b;">
                  <a href="mailto:info@armoiresqualiprix.ca" style="color: #3b82f6; text-decoration: none;">📧 info@armoiresqualiprix.ca</a>
                </div>
              </div>
            </td>
          </tr>

          <!-- Section réassurance -->
          <tr>
            <td style="padding: 0 30px 40px 30px;">
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="width: 33.33%; text-align: center; padding: 15px;">
                    <div style="font-size: 32px; margin-bottom: 8px;">🏆</div>
                    <div style="font-size: 14px; color: #1e293b; font-weight: 600;">30 ans</div>
                    <div style="font-size: 12px; color: #64748b;">d'expertise</div>
                  </td>
                  <td style="width: 33.33%; text-align: center; padding: 15px;">
                    <div style="font-size: 32px; margin-bottom: 8px;">✨</div>
                    <div style="font-size: 14px; color: #1e293b; font-weight: 600;">Garantie</div>
                    <div style="font-size: 12px; color: #64748b;">qualité</div>
                  </td>
                  <td style="width: 33.33%; text-align: center; padding: 15px;">
                    <div style="font-size: 32px; margin-bottom: 8px;">💯</div>
                    <div style="font-size: 14px; color: #1e293b; font-weight: 600;">Sans</div>
                    <div style="font-size: 12px; color: #64748b;">obligation</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #1a365d; padding: 30px; text-align: center;">
              <div style="font-size: 14px; color: #e0e7ff; margin-bottom: 15px;">
                <strong>Armoires Qualiprix</strong>
              </div>
              <div style="font-size: 13px; color: #cbd5e1; line-height: 1.6; margin-bottom: 15px;">
                Fabricant d'armoires de cuisine sur mesure<br>
                Région de Québec, QC
              </div>
              <div style="font-size: 12px; color: #94a3b8;">
                © ${new Date().getFullYear()} Armoires Qualiprix. Tous droits réservés.
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const contactData: ContactEmailRequest = await req.json();

    console.log("📧 Traitement d'une nouvelle demande de contact:", contactData);

    // Validation basique
    if (!contactData.name || !contactData.email || !contactData.phone || !contactData.city) {
      console.error("❌ Données manquantes:", contactData);
      return new Response(
        JSON.stringify({ error: "Données manquantes" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Générer un ID de référence unique
    const refId = `REF-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    // 1. Email de notification interne
    const internalEmailResponse = await resend.emails.send({
      from: "Armoires Qualiprix <onboarding@resend.dev>",
      to: ["maxime@giguere-influence.com", "armoirequaliprix@gmail.com"],
      subject: `🔔 Nouvelle demande de soumission - ${contactData.name}`,
      html: generateInternalEmailHTML(contactData, refId),
    });

    console.log("✅ Email interne envoyé:", internalEmailResponse);

    // 2. Email de confirmation client
    const clientEmailResponse = await resend.emails.send({
      from: "Armoires Qualiprix <onboarding@resend.dev>",
      to: [contactData.email],
      subject: "✨ Merci pour votre demande de soumission!",
      html: generateClientConfirmationHTML(contactData),
    });

    console.log("✅ Email de confirmation client envoyé:", clientEmailResponse);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Emails envoyés avec succès",
        refId: refId,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("❌ Erreur dans send-contact-email:", error);
    return new Response(
      JSON.stringify({
        error: error.message,
        details: error.response?.data || "Erreur lors de l'envoi des emails",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
