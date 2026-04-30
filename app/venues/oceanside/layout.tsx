import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Event Venues in Oceanside, CA | Village Venues',
  description:
    'Find and book unique event venues in Oceanside, California. Browse beachfront event spaces, reception halls, and venues perfect for weddings, conferences, and community events.',
  alternates: {
    canonical: 'https://usevillage.app/venues/oceanside',
  },
  openGraph: {
    title: 'Event Venues in Oceanside, CA | Village Venues',
    description:
      'Find unique event venues in Oceanside. Browse beachfront spaces, reception halls, and venues for any occasion.',
    url: 'https://usevillage.app/venues/oceanside',
    siteName: 'Village Venues',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event Venues in Oceanside, CA | Village Venues',
    description: 'Find and book unique event venues in Oceanside.',
  },
};

export default function OceansideVenuesLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
