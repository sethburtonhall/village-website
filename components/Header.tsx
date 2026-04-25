'use client';

import Link from 'next/link';
import { useUser, useClerk } from '@clerk/nextjs';
import { useState } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import {
  ArrowRight,
  Building2,
  ClipboardList,
  Loader2,
  LogOut,
  LogIn,
  RadioTower,
  UserPlus,
} from 'lucide-react';
import { MobileNav } from '@/components/MobileNav';
import { getAppUrl, getSignUpUrl, getSignInUrl } from '@/lib/app-urls';

export function Header({ className }: { className?: string }) {
  const { isSignedIn, isLoaded } = useUser();
  const { signOut } = useClerk();
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    try {
      await signOut();
    } catch (error) {
      console.error('Sign out error:', error);
    } finally {
      setIsSigningOut(false);
    }
  };

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
            className="hidden font-medium text-stone-500 transition-colors hover:text-foreground lg:block"
          >
            How it works
          </Link>
          <Link
            href="#features"
            className="hidden font-medium text-stone-500 transition-colors hover:text-foreground lg:block"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="hidden font-medium text-stone-500 transition-colors hover:text-foreground lg:block"
          >
            Pricing
          </Link>

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
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-sm hover:no-underline"
                  onClick={handleSignOut}
                  disabled={isSigningOut}
                >
                  {isSigningOut ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      <span className="ml-2 hidden md:inline">Signing out...</span>
                    </>
                  ) : (
                    <>
                      <span className="hidden md:inline">Sign out</span>
                      <LogOut className="size-4 md:hidden" />
                    </>
                  )}
                </Button>
                <Button size="sm" className="text-sm hover:no-underline" asChild>
                  <a href={getAppUrl()} className="flex items-center">
                    Go to app
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="text-sm hover:no-underline" asChild>
                  <a href={getSignInUrl()}>
                    <span className="hidden md:inline">Login</span>
                    <LogIn className="size-4 md:hidden" />
                  </a>
                </Button>
                <Button variant="success" size="sm" className="text-sm" asChild>
                  <a href={getSignUpUrl()} className="flex items-center">
                    Get Started
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              </div>
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
