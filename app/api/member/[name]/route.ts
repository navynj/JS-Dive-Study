import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET(req: Request, { params }: { params: { name: string } }) {
  const { name } = params;

  try {
    // README.mdx 경로 설정
    const filePath = path.resolve(process.cwd(), "content", "member", name, "README.mdx");
    
    // 파일 읽기
    const fileContent = await fs.readFile(filePath, "utf-8");
    
    return NextResponse.json({ content: fileContent });
  } catch (error) {
    console.error(`⚠️ Failed to read README.mdx for ${name}:`, error);
    return NextResponse.json({ error: "README not found" }, { status: 404 });
  }
}
