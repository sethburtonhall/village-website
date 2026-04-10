import { MotionWrapper } from '@/components/MotionWrapper';

export function VenueCTA() {
  return (
    <MotionWrapper
      type="section"
      className="bg-village-venues text-white"
    >
      <div className="container mx-auto max-w-3xl space-y-6 text-center">
        <h2 className="text-white">Ready to list your venue?</h2>
        <p className="mx-auto max-w-xl text-white/80">
          Join Village Venues and connect your space with thousands of event organizers looking
          for the perfect place.
        </p>
        <a
          href="https://venues.usevillage.app/sign-up"
          className="inline-flex items-center rounded-md bg-white px-7 py-3 text-sm font-semibold text-village-venues transition-colors hover:bg-white/90"
        >
          List Your Venue →
        </a>
      </div>
    </MotionWrapper>
  );
}
