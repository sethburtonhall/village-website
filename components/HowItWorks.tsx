import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { MotionWrapper } from '@/components/MotionWrapper';
import { MagicCard } from '@/components/ui/magic-card';

import { ArrowRight, ArrowDown } from 'lucide-react';

import { steps } from '@/lib/data';

export function HowItWorks() {
  return (
    <section>
      <MotionWrapper className="pt-8">
        <div className="mx-auto max-w-6xl space-y-8 text-center">
          <h1>How it works</h1>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
            {steps.map((feature, index) => (
              <>
                <MotionWrapper key={`card-${index}`} index={index}>
                  <MagicCard
                    className="flex h-[160px] cursor-default flex-col md:h-[260px] lg:h-[180px]"
                    gradientColor={'#22c55e11'}
                    gradientFrom={'#22c55e'}
                    gradientTo={'#86efac'}
                  >
                    <CardHeader className="flex flex-1 flex-col justify-center">
                      <CardTitle className="mb-2 font-signature text-4xl font-bold text-primary-600">
                        Step {index + 1}
                      </CardTitle>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                  </MagicCard>
                </MotionWrapper>
                {index < steps.length - 1 && (
                  <MotionWrapper
                    key={`arrow-${index}`}
                    index={index}
                    className="flex justify-center px-4"
                  >
                    <ArrowDown className="block size-10 text-primary-600 md:hidden" />
                    <ArrowRight className="hidden size-10 text-primary-600 md:block" />
                  </MotionWrapper>
                )}
              </>
            ))}
          </div>
        </div>
      </MotionWrapper>
    </section>
  );
}
