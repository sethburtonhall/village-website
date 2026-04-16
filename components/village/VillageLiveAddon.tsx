import { MoveRight, Radio } from 'lucide-react';
import { MotionWrapper } from '@/components/MotionWrapper';
import { Button } from '@/components/ui/button';

const PREVIEW_FEATURES = [
  { icon: '🔴', title: 'Go Live', desc: 'One tap to start' },
  { icon: '👥', title: "Who's Here", desc: 'Live check-in counter' },
  { icon: '🔥', title: 'Crowd Meter', desc: 'Floating emoji reactions' },
  { icon: '📣', title: 'Broadcast', desc: 'Message every screen' },
  { icon: '⚡', title: 'Live Timeline', desc: 'Real-time agenda sync' },
  { icon: '📊', title: 'Polls', desc: 'Live voting & results' },
];

export function VillageLiveAddon() {
  return (
    <section className="pt-16 pb-28">
      <div className="container mx-auto">
        <MotionWrapper index={0}>
          <div className="relative overflow-hidden rounded-2xl border border-village-live/35 bg-gradient-to-br from-[#1c0d16] via-[#110c10] to-[#0d0d14] p-8 shadow-[0_0_80px_rgba(161,22,109,0.12)] md:p-10">
            {/* Radial glow at top-left */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-village-live/15 blur-3xl" />

            {/* Coming Soon badge */}
            <div className="absolute right-6 top-6 flex items-center gap-1.5 rounded-full border border-village-live/35 bg-village-live/15 px-3 py-1 text-xs font-medium text-village-live/80">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-village-live" />
              Coming Soon
            </div>

            <div className="relative grid grid-cols-1 gap-10 md:pt-4 lg:grid-cols-2 lg:items-center lg:gap-16 xl:pt-0">
              {/* Left: Branding + CTA */}
              <div className="flex flex-col gap-5">
                {/* Icon */}
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-village-live/30 bg-village-live/15 shadow-[0_0_24px_rgba(161,22,109,0.25)]">
                  <Radio className="h-6 w-6 animate-pulse text-village-live" />
                </div>

                {/* Wordmark */}
                <div>
                  <p className="mb-1 text-xs font-medium uppercase tracking-widest text-white/45">
                    Feature Add-on
                  </p>
                  <h2 className="flex items-baseline gap-2 text-3xl leading-none text-white">
                    <span className="font-logo font-bold">Village</span>
                    <span
                      className="font-bold uppercase tracking-widest text-village-live"
                      style={{ fontFamily: 'monospace' }}
                    >
                      Live
                    </span>
                  </h2>
                </div>

                {/* Description */}
                <p className="max-w-sm text-sm leading-relaxed text-white/70">
                  A real-time event layer for Village. Turn any event into a live, interactive
                  experience — with reactions, polls, Q&amp;A, and more.
                </p>

                {/* Pricing note */}
                <p className="text-xs text-white/50">
                  $5 / month &middot; Add-on for any paid Village plan
                </p>

                {/* CTA */}
                <div>
                  <Button variant="live" size="sm" asChild>
                    <a href="/live">
                      Learn More
                      <MoveRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right: Feature preview grid with right-fade */}
              <div className="relative lg:pt-0">
                <div
                  className="grid grid-cols-3 gap-3"
                  style={{
                    maskImage: 'linear-gradient(to right, black 40%, transparent 95%)',
                    WebkitMaskImage: 'linear-gradient(to right, black 40%, transparent 95%)',
                  }}
                >
                  {PREVIEW_FEATURES.map((f) => (
                    <div
                      key={f.title}
                      className="border-white/8 bg-white/6 flex flex-col gap-2 rounded-xl border p-4"
                    >
                      <span className="text-xl">{f.icon}</span>
                      <div>
                        <p className="text-sm font-semibold text-white">{f.title}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-white/55">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
