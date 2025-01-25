import { cn } from '@/lib/utils';

import { WaitlistForm } from '@/components/WaitlistForm';

export function Waitlist() {
  return (
    <section id="waitlist" className={cn('scroll-mt-[4.3rem] bg-primary-600 text-white')}>
      <WaitlistForm />
    </section>
  );
}
