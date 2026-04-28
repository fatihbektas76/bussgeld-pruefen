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
  title: 'Rotlichtversto\u00df mit Sachbesch\u00e4digung \u2014 240 \u20ac, 2 Punkte, 1 Monat Fahrverbot',
  description:
    'Einfacher Rotlichtversto\u00df mit Sachbesch\u00e4digung: 240 \u20ac Bu\u00dfgeld, 2 Punkte und 1 Monat Fahrverbot. Wann liegt eine Sachbesch\u00e4digung vor? Schadensregulierung und Einspruch.',
  alternates: { canonical: '/verstoesse/rotlicht/einfach-mit-sachbeschaedigung' },
  openGraph: {
    title: 'Rotlichtversto\u00df mit Sachbesch\u00e4digung \u2014 240 \u20ac, 2 Punkte, Fahrverbot',
    description:
      'Einfacher Rotlichtversto\u00df mit Sachbesch\u00e4digung: 240 \u20ac, 2 Punkte und 1 Monat Fahrverbot.',
    url: '/verstoesse/rotlicht/einfach-mit-sachbeschaedigung',
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
    q: 'Was z\u00e4hlt als Sachbesch\u00e4digung beim Rotlichtversto\u00df?',
    a: 'Eine Sachbesch\u00e4digung liegt vor, wenn durch das \u00dcberfahren der roten Ampel ein Fremdschaden entstanden ist \u2014 z.\u00a0B. Auffahrunfall auf querendes Fahrzeug, Besch\u00e4digung einer Verkehrsinsel oder Leitplanke. Der Schaden am eigenen Fahrzeug z\u00e4hlt nicht.',
  },
  {
    q: 'Muss ich den Schaden zus\u00e4tzlich zum Bu\u00dfgeld bezahlen?',
    a: 'Ja. Das Bu\u00dfgeld (240 \u20ac) ist die ordnungswidrigkeitenrechtliche Sanktion. Der Sachschaden wird zivilrechtlich separat \u00fcber die Kfz-Haftpflichtversicherung reguliert. Beides l\u00e4uft parallel.',
  },
  {
    q: 'Wer haftet bei einem Rotlicht-Unfall?',
    a: 'Wer bei Rot f\u00e4hrt und einen Unfall verursacht, haftet grunds\u00e4tzlich zu 100 %. Eine Mithaftung des Unfallgegners kommt nur in seltenen Ausnahmen in Betracht, z.\u00a0B. wenn dieser selbst deutlich zu schnell fuhr.',
  },
  {
    q: 'Steigt mein Versicherungsbeitrag nach einem Rotlicht-Unfall?',
    a: 'In der Regel ja. Die Kfz-Haftpflichtversicherung stuft Sie nach einem verschuldeten Unfall in der Schadenfreiheitsklasse zur\u00fcck. Die H\u00f6he der Beitragserh\u00f6hung h\u00e4ngt vom Versicherer und der bisherigen SF-Klasse ab.',
  },
];

const tocItems = [
  { label: 'Direktantwort', href: '#direktantwort' },
  { label: 'Wann liegt Sachbesch\u00e4digung vor?', href: '#sachbeschaedigung' },
  { label: 'Bu\u00dfgeld + Schadensregulierung', href: '#regulierung' },
  { label: 'Einspruch', href: '#einspruch' },
  { label: 'FAQ', href: '#faq' },
];

