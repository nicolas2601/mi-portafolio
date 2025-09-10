import type { APIRoute } from 'astro';
import { Resend } from 'resend';

// Marcar como server-rendered
export const prerender = false;

const resend = new Resend('re_NyBJVWgW_BByFG7E7KP8PTuuFjQ9XXtDs');

export const POST: APIRoute = async ({ request }) => {
  try {
    // Verificar Content-Type y parsear datos
    let name: string, email: string, subject: string, message: string;
    
    const contentType = request.headers.get('content-type');
    
    if (contentType?.includes('application/json')) {
      const body = await request.json();
      name = body.name;
      email = body.email;
      subject = body.subject;
      message = body.message;
    } else {
      const formData = await request.formData();
      name = formData.get('name') as string;
      email = formData.get('email') as string;
      subject = formData.get('subject') as string;
      message = formData.get('message') as string;
    }

    // Validación de datos
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Todos los campos son obligatorios' 
        }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Email inválido' 
        }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

    // Envío del email
    const emailData = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'nmoreno534@unab.edu.co',
      subject: `Nuevo mensaje de contacto: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Nuevo mensaje de contacto
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Asunto:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #495057; margin-top: 0;">Mensaje:</h3>
            <p style="line-height: 1.6; color: #6c757d;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 8px; font-size: 12px; color: #6c757d;">
            <p>Este mensaje fue enviado desde el formulario de contacto de tu portafolio.</p>
            <p>Fecha: ${new Date().toLocaleString('es-ES')}</p>
          </div>
        </div>
      `
    });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Mensaje enviado correctamente',
        id: emailData.data?.id
      }),
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

  } catch (error) {
    console.error('Error al enviar email:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Error interno del servidor. Inténtalo más tarde.' 
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