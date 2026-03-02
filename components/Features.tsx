import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

import { MotionWrapper } from '@/components/MotionWrapper';
import { MagicCard } from '@/components/ui/magic-card';
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text';

import { features } from '@/lib/data';

export function Features() {
  return (
    <section className="relative">
      <div className="container mx-auto max-w-6xl space-y-8 text-center">
        <div className="stack mb-16">
          <p className="font-bold text-primary-600">Core Features</p>
          <h1>Everything You Need to Organize Your Community</h1>
          <p className="block-p">Get started with these core features. Upgrade as you grow.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <MotionWrapper key={index} index={index}>
                <MagicCard
                  className="relative cursor-default"
                  gradientColor={'#22c55e11'}
                  gradientFrom={'#22c55e'}
                  gradientTo={'#86efac'}
                >
                  {feature.comingSoon ? (
                    <AnimatedGradientText className="absolute right-3 top-3 z-10 px-3 py-1 text-xs">
                      <span className="gradiant-text">Coming soon</span>
                    </AnimatedGradientText>
                  ) : null}
                  <CardHeader className="flex flex-1 flex-col items-center justify-center">
                    <Icon className="mb-4 size-8 text-primary-600" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </MagicCard>
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
