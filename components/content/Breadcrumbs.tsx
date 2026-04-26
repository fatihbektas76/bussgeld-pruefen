import Link from 'next/link';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <>
      <BreadcrumbSchema items={items} />
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex flex-wrap items-center gap-1 text-xs text-ink-muted">
          {items.map((item, i) => (
            <li key={item.label} className="flex items-center gap-1">
              {i > 0 && <span className="text-ink-subtle">›</span>}
              {item.href && i < items.length - 1 ? (
                <Link href={item.href} className="hover:text-ink transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-ink-subtle">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
