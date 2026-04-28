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
  title: 'RIEGL FG21-P \u2014 Laser-Handmessung: Fehlerquellen & Einspruch',
  description:
    'RIEGL FG21-P: Laser-Handmessger\u00e4t, Bedienungsfehler, fehlende Schulungsnachweise und juristische Angriffspunkte f\u00fcr den Einspruch. Gepr\u00fcft von Fachanw\u00e4lten.',
  alternates: { canonical: '/messverfahren/riegl' },
  openGraph: {
    title: 'RIEGL FG21-P \u2014 Laser-Handmessung: Fehlerquellen & Einspruch',
    description:
      'RIEGL FG21-P: Handmessung, Bedienungsfehler, Schulungsnachweise und Einspruchschancen.',
    url: '/messverfahren/riegl',
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
  { label: 'RIEGL FG21-P' },
];

const tocItems = [
  { label: 'Funktionsweise', href: '#funktion' },
  { label: 'Einsatz', href: '#einsatz' },
  { label: 'Toleranz', href: '#toleranz' },
  { label: 'Angriffspunkte', href: '#angriffspunkte' },
  { label: 'FAQ', href: '#faq' },
];

const quickFacts = [
  { label: 'Hersteller', value: 'Riegl' },
  { label: 'Typ', value: 'Laser (Handmessung)' },
  { label: 'Toleranz', value: '3 km/h / 3 %' },
  { label: 'Bedienung', value: 'Manuell (Pistole)' },
];

const faqItems = [
  {
    q: 'Wie genau ist die Handmessung mit dem RIEGL FG21-P?',
    a: 'Die Genauigkeit h\u00e4ngt stark von der Bedienung ab. Bei korrekter Handhabung (ruhige Haltung, exaktes Anvisieren, richtiger Abstand) gilt die Messung als zuverl\u00e4ssig. Bedienungsfehler k\u00f6nnen jedoch zu erheblichen Abweichungen f\u00fchren, die den Toleranzabzug \u00fcbersteigen.',
  },
  {
    q: 'Muss der Beamte eine Schulung nachweisen?',
    a: 'Ja. Die Bedienung des RIEGL FG21-P erfordert eine spezielle Schulung. Der Messperson muss ein g\u00fcltiger Schulungsnachweis vorliegen. Fehlt dieser oder ist er abgelaufen, kann die Messung angefochten werden.',
  },
  {
    q: 'Was passiert, wenn das falsche Fahrzeug anvisiert wurde?',
    a: 'Bei der Handmessung muss der Beamte das Zielfahrzeug exakt mit dem Laserstrahl anvisieren. Bei mehrspurigem Verkehr oder dicht aufeinander folgenden Fahrzeugen kann versehentlich das falsche Fahrzeug gemessen werden. Dies ist ein h\u00e4ufiger Einspruchsgrund.',
  },
  {
    q: 'Gibt es ein Beweisfoto bei der RIEGL-Messung?',
    a: 'Das RIEGL FG21-P selbst macht kein automatisches Beweisfoto. In der Regel wird die Messung durch eine separate Videoaufzeichnung oder ein Protokoll dokumentiert. Fehlt diese Dokumentation, schw\u00e4cht das die Beweislage erheblich.',
  },
];

const relatedLinks = [
  { label: 'PoliScan Speed', href: '/messverfahren/poliscan-speed' },
  { label: 'ESO ES 8.0', href: '/messverfahren/eso-es-8' },
  { label: 'TraffiStar S350', href: '/messverfahren/traffistar-s350' },
  { label: 'ProViDa', href: '/messverfahren/provida' },
  { label: 'Einspruch gegen Bu\u00dfgeldbescheid', href: '/verfahren/bussgeldbescheid/einspruch' },
];

