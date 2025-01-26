'use client';

import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from '@/components/ui/toast';

export const CookieToast = () => {
  const { toast } = useToast();

  useEffect(() => {
    if (sessionStorage.getItem('acceptedCookies')) return;

    // Add a small delay to ensure components are mounted
    const timer = setTimeout(() => {
      toast({
        title: 'Cookie Policy',
        description:
          'This website uses cookies to supplement a balanced diet and provide a much deserved reward to the senses after consuming bland but nutritious meals. Accepting our cookies is optional but recommended, as they are delicious. See our cookie policy.',
        variant: 'default',
        duration: Infinity,
        action: (
          <div className="flex gap-2">
            <ToastAction
              altText="Accept Cookies"
              className="bg-primary-600 text-white"
              onClick={() => {
                sessionStorage.setItem('acceptedCookies', 'true');
              }}
            >
              Accept Cookies
            </ToastAction>
            <ToastAction
              altText="Reject All"
              onClick={() => {
                sessionStorage.setItem('rejectedCookies', 'true');
              }}
            >
              Reject All
            </ToastAction>
          </div>
        ),
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [toast]);

  return null;
};
