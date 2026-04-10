import { cn } from '@/lib/utils';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DotPattern } from '@/components/ui/dot-pattern';

import { VillageHero } from '@/components/village/VillageHero';
import { VillageSoundFamiliar } from '@/components/village/VillageSoundFamiliar';
import { VillageHowItWorks } from '@/components/village/VillageHowItWorks';
import { VillageWaitlist } from '@/components/village/VillageWaitlist';
import { VillageFeatures } from '@/components/village/VillageFeatures';
import { VillageCommunities } from '@/components/village/VillageCommunities';
import { VillagePricing } from '@/components/village/VillagePricing';
import { VillageLiveAddon } from '@/components/village/VillageLiveAddon';
// import { VillageWelcomeToast } from '@/components/village/VillageWelcomeToast';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <VillageWelcomeToast /> */}
      <Header />

      <div className="relative">
        <VillageHero />
        <VillageSoundFamiliar />
        <VillageHowItWorks id="how-it-works" />
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn('[mask-image:linear-gradient(to_bottom_right,white,transparent,white)]')}
        />
      </div>

      <VillageWaitlist />

      <div className="relative">
        <VillageFeatures />
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn('[mask-image:linear-gradient(to_bottom_right,white,transparent,white)]')}
        />
      </div>

      <VillageCommunities />

      <div className="relative">
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn('[mask-image:linear-gradient(to_bottom_right,white,transparent,white)]')}
        />
        <VillagePricing />
      </div>
      <VillageLiveAddon />
      <VillageWaitlist />
      <Footer />
    </div>
  );
}
