import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MagicCard } from '@/components/ui/magic-card';
import { MotionWrapper } from '@/components/MotionWrapper';
import { SparklesText } from '@/components/ui/sparkles-text';
import { AnimatedGradientTextAlt } from '@/components/ui/animated-gradient-text-alt';
import { coreFeatures, premiumFeatures } from '@/lib/data';

export function VillageFeatures() {
  return (
    <section className="relative">
      <div className="container mx-auto max-w-6xl space-y-8 md:text-center">
        <div className="stack mb-16">
          <p className="text-lg font-bold text-primary-600">Features</p>
          <h1>Everything You Need to Organize Your Community</h1>
          <p className="block-p">Start with core features. Upgrade to premium as you grow.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {coreFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <MotionWrapper key={index} index={index}>
                <MagicCard
                  className="relative cursor-default"
                  gradientColor={'#22c55e11'}
                  gradientFrom={'#22c55e'}
                  gradientTo={'#86efac'}
                >
                  <CardHeader className="flex flex-1 flex-col items-start md:items-center">
                    <Icon className="mb-4 size-8 text-primary-600" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </MagicCard>
              </MotionWrapper>
            );
          })}
        </div>
        <MotionWrapper>
          <SparklesText>
            <AnimatedGradientTextAlt>
              <h2 className="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text font-sans text-3xl font-bold text-transparent md:text-4xl">
                Premium Features
              </h2>
            </AnimatedGradientTextAlt>
          </SparklesText>
        </MotionWrapper>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {premiumFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <MotionWrapper key={index} index={index}>
                <MagicCard
                  className="relative cursor-default"
                  gradientColor={'#9c40ff11'}
                  gradientFrom={'#9c40ff'}
                  gradientTo={'#ffaa40'}
                >
                  <CardHeader className="flex flex-1 flex-col items-start md:items-center">
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
