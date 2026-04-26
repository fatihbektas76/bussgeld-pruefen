import type { MetadataRoute } from 'next';

const BASE = 'https://bussgeld-pruefen.de';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  return [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/bussgeldrechner`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/einspruch-pruefen`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/geblitzt/innerorts/21-25-kmh`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/verstoesse/rotlicht/einfach`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/lebenslagen/probezeit`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/verfahren/bussgeldbescheid/einspruch`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/staedte/berlin`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/messverfahren/poliscan-speed`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/impressum`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/datenschutz`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/disclaimer`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
