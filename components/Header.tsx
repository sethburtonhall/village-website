import { ClipboardList } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-stone-200 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-2">
          <ClipboardList className="size-8 text-primary-600" />
          <h1 className="font-logo text-primary-600">Village</h1>
        </div>
      </div>
    </header>
  );
}
