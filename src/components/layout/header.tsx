'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Approach', href: '/approach' },
    { label: 'Services', href: '/services' },
    { label: 'How to Book', href: '/how-to-book' },
    { label: 'FAQs', href: '/faqs' }
  ];

  const isHome = pathname === '/';

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 bg-soft-ivory/90 backdrop-blur-md border-b border-muted-violet/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Logo & Clinical Psychologist Details */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="text-deep-violet group-hover:text-warm-coral transition-colors relative w-9 h-9">
            <Image
              src="/images/logo.png"
              alt="Dr. Avani Ratan Logo"
              fill
              className="object-contain"
              sizes="36px"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-deep-violet">
              Dr. Avani Ratan
            </span>
            <span className="text-[10px] md:text-xs font-sans text-muted-text uppercase tracking-widest leading-none">
              Clinical Psychologist
            </span>
          </div>
        </Link>


        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-sm font-medium tracking-wide transition-colors relative py-2 ${
                  isActive
                    ? 'text-deep-violet font-semibold'
                    : 'text-muted-text hover:text-deep-violet'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-warm-coral rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Book CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <Button href="/book" variant="primary" size="sm" className="hidden sm:inline-flex bg-warm-coral hover:bg-warm-coral/90 text-white rounded-full">
            Book a Session
          </Button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-deep-violet md:hidden hover:text-warm-coral transition-colors"
            aria-label="Toggle navigation drawer"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop and Navigation */}
      {isOpen && (
        <div className="fixed inset-0 top-20 z-40 w-full h-[calc(100vh-80px)] bg-soft-ivory md:hidden animate-fade-in flex flex-col justify-between p-6">
          <nav className="flex flex-col gap-6 pt-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-serif text-2xl text-deep-violet hover:text-warm-coral transition-colors border-b border-muted-violet/10 pb-4"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pb-8">
            <Button
              href="/book"
              onClick={() => setIsOpen(false)}
              variant="primary"
              size="lg"
              className="w-full text-center"
            >
              Book a Session
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
