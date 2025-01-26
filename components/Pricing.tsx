import { cn } from '@/lib/utils';

import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import { MotionWrapper } from '@/components/MotionWrapper';
import { ShineBorder } from '@/components/ui/shine-border';

import { CircleCheck, Sparkles } from 'lucide-react';

import { plans } from '@/lib/data';

export function Pricing() {
  return (
    <section className="pb-28">
      <div className="mx-auto space-y-12 text-center">
        <div className="stack mb-24">
          <p className="font-bold text-primary-600">Pricing</p>
          <h1>Affordable Plans, No Surprises</h1>
          <p className="block-p">Start for free then upgrade for premium features as you grow.</p>
        </div>

        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-0">
            {plans.map((plan, index) => {
              const isFeatured = index == 1;
              return (
                <MotionWrapper
                  key={plan.title}
                  index={index}
                  className={cn('h-full', index === 0 ? 'z-[1]' : index === 1 ? 'z-[2]' : 'z-[1]')}
                >
                  <ShineBorder
                    color="#22c55e"
                    className={cn(
                      'h-full',
                      isFeatured && 'z-10 !scale-110 bg-primary-600 text-white shadow-2xl'
                    )}
                  >
                    <CardHeader className="space-y-4 text-left">
                      <CardTitle className="flex items-end gap-2 text-5xl">
                        ${plan.price}
                        <span className="text-base">/ month</span>{' '}
                      </CardTitle>
                      <CardTitle className="font-logo text-xl">{plan.title}</CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <Button
                        variant={isFeatured ? 'secondary' : 'success'}
                        size="lg"
                        className="group w-full rounded-md"
                      >
                        <a href="https://app.usevillage.app/sign-up" className="flex items-center">
                          <Sparkles className="mr-2 size-4 transition-transform ease-linear group-hover:rotate-90" />
                          <span>Get Started</span>
                        </a>
                      </Button>
                      <ul className="space-y-4 text-left">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm">
                            <CircleCheck
                              className={cn('size-4 text-foreground', isFeatured && 'text-white')}
                            />
                            <span className={cn('text-foreground', isFeatured && 'text-white')}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </ShineBorder>
                </MotionWrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
