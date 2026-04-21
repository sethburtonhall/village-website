import { VenuesHeader } from '@/components/venues/VenuesHeader';
import { VenuesFooter } from '@/components/venues/VenuesFooter';
import { VenueHero } from '@/components/venues/VenueHero';
import { VenueHowItWorks } from '@/components/venues/VenueHowItWorks';
import { VenueDirectory } from '@/components/venues/VenueDirectory';
import { VenueCTA } from '@/components/venues/VenueCTA';
import { VenueDirectoryBoundary } from '@/components/venues/VenueDirectoryBoundary';
import { fetchVenuesWithFallback } from '@/lib/venue-api';
import type { Venue } from '@/components/venues/VenueCard';

async function getVenues(): Promise<{ venues: Venue[]; error: string | null }> {
  try {
    const venues = await fetchVenuesWithFallback();
    return { venues, error: null };
  } catch (error) {
    console.error('Failed to fetch venues:', error);
    return {
      venues: [],
      error:
        error instanceof Error ? error.message : 'Failed to load venues. Please try again later.',
    };
  }
}

export default async function VenuesPage() {
  const { venues, error } = await getVenues();

  return (
    <div className="min-h-screen bg-stone-50 text-foreground dark:bg-gradient-to-b dark:from-[#0a0a0a] dark:via-[#150b1f] dark:to-[#0a0a0a]">
      <VenuesHeader />
      <VenueHero />
      <VenueHowItWorks />
      <VenueDirectoryBoundary>
        <VenueDirectory venues={venues} error={error} />
      </VenueDirectoryBoundary>
      <VenueCTA />
      <VenuesFooter />
    </div>
  );
}
