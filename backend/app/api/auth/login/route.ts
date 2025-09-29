import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { comparePassword, signJwt } from '@/lib/auth';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
};

export function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const parsed = LoginSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 400, headers: CORS_HEADERS });
    }

    const { email, password } = parsed.data;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401, headers: CORS_HEADERS });
    }

    const ok = await comparePassword(password, user.password);
    if (!ok) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401, headers: CORS_HEADERS });
    }

    const token = await signJwt({ userId: user.id, role: user.role });
    const { password: _pw, ...safeUser } = user;

    return NextResponse.json({ token, user: safeUser }, { status: 200, headers: CORS_HEADERS });
  } catch (e: any) {
    const msg = e?.message || 'Internal server error';
    return NextResponse.json({ error: msg }, { status: 500, headers: CORS_HEADERS });
  }
}
