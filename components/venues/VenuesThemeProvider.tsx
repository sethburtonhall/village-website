'use client';

import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';

export function VenuesThemeProvider({ children }: { children: React.ReactNode }) {
  // When navigating away from venues, remove the dark class so the home
  // page (which has no ThemeProvider of its own) is never left in dark mode.
  useEffect(() => {
    return () => {
      document.documentElement.classList.remove('dark');
    };
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="venues-theme"
    >
      {children}
    </ThemeProvider>
  );
}
