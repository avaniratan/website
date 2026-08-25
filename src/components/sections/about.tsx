import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function About() {
  const credentials = [
    { value: 'RCI Registered', label: 'Clinical Psychologist' },
    { value: 'PhD', label: 'in Psychology' },
    { value: '10+ Years', label: 'Clinical Experience' },
    { value: '10,000+', label: 'Assessments Completed' }
  ];


  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: text structure & stats */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            
            <span className="text-xs md:text-sm font-sans font-semibold text-warm-coral uppercase tracking-widest">
              Hi, I’m Dr. Avani Ratan.
            </span>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-deep-violet leading-tight">
              Understanding what is happening is often the{' '}
              <span className="italic font-normal">beginning of meaningful change</span>.
            </h2>

            <p className="text-base md:text-lg text-muted-text font-light leading-relaxed">
              I’m Dr. Avani Ratan, a Clinical Psychologist with a decade of work experience. I’ve worked with thousands of individuals at different points in their lives, from periods of significant distress to moments of uncertainty, transition, and change.
            </p>

            <p className="text-base text-muted-text font-light leading-relaxed">
              I believe therapy is not simply about reducing symptoms; it is about understanding patterns, emotional wounds, coping mechanisms, relationships, and the way we experience ourselves and the world.
            </p>

            {/* Credentials / Indicators Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full pt-4">
              {credentials.map((stat, idx) => (
                <div key={idx} className="flex flex-col border-l border-muted-violet/20 pl-4 py-1">
                  <span className="font-serif text-xl md:text-2xl font-bold text-deep-violet">
                    {stat.value}
                  </span>
                  <span className="text-xs font-sans text-muted-text mt-1 leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 font-sans font-semibold text-deep-violet hover:text-warm-coral transition-colors"
              >
                Read my qualifications & history
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>


          </div>

          {/* Right Column: Therapy Room Photo */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-lg group">
              <div className="absolute inset-0 bg-deep-violet/5 group-hover:bg-transparent transition-colors duration-300 z-10" />
              <Image
                src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=800&auto=format&fit=crop"
                alt="Safe consulting therapy room space"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-w-768px) 100vw, 40vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
