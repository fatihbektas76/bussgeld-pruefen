type FAQItem = {
  q: string;
  a: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
  defaultOpen?: number;
};

export default function FAQAccordion({ items, defaultOpen = 0 }: FAQAccordionProps) {
  return (
    <div className="my-8">
      <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-4">Häufige Fragen</h2>
      <div className="divide-y divide-line border border-line rounded-xl overflow-hidden">
        {items.map((item, i) => (
          <details
            key={item.q}
            {...(i === defaultOpen ? { open: true } : {})}
            className="group"
          >
            <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer text-sm font-medium text-ink hover:bg-surface-alt transition-colors list-none [&::-webkit-details-marker]:hidden">
              <span>{item.q}</span>
              <svg
                className="shrink-0 w-4 h-4 text-ink-subtle transition-transform group-open:rotate-180"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 6l4 4 4-4" />
              </svg>
            </summary>
            <div className="px-5 pb-4 text-sm leading-relaxed text-ink-muted">
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
