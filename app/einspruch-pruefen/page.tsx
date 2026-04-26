import EinspruchFunnel from '@/components/tools/EinspruchFunnel';

export const metadata = {
  title: 'Einspruch prüfen — kostenlose Einschätzung in 60 Sekunden',
  description:
    'Prüfen Sie kostenlos, ob sich ein Einspruch gegen Ihren Bußgeldbescheid lohnt. 7 Fragen, 60 Sekunden, ohne Anmeldung.',
};

export default function EinspruchPruefenPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-6 py-8">
      <div className="max-w-prose mx-auto">
        <h1 className="text-[28px] leading-[1.25] font-medium text-ink mb-2">
          Einspruch prüfen
        </h1>
        <p className="text-sm text-ink-muted mb-8">
          7 Fragen, 60 Sekunden — kostenlose Einschätzung, ob sich ein
          Einspruch lohnt.
        </p>
        <EinspruchFunnel />
      </div>
    </div>
  );
}
