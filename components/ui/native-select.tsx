import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

type NativeSelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  ref?: React.Ref<HTMLSelectElement>;
};

function NativeSelect({ className, children, ref, ...props }: NativeSelectProps) {
  return (
    <div className="relative">
      <select
        ref={ref}
        className={cn(
          'flex h-9 w-full appearance-none rounded-md border border-input bg-background px-3 py-1 pr-10 text-sm text-foreground shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:border-village-venues focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
    </div>
  );
}
NativeSelect.displayName = 'NativeSelect';

type NativeSelectOptionProps = React.OptionHTMLAttributes<HTMLOptionElement> & {
  ref?: React.Ref<HTMLOptionElement>;
};

function NativeSelectOption({ className, children, ref, ...props }: NativeSelectOptionProps) {
  return (
    <option ref={ref} className={cn(className)} {...props}>
      {children}
    </option>
  );
}
NativeSelectOption.displayName = 'NativeSelectOption';

type NativeSelectOptGroupProps = React.OptgroupHTMLAttributes<HTMLOptGroupElement> & {
  ref?: React.Ref<HTMLOptGroupElement>;
};

function NativeSelectOptGroup({ children, ref, ...props }: NativeSelectOptGroupProps) {
  return (
    <optgroup ref={ref} {...props}>
      {children}
    </optgroup>
  );
}
NativeSelectOptGroup.displayName = 'NativeSelectOptGroup';

export { NativeSelect, NativeSelectOption, NativeSelectOptGroup };
