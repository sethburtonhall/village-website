import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Village - Group Sign-ups Made Simple';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #7C3AED, #EC4899)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          color: 'white',
          padding: '48px',
          gap: '24px',
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          Village
        </div>
        <div
          style={{
            fontSize: 36,
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          Simple Group Sign-up Forms
        </div>
        <div
          style={{
            fontSize: 24,
            textAlign: 'center',
            opacity: 0.8,
            marginTop: '20px',
          }}
        >
          No complexity, just simplicity
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
