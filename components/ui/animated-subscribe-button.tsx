'use client';

import { cn } from '@/lib/utils';
import { HTMLMotionProps } from 'motion/react';
import { AnimatePresence, motion } from 'motion/react';
import React, { useEffect, useState } from 'react';

interface AnimatedSubscribeButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  subscribeStatus?: boolean;
  children: React.ReactNode;
  className?: string;
  'aria-live'?: 'polite' | 'assertive' | 'off';
  'aria-busy'?: boolean;
  pending?: boolean;
}

export const AnimatedSubscribeButton = React.forwardRef<
  HTMLButtonElement,
  AnimatedSubscribeButtonProps
>(
  (
    {
      subscribeStatus = false,
      onClick,
      className,
      children,
      disabled,
      pending,
      'aria-live': ariaLive,
      'aria-busy': ariaBusy,
      ...props
    },
    ref
  ) => {
    const [isSubscribed, setIsSubscribed] = useState<boolean>(subscribeStatus);

    // Update internal state when prop changes
    useEffect(() => {
      setIsSubscribed(subscribeStatus);
    }, [subscribeStatus]);

    if (
      React.Children.count(children) !== 2 ||
      !React.Children.toArray(children).every(
        (child) => React.isValidElement(child) && child.type === 'span'
      )
    ) {
      throw new Error(
        'AnimatedSubscribeButton expects two children, both of which must be <span> elements.'
      );
    }

    const childrenArray = React.Children.toArray(children);
    const initialChild = childrenArray[0];
    const changeChild = childrenArray[1];

    return (
      <AnimatePresence mode="wait">
        {isSubscribed ? (
          <motion.button
            ref={ref}
            className={cn(
              'relative flex h-12 w-fit items-center justify-center overflow-hidden rounded-lg bg-primary px-6 text-primary-foreground',
              className
            )}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              if (!disabled && !pending) {
                setIsSubscribed(false);
                onClick?.(e);
              }
            }}
            disabled={disabled || pending}
            aria-live={ariaLive}
            aria-busy={ariaBusy}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            {...props}
          >
            <motion.span
              key="action"
              className="relative flex h-full w-full items-center justify-center font-semibold"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
            >
              {changeChild}
            </motion.span>
          </motion.button>
        ) : (
          <motion.button
            ref={ref}
            className={cn(
              'relative flex h-12 w-fit cursor-pointer items-center justify-center rounded-lg border-none bg-primary px-6 text-primary-foreground',
              className,
              pending && 'cursor-wait bg-primary/60 text-primary-foreground/40'
            )}
            onClick={(e) => {
              if (!disabled && !pending) {
                onClick?.(e);
              }
            }}
            disabled={disabled || pending}
            aria-live={ariaLive}
            aria-busy={ariaBusy}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            {...props}
          >
            <motion.span
              key="reaction"
              className="relative flex items-center justify-center font-semibold"
              initial={{ x: 0 }}
              animate={{ x: 0 }}
              exit={{ x: 50, transition: { duration: 0.1 }, opacity: 0 }}
            >
              {pending && !isSubscribed ? 'Joining...' : initialChild}
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>
    );
  }
);

AnimatedSubscribeButton.displayName = 'AnimatedSubscribeButton';
