import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative bg-deep-violet text-soft-ivory overflow-hidden pt-12 pb-24 md:py-32 rounded-b-[40px] md:rounded-b-[64px]">
      
      {/* Decorative ambient background blur lights */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-warm-coral/10 blur-[80px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-warm-sand/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
          
          {/* Left Columns: Text content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-8">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-soft-ivory/10 rounded-full border border-soft-ivory/10 text-xs md:text-sm tracking-wider uppercase text-warm-sand">
              <span className="w-1.5 h-1.5 rounded-full bg-warm-coral" />
              Dr. AVANI RATAN | Clinical Psychologist
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-white">
              You’ve spent years trying to make sense of yourself. <br />
              It’s time to <span className="italic font-normal text-warm-coral">understand what’s really going on</span>.
            </h1>

            <p className="font-sans text-lg md:text-xl text-soft-ivory/80 font-light max-w-2xl leading-relaxed">
              Anxiety, OCD, ADHD, Depression, and Relationship Patterns can leave you questioning yourself. Real change begins when we understand the patterns beneath what we experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button href="/book" variant="primary" size="lg" className="w-full sm:w-auto shadow-md">
                Book an Appointment
              </Button>
              <Button href="/about" variant="outline" size="lg" className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10">
                Meet Dr. Avani Ratan
              </Button>
            </div>


          </div>

          {/* Right Columns: Rounded portrait & badge overlap */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* Organic rounded arch frame */}
            <div className="relative w-[280px] h-[380px] md:w-[350px] md:h-[480px] rounded-t-full overflow-hidden border-4 border-warm-sand/20 shadow-2xl">
              {/* Fallback pattern or therapist abstract illustration inside image */}
              <div className="absolute inset-0 bg-warm-sand/15 flex items-center justify-center">
                <span className="font-serif text-5xl italic text-warm-sand/40">Avani</span>
              </div>
              <Image
                src="/images/dr-avani.png"
                alt="Dr. Avani Portrait"
                fill
                priority
                className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                sizes="(max-w-768px) 280px, 350px"
              />
            </div>

            {/* Overlapping botanical circular badge */}
            <div className="absolute bottom-6 -left-4 md:-left-8 bg-warm-coral text-white p-4 rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center text-center shadow-lg transform -rotate-12 hover:rotate-0 transition-transform duration-300">
              <span className="text-[9px] uppercase tracking-widest font-sans font-semibold">RCI Registered</span>
              <span className="font-serif text-xs md:text-sm font-bold mt-0.5">Clinical</span>
              <span className="text-[9px] text-white/90">Psychologist</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
