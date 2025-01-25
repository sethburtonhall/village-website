'use client';

import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from '@/components/ui/toast';
import { ScrollLink } from '@/components/ScrollLink';

export const WelcomeToast = () => {
  const { toast } = useToast();

  useEffect(() => {
    // const hasShownWelcome = sessionStorage.getItem('hasShownWelcome');
    // if (hasShownWelcome) return;

    // Add a small delay to ensure components are mounted
    const timer = setTimeout(() => {
      toast({
        title: 'Status: Active Development',
        description: 'Join our waitlist to gain early access!',
        variant: 'info',
        duration: Infinity,
        action: (
          <ToastAction altText="Join the Waitlist">
            <ScrollLink>Join the Waitlist</ScrollLink>
          </ToastAction>
        ),
      });
    }, 1000);

    // Save that we have shown the welcome toast
    // sessionStorage.setItem('hasShownWelcome', 'true');

    return () => clearTimeout(timer);
  }, [toast]);

  return null;
};
