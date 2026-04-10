'use client';

import { useState, useEffect } from 'react';
import { MapPin, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { getAvailableStates, getAvailableCities } from '@/lib/venue-api';

interface VenueFiltersProps {
  onFiltersChange: (state: string, city: string) => void;
  initialFilters?: { state: string; city: string };
}

export function VenueFilters({ onFiltersChange, initialFilters }: VenueFiltersProps) {
  const [selectedState, setSelectedState] = useState(initialFilters?.state || '');
  const [selectedCity, setSelectedCity] = useState(initialFilters?.city || '');
  const [availableCities, setAvailableCities] = useState<string[]>([]);
  const [states, setStates] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load states on mount
  useEffect(() => {
    const loadStates = async () => {
      try {
        const availableStates = await getAvailableStates();
        setStates(availableStates);
        setError(null);
      } catch (error) {
        console.error('Failed to load states:', error);
        setError('Unable to load states. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadStates();
  }, []);

  // Update available cities when state changes
  useEffect(() => {
    const loadCities = async () => {
      if (selectedState) {
        try {
          const cities = await getAvailableCities(selectedState);
          setAvailableCities(cities);
          setError(null);

          // Reset city if it's not in the new state's cities
          if (selectedCity && !cities.includes(selectedCity)) {
            setSelectedCity('');
          }
        } catch (error) {
          console.error('Failed to load cities:', error);
          setError(error instanceof Error ? error.message : 'Failed to load cities');
          setAvailableCities([]);
        }
      } else {
        setAvailableCities([]);
      }
    };

    loadCities();
  }, [selectedState, selectedCity]);

  // Notify parent of filter changes
  useEffect(() => {
    onFiltersChange(selectedState, selectedCity);
  }, [selectedState, selectedCity, onFiltersChange]);

  const handleStateChange = (state: string) => {
    setSelectedState(state);
  };

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
  };

  const clearFilters = () => {
    setSelectedState('');
    setSelectedCity('');
  };

  const hasActiveFilters = selectedState || selectedCity;

  return (
    <div className="space-y-4 rounded-lg border border-stone-200 bg-white p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-village-venues" />
          <h3 className="font-semibold text-foreground">Filter by Location</h3>
        </div>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="mr-1 h-4 w-4" />
            Clear
          </Button>
        )}
      </div>

      {/* Error State */}
      {error ? (
        <div className="flex items-center justify-center py-8">
          <div className="text-center">
            <div className="mb-2 text-sm text-red-600">{error}</div>
            <button
              onClick={() => window.location.reload()}
              className="text-sm text-village-venues hover:underline"
            >
              Try again
            </button>
          </div>
        </div>
      ) : isLoading ? (
        <div className="flex items-center justify-center py-8">
          <div className="text-sm text-muted-foreground">Loading locations...</div>
        </div>
      ) : (
        <>
          {/* Filters */}
          <div className="flex flex-col gap-3 sm:flex-row">
            {/* State Filter */}
            <div className="flex-1">
              <label
                htmlFor="state-filter"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                State
              </label>
              <NativeSelect
                id="state-filter"
                value={selectedState}
                onChange={(e) => handleStateChange(e.target.value)}
              >
                <NativeSelectOption value="">All States</NativeSelectOption>
                {states.map((state) => (
                  <NativeSelectOption key={state} value={state}>
                    {state}
                  </NativeSelectOption>
                ))}
              </NativeSelect>
            </div>

            {/* City Filter */}
            <div className="flex-1">
              <label
                htmlFor="city-filter"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                City
              </label>
              <NativeSelect
                id="city-filter"
                value={selectedCity}
                onChange={(e) => handleCityChange(e.target.value)}
                disabled={!selectedState}
              >
                <NativeSelectOption value="">All Cities</NativeSelectOption>
                {availableCities.map((city) => (
                  <NativeSelectOption key={city} value={city}>
                    {city}
                  </NativeSelectOption>
                ))}
              </NativeSelect>
            </div>
          </div>

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2 border-t border-stone-100 pt-2">
              {selectedState && (
                <div className="inline-flex items-center gap-1 rounded-md bg-village-venues/10 px-2 py-1 text-sm text-village-venues">
                  <MapPin className="h-3 w-3" />
                  <span>{selectedState}</span>
                  <button
                    onClick={() => handleStateChange('')}
                    className="ml-1 hover:text-village-venues/80"
                    aria-label={`Remove ${selectedState} filter`}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              )}
              {selectedCity && (
                <div className="inline-flex items-center gap-1 rounded-md bg-village-venues/10 px-2 py-1 text-sm text-village-venues">
                  <MapPin className="h-3 w-3" />
                  <span>{selectedCity}</span>
                  <button
                    onClick={() => handleCityChange('')}
                    className="ml-1 hover:text-village-venues/80"
                    aria-label={`Remove ${selectedCity} filter`}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
