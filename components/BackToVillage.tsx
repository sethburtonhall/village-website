import Link from 'next/link';
import { ClipboardListIcon } from 'lucide-react';

export function BackToVillage() {
  return (
    <Link
      href="/"
      className="flex items-center gap-1 text-sm font-semibold text-village-brand transition-opacity hover:opacity-70"
    >
      <ClipboardListIcon className="h-4 w-4" />
      Back to Village
    </Link>
  );
}
