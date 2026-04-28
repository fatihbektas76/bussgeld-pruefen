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
  title: 'ESO ES 8.0 \u2014 Funktionsweise, Messfehler & Einspruch',
  description:
    'ESO ES 8.0 von ESO GmbH: Lichtschrankenmessung, Toleranzen, Aufstellwinkel-Fehler und juristische Angriffspunkte f\u00fcr den Einspruch. Gepr\u00fcft von Fachanw\u00e4lten.',
  alternates: { canonical: '/messverfahren/eso-es-8' },
  openGraph: {
    title: 'ESO ES 8.0 \u2014 Funktionsweise, Messfehler & Einspruch',
    description:
      'ESO ES 8.0: Lichtschrankenmessung, Toleranzen, typische Messfehler und Einspruchschancen.',
    url: '/messverfahren/eso-es-8',
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
  { label: 'ESO ES 8.0' },
];

const tocItems = [
  { label: 'Funktionsweise', href: '#funktion' },
  { label: 'Einsatzgebiete', href: '#einsatz' },
  { label: 'Toleranz', href: '#toleranz' },
  { label: 'Angriffspunkte', href: '#angriffspunkte' },
  { label: 'FAQ', href: '#faq' },
];

const quickFacts = [
  { label: 'Hersteller', value: 'ESO GmbH' },
  { label: 'Typ', value: 'Laser (Lichtschranke)' },
  { label: 'Toleranz', value: '3 km/h / 3 %' },
  { label: 'Eichung', value: 'PTB-Bauartzulassung' },
];

const faqItems = [
  {
    q: 'Wie funktioniert die Messung mit dem ESO ES 8.0?',
    a: 'Das ESO ES 8.0 verwendet Lichtschranken (Piezosensoren oder Lasersensoren), die in oder auf der Fahrbahn angebracht sind. Fahrzeuge unterbrechen beim \u00dcberfahren nacheinander mehrere Sensorlinien. Aus den bekannten Abst\u00e4nden und der gemessenen Zeit errechnet das Ger\u00e4t die Geschwindigkeit.',
  },
  {
    q: 'Was passiert bei falschem Aufstellwinkel?',
    a: 'Ein falscher Aufstellwinkel des Sensormoduls verf\u00e4lscht die Geschwindigkeitsmessung, da die Entfernungsberechnung auf einem definierten Winkel basiert. Bereits geringe Abweichungen k\u00f6nnen zu Messfehlern f\u00fchren, die den Toleranzabzug \u00fcbersteigen. Dies ist ein h\u00e4ufiger Ansatzpunkt f\u00fcr den Einspruch.',
  },
  {
    q: 'Kann das ESO ES 8.0 mehrere Fahrspuren gleichzeitig messen?',
    a: 'Ja. Das Ger\u00e4t kann je nach Konfiguration mehrere Fahrspuren \u00fcberwachen. Allerdings kann bei dichtem Verkehr die eindeutige Zuordnung eines Messwerts zu einem bestimmten Fahrzeug problematisch sein \u2014 ein weiterer Angriffspunkt.',
  },
  {
    q: 'Welche Toleranz gilt beim ESO ES 8.0?',
    a: 'Wie bei allen standardisierten Messverfahren: bis 100\u00a0km/h werden 3\u00a0km/h abgezogen, \u00fcber 100\u00a0km/h sind es 3\u00a0%. Der im Bu\u00dfgeldbescheid genannte Wert ist bereits der Nettowert nach Toleranzabzug.',
  },
];

const relatedLinks = [
  { label: 'PoliScan Speed', href: '/messverfahren/poliscan-speed' },
  { label: 'TraffiStar S350', href: '/messverfahren/traffistar-s350' },
  { label: 'RIEGL FG21-P', href: '/messverfahren/riegl' },
  { label: 'ProViDa', href: '/messverfahren/provida' },
  { label: 'Einspruch gegen Bu\u00dfgeldbescheid', href: '/verfahren/bussgeldbescheid/einspruch' },
];

