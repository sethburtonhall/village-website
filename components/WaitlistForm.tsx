'use client';

import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

import { cn } from '@/lib/utils';
import { addToWaitlist } from '@/app/actions';

import { Button } from '@/components/ui/button';
import { MotionWrapper } from '@/components/MotionWrapper';

import { TriangleAlert } from 'lucide-react';

function SubmitButton({ type }: { type?: 'light' | 'dark' }) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      variant={type === 'dark' ? 'default' : 'success'}
      size="lg"
      className="w-[200px]"
    >
      {pending ? 'Joining...' : 'Join the Waitlist'}
    </Button>
  );
}

export function WaitlistForm({ type = 'dark' }: { type?: 'light' | 'dark' }) {
  const [state, formAction] = useActionState(addToWaitlist, null);

  return (
    <AnimatePresence mode="wait">
      {state?.success ? (
        <motion.div
          key="success"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            'mx-auto max-w-xl space-y-2 rounded-lg bg-primary-600 p-9 px-24 text-center',
            type === 'dark' && 'bg-green-50'
          )}
        >
          <h3 className={cn('text-white', type === 'dark' && 'text-green-900')}>🎉 Thank you!</h3>
          <p className={cn('text-white', type === 'dark' && 'text-green-800')}>{state.message}</p>
        </motion.div>
      ) : (
        <div
          className={cn('mx-auto max-w-lg space-y-2 text-center', type === 'dark' && 'text-white')}
        >
          <h2>Join the Waitlist Today!</h2>

          <MotionWrapper className="space-y-4">
            <p>It takes a village. Be among the first to bring yours together.</p>
            <form action={formAction} className="stack sm:flex-row sm:gap-4">
              <div className="flex-1">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border-0 p-3 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-base placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-primary-600"
                  placeholder="Enter your email"
                  aria-label="Email address"
                />
              </div>
              <SubmitButton type={type} />
            </form>
          </MotionWrapper>
          {state?.message && !state.success && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center gap-2 rounded-lg bg-red-100 p-4 font-bold text-destructive"
            >
              <TriangleAlert className="size-4" />
              <p className="text-sm">{state.message}</p>
            </motion.div>
          )}
        </div>
      )}
    </AnimatePresence>
  );
}
