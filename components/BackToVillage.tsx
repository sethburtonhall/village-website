import Link from 'next/link';
import { MoveLeft } from 'lucide-react';

export function BackToVillage() {
  return (
    <Link
      href="/"
      className="text-village-brand flex items-center gap-1 text-sm font-semibold transition-opacity hover:opacity-70"
    >
      <MoveLeft className="h-4 w-4" />
      Village
    </Link>
  );
}
