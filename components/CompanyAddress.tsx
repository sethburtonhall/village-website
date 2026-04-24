interface CompanyAddressProps {
  className?: string;
}

export function CompanyAddress({ className = '' }: CompanyAddressProps) {
  return (
    <address
      className={`mt-4 border-t border-stone-200 pt-4 text-sm leading-relaxed text-stone-500 ${className}`}
    >
      <div className="space-y-1">
        <div className="font-medium text-stone-600">Roadshow Creative</div>
        <div className="text-stone-500">519 N Nevada St., Apt D</div>
        <div className="text-stone-500">Oceanside, CA 92054</div>
        <div className="text-stone-500">United States</div>
      </div>
    </address>
  );
}
