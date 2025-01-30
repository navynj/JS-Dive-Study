import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  try {
    const curriculumPath = path.resolve(process.cwd(), "public", "curriculum.json");
    const file = await fs.readFile(curriculumPath, "utf-8");
    const { data: curriculum } = JSON.parse(file);

    return NextResponse.json({ curriculum });
  } catch (error) {
    console.error("❌ Error reading curriculum data:", error);
    return NextResponse.json({ curriculum: [] }, { status: 500 });
  }
}
