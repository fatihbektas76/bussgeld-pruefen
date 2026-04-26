import Link from 'next/link';
import { cn } from '@/lib/cn';

type LeadCTACardProps = {
  variant: 'inline' | 'sidebar' | 'block';
  title: string;
  subtitle: string;
  ctaLabel?: string;
  trustBullets?: string[];
};

export default function LeadCTACard({
  variant,
  title,
  subtitle,
  ctaLabel = 'Jetzt prüfen →',
  trustBullets,
}: LeadCTACardProps) {
  if (variant === 'inline') {
    return (
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-primary-50 border border-primary-100 rounded-xl px-5 py-4 my-6">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-ink">{title}</p>
          <p className="text-xs text-ink-muted mt-0.5">{subtitle}</p>
        </div>
        <Link
          href="/einspruch-pruefen"
          className="shrink-0 inline-flex items-center px-4 py-2 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-800 transition-colors"
        >
          {ctaLabel}
        </Link>
      </div>
    );
  }

  if (variant === 'sidebar') {
    return (
      <div className="bg-primary-50 border border-primary-100 rounded-xl p-5">
        <p className="text-sm font-medium text-ink mb-1">{title}</p>
        <p className="text-xs text-ink-muted mb-3">{subtitle}</p>
        {trustBullets && trustBullets.length > 0 && (
          <ul className="space-y-1.5 mb-3">
            {trustBullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-xs text-ink-muted">
                <span className="text-success-600 mt-0.5">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
        <Link
          href="/einspruch-pruefen"
          className="block text-center py-2.5 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-800 transition-colors"
        >
          {ctaLabel}
        </Link>
      </div>
    );
  }

  // variant === 'block'
  return (
    <div className={cn(
      'bg-primary-50 border border-primary-100 rounded-xl p-6 md:p-8 my-8 text-center'
    )}>
      <p className="text-[10px] uppercase tracking-wider font-semibold text-primary-800 mb-2">
        Einspruch-Check
      </p>
      <h3 className="text-lg font-medium text-ink mb-1">{title}</h3>
      <p className="text-sm text-ink-muted mb-4 max-w-md mx-auto">{subtitle}</p>
      <div className="flex justify-center gap-6 mb-5 text-xs text-ink-muted">
        <span>60s Online-Check</span>
        <span>0 € mit Rechtsschutz</span>
        <span>14 Tage Frist beachten</span>
      </div>
      <Link
        href="/einspruch-pruefen"
        className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-800 transition-colors"
      >
        {ctaLabel}
      </Link>
      {trustBullets && trustBullets.length > 0 && (
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {trustBullets.map((b) => (
            <span key={b} className="text-xs text-ink-muted">✓ {b}</span>
          ))}
        </div>
      )}
    </div>
  );
}
