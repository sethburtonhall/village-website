import { cn } from '@/lib/utils';

import { WaitlistForm } from '@/components/WaitlistForm';

export function Waitlist({ type = 'dark' }: { type?: 'light' | 'dark' }) {
  return (
    <section className={cn(type === 'dark' ? 'bg-primary-600 text-white' : 'bg-white')}>
      <WaitlistForm type={type} />
    </section>
  );
}
