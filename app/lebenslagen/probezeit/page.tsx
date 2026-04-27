import type { Metadata } from 'next';
import Breadcrumbs from '@/components/content/Breadcrumbs';
import PageHero from '@/components/content/PageHero';
import DirectAnswerBox from '@/components/content/DirectAnswerBox';
import LeadCTACard from '@/components/content/LeadCTACard';
import FAQAccordion from '@/components/content/FAQAccordion';
import AuthorBox from '@/components/content/AuthorBox';
import RelatedLinks from '@/components/content/RelatedLinks';
import DocSidebar from '@/components/content/DocSidebar';
import ArticleSchema from '@/components/seo/ArticleSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import HowToSchema from '@/components/seo/HowToSchema';
import { ogDefaults, defaultOgImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Probezeit Fahranf\u00e4nger \u2014 A-Verst\u00f6\u00dfe, B-Verst\u00f6\u00dfe und Folgen',
  description:
    'Probezeit 2026: A-Verst\u00f6\u00dfe, B-Verst\u00f6\u00dfe, Drei-Stufen-Modell, Aufbauseminar und Fahrerlaubnisentzug. Alle Regeln f\u00fcr Fahranf\u00e4nger.',
  alternates: { canonical: '/lebenslagen/probezeit' },
  openGraph: {
    title: 'Probezeit Fahranf\u00e4nger \u2014 A-Verst\u00f6\u00dfe, B-Verst\u00f6\u00dfe und Folgen',
    description:
      'Probezeit 2026: A-Verst\u00f6\u00dfe, B-Verst\u00f6\u00dfe, Drei-Stufen-Modell, Aufbauseminar und Fahrerlaubnisentzug. Alle Regeln f\u00fcr Fahranf\u00e4nger.',
    url: '/lebenslagen/probezeit',
    type: 'article',
    ...ogDefaults,
    publishedTime: '2026-01-20',
    modifiedTime: '2026-04-25',
    authors: ['Fatih Bektas'],
    images: [defaultOgImage],
  },
};

const faqItems = [
  {
    q: 'Kann die Probezeit verl\u00e4ngert werden, ohne dass ich einen Punkt bekomme?',
    a: 'Ja. Ein A-Versto\u00df f\u00fchrt zur Probezeit-Verl\u00e4ngerung, auch wenn der konkrete Versto\u00df keinen Punkt bringt \u2014 z.\u00a0B. bestimmte Alkoholverst\u00f6\u00dfe unter 0,5 Promille, die in der Probezeit trotzdem als A-Versto\u00df gelten.',
  },
  {
    q: 'Gilt die Probezeit auch f\u00fcr den Klasse-A-F\u00fchrerschein (Motorrad)?',
    a: 'Ja, die Probezeit gilt f\u00fcr alle Ersterteilungen einer Fahrerlaubnis. Wer bereits einen Pkw-F\u00fchrerschein hat, dessen Probezeit l\u00e4uft, wird durch den Motorrad-F\u00fchrerschein keine neue Probezeit ausgel\u00f6st.',
  },
  {
    q: 'Reichen 2 A-Verst\u00f6\u00dfe f\u00fcr den Entzug der Fahrerlaubnis?',
    a: 'Nein. Erst beim dritten A-Versto\u00df wird die Fahrerlaubnis entzogen. Beim zweiten A-Versto\u00df erhalten Sie eine kostenpflichtige Verwarnung mit der Empfehlung einer verkehrspsychologischen Beratung.',
  },
  {
    q: 'Muss ich das Aufbauseminar selbst zahlen?',
    a: 'Ja. Die Kosten von ca. 250\u2013500\u00a0\u20ac tr\u00e4gt der Fahranf\u00e4nger selbst. Eine Rechtsschutzversicherung \u00fcbernimmt die Seminarkosten in der Regel nicht, da es sich um eine verwaltungsrechtliche Ma\u00dfnahme handelt.',
  },
  {
    q: 'Erf\u00e4hrt mein Arbeitgeber von einem Versto\u00df in der Probezeit?',
    a: 'Grunds\u00e4tzlich nein. Der Arbeitgeber hat keinen Zugriff auf Ihr Punktekonto in Flensburg. Allerdings k\u00f6nnen Berufskraftfahrer verpflichtet sein, Verst\u00f6\u00dfe zu melden.',
  },
  {
    q: 'Z\u00e4hlen ausl\u00e4ndische Verst\u00f6\u00dfe f\u00fcr die Probezeit?',
    a: 'Verst\u00f6\u00dfe im EU-Ausland k\u00f6nnen unter bestimmten Voraussetzungen im FAER eingetragen werden. In der Praxis geschieht das jedoch selten. Verst\u00f6\u00dfe au\u00dferhalb der EU haben in der Regel keine Auswirkung auf die Probezeit.',
  },
  {
    q: 'Was passiert, wenn ich vor Ende der Probezeit umziehe?',
    a: 'Die Probezeit l\u00e4uft weiter, unabh\u00e4ngig vom Wohnsitz. Zust\u00e4ndig f\u00fcr das Aufbauseminar ist die Fahrerlaubnisbeh\u00f6rde am neuen Wohnort.',
  },
  {
    q: 'Wie lange habe ich Zeit, das Aufbauseminar zu absolvieren?',
    a: 'Die Beh\u00f6rde setzt eine Frist von in der Regel 2 Monaten. Wird das Seminar nicht innerhalb der Frist absolviert, wird die Fahrerlaubnis entzogen (\u00a7\u00a02a Abs.\u00a02 S.\u00a01 Nr.\u00a01 StVG).',
  },
];

