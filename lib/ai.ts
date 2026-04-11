export async function scoreIdea(idea: string) {
  const prompt = `
You are a viral content prediction engine.

Return JSON:
{
  score: number (0-100),
  reasons: string[],
  improvements: string[]
}

Idea:
${idea}
`;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    }),
  });

  const data = await res.json();

  return JSON.parse(data.choices[0].message.content);
}
