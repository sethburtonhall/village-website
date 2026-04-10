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
    setError(null); // Clear error when filters change
  };

  const handleRetry = async () => {
    setIsRetrying(true);
    setError(null);

    try {
      // Reload the page to re-fetch venues from API
      window.location.reload();
    } catch (error) {
      setError('Failed to retry. Please try again.');
    } finally {
      setIsRetrying(false);
    }
  };

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
