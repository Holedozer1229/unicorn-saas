import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  const score = searchParams.get('score') || '0';
  const idea = searchParams.get('idea') || 'Your Startup Idea';

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
          background: 'linear-gradient(to bottom, #0a0a0a, #1a0033)',
          color: '#ffffff',
          fontFamily: 'system-ui, sans-serif',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: 80, fontWeight: 'bold', marginBottom: 20 }}>
          Unicorn OS
        </div>
        <div style={{ fontSize: 48, marginBottom: 40 }}>
          Idea Prediction
        </div>
        <div style={{ fontSize: 120, fontWeight: 'bold', marginBottom: 20 }}>
          {score}/100
        </div>
        {idea && (
          <div style={{ fontSize: 36, opacity: 0.85, maxWidth: '80%' }}>
            {idea}
          </div>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
