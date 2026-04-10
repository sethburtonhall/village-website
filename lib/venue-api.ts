import type { Venue } from '@/components/venues/VenueCard';

export interface VenueApiResponse {
  data: Venue[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages?: number;
  };
}

export interface VenueApiParams {
  page?: number;
  limit?: number;
  state?: string;
  city?: string;
}

export async function fetchVenues(params: VenueApiParams = {}): Promise<VenueApiResponse> {
  const { page = 1, limit = 50, state, city } = params;

  // Build query string
  const queryParams = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });

  if (state) queryParams.append('state', state);
  if (city) queryParams.append('city', city);

  try {
    const res = await fetch(`https://venues.usevillage.app/api/venues?${queryParams}`, {
      next: { revalidate: 60 }, // Cache for 60 seconds
      headers: {
        'User-Agent': 'Village Venues Website',
      },
    });

    if (!res.ok) {
      throw new Error(`API request failed: ${res.status} ${res.statusText}`);
    }

    const json = await res.json();

    // Ensure the response has the expected structure
    return {
      data: json.data || [],
      meta: {
        total: json.meta?.total || 0,
        page: json.meta?.page || page,
        limit: json.meta?.limit || limit,
        totalPages: json.meta?.totalPages || Math.ceil((json.meta?.total || 0) / limit),
      },
    };
  } catch (error) {
    console.warn('Failed to fetch venues from API:', error);
    // Return empty result on error
    return {
      data: [],
      meta: {
        total: 0,
        page,
        limit,
        totalPages: 0,
      },
    };
  }
}

export async function fetchVenuesWithFallback(params: VenueApiParams = {}): Promise<Venue[]> {
  // Check if seed data is explicitly enabled via environment variable
  const useSeedData = process.env.USE_SEED_DATA === 'true';

  if (useSeedData) {
    const { venueSeedData, getVenuesByLocation } = await import('./venue-seed');
    let venues = venueSeedData;

    // Apply location filtering if specified
    if (params.state || params.city) {
      venues = getVenuesByLocation(params.state, params.city);
    }

    // Apply pagination if specified
    if (params.page && params.limit) {
      const start = (params.page - 1) * params.limit;
      const end = start + params.limit;
      venues = venues.slice(start, end);
    }

    return venues;
  }

  try {
    const response = await fetchVenues(params);
    return response.data;
  } catch (error) {
    console.error('API failed:', error);
    throw new Error('Unable to load venues. Please try again later.');
  }
}

// Utility function to get all unique states from API
export async function getAvailableStates(): Promise<string[]> {
  const useSeedData = process.env.USE_SEED_DATA === 'true';

  if (useSeedData) {
    const { venueSeedData } = await import('./venue-seed');
    const states = Array.from(new Set(venueSeedData.map((venue) => venue.state)));
    return states.sort();
  }

  try {
    // Fetch a large batch to get all states
    const response = await fetchVenues({ limit: 500 });
    const states = Array.from(new Set(response.data.map((venue) => venue.state)));
    return states.sort();
  } catch (error) {
    console.error('Failed to fetch states from API:', error);
    throw new Error('Unable to load states. Please try again later.');
  }
}

// Utility function to get cities for a specific state
export async function getAvailableCities(state: string): Promise<string[]> {
  const useSeedData = process.env.USE_SEED_DATA === 'true';

  if (useSeedData) {
    const { getVenuesByLocation } = await import('./venue-seed');
    const venues = getVenuesByLocation(state);
    const cities = Array.from(new Set(venues.map((venue) => venue.city)));
    return cities.sort();
  }

  try {
    // Fetch venues for this state
    const response = await fetchVenues({ limit: 500, state });
    const cities = Array.from(new Set(response.data.map((venue) => venue.city)));
    return cities.sort();
  } catch (error) {
    console.error('Failed to fetch cities from API:', error);
    throw new Error('Unable to load cities. Please try again later.');
  }
}

// Client-side filtering utility (for when we have all data locally)
export function filterVenuesLocally(venues: Venue[], state?: string, city?: string): Venue[] {
  return venues.filter((venue) => {
    if (state && venue.state !== state) return false;
    if (city && venue.city !== city) return false;
    return true;
  });
}
