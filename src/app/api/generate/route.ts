import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  const digit = req.nextUrl.searchParams.get("digit") || "0";

  const images = Array.from(
    { length: 5 },
    (_, i) => `/images/${digit}_${i}.png`
  );

  return NextResponse.json({ images });
}
