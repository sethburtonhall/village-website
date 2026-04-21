'use client';

import { useState, useEffect } from 'react';
import { type Venue } from '@/components/venues/VenueCard';
import { VenueEmptyState } from '@/components/venues/VenueEmptyState';
import { VenueCarousel } from '@/components/venues/VenueCarousel';
import { VenueFilters } from '@/components/venues/VenueFilters';
import { VenueError } from '@/components/venues/VenueError';
import { getUserLocationWithCache } from '@/lib/geolocation';
import { filterVenuesLocally } from '@/lib/venue-api';

interface VenueDirectoryProps {
  venues: Venue[];
  error?: string | null;
}

export function VenueDirectory({ venues, error: initialError }: VenueDirectoryProps) {
  const [filteredVenues, setFilteredVenues] = useState<Venue[]>(venues);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [isLocationLoading, setIsLocationLoading] = useState(true);
  const [error, setError] = useState<string | null>(initialError || null);
  const [isRetrying, setIsRetrying] = useState(false);

  // Try to get user's location on mount
  useEffect(() => {
    const initializeLocation = async () => {
      try {
        const location = await getUserLocationWithCache();
        if (location) {
          setSelectedState(location.state);
          setSelectedCity(location.city);
        }
      } catch (error) {
        console.warn('Failed to get user location:', error);
      } finally {
        setIsLocationLoading(false);
      }
    };

    initializeLocation();
  }, []);

  // Filter venues based on selected location
  useEffect(() => {
    const filtered = filterVenuesLocally(venues, selectedState, selectedCity);
    setFilteredVenues(filtered);
  }, [selectedState, selectedCity, venues]);

  const handleFiltersChange = (state: string, city: string) => {
    setSelectedState(state);
    setSelectedCity(city);
  };

  const handleRetry = () => {
    setIsRetrying(true);
    window.location.reload();
  };

  return (
    <section className="py-16" id="venue-directory">
      <div className="container mx-auto max-w-6xl space-y-10">
        <div className="stack md:text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-village-venues">
            Venue Directory
          </p>
          <h2>Find a space for your community</h2>
          <p className="text-muted-foreground md:mx-auto md:max-w-lg md:text-center">
            Community spaces available for events near you. Filter by location to find what fits.
          </p>
        </div>

        {/* Location Filters */}
        <VenueFilters
          onFiltersChange={handleFiltersChange}
          initialFilters={{ state: selectedState, city: selectedCity }}
        />

        {/* Venue Carousel or Error */}
        {error ? (
          <VenueError message={error} onRetry={handleRetry} isRetrying={isRetrying} />
        ) : filteredVenues.length === 0 && !error ? (
          <VenueEmptyState />
        ) : (
          <VenueCarousel venues={filteredVenues} />
        )}

        {/* Location Loading Indicator */}
        {isLocationLoading && (
          <div className="text-center text-sm text-muted-foreground">
            Detecting your location...
          </div>
        )}
      </div>
    </section>
  );
}
