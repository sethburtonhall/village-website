import { cn } from '@/lib/utils';
import { MotionWrapper } from '@/components/MotionWrapper';
import { ConfettiButton } from '@/components/ConfettiButton';
import { JiggleText } from '@/components/ui/jiggle-text';
import { AnimatedGradientTextAlt } from '@/components/ui/animated-gradient-text-alt';

export function Hero() {
  return (
    <MotionWrapper type="section" className="pb-0">
      <div className="space-y-4 p-8 pb-0 pt-4 md:pt-12 lg:px-16 lg:pt-12">
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
        <p className="mx-auto text-center text-base sm:max-w-lg md:max-w-xl md:text-xl lg:max-w-2xl">
          Other group sign-up apps are overcomplicated, requiring a PhD in both bells and whistles.{' '}
          <span className="font-logo text-xl font-extrabold text-primary-600">Village</span>{' '}
          eliminates complexity and streamlines the process of organizing community events. No PhD
          required.
        </p>
      </div>
    </MotionWrapper>
  );
}
