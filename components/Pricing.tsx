import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CircleCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { plans } from '@/lib/data';

export function Pricing() {
  return (
    <section>
      <div className="container mx-auto max-w-6xl space-y-12 p-8 text-center">
        <div>
          <h2>Simple Pricing</h2>
          <p>Choose the plan that's right for you</p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {plans.map((plan, index) => {
            const isFeatured = index == 1;
            return (
              <Card key={index} className={cn(isFeatured && 'scale-110 bg-primary-600 text-white')}>
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
                        <CircleCheck className={cn('size-4', isFeatured && 'text-white')} />
                        <span className={cn('text-gray-700', isFeatured && 'text-white')}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
