'use client';

import { useFormStatus } from 'react-dom';
import { startTransition, useActionState, useRef } from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { z } from 'zod';

import { cn } from '@/lib/utils';
import { addToWaitlist } from '@/app/actions';
import { waitlistSchema } from '@/lib/schemas';

import { MotionWrapper } from '@/components/MotionWrapper';
import { AnimatedSubscribeButton } from '@/components/ui/animated-subscribe-button';

import { TriangleAlert, CheckIcon, ClipboardList } from 'lucide-react';

type FormData = z.infer<typeof waitlistSchema>;

function SubmitButton({ type, success }: { type?: 'light' | 'dark'; success?: boolean }) {
  const { pending } = useFormStatus();

  return (
    <AnimatedSubscribeButton
      className="w-full sm:w-[200px]"
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

export function WaitlistForm({ type = 'dark' }: { type?: 'light' | 'dark' }) {
  const [state, formAction] = useActionState(
    async (_, formData: FormData) => addToWaitlist(formData),
    null
  );

  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(waitlistSchema),
  });

  return (
    <div className={cn('mx-auto max-w-lg space-y-2 text-center', type === 'dark' && 'text-white')}>
      <h2>Join the Waitlist Today!</h2>

      <MotionWrapper className="space-y-4">
        <p>It takes a village. Be among the first to bring yours together.</p>
        <form
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit((data) => {
              startTransition(() => {
                const formData = new FormData();
                formData.append('email', data.email);
                console.log(formData);
                formAction(formData);
              });
            })(e);
            state?.success && formRef.current?.reset();
          }}
          className="stack sm:flex-row sm:gap-4"
        >
          <div className="flex-1">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="space-y-2">
              <input
                {...register('email')}
                type="email"
                id="email"
                placeholder="Enter your email"
                className={cn(
                  'w-full rounded-md border-0 p-3 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-base placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-primary',
                  errors.email && 'ring-red-500 focus:ring-red-500'
                )}
                aria-label="Email address"
                aria-invalid={errors.email ? 'true' : 'false'}
              />
              {(errors.email || (state?.message && !state.success)) && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center gap-2 rounded bg-red-100 p-3 font-bold text-destructive"
                >
                  <TriangleAlert className="size-4" />
                  <p className="text-sm">{errors.email?.message || state?.message}</p>
                </motion.div>
              )}
            </div>
          </div>
          <SubmitButton type={type} success={state?.success} />
        </form>
      </MotionWrapper>
    </div>
  );
}
