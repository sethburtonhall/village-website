import React from 'react';
import * as motion from 'motion/react-client';

interface JiggleTextProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  text: string;
  pulseColor?: string;
  duration?: string;
}

export const JiggleText = React.forwardRef<HTMLDivElement, JiggleTextProps>(
  ({ text, className, pulseColor = '#0096ff', duration = '1.5s', ...props }, ref) => {
    return (
      <motion.div
        animate={{
          rotate: [0, -3, 3, -2, 0],
        }}
        transition={{
          rotate: {
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: Math.random() * 2 + 1, // Random delay between 1-3 seconds
            ease: 'easeInOut',
          },
        }}
      >
        <div className={className}>{text}</div>
      </motion.div>
    );
  }
);

JiggleText.displayName = 'JiggleText';
