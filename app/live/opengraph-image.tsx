import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Village Live — Real-time Event Experiences';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  // Load Nunito ExtraBold from Google Fonts
  const nunitoData = await fetch(
    'https://fonts.gstatic.com/s/nunito/v26/XRXI3I6Li01BKofiOc5wtlZ2di8HDLshdTk3j77e.woff2'
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: '#0a0a0a',
          display: 'flex',
          flexDirection: 'column',
          padding: '60px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* ── Gradient glow — top-left ── */}
        <div
          style={{
            position: 'absolute',
            top: -160,
            left: -160,
            width: 560,
            height: 560,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(161,22,109,0.30) 0%, transparent 70%)',
          }}
        />
        {/* ── Gradient glow — bottom-right ── */}
        <div
          style={{
            position: 'absolute',
            bottom: -120,
            right: -120,
            width: 380,
            height: 380,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(161,22,109,0.12) 0%, transparent 70%)',
          }}
        />
        {/* ── 3px magenta bar at top ── */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: '#A1166D',
          }}
        />

        {/* ── Header: wordmark ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          {/* Radio icon box */}
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: 'rgba(161,22,109,0.15)',
              border: '1.5px solid rgba(161,22,109,0.30)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#A1166D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
              <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
              <circle cx="12" cy="12" r="2" />
              <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
              <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
            </svg>
          </div>

          {/* Village + LIVE */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
            <span
              style={{
                fontFamily: 'Nunito',
                fontWeight: 800,
                fontSize: 36,
                color: '#ffffff',
                letterSpacing: '-0.5px',
              }}
            >
              Village
            </span>
            <span
              style={{
                fontFamily: 'monospace',
                fontWeight: 700,
                fontSize: 28,
                color: '#A1166D',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              Live
            </span>
          </div>
        </div>

        {/* ── Main content ── */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            marginTop: 'auto',
            marginBottom: 'auto',
            paddingTop: 16,
          }}
        >
          {/* Label */}
          <div
            style={{
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: '0.13em',
              textTransform: 'uppercase',
              color: 'rgba(161,22,109,0.75)',
              marginBottom: 10,
            }}
          >
            Feature Add-on · $5 / month
          </div>

          {/* Headline line 1 */}
          <div
            style={{
              fontFamily: 'Nunito',
              fontWeight: 800,
              fontSize: 78,
              lineHeight: 1.08,
              color: '#ffffff',
            }}
          >
            Village handles the sign-up.
          </div>

          {/* Headline line 2 — magenta */}
          <div
            style={{
              fontFamily: 'Nunito',
              fontWeight: 800,
              fontSize: 78,
              lineHeight: 1.08,
              color: '#A1166D',
            }}
          >
            Village Live runs the day.
          </div>
        </div>

        {/* ── Footer ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              fontSize: 16,
              color: 'rgba(255,255,255,0.30)',
              letterSpacing: '0.04em',
            }}
          >
            Reactions · Polls · Q&A · Broadcasts · Live Timeline
          </div>
          <div
            style={{
              fontFamily: 'Nunito',
              fontWeight: 700,
              fontSize: 20,
              color: '#A1166D',
            }}
          >
            usevillage.app/live
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Nunito',
          data: nunitoData,
          weight: 800,
          style: 'normal',
        },
      ],
    }
  );
}
