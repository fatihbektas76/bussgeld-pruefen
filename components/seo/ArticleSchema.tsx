type ArticleSchemaProps = {
  headline: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
};

export default function ArticleSchema({
  headline,
  datePublished,
  dateModified,
  authorName,
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: authorName,
      jobTitle: 'Rechtsanwalt',
    },
    publisher: {
      '@type': 'Organization',
      name: 'bussgeld-pruefen.de',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
