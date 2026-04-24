interface CompanyAddressProps {
  className?: string;
}

export function CompanyAddress({ className = '' }: CompanyAddressProps) {
  return (
    <address className={`text-sm not-italic leading-relaxed text-stone-500 ${className}`}>
      Roadshow Creative
      <br />
      519 N Nevada St., Apt D<br />
      Oceanside, CA 92054
      <br />
      United States
    </address>
  );
}
