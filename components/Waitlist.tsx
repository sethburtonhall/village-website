import { cn } from '@/lib/utils';

import { WaitlistForm } from '@/components/WaitlistForm';

export function Waitlist({ type = 'dark' }: { type?: 'light' | 'dark' }) {
  return (
    <section
      id="waitlist"
      className={cn(
        'scroll-mt-[4.5rem]',
        type === 'dark' ? 'bg-primary-600 text-white' : 'bg-white'
      )}
    >
      <WaitlistForm type={type} />
    </section>
  );
}
