type ArticleSchemaProps = {
  headline: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  description?: string;
  url?: string;
  speakable?: string[];
};

export default function ArticleSchema({
  headline,
  datePublished,
  dateModified,
  authorName,
  description,
  url,
  speakable,
}: ArticleSchemaProps) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: authorName,
      jobTitle: 'Rechtsanwalt',
      url: 'https://bussgeld-pruefen.de/impressum',
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Zulassung als Rechtsanwalt',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Rechtsanwaltskammer',
        },
      },
    },
    publisher: {
      '@id': 'https://bussgeld-pruefen.de/#organization',
    },
    isPartOf: {
      '@id': 'https://bussgeld-pruefen.de/#website',
    },
  };

  if (description) schema.description = description;

  if (url) {
    schema.mainEntityOfPage = { '@type': 'WebPage', '@id': url };
  }

  if (speakable && speakable.length > 0) {
    schema.speakable = {
      '@type': 'SpeakableSpecification',
      cssSelector: speakable,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
