'use client';

import { useEffect } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function VenuesError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Venues page error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white dark:bg-stone-950">
      <div className="container mx-auto max-w-6xl space-y-10 py-16">
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <AlertCircle className="h-12 w-12 text-red-500" />
          </div>

          <h2 className="mb-2 text-lg font-semibold text-foreground">Unable to Load Venues</h2>

          <p className="mx-auto mb-6 max-w-md text-muted-foreground">
            We&apos;re having trouble loading our venue directory. This might be a temporary issue.
          </p>

          <Button onClick={reset} className="min-w-[120px]">
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
}
