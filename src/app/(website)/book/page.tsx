import React from 'react';
import { BookingFlow } from '@/components/booking/booking-flow';

export default function BookPage() {
  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-8">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
        <span className="text-xs md:text-sm font-sans font-semibold text-warm-coral uppercase tracking-widest">
          Schedule Session
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-deep-violet">
          Book a therapy session
        </h1>
        <p className="text-sm md:text-base text-muted-text font-light leading-relaxed">
          Select your session preference type, pick a calendar date, and complete details below to reserve your slot instantly.
        </p>
      </div>

      <BookingFlow />

    </div>
  );
}
