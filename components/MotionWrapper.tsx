import { ReactNode, forwardRef } from 'react';
import * as motion from 'motion/react-client';

interface MotionWrapperProps {
  children: ReactNode;
  type?: 'div' | 'section' | 'span' | 'p';
  index?: number;
  className?: string;
}

export const MotionWrapper = forwardRef<HTMLDivElement, MotionWrapperProps>(
  ({ children, type, index, className }, ref) => {
    const Component = type ? motion[type] : motion.div;
    return (
      <Component
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.3, delay: index ? index * 0.1 : 0 }}
        className={className}
      >
        {children}
      </Component>
    );
  }
);

MotionWrapper.displayName = 'MotionWrapper';
