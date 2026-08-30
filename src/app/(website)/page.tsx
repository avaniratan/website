import React from 'react';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { AreasOfSupport } from '@/components/sections/services';
import { Approach } from '@/components/sections/approach';
import { Testimonials } from '@/components/sections/testimonials';
import { CurvedSectionSeparator } from '@/components/ui/decorative-curve';
import { client } from '@/sanity/client';

export default async function Homepage() {
  let testimonials: any[] = [];
  try {
    testimonials = await client.fetch(
      `*[_type == "testimonials" && published == true] | order(displayOrder asc, _createdAt desc)`
    );
  } catch (err) {
    console.error('Failed to fetch testimonials from Sanity:', err);
  }

  return (
    <>
      <Hero />
      
      {/* Wave transition separator into About */}
      <CurvedSectionSeparator type="light-to-dark" className="bg-deep-violet" fillColor="#FAF7F2" />
      
      <About />
      <AreasOfSupport />
      <Approach />
      <Testimonials initialTestimonials={testimonials} />
    </>
  );
}
