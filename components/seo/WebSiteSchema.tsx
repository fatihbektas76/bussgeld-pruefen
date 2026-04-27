export default function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://bussgeld-pruefen.de/#website',
    name: 'bussgeld-pruefen.de',
    url: 'https://bussgeld-pruefen.de',
    publisher: { '@id': 'https://bussgeld-pruefen.de/#organization' },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate:
          'https://bussgeld-pruefen.de/bussgeldrechner?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'de-DE',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
