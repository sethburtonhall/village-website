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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
