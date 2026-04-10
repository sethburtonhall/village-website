/**
 * Village Live OG Image — preview component (1200×630)
 * Used by /live/og-preview for visual inspection.
 * The actual generated image lives at app/live/opengraph-image.tsx.
 */
export function LiveOGImage() {
  return (
    <div
      style={{
        width: 1200,
        height: 630,
        minWidth: 1200,
        minHeight: 630,
        background: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        padding: '60px',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      {/* ── Gradient glows ── */}
      <div
        style={{
          position: 'absolute',
          top: -160,
          left: -160,
          width: 560,
          height: 560,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(161,22,109,0.30) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -120,
          right: -120,
          width: 380,
          height: 380,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(161,22,109,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      {/* 1px magenta bar at very top */}
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
        {/* Radio icon */}
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
            boxShadow: '0 0 24px rgba(161,22,109,0.25)',
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#A1166D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
            <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
            <circle cx="12" cy="12" r="2" />
            <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
            <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
          </svg>
        </div>

        {/* Village LIVE wordmark */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
          <span
            style={{
              fontFamily: 'var(--font-nunito), system-ui, sans-serif',
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
              fontSize: 30,
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
          gap: 12,
          marginTop: 'auto',
          marginBottom: 'auto',
          paddingTop: 20,
        }}
      >
        <p
          style={{
            fontSize: 15,
            fontWeight: 600,
            letterSpacing: '0.13em',
            textTransform: 'uppercase',
            color: 'rgba(161,22,109,0.7)',
            margin: 0,
            marginBottom: 6,
          }}
        >
          Add-on to any paid Village plan
        </p>

        <div
          style={{
            fontWeight: 800,
            fontSize: 80,
            lineHeight: 1.08,
            color: '#ffffff',
            margin: 0,
          }}
        >
          Village handles the sign-up.
        </div>

        <div
          style={{
            fontWeight: 800,
            fontSize: 82,
            lineHeight: 1.08,
            margin: 0,
            background: 'linear-gradient(90deg, #A1166D 0%, #d4448f 50%, #A1166D 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
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
        <p
          style={{
            fontSize: 16,
            color: 'rgba(255,255,255,0.35)',
            margin: 0,
            letterSpacing: '0.04em',
          }}
        >
          Reactions · Polls · Q&amp;A · Broadcasts · Live Timeline · & more
        </p>
        <span
          style={{
            fontFamily: 'var(--font-nunito), system-ui, sans-serif',
            fontWeight: 700,
            fontSize: 20,
            color: '#A1166D',
            letterSpacing: '0.01em',
          }}
        >
          usevillage.app/live
        </span>
      </div>
    </div>
  );
}
