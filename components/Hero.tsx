import { cn } from '@/lib/utils';
import { MotionWrapper } from '@/components/MotionWrapper';
import { ConfettiButton } from '@/components/ConfettiButton';
import { JiggleText } from '@/components/ui/jiggle-text';
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text';

export function Hero() {
  return (
    <MotionWrapper type="section" className="pb-0">
      <div className="space-y-4 p-8 pb-0 md:pt-12 lg:px-16 lg:pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="cursor-default leading-tight md:text-7xl md:leading-tight">
            Group{' '}
            <span className="font-signature text-4xl text-primary-600 md:text-8xl">sign-ups</span>{' '}
            made simple and
            <span className="relative">
              <ConfettiButton variant="ghost" className="font-extrabold md:text-7xl">
                <AnimatedGradientText className="flex gap-2 text-2xl md:text-7xl">
                  <JiggleText className="scale-90 md:scale-75" text="🎉" />
                  <span
                    className={cn(
                      `animate-gradient inline bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-3xl text-transparent md:text-7xl`
                    )}
                  >
                    fun!
                  </span>
                </AnimatedGradientText>
              </ConfettiButton>
            </span>
          </h1>
        </div>
        <p className="mx-auto max-w-3xl text-center text-base md:text-xl">
          Other group signup apps are overcomplicated.{' '}
          <span className="font-logo text-xl font-extrabold text-primary-600">Village</span>{' '}
          eliminates complexity and streamlines the process of organizing community events.
        </p>
      </div>
    </MotionWrapper>
  );
}
