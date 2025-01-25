'use client';

import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from '@/components/ui/toast';
import { ScrollLink } from '@/components/ScrollLink';

export const WelcomeToast = () => {
  const { toast } = useToast();

  useEffect(() => {
    if (sessionStorage.getItem('isSubscribed')) return;

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

    return () => clearTimeout(timer);
  }, [toast]);

  return null;
};
