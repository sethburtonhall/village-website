'use client';

import Link from 'next/link';
import { useUser, UserButton } from '@clerk/nextjs';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
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
          <div className="flex items-center gap-0">
            <Button variant="ghost" className="text-md hover:no-underline" asChild>
              <a href="https://docs.usevillage.app" className="hover:no-underline">
                Docs
              </a>
            </Button>
            <Button variant="ghost" className="text-md hover:no-underline" asChild>
              <a href="#pricing" className="hover:no-underline">
                Pricing
              </a>
            </Button>
          </div>
          <Separator orientation="vertical" className="h-6" />
          {isLoaded ? (
            isSignedIn ? (
              <div className="ml-3">
                <UserButton />
              </div>
            ) : (
              <>
                <Button variant="ghost" className="text-md hover:no-underline" asChild>
                  <a href={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}>Login</a>
                </Button>
                <Button variant="success" className="text-md" asChild>
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
        </div>
      </div>
    </header>
  );
}
