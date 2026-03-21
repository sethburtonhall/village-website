import Link from 'next/link';

import { ClipboardList } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-5 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="group flex items-center gap-2">
              <ClipboardList
                className="size-7 -rotate-3 text-primary-600 transition-transform group-hover:rotate-0"
                strokeWidth={2}
              />
              <h1 className="font-logo text-2xl text-foreground">
                <Link href="/">Village</Link>
              </h1>
            </div>
            <p className="mt-4 text-stone-600">
              Group Sign-ups Made Simple and 🎉{' '}
              <span className="gradiant-text font-medium">Fun!.</span>
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 font-semibold text-stone-900">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-stone-500 transition-colors hover:text-primary-600"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="mb-4 font-semibold text-stone-900">Support</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://docs.usevillage.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-stone-500 transition-colors hover:text-primary-600"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@usevillage.app"
                  className="text-sm text-stone-500 transition-colors hover:text-primary-600"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="mb-4 font-semibold text-stone-900">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-stone-500 transition-colors hover:text-primary-600"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-stone-500 transition-colors hover:text-primary-600"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-stone-200 pt-8 text-center md:text-right">
          <p className="text-sm text-stone-500">
            &copy; {new Date().getFullYear()}{' '}
            <a
              href="https://www.roadshowcreative.dev/"
              className="text-primary-600 transition-colors hover:underline"
            >
              Roadshow Creative LLC
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
