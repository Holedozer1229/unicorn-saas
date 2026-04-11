export function buildViralCard(input: {
  score: number;
  idea: string;
}) {
  return {
    title: "Unicorn OS Viral Prediction",
    subtitle: "AI Attention Forecast",
    score: input.score,
    hook:
      input.score > 80
        ? "This idea is engineered to go viral."
        : "This idea needs optimization before posting.",
    cta: "Try your idea → unicorn-os.vercel.app",
  };
}
