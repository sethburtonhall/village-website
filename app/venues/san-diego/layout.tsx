import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Event Venues in San Diego, CA | Village Venues',
  description:
    'Find and book unique event venues in San Diego, California. Browse reception halls, banquet facilities, and event spaces perfect for weddings, conferences, and community events.',
  alternates: {
    canonical: 'https://usevillage.app/venues/san-diego',
  },
  openGraph: {
    title: 'Event Venues in San Diego, CA | Village Venues',
    description:
      'Find unique event venues in San Diego. Browse reception halls, banquet facilities, and spaces for any occasion.',
    url: 'https://usevillage.app/venues/san-diego',
    siteName: 'Village Venues',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event Venues in San Diego, CA | Village Venues',
    description: 'Find and book unique event venues in San Diego.',
  },
};

export default function SanDiegoVenuesLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
