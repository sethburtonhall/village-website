import { VenuesHeader } from '@/components/venues/VenuesHeader';
import { VenuesFooter } from '@/components/venues/VenuesFooter';
import { VenueHero } from '@/components/venues/VenueHero';
import { VenuePerks } from '@/components/venues/VenuePerks';
import { VenueHowItWorks } from '@/components/venues/VenueHowItWorks';
import { VenueDirectory } from '@/components/venues/VenueDirectory';
import { VenueCTA } from '@/components/venues/VenueCTA';
import { fetchVenuesWithFallback } from '@/lib/venue-api';
import type { Venue } from '@/components/venues/VenueCard';

async function getVenues(): Promise<{ venues: Venue[]; error: string | null }> {
  try {
    // In production, this will fetch from the API
    const venues = await fetchVenuesWithFallback();
    console.log('API call successful, venues:', venues.length);
    return { venues, error: null };
  } catch (error) {
    console.error('Failed to fetch venues:', error);
    const errorMessage =
      error instanceof Error ? error.message : 'Failed to load venues. Please try again later.';
    console.log('Returning error:', errorMessage);
    return {
      venues: [],
      error: errorMessage,
    };
  }
}

export default async function VenuesPage() {
  const { venues, error } = await getVenues();

  return (
    <div className="min-h-screen bg-white dark:bg-stone-950">
      <VenuesHeader />
      <VenueHero />
      <VenuePerks />
      <VenueHowItWorks />
      <VenueDirectory venues={venues} error={error} />
      <VenueCTA />
      <VenuesFooter />
    </div>
  );
}
