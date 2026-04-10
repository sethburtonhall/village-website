import Link from 'next/link';
import { RadioTower } from 'lucide-react';

export function LiveFooter() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a] p-12 py-8 text-white/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <RadioTower className="size-4 text-village-live" />
          <span>Village Live</span>
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
