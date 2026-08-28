'use client';

import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

export default function FAQPage() {
  const faqs = [
    {
      question: "What happens in the first session?",
      answer: "The first session is about understanding what brings you to therapy, what you’ve been experiencing, and what you hope to change. We’ll explore your concerns, patterns, and history at a pace that feels comfortable. You don’t need to have everything figured out before you come in."
    },
    {
      question: "How do I know if therapy is right for me?",
      answer: "You don’t need to be in crisis or have a diagnosis to begin therapy. If something in your thoughts, emotions, relationships, or daily life feels difficult to understand or change, therapy can be a space to explore it. We can figure out together whether therapy is the right fit for what you’re going through."
    },
    {
      question: "What if I don't know what's wrong with me?",
      answer: "You don’t need to know. Many people come to therapy knowing that something feels off, but not knowing how to explain it. Understanding what you’re experiencing and the patterns contributing to it is part of the work."
    },
    {
      question: "What if I've tried therapy before and it didn't help?",
      answer: "A difficult or unhelpful experience with therapy doesn’t mean therapy cannot help you. Different approaches, therapists, and therapeutic relationships can make a difference. We can also explore what didn’t work previously and what you may need this time around."
    },
    {
      question: "Do I need a diagnosis before starting therapy?",
      answer: "No. You don’t need a formal diagnosis to seek therapy. Therapy can help you understand patterns, difficulties, and experiences even when you’re not sure what to call them. If an assessment or diagnosis would be clinically useful, we can discuss that as part of the process."
    },
    {
      question: "Do you offer online sessions?",
      answer: "Yes. Sessions are available online, allowing you to access therapy regardless of where you are located."
    },
    {
      question: "How do I book a session?",
      answer: "You can book a session through the Book a Session button on the website. You’ll be guided through the available options and next steps."
    },
    {
      question: "What if I'm not comfortable talking about everything right away?",
      answer: "That’s okay. Therapy isn’t about forcing yourself to disclose everything at once. We can begin with what feels manageable and build trust over time. You’re allowed to move at a pace that feels safe and comfortable for you."
    },
    {
      question: "Can I see a psychologist if I'm already seeing a psychiatrist?",
      answer: "Yes. Psychological therapy and psychiatric care can work alongside each other. When appropriate and with your consent, treatment can also be coordinated with your psychiatrist or other healthcare providers."
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
