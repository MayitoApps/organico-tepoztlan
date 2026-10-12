import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Resend } from "resend";

export const runtime = "nodejs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DEFAULT_RECEIVER_EMAIL = "artes.grupoorganico@gmail.com";
const DEFAULT_SMTP_USER = "artes.grupoorganico@gmail.com";
const DEFAULT_SMTP_PASS = "aifqxmkbkmasqtjn";

function sanitize(input?: string | null): string {
  if (!input) return "";
  return String(input)
    .replace(/[<>]/g, "")
    .trim();
}

function cleanPhoneNumber(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  // Si son 10 dígitos (número mexicano sin código de país)
  if (digits.length === 10) {
    return `52${digits}`;
  }
  // Si ya tiene código de país (12 dígitos para México)
  if (digits.length === 12 && digits.startsWith("52")) {
    return digits;
  }
  return digits;
}

function getFormattedMexicoDate(): string {
  return new Intl.DateTimeFormat("es-MX", {
    timeZone: "America/Mexico_City",
    dateStyle: "full",
    timeStyle: "medium",
  }).format(new Date());
}

interface EmailTemplateData {
  nombre: string;
  correo: string;
  telefono: string;
  motivo: string;
  huespedes?: string;
  fecha?: string;
  mensaje: string;
  fechaHoraEnvio: string;
}

