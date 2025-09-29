import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyJwt } from '@/lib/auth';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Methods': 'GET, OPTIONS'
};

export function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

// GET /api/consultations/queue - Get all consultations for the logged-in doctor
export async function GET(req: NextRequest) {
  try {
    const auth = req.headers.get('authorization');
    if (!auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401, headers: CORS_HEADERS });
    const token = auth.split(' ')[1];
    const payload = await verifyJwt(token);
    if (payload.role !== 'DOCTOR') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403, headers: CORS_HEADERS });
    }
    const consultations = await prisma.consultation.findMany({
      where: { doctor: { userId: payload.userId } },
      include: {
        patient: { include: { user: { select: { email: true } } } }
      },
      orderBy: { scheduledTime: 'asc' }
    });
    return NextResponse.json({ consultations }, { status: 200, headers: CORS_HEADERS });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Internal server error' }, { status: 500, headers: CORS_HEADERS });
  }
}
