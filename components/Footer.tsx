import { ClipboardList } from 'lucide-react';

export function Footer() {
  return (
    <footer className="px-4 py-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="stack !gap-2">
            <div className="flex items-center gap-1">
              <ClipboardList className="size-6 text-primary-600" />
              <h1 className="font-logo text-2xl text-primary-600">Village</h1>
            </div>
            <p>Group Sign-ups Made Simple.</p>
          </div>
          <div className="self-end text-right text-stone-500">
            <p className="text-primary-600">hello@usevillage.app</p>

            <p>&copy; {new Date().getFullYear()} Roadshow Creative. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
