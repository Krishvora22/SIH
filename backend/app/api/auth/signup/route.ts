import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { hashPassword } from '@/lib/auth';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
};

export function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

const SignupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(['PATIENT', 'DOCTOR', 'PROVIDER']),
  // Patient
  fullName: z.string().optional(),
  phone: z.string().optional(),
  // Doctor
  degree: z.string().optional(),
  experience: z.number().int().nonnegative().optional(),
  description: z.string().optional(),
  profileImage: z.string().url().optional(),
  // Provider
  name: z.string().optional(),
  address: z.string().optional()
});

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const parsed = SignupSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 400, headers: CORS_HEADERS });
    }

    const { email, password, role } = parsed.data;

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json({ error: 'Email already in use' }, { status: 409, headers: CORS_HEADERS });
    }

    const hashed = await hashPassword(password);

    const result = await prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: { email, password: hashed, role }
      });

      if (role === 'PATIENT') {
        const { fullName, phone } = parsed.data;
        if (!fullName || !phone) throw new Error('fullName and phone required for PATIENT');
        await tx.patient.create({ data: { userId: user.id, fullName, phone } });
      }

      if (role === 'DOCTOR') {
        const { fullName, phone, degree, experience, description, profileImage } = parsed.data;
        if (!fullName || !phone || !degree || experience === undefined || !description) {
          throw new Error('Missing required doctor fields');
        }
        await tx.doctor.create({
          data: { userId: user.id, fullName, phone, degree, experience, description, profileImage }
        });
      }

      if (role === 'PROVIDER') {
        const { name, phone, address, description } = parsed.data as any;
        if (!name || !phone || !address || !description) {
          throw new Error('Missing required provider fields');
        }
        await tx.provider.create({ data: { userId: user.id, name, phone, address, description } });
      }

      const { password: _pw, ...safeUser } = user;
      return safeUser;
    });

    return NextResponse.json({ user: result }, { status: 201, headers: CORS_HEADERS });
  } catch (e: any) {
    const msg = e?.message || 'Internal server error';
    return NextResponse.json({ error: msg }, { status: 500, headers: CORS_HEADERS });
  }
}
