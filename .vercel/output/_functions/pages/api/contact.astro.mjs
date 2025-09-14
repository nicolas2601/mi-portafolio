import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const resend = new Resend("re_NyBJVWgW_BByFG7E7KP8PTuuFjQ9XXtDs");
const POST = async ({ request }) => {
  try {
    let name, email, subject, message;
    const contentType = request.headers.get("content-type");
    if (contentType?.includes("application/json")) {
      const body = await request.json();
      name = body.name;
      email = body.email;
      subject = body.subject;
      message = body.message;
    } else {
      const formData = await request.formData();
      name = formData.get("name");
      email = formData.get("email");
      subject = formData.get("subject");
      message = formData.get("message");
    }
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Email inválido"
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    if (name.length > 100 || email.length > 100 || subject.length > 200 || message.length > 1e3) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Uno o más campos exceden la longitud máxima permitida"
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    const emailData = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["nmoreno534@unab.edu.co"],
      subject: `Nuevo mensaje de contacto: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Nuevo mensaje desde tu portafolio
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Nombre:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 0 0 10px 0;"><strong>Asunto:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #495057; margin-top: 0;">Mensaje:</h3>
            <p style="line-height: 1.6; color: #6c757d; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 8px; font-size: 12px; color: #6c757d;">
            <p style="margin: 0;">Este mensaje fue enviado desde el formulario de contacto de tu portafolio.</p>
            <p style="margin: 5px 0 0 0;">Fecha: ${(/* @__PURE__ */ new Date()).toLocaleString("es-ES", { timeZone: "America/Bogota" })}</p>
          </div>
        </div>
      `,
      replyTo: email
    });
    if (emailData.error) {
      console.error("Error de Resend:", emailData.error);
      return new Response(
        JSON.stringify({
          success: false,
          error: "Error al enviar el email. Por favor, intenta nuevamente."
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    return new Response(
      JSON.stringify({
        success: true,
        message: "Mensaje enviado correctamente",
        id: emailData.data?.id
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
