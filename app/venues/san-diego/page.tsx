import { fetchVenuesWithFallback } from '@/lib/venue-api';
import { VenuesHeader } from '@/components/venues/VenuesHeader';
import { VenuesFooter } from '@/components/venues/VenuesFooter';
import { VenueCard } from '@/components/venues/VenueCard';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import Link from 'next/link';

export default async function SanDiegoVenuesPage() {
  let venues: any[] = [];
  let error = null;

  try {
    venues = await fetchVenuesWithFallback({ state: 'CA', city: 'San Diego' });
  } catch (err) {
    error = err instanceof Error ? err.message : 'Failed to load venues';
  }

  return (
    <div className="min-h-screen bg-stone-50 text-foreground dark:bg-gradient-to-b dark:from-[#0a0a0a] dark:via-[#150b1f] dark:to-[#0a0a0a]">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://usevillage.app' },
          { name: 'Venues', url: 'https://usevillage.app/venues' },
          { name: 'San Diego', url: 'https://usevillage.app/venues/san-diego' },
        ]}
      />
      <VenuesHeader />

      <main className="px-6 py-16">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="mb-12 space-y-4">
            <div className="flex items-center gap-2 text-sm text-stone-600">
              <Link href="/venues" className="hover:text-stone-900">
                All Venues
              </Link>
              <span>/</span>
              <span>San Diego, CA</span>
            </div>
            <h1 className="text-4xl font-bold md:text-5xl">Event Venues in San Diego</h1>
            <p className="max-w-2xl text-lg text-stone-600">
              Browse unique event spaces and venues across San Diego, California. Perfect for
              weddings, conferences, corporate events, and community gatherings.
            </p>
          </div>

          {/* Venue Grid */}
          {error ? (
            <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-red-900">
              <p>{error}</p>
            </div>
          ) : venues.length === 0 ? (
            <div className="rounded-lg border border-stone-200 bg-white p-8 text-center">
              <p className="text-stone-600">
                No venues available in San Diego at this time. Please check back soon or{' '}
                <Link href="/venues" className="font-semibold text-primary-600 hover:underline">
                  browse all venues
                </Link>
                .
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {venues.map((venue) => (
                <VenueCard key={venue.id} venue={venue} />
              ))}
            </div>
          )}
        </div>
      </main>

      <VenuesFooter />
    </div>
  );
}
