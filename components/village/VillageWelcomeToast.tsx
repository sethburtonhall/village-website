'use client';

import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from '@/components/ui/toast';

export function VillageWelcomeToast() {
  const { toast } = useToast();

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem('isSubscribed')) return;

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
}
