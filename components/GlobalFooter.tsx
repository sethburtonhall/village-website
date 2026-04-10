import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GlobalFooterProps {
  brandName: string;
  icon: LucideIcon;
  brandColor: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
}

export function GlobalFooter({
  brandName,
  icon: Icon,
  brandColor,
  backgroundColor = 'bg-white',
  borderColor = 'border-stone-200',
  textColor = 'text-muted-foreground',
}: GlobalFooterProps) {
  return (
    <footer
      className={`border-t ${borderColor} ${backgroundColor} py-8 dark:border-stone-800 dark:bg-stone-950`}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className={`flex items-center gap-1.5 text-sm ${textColor}`}>
          <Icon className={`size-4 ${brandColor}`} />
          <span>{brandName}</span>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()}{' '}
          <Link
            href="https://www.roadshowcreative.dev/"
            className={cn(`${brandColor}`, 'font-medium transition-colors hover:underline')}
          >
            Roadshow Creative
          </Link>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
