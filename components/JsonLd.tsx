export function JsonLd() {
  const softwareSchema = {
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
      'Village is a group event management tool built for communities, teams, nonprofits, schools, churches, and anyone who needs to organize people around shared activities. It lets you create events, build custom sign-up forms, share a public link, and manage attendees — all in one place.',
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

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Village',
    url: 'https://usevillage.app',
    logo: 'https://usevillage.app/logo.png',
    description:
      'Village is a clean, ad-free group sign-up tool for churches, schools, and sports teams.',
    sameAs: [
      'https://twitter.com/usevillage',
      'https://www.linkedin.com/in/sethburtonhall/',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-919-961-4503',
      contactType: 'Customer Service',
      email: 'support@usevillage.app',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '516 N Nevada St',
      addressLocality: 'Oceanside',
      addressRegion: 'CA',
      postalCode: '92054',
      addressCountry: 'US',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
