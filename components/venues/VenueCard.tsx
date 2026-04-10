import { MapPin, Users } from 'lucide-react';
import { Building2 } from 'lucide-react';

export interface Venue {
  id: string;
  name: string;
  slug: string;
  description: string;
  city: string;
  state: string;
  capacity: number;
  amenities: string[];
  photos: string[];
}

export function VenueCard({ venue }: { venue: Venue }) {
  return (
    <a
      href={`https://venues.usevillage.app/${venue.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg">
        {/* Photo */}
        <div className="aspect-video overflow-hidden bg-village-venues/10">
          {venue.photos?.[0] ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={venue.photos[0]}
              alt={venue.name}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <Building2 className="size-10 text-village-venues/40" />
            </div>
          )}
        </div>

        {/* Info */}
        <div className="space-y-1.5 p-4">
          <h3 className="truncate font-semibold">{venue.name}</h3>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-3.5 shrink-0" />
            <span className="truncate">
              {venue.city}, {venue.state}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Users className="size-3.5 shrink-0" />
            <span>Hosts up to {venue.capacity.toLocaleString()} guests</span>
          </div>
        </div>
      </div>
    </a>
  );
}
