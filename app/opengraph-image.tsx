import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt =
  'Village - Modern group sign-up tool for any community or organization. No ads. No accounts required. The SignupGenius alternative.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  // Load Nunito ExtraBold from Google Fonts
  const nunitoData = await fetch(
    'https://fonts.gstatic.com/s/nunito/v26/XRXI3I6Li01BKofiOc5wtlZ2di8HDLshdTk3j77e.woff2'
  ).then((res) => res.arrayBuffer());

  // Load Caveat for signature font
  const caveatData = await fetch(
    'https://fonts.gstatic.com/s/caveat/v18/WnznHAc43b8R2xxXYQ1_u5yq.woff2'
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    <div
      style={{
        width: 1200,
        height: 630,
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        padding: '60px',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'Nunito',
      }}
    >
      {/* Background glow - bottom-left */}
      <div
        style={{
          position: 'absolute',
          bottom: -150,
          left: -150,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,197,94,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      {/* Background glow - top-right */}
      <div
        style={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(156,64,255,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {/* Clipboard icon */}
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#059669"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transform: 'rotate(-3deg)' }}
          >
            <rect x="9" y="2" width="6" height="4" rx="1" />
            <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
          </svg>
          <h1
            style={{
              fontFamily: 'Nunito',
              fontWeight: 800,
              fontSize: 36,
              color: '#000000',
              margin: 0,
            }}
          >
            Village
          </h1>
        </div>
      </div>

      {/* Main content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          marginTop: 'auto',
          marginBottom: 'auto',
          paddingTop: 40,
        }}
      >
        <p
          style={{
            fontFamily: 'Nunito',
            fontSize: 15,
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#78716c',
            margin: 0,
            marginBottom: 8,
          }}
        >
          The modern SignUpGenius alternative
        </p>

        <h1
          style={{
            fontFamily: 'Nunito',
            fontWeight: 800,
            fontSize: 82,
            lineHeight: 1.1,
            color: '#000000',
            margin: 0,
          }}
        >
          Group
          <span
            style={{
              fontFamily: 'Caveat',
              fontSize: 50,
              color: '#059669',
              marginLeft: 8,
            }}
          >
            sign-ups
          </span>
        </h1>

        <h1
          style={{
            fontFamily: 'Nunito',
            fontWeight: 800,
            fontSize: 82,
            lineHeight: 1.1,
            color: '#000000',
            margin: 0,
          }}
        >
          made&nbsp;
          <span
            style={{
              background: 'linear-gradient(to right, #ffaa40, #9c40ff, #ffaa40)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            simple.
          </span>
        </h1>
      </div>

      {/* Footer */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span
            style={{
              fontFamily: 'Nunito',
              fontSize: 15,
              color: '#78716c',
            }}
          >
            For any community or organization.
          </span>
          <span
            style={{
              fontFamily: 'Nunito',
              fontSize: 13,
              fontStyle: 'italic',
              color: '#57534e',
            }}
          >
            No ads · No accounts required for participants
          </span>
        </div>
        <span
          style={{
            fontFamily: 'Nunito',
            fontSize: 20,
            fontWeight: 700,
            color: '#059669',
          }}
        >
          usevillage.app
        </span>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: 'Nunito',
          data: nunitoData,
          weight: 800,
          style: 'normal',
        },
        {
          name: 'Caveat',
          data: caveatData,
          weight: 400,
          style: 'normal',
        },
      ],
    }
  );
}
