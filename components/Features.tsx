import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

import { MotionWrapper } from '@/components/MotionWrapper';

import { features } from '@/lib/data';

export function Features() {
  return (
    <section>
      <div className="container mx-auto max-w-6xl space-y-8 text-center">
        <h1>Features</h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <MotionWrapper key={index} index={index}>
                <Card>
                  <CardHeader className="flex flex-1 flex-col items-center justify-center">
                    <Icon className="mb-4 size-8 text-primary-600" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
