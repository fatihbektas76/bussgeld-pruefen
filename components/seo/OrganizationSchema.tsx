export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://bussgeld-pruefen.de/#organization',
    name: 'bussgeld-pruefen.de',
    url: 'https://bussgeld-pruefen.de',
    logo: {
      '@type': 'ImageObject',
      url: 'https://bussgeld-pruefen.de/og-default.png',
    },
    founder: {
      '@type': 'Person',
      name: 'Fatih Bektas',
      jobTitle: 'Rechtsanwalt',
    },
    description:
      'Bußgeldkatalog 2026: Bußgeld berechnen, Punkte und Fahrverbot prüfen, Einspruchschancen einschätzen — kostenlos.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
