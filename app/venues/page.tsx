import { VenuesHeader } from '@/components/venues/VenuesHeader';
import { VenuesFooter } from '@/components/venues/VenuesFooter';
import { VenueHero } from '@/components/venues/VenueHero';
import { VenuePerks } from '@/components/venues/VenuePerks';
import { VenueHowItWorks } from '@/components/venues/VenueHowItWorks';
import { VenueDirectory } from '@/components/venues/VenueDirectory';
import { VenueCTA } from '@/components/venues/VenueCTA';
import type { Venue } from '@/components/venues/VenueCard';

async function getVenues(): Promise<Venue[]> {
  try {
    const res = await fetch('https://venues.usevillage.app/api/venues', {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data ?? [];
  } catch {
    return [];
  }
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
