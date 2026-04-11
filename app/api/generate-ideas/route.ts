import { NextRequest, NextResponse } from 'next/server';
import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { generatePrompts } from '@/lib/prompts';

export const runtime = 'nodejs'; // 🔥 IMPORTANT for OpenAI SDK stability

export async function POST(request: NextRequest) {
  try {
    const { input } = await request.json();

    if (!input || typeof input !== 'string') {
      return NextResponse.json(
        { error: 'Valid input is required' },
        { status: 400 }
      );
    }

    const prompts = generatePrompts(input);

    // ⚠️ Safer sequential initialization (prevents rate spikes)
    const xStream = await streamText({
      model: openai('gpt-4o-mini'),
      messages: [{ role: 'user', content: prompts.x }],
      temperature: 0.85,
    });

    const tiktokStream = await streamText({
      model: openai('gpt-4o-mini'),
      messages: [{ role: 'user', content: prompts.tiktok }],
      temperature: 0.85,
    });

    const linkedinStream = await streamText({
      model: openai('gpt-4o-mini'),
      messages: [{ role: 'user', content: prompts.linkedin }],
      temperature: 0.85,
    });

    const adStream = await streamText({
      model: openai('gpt-4o-mini'),
      messages: [{ role: 'user', content: prompts.ad }],
      temperature: 0.85,
    });

    const combinedStream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();

        const streams = [
          { label: 'x', stream: xStream },
          { label: 'tiktok', stream: tiktokStream },
          { label: 'linkedin', stream: linkedinStream },
          { label: 'ad', stream: adStream },
        ];

        for (const { label, stream } of streams) {
          controller.enqueue(
            encoder.encode(`\n\n=== ${label.toUpperCase()} ===\n`)
          );

          // ✅ safer AI SDK streaming API
          for await (const chunk of stream.textStream) {
            controller.enqueue(encoder.encode(chunk));
          }
        }

        controller.close();
      },
    });

    return new Response(combinedStream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache, no-transform',
      },
    });

  } catch (error: any) {
    console.error('Generate Ideas Error:', error);

    return NextResponse.json(
      {
        error: 'Failed to generate ideas',
        message: error?.message ?? 'Unknown error',
      },
      { status: 500 }
    );
  }
}
