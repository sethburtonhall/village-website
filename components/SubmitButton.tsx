'use client';

import { useFormStatus } from 'react-dom';
import { ClipboardList, CheckIcon } from 'lucide-react';
import { AnimatedSubscribeButton } from '@/components/ui/animated-subscribe-button';

export function SubmitButton({ success }: { success?: boolean }) {
  const { pending } = useFormStatus();

  return (
    <AnimatedSubscribeButton
      className="w-[200px]"
      type="submit"
      disabled={pending}
      subscribeStatus={success}
    >
      <span className="group inline-flex items-center">
        <ClipboardList className="mr-2 size-4 transition-transform duration-300" />
        Join the Waitlist
      </span>
      <span className="group inline-flex items-center">
        <CheckIcon className="mr-2 size-4" />
        Subscribed
      </span>
    </AnimatedSubscribeButton>
  );
}
