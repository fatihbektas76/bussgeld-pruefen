import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bu\u00DFgeld pr\u00FCfen \u2014 bussgeld-pruefen.de',
  description:
    'Bu\u00DFgeld berechnen, Punkte und Fahrverbot pr\u00FCfen, Einspruchschancen einsch\u00E4tzen \u2014 kostenlos, ohne Anmeldung.',
};

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

const overspeedOptions = [
  { label: 'bis 10', value: '10' },
  { label: '11\u201315', value: '15' },
  { label: '16\u201320', value: '20' },
  { label: '21\u201325', value: '25' },
  { label: '26\u201330', value: '30' },
  { label: '31\u201340', value: '40' },
  { label: '41\u201350', value: '50' },
  { label: '51\u201360', value: '60' },
  { label: '61\u201370', value: '70' },
  { label: '\u00FCber 70', value: '70plus' },
] as const;

const violations = [
  {
    title: 'Geschwindigkeit',
    icon: 'km',
    bg: 'bg-primary-50',
    fg: 'text-primary-800',
    counter: '125 Seiten',
    href: '/geblitzt/',
    subtitle: 'Innerorts, au\u00DFerorts, Autobahn \u2014 PKW, LKW, Motorrad.',
  },
  {
    title: 'Rotlicht',
    icon: '\u25CF',
    bg: 'bg-danger-50',
    fg: 'text-danger-800',
    counter: '8 Seiten',
    href: '/verstoesse/rotlicht/',
    subtitle: 'Einfach, qualifiziert (>1\u00A0Sek.), mit Gef\u00E4hrdung.',
  },
  {
    title: 'Abstand',
    icon: '\u2194',
    bg: 'bg-warning-50',
    fg: 'text-warning-800',
    counter: '12 Seiten',
    href: '/verstoesse/abstand/',
    subtitle: 'Br\u00FCcken-Anlage, Nachfahrt, alle km/h-Stufen.',
  },
  {
    title: 'Handy am Steuer',
    icon: 'H',
    bg: 'bg-[#F3E8FF]',
    fg: 'text-[#581C87]',
    counter: '4 Seiten',
    href: '/verstoesse/handy-am-steuer/',
    subtitle: 'PKW, LKW, Fahrrad \u2014 mit/ohne Gef\u00E4hrdung.',
  },
  {
    title: 'Alkohol & Drogen',
    icon: '\u2030',
    bg: 'bg-[#FDE8EF]',
    fg: 'text-[#831843]',
    counter: '7 Seiten',
    href: '/verstoesse/alkohol/',
    subtitle: '0,3 / 0,5 / 1,1 / 1,6\u00A0\u2030 \u2014 Probezeit, MPU.',
  },
  {
    title: 'Parkverst\u00F6\u00DFe',
    icon: 'P',
    bg: 'bg-success-50',
    fg: 'text-success-800',
    counter: '12 Seiten',
    href: '/verstoesse/parkverstoesse/',
    subtitle: 'Halteverbot, Gehweg, Feuerwehr, E-Lades\u00E4ule.',
  },
] as const;

const tools = [
  { title: 'Bu\u00DFgeldrechner', href: '/bussgeldrechner' },
  { title: 'Einspruch-Check', href: '/einspruch-pruefen' },
  { title: 'Punkterechner Flensburg', href: '#' },
  { title: 'Fahrverbot-H\u00E4rtefall', href: '#' },
  { title: 'Messverfahren-Identifier', href: '/messverfahren/poliscan-speed' },
  { title: 'Promille- & MPU-Check', href: '#' },
] as const;

const cities = [
  { name: 'Berlin', slug: 'berlin' },
  { name: 'Hamburg', slug: 'hamburg' },
  { name: 'M\u00FCnchen', slug: 'muenchen' },
  { name: 'K\u00F6ln', slug: 'koeln' },
  { name: 'Frankfurt', slug: 'frankfurt' },
  { name: 'Stuttgart', slug: 'stuttgart' },
  { name: 'D\u00FCsseldorf', slug: 'duesseldorf' },
  { name: 'Leipzig', slug: 'leipzig' },
  { name: 'Hannover', slug: 'hannover' },
  { name: 'N\u00FCrnberg', slug: 'nuernberg' },
  { name: 'Dresden', slug: 'dresden' },
  { name: 'Bremen', slug: 'bremen' },
] as const;

