import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { MotionWrapper } from '@/components/MotionWrapper';
import { ConfettiButton } from '@/components/ConfettiButton';
import { JiggleText } from '@/components/ui/jiggle-text';
import { AnimatedGradientTextAlt } from '@/components/ui/animated-gradient-text-alt';
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text';
import { ScrollLink } from '@/components/ScrollLink';
import { ChevronRight, Sparkles } from 'lucide-react';

export function VillageHero() {
  return (
    <MotionWrapper type="section" className="space-y-12 pb-16">
      <div className="space-y-4 p-8 pb-0 pt-4 md:pt-12 lg:px-16 lg:pt-12">
        <ScrollLink>
          <AnimatedGradientText>
            🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />
            <span className="gradiant-text">Private Beta</span>
            <ChevronRight className="mx-2 h-4 w-4 shrink-0 text-fuchsia-400" />
          </AnimatedGradientText>
        </ScrollLink>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="cursor-default text-4xl leading-snug sm:text-4xl sm:leading-snug md:text-5xl md:leading-snug lg:text-7xl lg:leading-tight">
            Group{' '}
            <span className="font-signature text-5xl text-primary-600 sm:text-5xl md:text-7xl lg:text-8xl">
              sign-ups
            </span>{' '}
            made <br className="block" />
            simple and
            <span className="relative">
              <ConfettiButton variant="ghost" className="font-extrabold md:text-7xl">
                <AnimatedGradientTextAlt className="flex gap-2 text-3xl md:text-5xl lg:text-7xl">
                  <JiggleText className="scale-80 md:scale-75" text="🎉" />
                  <span
                    className={cn(
                      `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-4xl text-transparent sm:text-4xl md:text-5xl lg:text-7xl`
                    )}
                  >
                    fun!
                  </span>
                </AnimatedGradientTextAlt>
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
      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
        <Button
          variant="success"
          size="lg"
          className="group h-10 px-4 text-sm sm:h-11 sm:px-8 sm:text-base"
          asChild
        >
          <a href="#waitlist" className="flex items-center">
            <Sparkles className="mr-2 size-4 transition-transform ease-linear group-hover:rotate-90" />
            <span>Join the Beta</span>
          </a>
        </Button>
      </div>
    </MotionWrapper>
  );
}
