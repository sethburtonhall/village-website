'use client';

import Link from 'next/link';
import { useUser, UserButton } from '@clerk/nextjs';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ClipboardList } from 'lucide-react';

export function Header({ className }: { className?: string }) {
  const { isSignedIn, isLoaded } = useUser();

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
            <Link href="/">Village</Link>
          </h1>
        </div>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://docs.usevillage.app"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Docs
          </a>
          {isLoaded && (
            isSignedIn ? (
              <UserButton />
            ) : (
              <>
                <Button variant="link" className="hover:no-underline" asChild>
                  <a href={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}>Login</a>
                </Button>
                <Button variant="success" asChild>
                  <a href="https://app.usevillage.app/register/beta">Sign Up</a>
                </Button>
              </>
            )
          )}
        </div>
      </div>
    </header>
  );
}
