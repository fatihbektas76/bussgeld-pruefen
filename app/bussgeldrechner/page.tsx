import BussgeldRechner from '@/components/tools/BussgeldRechner';

export const metadata = {
  title: 'Bußgeldrechner 2026 — Bußgeld, Punkte & Fahrverbot berechnen',
  description:
    'Berechnen Sie Ihr Bußgeld nach dem aktuellen Bußgeldkatalog 2026. Punkte, Fahrverbot und Probezeit-Einstufung — kostenlos.',
};

export default function BussgeldrechnerPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-6 py-8">
      <div className="max-w-prose mx-auto">
        <span className="inline-block mb-3 px-3 py-1 rounded-full bg-primary-50 text-primary-800 text-[11px] font-medium uppercase tracking-wide">
          Bußgeldkatalog 2026
        </span>
        <h1 className="text-[28px] leading-[1.25] font-medium text-ink mb-2">
          Bußgeldrechner 2026
        </h1>
        <p className="text-sm text-ink-muted mb-8">
          Berechnen Sie Bußgeld, Punkte und Fahrverbot für Ihren Verkehrsverstoß
          — basierend auf dem aktuellen Bußgeldkatalog.
        </p>
        <BussgeldRechner />
      </div>
    </div>
  );
}
