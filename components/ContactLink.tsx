'use client';

interface ContactLinkProps {
  children?: React.ReactNode;
  className?: string;
}

export function ContactLink({ children = 'Contact us', className = '' }: ContactLinkProps) {
  const email = ['support', 'usevillage.app'].join('@');

  return (
    <a
      href={`mailto:${email}`}
      className={className || 'font-semibold text-primary-600 hover:underline'}
    >
      {children}
    </a>
  );
}
