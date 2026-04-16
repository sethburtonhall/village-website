import { cn } from '@/lib/utils';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MotionWrapper } from '@/components/MotionWrapper';
import { ShineBorder } from '@/components/ui/shine-border';
import { Button } from '@/components/ui/button';
import { CircleCheck } from 'lucide-react';
import { plans } from '@/lib/data';

export function VillagePricing() {
  return (
    <section id="pricing" className="scroll-mt-[4.3rem] pb-28">
      <div className="mx-auto max-w-6xl space-y-12 md:text-center">
        <div className="stack mb-24">
          <p className="font-bold text-primary-600">Pricing</p>
          <h1>Affordable Plans, No Surprises</h1>
          <p className="block-p">Start for free. Upgrade anytime as you grow.</p>
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-0">
            {plans.map((plan, index) => {
              const isFeatured = index == 1;
              return (
                <MotionWrapper
                  key={plan.title}
                  index={index}
                  className={cn(
                    'h-full',
                    index === 0 && 'z-[1]',
                    index === 1 ? 'z-[2]' : 'z-[1]',
                    index === 2 && 'z-[1]'
                  )}
                >
                  <ShineBorder
                    color="#22c55e"
                    borderWidth={isFeatured ? 2 : 1}
                    className={cn(
                      'h-full',
                      isFeatured && 'z-10 !scale-110 bg-slate-800 text-white shadow-2xl'
                    )}
                  >
                    <div
                      className={cn(
                        'stack h-full text-left',
                        index === 0 && 'lg:pr-4 xl:pr-6',
                        index === 2 && 'lg:pl-4 xl:pl-6'
                      )}
                    >
                      <CardHeader className="space-y-8">
                        <div className="space-y-2">
                          <CardTitle className={cn('font-logo text-2xl text-primary-600')}>
                            {plan.title}
                          </CardTitle>
                          <CardTitle className="flex items-end gap-2 text-5xl">
                            ${plan.price}
                            <span className="text-base">/ month</span>
                          </CardTitle>
                        </div>
                        <p
                          className={cn(
                            'flex items-center gap-4 text-sm font-medium text-primary',
                            isFeatured && 'text-white'
                          )}
                        >
                          {plan.subheader}
                        </p>
                      </CardHeader>

                      <CardContent className="stack h-full">
                        <ul className="space-y-4">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2 text-sm">
                              <CircleCheck className={cn('size-4 text-primary-600')} />
                              <span className={cn('text-foreground', isFeatured && 'text-white')}>
                                {feature.toLowerCase().includes('features') ? (
                                  <span className="text-lg font-bold">{feature}</span>
                                ) : (
                                  feature
                                )}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <Button asChild variant="success" className="mt-8 w-full">
                          <a href="#waitlist">
                            {plan.price === 0 ? 'Start for free' : 'Get early access'}
                          </a>
                        </Button>
                      </CardContent>
                    </div>
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
