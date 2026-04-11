import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { contentId, content, metrics, insights } = await req.json();

  // 1. Score performance
  const score =
    (metrics.likes * 2 +
      metrics.shares * 3 +
      metrics.comments * 2) /
    Math.max(metrics.impressions, 1);

  // 2. Decide action
  let action = "keep";

  if (score < 0.01) action = "rewrite";
  if (score > 0.05) action = "amplify";

  // 3. Output decision
  return NextResponse.json({
    contentId,
    score,
    action,
    nextStep:
      action === "rewrite"
        ? "send to optimization engine"
        : action === "amplify"
        ? "redistribute with variations"
        : "archive as winning pattern"
  });
}
