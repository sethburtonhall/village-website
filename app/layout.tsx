import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Noto_Sans, Nunito, Caveat } from 'next/font/google';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
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
    default: 'Village – The SignupGenius Alternative',
    template: '%s',
  },
  description:
    'Modern group sign-up tool for any community or organization. No ads, no accounts required. The SignupGenius alternative.',
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
  metadataBase: new URL('https://www.usevillage.app'),
  openGraph: {
    title: 'Village – The SignupGenius Alternative',
    description:
      'Modern group sign-up tool for any community or organization. No ads, no accounts required. The SignupGenius alternative.',
    url: 'https://www.usevillage.app',
    siteName: 'Village',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.usevillage.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Village - Modern group sign-up tool for any community or organization. No ads, no accounts required. The SignupGenius alternative.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Village – The SignupGenius Alternative',
    description:
      'Modern group sign-up tool for any community or organization. No ads, no accounts required. The SignupGenius alternative.',
    creator: '@usevillage',
    images: ['https://www.usevillage.app/og-image.png'],
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
    canonical: 'https://www.usevillage.app',
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
          <BreadcrumbSchema
            items={[
              { name: 'Home', url: 'https://usevillage.app' },
              { name: 'Venues', url: 'https://usevillage.app/venues' },
              { name: 'Live', url: 'https://usevillage.app/live' },
            ]}
          />
          <main>{children}</main>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
