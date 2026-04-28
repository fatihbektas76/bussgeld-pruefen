import type { Metadata } from 'next';
import Breadcrumbs from '@/components/content/Breadcrumbs';
import PageHero from '@/components/content/PageHero';
import DirectAnswerBox from '@/components/content/DirectAnswerBox';
import ResultGrid from '@/components/content/ResultGrid';
import LeadCTACard from '@/components/content/LeadCTACard';
import FAQAccordion from '@/components/content/FAQAccordion';
import AuthorBox from '@/components/content/AuthorBox';
import RelatedLinks from '@/components/content/RelatedLinks';
import DocSidebar from '@/components/content/DocSidebar';
import ArticleSchema from '@/components/seo/ArticleSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import { ogDefaults, defaultOgImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'TraffiStar S350 (Jenoptik) \u2014 Funktion, Messfehler & Einspruch',
  description:
    'TraffiStar S350 von Jenoptik: LIDAR-Messung, Toleranzen, fehlende Rohmessdaten und Angriffspunkte f\u00fcr den Einspruch. Gepr\u00fcft von Fachanw\u00e4lten.',
  alternates: { canonical: '/messverfahren/traffistar-s350' },
  openGraph: {
    title: 'TraffiStar S350 (Jenoptik) \u2014 Funktion, Messfehler & Einspruch',
    description:
      'TraffiStar S350: LIDAR-Messung, Toleranzen, Rohmessdaten-Problematik und Einspruchschancen.',
    url: '/messverfahren/traffistar-s350',
    type: 'article',
    ...ogDefaults,
    publishedTime: '2026-04-27',
    modifiedTime: '2026-04-27',
    authors: ['Fatih Bektas'],
    images: [defaultOgImage],
  },
};

const breadcrumbs = [
  { label: 'Start', href: '/' },
  { label: 'Messverfahren', href: '/messverfahren/' },
  { label: 'TraffiStar S350' },
];

const tocItems = [
  { label: 'Funktionsweise', href: '#funktion' },
  { label: 'Verbreitung', href: '#verbreitung' },
  { label: 'Toleranz', href: '#toleranz' },
  { label: 'Angriffspunkte', href: '#angriffspunkte' },
  { label: 'Rechtsprechung', href: '#rechtsprechung' },
  { label: 'FAQ', href: '#faq' },
];

const quickFacts = [
  { label: 'Hersteller', value: 'Jenoptik' },
  { label: 'Typ', value: 'Laser (LIDAR)' },
  { label: 'Toleranz', value: '3 km/h / 3 %' },
  { label: 'Eichung', value: 'PTB-Bauartzulassung' },
];

const faqItems = [
  {
    q: 'Warum ist der TraffiStar S350 besonders umstritten?',
    a: 'Der TraffiStar S350 speichert keine Rohmessdaten, die eine unabh\u00e4ngige \u00dcberpr\u00fcfung der Messung erm\u00f6glichen w\u00fcrden. Der VerfGH Saarland hat 2019 entschieden, dass dies das Recht auf faires Verfahren verletzen kann. Andere Oberlandesgerichte bewerten dies unterschiedlich.',
  },
  {
    q: 'Was sind Rohmessdaten und warum sind sie wichtig?',
    a: 'Rohmessdaten sind die unverarbeiteten Sensordaten des Messger\u00e4ts. Sie erm\u00f6glichen einem Sachverst\u00e4ndigen, die Messung unabh\u00e4ngig nachzurechnen. Ohne Rohmessdaten muss man sich auf das Endergebnis des Ger\u00e4ts verlassen, ohne es \u00fcberpr\u00fcfen zu k\u00f6nnen.',
  },
  {
    q: 'Wurde der TraffiStar S350 schon f\u00fcr verfassungswidrig erkl\u00e4rt?',
    a: 'Der VerfGH Saarland hat Messungen mit dem TraffiStar S350 als verfassungswidrig eingestuft, weil die fehlenden Rohmessdaten das Recht auf effektive Verteidigung einschr\u00e4nken. Diese Entscheidung bindet aber nur saarl\u00e4ndische Gerichte. Gerichte in anderen Bundesl\u00e4ndern k\u00f6nnen anders entscheiden.',
  },
  {
    q: 'Lohnt sich der Einspruch bei TraffiStar-S350-Messungen?',
    a: 'Die Rohmessdaten-Problematik bietet einen \u00fcberdurchschnittlich guten Ansatzpunkt. Ob sich der Einspruch im konkreten Fall lohnt, h\u00e4ngt vom zust\u00e4ndigen Gericht, der H\u00f6he des Bu\u00dfgelds und der Aktenlage ab. Bei Fahrverbot oder hohen Punkten ist eine Pr\u00fcfung fast immer sinnvoll.',
  },
];

