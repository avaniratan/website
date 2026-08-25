import React from 'react';
import Image from 'next/image';

export default function ApproachPage() {
  const values = [
    {
      title: 'Safety First',
      description: 'You’re trusting me with your deepest fears, your personal thoughts, your biggest questions about who you are. That’s sacred. Your privacy and confidentiality are important parts of ethical psychological practice.'
    },
    {
      title: 'Cultural Humility',
      description: 'You live in a world with expectations about how you should be. I won’t add to that. Whether you’re navigating Indian family dynamics, diaspora identity, queer acceptance, or the pressure to fit in, I see the whole picture of your life. I listen to what matters to you, not what society says should matter.'
    },
    {
      title: 'LGBTQIA+ Affirmation',
      description: 'I’ve worked extensively with trans, queer, and non-binary clients, and I know the difference between "tolerance" and true affirmation. I strive to provide an inclusive and non-judgmental space for LGBTQIA+ individuals, where identity, relationships and mental health concerns can be explored with respect and sensitivity.'
    },
    {
      title: 'Evidence-Based Care',
      description: 'Your time is precious. I use approaches grounded in research and what actually works: CBT, DBT, ACT, trauma-informed therapy, couples work, ADHD strategies. But evidence doesn’t mean cold. It means caring enough to do it right.'
    },
    {
      title: 'Collaboration',
      description: 'You’re the expert on your own life. I’m here to offer perspective, tools, and professional guidance. Together, we build a treatment plan that makes sense for you, not a generic protocol.'
    }
  ];

  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Side: Approach Pillars */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <span className="text-xs md:text-sm font-sans font-semibold text-warm-coral uppercase tracking-widest">
              Approach & Values
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-light text-deep-violet">
              How I Work
            </h1>
            <p className="text-sm font-sans text-muted-text uppercase tracking-widest">
              What you can expect from me
            </p>
          </div>

          <p className="text-base md:text-lg text-muted-text font-light leading-relaxed">
            I believe good psychological care requires both clinical rigor and genuine human understanding. Sometimes therapy is hard. Sometimes the answer isn’t what you hoped for. I’ll meet you in the difficulty with honesty and care.
          </p>

          <div className="flex flex-col gap-8 mt-4">
            {values.map((pillar, idx) => (
              <div key={idx} className="flex gap-4">
                <span className="font-serif text-3xl font-extralight text-warm-coral shrink-0">
                  0{idx + 1}
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-serif text-xl font-bold text-deep-violet">
                    {pillar.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-text font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Side: Visual assets */}
        <div className="lg:col-span-5 relative">
          <div className="relative w-full aspect-square rounded-[24px] md:rounded-[32px] overflow-hidden shadow-lg mb-6">
            <Image
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop"
              alt="Comforting therapy room with lighting, books, and plants"
              fill
              className="object-cover"
              sizes="(max-w-768px) 100vw, 40vw"
            />
          </div>
          <div className="p-6 bg-deep-violet text-soft-ivory rounded-2xl">
            <h4 className="font-serif text-lg font-bold text-white mb-2">My Pledge to You</h4>
            <p className="text-xs text-soft-ivory/80 leading-relaxed font-light">
              I commit to maintaining an affirming, non-judgmental environment where your identity, family dynamics, and individual neurodivergence are respected and supported.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}



