import sgMail from '@sendgrid/mail';
export { renderers } from '../../renderers.mjs';

const prerender = false;
sgMail.setApiKey("");
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function sanitizeText(text) {
  return text.trim().replace(/[<>"'&]/g, (match) => {
    const entities = {
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "&": "&amp;"
    };
    return entities[match] || match;
  });
}
function isSpam(data) {
  const spamKeywords = ["viagra", "casino", "lottery", "winner", "congratulations", "click here", "free money"];
  const text = `${data.name} ${data.email} ${data.subject} ${data.message}`.toLowerCase();
  if (spamKeywords.some((keyword) => text.includes(keyword))) {
    return true;
  }
  const linkCount = (data.message.match(/https?:\/\//g) || []).length;
  if (linkCount > 2) {
    return true;
  }
  if (/([a-zA-Z])\1{4,}/.test(data.message)) {
    return true;
  }
  return false;
}
const POST = async ({ request }) => {
  try {
    const contentType = request.headers.get("content-type");
    let data;
    if (contentType?.includes("application/json")) {
      data = await request.json();
    } else if (contentType?.includes("application/x-www-form-urlencoded")) {
      const formData = await request.formData();
      data = {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message")
      };
    } else {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Content-Type no soportado"
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    const { name, email, subject, message } = data;
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Todos los campos son obligatorios"
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    if (typeof name !== "string" || typeof email !== "string" || typeof subject !== "string" || typeof message !== "string") {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Formato de datos inválido"
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    if (!isValidEmail(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "El formato del email no es válido"
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    if (name.length < 2 || name.length > 100) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "El nombre debe tener entre 2 y 100 caracteres"
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    if (email.length > 100) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "El email no puede exceder 100 caracteres"
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    if (subject.length < 5 || subject.length > 200) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "El asunto debe tener entre 5 y 200 caracteres"
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    if (message.length < 10 || message.length > 2e3) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "El mensaje debe tener entre 10 y 2000 caracteres"
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    const sanitizedData = {
      name: sanitizeText(name),
      email: sanitizeText(email),
      subject: sanitizeText(subject),
      message: sanitizeText(message)
    };
    if (isSpam(sanitizedData)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Mensaje detectado como spam"
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    if (!undefined                                ) {
      console.error("SENDGRID_API_KEY no está configurada");
      return new Response(
        JSON.stringify({
          success: false,
          error: "Servicio de email no configurado"
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    const emailData = {
      to: "nmoreno534@unab.edu.co",
      from: {
        email: "noreply@nicolasmoreno.dev",
        name: "Portfolio Contact"
      },
      replyTo: sanitizedData.email,
      subject: `Nuevo mensaje de contacto: ${sanitizedData.subject}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600;">Nuevo Mensaje de Contacto</h1>
            <p style="color: #e2e8f0; margin: 10px 0 0 0; font-size: 16px;">Desde tu portafolio web</p>
          </div>
          
          <div style="padding: 30px; background-color: white; margin: 0;">
            <div style="background-color: #f1f5f9; padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #667eea;">
              <h2 style="color: #334155; margin: 0 0 15px 0; font-size: 20px;">Información del Contacto</h2>
              <p style="margin: 8px 0; color: #475569; font-size: 16px;"><strong style="color: #1e293b;">Nombre:</strong> ${sanitizedData.name}</p>
              <p style="margin: 8px 0; color: #475569; font-size: 16px;"><strong style="color: #1e293b;">Email:</strong> ${sanitizedData.email}</p>
              <p style="margin: 8px 0; color: #475569; font-size: 16px;"><strong style="color: #1e293b;">Asunto:</strong> ${sanitizedData.subject}</p>
            </div>
            
            <div style="background-color: #ffffff; padding: 25px; border: 2px solid #e2e8f0; border-radius: 12px; margin-bottom: 25px;">
              <h3 style="color: #334155; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">Mensaje:</h3>
              <div style="line-height: 1.7; color: #475569; font-size: 16px; white-space: pre-wrap; background-color: #f8fafc; padding: 20px; border-radius: 8px;">${sanitizedData.message}</div>
            </div>
            
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; border: 1px solid #bae6fd;">
              <p style="margin: 0; font-size: 14px; color: #0369a1; text-align: center;">
                <strong>📧 Mensaje enviado desde:</strong> Portfolio de Nicolás Moreno<br>
                <strong>🕒 Fecha:</strong> ${(/* @__PURE__ */ new Date()).toLocaleString("es-ES", {
        timeZone: "America/Bogota",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      })}<br>
                <strong>🌐 IP:</strong> ${request.headers.get("x-forwarded-for") || "No disponible"}
              </p>
            </div>
          </div>
          
          <div style="background-color: #1e293b; padding: 20px; text-align: center;">
            <p style="color: #94a3b8; margin: 0; font-size: 14px;">Este email fue generado automáticamente. No responder a esta dirección.</p>
          </div>
        </div>
      `,
      text: `
Nuevo mensaje de contacto desde tu portafolio

Nombre: ${sanitizedData.name}
Email: ${sanitizedData.email}
Asunto: ${sanitizedData.subject}

Mensaje:
${sanitizedData.message}

Fecha: ${(/* @__PURE__ */ new Date()).toLocaleString("es-ES", { timeZone: "America/Bogota" })}
IP: ${request.headers.get("x-forwarded-for") || "No disponible"}
      `
    };
    await sgMail.send(emailData);
    return new Response(
      JSON.stringify({
        success: true,
        message: "¡Mensaje enviado correctamente! Te responderé pronto."
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.error("Error en el endpoint de contacto:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Error interno del servidor. Por favor, intenta nuevamente."
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
