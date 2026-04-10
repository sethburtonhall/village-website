import Link from 'next/link';
import { MapPinned } from 'lucide-react';
import { BackToVillage } from '../BackToVillage';

export function VenuesHeader() {
  return (
    <div className="sticky top-0 z-50">
      {/* Orange accent bar */}
      <div className="h-1 bg-village-venues" />

      <header className="border-b border-stone-200/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Brand lockup */}
          <div className="flex items-center gap-1.5">
            <div className="flex items-center justify-center">
              <MapPinned className="size-8 text-village-venues" />
            </div>
            <Link href="/venues">
              <span className="flex items-center gap-1 text-3xl leading-none">
                <span className="font-logo font-extrabold text-foreground">Village</span>
                <span
                  className="text-3xl font-semibold italic text-village-venues"
                  style={{ fontFamily: 'var(--font-venues-lora), serif' }}
                >
                  Venues
                </span>
              </span>
            </Link>
          </div>

          <BackToVillage />
        </div>
      </header>
    </div>
  );
}
