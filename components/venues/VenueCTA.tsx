import { MotionWrapper } from '@/components/MotionWrapper';
import { MoveRight } from 'lucide-react';

export function VenueCTA() {
  return (
    <MotionWrapper type="section" className="relative overflow-hidden bg-transparent">
      {/* Hairline separator with orange fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-village-venues/40 to-transparent" />

      {/* Soft ambient glow — orange tint, very diffuse */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 rounded-full bg-village-venues/8 blur-3xl" />

      <div className="container relative mx-auto max-w-3xl space-y-6 text-center">
        <h2>Become a community hub today.</h2>
        <p className="mx-auto max-w-xl text-muted-foreground">
          List your venue on Village Venues and connect with local organizers seeking spaces like
          yours. Fill your calendar while strengthening your community.
        </p>
        <a
          href="https://venues.usevillage.app/sign-up"
          className="inline-flex items-center gap-2 rounded-md bg-village-venues px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-village-venues/90"
        >
          List Your Venue
          <MoveRight className="h-4 w-4" />
        </a>
      </div>
    </MotionWrapper>
  );
}