const relatedLinks = [
  { label: 'PoliScan Speed', href: '/messverfahren/poliscan-speed' },
  { label: 'ESO ES 8.0', href: '/messverfahren/eso-es-8' },
  { label: 'RIEGL FG21-P', href: '/messverfahren/riegl' },
  { label: 'ProViDa', href: '/messverfahren/provida' },
  { label: 'Einspruch gegen Bu\u00dfgeldbescheid', href: '/verfahren/bussgeldbescheid/einspruch' },
];

export default function TraffiStarS350Page() {
  return (
    <>
      <ArticleSchema
        headline="TraffiStar S350 (Jenoptik) \u2014 Funktion, Messfehler und Einspruch"
        datePublished="2026-04-27"
        dateModified="2026-04-27"
        authorName="Fatih Bektas"
        url="https://bussgeld-pruefen.de/messverfahren/traffistar-s350"
        speakable={['#direktantwort']}
      />
      <FAQSchema items={faqItems} />

      <div className="mx-auto max-w-7xl px-4 md:px-6 py-8">
        <div className="flex gap-8">
          <article className="flex-1 min-w-0 max-w-prose">
            <Breadcrumbs items={breadcrumbs} />

            <PageHero
              category="Messverfahren-Analyse"
              title="TraffiStar S350 (Jenoptik) \u2014 Funktion, Messfehler und Einspruch"
            />

            <div id="direktantwort">
              <DirectAnswerBox>
                Der <strong>TraffiStar S350</strong> von Jenoptik ist ein
                LIDAR-basiertes Messger\u00e4t, das wegen{' '}
                <strong>fehlender Rohmessdaten</strong> besonders umstritten ist.
                Der VerfGH Saarland hat Messungen mit diesem Ger\u00e4t als
                verfassungswidrig eingestuft \u2014 andere Gerichte sehen das
                anders.
              </DirectAnswerBox>
            </div>

            <ResultGrid items={quickFacts} />

            {/* --- Funktionsweise --- */}
            <section id="funktion" className="mb-8">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Funktionsweise
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Der TraffiStar S350 arbeitet mit dem{' '}
                <strong>LIDAR-Prinzip</strong> (Light Detection and Ranging).
                Das station\u00e4re Ger\u00e4t sendet Laserimpulse aus und misst
                die Entfernung zu vorbeifahrenden Fahrzeugen. Aus der
                Entfernungs\u00e4nderung \u00fcber die Zeit berechnet das System
                die Geschwindigkeit.
              </p>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Das Ger\u00e4t \u00fcberwacht mehrere Fahrspuren gleichzeitig
                und kann sowohl den flie\u00dfenden Verkehr als auch
                Rotlichtverst\u00f6\u00dfe erfassen. Bei einem Versto\u00df wird
                automatisch ein digitales Beweisfoto ausgel\u00f6st.
              </p>
              <p className="text-sm leading-relaxed text-ink-muted">
                Entscheidend: Der TraffiStar S350 speichert{' '}
                <strong>keine Rohmessdaten</strong>, die eine unabh\u00e4ngige
                Nachpr\u00fcfung der einzelnen Messung erm\u00f6glichen w\u00fcrden.
                Dies ist der zentrale juristische Angriffspunkt.
              </p>
            </section>

            {/* --- Verbreitung --- */}
            <section id="verbreitung" className="mb-8">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Verbreitung in Deutschland
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Der TraffiStar S350 wird vor allem als station\u00e4rer Blitzer
                in S\u00e4ulenform eingesetzt. Typische Standorte:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-ink-muted">
                <li>
                  <strong>Innerst\u00e4dtische Hauptstra\u00dfen:</strong>{' '}
                  Ampelkreuzungen mit kombinierter Geschwindigkeits- und
                  Rotlicht\u00fcberwachung.
                </li>
                <li>
                  <strong>Gefahrenstellen:</strong> Vor Schulen,
                  Krankenh\u00e4usern und Unfallschwerpunkten.
                </li>
                <li>
                  <strong>Ortsdurchfahrten:</strong> Bundesstra\u00dfen mit
                  wechselnden Geschwindigkeitsbegrenzungen.
                </li>
              </ul>
            </section>

            {/* --- Toleranz --- */}
            <section id="toleranz" className="mb-8">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Messfehler-Toleranz
              </h2>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border border-line rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-surface-alt text-left">
                      <th className="px-4 py-2.5 font-medium text-ink">
                        Gemessene Geschwindigkeit
                      </th>
                      <th className="px-4 py-2.5 font-medium text-ink">
                        Toleranzabzug
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    <tr>
                      <td className="px-4 py-2.5 text-ink-muted">
                        bis 100 km/h
                      </td>
                      <td className="px-4 py-2.5 text-ink-muted">3 km/h</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 text-ink-muted">
                        \u00fcber 100 km/h
                      </td>
                      <td className="px-4 py-2.5 text-ink-muted">3 %</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* --- Angriffspunkte --- */}
            <section id="angriffspunkte" className="mb-8">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Angriffspunkte f\u00fcr den Einspruch
              </h2>
              <div className="space-y-3">
                <div className="rounded-xl border border-warning-600 bg-warning-50 p-4">
                  <p className="text-sm font-medium text-ink mb-1">
                    Fehlende Rohmessdaten
                  </p>
                  <p className="text-xs leading-relaxed text-ink-muted">
                    Der TraffiStar S350 speichert keine Rohmessdaten. Eine
                    unabh\u00e4ngige Nachpr\u00fcfung der Messung durch einen
                    Sachverst\u00e4ndigen ist daher nicht m\u00f6glich. Der
                    VerfGH Saarland hat dies als Verletzung des Rechts auf faires
                    Verfahren gewertet.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-sm font-medium text-ink mb-1">
                    Abgelaufene oder fehlerhafte Eichung
                  </p>
                  <p className="text-xs leading-relaxed text-ink-muted">
                    Die Eichung muss zum Tatzeitpunkt g\u00fcltig sein. Ein
                    abgelaufener Eichschein stellt die Verwertbarkeit der
                    Messung infrage.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-sm font-medium text-ink mb-1">
                    Nicht dokumentierte Software-Updates
                  </p>
                  <p className="text-xs leading-relaxed text-ink-muted">
                    Software-Updates nach der letzten Eichung k\u00f6nnen die
                    Messeigenschaften ver\u00e4ndern. Undokumentierte Updates
                    machen die Eichung ung\u00fcltig und sind ein relevanter
                    Angriffspunkt.
                  </p>
                </div>
              </div>
            </section>

            {/* --- Rechtsprechung --- */}
            <section id="rechtsprechung" className="mb-8">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Wichtige Rechtsprechung
              </h2>
              <div className="space-y-4">
                <div className="bg-surface border border-line rounded-xl p-5">
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-primary-800 mb-1.5">
                    Leitentscheidung
                  </p>
                  <p className="text-sm font-medium text-ink">
                    VerfGH Saarland, 05.07.2019 \u2014 Lv 7/17
                  </p>
                  <p className="text-xs leading-relaxed text-ink-muted mt-1.5">
                    Der Verfassungsgerichtshof des Saarlandes erkl\u00e4rte
                    Messungen mit dem TraffiStar S350 f\u00fcr
                    verfassungswidrig, weil die fehlenden Rohmessdaten das Recht
                    auf effektive Verteidigung einschr\u00e4nken. Betroffene
                    m\u00fcssen die M\u00f6glichkeit haben, eine Messung
                    sachverst\u00e4ndig \u00fcberpr\u00fcfen zu lassen.
                  </p>
                </div>
                <div className="bg-surface border border-line rounded-xl p-5">
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-ink-muted mb-1.5">
                    Praxishinweis
                  </p>
                  <p className="text-sm font-medium text-ink">
                    Regionale Unterschiede beachten
                  </p>
                  <p className="text-xs leading-relaxed text-ink-muted mt-1.5">
                    Das Saarland-Urteil bindet nur saarl\u00e4ndische Gerichte.
                    Andere OLG-Bezirke (z.{'\u00a0'}B. OLG Bamberg, OLG
                    Karlsruhe) bewerten die Rohmessdaten-Frage weniger streng.
                    Entscheidend ist der Gerichtsstandort Ihres Verfahrens.
                  </p>
                </div>
              </div>
            </section>

            <LeadCTACard
              variant="inline"
              title="TraffiStar S350 \u2014 Messung pr\u00fcfen lassen"
              subtitle="Fehlende Rohmessdaten als Angriffspunkt \u2014 kostenlose Ersteinsch\u00e4tzung."
            />

            <div id="faq">
              <FAQAccordion items={faqItems} defaultOpen={0} />
            </div>

            <AuthorBox
              name="Fatih Bektas"
              title="Rechtsanwalt"
              reviewedAt="27.04.2026"
            />

            <RelatedLinks items={relatedLinks} />
          </article>

          <DocSidebar toc={tocItems} />
        </div>
      </div>
    </>
  );
}
