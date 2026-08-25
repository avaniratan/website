'use client';

import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

export default function FAQPage() {
  const faqs = [
    {
      question: "How is assessment different from just seeing a psychiatrist?",
      answer: "A psychiatrist can prescribe medication (I can't). A psychological assessment involves a detailed clinical interview, relevant history, standardized psychological testing, behavioural observations where appropriate, and professional interpretation of the findings. The duration depends on the purpose and complexity of the assessment."
    },
    {
      question: "How long until I feel better?",
      answer: "Progress does not always happen in a straight line. Depending on your concerns and goals, therapy may involve understanding longstanding patterns, developing new coping strategies, working through difficult emotions, improving relationships, and gradually making meaningful changes in everyday life."
    },
    {
      question: "Will I need to be on medication?",
      answer: "I don't prescribe, but I work closely with psychiatrists who do. Some people benefit from medication + therapy. Some benefit from therapy alone. That's a conversation we'll have together."
    },
    {
      question: "What if I'm LGBTQIA+—will you judge me?",
      answer: "No. I aim to provide an inclusive and non-judgmental space where identity, relationships and mental health concerns can be discussed openly and respectfully."
    },
    {
      question: "How confidential is this?",
      answer: "Completely. What you tell me is protected by law and by my ethics."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="py-16 md:py-24 max-w-4xl mx-auto px-6 md:px-8 flex flex-col gap-16">
      
      {/* FAQ Title */}
      <div className="text-center flex flex-col gap-3">
        <span className="text-xs md:text-sm font-sans font-semibold text-warm-coral uppercase tracking-widest">
          Information & Support
        </span>
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-deep-violet">
          The Questions You're Actually Asking
        </h1>
        <p className="text-sm md:text-base text-muted-text font-light leading-relaxed">
          Common queries related to psychotherapy sessions, psychiatric referrals, and clinical assessments.
        </p>
      </div>

      {/* Accordion List */}
      <div className="flex flex-col gap-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border border-muted-violet/10 bg-white rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full text-left p-6 flex justify-between items-center font-serif text-lg font-bold text-deep-violet hover:text-warm-coral transition-colors"
            >
              <span>{faq.question}</span>
              <span className="text-xl shrink-0 ml-4">{openIdx === idx ? '−' : '+'}</span>
            </button>
            {openIdx === idx && (
              <div className="px-6 pb-6 text-sm md:text-base text-muted-text font-light leading-relaxed border-t border-muted-violet/5 pt-4 animate-fade-in">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Crisis / Emergency Block */}
      <div className="bg-deep-violet text-soft-ivory rounded-3xl p-8 md:p-12 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-sans font-semibold text-warm-coral uppercase tracking-widest">
            Crisis Helplines
          </span>
          <h3 className="font-serif text-2xl md:text-3xl font-light text-white">
            If You Need Help Now
          </h3>
        </div>
        <p className="text-sm text-soft-ivory/80 leading-relaxed font-light">
          You're not alone, and help is available. If you are in immediate danger or experiencing an acute mental health crisis, please contact emergency services or go to the nearest psychiatric emergency department.
        </p>
        <div className="flex flex-wrap gap-6 pt-4 border-t border-soft-ivory/10 text-xs font-sans">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-warm-coral" />
            <span>National Emergency: 112 (India)</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-warm-coral" />
            <span>Support Email: support@dravaniratan.com</span>
          </div>
        </div>
      </div>

      {/* First Time in Therapy Footer Banner */}
      <div className="bg-warm-sand/20 border border-warm-sand/30 rounded-3xl p-8 text-center flex flex-col items-center gap-4">
        <h4 className="font-serif text-lg font-bold text-deep-violet">First time in therapy?</h4>
        <p className="text-sm text-muted-text max-w-xl font-light leading-relaxed">
          We'll take it slow. You get to set the pace. You've carried this alone long enough. It's time for support, understanding, and meaningful change. You don't need to have everything figured out before you reach out.
        </p>
        <div className="flex flex-wrap gap-4 justify-center items-center text-xs font-sans text-muted-text mt-2">
          <span>📍 Online and In-Person both available</span>
        </div>
      </div>

    </div>
  );
}
