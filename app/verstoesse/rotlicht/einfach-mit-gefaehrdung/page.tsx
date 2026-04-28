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
  title: 'Rotlichtversto\u00df mit Gef\u00e4hrdung \u2014 200 \u20ac, 2 Punkte, 1 Monat Fahrverbot',
  description:
    'Einfacher Rotlichtversto\u00df mit Gef\u00e4hrdung: 200 \u20ac Bu\u00dfgeld, 2 Punkte und 1 Monat Fahrverbot. Wann liegt eine Gef\u00e4hrdung vor? Einspruchschancen und Probezeit.',
  alternates: { canonical: '/verstoesse/rotlicht/einfach-mit-gefaehrdung' },
  openGraph: {
    title: 'Rotlichtversto\u00df mit Gef\u00e4hrdung \u2014 200 \u20ac, 2 Punkte, Fahrverbot',
    description:
      'Einfacher Rotlichtversto\u00df mit Gef\u00e4hrdung: 200 \u20ac, 2 Punkte und 1 Monat Fahrverbot.',
    url: '/verstoesse/rotlicht/einfach-mit-gefaehrdung',
    type: 'article',
    ...ogDefaults,
    publishedTime: '2026-04-27',
    modifiedTime: '2026-04-27',
    authors: ['Fatih Bektas'],
    images: [defaultOgImage],
  },
};

const faqItems = [
  {
    q: 'Wann liegt eine Gef\u00e4hrdung beim Rotlichtversto\u00df vor?',
    a: 'Eine Gef\u00e4hrdung liegt vor, wenn durch das \u00dcberfahren der roten Ampel andere Verkehrsteilnehmer konkret in Gefahr gebracht wurden \u2014 z.\u00a0B. ein Fu\u00dfg\u00e4nger musste ausweichen, ein querender PKW musste bremsen, oder ein Radfahrer wurde gef\u00e4hrdet.',
  },
  {
    q: 'Was ist der Unterschied zwischen Gef\u00e4hrdung und Sachbesch\u00e4digung?',
    a: 'Bei der Gef\u00e4hrdung kam es zu einer konkreten Gefahrensituation, aber kein Schaden entstand. Bei der Sachbesch\u00e4digung wurde tats\u00e4chlich ein anderes Fahrzeug oder Gegenstand besch\u00e4digt. Die Sachbesch\u00e4digung wird mit 240 \u20ac bestraft.',
  },
  {
    q: 'Gilt das Fahrverbot auch beim einfachen Rotlichtversto\u00df mit Gef\u00e4hrdung?',
    a: 'Ja. Sobald eine Gef\u00e4hrdung hinzukommt, erh\u00f6ht sich die Sanktion auf dasselbe Niveau wie beim qualifizierten Rotlichtversto\u00df: 200 \u20ac, 2 Punkte und 1 Monat Fahrverbot \u2014 unabh\u00e4ngig davon, ob die Rotphase unter oder \u00fcber 1 Sekunde war.',
  },
  {
    q: 'Kann ich gegen die Feststellung der Gef\u00e4hrdung Einspruch einlegen?',
    a: 'Ja. Die Gef\u00e4hrdung muss von der Beh\u00f6rde nachgewiesen werden. Gibt es keine Zeugenaussagen, keine Dashcam-Aufnahmen und keinen dokumentierten Beinahe-Unfall, kann die Gef\u00e4hrdung bestritten werden.',
  },
];

const tocItems = [
  { label: 'Direktantwort', href: '#direktantwort' },
  { label: 'Wann liegt Gef\u00e4hrdung vor?', href: '#gefaehrdung' },
  { label: 'Sanktions\u00fcbersicht', href: '#sanktionen' },
  { label: 'Einspruch', href: '#einspruch' },
  { label: 'FAQ', href: '#faq' },
];

