import type { Venue } from '@/components/venues/VenueCard';

export const venueSeedData: Venue[] = [
  // California venues
  {
    id: 'ca-loft-1',
    name: 'The Loft at 5th',
    slug: 'the-loft-at-5th',
    description: 'Modern industrial loft with exposed brick, high ceilings, and natural light. Perfect for creative workshops and intimate gatherings.',
    city: 'Oceanside',
    state: 'CA',
    capacity: 50,
    amenities: ['WiFi', 'Parking', 'AV Equipment', 'Kitchen', 'Outdoor Space', 'Natural Light', 'Tables & Chairs'],
    photos: ['https://pub-f2f66843f8b64838b5f4140e56bde6e5.r2.dev/4b6dc550-4b06-44cb-bd12-0d4b427f0f8b/1775774569790-8k4wid.jpeg']
  },
  {
    id: 'ca-gallery-1',
    name: 'Sunset Art Gallery',
    slug: 'sunset-art-gallery',
    description: 'Elegant gallery space with track lighting and white walls. Ideal for art exhibitions, wine tastings, and corporate events.',
    city: 'San Diego',
    state: 'CA',
    capacity: 75,
    amenities: ['WiFi', 'Parking', 'AV Equipment', 'Kitchen', 'Natural Light', 'Tables & Chairs', 'Sound System'],
    photos: []
  },
  {
    id: 'ca-rooftop-1',
    name: 'Skyline Rooftop Lounge',
    slug: 'skyline-rooftop-lounge',
    description: 'Stunning rooftop venue with panoramic city views. Perfect for cocktail parties, networking events, and celebrations.',
    city: 'Los Angeles',
    state: 'CA',
    capacity: 100,
    amenities: ['WiFi', 'Parking', 'AV Equipment', 'Outdoor Space', 'Full Bar', 'Sound System', 'Heating'],
    photos: []
  },
  {
    id: 'ca-garden-1',
    name: 'Secret Garden Estate',
    slug: 'secret-garden-estate',
    description: 'Lush outdoor garden with mature trees and floral arrangements. Magical setting for weddings and garden parties.',
    city: 'Santa Barbara',
    state: 'CA',
    capacity: 150,
    amenities: ['Parking', 'Outdoor Space', 'Natural Light', 'Tables & Chairs', 'Sound System', 'Catering Kitchen'],
    photos: []
  },
  
  // New York venues
  {
    id: 'ny-loft-1',
    name: 'Manhattan Creative Space',
    slug: 'manhattan-creative-space',
    description: 'Contemporary loft in the heart of Manhattan. Industrial chic with modern amenities for corporate events and workshops.',
    city: 'New York',
    state: 'NY',
    capacity: 60,
    amenities: ['WiFi', 'AV Equipment', 'Kitchen', 'Natural Light', 'Tables & Chairs', 'Sound System'],
    photos: []
  },
  {
    id: 'ny-brownstone-1',
    name: 'Brooklyn Brownstone',
    slug: 'brooklyn-brownstone',
    description: 'Historic brownstone with classic architecture. Intimate setting for dinner parties and small gatherings.',
    city: 'Brooklyn',
    state: 'NY',
    capacity: 30,
    amenities: ['WiFi', 'Kitchen', 'Natural Light', 'Tables & Chairs', 'Fireplace'],
    photos: []
  },
  {
    id: 'ny-rooftop-1',
    name: 'Queens Sky Terrace',
    slug: 'queens-sky-terrace',
    description: 'Modern rooftop with Manhattan skyline views. Great for summer parties and outdoor events.',
    city: 'Queens',
    state: 'NY',
    capacity: 80,
    amenities: ['WiFi', 'Parking', 'Outdoor Space', 'Full Bar', 'Sound System', 'Heating'],
    photos: []
  },
  
  // Texas venues
  {
    id: 'tx-ranch-1',
    name: 'Lone Star Ranch',
    slug: 'lone-star-ranch',
    description: 'Authentic Texas ranch with rustic charm. Perfect for country weddings, corporate retreats, and BBQ events.',
    city: 'Austin',
    state: 'TX',
    capacity: 200,
    amenities: ['Parking', 'Outdoor Space', 'Kitchen', 'Tables & Chairs', 'Sound System', 'Catering Kitchen'],
    photos: []
  },
  {
    id: 'tx-loft-1',
    name: 'Downtown Warehouse',
    slug: 'downtown-warehouse',
    description: 'Spacious warehouse with exposed brick and high ceilings. Ideal for concerts, exhibitions, and large events.',
    city: 'Houston',
    state: 'TX',
    capacity: 300,
    amenities: ['WiFi', 'Parking', 'AV Equipment', 'Kitchen', 'Sound System', 'Loading Dock'],
    photos: []
  },
  {
    id: 'tx-garden-1',
    name: 'Dallas Botanical Garden',
    slug: 'dallas-botanical-garden',
    description: 'Beautiful botanical garden with themed areas. Perfect for weddings and outdoor celebrations.',
    city: 'Dallas',
    state: 'TX',
    capacity: 120,
    amenities: ['Parking', 'Outdoor Space', 'Natural Light', 'Tables & Chairs', 'Sound System'],
    photos: []
  },
  
  // Florida venues
  {
    id: 'fl-beach-1',
    name: 'Miami Beach Club',
    slug: 'miami-beach-club',
    description: 'Luxury beachfront venue with ocean views. Perfect for tropical weddings and upscale events.',
    city: 'Miami',
    state: 'FL',
    capacity: 150,
    amenities: ['WiFi', 'Parking', 'Outdoor Space', 'Full Bar', 'Sound System', 'Beach Access'],
    photos: []
  },
  {
    id: 'fl-garden-1',
    name: 'Orlando Garden Estate',
    slug: 'orlando-garden-estate',
    description: 'Tropical garden paradise with water features. Great for weddings and corporate events.',
    city: 'Orlando',
    state: 'FL',
    capacity: 100,
    amenities: ['Parking', 'Outdoor Space', 'Kitchen', 'Natural Light', 'Tables & Chairs', 'AV Equipment'],
    photos: []
  },
  
  // Illinois venues
  {
    id: 'il-loft-1',
    name: 'Chicago River View Loft',
    slug: 'chicago-river-view-loft',
    description: 'Modern loft with stunning river views. Perfect for corporate events and sophisticated gatherings.',
    city: 'Chicago',
    state: 'IL',
    capacity: 80,
    amenities: ['WiFi', 'Parking', 'AV Equipment', 'Kitchen', 'Natural Light', 'Tables & Chairs', 'Sound System'],
    photos: []
  },
  {
    id: 'il-ballroom-1',
    name: 'Grand Ballroom',
    slug: 'grand-ballroom',
    description: 'Elegant historic ballroom with crystal chandeliers. Classic venue for formal events and weddings.',
    city: 'Chicago',
    state: 'IL',
    capacity: 250,
    amenities: ['WiFi', 'Parking', 'AV Equipment', 'Kitchen', 'Tables & Chairs', 'Sound System', 'Dance Floor'],
    photos: []
  },
  
  // Washington venues
  {
    id: 'wa-loft-1',
    name: 'Seattle Tech Hub',
    slug: 'seattle-tech-hub',
    description: 'Modern tech-friendly space with mountain views. Ideal for hackathons, tech meetups, and innovation workshops.',
    city: 'Seattle',
    state: 'WA',
    capacity: 70,
    amenities: ['WiFi', 'Parking', 'AV Equipment', 'Kitchen', 'Natural Light', 'Tables & Chairs', 'Whiteboards'],
    photos: []
  },
  {
    id: 'wa-waterfront-1',
    name: 'Puget Sound Waterfront',
    slug: 'puget-sound-waterfront',
    description: 'Scenic waterfront venue with mountain and water views. Perfect for weddings and corporate events.',
    city: 'Tacoma',
    state: 'WA',
    capacity: 120,
    amenities: ['WiFi', 'Parking', 'Outdoor Space', 'Kitchen', 'Natural Light', 'Tables & Chairs', 'Sound System'],
    photos: []
  },
  
  // Colorado venues
  {
    id: 'co-mountain-1',
    name: 'Aspen Mountain Lodge',
    slug: 'aspen-mountain-lodge',
    description: 'Cozy mountain lodge with fireplace and mountain views. Perfect for retreats and intimate gatherings.',
    city: 'Aspen',
    state: 'CO',
    capacity: 40,
    amenities: ['WiFi', 'Parking', 'Kitchen', 'Fireplace', 'Natural Light', 'Tables & Chairs'],
    photos: []
  },
  {
    id: 'co-rooftop-1',
    name: 'Denver Sky Lounge',
    slug: 'denver-sky-lounge',
    description: 'Rooftop venue with Rocky Mountain views. Great for cocktail parties and networking events.',
    city: 'Denver',
    state: 'CO',
    capacity: 90,
    amenities: ['WiFi', 'Parking', 'Outdoor Space', 'Full Bar', 'Sound System', 'Heating'],
    photos: []
  },
  
  // Arizona venues
  {
    id: 'az-desert-1',
    name: 'Desert Oasis Estate',
    slug: 'desert-oasis-estate',
    description: 'Stunning desert landscape with mountain backdrops. Perfect for sunset weddings and outdoor events.',
    city: 'Scottsdale',
    state: 'AZ',
    capacity: 180,
    amenities: ['Parking', 'Outdoor Space', 'Kitchen', 'Natural Light', 'Tables & Chairs', 'Sound System'],
    photos: []
  },
  {
    id: 'az-loft-1',
    name: 'Phoenix Art Space',
    slug: 'phoenix-art-space',
    description: 'Contemporary art gallery with desert-inspired architecture. Ideal for exhibitions and creative events.',
    city: 'Phoenix',
    state: 'AZ',
    capacity: 65,
    amenities: ['WiFi', 'Parking', 'AV Equipment', 'Kitchen', 'Natural Light', 'Tables & Chairs'],
    photos: []
  },
  
  // Oregon venues
  {
    id: 'or-garden-1',
    name: 'Portland Rose Garden',
    slug: 'portland-rose-garden',
    description: 'Beautiful garden venue with thousands of roses. Perfect for weddings and garden parties.',
    city: 'Portland',
    state: 'OR',
    capacity: 85,
    amenities: ['Parking', 'Outdoor Space', 'Kitchen', 'Natural Light', 'Tables & Chairs', 'Sound System'],
    photos: []
  },
  {
    id: 'or-loft-1',
    name: 'Pearl District Loft',
    slug: 'pearl-district-loft',
    description: 'Industrial chic loft in arts district. Great for creative workshops and modern events.',
    city: 'Portland',
    state: 'OR',
    capacity: 55,
    amenities: ['WiFi', 'Parking', 'AV Equipment', 'Kitchen', 'Natural Light', 'Tables & Chairs'],
    photos: []
  },
  
  // Massachusetts venues
  {
    id: 'ma-historic-1',
    name: 'Boston Historic Hall',
    slug: 'boston-historic-hall',
    description: 'Colonial-era venue with historic charm. Perfect for formal events and traditional celebrations.',
    city: 'Boston',
    state: 'MA',
    capacity: 140,
    amenities: ['WiFi', 'Parking', 'AV Equipment', 'Kitchen', 'Tables & Chairs', 'Sound System', 'Fireplace'],
    photos: []
  },
  {
    id: 'ma-waterfront-1',
    name: 'Harbor View Terrace',
    slug: 'harbor-view-terrace',
    description: 'Elegant waterfront venue with harbor views. Ideal for weddings and corporate events.',
    city: 'Cambridge',
    state: 'MA',
    capacity: 95,
    amenities: ['WiFi', 'Parking', 'Outdoor Space', 'Kitchen', 'Natural Light', 'Tables & Chairs'],
    photos: []
  },
  
  // Georgia venues
  {
    id: 'ga-mansion-1',
    name: 'Atlanta Southern Mansion',
    slug: 'atlanta-southern-mansion',
    description: 'Historic southern mansion with grand ballroom. Perfect for weddings and formal events.',
    city: 'Atlanta',
    state: 'GA',
    capacity: 200,
    amenities: ['WiFi', 'Parking', 'AV Equipment', 'Kitchen', 'Tables & Chairs', 'Sound System', 'Dance Floor'],
    photos: []
  },
  {
    id: 'ga-rooftop-1',
    name: 'Buckhead Sky Bar',
    slug: 'buckhead-sky-bar',
    description: 'Upscale rooftop venue with city views. Great for cocktail parties and networking events.',
    city: 'Atlanta',
    state: 'GA',
    capacity: 75,
    amenities: ['WiFi', 'Parking', 'Outdoor Space', 'Full Bar', 'Sound System', 'Heating'],
    photos: []
  },
  
  // Michigan venues
  {
    id: 'mi-loft-1',
    name: 'Detroit Creative Studio',
    slug: 'detroit-creative-studio',
    description: 'Industrial creative space with exposed brick. Perfect for art shows and creative workshops.',
    city: 'Detroit',
    state: 'MI',
    capacity: 45,
    amenities: ['WiFi', 'Parking', 'AV Equipment', 'Kitchen', 'Natural Light', 'Tables & Chairs'],
    photos: []
  },
  {
    id: 'mi-lakeside-1',
    name: 'Lake Michigan Shore',
    slug: 'lake-michigan-shore',
    description: 'Beautiful lakeside venue with water views. Perfect for summer weddings and outdoor events.',
    city: 'Grand Rapids',
    state: 'MI',
    capacity: 110,
    amenities: ['WiFi', 'Parking', 'Outdoor Space', 'Kitchen', 'Natural Light', 'Tables & Chairs', 'Sound System'],
    photos: []
  },
  
  // North Carolina venues
  {
    id: 'nc-estate-1',
    name: 'Charlotte Plantation Estate',
    slug: 'charlotte-plantation-estate',
    description: 'Historic plantation with southern charm. Perfect for weddings and elegant events.',
    city: 'Charlotte',
    state: 'NC',
    capacity: 160,
    amenities: ['WiFi', 'Parking', 'Outdoor Space', 'Kitchen', 'Natural Light', 'Tables & Chairs', 'Sound System'],
    photos: []
  },
  {
    id: 'nc-mountain-1',
    name: 'Asheville Mountain Retreat',
    slug: 'asheville-mountain-retreat',
    description: 'Mountain retreat with Blue Ridge views. Perfect for intimate weddings and corporate retreats.',
    city: 'Asheville',
    state: 'NC',
    capacity: 35,
    amenities: ['WiFi', 'Parking', 'Kitchen', 'Fireplace', 'Natural Light', 'Tables & Chairs'],
    photos: []
  },
  
  // Pennsylvania venues
  {
    id: 'pa-loft-1',
    name: 'Philadelphia Art District Loft',
    slug: 'philadelphia-art-district-loft',
    description: 'Modern loft in historic art district. Great for gallery openings and creative events.',
    city: 'Philadelphia',
    state: 'PA',
    capacity: 60,
    amenities: ['WiFi', 'Parking', 'AV Equipment', 'Kitchen', 'Natural Light', 'Tables & Chairs'],
    photos: []
  },
  {
    id: 'pa-garden-1',
    name: 'Pittsburgh Botanical Garden',
    slug: 'pittsburgh-botanical-garden',
    description: 'Lush botanical garden with themed areas. Perfect for weddings and outdoor celebrations.',
    city: 'Pittsburgh',
    state: 'PA',
    capacity: 90,
    amenities: ['WiFi', 'Parking', 'Outdoor Space', 'Kitchen', 'Natural Light', 'Tables & Chairs', 'Sound System'],
    photos: []
  },
  
  // Tennessee venues
  {
    id: 'tn-mansion-1',
    name: 'Nashville Music Hall',
    slug: 'nashville-music-hall',
    description: 'Music venue with stage and sound system. Perfect for concerts and music-themed events.',
    city: 'Nashville',
    state: 'TN',
    capacity: 250,
    amenities: ['WiFi', 'Parking', 'AV Equipment', 'Kitchen', 'Sound System', 'Stage', 'Dance Floor'],
    photos: []
  },
  {
    id: 'tn-rooftop-1',
    name: 'Music City Rooftop',
    slug: 'music-city-rooftop',
    description: 'Rooftop venue with downtown views. Great for cocktail parties and live music events.',
    city: 'Nashville',
    state: 'TN',
    capacity: 85,
    amenities: ['WiFi', 'Parking', 'Outdoor Space', 'Full Bar', 'Sound System', 'Heating'],
    photos: []
  },
  
  // Maryland venues
  {
    id: 'md-waterfront-1',
    name: 'Baltimore Harbor Venue',
    slug: 'baltimore-harbor-venue',
    description: 'Waterfront venue with harbor views. Perfect for weddings and corporate events.',
    city: 'Baltimore',
    state: 'MD',
    capacity: 130,
    amenities: ['WiFi', 'Parking', 'Outdoor Space', 'Kitchen', 'Natural Light', 'Tables & Chairs', 'Sound System'],
    photos: []
  },
  {
    id: 'md-estate-1',
    name: 'Chesapeake Bay Estate',
    slug: 'chesapeake-bay-estate',
    description: 'Elegant estate with bay views. Ideal for upscale weddings and formal events.',
    city: 'Annapolis',
    state: 'MD',
    capacity: 100,
    amenities: ['WiFi', 'Parking', 'Outdoor Space', 'Kitchen', 'Natural Light', 'Tables & Chairs', 'Sound System'],
    photos: []
  },
  
  // Minnesota venues
  {
    id: 'mn-loft-1',
    name: 'Minneapolis Warehouse',
    slug: 'minneapolis-warehouse',
    description: 'Spacious warehouse with industrial charm. Perfect for large events and exhibitions.',
    city: 'Minneapolis',
    state: 'MN',
    capacity: 280,
    amenities: ['WiFi', 'Parking', 'AV Equipment', 'Kitchen', 'Sound System', 'Loading Dock', 'Tables & Chairs'],
    photos: []
  },
  {
    id: 'mn-lakeside-1',
    name: 'Lake of the Isles Pavilion',
    slug: 'lake-of-the-isles-pavilion',
    description: 'Beautiful lakeside pavilion. Perfect for summer weddings and outdoor events.',
    city: 'Minneapolis',
    state: 'MN',
    capacity: 120,
    amenities: ['WiFi', 'Parking', 'Outdoor Space', 'Kitchen', 'Natural Light', 'Tables & Chairs', 'Sound System'],
    photos: []
  },
  
  // Ohio venues
  {
    id: 'oh-loft-1',
    name: 'Cincinnati Urban Space',
    slug: 'cincinnati-urban-space',
    description: 'Modern urban venue with city views. Great for corporate events and modern weddings.',
    city: 'Cincinnati',
    state: 'OH',
    capacity: 75,
    amenities: ['WiFi', 'Parking', 'AV Equipment', 'Kitchen', 'Natural Light', 'Tables & Chairs', 'Sound System'],
    photos: []
  },
  {
    id: 'oh-garden-1',
    name: 'Columbus Rose Garden',
    slug: 'columbus-rose-garden',
    description: 'Beautiful rose garden venue. Perfect for weddings and garden parties.',
    city: 'Columbus',
    state: 'OH',
    capacity: 80,
    amenities: ['WiFi', 'Parking', 'Outdoor Space', 'Kitchen', 'Natural Light', 'Tables & Chairs', 'Sound System'],
    photos: []
  },
  
  // Indiana venues
  {
    id: 'in-mansion-1',
    name: 'Indianapolis Historic Mansion',
    slug: 'indianapolis-historic-mansion',
    description: 'Victorian mansion with historic charm. Perfect for formal events and elegant weddings.',
    city: 'Indianapolis',
    state: 'IN',
    capacity: 90,
    amenities: ['WiFi', 'Parking', 'AV Equipment', 'Kitchen', 'Tables & Chairs', 'Sound System', 'Fireplace'],
    photos: []
  },
  {
    id: 'in-loft-1',
    name: 'Fountain Square Loft',
    slug: 'fountain-square-loft',
    description: 'Industrial loft in arts district. Great for creative events and modern gatherings.',
    city: 'Indianapolis',
    state: 'IN',
    capacity: 50,
    amenities: ['WiFi', 'Parking', 'AV Equipment', 'Kitchen', 'Natural Light', 'Tables & Chairs'],
    photos: []
  },
  
  // Missouri venues
  {
    id: 'mo-loft-1',
    name: 'St. Louis Art Space',
    slug: 'st-louis-art-space',
    description: 'Contemporary art gallery with modern amenities. Ideal for exhibitions and creative events.',
    city: 'St. Louis',
    state: 'MO',
    capacity: 65,
    amenities: ['WiFi', 'Parking', 'AV Equipment', 'Kitchen', 'Natural Light', 'Tables & Chairs'],
    photos: []
  },
  {
    id: 'mo-garden-1',
    name: 'Kansas City Botanical Garden',
    slug: 'kansas-city-botanical-garden',
    description: 'Beautiful botanical garden venue. Perfect for weddings and outdoor celebrations.',
    city: 'Kansas City',
    state: 'MO',
    capacity: 95,
    amenities: ['WiFi', 'Parking', 'Outdoor Space', 'Kitchen', 'Natural Light', 'Tables & Chairs', 'Sound System'],
    photos: []
  },
  
  // Nevada venues
  {
    id: 'nv-resort-1',
    name: 'Las Vegas Resort Terrace',
    slug: 'las-vegas-resort-terrace',
    description: 'Luxury resort terrace with strip views. Perfect for upscale events and celebrations.',
    city: 'Las Vegas',
    state: 'NV',
    capacity: 150,
    amenities: ['WiFi', 'Parking', 'Outdoor Space', 'Full Bar', 'Sound System', 'Heating', 'Catering Kitchen'],
    photos: []
  },
  {
    id: 'nv-loft-1',
    name: 'Downtown Vegas Loft',
    slug: 'downtown-vegas-loft',
    description: 'Modern loft with city views. Great for corporate events and modern gatherings.',
    city: 'Las Vegas',
    state: 'NV',
    capacity: 70,
    amenities: ['WiFi', 'Parking', 'AV Equipment', 'Kitchen', 'Natural Light', 'Tables & Chairs', 'Sound System'],
    photos: []
  },
  
  // Utah venues
  {
    id: 'ut-mountain-1',
    name: 'Park City Mountain Lodge',
    slug: 'park-city-mountain-lodge',
    description: 'Mountain lodge with ski resort views. Perfect for winter weddings and corporate retreats.',
    city: 'Park City',
    state: 'UT',
    capacity: 85,
    amenities: ['WiFi', 'Parking', 'Kitchen', 'Fireplace', 'Natural Light', 'Tables & Chairs', 'Sound System'],
    photos: []
  },
  {
    id: 'ut-garden-1',
    name: 'Salt Lake City Rose Garden',
    slug: 'salt-lake-city-rose-garden',
    description: 'Beautiful rose garden venue. Perfect for weddings and outdoor events.',
    city: 'Salt Lake City',
    state: 'UT',
    capacity: 75,
    amenities: ['WiFi', 'Parking', 'Outdoor Space', 'Kitchen', 'Natural Light', 'Tables & Chairs', 'Sound System'],
    photos: []
  }
];

// Helper functions for location data
export function getStates(): string[] {
  return Array.from(new Set(venueSeedData.map(venue => venue.state))).sort();
}

export function getCitiesByState(state: string): string[] {
  return Array.from(new Set(
    venueSeedData
      .filter(venue => venue.state === state)
      .map(venue => venue.city)
  )).sort();
}

export function getVenuesByLocation(state?: string, city?: string): Venue[] {
  return venueSeedData.filter(venue => {
    if (state && venue.state !== state) return false;
    if (city && venue.city !== city) return false;
    return true;
  });
}
