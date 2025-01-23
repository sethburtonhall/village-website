import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { cn } from '@/lib/utils';

export interface AnimatedGradientTextProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
}

export function AnimatedGradientText({ children, className, ...props }: AnimatedGradientTextProps) {
  return (
    <div
      className={cn(
        'group relative mx-auto flex max-w-fit flex-row items-center justify-center [--bg-size:300%]',
        className
      )}
      {...props}
    >
      <div
        className={`animate-gradient absolute h-full w-full bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] ![mask-composite:subtract] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`}
      />

      {children}
    </div>
  );
}
