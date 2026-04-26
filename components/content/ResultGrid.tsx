import { cn } from '@/lib/cn';

type ResultItem = {
  label: string;
  value: string;
  tone?: 'default' | 'success' | 'warning' | 'danger';
};

type ResultGridProps = {
  items: ResultItem[];
};

const toneStyles = {
  default: 'bg-surface-alt text-ink',
  success: 'bg-success-50 text-success-800',
  warning: 'bg-warning-50 text-warning-800',
  danger: 'bg-danger-50 text-danger-800',
};

const valueStyles = {
  default: 'text-primary-600',
  success: 'text-success-600',
  warning: 'text-warning-600',
  danger: 'text-danger-600',
};

export default function ResultGrid({ items }: ResultGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
      {items.map((item) => {
        const tone = item.tone ?? 'default';
        return (
          <div
            key={item.label}
            className={cn(
              'rounded-lg px-4 py-3.5 text-center',
              toneStyles[tone]
            )}
          >
            <p className={cn('text-[22px] font-medium', valueStyles[tone])}>
              {item.value}
            </p>
            <p className="text-[11px] text-ink-muted mt-0.5">{item.label}</p>
          </div>
        );
      })}
    </div>
  );
}
