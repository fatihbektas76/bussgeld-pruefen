export const metadata = {
  title: 'Datenschutzerklärung — bussgeld-pruefen.de',
  description: 'Datenschutzerklärung gemäß DSGVO.',
  alternates: { canonical: '/datenschutz' },
};

export default function DatenschutzPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-6 py-8">
      <div className="max-w-prose mx-auto">
        <h1 className="text-[28px] leading-[1.25] font-medium text-ink mb-6">
          Datenschutzerklärung
        </h1>

        {/* TODO: DSGVO-konforme Datenschutzerklärung einfügen (z.B. über Generator oder Anwalt) */}
        <div className="rounded-lg border-2 border-dashed border-warning bg-warning/10 p-6 text-sm text-ink-muted">
          <p className="font-semibold text-ink mb-2">
            Platzhalter — bitte vor Go-Live ausfüllen
          </p>
          <p>
            Vollständige Datenschutzerklärung gemäß Art. 13/14 DSGVO:
            Verantwortlicher, Datenschutzbeauftragter, Rechtsgrundlagen,
            Empfänger, Speicherdauer, Betroffenenrechte, Cookies,
            Analysetools, Kontaktformular-Datenverarbeitung.
          </p>
        </div>
      </div>
    </div>
  );
}
