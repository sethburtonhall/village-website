import { Building2, MoveRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function VenueEmptyState() {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border bg-background p-6 text-center md:items-center md:p-16">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-village-venues/10">
        <Building2 className="size-8 text-village-venues/60" />
      </div>
      <div className="space-y-1 text-left md:text-center">
        <p className="font-semibold text-foreground">No venues here yet</p>
        <p className="text-sm text-muted-foreground">
          Be among the first to list your space and get in front of local organizers.
        </p>
      </div>
      <Button variant="venues" size="sm" asChild>
        <a href="https://venues.usevillage.app/sign-up">
          List Your Venue
          <MoveRight className="h-4 w-4" />
        </a>
      </Button>
    </div>
  );
}