const stats = [
  { value: '115\u00A0\u20AC', label: '\u00D8 Bu\u00DFgeld gepr\u00FCft' },
  { value: '390+', label: 'Bu\u00DFgeld-Konstellationen' },
  { value: '10', label: 'Spezialrechner' },
  { value: '50', label: 'St\u00E4dte mit Bu\u00DFgeldstelle' },
] as const;

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function Home() {
  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/*  Hero                                                              */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-prose px-4 text-center">
          <span className="inline-block mb-5 px-3.5 py-1.5 rounded-full bg-primary-50 text-primary-800 text-[11px] font-medium tracking-wide">
            Bußgeldkatalog 2026 &middot; Aktualisiert 25.04.2026
          </span>

          <h1 className="text-[clamp(1.75rem,1rem+3vw,2.75rem)] leading-[1.2] font-semibold text-ink">
            Bußgeldbescheid bekommen? In 60&nbsp;Sekunden prüfen, was Sie tun können.
          </h1>

          <p className="mt-4 text-sm text-ink-muted max-w-lg mx-auto">
            Bußgeld berechnen, Punkte und Fahrverbot prüfen und
            Einspruchschancen einschätzen&nbsp;&mdash; kostenlos, ohne
            Anmeldung.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/einspruch-pruefen"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-800 transition-colors"
            >
              Jetzt kostenlos prüfen &rarr;
            </Link>
            <Link
              href="/bussgeldrechner"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-line-strong text-sm font-medium text-ink hover:bg-surface-alt transition-colors"
            >
              Bußgeld berechnen
            </Link>
          </div>

          <p className="mt-6 text-xs text-ink-subtle">
            &#10003; 100&nbsp;% kostenlos &middot; &#10003; Geprüft von Fachanwälten &middot; &#10003; DSGVO-konform
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Funnel Preview Card                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-surface-alt py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl bg-surface border border-line rounded-xl shadow-sm overflow-hidden">
            {/* Progress header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-line bg-surface-alt">
              <span className="text-xs font-medium text-ink-muted">
                Schritt 3 von 7
              </span>
              <div className="flex gap-1">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full ${
                      i < 3 ? 'w-6 bg-primary-600' : 'w-6 bg-line'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Question */}
            <div className="px-5 py-6 md:px-8 md:py-8">
              <p className="text-base font-medium text-ink mb-5">
                Wie viel km/h zu schnell waren Sie?
              </p>

              {/* Speed buttons */}
              <div className="flex flex-wrap gap-2">
                {overspeedOptions.map((opt) => {
                  const isActive = opt.value === '25';
                  return (
                    <Link
                      key={opt.value}
                      href={`/einspruch-pruefen?step=3&overspeed=${opt.value}`}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-primary-600 text-white'
                          : 'bg-surface-alt border border-line text-ink hover:border-primary-400 hover:text-primary-600'
                      }`}
                    >
                      {opt.label}
                    </Link>
                  );
                })}
              </div>

              {/* Info box */}
              <div className="mt-5 flex items-start gap-2.5 bg-primary-50 border border-primary-100 rounded-lg px-4 py-3">
                <span className="shrink-0 text-primary-600 mt-0.5 text-sm">i</span>
                <p className="text-xs text-ink-muted">
                  3&nbsp;km/h Toleranz wurden bereits abgezogen
                </p>
              </div>

              {/* Navigation (decorative) */}
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-ink-muted cursor-default">
                  &larr; Zurück
                </span>
                <span className="inline-flex items-center px-5 py-2 rounded-lg bg-primary-600 text-white text-sm font-medium cursor-default">
                  Weiter &rarr;
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Stat Strip                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-surface border-y border-line py-10">
        <div className="mx-auto max-w-7xl px-4 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-semibold text-ink">{s.value}</p>
              <p className="mt-1 text-xs text-ink-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Haeufige Verstoesse                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-xl font-semibold text-ink mb-8">
            Häufige Verstöße prüfen
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {violations.map((v) => (
              <Link
                key={v.href}
                href={v.href}
                className="group flex items-start gap-4 bg-surface border border-line rounded-xl p-5 hover:border-line-strong hover:shadow-sm transition-all"
              >
                <span
                  className={`shrink-0 flex items-center justify-center w-11 h-11 rounded-lg ${v.bg} ${v.fg} text-sm font-semibold`}
                >
                  {v.icon}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-ink group-hover:text-primary-600 transition-colors">
                    {v.title}
                  </p>
                  <p className="text-xs text-ink-muted mt-0.5">{v.subtitle}</p>
                  <span className="inline-block mt-2 text-[11px] text-ink-subtle">
                    {v.counter}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Werkzeuge                                                         */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-xl font-semibold text-ink mb-8">Werkzeuge</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((t) => (
              <Link
                key={t.title}
                href={t.href}
                className="group flex items-center gap-3 bg-surface-alt border border-line rounded-xl px-5 py-4 hover:border-line-strong hover:shadow-sm transition-all"
              >
                <span className="shrink-0 flex items-center justify-center w-9 h-9 rounded-lg bg-primary-50 text-primary-800">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="12" height="12" rx="2" />
                    <path d="M5 8h6M8 5v6" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-ink group-hover:text-primary-600 transition-colors">
                  {t.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Bussgeld in Ihrer Stadt                                           */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-xl font-semibold text-ink mb-8">
            Bußgeld in Ihrer Stadt
          </h2>

          <div className="flex flex-wrap gap-2">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={`/staedte/${c.slug}`}
                className="inline-flex items-center px-4 py-2 rounded-full bg-surface border border-line text-sm text-ink hover:border-primary-400 hover:text-primary-600 transition-colors"
              >
                {c.name}
              </Link>
            ))}
            <Link
              href="/staedte/"
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-sm font-medium text-primary-800 hover:bg-primary-100 transition-colors"
            >
              Alle 50 Städte &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Trust Section                                                     */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-surface border-t border-line py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-xl font-semibold text-ink mb-8">
            Rechtlich geprüft
          </h2>

          <div className="max-w-md mb-8">
            <div className="flex items-start gap-4 bg-surface-alt border border-line rounded-xl p-5">
              <div className="shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-primary-50 text-primary-800 text-sm font-semibold">
                FB
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-ink">
                  Fatih Bektas
                </p>
                <p className="text-xs text-ink-muted">
                  Rechtsanwalt
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-ink-muted">
            <span>&#10003; Inhalte rechtlich geprüft</span>
            <span>&#10003; TÜV-zertifizierter Datenschutz</span>
            <span>&#10003; DSGVO-konform</span>
          </div>
        </div>
      </section>
    </>
  );
}
