import { Button } from '@/components/ui/button';
import { MotionWrapper } from '@/components/MotionWrapper';
import { ConfettiButton } from '@/components/ConfettiButton';
import { JiggleText } from '@/components/ui/jiggle-text';
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text';
import { ScrollLink } from '@/components/ScrollLink';
import { ChevronRight, MoveDown } from 'lucide-react';


export function VillageHero() {
  return (
    <MotionWrapper type="section" className="space-y-12 pb-16">
      <div className="space-y-4 pt-4 md:pt-12 lg:px-16">
        <ScrollLink>
          <AnimatedGradientText className="mx-0 md:mx-auto">
            <span className="gradiant-text">Early access</span>
            <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />
            <span className="text-foreground/60">Free to join</span>
            <ChevronRight className="mx-1 h-4 w-4 shrink-0 text-fuchsia-400" />
          </AnimatedGradientText>
        </ScrollLink>
        <div className="max-w-3xl md:mx-auto md:text-center">
          <h1 className="cursor-default text-4xl leading-snug sm:text-4xl sm:leading-snug md:text-5xl md:leading-snug lg:text-7xl lg:leading-tight">
            Group{' '}
            <span className="font-signature text-5xl text-primary-600 sm:text-5xl md:text-7xl lg:text-8xl">
              sign-ups
            </span>{' '}
            made simple and
            <span className="relative">
              <ConfettiButton variant="ghost" className="font-extrabold md:text-7xl">
                <span className="flex items-baseline gap-2 text-3xl md:text-5xl lg:text-7xl">
                  <JiggleText className="scale-80 md:scale-75" text="🎉" />
                  <span className="text-primary-600">fun!</span>
                </span>
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
        <Button
          variant="success"
          size="lg"
          className="group h-10 px-4 text-sm sm:h-11 sm:px-8 sm:text-base"
          asChild
        >
          <a href="#waitlist" className="flex items-center">
            <span>Join the Beta</span>
            <MoveDown className="h-4 w-4" />
          </a>
        </Button>
        <Button
          variant="ghost"
          size="lg"
          className="h-10 px-4 text-sm text-stone-500 hover:text-stone-800 sm:h-11 sm:px-8 sm:text-base"
          asChild
        >
          <a href="#pricing">See pricing</a>
        </Button>
      </div>
    </MotionWrapper>
  );
}
