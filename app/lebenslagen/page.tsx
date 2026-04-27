import Link from 'next/link';
import type { Metadata } from 'next';
import { ogDefaults, defaultOgImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Lebenslagen im Verkehrsrecht — Probezeit, MPU & Fahrerlaubnis',
  description:
    'Verkehrsrechtliche Lebenslagen: Probezeit für Fahranfänger, MPU, Fahrerlaubnisentzug und mehr. Alle Infos zum Bußgeldkatalog 2026.',
  alternates: { canonical: '/lebenslagen' },
  openGraph: {
    title: 'Lebenslagen im Verkehrsrecht — Probezeit, MPU & Fahrerlaubnis',
    description:
      'Verkehrsrechtliche Lebenslagen: Probezeit für Fahranfänger, MPU, Fahrerlaubnisentzug und mehr.',
    url: '/lebenslagen',
    type: 'website',
    ...ogDefaults,
    images: [defaultOgImage],
  },
};

const topics = [
  {
    title: 'Probezeit für Fahranfänger',
    description:
      'A-Verstöße, B-Verstöße, das Drei-Stufen-Modell, Aufbauseminar, Verlängerung und Fahrerlaubnisentzug — alle Regeln für Fahranfänger.',
    href: '/lebenslagen/probezeit',
    available: true,
  },
  {
    title: 'MPU (Medizinisch-Psychologische Untersuchung)',
    description:
      'Wann eine MPU angeordnet wird, Ablauf, Kosten und Vorbereitung — der vollständige Ratgeber.',
    href: '/lebenslagen/mpu',
    available: false,
  },
  {
    title: 'Fahrerlaubnisentzug',
    description:
      'Unterschied zwischen Fahrverbot und Entzug, Sperrfrist, Neuerteilung und Wiedererlangung der Fahrerlaubnis.',
    href: '/lebenslagen/fahrerlaubnisentzug',
    available: false,
  },
] as const;

export default function LebenslagenPage() {
  return (
    <>
      <section className="bg-surface py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-ink">
            Lebenslagen im Verkehrsrecht
          </h1>
          <p className="mt-3 text-sm text-ink-muted max-w-2xl">
            Ob Fahranfänger in der Probezeit, MPU-Kandidat oder vor dem
            Fahrerlaubnisentzug — hier finden Sie die passenden Informationen
            zu Ihrer Situation.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 md:px-6 space-y-4">
          {topics.map((topic) => {
            if (topic.available) {
              return (
                <Link
                  key={topic.title}
                  href={topic.href}
                  className="group block bg-surface border border-line rounded-xl p-5 hover:border-line-strong hover:shadow-sm transition-all"
                >
                  <p className="text-sm font-medium text-ink group-hover:text-primary-600 transition-colors">
                    {topic.title}
                  </p>
                  <p className="text-xs text-ink-muted mt-1">
                    {topic.description}
                  </p>
                  <span className="inline-block mt-3 text-xs text-primary-600 font-medium">
                    Zum Ratgeber &rarr;
                  </span>
                </Link>
              );
            }

            return (
              <div
                key={topic.title}
                className="block bg-surface border border-line rounded-xl p-5 opacity-50"
              >
                <p className="text-sm font-medium text-ink">{topic.title}</p>
                <p className="text-xs text-ink-muted mt-1">
                  {topic.description}
                </p>
                <span className="inline-block mt-3 text-[11px] text-ink-subtle">
                  Demnächst verfügbar
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-surface border-t border-line py-12">
        <div className="mx-auto max-w-3xl px-4 md:px-6 text-center">
          <h2 className="text-lg font-semibold text-ink mb-3">
            Bußgeldbescheid erhalten?
          </h2>
          <p className="text-sm text-ink-muted mb-5">
            Prüfen Sie kostenlos, ob sich ein Einspruch lohnt — in
            60&nbsp;Sekunden, ohne Anmeldung.
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