export default function RieglPage() {
  return (
    <>
      <ArticleSchema
        headline="RIEGL FG21-P \u2014 Laser-Handmessung: Fehlerquellen und Einspruch"
        datePublished="2026-04-27"
        dateModified="2026-04-27"
        authorName="Fatih Bektas"
        url="https://bussgeld-pruefen.de/messverfahren/riegl"
        speakable={['#direktantwort']}
      />
      <FAQSchema items={faqItems} />

      <div className="mx-auto max-w-7xl px-4 md:px-6 py-8">
        <div className="flex gap-8">
          <article className="flex-1 min-w-0 max-w-prose">
            <Breadcrumbs items={breadcrumbs} />

            <PageHero
              category="Messverfahren-Analyse"
              title="RIEGL FG21-P \u2014 Laser-Handmessung: Fehlerquellen und Einspruch"
            />

            <div id="direktantwort">
              <DirectAnswerBox>
                Der <strong>RIEGL FG21-P</strong> ist ein
                Laser-Handmessger\u00e4t, das von Polizeibeamten wie eine
                Pistole auf das Zielfahrzeug gerichtet wird. Gr\u00f6\u00dfter
                Angriffspunkt:{' '}
                <strong>Bedienungsfehler bei der Handmessung</strong> \u2014
                unruhige Haltung, falsches Anvisieren oder fehlende
                Schulungsnachweise.
              </DirectAnswerBox>
            </div>

            <ResultGrid items={quickFacts} />

            {/* --- Funktionsweise --- */}
            <section id="funktion" className="mb-8">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Funktionsweise
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Der RIEGL FG21-P ist ein{' '}
                <strong>mobiles Laser-Handmessger\u00e4t</strong>. Der Beamte
                richtet das Ger\u00e4t manuell auf das Zielfahrzeug und dr\u00fcckt
                den Ausl\u00f6ser. Der Laser misst die Entfernung zum Fahrzeug
                in schneller Folge und berechnet die Geschwindigkeit aus der
                Entfernungs\u00e4nderung.
              </p>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Die Messung dauert nur Bruchteile einer Sekunde. Das Ergebnis
                wird auf dem Display des Ger\u00e4ts angezeigt. Anders als bei
                station\u00e4ren Ger\u00e4ten wird{' '}
                <strong>kein automatisches Beweisfoto</strong> erstellt \u2014
                die Dokumentation erfolgt durch den Beamten (Videoaufzeichnung,
                Protokoll oder Anhalten des Fahrzeugs).
              </p>
              <p className="text-sm leading-relaxed text-ink-muted">
                Die Qualit\u00e4t der Messung h\u00e4ngt direkt von der
                Bedienung ab: ruhige Haltung, korrektes Anvisieren des
                Zielfahrzeugs und Einhaltung des vorgeschriebenen Messabstands
                sind entscheidend.
              </p>
            </section>

            {/* --- Einsatz --- */}
            <section id="einsatz" className="mb-8">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Typischer Einsatz
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Der RIEGL FG21-P wird ausschlie\u00dflich mobil eingesetzt:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-ink-muted">
                <li>
                  <strong>Polizeikontrollen:</strong> Am Stra\u00dfenrand, auf
                  Br\u00fccken oder aus dem Streifenwagen heraus.
                </li>
                <li>
                  <strong>Tempo-30-Zonen:</strong> Vor Schulen und in
                  Wohngebieten, wo station\u00e4re Ger\u00e4te nicht
                  wirtschaftlich sind.
                </li>
                <li>
                  <strong>Baustellen:</strong> Tempor\u00e4re Messstellen mit
                  flexiblem Einsatz.
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
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Handmessger\u00e4te bieten aufgrund der manuellen Bedienung
                besonders viele Ansatzpunkte:
              </p>
              <div className="space-y-3">
                <div className="rounded-xl border border-warning-600 bg-warning-50 p-4">
                  <p className="text-sm font-medium text-ink mb-1">
                    Bedienungsfehler bei der Handmessung
                  </p>
                  <p className="text-xs leading-relaxed text-ink-muted">
                    Unruhige Handhaltung, Verwackeln oder Abrutschen des
                    Laserstrahls vom Zielfahrzeug verf\u00e4lscht die Messung.
                    Besonders bei gro\u00dfen Entfernungen wirken sich selbst
                    minimale Bewegungen aus.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-sm font-medium text-ink mb-1">
                    Fehlender Schulungsnachweis
                  </p>
                  <p className="text-xs leading-relaxed text-ink-muted">
                    Das Messpersonal muss eine ger\u00e4tespezifische Schulung
                    nachweisen k\u00f6nnen. Fehlt der Schulungsnachweis oder ist
                    er abgelaufen, kann die Messung angefochten werden.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-sm font-medium text-ink mb-1">
                    Falsches Fahrzeug anvisiert
                  </p>
                  <p className="text-xs leading-relaxed text-ink-muted">
                    Bei Mehrspurverkehr kann der Laserstrahl das falsche
                    Fahrzeug erfassen. Ohne Videoaufzeichnung ist die eindeutige
                    Zuordnung oft nicht beweisbar.
                  </p>
                </div>
              </div>
            </section>

            <LeadCTACard
              variant="inline"
              title="RIEGL-Handmessung erhalten?"
              subtitle="Bedienungsfehler sind h\u00e4ufig \u2014 kostenlose Ersteinsch\u00e4tzung."
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
