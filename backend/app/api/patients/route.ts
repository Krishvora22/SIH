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

export async function GET(req: NextRequest) {
  try {
    // Only allow doctors to fetch all patients
    const auth = req.headers.get('authorization');
    if (!auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401, headers: CORS_HEADERS });
    const token = auth.split(' ')[1];
    const payload = await verifyJwt(token);
    if (payload.role !== 'DOCTOR') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403, headers: CORS_HEADERS });
    }
    const patients = await prisma.patient.findMany({
      include: { user: { select: { email: true } } }
    });
    return NextResponse.json({ patients }, { status: 200, headers: CORS_HEADERS });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Internal server error' }, { status: 500, headers: CORS_HEADERS });
  }
}
