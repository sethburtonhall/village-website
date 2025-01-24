import { ClipboardList } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-stone-200 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-1">
          <ClipboardList className="size-8 -rotate-3 text-primary-600" strokeWidth={2} />
          <h1
            id="logo"
            className="cursor-default font-logo text-2xl font-extrabold text-foreground md:text-3xl"
          >
            Village
          </h1>
        </div>
      </div>
    </header>
  );
}
