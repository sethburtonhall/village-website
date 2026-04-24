interface EffectiveDateProps {
  className?: string;
}

export function EffectiveDate({ className = '' }: EffectiveDateProps) {
  // Set this date when you update legal documents
  const effectiveDate = 'April 24, 2026';

  return (
    <p className={`mb-10 text-sm italic text-stone-400 ${className}`}>
      Effective date: {effectiveDate}
    </p>
  );
}
