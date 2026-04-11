import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const {
    contentId,
    platform,
    impressions,
    likes,
    shares,
    comments,
    saves,
    watchTime
  } = await req.json();

  const viralityScore =
    impressions > 0
      ? ((likes * 2 + shares * 3 + comments * 2 + saves * 3 + watchTime * 0.1) / impressions) * 100
      : 0;

  const record = {
    contentId,
    platform,
    viralityScore,
    raw: { impressions, likes, shares, comments, saves, watchTime },
    timestamp: Date.now()
  };

  // TODO: store in DB (Supabase / Postgres / Redis)
  console.log("LEARNING_EVENT", record);

  return NextResponse.json({ ok: true, viralityScore });
}
