import { z } from 'zod';

export const waitlistSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  website: z.string().max(0, 'Bot detected'), // Honeypot field - should be empty
});

export interface FAQItem {
  q: string;
  a: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Village',
    url: 'https://usevillage.app',
    logo: 'https://usevillage.app/logo.png',
    description:
      'Village is a group sign-up tool for churches, schools, and sports teams. Clean, ad-free, no accounts required.',
    sameAs: ['https://twitter.com/usevillage'],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-619-XXX-XXXX',
      contactType: 'Customer Service',
      email: 'support@usevillage.app',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Oceanside, CA',
      addressLocality: 'Oceanside',
      addressRegion: 'CA',
      postalCode: '92054',
      addressCountry: 'US',
    },
  };
}

export function generatePlaceSchema(venue: {
  name: string;
  address: string;
  city: string;
  state: string;
  phone?: string;
  website?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: venue.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: venue.address,
      addressLocality: venue.city,
      addressRegion: venue.state,
      addressCountry: 'US',
    },
    ...(venue.phone && { telephone: venue.phone }),
    ...(venue.website && { website: venue.website }),
    ...(venue.image && { image: venue.image }),
  };
}
