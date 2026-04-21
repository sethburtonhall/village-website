import { Building2 } from 'lucide-react';

/**
 * Village Venues OG Image - preview component (1200×630)
 * Used by /venues/og-preview for visual inspection.
 * The actual generated image lives at app/venues/opengraph-image.tsx.
 */
export function VenuesOGImage() {
  return (
    <div
      className="relative flex flex-col overflow-hidden p-[60px]"
      style={{
        width: 1200,
        height: 630,
        minWidth: 1200,
        minHeight: 630,
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0f1f 50%, #0f0a1a 100%)',
      }}
    >
      {/* Orange accent bar */}
      <div className="absolute left-0 right-0 top-0 h-[6px] bg-[#FF6B35]" />

      {/* Glow top-right */}
      <div
        className="pointer-events-none absolute"
        style={{
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
        className="pointer-events-none absolute"
        style={{
          bottom: -120,
          left: -80,
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,62,180,0.15) 0%, transparent 70%)',
        }}
      />

      {/* Header */}
      <div className="flex items-center gap-1.5">
        <div className="flex items-center justify-center">
          <Building2 className="size-12 text-[#FF6B35]" />
        </div>
        <span className="flex items-center gap-1 text-5xl leading-none">
          <span className="font-logo font-extrabold text-white">Village</span>
          <span
            className="text-5xl font-semibold italic text-[#FF6B35]"
            style={{ fontFamily: 'var(--font-venues-lora), serif' }}
          >
            Venues
          </span>
        </span>
      </div>

      {/* Main content */}
      <div className="mb-auto mt-auto flex flex-col gap-2 pt-10">
        <p className="mb-2 font-sans text-xl font-medium uppercase tracking-[0.14em] text-white/50">
          Your space, serving your community.
        </p>
        <h1 className="m-0 font-logo text-7xl leading-[1.1] text-white">
          Transform your venue into a <span className="text-[#FF6B35]">hub for local events.</span>
        </h1>
      </div>

      {/* Footer */}
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-sans text-lg text-white/60">
            Browse unique spaces or list your venue to connect with organizers
          </span>
          <span className="font-sans text-base italic text-white/40">
            Free to browse · Simple listing process · Connect with thousands
          </span>
        </div>
        <span className="font-logo text-2xl font-bold text-[#FF6B35]">usevillage.app/venues</span>
      </div>
    </div>
  );
}
