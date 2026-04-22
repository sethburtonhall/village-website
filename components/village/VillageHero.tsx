import { Button } from '@/components/ui/button';
import { MotionWrapper } from '@/components/MotionWrapper';
import { ConfettiButton } from '@/components/ConfettiButton';
import { MoveRight } from 'lucide-react';

export function VillageHero() {
  return (
    <MotionWrapper type="section" className="space-y-12 pb-16">
      <div className="space-y-4 pt-4 lg:px-16">
        <div className="max-w-3xl md:mx-auto md:text-center">
          <h1 className="cursor-default text-4xl leading-snug sm:text-4xl sm:leading-snug md:text-5xl md:leading-snug lg:text-7xl lg:leading-tight">
            Group{' '}
            <span className="font-signature text-5xl text-primary-600 sm:text-5xl md:text-7xl lg:text-8xl">
              sign-ups
            </span>{' '}
            made simple and
            <span className="relative">
              <ConfettiButton variant="ghost" className="font-extrabold md:text-7xl">
                <span className="text-3xl text-primary-600 md:text-5xl lg:text-7xl"> fun!</span>
              </ConfettiButton>
            </span>
          </h1>
        </div>
        <p className="block-p md:text-xl">
          Tired of sign-up links cluttered with ads and confusing forms?{' '}
          <span className="font-logo text-xl font-extrabold text-primary-600">Village</span> gives
          your community a clean, simple experience — no ads, no accounts required, just a link
          worth sharing.
        </p>
      </div>
      {/* CTAs */}
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:gap-4 md:items-center md:justify-center">
        <Button variant="success" className="group" asChild>
          <a href={process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL} className="flex items-center">
            <span>Join as Early Adopter</span>
            <MoveRight className="h-4 w-4" />
          </a>
        </Button>
        <Button variant="ghost" className="text-stone-500 hover:text-stone-800" asChild>
          <a href="#pricing">See pricing</a>
        </Button>
      </div>
    </MotionWrapper>
  );
}
