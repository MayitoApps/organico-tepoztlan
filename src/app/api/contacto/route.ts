import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Resend } from "resend";

export const runtime = "nodejs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(input?: string | null): string {
  if (!input) return "";
  return String(input)
    .replace(/[<>]/g, "")
    .trim();
}

function getFormattedMexicoDate(): string {
  return new Intl.DateTimeFormat("es-MX", {
    timeZone: "America/Mexico_City",
    dateStyle: "full",
    timeStyle: "medium",
  }).format(new Date());
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
}: {
  nombre: string;
  correo: string;
  telefono: string;
  motivo: string;
  huespedes: string;
  fecha?: string;
  mensaje: string;
  fechaHoraEnvio: string;
}): string {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nueva Solicitud - Orgánico Tepoztlán</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #16241C;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #F4F5F1;
      -webkit-font-smoothing: antialiased;
    }
    table {
      border-collapse: collapse;
    }
    .wrapper {
      width: 100%;
      background-color: #16241C;
      padding: 30px 10px;
    }
    .container {
      max-width: 620px;
      margin: 0 auto;
      background-color: #22362C;
      border: 1px solid rgba(197, 180, 159, 0.25);
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }
    .header {
      background: linear-gradient(180deg, #273D32 0%, #22362C 100%);
      padding: 36px 24px;
      text-align: center;
      border-bottom: 1px solid rgba(197, 180, 159, 0.15);
    }
    .brand-subtitle {
      font-size: 11px;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: #C5B49F;
      margin-bottom: 8px;
      font-weight: 600;
    }
    .brand-title {
      font-family: 'Times New Roman', Georgia, serif;
      font-size: 28px;
      letter-spacing: 2px;
      color: #F4F5F1;
      margin: 0;
      font-weight: normal;
    }
    .badge {
      display: inline-block;
      margin-top: 14px;
      padding: 6px 14px;
      border-radius: 999px;
      background: rgba(197, 180, 159, 0.12);
      border: 1px solid rgba(197, 180, 159, 0.3);
      color: #C5B49F;
      font-size: 12px;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    .content {
      padding: 32px 24px;
    }
    .intro {
      font-size: 15px;
      line-height: 1.6;
      color: #C2CBC5;
      margin-top: 0;
      margin-bottom: 24px;
    }
    .data-table {
      width: 100%;
      margin-bottom: 28px;
      background-color: #1B2C23;
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.05);
    }
    .data-row td {
      padding: 12px 16px;
      font-size: 14px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.04);
    }
    .data-row:last-child td {
      border-bottom: none;
    }
    .data-label {
      width: 35%;
      color: #A1B3A7;
      font-weight: 500;
    }
    .data-value {
      width: 65%;
      color: #F4F5F1;
      font-weight: 600;
      word-break: break-word;
    }
    .message-card {
      background: #1B2C23;
      border-left: 3px solid #C5B49F;
      border-radius: 0 8px 8px 0;
      padding: 18px 20px;
      margin-bottom: 30px;
    }
    .message-label {
      font-size: 12px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: #C5B49F;
      margin-bottom: 8px;
      font-weight: 600;
    }
    .message-text {
      color: #F4F5F1;
      font-size: 15px;
      line-height: 1.65;
      white-space: pre-wrap;
      word-break: break-word;
    }
    .cta-container {
      text-align: center;
      padding: 10px 0 24px 0;
    }
    .cta-button {
      display: inline-block;
      background-color: #C5B49F;
      color: #16241C !important;
      text-decoration: none;
      padding: 14px 28px;
      border-radius: 6px;
      font-weight: 600;
      font-size: 14px;
      letter-spacing: 1px;
      text-transform: uppercase;
      box-shadow: 0 4px 14px rgba(197, 180, 159, 0.3);
    }
    .footer {
      border-top: 1px solid rgba(197, 180, 159, 0.12);
      padding: 22px 24px;
      text-align: center;
      background-color: #1B2C23;
    }
    .footer-text {
      font-size: 12px;
      line-height: 1.6;
      color: #A1B3A7;
      margin: 4px 0;
    }
    .footer-highlight {
      color: #A1B3A7;
    }
    @media only screen and (max-width: 480px) {
      .container { width: 100% !important; }
      .content { padding: 20px 16px !important; }
      .header { padding: 26px 16px !important; }
      .data-label { width: 40% !important; font-size: 13px !important; }
      .data-value { width: 60% !important; font-size: 13px !important; }
      .cta-button { width: 90% !important; box-sizing: border-box; }
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <table class="container" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td class="header">
          <div class="brand-subtitle">Grupo Orgánico Hoteles Boutique</div>
          <h1 class="brand-title">Orgánico Tepoztlán</h1>
          <div class="badge">Nueva Solicitud Web</div>
        </td>
      </tr>
      <tr>
        <td class="content">
          <p class="intro">
            Se ha recibido un nuevo mensaje enviado a través del formulario oficial de contacto del sitio web:
          </p>
          <table class="data-table" cellpadding="0" cellspacing="0">
            <tr class="data-row">
              <td class="data-label">Nombre:</td>
              <td class="data-value">${nombre}</td>
            </tr>
            <tr class="data-row">
              <td class="data-label">Correo:</td>
              <td class="data-value"><a href="mailto:${correo}" style="color: #C5B49F; text-decoration: underline;">${correo}</a></td>
            </tr>
            <tr class="data-row">
              <td class="data-label">Teléfono / WhatsApp:</td>
              <td class="data-value">${telefono || "No especificado"}</td>
            </tr>
            <tr class="data-row">
              <td class="data-label">Motivo de Interés:</td>
              <td class="data-value">${motivo}</td>
            </tr>
            ${
              huespedes
                ? `
            <tr class="data-row">
              <td class="data-label">Nº Huéspedes / Personas:</td>
              <td class="data-value">${huespedes}</td>
            </tr>`
                : ""
            }
            ${
              fecha
                ? `
            <tr class="data-row">
              <td class="data-label">Fecha estimada:</td>
              <td class="data-value">${fecha}</td>
            </tr>`
                : ""
            }
          </table>

          <div class="message-card">
            <div class="message-label">Mensaje o Detalles de la visita</div>
            <div class="message-text">${mensaje}</div>
          </div>

          <div class="cta-container">
            <a class="cta-button" href="mailto:${correo}?subject=Re:%20Contacto%20Org%C3%A1nico%20Tepoztl%C3%A1n%20-%20${encodeURIComponent(
    motivo
  )}">
              Responder a ${nombre}
            </a>
          </div>
        </td>
      </tr>
      <tr>
        <td class="footer">
          <p class="footer-text footer-highlight">
            Hora de recepción (CDMX): <strong>${fechaHoraEnvio}</strong>
          </p>
          <p class="footer-text">
            Este mensaje fue generado automáticamente por el portal web oficial de Orgánico Hotel Boutique Tepoztlán.
          </p>
          <p class="footer-text" style="font-size: 11px; margin-top: 8px;">
            C. Netzahualcóyotl 47, Barrio de Santo Domingo, Tepoztlán, Mor.
          </p>
        </td>
      </tr>
    </table>
  </div>
