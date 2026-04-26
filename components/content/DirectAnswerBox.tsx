type DirectAnswerBoxProps = {
  children: React.ReactNode;
};

export default function DirectAnswerBox({ children }: DirectAnswerBoxProps) {
  return (
    <div className="bg-primary-50 border-l-4 border-primary-600 px-[18px] py-[14px] rounded-r-lg mb-6">
      <p className="text-[10px] uppercase tracking-wider font-semibold text-primary-800 mb-1.5">
        Direktantwort
      </p>
      <div className="text-sm leading-relaxed text-ink">{children}</div>
    </div>
  );
}
