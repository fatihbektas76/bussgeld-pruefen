import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/content/Breadcrumbs';
import PageHero from '@/components/content/PageHero';
import LeadCTACard from '@/components/content/LeadCTACard';
import FAQAccordion from '@/components/content/FAQAccordion';
import AuthorBox from '@/components/content/AuthorBox';
import DocSidebar from '@/components/content/DocSidebar';
import ArticleSchema from '@/components/seo/ArticleSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import { ogDefaults, defaultOgImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Bußgeldbescheid Berlin — Bußgeldstelle, Blitzer, Einspruch',
  description:
    'Bußgeldbescheid aus Berlin: Bußgeldstelle, stationäre Blitzer-Standorte, zuständiges Amtsgericht und Einspruch-Check. Stand 04/2026.',
  alternates: { canonical: '/staedte/berlin' },
  openGraph: {
    title: 'Bußgeldbescheid Berlin — Bußgeldstelle, Blitzer, Einspruch',
    description:
      'Bußgeldbescheid aus Berlin: Bußgeldstelle, stationäre Blitzer-Standorte, zuständiges Amtsgericht und Einspruch-Check. Stand 04/2026.',
    url: '/staedte/berlin',
    type: 'article',
    ...ogDefaults,
    publishedTime: '2025-02-10',
    modifiedTime: '2026-04-25',
    authors: ['Fatih Bektas'],
    images: [defaultOgImage],
  },
};

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

const breadcrumbs = [
  { label: 'Start', href: '/' },
  { label: 'Städte', href: '/staedte/' },
  { label: 'Berlin' },
];

const tocItems = [
  { label: 'Blitzer-Standorte', href: '#blitzer' },
  { label: 'Zuständige Stellen', href: '#stellen' },
  { label: 'Einspruch-Check', href: '#einspruch-check' },
  { label: 'Häufige Konstellationen', href: '#konstellationen' },
  { label: 'Berlin-Hinweise', href: '#hinweise' },
  { label: 'FAQ', href: '#faq' },
];

const blitzerStandorte = [
  {
    standort: 'A100 Spandauer Damm',
    limit: '80 km/h',
    geraet: 'TraffiStar S350',
  },
  {
    standort: 'Heerstraße / Westend',
    limit: '50 km/h',
    geraet: 'PoliScan Speed',
  },
  {
    standort: 'Tempelhofer Damm',
    limit: '50 km/h',
    geraet: 'ESO ES 8.0',
  },
  {
    standort: 'Kaiserdamm',
    limit: '50 km/h',
    geraet: 'TraffiStar S350',
  },
  {
    standort: 'Frankfurter Allee',
    limit: '50 km/h',
    geraet: 'TraffiStar S350',
  },
  {
    standort: 'Bundesallee Wilmersdorf',
    limit: '50 km/h',
    geraet: 'PoliScan Speed',
  },
];

const konstellationen = [
  { label: 'A100 Tempo 80 — 21–30 km/h', value: '160 €', tone: 'warning' as const },
  { label: 'Tempo-30-Hauptstraße nachts', value: '115 €', tone: 'warning' as const },
  { label: 'Busspur befahren (BVG-Linien)', value: '35 €', tone: 'default' as const },
  { label: 'Umweltzone S-Bahn-Ring', value: '100 €', tone: 'warning' as const },
  { label: 'Anwohnerparken Pankow/Neukölln', value: '25–55 €', tone: 'default' as const },
  { label: 'Rotlichtverstoß einfach', value: '90 €', tone: 'danger' as const },
];

const toneCardStyles = {
  default: 'bg-surface-alt border-line',
  warning: 'bg-warning-50 border-warning-600',
  danger: 'bg-danger-50 border-danger-600',
};

const toneValueStyles = {
  default: 'text-primary-600',
  warning: 'text-warning-800',
  danger: 'text-danger-800',
};

const hinweise = [
  {
    title: 'Tempo 30 nachts auf Hauptstraßen',
    text: 'Berlin setzt seit 2020 vermehrt Tempo 30 nachts auf Hauptstraßen ein (z. B. Leipziger Straße, Sonnenallee). Viele Autofahrer übersehen die zeitlich begrenzte Beschilderung.',
  },
  {
    title: 'Umweltzone S-Bahn-Ring',
    text: 'Innerhalb des S-Bahn-Rings gilt die Umweltzone. Fahren ohne grüne Plakette kostet 100 €. Auch Mietwagen und Besucherfahrzeuge sind betroffen.',
  },
  {
    title: 'Anwohnerparken seit 2024',
    text: 'Berlin hat 2024 die Parkraumbewirtschaftung erheblich ausgeweitet. In Pankow, Neukölln und Kreuzberg gelten neue Zonen. Verstöße: 25–55 €.',
  },
  {
    title: 'Berliner Bußgeldstelle: lange Bearbeitung',
    text: 'Die Berliner Bußgeldstelle ist bekannt für überdurchschnittlich lange Bearbeitungszeiten. Bußgeldbescheide kommen teils erst Wochen nach der OWi. Prüfen Sie stets, ob die Verjährung bereits eingetreten ist.',
  },
];

