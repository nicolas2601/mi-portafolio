import type { APIRoute } from 'astro';
import { z } from 'zod';
import sgMail from '@sendgrid/mail';

// Esquema de validación para el formulario de contacto
const ContactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres')
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Validar los datos del formulario
    const result = ContactSchema.safeParse(data);
    
    if (!result.success) {
      return new Response(
        JSON.stringify({
          success: false,
          errors: result.error.format()
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }
    
    // Obtener las variables de entorno
    const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;
    const CONTACT_EMAIL = import.meta.env.CONTACT_EMAIL;
    
    if (!RESEND_API_KEY || !CONTACT_EMAIL) {
      console.error('Faltan variables de entorno: RESEND_API_KEY o CONTACT_EMAIL');
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Error de configuración del servidor'
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }
    
    // Enviar el email usando SendGrid
    sgMail.setApiKey(RESEND_API_KEY);
    
    const { name, email, message } = result.data;
    
    const msg = {
      to: CONTACT_EMAIL,
      from: CONTACT_EMAIL, // Debe ser un remitente verificado en SendGrid
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
      html: `<strong>Nombre:</strong> ${name}<br>
            <strong>Email:</strong> ${email}<br><br>
            <strong>Mensaje:</strong><br>
            <p>${message.replace(/\n/g, '<br>')}</p>`
    };
    
    try {
      await sgMail.send(msg);
    } catch (error) {
      console.error('Error al enviar email:', error);
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Error al enviar el mensaje'
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Mensaje recibido correctamente'
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    console.error('Error en el endpoint de contacto:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Error al procesar la solicitud'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
};