import { MotionWrapper } from '@/components/MotionWrapper';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

export function VenueCTA() {
  return (
    <MotionWrapper type="section" className="relative overflow-hidden bg-transparent py-16">
      {/* Hairline separator with orange fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-village-venues/40 to-transparent" />

      {/* Soft ambient glow — orange tint, very diffuse */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 rounded-full bg-village-venues/8 blur-3xl" />

      <div className="container relative mx-auto max-w-3xl space-y-6 md:text-center">
        <h2>Not a corporate booking platform.</h2>
        <p className="max-w-xl text-muted-foreground md:mx-auto">
          Village Venues is built for churches, schools, and community centers — spaces that put
          people first. Free to list, no commissions, no catches.
        </p>
        <Button variant="venues" size="lg" asChild>
          <a href="https://venues.usevillage.app/sign-up">
            List Your Venue
            <MoveRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </MotionWrapper>
  );
}
