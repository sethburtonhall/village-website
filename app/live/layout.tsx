import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-mono-brand',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Village Live — Real-time Event Experiences',
  description:
    'Village Live turns any Village event into a real-time interactive experience. Go live, track check-ins, run polls, manage Q&A, and broadcast to every attendee screen — all from Mission Control.',
  alternates: {
    canonical: 'https://www.usevillage.app/live',
  },
  openGraph: {
    title: 'Village Live — Real-time Event Experiences',
    description:
      'Village handles the sign-up. Village Live runs the day. Real-time reactions, polls, Q&A, broadcasts, and more.',
    url: 'https://www.usevillage.app/live',
    siteName: 'Village',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Village Live — Real-time Event Experiences',
    description:
      'Village handles the sign-up. Village Live runs the day. Real-time reactions, polls, Q&A, broadcasts, and more.',
    creator: '@usevillage',
  },
};

export default function LiveLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${robotoMono.variable} bg-[#0a0a0a] text-white`}>
      {children}
    </div>
  );
}
