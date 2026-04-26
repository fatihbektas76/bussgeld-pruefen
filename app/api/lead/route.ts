import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // TODO: Validierung mit zod, Speicherung in DB, E-Mail-Versand
    console.log('[Lead]', JSON.stringify(body, null, 2));

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Ungültige Anfrage' },
      { status: 400 },
    );
  }
}
