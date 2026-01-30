import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email es requerido' },
        { status: 400 }
      );
    }

    // Marcar como inactivo en lugar de eliminar
    const { error } = await supabase
      .from('subscribers')
      .update({ active: false })
      .eq('email', email);

    if (error) {
      console.error('Error al desuscribir:', error);
      return NextResponse.json(
        { error: 'Error al procesar la desuscripción' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Error al procesar la desuscripción' },
      { status: 500 }
    );
  }
}