const tocItems = [
  { label: 'Was ist die Probezeit?', href: '#was-ist' },
  { label: 'A-Verst\u00f6\u00dfe', href: '#a-verstoesse' },
  { label: 'B-Verst\u00f6\u00dfe', href: '#b-verstoesse' },
  { label: 'Drei-Stufen-Modell', href: '#stufen' },
  { label: 'Aufbauseminar', href: '#aufbauseminar' },
  { label: 'Was tun?', href: '#was-tun' },
  { label: 'FAQ', href: '#faq' },
];

export default function ProbezeitPage() {
  return (
    <>
      <ArticleSchema
        headline="Probezeit f\u00fcr Fahranf\u00e4nger \u2014 A-Verst\u00f6\u00dfe, B-Verst\u00f6\u00dfe und ihre Folgen"
        datePublished="2026-01-20"
        dateModified="2026-04-25"
        authorName="Fatih Bektas"
      />
      <FAQSchema items={faqItems} />
      <HowToSchema
        name="Stufensystem bei Verst\u00f6\u00dfen in der Probezeit"
        steps={[
          { text: '1. A-Versto\u00df: Aufbauseminar + Probezeit-Verl\u00e4ngerung' },
          { text: '2. A-Versto\u00df: Verwarnung + Beratungsempfehlung' },
          { text: '3. A-Versto\u00df: Fahrerlaubnisentzug' },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 md:px-6 py-8">
        <div className="flex gap-8">
          <article className="flex-1 min-w-0 max-w-prose">
            <Breadcrumbs
              items={[
                { label: 'Start', href: '/' },
                { label: 'Lebenslagen', href: '/lebenslagen' },
                { label: 'Probezeit' },
              ]}
            />

            <PageHero
              category="Ratgeber Probezeit 2026"
              title="Probezeit f\u00fcr Fahranf\u00e4nger \u2014 A-Verst\u00f6\u00dfe, B-Verst\u00f6\u00dfe und ihre Folgen"
            />

            <DirectAnswerBox>
              Die F\u00fchrerschein-Probezeit dauert{' '}
              <strong>2&nbsp;Jahre</strong> nach Bestehen der Pr\u00fcfung. Bei
              einem A-Versto\u00df (z.&nbsp;B. Geschwindigkeit \u2265&nbsp;21&nbsp;km/h
              zu schnell) verl\u00e4ngert sie sich auf{' '}
              <strong>4&nbsp;Jahre</strong> und ein kostenpflichtiges
              Aufbauseminar wird angeordnet. Bei drei A-Verst\u00f6\u00dfen
              droht der <strong>Entzug der Fahrerlaubnis</strong>.
            </DirectAnswerBox>

            {/* --- Was ist die Probezeit? --- */}
            <section id="was-ist" className="mt-10">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Was ist die Probezeit?
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Gem\u00e4\u00df \u00a7&nbsp;2a StVG beginnt die Probezeit am
                Tag der Erteilung der ersten Fahrerlaubnis und dauert
                zwei Jahre. W\u00e4hrend dieser Zeit gelten strengere
                Regeln: Bestimmte Verkehrsverst\u00f6\u00dfe werden als
                A-Verst\u00f6\u00dfe (schwerwiegend) oder B-Verst\u00f6\u00dfe
                (weniger schwerwiegend) eingestuft und l\u00f6sen ein
                gestuftes Ma\u00dfnahmensystem aus.
              </p>
              <p className="text-sm leading-relaxed text-ink-muted">
                Ziel der Probezeit ist es, Fahranf\u00e4nger zu besonders
                vorsichtigem Fahren zu motivieren. F\u00fcr Fahranf\u00e4nger
                gilt au\u00dferdem die 0,0-Promille-Grenze (\u00a7&nbsp;24c
                StVG) \u2014 bereits geringe Alkoholwerte gelten als
                A-Versto\u00df.
              </p>
            </section>

            {/* --- A-Verstöße --- */}
            <section id="a-verstoesse" className="mt-10">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                A-Verst\u00f6\u00dfe
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                A-Verst\u00f6\u00dfe sind schwerwiegende Zuwiderhandlungen
                im Stra\u00dfenverkehr. Bereits ein einziger A-Versto\u00df
                hat sp\u00fcrbare Folgen:
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-ink-muted">
                <li className="flex items-start gap-2">
                  <span className="text-danger-600 mt-0.5 shrink-0">&bull;</span>
                  <span>Geschwindigkeits\u00fcberschreitung ab 21&nbsp;km/h (innerorts und au\u00dferorts)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-danger-600 mt-0.5 shrink-0">&bull;</span>
                  <span>Rotlichtversto\u00df (einfach und qualifiziert)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-danger-600 mt-0.5 shrink-0">&bull;</span>
                  <span>Alkohol am Steuer (bereits ab 0,0&nbsp;Promille f\u00fcr Fahranf\u00e4nger)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-danger-600 mt-0.5 shrink-0">&bull;</span>
                  <span>Drogenfahrt (\u00a7&nbsp;24a StVG)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-danger-600 mt-0.5 shrink-0">&bull;</span>
                  <span>Abstandsunterschreitung (weniger als 5/10 des halben Tachowerts)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-danger-600 mt-0.5 shrink-0">&bull;</span>
                  <span>\u00dcberholen im \u00dcberholverbot</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-danger-600 mt-0.5 shrink-0">&bull;</span>
                  <span>Unfallflucht (\u00a7&nbsp;142 StGB)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-danger-600 mt-0.5 shrink-0">&bull;</span>
                  <span>N\u00f6tigung im Stra\u00dfenverkehr (\u00a7&nbsp;240 StGB)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-danger-600 mt-0.5 shrink-0">&bull;</span>
                  <span>Gef\u00e4hrdung des Stra\u00dfenverkehrs (\u00a7&nbsp;315c StGB)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-danger-600 mt-0.5 shrink-0">&bull;</span>
                  <span>Vorfahrtsverletzung mit Gef\u00e4hrdung</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-danger-600 mt-0.5 shrink-0">&bull;</span>
                  <span>Falsches \u00dcberholen mit Gef\u00e4hrdung</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-danger-600 mt-0.5 shrink-0">&bull;</span>
                  <span>Handy am Steuer mit Gef\u00e4hrdung (200&nbsp;\u20ac, 2&nbsp;Punkte, 1&nbsp;Monat Fahrverbot)</span>
                </li>
              </ul>
            </section>

            {/* --- B-Verstöße --- */}
            <section id="b-verstoesse" className="mt-10">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                B-Verst\u00f6\u00dfe
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                B-Verst\u00f6\u00dfe sind weniger schwerwiegende Ordnungswidrigkeiten.
                Zwei B-Verst\u00f6\u00dfe werden wie ein A-Versto\u00df gewertet:
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-ink-muted">
                <li className="flex items-start gap-2">
                  <span className="text-warning-600 mt-0.5 shrink-0">&bull;</span>
                  <span>Handy am Steuer ohne Gef\u00e4hrdung (100&nbsp;\u20ac, 1&nbsp;Punkt)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning-600 mt-0.5 shrink-0">&bull;</span>
                  <span>Abgefahrene Reifen (Mindestprofiltiefe 1,6&nbsp;mm unterschritten)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning-600 mt-0.5 shrink-0">&bull;</span>
                  <span>Kennzeichenmissbrauch</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning-600 mt-0.5 shrink-0">&bull;</span>
                  <span>Fahren ohne Begleitperson (BF17)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning-600 mt-0.5 shrink-0">&bull;</span>
                  <span>Kind nicht ordnungsgem\u00e4\u00df gesichert</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning-600 mt-0.5 shrink-0">&bull;</span>
                  <span>\u00dcberladung des Fahrzeugs (ab 5&nbsp;%)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning-600 mt-0.5 shrink-0">&bull;</span>
                  <span>Erloschenene Betriebserlaubnis (ungen. technische Ver\u00e4nderungen)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning-600 mt-0.5 shrink-0">&bull;</span>
                  <span>Mangelnde Ladungssicherung</span>
                </li>
              </ul>
            </section>

            {/* --- Drei-Stufen-Modell --- */}
            <section id="stufen" className="mt-10">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-4">
                Drei-Stufen-Modell bei Wiederholung
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-4">
                Das Probezeit-Ma\u00dfnahmensystem nach \u00a7&nbsp;2a StVG
                funktioniert stufenweise. Jede Stufe wird durch einen
                weiteren A-Versto\u00df (oder 2 B-Verst\u00f6\u00dfe)
                ausgel\u00f6st:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-xl border border-warning-600 bg-warning-50 p-5">
                  <p className="text-xs font-semibold text-warning-800 uppercase tracking-wide mb-2">
                    Stufe 1
                  </p>
                  <p className="text-sm font-medium text-ink mb-2">
                    1.&nbsp;A-Versto\u00df oder 2&nbsp;B-Verst\u00f6\u00dfe
                  </p>
                  <ul className="space-y-1.5 text-xs text-ink-muted">
                    <li className="flex items-start gap-2">
                      <span className="text-warning-600 mt-0.5 shrink-0">&bull;</span>
                      <span>Anordnung eines Aufbauseminars</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-warning-600 mt-0.5 shrink-0">&bull;</span>
                      <span>Verl\u00e4ngerung der Probezeit um 2&nbsp;Jahre (auf insgesamt 4&nbsp;Jahre)</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl border border-danger-600 bg-danger-50 p-5">
                  <p className="text-xs font-semibold text-danger-800 uppercase tracking-wide mb-2">
                    Stufe 2
                  </p>
                  <p className="text-sm font-medium text-ink mb-2">
                    2.&nbsp;A-Versto\u00df oder 4&nbsp;B-Verst\u00f6\u00dfe
                  </p>
                  <ul className="space-y-1.5 text-xs text-ink-muted">
                    <li className="flex items-start gap-2">
                      <span className="text-danger-600 mt-0.5 shrink-0">&bull;</span>
                      <span>Schriftliche Verwarnung durch die Beh\u00f6rde</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-danger-600 mt-0.5 shrink-0">&bull;</span>
                      <span>Empfehlung einer verkehrspsychologischen Beratung (freiwillig, ca. 300\u2013400&nbsp;\u20ac)</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl border-2 border-danger-600 bg-danger-50 p-5">
                  <p className="text-xs font-semibold text-danger-800 uppercase tracking-wide mb-2">
                    Stufe 3
                  </p>
                  <p className="text-sm font-medium text-ink mb-2">
                    3.&nbsp;A-Versto\u00df
                  </p>
                  <ul className="space-y-1.5 text-xs text-ink-muted">
                    <li className="flex items-start gap-2">
                      <span className="text-danger-600 mt-0.5 shrink-0">&bull;</span>
                      <span><strong>Entzug der Fahrerlaubnis</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-danger-600 mt-0.5 shrink-0">&bull;</span>
                      <span>Sperrfrist: mindestens 6&nbsp;Monate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-danger-600 mt-0.5 shrink-0">&bull;</span>
                      <span>Neuerteilung nur nach erneuter Fahrpr\u00fcfung + ggf. MPU</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* --- Aufbauseminar --- */}
            <section id="aufbauseminar" className="mt-10">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Aufbauseminar \u2014 Ablauf und Kosten
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Das Aufbauseminar (ASF \u2014 Aufbauseminar f\u00fcr
                Fahranf\u00e4nger) ist nach \u00a7&nbsp;2b StVG
                vorgeschrieben, wenn ein Fahranf\u00e4nger zum ersten Mal
                auff\u00e4llig wird. Es soll das eigene Fahrverhalten
                reflektieren und zuk\u00fcnftige Verst\u00f6\u00dfe
                verhindern.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-sm font-medium text-ink mb-1">Umfang</p>
                  <p className="text-xs leading-relaxed text-ink-muted">
                    4&nbsp;Sitzungen \u00e0 135&nbsp;Minuten in einer Gruppe
                    von 6\u201312 Teilnehmern. Zwischen den Sitzungen
                    liegen Beobachtungsphasen im realen Verkehr.
                    Zus\u00e4tzlich eine Fahrprobe zwischen der 1. und 2.
                    Sitzung.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-sm font-medium text-ink mb-1">Kosten</p>
                  <p className="text-xs leading-relaxed text-ink-muted">
                    Ca. 300\u2013500&nbsp;\u20ac je nach Fahrschule und Region.
                    Die Kosten tr\u00e4gt der Fahranf\u00e4nger selbst.
                    Eine Rechtsschutzversicherung \u00fcbernimmt diese
                    Kosten in der Regel nicht.
                  </p>
                </div>
              </div>
              <div className="bg-primary-50 border-l-4 border-primary-600 rounded-r-lg px-5 py-4">
                <p className="text-sm leading-relaxed text-ink-muted">
                  <strong>Frist beachten:</strong> Die Beh\u00f6rde setzt eine
                  Frist (i.&nbsp;d.&nbsp;R. 2&nbsp;Monate). Wird das Seminar
                  nicht rechtzeitig absolviert, wird die Fahrerlaubnis
                  entzogen \u2014 unabh\u00e4ngig davon, ob ein weiterer
                  Versto\u00df vorliegt.
                </p>
              </div>
            </section>

            {/* --- Was tun? --- */}
            <section id="was-tun" className="mt-10">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Was tun nach einem A-Versto\u00df als Fahranf\u00e4nger?
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Wenn Sie als Fahranf\u00e4nger einen Bu\u00dfgeldbescheid
                erhalten haben, sollten Sie sofort handeln. Die
                Einspruchsfrist betr\u00e4gt nur 14&nbsp;Tage ab
                Zustellung. Gerade bei A-Verst\u00f6\u00dfen lohnt sich
                eine anwaltliche Pr\u00fcfung besonders, da die Folgen
                weit \u00fcber das Bu\u00dfgeld hinausgehen:
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-ink-muted mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-0.5 shrink-0">&bull;</span>
                  <span>
                    <strong>Bu\u00dfgeldbescheid pr\u00fcfen:</strong> Stimmen
                    Tatort, Tatzeit, Messverfahren und Toleranzabzug?
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-0.5 shrink-0">&bull;</span>
                  <span>
                    <strong>Einspruch erw\u00e4gen:</strong> Ein
                    erfolgreicher Einspruch verhindert die
                    Probezeit-Verl\u00e4ngerung und das Aufbauseminar.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-0.5 shrink-0">&bull;</span>
                  <span>
                    <strong>Fachanwalt konsultieren:</strong> Ein
                    Verkehrsrechtsanwalt kann die Messung pr\u00fcfen,
                    Akteneinsicht nehmen und die Erfolgsaussichten
                    realistisch einsch\u00e4tzen.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-0.5 shrink-0">&bull;</span>
                  <span>
                    <strong>Rechtsschutzversicherung pr\u00fcfen:</strong> Bei
                    einer Verkehrs-Rechtsschutzversicherung werden die
                    Anwaltskosten in der Regel \u00fcbernommen.
                  </span>
                </li>
              </ul>
            </section>

            <LeadCTACard
              variant="block"
              title="A-Versto\u00df in der Probezeit? Jetzt Einspruch pr\u00fcfen."
              subtitle="Kostenlose Ersteinsch\u00e4tzung \u2014 7 Fragen, 60 Sekunden"
              trustBullets={[
                '100 % kostenlos',
                'Gepr\u00fcft von Fachanw\u00e4lten',
                'DSGVO-konform',
              ]}
            />

            {/* --- FAQ --- */}
            <div id="faq">
              <FAQAccordion items={faqItems} defaultOpen={0} />
            </div>

            <AuthorBox
              name="Fatih Bektas"
              title="Rechtsanwalt"
              reviewedAt="25.04.2026"
            />

            <RelatedLinks
              items={[
                { label: 'A-Versto\u00df \u2014 Definition und Beispiele', href: '/lebenslagen/probezeit/a-verstoss' },
                { label: 'B-Versto\u00df \u2014 Definition und Beispiele', href: '/lebenslagen/probezeit/b-verstoss' },
                { label: 'Aufbauseminar \u2014 Ablauf, Kosten, Fristen', href: '/lebenslagen/probezeit/aufbauseminar' },
                { label: 'Probezeit-Verl\u00e4ngerung', href: '/lebenslagen/probezeit/verlaengerung' },
                { label: 'MPU \u2014 Medizinisch-Psychologische Untersuchung', href: '/lebenslagen/mpu' },
                { label: 'Fahrerlaubnisentzug \u2014 Was nun?', href: '/lebenslagen/fahrerlaubnisentzug' },
              ]}
            />
          </article>

          <DocSidebar toc={tocItems} />
        </div>
      </div>
    </>
  );
}
