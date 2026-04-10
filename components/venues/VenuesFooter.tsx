import Link from 'next/link';
import { MapPinned } from 'lucide-react';

export function VenuesFooter() {
  return (
    <footer className="border-t border-stone-200 bg-white px-6 py-8 dark:border-stone-800 dark:bg-stone-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPinned className="size-4 text-village-venues" />
          <span>Village Venues</span>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()}{' '}
          <Link
            href="https://www.roadshowcreative.dev/"
            className="text-[#F5A524] transition-colors hover:underline"
          >
            Roadshow Creative
          </Link>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