export default function EsoEs8Page() {
  return (
    <>
      <ArticleSchema
        headline="ESO ES 8.0 \u2014 Funktionsweise, Messfehler und Einspruch"
        datePublished="2026-04-27"
        dateModified="2026-04-27"
        authorName="Fatih Bektas"
        url="https://bussgeld-pruefen.de/messverfahren/eso-es-8"
        speakable={['#direktantwort']}
      />
      <FAQSchema items={faqItems} />

      <div className="mx-auto max-w-7xl px-4 md:px-6 py-8">
        <div className="flex gap-8">
          <article className="flex-1 min-w-0 max-w-prose">
            <Breadcrumbs items={breadcrumbs} />

            <PageHero
              category="Messverfahren-Analyse"
              title="ESO ES 8.0 \u2014 Funktionsweise, Messfehler und Einspruch"
            />

            <div id="direktantwort">
              <DirectAnswerBox>
                Das <strong>ESO ES 8.0</strong> ist ein station\u00e4res
                Geschwindigkeitsmessger\u00e4t der ESO GmbH, das mit
                Lichtschranken-Technologie arbeitet. H\u00e4ufigster
                Angriffspunkt: ein <strong>falscher Aufstellwinkel</strong> des
                Sensors, der die gesamte Messung verf\u00e4lschen kann.
              </DirectAnswerBox>
            </div>

            <ResultGrid items={quickFacts} />

            {/* --- Funktionsweise --- */}
            <section id="funktion" className="mb-8">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Funktionsweise
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Das ESO ES 8.0 misst Geschwindigkeiten mithilfe von{' '}
                <strong>Lichtschranken</strong>, die in definierten Abst\u00e4nden
                quer zur Fahrbahn angebracht sind. Wenn ein Fahrzeug
                nacheinander mehrere Sensorlinien \u00fcberf\u00e4hrt, wird die
                Geschwindigkeit aus dem bekannten Sensorabstand und der
                gemessenen Durchfahrtzeit berechnet.
              </p>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Zus\u00e4tzlich l\u00f6st das Ger\u00e4t bei einem erkannten
                Versto\u00df ein <strong>digitales Beweisfoto</strong> aus, das
                Geschwindigkeit, Datum, Uhrzeit und Ger\u00e4te-ID einblendet.
                Die Fotos werden frontal oder von hinten aufgenommen, je nach
                Aufstellungsvariante.
              </p>
              <p className="text-sm leading-relaxed text-ink-muted">
                Das Ger\u00e4t ist als standardisiertes Messverfahren von der
                PTB (Physikalisch-Technische Bundesanstalt) zugelassen. Es wird
                von kommunalen Ordnungs\u00e4mtern und der Polizei eingesetzt.
              </p>
            </section>

            {/* --- Einsatzgebiete --- */}
            <section id="einsatz" className="mb-8">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Einsatzgebiete
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Das ESO ES 8.0 wird \u00fcberwiegend im semi-station\u00e4ren
                und station\u00e4ren Betrieb eingesetzt:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-ink-muted">
                <li>
                  <strong>Innerorts:</strong> Vor Schulen, in Tempo-30-Zonen und
                  an Unfallschwerpunkten.
                </li>
                <li>
                  <strong>Au\u00dferorts:</strong> Auf Landstra\u00dfen und an
                  Baustellen auf Autobahnen.
                </li>
                <li>
                  <strong>Durchgangsverkehr:</strong> An Ortseingangsbereichen,
                  wo h\u00e4ufig von h\u00f6herer auf niedrigere Geschwindigkeit
                  gewechselt wird.
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
              <p className="text-sm leading-relaxed text-ink-muted">
                Der Toleranzabzug wird automatisch vorgenommen. Der Wert im
                Bu\u00dfgeldbescheid ist bereits der bereinigte Wert nach Abzug.
              </p>
            </section>

            {/* --- Angriffspunkte --- */}
            <section id="angriffspunkte" className="mb-8">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Angriffspunkte f\u00fcr den Einspruch
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Trotz PTB-Zulassung bietet das ESO ES 8.0 regelm\u00e4\u00dfig
                Ansatzpunkte f\u00fcr einen erfolgreichen Einspruch:
              </p>
              <div className="space-y-3">
                <div className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-sm font-medium text-ink mb-1">
                    Falscher Aufstellwinkel des Sensors
                  </p>
                  <p className="text-xs leading-relaxed text-ink-muted">
                    Der Sensor muss exakt im vorgeschriebenen Winkel zur
                    Fahrbahn positioniert sein. Bereits geringe Abweichungen
                    verf\u00e4lschen die Geschwindigkeitsberechnung. Das
                    Aufbauprotokoll muss den Winkel dokumentieren.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-sm font-medium text-ink mb-1">
                    Fahrzeug au\u00dferhalb des Messbereichs
                  </p>
                  <p className="text-xs leading-relaxed text-ink-muted">
                    Wird ein Fahrzeug au\u00dferhalb des zugelassenen
                    Messbereichs erfasst, ist die Messung nicht verwertbar.
                    Die zul\u00e4ssigen Messbereiche sind in der
                    Bauartzulassung definiert.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-sm font-medium text-ink mb-1">
                    Abgelaufene oder fehlerhafte Eichung
                  </p>
                  <p className="text-xs leading-relaxed text-ink-muted">
                    Wie bei allen Messger\u00e4ten muss die Eichung zum
                    Tatzeitpunkt g\u00fcltig sein. Ein abgelaufener Eichschein
                    macht die Messung anfechtbar.
                  </p>
                </div>
              </div>
            </section>

            <LeadCTACard
              variant="inline"
              title="ESO ES 8.0 \u2014 Messung pr\u00fcfen lassen"
              subtitle="Aufstellwinkel fehlerhaft? Kostenlose Ersteinsch\u00e4tzung."
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
