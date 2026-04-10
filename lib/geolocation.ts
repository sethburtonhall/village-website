// State code mapping from geolocation data
const stateCodeMap: Record<string, string> = {
  'Alabama': 'AL',
  'Alaska': 'AK',
  'Arizona': 'AZ',
  'Arkansas': 'AR',
  'California': 'CA',
  'Colorado': 'CO',
  'Connecticut': 'CT',
  'Delaware': 'DE',
  'Florida': 'FL',
  'Georgia': 'GA',
  'Hawaii': 'HI',
  'Idaho': 'ID',
  'Illinois': 'IL',
  'Indiana': 'IN',
  'Iowa': 'IA',
  'Kansas': 'KS',
  'Kentucky': 'KY',
  'Louisiana': 'LA',
  'Maine': 'ME',
  'Maryland': 'MD',
  'Massachusetts': 'MA',
  'Michigan': 'MI',
  'Minnesota': 'MN',
  'Mississippi': 'MS',
  'Missouri': 'MO',
  'Montana': 'MT',
  'Nebraska': 'NE',
  'Nevada': 'NV',
  'New Hampshire': 'NH',
  'New Jersey': 'NJ',
  'New Mexico': 'NM',
  'New York': 'NY',
  'North Carolina': 'NC',
  'North Dakota': 'ND',
  'Ohio': 'OH',
  'Oklahoma': 'OK',
  'Oregon': 'OR',
  'Pennsylvania': 'PA',
  'Rhode Island': 'RI',
  'South Carolina': 'SC',
  'South Dakota': 'SD',
  'Tennessee': 'TN',
  'Texas': 'TX',
  'Utah': 'UT',
  'Vermont': 'VT',
  'Virginia': 'VA',
  'Washington': 'WA',
  'West Virginia': 'WV',
  'Wisconsin': 'WI',
  'Wyoming': 'WY',
};

export interface LocationData {
  state: string;
  city: string;
  latitude: number;
  longitude: number;
}

export async function getUserLocation(): Promise<LocationData | null> {
  try {
    // Check if geolocation is supported
    if (!navigator.geolocation) {
      console.warn('Geolocation is not supported by this browser');
      return null;
    }

    // Get user's current position
    const position = await new Promise<GeolocationPosition>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000, // 5 minutes cache
      });
    });

    const { latitude, longitude } = position.coords;

    // Reverse geocoding using Nominatim (OpenStreetMap)
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=1`,
      {
        headers: {
          'User-Agent': 'Village Venues (https://venues.usevillage.app)',
        },
      }
    );

    if (!response.ok) {
      console.warn('Failed to reverse geocode location');
      return null;
    }

    const data = await response.json();
    const address = data.address;

    if (!address) {
      console.warn('No address data found');
      return null;
    }

    // Extract state and city from the response
    let state = '';
    let city = '';

    // Try to get state from various possible fields
    state = address.state || 
            address.region || 
            address['ISO3166-2']?.split('-')[1] || 
            '';

    // Convert full state name to abbreviation if needed
    if (state && state.length > 2) {
      state = stateCodeMap[state] || state;
    }

    // Try to get city from various possible fields
    city = address.city || 
           address.town || 
           address.village || 
           address.county || 
           address.municipality || 
           '';

    // If we couldn't get a proper city, use the suburb or locality
    if (!city) {
      city = address.suburb || 
             address.locality || 
             address.neighbourhood || 
             '';
    }

    if (!state || !city) {
      console.warn('Could not determine state or city from location', { address });
      return null;
    }

    return {
      state: state.toUpperCase(),
      city,
      latitude,
      longitude,
    };
  } catch (error) {
    console.warn('Error getting user location:', error);
    return null;
  }
}

export function cacheUserLocation(location: LocationData): void {
  try {
    localStorage.setItem('village-user-location', JSON.stringify(location));
    localStorage.setItem('village-location-timestamp', Date.now().toString());
  } catch (error) {
    console.warn('Failed to cache user location:', error);
  }
}

export function getCachedUserLocation(): LocationData | null {
  try {
    const cached = localStorage.getItem('village-user-location');
    const timestamp = localStorage.getItem('village-location-timestamp');
    
    if (!cached || !timestamp) {
      return null;
    }

    // Cache expires after 24 hours
    const cacheAge = Date.now() - parseInt(timestamp, 10);
    if (cacheAge > 24 * 60 * 60 * 1000) {
      clearCachedUserLocation();
      return null;
    }

    return JSON.parse(cached) as LocationData;
  } catch (error) {
    console.warn('Failed to get cached user location:', error);
    return null;
  }
}

export function clearCachedUserLocation(): void {
  try {
    localStorage.removeItem('village-user-location');
    localStorage.removeItem('village-location-timestamp');
  } catch (error) {
    console.warn('Failed to clear cached user location:', error);
  }
}

export async function getUserLocationWithCache(): Promise<LocationData | null> {
  // First, try to get cached location
  const cached = getCachedUserLocation();
  if (cached) {
    return cached;
  }

  // If no cache, get fresh location
  const location = await getUserLocation();
  if (location) {
    cacheUserLocation(location);
  }

  return location;
}
