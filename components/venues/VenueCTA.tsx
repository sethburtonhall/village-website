import { MotionWrapper } from '@/components/MotionWrapper';
import { MoveRight } from 'lucide-react';

export function VenueCTA() {
  return (
    <MotionWrapper type="section" className="bg-village-venues text-white">
      <div className="container mx-auto max-w-3xl space-y-6 text-center">
        <h2 className="text-white">Become a community hub today.</h2>
        <p className="mx-auto max-w-xl text-white/80">
          List your venue on Village Venues and connect with local organizers seeking spaces like
          yours. Fill your calendar while strengthening your community.
        </p>
        <a
          href="https://venues.usevillage.app/sign-up"
          className="inline-flex items-center gap-2 rounded-md bg-white px-7 py-3 text-sm font-semibold text-village-venues transition-colors hover:bg-white/90"
        >
          List Your Venue
          <MoveRight className="h-4 w-4" />
        </a>
      </div>
    </MotionWrapper>
  );
}
