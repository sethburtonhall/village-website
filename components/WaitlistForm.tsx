'use client';

import { startTransition, useActionState, useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { z } from 'zod';

import { cn } from '@/lib/utils';
import { addToWaitlist } from '@/app/actions';
import { waitlistSchema } from '@/lib/schemas';
import { mailingListIds } from '@/lib/constants';

import { MotionWrapper } from '@/components/MotionWrapper';
import { AnimatedSubscribeButton } from '@/components/ui/animated-subscribe-button';

import { TriangleAlert, CheckIcon, ClipboardList } from 'lucide-react';

type FormData = z.infer<typeof waitlistSchema>;

export function WaitlistForm() {
  const [isPending, setIsPending] = useState(false);
  const [state, formAction] = useActionState(async (prevState: unknown, formData: FormData) => {
    try {
      const result = await addToWaitlist(formData.email);
      setIsPending(false);
      return result;
    } catch (error) {
      setIsPending(false);
      throw error;
    }
  }, null);

  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(waitlistSchema),
  });

  useEffect(() => {
    if (state?.success) {
      sessionStorage.setItem('isSubscribed', 'true');
      reset();
    }
  }, [state?.success, reset]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent) => {
    e.preventDefault();
    handleSubmit((data) => {
      setIsPending(true);
      startTransition(() => {
        formAction(data);
      });
    })();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleFormSubmit(e);
    }
  };

  return (
    <div
      className={cn('mx-auto max-w-lg space-y-2 text-center')}
      role="region"
      aria-labelledby="waitlist-title"
    >
      <div className="stack mb-8">
        <h2 id="waitlist-title">Join the Waitlist!</h2>
        <p className="block-p">It takes a village. Be among the first to bring yours together.</p>
      </div>

      <MotionWrapper className="space-y-4">
        <form
          ref={formRef}
          onSubmit={handleFormSubmit}
          onKeyDown={handleKeyPress}
          className="stack sm:flex-row sm:gap-4"
          aria-label="Waitlist signup form"
          noValidate
        >
          <input type="hidden" name="mailingLists" value={mailingListIds} />
          <div className="flex-1">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <div className="space-y-2" role="group" aria-labelledby="email-label">
              <div>
                <span id="email-label" className="sr-only" content="h-0">
                  Enter your email address to join the waitlist
                </span>
                <input
                  {...register('email')}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className={cn(
                    'w-full rounded-md border-0 p-3 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-base placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-primary',
                    errors.email && 'ring-red-500 focus:ring-red-500'
                  )}
                  aria-describedby={
                    errors.email || (state?.message && !state.success) ? 'email-error' : undefined
                  }
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-required="true"
                />
              </div>
            </div>
          </div>
          <AnimatedSubscribeButton
            className="w-full sm:w-[200px]"
            type="submit"
            disabled={isPending}
            pending={isPending}
            subscribeStatus={state?.success}
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
        </form>
        {(errors.email || (state?.message && !state.success)) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center gap-2 rounded bg-red-100 p-3 font-bold text-destructive"
            role="alert"
            id="email-error"
          >
            <TriangleAlert className="size-4" aria-hidden="true" />
            <p className="text-sm">{errors.email?.message || state?.message}</p>
          </motion.div>
        )}
        {state?.success && state.message && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 rounded bg-green-100 p-3 font-bold text-green-700"
            role="status"
          >
            <CheckIcon className="size-4" aria-hidden="true" />
            <p className="text-sm">{state.message}</p>
          </motion.div>
        )}
      </MotionWrapper>
    </div>
  );
}
