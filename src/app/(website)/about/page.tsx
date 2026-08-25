import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  const qualifications = [
    { year: 'Ph.D. in Psychology', title: 'University of Delhi', organization: 'Doctor of Philosophy' },
    { year: 'M.Phil in Clinical Psychology', title: 'IHBAS, Delhi', organization: 'RCI Registered Professional Training' }
  ];

  const certifications = [
    { year: 'Cognitive Behaviour Therapy', title: 'Beck Institute, 2024', organization: 'Advanced Specialized Training' },
    { year: 'Rorschach-Exner System', title: 'Fortis Healthcare, 2020', organization: 'Diagnostic Assessment Protocol' }
  ];

  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Side: Detail Narrative */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <span className="text-xs md:text-sm font-sans font-semibold text-warm-coral uppercase tracking-widest">
              My Journey
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-light text-deep-violet">
              Dr. Avani Ratan
            </h1>
            <p className="text-sm font-sans text-muted-text uppercase tracking-widest">
              Clinical Psychologist | Psychotherapist
            </p>
          </div>

          <p className="text-base md:text-lg text-muted-text font-light leading-relaxed">
            I’m Dr. Avani Ratan, a Clinical Psychologist with a decade of work experience alongside individuals who’ve struggled for years with anxiety that whispers you’re broken, OCD that won’t let go, young people figuring out who they are, undiagnosed ADHD, and depression. I also work with couples learning to see each other again and parents seeking answers for their children.
          </p>

          <p className="text-base text-muted-text font-light leading-relaxed">
            Over the course of my clinical practice, I have worked with children, adolescents, adults, families, and couples presenting with a wide range of psychological, emotional, behavioural, cognitive, and relationship concerns. My work combines evidence-based psychotherapy with comprehensive psychological assessment. I have conducted more than 10,000 psychological assessments, including assessments related to ADHD, learning difficulties (SLD), IQ Assessments, Autism, Personality Assessment, Emotional and Behavioural concerns, and Diagnostic Clarification.
          </p>

          <p className="text-base text-muted-text font-light leading-relaxed">
            I believe good psychological care requires both clinical rigor and genuine human understanding. Evidence-based practice matters, but so does feeling heard, respected, and understood. My approach is warm, collaborative, structured, and tailored to the individual sitting across from me.
          </p>

          <h3 className="font-serif text-2xl font-semibold text-deep-violet mt-4">
            Qualifications & Certifications
          </h3>

          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-sans font-semibold text-warm-coral uppercase tracking-widest border-b border-muted-violet/10 pb-2">Academic Qualifications</h4>
            {qualifications.map((q, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 border-b border-muted-violet/10 pb-4">
                <span className="font-sans text-sm font-semibold text-deep-violet shrink-0 sm:w-48">
                  {q.year}
                </span>
                <div className="flex flex-col">
                  <span className="font-serif text-base font-bold text-deep-violet">{q.title}</span>
                  <span className="text-sm text-muted-text">{q.organization}</span>
                </div>
              </div>
            ))}

            <h4 className="text-xs font-sans font-semibold text-warm-coral uppercase tracking-widest border-b border-muted-violet/10 pb-2 mt-4">Additional Certifications</h4>
            {certifications.map((q, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 border-b border-muted-violet/10 pb-4">
                <span className="font-sans text-sm font-semibold text-deep-violet shrink-0 sm:w-48">
                  {q.year}
                </span>
                <div className="flex flex-col">
                  <span className="font-serif text-base font-bold text-deep-violet">{q.title}</span>
                  <span className="text-sm text-muted-text">{q.organization}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Side: Portrait Image Card */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="relative w-full aspect-[4/5] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-lg">
            <Image
              src="/images/dr-avani.png"
              alt="Dr. Avani Ratan profile portrait"
              fill
              className="object-cover"
              sizes="(max-w-768px) 100vw, 40vw"
            />
          </div>
          <div className="p-6 bg-warm-sand/20 border border-warm-sand/30 rounded-2xl">
            <h4 className="font-serif text-lg font-bold text-deep-violet mb-3">Professional Registration</h4>
            <p className="text-sm text-deep-violet font-semibold mb-4">
              Rehabilitation Council of India (RCI) Registered Clinical Psychologist
            </p>
            <h4 className="font-serif text-lg font-bold text-deep-violet mb-2">My Clinical Values</h4>
            <ul className="list-disc list-inside text-sm text-muted-text font-light flex flex-col gap-2">
              <li>Warm and collaborative safe pace setting</li>
              <li>Clinical rigor coupled with human empathy</li>
              <li>Trauma-informed diagnostic framework</li>
              <li>Strict patient privacy and confidentiality</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}



