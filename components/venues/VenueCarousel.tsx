'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { VenueCard, type Venue } from '@/components/venues/VenueCard';
import { Button } from '@/components/ui/button';

interface VenueCarouselProps {
  venues: Venue[];
}

export function VenueCarousel({ venues }: VenueCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [venuesPerView, setVenuesPerView] = useState(3);

  // Responsive venues per view
  useEffect(() => {
    const updateVenuesPerView = () => {
      if (window.innerWidth < 640) {
        setVenuesPerView(1);
      } else if (window.innerWidth < 1024) {
        setVenuesPerView(2);
      } else {
        setVenuesPerView(3);
      }
    };

    updateVenuesPerView();
    window.addEventListener('resize', updateVenuesPerView);
    return () => window.removeEventListener('resize', updateVenuesPerView);
  }, []);

  if (venues.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No venues found for the selected location.</p>
      </div>
    );
  }

  const totalSlides = Math.ceil(venues.length / venuesPerView);
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < totalSlides - 1;

  const goToPrevious = () => {
    if (canGoPrev) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (canGoNext) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getVisibleVenues = () => {
    const start = currentIndex * venuesPerView;
    const end = start + venuesPerView;
    return venues.slice(start, end);
  };

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div 
              key={slideIndex} 
              className="w-full flex-shrink-0 px-1"
            >
              <div className={`grid gap-6 ${
                venuesPerView === 1 ? 'grid-cols-1' :
                venuesPerView === 2 ? 'grid-cols-2' :
                'grid-cols-3'
              }`}>
                {venues
                  .slice(slideIndex * venuesPerView, (slideIndex + 1) * venuesPerView)
                  .map((venue, venueIndex) => (
                    <div
                      key={venue.id}
                      className="transform transition-all duration-500 ease-in-out"
                      style={{
                        animationDelay: `${(slideIndex * venuesPerView + venueIndex) * 100}ms`
                      }}
                    >
                      <VenueCard venue={venue} />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      {totalSlides > 1 && (
        <>
          {/* Previous Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            disabled={!canGoPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-white/90 backdrop-blur-sm border-stone-200 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous venues"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {/* Next Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            disabled={!canGoNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-white/90 backdrop-blur-sm border-stone-200 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next venues"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-village-venues w-8'
                    : 'bg-stone-300 hover:bg-stone-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {/* Venue Count */}
      <div className="text-center mt-4 text-sm text-muted-foreground">
        Showing {getVisibleVenues().length} of {venues.length} venues
      </div>
    </div>
  );
}
