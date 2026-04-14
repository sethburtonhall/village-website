'use client';

import React from 'react';
import { VenueError } from './VenueError';

interface State {
  hasError: boolean;
}

export class VenueDirectoryBoundary extends React.Component<{ children: React.ReactNode }, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('VenueDirectory rendering error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section
          className="bg-transparent"
          id="venue-directory"
        >
          <div className="container mx-auto max-w-6xl">
            <VenueError
              message="Something went wrong loading the venue directory."
              onRetry={() => this.setState({ hasError: false })}
            />
          </div>
        </section>
      );
    }
    return this.props.children;
  }
}
