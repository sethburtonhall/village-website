'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { cn } from '@/lib/utils';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MotionWrapper } from '@/components/MotionWrapper';
import { Button } from '@/components/ui/button';
import { CircleCheck, Sparkles, Zap } from 'lucide-react';
import { plans } from '@/lib/data';
import { getAppUrl, getAccountUrl } from '@/lib/app-urls';

type Billing = 'monthly' | 'annual';

export function VillagePricing() {
  const [billing, setBilling] = useState<Billing>('monthly');
  const { isSignedIn, isLoaded } = useUser();

  const appUrl = getAppUrl();

  const getCtaProps = (plan: (typeof plans)[number]) => {
    if (isLoaded && isSignedIn) {
      if (plan.slug === 'free') return { label: 'Go to Dashboard', href: appUrl };
      return { label: 'Upgrade', href: getAccountUrl() };
    }
    return { label: 'Get Started', href: plan.signupUrl };
  };

  return (
    <section id="pricing" className="pb-28">
      <div className="mx-auto space-y-12 text-center">
        <div className="stack mb-12">
          <p className="font-bold text-primary-600">Pricing</p>
          <h1>Affordable Plans, No Surprises</h1>
          <p className="block-p">Start for free. Upgrade anytime as you grow.</p>

          {/* Early Adopter Banner */}
          <div className="mx-auto mt-6 flex max-w-2xl items-center gap-3 rounded-lg border border-primary-600 bg-white px-4 py-3">
            <Zap className="size-4 flex-shrink-0 text-primary-600" />
            <div className="text-left">
              <p className="text-sm font-medium text-foreground">
                <strong>Right now, all plans are free.</strong>
              </p>
              <p className="text-xs text-muted-foreground">
                We're currently gathering feedback. Early adopters will receive special pricing when
                plans launch.
              </p>
            </div>
          </div>

          {/* Monthly / Annual toggle */}
          <div className="mx-auto mt-4 flex w-fit items-center justify-center gap-1 rounded-full border border-stone-200 bg-stone-100 p-1">
            <button
              onClick={() => setBilling('monthly')}
              className={cn(
                'rounded-full px-4 py-1.5 text-sm font-medium transition-all',
                billing === 'monthly'
                  ? 'bg-white text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('annual')}
              className={cn(
                'rounded-full px-4 py-1.5 text-sm font-medium transition-all',
                billing === 'annual'
                  ? 'bg-white text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Annual
            </button>
          </div>
        </div>

        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {plans.map((plan, index) => {
              const isFeatured = index === 1;
              const cta = getCtaProps(plan);
              const displayPrice =
                billing === 'annual' && plan.annualPriceMonthly > 0
                  ? plan.annualPriceMonthly
                  : plan.monthlyPrice;

              return (
                <MotionWrapper
                  key={plan.title}
                  index={index}
                  className={cn('h-full', isFeatured && 'z-10')}
                >
                  <div
                    className={cn(
                      'h-full rounded-lg p-8',
                      isFeatured ? 'bg-slate-800 text-white shadow-xl' : 'bg-white shadow-md',
                      index === 0 && 'lg:pr-4 xl:pr-6',
                      index === 2 && 'lg:pl-4 xl:pl-6'
                    )}
                  >
                    <div className={cn('stack h-full text-left')}>
                      <CardHeader className="space-y-8">
                        <div className="space-y-2">
                          <CardTitle
                            className={cn(
                              'font-logo text-2xl',
                              isFeatured ? 'text-white' : 'text-primary-600'
                            )}
                          >
                            {plan.title}
                          </CardTitle>
                          <div className="space-y-1">
                            <CardTitle
                              className={cn(
                                'flex items-end gap-2 text-5xl',
                                isFeatured && 'text-white'
                              )}
                            >
                              {displayPrice > 0 && (
                                <p
                                  className={cn(
                                    'text-lg',
                                    isFeatured ? 'text-slate-300' : 'text-muted-foreground'
                                  )}
                                >
                                  <span className="line-through">
                                    ${displayPrice.toFixed(displayPrice % 1 === 0 ? 0 : 2)}
                                  </span>
                                </p>
                              )}
                              $0
                              <span className="text-base">/ month</span>
                            </CardTitle>
                            <p
                              className={cn(
                                'text-xs font-normal',
                                isFeatured ? 'text-slate-300' : 'text-muted-foreground'
                              )}
                            >
                              Currently free
                            </p>
                          </div>
                          {billing === 'annual' && plan.annualPrice > 0 && (
                            <p
                              className={cn(
                                'text-xs',
                                isFeatured ? 'text-slate-400' : 'text-muted-foreground'
                              )}
                            >
                              ${plan.annualPrice} billed annually
                            </p>
                          )}
                        </div>
                        <p
                          className={cn(
                            'flex items-center gap-4 text-sm font-medium',
                            isFeatured ? 'text-slate-200' : 'text-primary'
                          )}
                        >
                          {plan.subheader}
                        </p>
                      </CardHeader>

                      <CardContent className="stack h-full">
                        <ul className="space-y-4">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2 text-sm">
                              <CircleCheck
                                className={cn(
                                  'size-4',
                                  isFeatured ? 'text-green-400' : 'text-primary-600'
                                )}
                              />
                              <span className={isFeatured ? 'text-slate-100' : 'text-foreground'}>
                                {feature.toLowerCase().includes('features') ? (
                                  <span className="text-lg font-bold">{feature}</span>
                                ) : (
                                  feature
                                )}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-auto">
                          <Button
                            variant="success"
                            size="lg"
                            className="group w-full rounded-md"
                            asChild
                          >
                            <a href={cta.href} className="flex items-center">
                              <Sparkles className="mr-2 size-4 transition-transform ease-linear group-hover:rotate-90" />
                              <span>{cta.label}</span>
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </MotionWrapper>
              );
            })}
          </div>
        </div>

        <p className="text-center text-sm text-stone-500">
          Start for free. Upgrade anytime as you grow.
        </p>
      </div>
    </section>
  );
}
