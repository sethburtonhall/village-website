import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-mono-brand',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Village Live — Real-Time Event Engagement Polls, Q&A & Check-Ins',
  description:
    'Village Live turns events into real-time interactive experiences. Run live polls, Q&A sessions, track check-ins, and broadcast to attendees from Mission Control. Perfect for communities and organizations.',
  alternates: {
    canonical: 'https://usevillage.app/live',
  },
  openGraph: {
    title: 'Village Live — Real-Time Event Engagement Polls, Q&A & Check-Ins',
    description:
      'Village Live turns events into real-time interactive experiences. Run live polls, Q&A sessions, track check-ins, and broadcast to attendees from Mission Control.',
    url: 'https://usevillage.app/live',
    siteName: 'Village Live',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/live/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Village Live - Real-time Event Experiences',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Village Live — Real-Time Event Engagement Polls, Q&A & Check-Ins',
    description:
      'Village Live turns events into real-time interactive experiences. Run live polls, Q&A sessions, track check-ins, and broadcast to attendees.',
    images: ['/live/opengraph-image'],
    creator: '@usevillage',
  },
};

export default function LiveLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${robotoMono.variable} bg-[#0a0a0a] text-white`}>{children}</div>;
}
