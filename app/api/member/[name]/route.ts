import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET(req: NextRequest) {
  // URL에서 멤버 이름 추출
  const url = new URL(req.url);
  const name = url.pathname.split("/").pop(); // URL의 마지막 부분이 `name`

  if (!name) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  try {
    // README.mdx 경로 설정
    const filePath = path.join(process.cwd(), "content", "member", name, "README.mdx");

    // 파일 읽기
    const fileContent = await fs.readFile(filePath, "utf-8");

    return NextResponse.json({ content: fileContent });
  } catch (error) {
    console.error(`⚠️ Failed to read README.mdx for ${name}:`, error);
    return NextResponse.json({ error: "README not found" }, { status: 404 });
  }
}
