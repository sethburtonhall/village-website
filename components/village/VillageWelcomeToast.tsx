'use client';

import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { getSignUpUrl } from '@/lib/app-urls';

export function VillageWelcomeToast() {
  const { toast } = useToast();

  useEffect(() => {
    if (sessionStorage.getItem('welcomeToastDismissed')) return;

    const timer = setTimeout(() => {
      const { dismiss } = toast({
        title: 'Welcome to our early adopter launch',
        description:
          "Right now, all plans are free. Early adopters will receive special pricing when plans launch. Join now to help shape Village's future. ",
        variant: 'info',
        duration: Infinity,

        action: (
          <div className="flex justify-end gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                sessionStorage.setItem('welcomeToastDismissed', 'true');
                dismiss();
              }}
            >
              Dismiss
            </Button>
            <Button size="sm" onClick={() => (window.location.href = getSignUpUrl())}>
              Join as Early Adopter
            </Button>
          </div>
        ),
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [toast]);

  return null;
}
