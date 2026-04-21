import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Village Venues - Find & List Event Spaces';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const loraData = await fetch(
    'https://fonts.gstatic.com/s/lora/v35/0QIhMX1D_JOuMw_LLPtLp_A.woff2'
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    <div
      style={{
        width: 1200,
        height: 630,
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0f1f 50%, #0f0a1a 100%)',
        display: 'flex',
        flexDirection: 'column',
        padding: '60px',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'Lora',
      }}
    >
      {/* Orange accent bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          background: '#FF6B35',
        }}
      />

      {/* Glow top-right */}
      <div
        style={{
          position: 'absolute',
          top: -80,
          right: -80,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,107,53,0.18) 0%, transparent 70%)',
        }}
      />

      {/* Glow bottom-left */}
      <div
        style={{
          position: 'absolute',
          bottom: -120,
          left: -80,
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,62,180,0.15) 0%, transparent 70%)',
        }}
      />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {/* Building2 icon */}
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FF6B35"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01" />
          <path d="M16 6h.01" />
          <path d="M12 6h.01" />
          <path d="M12 10h.01" />
          <path d="M12 14h.01" />
          <path d="M16 10h.01" />
          <path d="M16 14h.01" />
          <path d="M8 10h.01" />
          <path d="M8 14h.01" />
        </svg>
        <span
          style={{
            fontFamily: 'Lora',
            fontWeight: 800,
            fontSize: 48,
            color: '#ffffff',
            lineHeight: 1,
          }}
        >
          Village
        </span>
        <span
          style={{
            fontFamily: 'Lora',
            fontWeight: 600,
            fontStyle: 'italic',
            fontSize: 48,
            color: '#FF6B35',
            lineHeight: 1,
          }}
        >
          Venues
        </span>
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
            fontFamily: 'sans-serif',
            fontSize: 20,
            fontWeight: 500,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.5)',
            margin: 0,
            marginBottom: 8,
          }}
        >
          Your space, serving your community.
        </p>
        <h2
          style={{
            fontFamily: 'Lora',
            fontWeight: 700,
            fontSize: 82,
            lineHeight: 1.1,
            color: '#ffffff',
            margin: 0,
          }}
        >
          Transform your venue into a{' '}
          <span style={{ color: '#FF6B35' }}>hub for local events.</span>
        </h2>
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
              fontFamily: 'sans-serif',
              fontSize: 18,
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            Browse unique spaces or list your venue to connect with organizers
          </span>
          <span
            style={{
              fontFamily: 'sans-serif',
              fontSize: 15,
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            Free to browse · Simple listing process · Connect with thousands
          </span>
        </div>
        <span
          style={{
            fontFamily: 'Lora',
            fontSize: 22,
            fontWeight: 700,
            color: '#FF6B35',
          }}
        >
          usevillage.app/venues
        </span>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: 'Lora',
          data: loraData,
          weight: 700,
          style: 'normal',
        },
      ],
    }
  );
}
