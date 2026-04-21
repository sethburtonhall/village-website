import { AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VenueErrorProps {
  message: string;
  onRetry: () => void;
  isRetrying?: boolean;
}

export function VenueError({ message, onRetry, isRetrying = false }: VenueErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-16" data-testid="venue-error">
      <div className="max-w-md text-center">
        <div className="mb-4 flex justify-center">
          <AlertCircle className="h-12 w-12 text-red-500" />
        </div>

        <h3 className="mb-2 text-lg font-semibold text-foreground">Unable to Load Venues</h3>

        <p className="mb-6 text-muted-foreground">{message}</p>

        <Button onClick={onRetry} disabled={isRetrying} className="min-w-[120px]">
          {isRetrying ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Retrying...
            </>
          ) : (
            <>
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
