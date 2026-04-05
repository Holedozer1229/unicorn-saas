import { generateText, Output } from "ai"
import { z } from "zod"

const contentStrategySchema = z.object({
  viralIdeas: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      viralPotential: z.enum(["High", "Medium", "Low"]),
    })
  ),
  hooks: z.array(
    z.object({
      text: z.string(),
      type: z.enum(["Question", "Statement", "Controversial", "Story"]),
    })
  ),
  scripts: z.array(
    z.object({
      title: z.string(),
      intro: z.string(),
      body: z.string(),
      callToAction: z.string(),
    })
  ),
  captions: z.array(
    z.object({
      text: z.string(),
      hashtags: z.array(z.string()),
    })
  ),
  monetizationIdeas: z.array(
    z.object({
      strategy: z.string(),
      description: z.string(),
      potentialRevenue: z.string(),
      difficulty: z.enum(["Easy", "Medium", "Hard"]),
    })
  ),
})

export async function POST(req: Request) {
  try {
    const { niche, platform } = await req.json()

    if (!niche || !platform) {
      return Response.json(
        { error: "Niche and platform are required" },
        { status: 400 }
      )
    }

    const { output } = await generateText({
      model: "openai/gpt-4o-mini",
      output: Output.object({
        schema: contentStrategySchema,
      }),
      messages: [
        {
          role: "system",
          content: `You are an expert content strategist specializing in viral content creation. 
Generate creative, engaging, and platform-specific content strategies that can help creators go viral and monetize their audience.
Always provide actionable, specific advice tailored to the niche and platform.`,
        },
        {
          role: "user",
          content: `Generate a comprehensive content strategy for a creator in the "${niche}" niche on ${platform}.

Please provide:
1. 5 viral content ideas with titles, descriptions, and viral potential ratings
2. 5 attention-grabbing hooks (mix of questions, statements, controversial takes, and story openers)
3. 3 complete short-form scripts with intro, body, and call-to-action
4. 5 captions with relevant hashtags
5. 5 monetization ideas with strategy descriptions, potential revenue estimates, and difficulty levels

Make the content specific to ${platform}'s format and audience expectations.`,
        },
      ],
    })

    return Response.json(output)
  } catch (error) {
    console.error("Generation error:", error)
    return Response.json(
      { error: "Failed to generate content strategy" },
      { status: 500 }
    )
  }
}
