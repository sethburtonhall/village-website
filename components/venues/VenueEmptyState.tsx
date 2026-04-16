import { Building2, MoveRight } from 'lucide-react';

export function VenueEmptyState() {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border bg-background p-6 text-center md:items-center md:p-16">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-village-venues/10">
        <Building2 className="size-8 text-village-venues/60" />
      </div>
      <div className="space-y-1 text-left md:text-center">
        <p className="font-semibold text-foreground">Building our venue directory</p>
        <p className="text-sm text-muted-foreground">
          Be among the first to showcase your space to local organizers.
        </p>
      </div>
      <a
        href="https://venues.usevillage.app/sign-up"
        className="inline-flex max-w-max items-center gap-2 rounded-md bg-village-venues px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-village-venues/90"
      >
        List Your Venue
        <MoveRight className="h-4 w-4" />
      </a>
    </div>
  );
}
