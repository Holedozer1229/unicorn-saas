import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';   // Required for @vercel/og

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  // Extract any query parameters you need (e.g., score, idea, etc.)
  const score = searchParams.get('score') || '0';
  const idea = searchParams.get('idea') || 'Your Idea';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to bottom, #000000, #1a0033)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 80, fontWeight: 'bold' }}>
          Unicorn OS
        </div>
        <div style={{ fontSize: 48, marginTop: 20 }}>
          Prediction
        </div>
        <div style={{ fontSize: 120, marginTop: 40 }}>
          {score}
        </div>
        <div style={{ fontSize: 36, opacity: 0.8, marginTop: 20 }}>
          {idea}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
