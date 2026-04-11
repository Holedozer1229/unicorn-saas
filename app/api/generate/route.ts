import { NextResponse } from "next/server";
import OpenAI from "openai";
import { generatePrompts } from "@/lib/prompts";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  const { input } = await req.json();
  const prompts = generatePrompts(input);

  const [x, tiktok, linkedin, ad] = await Promise.all([
    openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompts.x }]
    }),
    openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompts.tiktok }]
    }),
    openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompts.linkedin }]
    }),
    openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompts.ad }]
    })
  ]);

  return NextResponse.json({
    x: x.choices[0].message.content,
    tiktok: tiktok.choices[0].message.content,
    linkedin: linkedin.choices[0].message.content,
    ad: ad.choices[0].message.content,
  });
}
