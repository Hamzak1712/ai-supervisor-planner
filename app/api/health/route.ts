import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'OK',
    service: 'AI-Powered Supervisor Selection and Project Planning Assistant',
    timestamp: new Date().toISOString(),
  });
}