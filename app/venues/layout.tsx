import type { Metadata } from 'next';
import { DM_Serif_Display } from 'next/font/google';

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-venues-brand',
  weight: ['400'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Village Venues — Find & List Event Spaces',
  description:
    'Browse unique event spaces or list your venue on Village Venues. Connect with thousands of organizers searching for the perfect place.',
  alternates: {
    canonical: 'https://www.usevillage.app/venues',
  },
  openGraph: {
    title: 'Village Venues — Find & List Event Spaces',
    description:
      'Browse unique event spaces or list your venue to connect with thousands of event organizers.',
    url: 'https://www.usevillage.app/venues',
    siteName: 'Village',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Village Venues — Find & List Event Spaces',
    description:
      'Browse unique event spaces or list your venue to connect with thousands of event organizers.',
    creator: '@usevillage',
  },
};

export default function VenuesLayout({ children }: { children: React.ReactNode }) {
  return <div className={dmSerifDisplay.variable}>{children}</div>;
}