const faqItems = [
  {
    q: 'Wo zahle ich das Bußgeld in Berlin?',
    a: 'Die Zahlungsdaten finden Sie auf dem Bußgeldbescheid. In der Regel erfolgt die Zahlung per Überweisung an das Landesamt für Bürger- und Ordnungsangelegenheiten (LABO). Die Bankverbindung, das Kassenzeichen und die Zahlungsfrist stehen auf der Rückseite des Bescheids.',
  },
  {
    q: 'Wie lange dauert die Bearbeitung in Berlin?',
    a: 'Die Berliner Bußgeldstelle benötigt aktuell zwischen 6 und 14 Wochen für die Zustellung des Bußgeldbescheids nach dem Verstoß. In Einzelfällen kann es noch länger dauern, insbesondere bei Halterermittlungen.',
  },
  {
    q: 'Welches Gericht ist für den Einspruch zuständig?',
    a: 'Für Bußgeldsachen in Berlin ist das Amtsgericht Tiergarten (Turmstraße 91, 10559 Berlin) zuständig. Rechtsbeschwerden gehen an das Kammergericht Berlin.',
  },
  {
    q: 'Sind die Berliner Blitzer-Standorte öffentlich?',
    a: 'Stationäre Blitzer-Standorte werden von der Berliner Polizei nicht offiziell veröffentlicht. Die Standorte sind jedoch allgemein bekannt und werden von verschiedenen Diensten dokumentiert. Mobile Blitzer werden gelegentlich vorab angekündigt.',
  },
];

