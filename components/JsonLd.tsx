'use client';

export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Village',
    applicationCategory: 'EventManagement, BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description:
      'Other group sign-up apps are overcomplicated, requiring a PhD in both bells and whistles. Village eliminates complexity and streamlines the process of organizing community events. A simpler alternative to SignUpGenius and Lome, perfect for schools, churches, nonprofits, and community events. No PhD required.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
    },
    featureList: [
      'Easy group sign-up forms',
      'Shareable event links',
      'Signup without an account',
      'Volunteer coordination',
      'Team organization',
      'Email notifications',
      'Mobile-friendly interface',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
