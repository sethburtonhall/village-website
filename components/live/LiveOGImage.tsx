import { Radio } from 'lucide-react';

/**
 * Village Live OG Image — preview component (1200×630)
 * Used by /live/og-preview for visual inspection.
 * The actual generated image lives at app/live/opengraph-image.tsx.
 */
export function LiveOGImage() {
  return (
    <div
      className="relative flex flex-col overflow-hidden bg-[#0a0a0a] p-[60px]"
      style={{ width: 1200, height: 630, minWidth: 1200, minHeight: 630 }}
    >
      {/* ── Gradient glows ── */}
      <div
        className="pointer-events-none absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(161,22,109,0.30) 0%, transparent 70%)',
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 h-[380px] w-[380px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(161,22,109,0.12) 0%, transparent 70%)',
        }}
      />
      {/* accent bar */}
      <div className="absolute left-0 right-0 top-0 h-[6px] bg-[#A1166D]" />

      {/* Header */}
      <div className="group flex items-center gap-2.5">
        <div className="flex size-14 items-center justify-center rounded-[14px] border-[1.5px] border-[rgba(161,22,109,0.30)] bg-[rgba(161,22,109,0.15)] shadow-[0_0_24px_rgba(161,22,109,0.25)]">
          <Radio className="size-10 text-[#A1166D]" />
        </div>
        <span className="flex items-center gap-1 text-5xl leading-none">
          <span className="font-logo font-extrabold text-white">Village</span>
          <span className="font-mono text-5xl font-bold uppercase tracking-widest text-[#A1166D]">
            Live
          </span>
        </span>
      </div>

      {/* Main content */}
      <div className="mb-auto mt-auto flex flex-col gap-2 pt-10">
        <p className="mb-2 font-sans text-xl font-medium uppercase tracking-[0.14em] text-[rgba(161,22,109,0.7)]">
          Add-on to any paid Village plan
        </p>

        <h1 className="m-0 font-logo text-7xl font-extrabold leading-[1.1] text-white">
          Village handles the sign-up.
        </h1>

        <h1
          className="m-0 font-logo text-7xl font-extrabold leading-[1.1]"
          style={{
            background: 'linear-gradient(90deg, #A1166D 0%, #d4448f 50%, #A1166D 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Village Live runs the day.
        </h1>
      </div>

      {/* Footer */}
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-sans text-lg text-white/35">
            Reactions · Polls · Q&A · Broadcasts · Live Timeline · & more
          </span>
        </div>
        <span className="font-logo text-2xl font-bold text-[#A1166D]">usevillage.app/live</span>
      </div>
    </div>
  );
}
