import { VenuesHeader } from '@/components/venues/VenuesHeader';
import { VenuesFooter } from '@/components/venues/VenuesFooter';
import { VenueHero } from '@/components/venues/VenueHero';
import { VenuePerks } from '@/components/venues/VenuePerks';
import { VenueHowItWorks } from '@/components/venues/VenueHowItWorks';
import { VenueDirectory } from '@/components/venues/VenueDirectory';
import { VenueCTA } from '@/components/venues/VenueCTA';
import { fetchVenuesWithFallback } from '@/lib/venue-api';
import type { Venue } from '@/components/venues/VenueCard';

async function getVenues(): Promise<Venue[]> {
  // In production, this will fetch from the API
  // In development, it will fall back to seed data if the API is unavailable
  return await fetchVenuesWithFallback();
}

export default async function VenuesPage() {
  const venues = await getVenues();

  return (
    <div className="min-h-screen bg-white dark:bg-stone-950">
      <VenuesHeader />
      <VenueHero />
      <VenuePerks />
      <VenueHowItWorks />
      <VenueDirectory venues={venues} />
      <VenueCTA />
      <VenuesFooter />
    </div>
  );
}
