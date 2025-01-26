import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import { Button } from '@/components/ui/button';

import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative min-h-screen">
      <Image src="/not-found.jpg" alt="404" fill className="object-cover brightness-50" priority />

      <div className="relative flex min-h-screen flex-col">
        <Header className="bg-white" />
        <main className="flex flex-1 flex-col items-center justify-center space-y-4 text-white">
          <span className="text-xl font-bold text-primary-600">404</span>
          <h1 className="text-7xl">Not Found</h1>
          <p className="text-white/70">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <Button
            variant="ghost"
            size="lg"
            className="group text-white hover:bg-transparent hover:text-white"
          >
            <ArrowLeft className="mr-2 size-4 transition-transform group-hover:-translate-x-1" />
            <Link href="/">Back Home</Link>
          </Button>
        </main>
        <Footer />
      </div>

      <div className="absolute bottom-4 right-4 text-xs text-white/70">
        Photo by{' '}
        <a
          href="https://unsplash.com/@vorosbenisop?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          className="hover:text-white"
        >
          Benjamin Voros
        </a>{' '}
        on{' '}
        <a
          href="https://unsplash.com/photos/snow-mountain-under-stars-phIFdC6lA4E?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          className="hover:text-white"
        >
          Unsplash
        </a>
      </div>
    </div>
  );
}