const weitereCities = [
  { name: 'Hamburg', slug: 'hamburg' },
  { name: 'München', slug: 'muenchen' },
  { name: 'Köln', slug: 'koeln' },
  { name: 'Frankfurt', slug: 'frankfurt' },
  { name: 'Stuttgart', slug: 'stuttgart' },
  { name: 'Düsseldorf', slug: 'duesseldorf' },
  { name: 'Leipzig', slug: 'leipzig' },
  { name: 'Hannover', slug: 'hannover' },
  { name: 'Nürnberg', slug: 'nuernberg' },
  { name: 'Dresden', slug: 'dresden' },
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function BerlinPage() {
  return (
    <>
      <ArticleSchema
        headline="Bußgeldbescheid Berlin — Bußgeldstelle, Blitzer, Einspruch"
        datePublished="2025-02-10"
        dateModified="2026-04-25"
        authorName="Fatih Bektas"
      />
      <FAQSchema items={faqItems} />

      <div className="mx-auto max-w-7xl px-4 md:px-6 py-8">
        <div className="flex gap-8">
          <article className="flex-1 min-w-0 max-w-prose">
            <Breadcrumbs items={breadcrumbs} />

            <PageHero
              category="Berlin · Stand 25.04.2026"
              title="Bußgeldbescheid in Berlin — alles zu Bußgeldstelle, Blitzern und Einspruch"
              updatedAt="25.04.2026"
              reviewedBy="Fatih Bektas"
            />

            <p className="text-sm leading-relaxed text-ink-muted mb-6">
              Geblitzt in Berlin? Hier finden Sie die zuständige Bußgeldstelle,
              bekannte Blitzer-Standorte, das Amtsgericht für Bußgeldsachen und
              eine kostenlose Einschätzung Ihres Falls.
            </p>

            {/* -------------------------------------------------------------- */}
            {/*  Berlin in Zahlen                                              */}
            {/* -------------------------------------------------------------- */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="bg-surface border border-line rounded-xl px-4 py-3.5 text-center">
                <p className="text-[22px] font-medium text-primary-600">
                  3,7 Mio.
                </p>
                <p className="text-[11px] text-ink-muted mt-0.5">Einwohner</p>
              </div>
              <div className="bg-surface border border-line rounded-xl px-4 py-3.5 text-center">
                <p className="text-[22px] font-medium text-primary-600">~28</p>
                <p className="text-[11px] text-ink-muted mt-0.5">
                  Stationäre Blitzer
                </p>
              </div>
              <div className="bg-surface border border-line rounded-xl px-4 py-3.5 text-center">
                <p className="text-[22px] font-medium text-primary-600">
                  ~1,8 Mio.
                </p>
                <p className="text-[11px] text-ink-muted mt-0.5">
                  Bußgeldfälle/Jahr
                </p>
              </div>
            </div>

            {/* -------------------------------------------------------------- */}
            {/*  Section: Blitzer-Standorte                                    */}
            {/* -------------------------------------------------------------- */}
            <section id="blitzer" className="mb-8">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-4">
                Bekannte Blitzer-Standorte in Berlin
              </h2>

              {/* Placeholder map */}
              <div className="flex items-center justify-center bg-surface-alt border border-line rounded-xl h-48 mb-4">
                <p className="text-sm text-ink-subtle">Karte — Phase 2</p>
              </div>

              {/* Location cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                {blitzerStandorte.map((b) => (
                  <div
                    key={b.standort}
                    className="bg-surface border border-line rounded-xl px-4 py-3.5"
                  >
                    <p className="text-sm font-medium text-ink">
                      {b.standort}
                    </p>
                    <p className="text-xs text-ink-muted mt-1">
                      Limit: {b.limit}
                    </p>
                    <p className="text-xs text-ink-subtle">{b.geraet}</p>
                  </div>
                ))}
              </div>

              <Link
                href="#"
                className="inline-flex items-center text-sm text-primary-600 hover:text-primary-800 transition-colors"
              >
                Alle 28 Berliner Blitzer-Standorte ansehen &rarr;
              </Link>
            </section>

            {/* -------------------------------------------------------------- */}
            {/*  Section: Zuständige Stellen                                   */}
            {/* -------------------------------------------------------------- */}
            <section id="stellen" className="mb-8">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-4">
                Zuständige Stellen in Berlin
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Bußgeldstelle */}
                <div className="bg-surface border border-line rounded-xl p-5">
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-primary-800 mb-2">
                    Bußgeldstelle
                  </p>
                  <p className="text-sm font-medium text-ink">
                    Polizeipräsident in Berlin &middot; LBeV
                  </p>
                  <div className="mt-2 space-y-1 text-xs text-ink-muted">
                    <p>Tempelhofer Damm 12, 12101 Berlin</p>
                    <p>Tel.: 030 / 90 27-0</p>
                    <p>Aktenzeichen: OWi 4xx / 5xx</p>
                    <p className="text-danger-800 font-medium">
                      Einspruchsfrist: 14 Tage
                    </p>
                  </div>
                </div>

                {/* Amtsgericht */}
                <div className="bg-surface border border-line rounded-xl p-5">
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-primary-800 mb-2">
                    Amtsgericht
                  </p>
                  <p className="text-sm font-medium text-ink">
                    Amtsgericht Tiergarten
                  </p>
                  <div className="mt-2 space-y-1 text-xs text-ink-muted">
                    <p>Turmstraße 91, 10559 Berlin</p>
                    <p>Tel.: 030 / 90 14-0</p>
                    <p>Rechtsbeschwerde: KG Berlin</p>
                  </div>
                </div>
              </div>
            </section>

            {/* -------------------------------------------------------------- */}
            {/*  Lead CTA                                                      */}
            {/* -------------------------------------------------------------- */}
            <div id="einspruch-check">
              <LeadCTACard
                variant="block"
                title="Kostenlose Einschätzung für Ihren Berliner Fall"
                subtitle="Bußgeldbescheid aus Berlin? Unsere Fachanwälte kennen die Berliner Bußgeldstelle, Blitzer und Messfehler-Quoten."
                ctaLabel="Jetzt kostenlos prüfen →"
                trustBullets={[
                  '100 % kostenlos',
                  'Berliner Bußgeldstelle bekannt',
                  'Erfahrung mit A100-Blitzern',
                  'DSGVO-konform',
                ]}
              />
            </div>

            {/* -------------------------------------------------------------- */}
            {/*  Section: Häufige Konstellationen                              */}
            {/* -------------------------------------------------------------- */}
            <section id="konstellationen" className="mb-8">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-4">
                Häufige Konstellationen in Berlin
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {konstellationen.map((k) => (
                  <div
                    key={k.label}
                    className={`border-l-4 rounded-r-lg px-4 py-3.5 ${toneCardStyles[k.tone]}`}
                  >
                    <p className="text-sm text-ink">{k.label}</p>
                    <p
                      className={`text-lg font-medium mt-0.5 ${toneValueStyles[k.tone]}`}
                    >
                      {k.value}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* -------------------------------------------------------------- */}
            {/*  Section: Berlin-Hinweise                                      */}
            {/* -------------------------------------------------------------- */}
            <section id="hinweise" className="mb-8">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-4">
                Berlin-spezifische Hinweise
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {hinweise.map((h) => (
                  <div
                    key={h.title}
                    className="bg-surface border border-line rounded-xl p-5"
                  >
                    <p className="text-sm font-medium text-ink mb-1.5">
                      {h.title}
                    </p>
                    <p className="text-xs leading-relaxed text-ink-muted">
                      {h.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* -------------------------------------------------------------- */}
            {/*  FAQ                                                           */}
            {/* -------------------------------------------------------------- */}
            <div id="faq">
              <FAQAccordion items={faqItems} defaultOpen={0} />
            </div>

            {/* -------------------------------------------------------------- */}
            {/*  Weitere Städte                                                */}
            {/* -------------------------------------------------------------- */}
            <section className="my-8">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-4">
                Weitere Städte
              </h2>
              <div className="flex flex-wrap gap-2">
                {weitereCities.map((c) => (
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
            </section>

            {/* -------------------------------------------------------------- */}
            {/*  Author Box                                                    */}
            {/* -------------------------------------------------------------- */}
            <AuthorBox
              name="Fatih Bektas"
              title="Rechtsanwalt"
              reviewedAt="25.04.2026"
            />
          </article>

          <DocSidebar toc={tocItems} />
        </div>
      </div>
    </>
  );
}
