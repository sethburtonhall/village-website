'use client';

import { useRef } from 'react';
import confetti from 'canvas-confetti';

import { Confetti, type ConfettiRef } from '@/components/ui/confetti';

export function ConfettiHover() {
  const confettiRef = useRef<ConfettiRef>(null);

  const handleHover = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ['#a786ff', '#fd8bbc', '#eca184', '#f8deb1'];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };
  return (
    <Confetti
      ref={confettiRef}
      className="absolute left-0 top-0 z-0 size-full"
      options={{
        get angle() {
          return Math.random() * 360;
        },
      }}
      onMouseEnter={handleHover}
    />
  );
}
