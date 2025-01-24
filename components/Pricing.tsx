import { cn } from '@/lib/utils';

import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import { MotionWrapper } from '@/components/MotionWrapper';
import { ShineBorder } from '@/components/ui/shine-border';

import { CircleCheck } from 'lucide-react';

import { plans } from '@/lib/data';

export function Pricing() {
  return (
    <section className="pb-28">
      <div className="mx-auto space-y-12 text-center">
        <div>
          <h1>Affordable Plans, No Surprises</h1>
          <p className="text-lg">Start for free and upgrade for premium features as you grow.</p>
        </div>

        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            {plans.map((plan, index) => {
              const isFeatured = index == 1;
              return (
                <div key={index} className="relative h-full">
                  <MotionWrapper index={index} className="h-full">
                    <ShineBorder
                      color="#22c55e"
                      className={cn(
                        'h-full shadow',
                        isFeatured && '!scale-110 bg-primary-600 text-white'
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
                          className="w-full rounded-full"
                        >
                          Get Started
                        </Button>
                        <ul className="space-y-4 text-left">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2 text-sm">
                              <CircleCheck
                                className={cn(
                                  'size-4 text-muted-foreground',
                                  isFeatured && 'text-white'
                                )}
                              />
                              <span
                                className={cn('text-muted-foreground', isFeatured && 'text-white')}
                              >
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </ShineBorder>
                  </MotionWrapper>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
