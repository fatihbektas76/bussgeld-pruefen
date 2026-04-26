import Link from 'next/link';
import type { Metadata } from 'next';
import { findSpeedEntry } from '@/lib/bkat-data';

export const metadata: Metadata = {
  title: 'Geblitzt? Bu\u00dfgeld, Punkte & Fahrverbot nach km/h \u2014 bussgeld-pruefen.de',
  description:
    'Alle Bu\u00dfgelder f\u00fcr Geschwindigkeitsverst\u00f6\u00dfe innerorts und au\u00dferorts im \u00dcberblick. W\u00e4hlen Sie Ihren Versto\u00df und erfahren Sie sofort, was droht.',
  alternates: { canonical: 'https://bussgeld-pruefen.de/geblitzt' },
};

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

type RangeRow = {
  label: string;
  bussgeld: number;
  punkte: number;
  fahrverbot: string;
  href: string;
};

const innerortsRanges: RangeRow[] = [
  { label: '1\u201310\u00a0km/h', bussgeld: 30, punkte: 0, fahrverbot: 'Nein', href: '/geblitzt/innerorts/5-kmh' },
  { label: '11\u201315\u00a0km/h', bussgeld: 50, punkte: 0, fahrverbot: 'Nein', href: '/geblitzt/innerorts/13-kmh' },
  { label: '16\u201320\u00a0km/h', bussgeld: 70, punkte: 0, fahrverbot: 'Nein', href: '/geblitzt/innerorts/18-kmh' },
  { label: '21\u201325\u00a0km/h', bussgeld: 115, punkte: 1, fahrverbot: 'Nein', href: '/geblitzt/innerorts/23-kmh' },
  { label: '26\u201330\u00a0km/h', bussgeld: 180, punkte: 1, fahrverbot: '(1\u00a0Mo.)*', href: '/geblitzt/innerorts/28-kmh' },
  { label: '31\u201340\u00a0km/h', bussgeld: 260, punkte: 2, fahrverbot: '1\u00a0Monat', href: '/geblitzt/innerorts/35-kmh' },
  { label: '41\u201350\u00a0km/h', bussgeld: 400, punkte: 2, fahrverbot: '1\u00a0Monat', href: '/geblitzt/innerorts/45-kmh' },
  { label: '51\u201360\u00a0km/h', bussgeld: 560, punkte: 2, fahrverbot: '2\u00a0Monate', href: '/geblitzt/innerorts/55-kmh' },
  { label: '61\u201370\u00a0km/h', bussgeld: 700, punkte: 2, fahrverbot: '3\u00a0Monate', href: '/geblitzt/innerorts/65-kmh' },
];

const ausserortsRanges: RangeRow[] = [
  { label: '1\u201310\u00a0km/h', bussgeld: 20, punkte: 0, fahrverbot: 'Nein', href: '/geblitzt/ausserorts/5-kmh' },
  { label: '11\u201315\u00a0km/h', bussgeld: 40, punkte: 0, fahrverbot: 'Nein', href: '/geblitzt/ausserorts/13-kmh' },
  { label: '16\u201320\u00a0km/h', bussgeld: 60, punkte: 0, fahrverbot: 'Nein', href: '/geblitzt/ausserorts/18-kmh' },
  { label: '21\u201325\u00a0km/h', bussgeld: 100, punkte: 1, fahrverbot: 'Nein', href: '/geblitzt/ausserorts/23-kmh' },
  { label: '26\u201330\u00a0km/h', bussgeld: 150, punkte: 1, fahrverbot: '(1\u00a0Mo.)*', href: '/geblitzt/ausserorts/28-kmh' },
  { label: '31\u201340\u00a0km/h', bussgeld: 200, punkte: 1, fahrverbot: '(1\u00a0Mo.)*', href: '/geblitzt/ausserorts/35-kmh' },
  { label: '41\u201350\u00a0km/h', bussgeld: 320, punkte: 2, fahrverbot: '1\u00a0Monat', href: '/geblitzt/ausserorts/45-kmh' },
  { label: '51\u201360\u00a0km/h', bussgeld: 480, punkte: 2, fahrverbot: '1\u00a0Monat', href: '/geblitzt/ausserorts/55-kmh' },
  { label: '61\u201370\u00a0km/h', bussgeld: 600, punkte: 2, fahrverbot: '2\u00a0Monate', href: '/geblitzt/ausserorts/65-kmh' },
];

/* -------------------------------------------------------------------------- */
/*  Components                                                                */
/* -------------------------------------------------------------------------- */

