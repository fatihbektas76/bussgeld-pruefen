import Link from 'next/link';

type RelatedLinksProps = {
  title?: string;
  items: { label: string; href: string }[];
};

export default function RelatedLinks({ title = 'Verwandte Themen', items }: RelatedLinksProps) {
  return (
    <div className="my-8">
      <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-line bg-surface text-sm text-ink-muted hover:text-ink hover:border-line-strong transition-colors"
          >
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
