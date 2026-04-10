import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

type NativeSelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          className={cn(
            'flex h-9 w-full appearance-none rounded-md border border-stone-200 bg-white px-3 py-1 pr-10 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-stone-500 focus-visible:border-village-venues focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-village-venues disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500" />
      </div>
    );
  }
);
NativeSelect.displayName = 'NativeSelect';

type NativeSelectOptionProps = React.OptionHTMLAttributes<HTMLOptionElement>;

const NativeSelectOption = React.forwardRef<HTMLOptionElement, NativeSelectOptionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <option className={cn(className)} ref={ref} {...props}>
        {children}
      </option>
    );
  }
);
NativeSelectOption.displayName = 'NativeSelectOption';

type NativeSelectOptGroupProps = React.OptgroupHTMLAttributes<HTMLOptGroupElement>;

const NativeSelectOptGroup = React.forwardRef<HTMLOptGroupElement, NativeSelectOptGroupProps>(
  ({ children, ...props }, ref) => {
    return (
      <optgroup ref={ref} {...props}>
        {children}
      </optgroup>
    );
  }
);
NativeSelectOptGroup.displayName = 'NativeSelectOptGroup';

export { NativeSelect, NativeSelectOption, NativeSelectOptGroup };
