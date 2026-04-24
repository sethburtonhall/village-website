import Link from 'next/link';

import { ClipboardList } from 'lucide-react';
import { VillageFooter } from './village/VillageFooter';
import { ContactLink } from './ContactLink';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  hoverColor?: 'primary' | 'live' | 'venues';
  external?: boolean;
  className?: string;
}

function FooterLink({
  href,
  children,
  hoverColor = 'primary',
  external = false,
  className = '',
}: FooterLinkProps) {
  const hoverColors = {
    primary: 'hover:text-primary-600',
    live: 'hover:text-village-live',
    venues: 'hover:text-village-venues',
  };

  const linkClass = `text-sm text-stone-500 transition-colors ${hoverColors[hoverColor]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={linkClass}>
      {children}
    </Link>
  );
}

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div>
      <h3 className="mb-4 font-semibold text-stone-900">{title}</h3>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

interface LinkItem {
  label: string;
  href: string;
  hoverColor?: 'primary' | 'live' | 'venues';
  external?: boolean;
  custom?: boolean;
  className?: string;
}

const footerSections: Array<{
  title: string;
  links: LinkItem[];
}> = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Village Live', href: '/live', hoverColor: 'live' },
      { label: 'Village Venues', href: '/venues', hoverColor: 'venues' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: 'https://docs.usevillage.app', external: true },
      {
        label: 'Contact Us',
        href: 'contact',
        custom: true,
        className: 'text-sm text-stone-500 transition-colors hover:text-primary-600',
      },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-white px-4 py-16 pb-0">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 pb-6 md:grid-cols-5 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="group flex items-center gap-2">
              <ClipboardList
                className="size-7 -rotate-3 text-primary-600 transition-transform group-hover:rotate-0"
                strokeWidth={2}
              />
              <h1 className="font-logo text-2xl text-foreground">
                <Link href="/">Village</Link>
              </h1>
            </div>
            <p className="mt-4 text-stone-600">
              Group Sign-ups Made Simple and 🎉{' '}
              <span className="gradient-text font-medium">Fun!.</span>
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <FooterSection key={section.title} title={section.title}>
              {section.links.map((link) => (
                <li key={link.label}>
                  {link.custom ? (
                    <ContactLink className={link.className}>{link.label}</ContactLink>
                  ) : (
                    <FooterLink
                      href={link.href}
                      hoverColor={link.hoverColor}
                      external={link.external}
                      className={link.className}
                    >
                      {link.label}
                    </FooterLink>
                  )}
                </li>
              ))}
            </FooterSection>
          ))}
        </div>

        <VillageFooter />
      </div>
    </footer>
  );
}
