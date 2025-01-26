import { ClipboardList } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white px-4 py-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-2">
          <div className="stack !gap-2">
            <div className="group flex items-center gap-1">
              <ClipboardList
                className="size-7 -rotate-3 text-primary-600 group-hover:rotate-0"
                strokeWidth={2}
              />
              <h1 className="font-logo text-2xl text-foreground">
                <a href="/">Village</a>
              </h1>
            </div>
            <p>Group Sign-ups Made Simple.</p>
          </div>
          <div className="stack !gap-2 text-stone-500 md:items-end">
            <p className="font-medium text-primary-600">hello@usevillage.app</p>

            <p className="text-sm">
              &copy; {new Date().getFullYear()} Roadshow Creative. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