export default function RotlichtSachbeschaedigungPage() {
  return (
    <>
      <ArticleSchema
        headline="Rotlichtversto\u00df mit Sachbesch\u00e4digung \u2014 240 \u20ac, 2 Punkte, 1 Monat Fahrverbot"
        datePublished="2026-04-27"
        dateModified="2026-04-27"
        authorName="Fatih Bektas"
        url="https://bussgeld-pruefen.de/verstoesse/rotlicht/einfach-mit-sachbeschaedigung"
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
                { label: 'Mit Sachbesch\u00e4digung' },
              ]}
            />

            <PageHero
              category="Bu\u00dfgeldkatalog 2026"
              title="Rotlichtversto\u00df mit Sachbesch\u00e4digung \u2014 240 \u20ac, 2 Punkte, 1 Monat Fahrverbot"
            />

            <div id="direktantwort">
              <DirectAnswerBox>
                Wer eine rote Ampel \u00fcberf\u00e4hrt und dabei einen{' '}
                <strong>Sachschaden verursacht</strong>, zahlt{' '}
                <strong>240&nbsp;\u20ac Bu\u00dfgeld</strong>, erh\u00e4lt{' '}
                <strong>2&nbsp;Punkte</strong> und muss mit{' '}
                <strong>1&nbsp;Monat Fahrverbot</strong> rechnen. Der
                Sachschaden wird zus\u00e4tzlich zivilrechtlich reguliert.
              </DirectAnswerBox>
            </div>

            <ResultGrid
              items={[
                { label: 'Bu\u00dfgeld', value: '240 \u20ac' },
                { label: 'Punkte', value: '2' },
                { label: 'Fahrverbot', value: '1 Monat', tone: 'danger' },
                { label: 'Probezeit', value: 'A-Versto\u00df', tone: 'warning' },
              ]}
            />

            {/* --- Was zählt als Sachbeschädigung? --- */}
            <section id="sachbeschaedigung" className="mt-10">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Wann liegt eine Sachbesch\u00e4digung vor?
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Eine Sachbesch\u00e4digung im Sinne des Bu\u00dfgeldkatalogs
                setzt voraus, dass durch den Rotlichtversto\u00df ein{' '}
                <strong>Fremdschaden</strong> entstanden ist:
              </p>
              <div className="space-y-3">
                <div className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-sm font-medium text-ink mb-1">
                    Auffahrunfall auf querendes Fahrzeug
                  </p>
                  <p className="text-xs leading-relaxed text-ink-muted">
                    Der typische Fall: Das Rotlicht-Fahrzeug kollidiert mit
                    einem Fahrzeug, das bei Gr\u00fcn in die Kreuzung
                    eingefahren ist.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-sm font-medium text-ink mb-1">
                    Besch\u00e4digung von Verkehrseinrichtungen
                  </p>
                  <p className="text-xs leading-relaxed text-ink-muted">
                    Verkehrsinsel, Leitplanke, Ampelmast oder Bordstein
                    wurden durch das Fahrzeug besch\u00e4digt.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-sm font-medium text-ink mb-1">
                    Ausweichman\u00f6ver mit Folgeschaden
                  </p>
                  <p className="text-xs leading-relaxed text-ink-muted">
                    Ein anderer Verkehrsteilnehmer wich aus und besch\u00e4digte
                    dabei sein eigenes Fahrzeug oder fremdes Eigentum.
                  </p>
                </div>
              </div>
            </section>

            {/* --- Bußgeld + Schadensregulierung --- */}
            <section id="regulierung" className="mt-10">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Bu\u00dfgeld und Schadensregulierung
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Beim Rotlichtversto\u00df mit Sachbesch\u00e4digung laufen
                zwei Verfahren parallel:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-xl border border-warning-600 bg-warning-50 p-4">
                  <p className="text-xs font-semibold text-warning-800 uppercase tracking-wide mb-2">
                    Ordnungswidrigkeitenrecht
                  </p>
                  <ul className="space-y-1 text-sm text-ink-muted">
                    <li>240&nbsp;\u20ac Bu\u00dfgeld</li>
                    <li>2&nbsp;Punkte in Flensburg</li>
                    <li>1&nbsp;Monat Fahrverbot</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-xs font-semibold text-ink-muted uppercase tracking-wide mb-2">
                    Zivilrecht (Schadensersatz)
                  </p>
                  <ul className="space-y-1 text-sm text-ink-muted">
                    <li>Reparaturkosten des Gesch\u00e4digten</li>
                    <li>Mietwagen / Nutzungsausfallentsch\u00e4digung</li>
                    <li>Wertminderung bei Neuwagen</li>
                    <li>R\u00fcckstufung der SF-Klasse</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* --- Einspruch --- */}
            <section id="einspruch" className="mt-10">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-4">
                Einspruchsm\u00f6glichkeiten
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-xl border border-line bg-surface p-4">
                  <div className="flex items-start gap-2.5 mb-1.5">
                    <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-success-600" />
                    <p className="text-sm font-medium text-ink">
                      Rotlichtversto\u00df bestreiten
                    </p>
                  </div>
                  <p className="text-xs leading-relaxed text-ink-muted pl-5">
                    Wenn die Messung fehlerhaft war (abgelaufene Eichung,
                    Synchronisationsproblem), entf\u00e4llt auch die
                    Sachbesch\u00e4digung als Qualifikation.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <div className="flex items-start gap-2.5 mb-1.5">
                    <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-success-600" />
                    <p className="text-sm font-medium text-ink">
                      Kausalit\u00e4t anfechten
                    </p>
                  </div>
                  <p className="text-xs leading-relaxed text-ink-muted pl-5">
                    War der Sachschaden nicht unmittelbare Folge des
                    Rotlichtversto\u00dfes (z.\u00a0B. Vorschaden), kann die
                    erh\u00f6hte Sanktion entfallen.
                  </p>
                </div>
              </div>
            </section>

            <LeadCTACard
              variant="inline"
              title="Rotlichtversto\u00df mit Sachschaden?"
              subtitle="Fahrverbot + Schadensersatz drohen \u2014 kostenlose Ersteinsch\u00e4tzung."
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
                { label: 'Rotlicht mit Gef\u00e4hrdung', href: '/verstoesse/rotlicht/einfach-mit-gefaehrdung' },
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
