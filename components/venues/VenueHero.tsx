import { MotionWrapper } from '@/components/MotionWrapper';

export function VenueHero() {
  return (
    <MotionWrapper
      type="section"
      className="relative overflow-hidden bg-white pb-20 pt-20 text-center dark:bg-stone-950"
    >
      {/* Subtle orange glow behind content */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-village-venues/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl space-y-8 px-4">
        {/* Headline */}
        <h1 className="text-4xl leading-tight md:text-5xl lg:text-6xl">
          The right space
          <br />
          for every event.
        </h1>

        {/* Sub */}
        <p className="block-p text-muted-foreground">
          Browse unique spaces from local hosts, or list your venue to connect with thousands
          of organizers looking for the perfect place.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://venues.usevillage.app/sign-up"
            className="inline-flex items-center rounded-md bg-village-venues px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-village-venues/90"
          >
            List Your Venue →
          </a>
          <a
            href="#venue-directory"
            className="inline-flex items-center rounded-md border border-village-venues px-6 py-2.5 text-sm font-semibold text-village-venues transition-colors hover:bg-village-venues/5"
          >
            Browse Venues ↓
          </a>
        </div>
      </div>
    </MotionWrapper>
  );
}
