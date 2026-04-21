import type { Metadata } from 'next';
import { Lora } from 'next/font/google';
import { VenuesThemeProvider } from '@/components/venues/VenuesThemeProvider';

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-venues-lora',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Village Venues — Find Event Spaces & Venue Listings',
  description:
    'Find unique event spaces for your next event or list your venue on Village Venues. Connect with thousands of organizers searching for the perfect place to host. Churches, schools, sports teams, conferences, and community events.',
  alternates: {
    canonical: 'https://www.usevillage.app/venues',
  },
  openGraph: {
    title: 'Village Venues — Find Event Spaces & Venue Listings',
    description:
      'Find unique event spaces for your next event or list your venue on Village Venues. Connect with thousands of organizers searching for the perfect place.',
    url: 'https://www.usevillage.app/venues',
    siteName: 'Village Venues',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/venues/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Village Venues — Find & List Event Spaces',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Village Venues — Find Event Spaces & Venue Listings',
    description:
      'Find unique event spaces for your next event or list your venue on Village Venues. Connect with thousands of organizers.',
    images: ['/venues/opengraph-image'],
    creator: '@usevillage',
  },
};

export default function VenuesLayout({ children }: { children: React.ReactNode }) {
  return (
    <VenuesThemeProvider>
      <div className={lora.variable}>{children}</div>
    </VenuesThemeProvider>
  );
}
