import React from 'react';
import Image from 'next/image';

export default function ResourcesPage() {
  const list = [
    {
      title: 'Daily Boundary Planning Sheet',
      description: 'A 2-page workbook tracking energy drainers, saying no triggers, and establishing work-life buffer lines.',
      type: 'PDF Workbook',
      size: '1.2 MB',
      link: '#'
    },
    {
      title: 'Intrusive Thoughts Grounding Tracker',
      description: 'CBT tracking guide to record trigger moments, identify cognitive errors, and employ physical grounding exercises.',
      type: 'PDF Workbook',
      size: '950 KB',
      link: '#'
    },
    {
      title: 'Mindfulness & Breath Anchor Somatic Audio',
      description: 'A 10-minute audio guide designed to pull your nervous system back from active survival fight-or-flight loops.',
      type: 'Somatic Audio',
      size: '14.2 MB',
      link: '#'
    }
  ];

  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-8">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
        <span className="text-xs md:text-sm font-sans font-semibold text-warm-coral uppercase tracking-widest">
          Therapeutic Library
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-deep-violet">
          Free guides, sheets, & somatic resources
        </h1>
        <p className="text-sm md:text-base text-muted-text font-light leading-relaxed">
          Structured materials to assist your growth and integration between sessions.
        </p>
      </div>

      {/* Grid list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {list.map((res, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-[24px] border border-muted-violet/10 flex flex-col justify-between gap-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-full"
          >
            <div className="flex flex-col gap-3">
              <span className="text-xs font-sans font-semibold text-warm-coral uppercase tracking-widest">
                {res.type}
              </span>
              <h3 className="font-serif text-xl font-bold text-deep-violet">
                {res.title}
              </h3>
              <p className="text-sm text-muted-text font-light leading-relaxed">
                {res.description}
              </p>
            </div>

            <div className="pt-4 border-t border-muted-violet/5 flex items-center justify-between text-xs font-sans">
              <span className="text-muted-text">{res.size}</span>
              <a
                href={res.link}
                className="font-bold text-deep-violet hover:text-warm-coral transition-colors flex items-center gap-1"
              >
                Download Resource &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
