import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const memberDir = path.join(process.cwd(), 'public', 'member');
    const memberNames = await fs.readdir(memberDir, 'utf-8');

    return NextResponse.json(memberNames);
  } catch (error) {
    console.error('❌ Error reading members:', error);
    return NextResponse.json([], { status: 500 });
  }
}
