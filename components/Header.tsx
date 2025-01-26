import Link from 'next/link';

import { cn } from '@/lib/utils';

// import { Button } from '@/components/ui/button';
// import { ArrowRight} from 'lucide-react';
import { ClipboardList } from 'lucide-react';

export function Header({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full border-b border-stone-200 bg-white/80 backdrop-blur-sm',
        className
      )}
    >
      <div className="container mx-auto flex justify-between px-4 py-4">
        <div className="group flex items-center gap-1">
          <ClipboardList
            className="size-8 -rotate-3 text-primary-600 group-hover:rotate-0"
            strokeWidth={2}
          />
          <h1
            id="logo"
            className="cursor-default font-logo text-3xl font-extrabold text-foreground"
          >
            <Link href="/">VillagL</Link>
          </h1>
        </div>
        {/* <div className="flex items-center justify-center gap-4">
          <Button variant="link" className="hover:no-underline">
            <a href="https://app.usevillage.app/login">Login</a>
          </Button>
          <Button variant="success">
            <a href="https://app.usevillage.app/login">Sign Up</a>
          </Button>
        </div> */}
      </div>
    </header>
  );
}
