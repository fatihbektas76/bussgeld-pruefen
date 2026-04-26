type AuthorBoxProps = {
  name: string;
  title: string;
  brakNr?: string;
  firm?: string;
  reviewedAt: string;
  experience?: string;
};

export default function AuthorBox({
  name,
  title,
  brakNr,
  firm,
  reviewedAt,
  experience,
}: AuthorBoxProps) {
  const initials = name
    .split(' ')
    .filter((p) => p.length > 1)
    .map((p) => p[0])
    .join('')
    .slice(0, 2);

  return (
    <div className="flex items-start gap-4 bg-surface border border-line rounded-xl p-5 my-8">
      <div className="shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-primary-50 text-primary-800 text-sm font-semibold">
        {initials}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-medium text-ink">{name}</p>
        <p className="text-xs text-ink-muted">
          {title}{brakNr ? ` · BRAK ${brakNr}` : ''}
        </p>
        {firm && <p className="text-xs text-ink-muted">{firm}</p>}
        {experience && (
          <p className="text-xs text-ink-subtle mt-1">{experience}</p>
        )}
        <p className="text-xs text-ink-subtle mt-1">Zuletzt geprüft: {reviewedAt}</p>
      </div>
    </div>
  );
}