export default function RotlichtGefaehrdungPage() {
  return (
    <>
      <ArticleSchema
        headline="Rotlichtversto\u00df mit Gef\u00e4hrdung \u2014 200 \u20ac, 2 Punkte, 1 Monat Fahrverbot"
        datePublished="2026-04-27"
        dateModified="2026-04-27"
        authorName="Fatih Bektas"
        url="https://bussgeld-pruefen.de/verstoesse/rotlicht/einfach-mit-gefaehrdung"
        speakable={['#direktantwort']}
      />
      <FAQSchema items={faqItems} />

      <div className="mx-auto max-w-7xl px-4 md:px-6 py-8">
        <div className="flex gap-8">
          <article className="flex-1 min-w-0 max-w-prose">
            <Breadcrumbs
              items={[
                { label: 'Start', href: '/' },
                { label: 'Verst\u00f6\u00dfe', href: '/verstoesse' },
                { label: 'Rotlicht', href: '/verstoesse/rotlicht/einfach' },
                { label: 'Mit Gef\u00e4hrdung' },
              ]}
            />

            <PageHero
              category="Bu\u00dfgeldkatalog 2026"
              title="Rotlichtversto\u00df mit Gef\u00e4hrdung \u2014 200 \u20ac, 2 Punkte, 1 Monat Fahrverbot"
            />

            <div id="direktantwort">
              <DirectAnswerBox>
                Wer eine rote Ampel \u00fcberf\u00e4hrt und dabei andere
                Verkehrsteilnehmer <strong>konkret gef\u00e4hrdet</strong>,
                zahlt <strong>200&nbsp;\u20ac Bu\u00dfgeld</strong>, erh\u00e4lt{' '}
                <strong>2&nbsp;Punkte</strong> und muss mit{' '}
                <strong>1&nbsp;Monat Fahrverbot</strong> rechnen \u2014
                unabh\u00e4ngig davon, ob die Rotphase unter oder \u00fcber
                1&nbsp;Sekunde lag.
              </DirectAnswerBox>
            </div>

            <ResultGrid
              items={[
                { label: 'Bu\u00dfgeld', value: '200 \u20ac' },
                { label: 'Punkte', value: '2' },
                { label: 'Fahrverbot', value: '1 Monat', tone: 'danger' },
                { label: 'Probezeit', value: 'A-Versto\u00df', tone: 'warning' },
              ]}
            />

            {/* --- Wann liegt Gefährdung vor? --- */}
            <section id="gefaehrdung" className="mt-10">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Wann liegt eine Gef\u00e4hrdung vor?
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Eine <strong>konkrete Gef\u00e4hrdung</strong> setzt voraus,
                dass ein anderer Verkehrsteilnehmer durch das \u00dcberfahren
                der Rotlichtampel in eine Situation gebracht wurde, in der ein
                Schaden nur knapp vermieden wurde. Typische Beispiele:
              </p>
              <div className="space-y-3">
                <div className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-sm font-medium text-ink mb-1">
                    Fu\u00dfg\u00e4nger musste ausweichen
                  </p>
                  <p className="text-xs leading-relaxed text-ink-muted">
                    Ein Fu\u00dfg\u00e4nger, der bei Gr\u00fcn die Stra\u00dfe
                    \u00fcberquerte, musste zur\u00fcckspringen oder anhalten,
                    um einen Zusammensto\u00df zu vermeiden.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-sm font-medium text-ink mb-1">
                    Querender Verkehr musste bremsen
                  </p>
                  <p className="text-xs leading-relaxed text-ink-muted">
                    Ein von rechts oder links kommendes Fahrzeug musste eine
                    Vollbremsung oder ein Ausweichman\u00f6ver durchf\u00fchren.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-sm font-medium text-ink mb-1">
                    Radfahrer auf dem Radweg gef\u00e4hrdet
                  </p>
                  <p className="text-xs leading-relaxed text-ink-muted">
                    Ein Radfahrer auf einem parallel verlaufenden Radweg oder
                    einer Fahrradampel wurde durch das Rotlicht-Fahrzeug
                    gef\u00e4hrdet.
                  </p>
                </div>
              </div>
            </section>

            {/* --- Sanktionsübersicht --- */}
            <section id="sanktionen" className="mt-10">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Sanktions\u00fcbersicht: Alle Rotlicht-Varianten
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-line text-left">
                      <th className="py-2 pr-4 font-medium text-ink">Variante</th>
                      <th className="py-2 pr-4 font-medium text-ink">Bu\u00dfgeld</th>
                      <th className="py-2 pr-4 font-medium text-ink">Punkte</th>
                      <th className="py-2 font-medium text-ink">Fahrverbot</th>
                    </tr>
                  </thead>
                  <tbody className="text-ink-muted">
                    <tr className="border-b border-line">
                      <td className="py-2 pr-4">Einfach (&lt; 1 Sek.)</td>
                      <td className="py-2 pr-4">90 \u20ac</td>
                      <td className="py-2 pr-4">1</td>
                      <td className="py-2">\u2014</td>
                    </tr>
                    <tr className="border-b border-line bg-warning-50">
                      <td className="py-2 pr-4 font-medium text-ink">Mit Gef\u00e4hrdung</td>
                      <td className="py-2 pr-4 font-medium">200 \u20ac</td>
                      <td className="py-2 pr-4 font-medium">2</td>
                      <td className="py-2 font-medium">1 Monat</td>
                    </tr>
                    <tr className="border-b border-line">
                      <td className="py-2 pr-4">Mit Sachbesch\u00e4digung</td>
                      <td className="py-2 pr-4">240 \u20ac</td>
                      <td className="py-2 pr-4">2</td>
                      <td className="py-2">1 Monat</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Qualifiziert (\u2265 1 Sek.)</td>
                      <td className="py-2 pr-4">200 \u20ac</td>
                      <td className="py-2 pr-4">2</td>
                      <td className="py-2">1 Monat</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* --- Einspruch --- */}
            <section id="einspruch" className="mt-10">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-4">
                Einspruchschancen bei Gef\u00e4hrdung
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Die Gef\u00e4hrdung muss von der Beh\u00f6rde
                <strong> konkret nachgewiesen</strong> werden. M\u00f6gliche
                Angriffspunkte:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-xl border border-line bg-surface p-4">
                  <div className="flex items-start gap-2.5 mb-1.5">
                    <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-success-600" />
                    <p className="text-sm font-medium text-ink">
                      Keine Zeugen vorhanden
                    </p>
                  </div>
                  <p className="text-xs leading-relaxed text-ink-muted pl-5">
                    Wenn keine Zeugenaussagen oder Dashcam-Aufnahmen vorliegen,
                    ist die Gef\u00e4hrdung schwer nachzuweisen.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <div className="flex items-start gap-2.5 mb-1.5">
                    <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-success-600" />
                    <p className="text-sm font-medium text-ink">
                      Gef\u00e4hrdung nur vermutet
                    </p>
                  </div>
                  <p className="text-xs leading-relaxed text-ink-muted pl-5">
                    Eine abstrakte Gef\u00e4hrdung (\u201ees h\u00e4tte
                    passieren k\u00f6nnen\u201c) reicht nicht. Es muss eine
                    konkrete Situation dokumentiert sein.
                  </p>
                </div>
              </div>
            </section>

            <LeadCTACard
              variant="inline"
              title="Rotlichtversto\u00df mit Gef\u00e4hrdung?"
              subtitle="Fahrverbot droht \u2014 kostenlose Ersteinsch\u00e4tzung in 60 Sekunden."
            />

            {/* --- FAQ --- */}
            <div id="faq">
              <FAQAccordion items={faqItems} defaultOpen={0} />
            </div>

            <AuthorBox
              name="Fatih Bektas"
              title="Rechtsanwalt"
              reviewedAt="27.04.2026"
            />

            <RelatedLinks
              items={[
                { label: 'Einfacher Rotlichtversto\u00df (< 1 Sek.)', href: '/verstoesse/rotlicht/einfach' },
                { label: 'Qualifizierter Rotlichtversto\u00df (\u2265 1 Sek.)', href: '/verstoesse/rotlicht/qualifiziert' },
                { label: 'Rotlicht mit Sachbesch\u00e4digung', href: '/verstoesse/rotlicht/einfach-mit-sachbeschaedigung' },
                { label: 'Einspruch gegen Bu\u00dfgeldbescheid', href: '/verfahren/bussgeldbescheid/einspruch' },
              ]}
            />
          </article>

          <DocSidebar toc={tocItems} />
        </div>
      </div>
    </>
  );
}
