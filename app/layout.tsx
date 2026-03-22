import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Noto_Sans, Nunito, Caveat } from 'next/font/google';
import { JsonLd } from '@/components/JsonLd';
import { Toaster } from '@/components/ui/toaster';

import './globals.css';

const noto = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: {
    default: 'Village — Clean, ad-free group sign-ups for churches, schools & sports teams',
    template: '%s | Village',
  },
  description:
    'Village is the modern sign-up tool for churches, schools, and sports teams. No ads, no accounts required for participants — just clean, simple sign-ups your community will actually use.',
  keywords: [
    'SignUpGenius alternative',
    'group sign up',
    'free sign up forms',
    'church sign up tool',
    'school sign up forms',
    'sports team sign up',
    'volunteer sign up',
    'ad-free sign up',
    'no account sign up',
    'community event sign up',
    'online sign up sheets',
    'group event management',
  ],
  authors: [{ name: 'Village' }],
  creator: 'Village',
  publisher: 'Village',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://usevillage.app'),
  openGraph: {
    title: 'Village — Clean, ad-free group sign-ups for churches, schools & sports teams',
    description:
      'Village is the modern sign-up tool for churches, schools, and sports teams. No ads, no accounts required for participants — just clean, simple sign-ups your community will actually use.',
    url: 'https://usevillage.app',
    siteName: 'Village',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image-white.jpg',
        width: 1200,
        height: 630,
        alt: 'Village — Clean, ad-free group sign-ups for churches, schools & sports teams',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Village — Clean, ad-free group sign-ups for churches, schools & sports teams',
    description:
      'Village is the modern sign-up tool for churches, schools, and sports teams. No ads, no accounts required for participants — just clean, simple sign-ups your community will actually use.',
    images: ['/og-image-white.jpg'],
    creator: '@usevillage',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://usevillage.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${noto.variable} ${nunito.variable} ${caveat.variable} antialiased`}>
          <JsonLd />
          <main>{children}</main>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
