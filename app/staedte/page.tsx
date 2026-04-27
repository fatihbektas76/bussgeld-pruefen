import Link from 'next/link';
import type { Metadata } from 'next';
import { ogDefaults, defaultOgImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Bußgeldstellen nach Stadt — Behörden, Blitzer & Einspruch',
  description:
    'Bußgeldstellen in deutschen Städten: Zuständige Behörde, stationäre Blitzer-Standorte, Amtsgericht und Einspruch-Tipps. Berlin, Hamburg, München und mehr.',
  alternates: { canonical: '/staedte' },
  openGraph: {
    title: 'Bußgeldstellen nach Stadt — Behörden, Blitzer & Einspruch',
    description:
      'Bußgeldstellen in deutschen Städten: Zuständige Behörde, stationäre Blitzer-Standorte, Amtsgericht und Einspruch-Tipps.',
    url: '/staedte',
    type: 'website',
    ...ogDefaults,
    images: [defaultOgImage],
  },
};

const cities = [
  { name: 'Berlin', slug: 'berlin', state: 'Berlin', available: true },
  { name: 'Hamburg', slug: 'hamburg', state: 'Hamburg', available: false },
  { name: 'München', slug: 'muenchen', state: 'Bayern', available: false },
  { name: 'Köln', slug: 'koeln', state: 'NRW', available: false },
  { name: 'Frankfurt', slug: 'frankfurt', state: 'Hessen', available: false },
  { name: 'Stuttgart', slug: 'stuttgart', state: 'Baden-Württemberg', available: false },
  { name: 'Düsseldorf', slug: 'duesseldorf', state: 'NRW', available: false },
  { name: 'Leipzig', slug: 'leipzig', state: 'Sachsen', available: false },
  { name: 'Hannover', slug: 'hannover', state: 'Niedersachsen', available: false },
  { name: 'Nürnberg', slug: 'nuernberg', state: 'Bayern', available: false },
  { name: 'Dresden', slug: 'dresden', state: 'Sachsen', available: false },
  { name: 'Bremen', slug: 'bremen', state: 'Bremen', available: false },
] as const;

export default function StaedtePage() {
  return (
    <>
      <section className="bg-surface py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-ink">
            Bußgeldstellen nach Stadt
          </h1>
          <p className="mt-3 text-sm text-ink-muted max-w-2xl">
            Jede Stadt hat eine eigene Bußgeldstelle mit unterschiedlichen
            Bearbeitungszeiten und Zuständigkeiten. Wählen Sie Ihre Stadt, um
            die zuständige Behörde, Blitzer-Standorte und das Amtsgericht für
            Einsprüche zu finden.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cities.map((city) => {
              if (city.available) {
                return (
                  <Link
                    key={city.slug}
                    href={`/staedte/${city.slug}`}
                    className="group flex flex-col bg-surface border border-line rounded-xl p-5 hover:border-line-strong hover:shadow-sm transition-all"
                  >
                    <p className="text-sm font-medium text-ink group-hover:text-primary-600 transition-colors">
                      {city.name}
                    </p>
                    <p className="text-xs text-ink-muted mt-0.5">
                      {city.state}
                    </p>
                    <span className="mt-3 text-xs text-primary-600 font-medium">
                      Zur Stadtseite &rarr;
                    </span>
                  </Link>
                );
              }

              return (
                <div
                  key={city.slug}
                  className="flex flex-col bg-surface border border-line rounded-xl p-5 opacity-50"
                >
                  <p className="text-sm font-medium text-ink">{city.name}</p>
                  <p className="text-xs text-ink-muted mt-0.5">{city.state}</p>
                  <span className="mt-3 text-[11px] text-ink-subtle">
                    Demnächst verfügbar
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface border-t border-line py-12">
        <div className="mx-auto max-w-3xl px-4 md:px-6 text-center">
          <h2 className="text-lg font-semibold text-ink mb-3">
            Ihre Stadt ist noch nicht dabei?
          </h2>
          <p className="text-sm text-ink-muted mb-5">
            Wir erweitern laufend unser Städte-Angebot. Nutzen Sie in der
            Zwischenzeit unseren Einspruch-Check — er funktioniert
            bundesweit.
          </p>
          <Link
            href="/einspruch-pruefen"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-800 transition-colors"
          >
            Jetzt kostenlos prüfen &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
