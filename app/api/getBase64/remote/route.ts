import { NextRequest, NextResponse } from "next/server";
import lqip from "lqip-modern";

export const dynamic = "force-dynamic";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }

  try {
    // Ambil image sebagai buffer
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Generate base64 blur placeholder
    const placeholder = await lqip(buffer);
    const base64 = placeholder.metadata.dataURIBase64;

    return NextResponse.json({ data: base64 }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch image" },
      { status: 500 }
    );
  }
};