function BussgeldTable({ title, subtitle, ranges }: { title: string; subtitle: string; ranges: RangeRow[] }) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-ink">{title}</h2>
      <p className="text-sm text-ink-muted mt-1 mb-4">{subtitle}</p>

      <div className="overflow-x-auto border border-line rounded-xl">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-surface-alt text-left">
              <th className="px-4 py-3 font-medium text-ink-muted">\u00dcberschreitung</th>
              <th className="px-4 py-3 font-medium text-ink-muted text-right">Bu\u00dfgeld</th>
              <th className="px-4 py-3 font-medium text-ink-muted text-center">Punkte</th>
              <th className="px-4 py-3 font-medium text-ink-muted text-center">Fahrverbot</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {ranges.map((r) => (
              <tr key={r.label} className="hover:bg-surface-alt/50 transition-colors">
                <td className="px-4 py-3 font-medium text-ink">{r.label}</td>
                <td className="px-4 py-3 text-right font-semibold text-ink">{r.bussgeld}&nbsp;&euro;</td>
                <td className="px-4 py-3 text-center text-ink">{r.punkte}</td>
                <td className="px-4 py-3 text-center text-ink">{r.fahrverbot}</td>
                <td className="px-4 py-3 text-right">
                  <Link
                    href={r.href}
                    className="text-xs font-medium text-primary-600 hover:text-primary-800 transition-colors"
                  >
                    Details &rarr;
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[11px] text-ink-subtle mt-2">* Fahrverbot bei Wiederholung innerhalb von 12&nbsp;Monaten</p>
    </div>
  );
}

function KmhGrid({ location, label }: { location: string; label: string }) {
  return (
    <div>
      <h3 className="text-base font-semibold text-ink mb-3">Alle {label}-Seiten (1&ndash;70&nbsp;km/h)</h3>
      <div className="flex flex-wrap gap-1.5">
        {Array.from({ length: 70 }, (_, i) => i + 1).map((kmh) => (
          <Link
            key={kmh}
            href={`/geblitzt/${location}/${kmh}-kmh`}
            className="inline-flex items-center justify-center w-11 h-9 rounded-lg border border-line text-xs font-medium text-ink hover:border-primary-400 hover:text-primary-600 hover:bg-primary-50 transition-colors"
          >
            {kmh}
          </Link>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function GeblitztPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-[clamp(1.5rem,1rem+2.5vw,2.25rem)] leading-[1.2] font-semibold text-ink">
            Geblitzt? So viel kostet Ihr Geschwindigkeitsversto&szlig;.
          </h1>
          <p className="mt-3 text-sm text-ink-muted max-w-xl mx-auto">
            Bu&szlig;geld, Punkte und Fahrverbot f&uuml;r jeden km/h-Wert &mdash; innerorts und au&szlig;erorts.
            W&auml;hlen Sie Ihren Versto&szlig; oder nutzen Sie die Tabelle unten.
          </p>
          <div className="mt-6">
            <Link
              href="/einspruch-pruefen"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-800 transition-colors"
            >
              Jetzt kostenlos Einspruch pr&uuml;fen &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Tables */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 space-y-12">
          <BussgeldTable
            title="Innerorts zu schnell gefahren"
            subtitle="H&ouml;chstgeschwindigkeit 50&nbsp;km/h &mdash; PKW &mdash; Bu&szlig;geldkatalog 2026"
            ranges={innerortsRanges}
          />

          <BussgeldTable
            title="Au&szlig;erorts zu schnell gefahren"
            subtitle="H&ouml;chstgeschwindigkeit 100&nbsp;km/h &mdash; PKW &mdash; Bu&szlig;geldkatalog 2026"
            ranges={ausserortsRanges}
          />
        </div>
      </section>

      {/* km/h Grids */}
      <section className="bg-surface-alt py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 space-y-10">
          <KmhGrid location="innerorts" label="Innerorts" />
          <KmhGrid location="ausserorts" label="Au&szlig;erorts" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-lg font-semibold text-ink">
            Bu&szlig;geldbescheid erhalten?
          </h2>
          <p className="mt-2 text-sm text-ink-muted">
            Pr&uuml;fen Sie in 60&nbsp;Sekunden, ob sich ein Einspruch lohnt &mdash; kostenlos und unverbindlich.
          </p>
          <div className="mt-5">
            <Link
              href="/einspruch-pruefen"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-800 transition-colors"
            >
              Jetzt pr&uuml;fen &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
