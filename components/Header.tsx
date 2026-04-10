import Link from 'next/link';

import { cn } from '@/lib/utils';
import { ClipboardList } from 'lucide-react';

export function Header({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-stone-200 bg-white/80 backdrop-blur-sm',
        className
      )}
    >
      {/* Green accent bar */}
      <div className="h-1 bg-primary-600" />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="group flex items-center gap-1">
          <ClipboardList
            className="size-8 -rotate-3 text-primary-600 group-hover:rotate-0"
            strokeWidth={2}
          />
          <h1
            id="logo"
            className="cursor-default font-logo text-3xl font-extrabold text-foreground"
          >
            <Link href="/">Village</Link>
          </h1>
        </div>
        {/* Nav */}
        <nav className="flex items-center gap-5 text-base font-semibold">
          <Link href="/live" className="text-village-live transition-opacity hover:opacity-70">
            Live
          </Link>
          <Link href="/venues" className="text-village-venues transition-opacity hover:opacity-70">
            Venues
          </Link>
        </nav>
      </div>
    </header>
  );
}
