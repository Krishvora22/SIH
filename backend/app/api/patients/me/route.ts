import { NextRequest, NextResponse } from 'next/server';
import { verifyJwt } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  try {
    const auth = req.headers.get('authorization');
    if (!auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const token = auth.split(' ')[1];
    const payload = await verifyJwt(token);

    const patient = await prisma.patient.findUnique({
      where: { userId: payload.userId },
      include: { user: { select: { id: true, email: true, role: true, createdAt: true, updatedAt: true } } }
    });

    if (!patient) return NextResponse.json({ error: 'Profile not found' }, { status: 404 });

    return NextResponse.json({ patient }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Internal server error' }, { status: 500 });
  }
}
