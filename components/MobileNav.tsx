'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, Building2, RadioTower } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const NAV_LINKS = [
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/#features', label: 'Features' },
  { href: '/#pricing', label: 'Pricing' },
];

const PRODUCT_LINKS = [
  { href: '/venues', label: 'Venues', color: 'text-village-venues', Icon: Building2 },
  { href: '/live', label: 'Live', color: 'text-village-live', Icon: RadioTower },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="flex items-center justify-center rounded-md p-2 text-stone-500 hover:text-foreground lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-64 p-0">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="border-b px-6 py-4">
            <span className="font-logo text-lg font-extrabold">Menu</span>
          </div>

          {/* Page links */}
          <nav className="flex flex-col gap-1 px-4 pt-4">
            <p className="px-2 pb-1 text-xs font-semibold uppercase tracking-wider text-stone-400">
              Village
            </p>
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-stone-600 hover:bg-stone-100 hover:text-foreground"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="mx-4 my-4 h-px bg-stone-200" />

          {/* Product links */}
          <nav className="flex flex-col gap-1 px-4">
            <p className="px-2 pb-1 text-xs font-semibold uppercase tracking-wider text-stone-400">
              Products
            </p>
            {PRODUCT_LINKS.map(({ href, label, color, Icon }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-md px-2 py-2 text-sm font-medium hover:bg-stone-100"
              >
                <Icon className={`size-4 ${color}`} />
                <span className={color}>{label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
