'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  quote: string;
  clientName: string;
  designation?: string;
}

const mockTestimonials: Testimonial[] = [
  {
    quote: "For years, I thought I was simply lazy, disorganised, or incapable of focusing. The ADHD assessment finally helped me understand what was actually going on. More than getting a diagnosis, I finally had an explanation for things I had struggled with for years and a way forward.",
    clientName: "ADHD Assessment Client"
  },
  {
    quote: "I was overwhelmed by the process of getting the documentation I needed for academic support. The assessment was thorough and professional, but I never felt like I was being reduced to a diagnosis or a set of scores. I finally felt understood and supported through the process.",
    clientName: "Psychosocial & Disability Assessment Client"
  },
  {
    quote: "I came to therapy feeling exhausted by my own thoughts. I was constantly anxious, overthinking everything, and struggling with intrusive thoughts. Therapy gave me a space where I could talk about these things without feeling judged. Over time, I learned to respond differently to my thoughts and emotions, and I began feeling more like myself again.",
    clientName: "Individual Psychotherapy Client"
  },
  {
    quote: "We reached a point where every conversation seemed to turn into arguments. We both felt unheard and misunderstood. Couple therapy gave us a space to slow down, understand what was happening between us, and communicate differently. We didn't just learn how to argue less, we learned how to understand each other again.",
    clientName: "Couple & Marital Therapy Client"
  },
  {
    quote: "As a queer person, I've always felt like I needed to translate myself in therapy. Here, I didn't. She got it. And more than that, she helped me get it about myself.",
    clientName: "LGBTQIA+ Affirming Therapy Client"
  },
  {
    quote: "I felt like everyone around me was moving ahead while I was completely lost. Between academics, career pressure, relationships, and constantly comparing myself to everyone online, I felt overwhelmed. Therapy helped me slow down, understand what I actually wanted, and stop measuring my life against everyone else's.",
    clientName: "Young Adult Mental Health Client"
  }
];


interface TestimonialsProps {
  initialTestimonials?: Testimonial[];
}

export function Testimonials({ initialTestimonials }: TestimonialsProps) {
  const testimonialsList = initialTestimonials && initialTestimonials.length > 0
    ? initialTestimonials
    : mockTestimonials;

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll testimonials every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, [activeIndex, testimonialsList.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialsList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonialsList.length - 1 ? 0 : prev + 1));
  };

  const active = testimonialsList[activeIndex] || mockTestimonials[0];

  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center flex flex-col items-center">
        
        <span className="text-xs md:text-sm font-sans font-semibold text-warm-coral uppercase tracking-widest mb-4">
          Kind Words
        </span>

        <h2 className="font-serif text-3xl md:text-4xl text-deep-violet leading-tight mb-12">
          What clients say
        </h2>

        {/* Stateful Testimonial Quote wrapper */}
        <div className="relative min-h-[180px] md:min-h-[160px] flex flex-col items-center justify-center transition-all duration-500 transform">
          <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl italic text-deep-violet font-light leading-relaxed max-w-3xl">
            &ldquo;{active.quote}&rdquo;
          </blockquote>

          <cite className="not-italic font-sans text-xs md:text-sm text-muted-text mt-6 block uppercase tracking-widest font-semibold">
            {active.clientName} {active.designation ? `— ${active.designation}` : ''}
          </cite>
        </div>

        {/* Carousel controls: Arrows & Pagination dots */}
        <div className="flex items-center gap-6 mt-12">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-muted-violet/20 flex items-center justify-center text-deep-violet hover:border-warm-coral hover:text-warm-coral transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimonialsList.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'bg-warm-coral w-6' : 'bg-muted-violet/20'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-muted-violet/20 flex items-center justify-center text-deep-violet hover:border-warm-coral hover:text-warm-coral transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
