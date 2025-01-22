'use client';

import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';
import { addToWaitlist } from '@/app/actions';

import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';

function SubmitButton({ type }: { type?: 'dark' }) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      variant={type === 'dark' ? 'default' : 'success'}
      size="xl"
    >
      {pending ? 'Joining...' : 'Join the Waitlist'}
    </Button>
  );
}

export function WaitlistForm({ type }: { type?: 'dark' }) {
  const [state, formAction] = useActionState(addToWaitlist, null);

  if (state?.success) {
    return (
      <div
        className={cn(
          'mx-auto max-w-lg space-y-2 rounded-lg bg-primary-600 p-6 text-center',
          type === 'dark' && 'bg-green-50'
        )}
      >
        <h3 className={cn('text-white', type === 'dark' && 'text-green-900')}>🎉 Thank you!</h3>
        <p className={cn('text-white', type === 'dark' && 'text-green-800')}>{state.message}</p>
      </div>
    );
  }

  return (
    <div className={cn('mx-auto max-w-lg space-y-4 text-center', type === 'dark' && 'text-white')}>
      <h2>Join the Waitlist Today!</h2>
      <p>It takes a village. Be among the first to bring yours together.</p>

      <form action={formAction} className="stack sm:flex-row sm:gap-4">
        <div className="sm:flex-1">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="w-full rounded-md border-stone-200 bg-white p-3 text-stone-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-green-400"
            aria-label="Email address"
          />
        </div>
        <SubmitButton type={type} />
      </form>
      {state?.message && !state.success && (
        <p className="text-sm text-destructive">{state.message}</p>
      )}
    </div>
  );
}
