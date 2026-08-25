import React from 'react';
import Link from 'next/link';
import { LotusLogo } from '@/components/ui/decorative-curve';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-violet text-soft-ivory pt-20 pb-10 rounded-t-[32px] md:rounded-t-[48px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-soft-ivory/10">
          
          {/* Column 1: Branding & Intro */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <LotusLogo className="w-8 h-8 text-warm-coral" />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-tight text-white">
                  Dr. Avani Ratan
                </span>
                <span className="text-[10px] font-sans text-warm-sand uppercase tracking-widest leading-none">
                  Clinical Psychologist
                </span>
              </div>
            </Link>
            <p className="text-sm text-soft-ivory/80 leading-relaxed font-light mt-2">
              Providing a safe, structured, and compassionate environment for growth, healing, and self-discovery.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg font-medium text-white">Explore</h4>
            <ul className="flex flex-col gap-3 text-sm text-soft-ivory/85">
              <li>
                <Link href="/about" className="hover:text-warm-coral transition-colors">
                  About Dr. Avani Ratan
                </Link>
              </li>
              <li>
                <Link href="/approach" className="hover:text-warm-coral transition-colors">
                  Therapy Approach
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-warm-coral transition-colors">
                  Areas of Support
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-warm-coral transition-colors">
                  FAQs & Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Info */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg font-medium text-white">Get in Touch</h4>
            <ul className="flex flex-col gap-3 text-sm text-soft-ivory/85">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-warm-coral" />
                <a href="mailto:hello@dravaniratan.com" className="hover:underline">
                  hello@dravaniratan.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-warm-coral" />
                <a href="tel:+919876543210" className="hover:underline">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-warm-coral" />
                <a href="https://wa.me/919876543210" className="hover:underline">
                  WhatsApp Support
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-warm-coral shrink-0 mt-0.5" />
                <span>Delhi, India</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources & Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg font-medium text-white">Resources</h4>
            <ul className="flex flex-col gap-3 text-sm text-soft-ivory/85">
              <li>
                <Link href="/resources" className="hover:text-warm-coral transition-colors">
                  Worksheets & Guides
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-warm-coral transition-colors font-semibold">
                  Book a Consultation
                </Link>
              </li>
              <li>
                <Link href="/crisis" className="text-warm-coral hover:underline font-medium">
                  Crisis Support Options
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Emergency / Crisis Disclaimer */}
        <div className="py-8 border-b border-soft-ivory/10">
          <div className="bg-[#FAF7F2]/5 rounded-2xl p-6 border border-soft-ivory/10 text-center md:text-left">
            <h5 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">
              Important Disclaimer
            </h5>
            <p className="text-xs text-soft-ivory/80 leading-relaxed font-light">
              This website does not offer immediate crisis intervention or emergency services. If you are experiencing a mental health emergency, having thoughts of self-harm, or facing an immediate safety threat, please contact your local emergency services (like 112 in India) or visit the nearest hospital emergency room.
            </p>
          </div>
        </div>

        {/* Bottom Copy / Legal Section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-soft-ivory/70">
          <p>&copy; {currentYear} Dr. Avani Ratan. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="hover:underline">Terms of Use</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
