'use client';

import { type ReactNode } from 'react';

export const ScrollLink = ({ children }: { children: ReactNode }) => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <span onClick={scrollToWaitlist} className="cursor-pointer">
      {children}
    </span>
  );
};