</body>
</html>
  `;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      nombre,
      correo,
      telefono,
      motivo,
      huespedes,
      fecha,
      mensaje,
      website_hp,
      avisoPrivacidad,
    } = body;

    // 1. Antispam Honeypot Check
    if (website_hp) {
      // Bot detected silently
      return NextResponse.json(
        { success: true, message: "Mensaje procesado correctamente." },
        { status: 200 }
      );
    }

    // 2. Backend Validations
    const cleanNombre = sanitize(nombre);
    const cleanCorreo = sanitize(correo).toLowerCase();
    const cleanTelefono = sanitize(telefono);
    const cleanMotivo = sanitize(motivo) || "Consulta General";
    const cleanHuespedes = sanitize(huespedes);
    const cleanFecha = sanitize(fecha);
    const cleanMensaje = sanitize(mensaje);

    if (!cleanNombre || cleanNombre.length < 2) {
      return NextResponse.json(
        { success: false, error: "El nombre es obligatorio (mínimo 2 caracteres)." },
        { status: 400 }
      );
    }

    if (!cleanCorreo || !EMAIL_REGEX.test(cleanCorreo)) {
      return NextResponse.json(
        { success: false, error: "Ingresa un correo electrónico válido." },
        { status: 400 }
      );
    }

    if (!cleanTelefono || cleanTelefono.length < 7) {
      return NextResponse.json(
        { success: false, error: "El teléfono o WhatsApp es obligatorio (mínimo 7 dígitos)." },
        { status: 400 }
      );
    }

    if (!cleanMensaje || cleanMensaje.length < 5) {
      return NextResponse.json(
        { success: false, error: "El mensaje debe contener al menos 5 caracteres." },
        { status: 400 }
      );
    }

    if (!avisoPrivacidad) {
      return NextResponse.json(
        { success: false, error: "Debes aceptar el aviso de privacidad para continuar." },
        { status: 400 }
      );
    }

    const receiverEmail =
      process.env.CONTACT_RECEIVER_EMAIL || "artes.grupoorganico@gmail.com";
    const subject = `[Web Orgánico Tepoztlán] ${cleanMotivo} - ${cleanNombre}`;
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

    // Engine 1: RESEND
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const fromEmail =
          process.env.RESEND_FROM_EMAIL ||
          "Orgánico Tepoztlán <onboarding@resend.dev>";

        await resend.emails.send({
          from: fromEmail,
          to: receiverEmail,
          replyTo: cleanCorreo,
          subject,
          html: htmlContent,
        });

        sentVia = "resend";
      } catch (resendError) {
        console.error("Error enviando vía Resend:", resendError);
        // Fallback to Nodemailer if configured
      }
    }

    // Engine 2: Nodemailer (SMTP)
    if (
      sentVia === "none" &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS
    ) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: `"Orgánico Tepoztlán Web" <${process.env.SMTP_USER}>`,
          to: receiverEmail,
          replyTo: cleanCorreo,
          subject,
          html: htmlContent,
        });

        sentVia = "nodemailer";
      } catch (smtpError) {
        console.error("Error enviando vía Nodemailer:", smtpError);
      }
    }

    // Fallback: Modo seguro en desarrollo o si no hay credenciales
    if (sentVia === "none") {
      console.log("==================================================");
      console.log(" MODO DESARROLLO / FALLBACK SEGURO - MENSAJE WEB  ");
      console.log("==================================================");
      console.log(`Para: ${receiverEmail}`);
      console.log(`Asunto: ${subject}`);
      console.log(`De: ${cleanNombre} <${cleanCorreo}> (${cleanTelefono})`);
      console.log(`Motivo: ${cleanMotivo}`);
      console.log(`Huéspedes: ${cleanHuespedes || "N/A"}`);
      console.log(`Mensaje: ${cleanMensaje}`);
      console.log("==================================================");
      sentVia = "fallback-console";
    }

    return NextResponse.json({
      success: true,
      message: "¡Mensaje recibido con éxito! Nos pondremos en contacto a la brevedad.",
      sentVia,
    });
  } catch (error) {
    console.error("Error en POST /api/contacto:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Ocurrió un error al procesar tu solicitud. Por favor intenta de nuevo o escríbenos por WhatsApp.",
      },
      { status: 500 }
    );
  }
}
