
import { Resend } from 'resend';

// Configurar Resend con variable de entorno
const resend = new Resend(process.env.RESEND_API_KEY || 're_NyBJVWgW_BByFG7E7KP8PTuuFjQ9XXtDs');

export default async function handler(req: import('@vercel/node').VercelRequest, res: import('@vercel/node').VercelResponse) {
  // Solo permitir POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Método no permitido' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validación de datos
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'Todos los campos son obligatorios' 
      });
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Email inválido' 
      });
    }

    // Validación de longitud
    if (name.length > 100 || email.length > 100 || subject.length > 200 || message.length > 1000) {
      return res.status(400).json({ 
        success: false, 
        error: 'Uno o más campos exceden la longitud máxima permitida' 
      });
    }

    // Enviar email usando Resend
    const emailData = {
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['nmoreno534@unab.edu.co'],
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
            <p style="margin: 5px 0 0 0;">Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'America/Bogota' })}</p>
          </div>
        </div>
      `,
      replyTo: email
    };

    const result = await resend.emails.send(emailData);

    if (result.error) {
      console.error('Error de Resend:', result.error);
      return res.status(500).json({ 
        success: false, 
        error: 'Error al enviar el email. Por favor, intenta nuevamente.' 
      });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Mensaje enviado correctamente',
      id: result.data?.id 
    });

  } catch (error) {
    console.error('Error en el endpoint de contacto:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Error interno del servidor. Por favor, intenta nuevamente.' 
    });
  }
}