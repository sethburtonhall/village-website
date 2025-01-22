import { ClipboardList } from 'lucide-react';

export function UseCases() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center">Designed for a variety of use cases</h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div className="stack items-center">
            <ClipboardList className="size-10 text-primary-600" />
            <h1>Nonprofits</h1>
          </div>

          <div className="stack items-center">
            <ClipboardList className="size-10 text-primary-600" />
            <h1>Churches</h1>
          </div>

          <div className="stack items-center">
            <ClipboardList className="size-10 text-primary-600" />
            <h1>Schools</h1>
          </div>

          <div className="stack items-center">
            <ClipboardList className="size-10 text-primary-600" />
            <h1>Sports Teams</h1>
          </div>

          <div className="stack items-center">
            <ClipboardList className="size-10 text-primary-600" />
            <h1>Workplace</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
