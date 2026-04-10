import { cn } from '@/lib/utils';
import { VillageWaitlistForm } from '@/components/village/VillageWaitlistForm';

export function VillageWaitlist() {
  return (
    <section id="waitlist" className={cn('scroll-mt-[4.3rem] bg-primary-600 text-white')}>
      <VillageWaitlistForm />
    </section>
  );
}
