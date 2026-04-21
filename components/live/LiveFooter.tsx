import { RadioTower } from 'lucide-react';
import { GlobalFooter } from '@/components/GlobalFooter';

export function LiveFooter() {
  return (
    <GlobalFooter
      brandName="Village Live"
      icon={RadioTower}
      brandColor="text-village-live"
      backgroundColor="bg-[#0a0a0a]"
      borderColor="border-white/5"
      textColor="text-white/30"
    />
  );
}
