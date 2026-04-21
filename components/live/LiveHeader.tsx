import Link from 'next/link';
import { RadioTower } from 'lucide-react';
import { BackToVillage } from '../BackToVillage';

export function LiveHeader() {
  return (
    <>
      {/* Top brand bar */}
      <div className="h-1 bg-village-live" />

      {/* Note: using sticky here so it anchors below the brand bar */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 pt-[18px]">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center">
              <RadioTower className="size-7 text-village-live" />
            </div>
            <Link href="/live">
              <span className="flex items-center gap-1.5 text-3xl leading-none">
                <span className="font-logo font-extrabold text-white">Village</span>
                <span
                  className="font-bold uppercase text-village-live/80"
                  style={{ fontFamily: 'var(--font-mono-brand), monospace' }}
                >
                  Live
                </span>
              </span>
            </Link>
          </div>

          <BackToVillage />
        </div>
      </header>
    </>
  );
}
