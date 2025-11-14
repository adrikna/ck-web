import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";
import lqip from "lqip-modern";

export const dynamic = "force-dynamic";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const filePath = searchParams.get("filePath");

  if (!filePath) {
    return NextResponse.json(
      { error: "File path is required" },
      { status: 400 }
    );
  }

  try {
    // Pastikan path relatif diarahkan ke public folder
    const resolvedPath = filePath.startsWith("/")
      ? path.join(process.cwd(), "public", filePath)
      : path.join(process.cwd(), "public", "/", filePath);

    // Baca file image
    const file = await fs.readFile(resolvedPath);

    // Generate placeholder base64
    const placeholder = await lqip(file);
    const base64 = placeholder.metadata.dataURIBase64;

    return NextResponse.json({ data: base64 }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to read image" },
      { status: 500 }
    );
  }
};
