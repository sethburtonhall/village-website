import Link from 'next/link';
import { ClipboardListIcon } from 'lucide-react';

export function BackToVillage() {
  return (
    <Link
      href="/"
      className="text-md flex items-center gap-1 font-semibold text-village-brand transition-opacity hover:opacity-70"
    >
      <ClipboardListIcon className="h-4 w-4" />
      Village
    </Link>
  );
}
