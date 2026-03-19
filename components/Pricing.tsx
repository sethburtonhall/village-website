'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { cn } from '@/lib/utils';

import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MotionWrapper } from '@/components/MotionWrapper';
import { ShineBorder } from '@/components/ui/shine-border';

import { CircleCheck, Sparkles } from 'lucide-react';

import { plans } from '@/lib/data';

type Billing = 'monthly' | 'annual';

export function Pricing() {
  const [billing, setBilling] = useState<Billing>('monthly');
  const { isSignedIn, isLoaded } = useUser();

  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.usevillage.app';

  const getCtaProps = (plan: (typeof plans)[number]) => {
    if (isLoaded && isSignedIn) {
      if (plan.slug === 'free')
        return { label: 'Go to Dashboard', href: appUrl };
      return { label: 'Upgrade', href: `${appUrl}/account` };
    }
    return { label: 'Get Started', href: plan.signupUrl };
  };

  return (
    <section id="pricing" className="pb-28">
      <div className="mx-auto space-y-12 text-center">
        <div className="stack mb-24">
          <p className="font-bold text-primary-600">Pricing</p>
          <h1>Affordable Plans, No Surprises</h1>
          <p className="block-p">Start for free. Upgrade anytime as you grow.</p>

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
              <span className="ml-1.5 rounded-full bg-primary-600 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                Save up to 17%
              </span>
            </button>
          </div>
        </div>

        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-0">
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
                            ${displayPrice.toFixed(displayPrice % 1 === 0 ? 0 : 2)}
                            <span className="text-base">/ month</span>
                          </CardTitle>
                          {billing === 'annual' && plan.annualPrice > 0 && (
                            <p
                              className={cn(
                                'text-xs',
                                isFeatured ? 'text-slate-300' : 'text-muted-foreground'
                              )}
                            >
                              ${plan.annualPrice} billed annually
                            </p>
                          )}
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
                          {plan.comingSoon && (
                            <>
                              <li className="pt-4 text-sm font-medium">
                                <Sparkles className="inline size-3" /> Coming Soon
                              </li>
                              <li className="!mt-2 ml-2 max-w-xs text-xs italic">
                                {plan.comingSoon}
                              </li>
                            </>
                          )}
                        </ul>
                        <div className="mt-auto">
                          <Button
                            variant={isFeatured ? 'secondary' : 'success'}
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
