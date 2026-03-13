'use client';

import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from '@/components/ui/toast';

export const WelcomeToast = () => {
  const { toast } = useToast();

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      // Use scrollIntoView with block option for better mobile support
      waitlistSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      // Adjust for fixed header after scroll
      setTimeout(() => {
        const scrolledY = window.scrollY;
        if (scrolledY) {
          window.scroll({
            top: scrolledY - 80,
            behavior: 'smooth',
          });
        }
      }, 100);
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem('isSubscribed')) return;

    // Add a small delay to ensure components are mounted
    const timer = setTimeout(() => {
      toast({
        title: 'Status: Private Beta',
        description: 'Join our waitlist to gain access!',
        variant: 'info',
        duration: Infinity,
        action: (
          <ToastAction altText="Join the Waitlist" onClick={scrollToWaitlist}>
            Join the Waitlist
          </ToastAction>
        ),
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [toast]);

  return null;
};
