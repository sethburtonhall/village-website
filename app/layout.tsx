import type { Metadata } from 'next';
import Script from 'next/script';
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
    default: 'Village - Group Sign-ups Made Simple and 🎉 Fun!',
    template: '%s | Village',
  },
  description:
    'Other group sign-up apps are overcomplicated, requiring a PhD in both bells and whistles. Village eliminates complexity and streamlines the process of organizing community events. A simpler alternative to SignUpGenius and Lome, perfect for schools, churches, nonprofits, and community events. No PhD required.',
  keywords: [
    'group sign up',
    'signup forms',
    'event management',
    'SignUpGenius alternative',
    'Lome alternative',
    'volunteer management',
    'group coordination',
    'school sign up forms',
    'church event management',
    'community event planning',
    'team sign up sheets',
    'online sign up forms',
    'free sign up forms',
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
    title: 'Village - Group Sign-ups Made Simple and 🎉 Fun!',
    description:
      'Other group sign-up apps are overcomplicated, requiring a PhD in both bells and whistles. Village eliminates complexity and streamlines the process of organizing community events. A simpler alternative to SignUpGenius and Lome, perfect for schools, churches, nonprofits, and community events. No PhD required.',
    url: 'https://usevillage.app',
    siteName: 'Village',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image-white.jpg',
        width: 1200,
        height: 630,
        alt: 'Village - Group Sign-ups Made Simple and 🎉 Fun!',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Village - Group Sign-ups Made Simple and 🎉 Fun!',
    description:
      'Other group sign-up apps are overcomplicated, requiring a PhD in both bells and whistles. Village eliminates complexity and streamlines the process of organizing community events. A simpler alternative to SignUpGenius and Lome, perfect for schools, churches, nonprofits, and community events. No PhD required.',
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

const outsetaOptionsAsJSString = JSON.stringify({
  domain: 'village.outseta.com',
  /* Do not load nocode module, handled by session */
  load: 'auth',
  /* Vital setting for a single page application */
  monitorDom: true,
  auth: {
    mode: 'popup',
    // selector: '.o-auth-popup',
    // // Overrides the Post Login URL
    // authenticationCallbackUrl: 'http://localhost:3000/events',
    // // Overrides the Sign Up Confirmation URL
    // // registrationConfirmationUrl: '[custom url]',
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${noto.variable} ${nunito.variable} ${caveat.variable} antialiased`}>
        <JsonLd />
        <main>{children}</main>
        <Toaster />

        <Script id="outseta-options" strategy="beforeInteractive">
          {`var o_options = ${outsetaOptionsAsJSString};`}
        </Script>

        <Script
          id="outseta-script"
          src="https://cdn.outseta.com/outseta.min.js"
          strategy="beforeInteractive"
          data-options="o_options"
        />
      </body>
    </html>
  );
}
