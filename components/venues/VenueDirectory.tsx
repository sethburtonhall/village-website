import { MotionWrapper } from '@/components/MotionWrapper';
import { VenueCard, type Venue } from '@/components/venues/VenueCard';
import { VenueEmptyState } from '@/components/venues/VenueEmptyState';

export function VenueDirectory({ venues }: { venues: Venue[] }) {
  return (
    <section className="bg-stone-100" id="venue-directory">
      <div className="container mx-auto max-w-6xl space-y-10">
        <div className="stack text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-village-venues">
            Venue Directory
          </p>
          <h2>Discover your perfect venue</h2>
          <p className="block-p text-muted-foreground">
            Browse unique community spaces vetted for quality and character. Find the ideal setting
            for your next gathering.
          </p>
        </div>

        {venues.length === 0 ? (
          <VenueEmptyState />
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {venues.map((venue, index) => (
              <MotionWrapper key={venue.id} index={index}>
                <VenueCard venue={venue} />
              </MotionWrapper>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
