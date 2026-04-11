export const generatePrompts = (input: string) => ({
  x: `
Turn this idea into a viral X post:

Idea: ${input}

Rules:
- strong hook in first line
- max 3–5 lines
- curiosity gap
- no fluff
`,

  tiktok: `
Create a TikTok script:

Idea: ${input}

Format:
- Hook (0–3 sec)
- 3 beats
- Ending CTA
`,

  linkedin: `
Write a LinkedIn post:

Idea: ${input}

Tone: authority + reflection
`,

  ad: `
Write ad copy:

Idea: ${input}

Rules:
- short
- direct
- conversion focused
`
});
