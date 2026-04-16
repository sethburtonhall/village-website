import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import { VillageHero } from '@/components/village/VillageHero';
import { VillageSoundFamiliar } from '@/components/village/VillageSoundFamiliar';
import { VillageHowItWorks } from '@/components/village/VillageHowItWorks';
import { VillageWaitlist } from '@/components/village/VillageWaitlist';
import { VillageFeatures } from '@/components/village/VillageFeatures';
import { VillageCommunities } from '@/components/village/VillageCommunities';
import { VillagePricing } from '@/components/village/VillagePricing';
import { VillageLiveAddon } from '@/components/village/VillageLiveAddon';
import { VillageFAQ } from '@/components/village/VillageFAQ';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <VillageHero />
      <VillageSoundFamiliar />
      <VillageHowItWorks id="how-it-works" />
      <VillageWaitlist />
      <VillageFeatures />
      <VillageCommunities />
      <VillagePricing />
      <VillageFAQ />
      <VillageLiveAddon />
      <Footer />
    </div>
  );
}
