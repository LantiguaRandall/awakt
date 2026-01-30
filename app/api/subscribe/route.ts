import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validación
    if (!email) {
      return NextResponse.json(
        { error: 'Email es requerido' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Verificar si el email ya está suscrito
    const { data: existingSubscriber } = await supabase
      .from('subscribers')
      .select('email, active')
      .eq('email', email)
      .single();

    if (existingSubscriber) {
      if (existingSubscriber.active) {
        return NextResponse.json(
          { error: 'Este email ya está suscrito' },
          { status: 400 }
        );
      } else {
        // Reactivar suscripción
        const { error: updateError } = await supabase
          .from('subscribers')
          .update({ active: true, subscribed_at: new Date().toISOString() })
          .eq('email', email);

        if (updateError) {
          console.error('Error al reactivar suscripción:', updateError);
          return NextResponse.json(
            { error: 'Error al procesar la suscripción' },
            { status: 500 }
          );
        }
      }
    } else {
      // Guardar nuevo suscriptor en Supabase
      const { error: insertError } = await supabase
        .from('subscribers')
        .insert([{ email }]);

      if (insertError) {
        console.error('Error al guardar suscriptor:', insertError);
        return NextResponse.json(
          { error: 'Error al procesar la suscripción' },
          { status: 500 }
        );
      }
    }

    // Enviar email de bienvenida al suscriptor
    await resend.emails.send({
      from: 'AWAKT <notificaciones@awakt.com>',
      to: [email],
      subject: '¡Bienvenido a AWAKT!',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #22c55e; color: white; padding: 40px 20px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background-color: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>¡Bienvenido a AWAKT!</h1>
              </div>
              <div class="content">
                <p>Hola,</p>
                <p>¡Gracias por suscribirte a nuestro newsletter!</p>
                <p>Ahora serás el primero en enterarte de:</p>
                <ul>
                  <li>Nuevos talleres y eventos creativos</li>
                  <li>Retiros artísticos en la naturaleza</li>
                  <li>Ofertas especiales exclusivas</li>
                  <li>Contenido inspirador sobre arte y creatividad</li>
                </ul>
                <p>Estamos emocionados de tenerte en nuestra comunidad.</p>
                <p style="margin-top: 30px;">Con creatividad,<br><strong>El equipo de AWAKT</strong></p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // Notificarte a ti que alguien se suscribió
    await resend.emails.send({
      from: 'AWAKT <notificaciones@awakt.com>',
      to: ['awakt.rd@gmail.com'],
      subject: `Nueva suscripción al newsletter`,
      html: `
        <!DOCTYPE html>
        <html>
          <body>
            <h2>Nueva suscripción</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-DO')}</p>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ 
      success: true,
      message: existingSubscriber ? 'Suscripción reactivada' : 'Suscripción exitosa'
    });
  } catch (error) {
    console.error('Error al procesar suscripción:', error);
    return NextResponse.json(
      { error: 'Error al procesar la suscripción' },
      { status: 500 }
    );
  }
}