export default function LegalServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://bussgeld-pruefen.de/#legalservice',
    name: 'bussgeld-pruefen.de',
    url: 'https://bussgeld-pruefen.de',
    description:
      'Kostenlose Bußgeld-Prüfung und Einspruch-Check für Bußgeldempfänger in Deutschland.',
    serviceType: 'Bußgeld-Prüfung und Einspruch-Check',
    areaServed: {
      '@type': 'Country',
      name: 'Deutschland',
    },
    provider: { '@id': 'https://bussgeld-pruefen.de/#organization' },
    knowsAbout: [
      'Bußgeldrecht',
      'Geschwindigkeitsverstöße',
      'Rotlichtverstöße',
      'Einspruch gegen Bußgeldbescheid',
      'Messverfahren',
      'Probezeit',
    ],
    availableLanguage: 'de',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
