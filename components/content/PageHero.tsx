type PageHeroProps = {
  category?: string;
  title: string;
  updatedAt?: string;
  reviewedBy?: string;
};

export default function PageHero({ category, title, updatedAt, reviewedBy }: PageHeroProps) {
  return (
    <div className="mb-6">
      {category && (
        <span className="inline-block mb-3 px-3 py-1 rounded-full bg-primary-50 text-primary-800 text-[11px] font-medium uppercase tracking-wide">
          {category}
        </span>
      )}
      <h1 className="text-[28px] leading-[1.25] font-medium text-ink">{title}</h1>
      {(updatedAt || reviewedBy) && (
        <p className="mt-2 text-sm text-ink-muted">
          {updatedAt && <>Aktualisiert {updatedAt}</>}
          {updatedAt && reviewedBy && <> · </>}
          {reviewedBy && <>Geprüft von {reviewedBy}</>}
        </p>
      )}
    </div>
  );
}
