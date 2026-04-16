import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MagicCard } from '@/components/ui/magic-card';
import { MotionWrapper } from '@/components/MotionWrapper';
import { coreFeatures, premiumFeatures } from '@/lib/data';

export function VillageFeatures() {
  return (
    <section id="features" className="relative scroll-mt-[4.3rem]">
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
          <div className="border-b border-stone-200 pb-4">
            <h2 className="font-sans text-2xl font-bold text-stone-800 md:text-3xl">
              Premium Features
            </h2>
            <p className="mt-1 text-sm text-stone-500">Available on paid plans</p>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {premiumFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <MotionWrapper key={index} index={index}>
                <div className="flex items-start gap-4 rounded-xl border border-stone-100 bg-stone-50/50 p-5">
                  <div className="mt-0.5 flex-shrink-0 rounded-lg bg-primary-50 p-2">
                    <Icon className="size-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800">{feature.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-stone-500">{feature.description}</p>
                  </div>
                </div>
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
