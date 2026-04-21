'use client';

import Link from 'next/link';
import { useUser, useClerk } from '@clerk/nextjs';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { Building2, ClipboardList, RadioTower } from 'lucide-react';
import { MobileNav } from '@/components/MobileNav';

export function Header({ className }: { className?: string }) {
  const { isSignedIn, isLoaded } = useUser();
  const { signOut } = useClerk();

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-stone-200 bg-white/80 backdrop-blur-sm',
        className
      )}
    >
      {/* Green accent bar */}
      <div className="h-1 bg-primary-600" />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="group flex items-center gap-1.5">
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

        {/* Nav */}
        <nav className="flex items-center gap-5 text-base font-semibold">
          {/* Anchor links — hidden on small screens */}
          <Link
            href="#how-it-works"
            className="hidden text-sm font-medium text-stone-500 transition-colors hover:text-foreground lg:block"
          >
            How it works
          </Link>
          <Link
            href="#features"
            className="hidden text-sm font-medium text-stone-500 transition-colors hover:text-foreground lg:block"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="hidden text-sm font-medium text-stone-500 transition-colors hover:text-foreground lg:block"
          >
            Pricing
          </Link>

          <div className="hidden h-4 w-px bg-stone-200 lg:block" />

          {/* Product links — desktop only */}
          <div className="hidden items-center gap-2 lg:flex">
            <Building2 className="size-4 text-village-venues" />
            <Link
              href="/venues"
              className="text-village-venues transition-opacity hover:opacity-70"
            >
              Venues
            </Link>
          </div>
          <div className="hidden items-center gap-2 lg:flex">
            <RadioTower className="size-4 text-village-live" />
            <Link href="/live" className="text-village-live transition-opacity hover:opacity-70">
              Live
            </Link>
            <Separator orientation="vertical" className="ml-3 h-6" />
          </div>

          {isLoaded ? (
            isSignedIn ? (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-sm hover:no-underline"
                  onClick={() => signOut()}
                >
                  Sign out
                </Button>
                <Button size="sm" className="text-sm hover:no-underline" asChild>
                  <a href={process.env.NEXT_PUBLIC_APP_URL}>Dashboard</a>
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm" className="text-sm hover:no-underline" asChild>
                  <a href={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}>Login</a>
                </Button>
                <Button variant="success" size="sm" className="text-sm" asChild>
                  <a href="https://app.usevillage.app/register/beta">Sign Up</a>
                </Button>
              </>
            )
          ) : (
            <div className="flex items-center gap-4">
              <Skeleton className="h-9 w-[74px] rounded-md" />
              <Skeleton className="h-9 w-[91px] rounded-md" />
            </div>
          )}

          {/* Mobile hamburger */}
          <MobileNav />
        </nav>
      </div>
    </header>
  );
}
