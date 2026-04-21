import { LiveHeader } from '@/components/live/LiveHeader';
import { LiveHero } from '@/components/live/LiveHero';
import { LiveAllFeatures } from '@/components/live/LiveAllFeatures';
import { LiveInteractiveDemos } from '@/components/live/LiveInteractiveDemos';
import { LiveSyncDemos } from '@/components/live/LiveSyncDemos';
import { LiveHowItWorks } from '@/components/live/LiveHowItWorks';
import { LivePricing } from '@/components/live/LivePricing';
import { LiveFooter } from '@/components/live/LiveFooter';

export default function LivePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <LiveHeader />
      <LiveHero />
      <LiveAllFeatures />
      <LiveInteractiveDemos />
      <LiveSyncDemos />
      <LiveHowItWorks />
      <LivePricing />
      <LiveFooter />
    </div>
  );
}
