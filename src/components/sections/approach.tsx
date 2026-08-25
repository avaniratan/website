import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Approach() {
  return (
    <section className="relative overflow-hidden rounded-[32px] md:rounded-[48px] bg-deep-violet text-soft-ivory mx-4 my-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[480px]">
        
        {/* Left Side: Text block (approx 40% width) */}
        <div className="lg:col-span-5 flex flex-col justify-center p-8 md:p-12 lg:p-16 gap-6 bg-deep-violet">
          
          <span className="text-xs md:text-sm font-sans font-semibold text-warm-coral uppercase tracking-widest">
            My Approach
          </span>

          <h2 className="font-serif text-3xl md:text-4xl font-light text-white leading-tight">
            Evidence-based. <br className="hidden md:inline" />
            <span className="italic font-normal text-warm-sand">Compassion-led.</span>
          </h2>

          <p className="text-sm md:text-base text-soft-ivory/80 font-light leading-relaxed">
            I combine rigorous clinical methodologies with deep empathy. Grounded in cognitive behavioral, systemic, and mindfulness-based interventions, our work targets tangible symptoms while keeping your safety and emotional pacing as the guiding focus.
          </p>

          <div className="pt-4">
            <Link
              href="/approach"
              className="group inline-flex items-center gap-2 font-sans font-semibold text-warm-sand hover:text-warm-coral transition-colors"
            >
              Explore my approach
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>

        </div>

        {/* Right Side: Warm interior photo (approx 60% width) */}
        <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-full overflow-hidden">
          <div className="absolute inset-0 bg-deep-violet/10 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
            alt="Warm interior office featuring botanical plants, frame art, and calm lighting"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(max-w-1024px) 100vw, 60vw"
          />
        </div>

      </div>
    </section>
  );
}
