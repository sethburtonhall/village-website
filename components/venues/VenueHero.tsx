import { MotionWrapper } from '@/components/MotionWrapper';
import { MoveDown, MoveRight } from 'lucide-react';

export function VenueHero() {
  return (
    <MotionWrapper
      type="section"
      className="relative overflow-hidden bg-white pb-20 pt-20 text-center"
    >
      {/* Subtle orange glow behind content */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-village-venues/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl space-y-8 px-4">
        {/* Headline */}
        <h1 className="text-4xl leading-tight md:text-5xl lg:text-6xl">
          Your space,
          <br />
          serving your community.
        </h1>

        {/* Sub */}
        <p className="block-p text-muted-foreground">
          Transform your venue into a hub for local events. Connect with organizers, fill your
          calendar, and become a cornerstone of community life.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://venues.usevillage.app/sign-up"
            className="inline-flex items-center gap-2 rounded-md bg-village-venues px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-village-venues/90"
          >
            List Your Venue
            <MoveRight className="h-4 w-4" />
          </a>
          <a
            href="#venue-directory"
            className="inline-flex items-center gap-2 rounded-md border border-village-venues px-6 py-2.5 text-sm font-semibold text-village-venues transition-colors hover:bg-village-venues/5"
          >
            Browse Venues
            <MoveDown className="h-4 w-4" />
          </a>
        </div>
      </div>
    </MotionWrapper>
  );
}
