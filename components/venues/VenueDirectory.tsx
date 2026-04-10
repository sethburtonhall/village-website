'use client';

import { useState, useEffect } from 'react';
import { type Venue } from '@/components/venues/VenueCard';
import { VenueEmptyState } from '@/components/venues/VenueEmptyState';
import { VenueCarousel } from '@/components/venues/VenueCarousel';
import { VenueFilters } from '@/components/venues/VenueFilters';
import { getUserLocationWithCache } from '@/lib/geolocation';
import { getVenuesByLocation } from '@/lib/venue-seed';

interface VenueDirectoryProps {
  venues: Venue[];
}

export function VenueDirectory({ venues }: VenueDirectoryProps) {
  const [filteredVenues, setFilteredVenues] = useState<Venue[]>(venues);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [isLocationLoading, setIsLocationLoading] = useState(true);

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
    const filtered = getVenuesByLocation(selectedState, selectedCity);
    setFilteredVenues(filtered);
  }, [selectedState, selectedCity, venues]);

  const handleFiltersChange = (state: string, city: string) => {
    setSelectedState(state);
    setSelectedCity(city);
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

        {/* Venue Carousel */}
        {filteredVenues.length === 0 ? (
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
