import React from 'react';
import * as Icons from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ServicesPage() {
  const therapyServices = [
    {
      title: 'Anxiety & Stress',
      topics: ['Anxiety', 'Panic', 'Overthinking', 'Health anxiety', 'Social anxiety', 'Stress', 'Burnout'],
      icon: 'Flame'
    },
    {
      title: 'OCD & Intrusive Thoughts',
      topics: ['OCD', 'Intrusive thoughts', 'Compulsions', 'Reassurance seeking', 'Relationship OCD', 'ERP'],
      icon: 'Brain'
    },
    {
      title: 'Depression & Mood Concerns',
      topics: ['Depression', 'Low mood', 'Loss of motivation', 'Emotional exhaustion', 'Adjustment difficulties'],
      icon: 'Activity'
    },
    {
      title: 'Relationship & Couple Concerns',
      topics: ['Relationship difficulties', 'Communication problems', 'Attachment concerns', 'Emotional dependency', 'Fear of abandonment', 'Marital concerns', 'Breakup recovery'],
      icon: 'Heart'
    },
    {
      title: 'Self-Esteem, Boundaries & Emotional Regulation',
      topics: ['Low self-esteem', 'People pleasing', 'Perfectionism', 'Boundary difficulties', 'Assertiveness', 'Emotional regulation'],
      icon: 'ShieldAlert'
    },
    {
      title: 'Young Adult & Student Mental Health',
      topics: ['Academic pressure', 'Career concerns', 'Exam anxiety', 'Study burnout', 'Identity and adjustment concerns'],
      icon: 'GraduationCap'
    },
    {
      title: 'Trauma & Emotional Difficulties',
      topics: ['Childhood emotional neglect', 'Difficult family dynamics', 'Trauma', 'Trust difficulties', 'Hypervigilance'],
      icon: 'Frown'
    },
    {
      title: 'ADHD & Executive Functioning',
      topics: ['Time management', 'Procrastination', 'Organization', 'Emotional regulation', 'Occupational/academic functioning'],
      icon: 'Clock'
    }
  ];

  const assessmentAreas = [
    'Cognitive & Intellectual Functioning',
    'Developmental & Adaptive Functioning',
    'Personality',
    'Neuropsychological Functioning',
    'ADHD',
    'Autism Spectrum Disorder',
    'Specific Learning Disability'
  ];

  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-20">
      
      {/* SECTION 1: Psychological Assessments */}
      <section className="flex flex-col gap-10">
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-3">
          <span className="text-xs md:text-sm font-sans font-semibold text-warm-coral uppercase tracking-widest">
            Diagnostic Clarity
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-deep-violet">
            Psychological Assessments
          </h1>
          <p className="text-sm md:text-base text-muted-text font-light leading-relaxed">
            Getting an assessment isn’t about getting a label on you. It’s about clarity. It’s about finally having language for what you’ve always felt. It’s about understanding why you are the way you are, so you can stop blaming yourself.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-muted-violet/10 shadow-sm max-w-4xl mx-auto w-full">
          <h3 className="font-serif text-xl font-bold text-deep-violet mb-4">Areas of Assessment</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {assessmentAreas.map((area, idx) => (
              <div key={idx} className="flex items-center gap-3 text-sm md:text-base text-muted-text">
                <span className="w-1.5 h-1.5 rounded-full bg-warm-coral shrink-0" />
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Therapy Services */}
      <section className="flex flex-col gap-10">
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-3">
          <span className="text-xs md:text-sm font-sans font-semibold text-warm-coral uppercase tracking-widest">
            Individual & Couple Care
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-deep-violet">
            Therapy Services
          </h2>
          <p className="text-sm md:text-base text-muted-text font-light leading-relaxed">
            Therapy is a collaborative process of understanding patterns, developing effective coping strategies, working through difficult emotions, and creating meaningful change at a pace that is appropriate for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {therapyServices.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon] || Icons.HelpCircle;
            return (
              <div
                key={index}
                className="p-8 rounded-[24px] border border-muted-violet/10 bg-white hover:border-warm-coral/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between gap-6"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-full bg-soft-ivory flex items-center justify-center text-deep-violet">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-deep-violet">
                    {service.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.topics.map((topic, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 bg-soft-ivory text-deep-violet rounded-full text-xs font-medium border border-muted-violet/5"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-muted-violet/5 flex items-center justify-between">
                  <span className="text-xs font-sans text-muted-text">Standard Session Duration: 50 Min</span>
                  <Button href="/book" variant="outline" size="sm">
                    Book Session
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: Evidence-Based Therapeutic Approaches */}
      <section className="bg-deep-violet text-soft-ivory rounded-3xl p-8 md:p-12">
        <h3 className="font-serif text-2xl md:text-3xl font-light text-white mb-6">
          Evidence-Based Therapeutic Approaches
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-soft-ivory/80 font-light">
          {['CBT', 'ERP', 'ACT', 'DBT-informed', 'Trauma-informed', 'Behaviour Therapy', 'Parent Management', 'EFT'].map((app, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-warm-coral" />
              {app}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

