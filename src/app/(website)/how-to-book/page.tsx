import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, UserCheck, HelpCircle, MapPin, Video, ClipboardList } from 'lucide-react';

export default function HowToBookPage() {
  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-20">
      
      {/* 1. Header / Hero */}
      <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
        <span className="text-xs md:text-sm font-sans font-semibold text-warm-coral uppercase tracking-widest">
          Booking Guide
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-deep-violet">
          How to Book
        </h1>
        <p className="text-xl text-deep-violet font-serif italic mt-2">
          Start where you are
        </p>
        <p className="text-base md:text-lg text-muted-text font-light leading-relaxed mt-2">
          You don’t need to have everything figured out before you reach out. Whether you’re looking for clarity, wanting to make a change, or simply unsure where to begin, there’s a place to start.
        </p>
      </div>

      {/* 2. Options Grid */}
      <div className="flex flex-col gap-10">
        <div className="text-center max-w-xl mx-auto flex flex-col gap-2">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-deep-violet">
            Not sure what you need?
          </h2>
          <p className="text-sm text-muted-text font-light">
            Choose the option that best describes what you’re looking for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Assessment */}
          <div className="bg-white rounded-3xl p-8 border border-muted-violet/10 shadow-sm flex flex-col justify-between h-full group hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-5">
              <div className="w-12 h-12 rounded-full bg-[#F2EFF5] text-[#4A3B58] flex items-center justify-center">
                <ClipboardList className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-sans text-warm-coral font-semibold uppercase tracking-wider">
                  I’m looking for diagnostic clarity
                </span>
                <h3 className="font-serif text-xl font-bold text-deep-violet">
                  Psychological Assessment
                </h3>
              </div>
              <p className="text-sm text-muted-text font-light leading-relaxed">
                You want to understand whether a particular condition may explain what you’ve been experiencing, or you’re looking for a more comprehensive understanding of your cognitive, emotional, or psychological functioning.
              </p>
            </div>
            <div className="pt-8">
              <Link
                href="/book?type=assessment"
                className="inline-flex items-center gap-2 text-sm font-semibold text-deep-violet hover:text-warm-coral transition-colors"
              >
                Book an Assessment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 2: Therapy */}
          <div className="bg-white rounded-3xl p-8 border border-muted-violet/10 shadow-sm flex flex-col justify-between h-full group hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-5">
              <div className="w-12 h-12 rounded-full bg-[#F9EFF0] text-[#583B3E] flex items-center justify-center">
                <UserCheck className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-sans text-warm-coral font-semibold uppercase tracking-wider">
                  I know what I’m struggling with and want help changing it
                </span>
                <h3 className="font-serif text-xl font-bold text-deep-violet">
                  Therapy
                </h3>
              </div>
              <p className="text-sm text-muted-text font-light leading-relaxed">
                You’re aware of the difficulties or patterns you’re experiencing and want support understanding them, developing new ways of responding, and creating meaningful change.
              </p>
            </div>
            <div className="pt-8">
              <Link
                href="/book?type=therapy"
                className="inline-flex items-center gap-2 text-sm font-semibold text-deep-violet hover:text-warm-coral transition-colors"
              >
                Book a Therapy Session <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 3: Consultation */}
          <div className="bg-white rounded-3xl p-8 border border-muted-violet/10 shadow-sm flex flex-col justify-between h-full group hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-5">
              <div className="w-12 h-12 rounded-full bg-[#FAF5EE] text-[#584D3B] flex items-center justify-center">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-sans text-warm-coral font-semibold uppercase tracking-wider">
                  I’m unsure whether my symptoms fit a particular condition
                </span>
                <h3 className="font-serif text-xl font-bold text-deep-violet">
                  Start with a Consultation
                </h3>
              </div>
              <p className="text-sm text-muted-text font-light leading-relaxed">
                You’re experiencing difficulties but aren’t sure what they mean, whether you need an assessment, or whether therapy would be more appropriate. A consultation can help clarify what you’re experiencing and what the next step may be.
              </p>
            </div>
            <div className="pt-8">
              <Link
                href="/book?type=consultation"
                className="inline-flex items-center gap-2 text-sm font-semibold text-deep-violet hover:text-warm-coral transition-colors"
              >
                Book a Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Meeting Format Section */}
      <div className="flex flex-col gap-10 bg-warm-sand/10 rounded-[32px] p-8 md:p-12 border border-warm-sand/20">
        <div className="text-center max-w-xl mx-auto flex flex-col gap-2">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-deep-violet">
            Choose how you’d like to meet
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* In Person */}
          <div className="bg-white rounded-2xl p-8 border border-muted-violet/5 flex flex-col justify-between h-full group">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FAF1ED] text-warm-coral flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-deep-violet">In-Person</h3>
              </div>
              <p className="text-sm text-muted-text font-light leading-relaxed">
                Meet face-to-face in a private clinical setting. In-person sessions offer the opportunity to work together in the same physical space, with a structured and personalised approach to your concerns.
              </p>
            </div>
            <div className="pt-6">
              <Link
                href="/book?format=in-person"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-deep-violet hover:text-warm-coral transition-colors"
              >
                Book an In-Person Session <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Online */}
          <div className="bg-white rounded-2xl p-8 border border-muted-violet/5 flex flex-col justify-between h-full group">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#EEF3F0] text-[#3B5845] flex items-center justify-center">
                  <Video className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-deep-violet">Online</h3>
              </div>
              <p className="text-sm text-muted-text font-light leading-relaxed">
                Meet from wherever you are, without the need to travel. Online sessions offer flexibility while maintaining the same thoughtful, structured approach to psychological care.
              </p>
            </div>
            <div className="pt-6">
              <Link
                href="/book?format=online"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-deep-violet hover:text-warm-coral transition-colors"
              >
                Book an Online Session <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 4. What happens after booking */}
      <div className="flex flex-col gap-12">
        <div className="text-center max-w-xl mx-auto flex flex-col gap-2">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-deep-violet">
            What happens after you book?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col gap-4 relative">
            <span className="font-serif text-4xl lg:text-5xl font-extralight text-warm-coral">01</span>
            <h3 className="font-serif text-lg font-bold text-deep-violet">Choose your session</h3>
            <p className="text-sm text-muted-text font-light leading-relaxed">
              Select the type of support you’re looking for and your preferred session format.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col gap-4 relative">
            <span className="font-serif text-4xl lg:text-5xl font-extralight text-warm-coral">02</span>
            <h3 className="font-serif text-lg font-bold text-deep-violet">Tell us a little about what brings you here</h3>
            <p className="text-sm text-muted-text font-light leading-relaxed">
              You’ll be asked for some basic information about your concerns and what you’re hoping to understand or work on. You don’t need to know exactly what’s wrong or have the perfect words to describe it.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col gap-4 relative">
            <span className="font-serif text-4xl lg:text-5xl font-extralight text-warm-coral">03</span>
            <h3 className="font-serif text-lg font-bold text-deep-violet">Begin</h3>
            <p className="text-sm text-muted-text font-light leading-relaxed">
              Your first session is an opportunity to understand your concerns, relevant history, and goals, and determine the most appropriate way forward.
            </p>
          </div>
        </div>
      </div>

      {/* 5. Closing / CTA Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-muted-violet/10 pt-16">
        
        {/* Still Not Sure Block */}
        <div className="bg-warm-sand/20 border border-warm-sand/30 rounded-3xl p-8 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-xl font-bold text-deep-violet">Still not sure where to begin?</h3>
            <p className="text-sm text-muted-text font-light leading-relaxed">
              That’s okay. You don’t need to diagnose yourself before reaching out. If you’re unsure whether you need an assessment, therapy, or a consultation, start with a consultation and we can work out the next step together.
            </p>
          </div>
          <div>
            <Link
              href="/book?type=consultation"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-deep-violet font-sans font-semibold rounded-full border border-deep-violet/10 shadow-sm hover:bg-soft-ivory hover:text-warm-coral transition-all text-sm"
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        {/* Ready to Begin Block */}
        <div className="bg-deep-violet text-soft-ivory rounded-3xl p-8 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-xl font-bold text-white">Ready to begin?</h3>
            <p className="text-sm text-soft-ivory/80 font-light leading-relaxed">
              Understanding where to start is often the first step toward understanding yourself. Take the first step and book your initial session today.
            </p>
          </div>
          <div>
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-6 py-3 bg-warm-coral text-white font-sans font-semibold rounded-full shadow-md hover:bg-warm-coral/95 transition-all text-sm"
            >
              Book a Session
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