function buildHtmlTemplate({
  nombre,
  correo,
  telefono,
  motivo,
  huespedes,
  fecha,
  mensaje,
  fechaHoraEnvio,
}: EmailTemplateData): string {
  const waPhone = cleanPhoneNumber(telefono);
  const waGreeting = encodeURIComponent(
    `Hola ${nombre}, gracias por contactar a Orgánico Hotel Boutique Tepoztlán respecto a: ${motivo}. Con gusto te atendemos con tu solicitud.`
  );
  const waUrl = waPhone.length >= 10 ? `https://wa.me/${waPhone}?text=${waGreeting}` : null;
  const telUrl = telefono ? `tel:${telefono.replace(/\s+/g, "")}` : null;
  const replyMailUrl = `mailto:${correo}?subject=${encodeURIComponent(
    `Re: [Orgánico Tepoztlán] ${motivo} - ${nombre}`
  )}`;

  return `<!DOCTYPE html>
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
  <meta name="x-apple-disable-message-reformatting" />
  <meta name="format-detection" content="telephone=no, date=no, address=no, email=no" />
  <meta name="color-scheme" content="dark only" />
  <meta name="supported-color-schemes" content="dark only" />
  <title>Orgánico Tepoztlán - ${nombre}</title>
  <style>
    :root { color-scheme: dark only; supported-color-schemes: dark only; }
    html, body {
      margin: 0 !important;
      padding: 0 !important;
      background-color: #0E1612 !important;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif !important;
      color: #F4F5F1 !important;
      -webkit-font-smoothing: antialiased !important;
      -webkit-text-size-adjust: 100% !important;
      -ms-text-size-adjust: 100% !important;
      width: 100% !important;
    }
    table, td {
      border-collapse: collapse !important;
      mso-table-lspace: 0pt !important;
      mso-table-rspace: 0pt !important;
    }
    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
    }
    * { box-sizing: border-box !important; }
    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }
    u + #body a { color: inherit !important; text-decoration: none !important; }
    #MessageViewBody a { color: inherit !important; text-decoration: none !important; }

    /* Optimizaciones Responsivas para Celulares y Tablets */
    @media only screen and (max-width: 600px) {
      .outer-wrapper { padding: 12px 6px !important; }
      .email-container { width: 100% !important; max-width: 100% !important; border-radius: 10px !important; }
      .header-padding { padding: 22px 16px 18px !important; }
      .brand-title { font-size: 19px !important; letter-spacing: 1px !important; }
      .content-padding { padding: 16px 14px 22px !important; }
      .card-block { padding: 12px 14px !important; margin-bottom: 8px !important; }
      .card-name { font-size: 17px !important; }
      .card-val { font-size: 14.5px !important; }
      .btn-cta {
        display: block !important;
        width: 100% !important;
        padding: 14px 12px !important;
        font-size: 12px !important;
        text-align: center !important;
        margin-bottom: 8px !important;
      }
      .btn-cell {
        display: block !important;
        width: 100% !important;
        padding: 0 0 8px 0 !important;
      }
      .footer-padding { padding: 18px 14px !important; font-size: 11px !important; }
    }
  </style>
</head>
<body id="body" style="margin: 0; padding: 0; background-color: #0E1612; color: #F4F5F1; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <!-- Master Outer Wrapper -->
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="outer-wrapper" style="table-layout: fixed; width: 100%; margin: 0; padding: 28px 12px; background-color: #0E1612;">
    <tr>
      <td align="center" style="background-color: #0E1612;">
        
        <!-- Main Email Container (Desktop 590px / Fluid en móvil y tablet) -->
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="email-container" style="max-width: 590px; width: 100%; margin: 0 auto; background-color: #141F1A; border: 1px solid #283B31; border-radius: 14px; overflow: hidden; box-shadow: 0 16px 36px rgba(0,0,0,0.65);">
          
          <!-- Encabezado Institucional -->
          <tr>
            <td class="header-padding" style="background-color: #1A2821; border-bottom: 2px solid #C5B49F; padding: 28px 24px 22px; text-align: center;">
              <div style="font-size: 10px; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; color: #C5B49F; margin-bottom: 6px;">
                ✦ NUEVA SOLICITUD WEB · CONCIERGE
              </div>
              <h1 class="brand-title" style="margin: 0; font-family: Georgia, 'Times New Roman', serif; font-size: 24px; letter-spacing: 1.5px; color: #F4F5F1; font-weight: normal; line-height: 1.25;">
                Orgánico Hotel Boutique
              </h1>
              <div style="font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #9EADA3; margin-top: 5px;">
                Tepoztlán, Morelos
              </div>
            </td>
          </tr>

          <!-- Contenido Principal -->
          <tr>
            <td class="content-padding" style="padding: 24px 24px 28px;">
              
              <!-- Ficha Destacada: Cliente / Remitente -->
              <div class="card-block" style="background-color: #1B2C24; border: 1px solid #31493B; border-left: 4px solid #C5B49F; border-radius: 9px; padding: 15px 18px; margin-bottom: 11px;">
                <div style="font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: #C5B49F; font-weight: 700; margin-bottom: 4px;">
                  Cliente / Huésped
                </div>
                <div class="card-name" style="font-size: 18px; color: #F4F5F1; font-weight: 600; line-height: 1.3; word-break: break-word;">
                  ${nombre}
                </div>
              </div>

              <!-- Ficha: Correo Electrónico -->
              <div class="card-block" style="background-color: #16241D; border: 1px solid #26382E; border-radius: 9px; padding: 13px 18px; margin-bottom: 10px;">
                <div style="font-size: 10px; letter-spacing: 1.2px; text-transform: uppercase; color: #9EADA3; font-weight: 600; margin-bottom: 3px;">
                  Correo Electrónico
                </div>
                <div class="card-val" style="font-size: 15px; word-break: break-word;">
                  <a href="mailto:${correo}" style="color: #C5B49F; text-decoration: underline; font-weight: 600;">
                    ${correo}
                  </a>
                </div>
              </div>

              <!-- Ficha: Teléfono / WhatsApp -->
              <div class="card-block" style="background-color: #16241D; border: 1px solid #26382E; border-radius: 9px; padding: 13px 18px; margin-bottom: 10px;">
                <div style="font-size: 10px; letter-spacing: 1.2px; text-transform: uppercase; color: #9EADA3; font-weight: 600; margin-bottom: 3px;">
                  Teléfono / WhatsApp
                </div>
                <div class="card-val" style="font-size: 15px; color: #F4F5F1; font-weight: 600; word-break: break-word;">
                  ${
                    telUrl
                      ? `<a href="${telUrl}" style="color: #F4F5F1; text-decoration: none;">${telefono}</a>`
                      : telefono || "No especificado"
                  }
                  ${
                    waUrl
                      ? `<span style="display: inline-block; margin-left: 8px; font-size: 11px; color: #25D366; font-weight: 600;">(WhatsApp Activo)</span>`
                      : ""
                  }
                </div>
              </div>

              <!-- Ficha: Motivo de Interés -->
              <div class="card-block" style="background-color: #16241D; border: 1px solid #26382E; border-radius: 9px; padding: 13px 18px; margin-bottom: 10px;">
                <div style="font-size: 10px; letter-spacing: 1.2px; text-transform: uppercase; color: #9EADA3; font-weight: 600; margin-bottom: 3px;">
                  Motivo de Interés
                </div>
                <div class="card-val" style="font-size: 15px; color: #F4F5F1; font-weight: 500; word-break: break-word;">
                  ${motivo}
                </div>
              </div>

              <!-- Ficha Condicional: Huéspedes -->
              ${
                huespedes && huespedes.trim() !== ""
                  ? `
              <div class="card-block" style="background-color: #16241D; border: 1px solid #26382E; border-radius: 9px; padding: 13px 18px; margin-bottom: 10px;">
                <div style="font-size: 10px; letter-spacing: 1.2px; text-transform: uppercase; color: #9EADA3; font-weight: 600; margin-bottom: 3px;">
                  Nº Huéspedes / Asistentes
                </div>
                <div class="card-val" style="font-size: 15px; color: #F4F5F1; font-weight: 500;">
                  ${huespedes}
                </div>
              </div>`
                  : ""
              }

              <!-- Ficha Condicional: Fecha -->
              ${
                fecha && fecha.trim() !== ""
                  ? `
              <div class="card-block" style="background-color: #16241D; border: 1px solid #26382E; border-radius: 9px; padding: 13px 18px; margin-bottom: 10px;">
                <div style="font-size: 10px; letter-spacing: 1.2px; text-transform: uppercase; color: #9EADA3; font-weight: 600; margin-bottom: 3px;">
                  Fecha Estimada de Visita
                </div>
                <div class="card-val" style="font-size: 15px; color: #F4F5F1; font-weight: 500;">
                  ${fecha}
                </div>
              </div>`
                  : ""
              }

              <!-- Ficha: Mensaje o Detalles -->
              <div style="margin-top: 14px; margin-bottom: 22px;">
                <div style="font-size: 10.5px; letter-spacing: 1.5px; text-transform: uppercase; color: #C5B49F; font-weight: 700; margin-bottom: 6px;">
                  Mensaje o Especificaciones
                </div>
                <div style="background-color: #101914; border: 1px solid #283B31; border-left: 4px solid #C5B49F; border-radius: 9px; padding: 16px 18px; font-size: 15px; line-height: 1.65; color: #E8ECE8; white-space: pre-wrap; word-break: break-word;">
                  ${mensaje}
                </div>
              </div>

              <!-- Botones de Acción Táctiles (Mobile First) -->
              <div style="margin-top: 24px;">
                <div style="font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: #9EADA3; text-align: center; margin-bottom: 12px; font-weight: 600;">
                  Acciones Rápidas de Respuesta:
                </div>

                <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                  ${
                    waUrl
                      ? `
                  <tr>
                    <td class="btn-cell" align="center" style="padding-bottom: 10px;">
                      <a href="${waUrl}" target="_blank" class="btn-cta" style="display: block; width: 100%; box-sizing: border-box; background-color: #1B3525; color: #25D366; text-decoration: none; font-size: 13px; letter-spacing: 1px; text-transform: uppercase; font-weight: 700; padding: 14px 18px; border-radius: 8px; text-align: center; border: 1px solid #25D366; box-shadow: 0 4px 12px rgba(37, 211, 102, 0.15);">
                        💬 Responder por WhatsApp
                      </a>
                    </td>
                  </tr>`
                      : ""
                  }
                  <tr>
                    <td class="btn-cell" align="center" style="padding-bottom: 10px;">
                      <a href="${replyMailUrl}" class="btn-cta" style="display: block; width: 100%; box-sizing: border-box; background-color: #C5B49F; color: #111A15 !important; text-decoration: none; font-size: 13px; letter-spacing: 1px; text-transform: uppercase; font-weight: 700; padding: 14px 18px; border-radius: 8px; text-align: center; box-shadow: 0 4px 14px rgba(197, 180, 159, 0.25);">
                        ✉ Responder por Correo
                      </a>
                    </td>
                  </tr>
                  ${
                    telUrl
                      ? `
                  <tr>
                    <td class="btn-cell" align="center">
                      <a href="${telUrl}" class="btn-cta" style="display: block; width: 100%; box-sizing: border-box; background-color: #16241D; color: #F4F5F1; text-decoration: none; font-size: 12.5px; letter-spacing: 1px; text-transform: uppercase; font-weight: 600; padding: 12px 18px; border-radius: 8px; text-align: center; border: 1px solid #2E4237;">
                        📞 Llamar a ${telefono}
                      </a>
                    </td>
                  </tr>`
                      : ""
                  }
                </table>

                <p style="margin: 14px 0 0 0; font-size: 11.5px; color: #87988D; text-align: center; line-height: 1.45;">
                  Tip: Al hacer clic en <em>Responder</em> directamente en tu correo, tu mensaje irá automáticamente a <strong style="color: #C5B49F;">${correo}</strong>.
                </p>
              </div>

            </td>
          </tr>

          <!-- Pie de Página Institucional -->
          <tr>
            <td class="footer-padding" style="background-color: #101914; border-top: 1px solid #23342B; padding: 22px 24px; text-align: center; font-size: 11.5px; color: #87988D; line-height: 1.6;">
              <p style="margin: 0; font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase; color: #C5B49F; font-weight: 600;">
                Orgánico Hotel Boutique · Tepoztlán
              </p>
              <p style="margin: 5px 0 0 0; color: #87988D;">
                C. Netzahualcóyotl 47, Barrio de Santo Domingo, Tepoztlán, Morelos.
              </p>
              <p style="margin: 6px 0 0 0; font-size: 11px; color: #6D7F74;">
                Recepción: ${fechaHoraEnvio} · Enviado a: ${DEFAULT_RECEIVER_EMAIL}
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      nombre,
      name,
      correo,
      email,
      telefono,
      phone,
      motivo,
      subject,
      huespedes,
      guests,
      fecha,
      date,
      mensaje,
      message,
      website_hp,
      avisoPrivacidad,
    } = body;

    // 1. Antispam Honeypot Check
    if (website_hp) {
      return NextResponse.json(
        { success: true, message: "Mensaje procesado correctamente." },
        { status: 200 }
      );
    }

    // 2. Normalización y Saneamiento de datos
    const cleanNombre = sanitize(nombre || name);
    const cleanCorreo = sanitize(correo || email).toLowerCase();
    const cleanTelefono = sanitize(telefono || phone);
    const cleanMotivo = sanitize(motivo || subject) || "Reservaciones & Hospedaje";
    const cleanHuespedes = sanitize(huespedes || guests);
    const cleanFecha = sanitize(fecha || date);
    const cleanMensaje = sanitize(mensaje || message);

    // 3. Validaciones
    if (!cleanNombre || cleanNombre.length < 2) {
      return NextResponse.json(
        { success: false, error: "Por favor ingresa tu nombre completo (mínimo 2 caracteres)." },
        { status: 400 }
      );
    }

    if (!cleanCorreo || !EMAIL_REGEX.test(cleanCorreo)) {
      return NextResponse.json(
        { success: false, error: "Por favor ingresa un correo electrónico válido." },
        { status: 400 }
      );
    }

    if (!cleanTelefono || cleanTelefono.length < 7) {
      return NextResponse.json(
        { success: false, error: "Por favor ingresa un teléfono o WhatsApp de contacto válido." },
        { status: 400 }
      );
    }

    if (!cleanMensaje || cleanMensaje.length < 5) {
      return NextResponse.json(
        { success: false, error: "El mensaje debe contener al menos 5 caracteres con los detalles de tu consulta." },
        { status: 400 }
      );
    }

    if (avisoPrivacidad !== undefined && avisoPrivacidad === false) {
      return NextResponse.json(
        { success: false, error: "Debes aceptar el aviso de privacidad para continuar." },
        { status: 400 }
      );
    }

    // 4. Parámetros de envío
    const receiverEmail =
      process.env.CONTACT_RECEIVER_EMAIL?.trim() || DEFAULT_RECEIVER_EMAIL;
    const emailSubject = `[Orgánico Tepoztlán] ${cleanMotivo} - ${cleanNombre}`;
    const fechaHoraEnvio = getFormattedMexicoDate();

    const htmlContent = buildHtmlTemplate({
      nombre: cleanNombre,
      correo: cleanCorreo,
      telefono: cleanTelefono,
      motivo: cleanMotivo,
      huespedes: cleanHuespedes,
      fecha: cleanFecha,
      mensaje: cleanMensaje,
      fechaHoraEnvio,
    });

    let sentVia = "none";

    // Opción 1: Resend si RESEND_API_KEY está configurada
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY.trim());
        const fromEmail =
          process.env.RESEND_FROM_EMAIL?.trim() ||
          "Orgánico Tepoztlán <onboarding@resend.dev>";

        await resend.emails.send({
          from: fromEmail,
          to: receiverEmail,
          replyTo: cleanCorreo,
          subject: emailSubject,
          html: htmlContent,
        });

        sentVia = "resend";
      } catch (resendError) {
        console.error("[Resend Error]:", resendError);
      }
    }

    // Opción 2: Nodemailer (SMTP Gmail) con fallback a credenciales seguras
    if (sentVia === "none") {
      const smtpUser =
        process.env.SMTP_USER?.trim() ||
        process.env.EMAIL_USER?.trim() ||
        DEFAULT_SMTP_USER;
      const smtpPass =
        process.env.SMTP_PASS?.trim()?.replace(/\s+/g, "") ||
        process.env.EMAIL_PASS?.trim()?.replace(/\s+/g, "") ||
        DEFAULT_SMTP_PASS;

      if (smtpUser && smtpPass) {
        try {
          const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
              user: smtpUser,
              pass: smtpPass,
            },
          });

          await transporter.sendMail({
            from: `"Orgánico Tepoztlán Web" <${smtpUser}>`,
            to: receiverEmail,
            replyTo: cleanCorreo,
            subject: emailSubject,
            html: htmlContent,
          });

          sentVia = "nodemailer";
        } catch (smtpError) {
          console.error("[Nodemailer Error]:", smtpError);
        }
      }
    }

    if (sentVia === "none") {
      console.warn(
        "[Alerta]: No se pudo entregar por Resend ni SMTP. Revisa variables de entorno."
      );
      return NextResponse.json(
        {
          success: false,
          error:
            "No fue posible enviar el mensaje en este momento. Por favor contáctanos directamente vía WhatsApp.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "¡Tu mensaje ha sido enviado exitosamente! Nos pondremos en contacto contigo a la brevedad.",
      sentVia,
    });
  } catch (error) {
    console.error("Error en POST /api/contacto:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          "Ocurrió un error al procesar tu solicitud. Por favor intenta de nuevo o escríbenos por WhatsApp.",
      },
      { status: 500 }
    );
  }
}
