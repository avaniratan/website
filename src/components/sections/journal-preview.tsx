import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/client';
import { urlFor } from '@/sanity/image';

const mockArticles = [
  {
    title: 'Navigating Workplace Burnout: Signals and Restoration Steps',
    excerpt: 'Recognize the transition from standard fatigue to workplace burnout, and learn cognitive boundaries to protect your daily energy reservoirs.',
    category: 'Mental Wellness',
    date: 'Aug 14, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop',
    slug: 'navigating-workplace-burnout'
  },
  {
    title: 'Understanding Attachment Styles in Modern Relationship Dynamics',
    excerpt: 'Unpack the psychological framework of anxious, avoidant, and secure attachment states, and how they play out in communication cycles.',
    category: 'Relationships',
    date: 'Jul 28, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1469571486090-7db333758b20?q=80&w=600&auto=format&fit=crop',
    slug: 'attachment-styles-relationship-dynamics'
  },
  {
    title: 'Practical Grounding Techniques for Panic and Severe Anxiety',
    excerpt: 'Five clinical grounding methods based on somatic and cognitive triggers designed to pull your nervous system back from survival fight-or-flight loops.',
    category: 'Anxiety',
    date: 'Jun 10, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=600&auto=format&fit=crop',
    slug: 'grounding-techniques-panic-anxiety'
  }
];

export async function JournalPreview() {
  let articles: any[] = [];

  try {
    const fetched = await client.fetch(
      `*[_type == "blog" && published == true] | order(publishedDate desc, _createdAt desc)[0...3] {
        title,
        excerpt,
        "category": categories[0],
        "date": publishedDate,
        "readTime": string(readingTime) + " min read",
        featuredImage,
        "slug": slug.current
      }`
    );
    if (fetched && fetched.length > 0) {
      articles = fetched.map((item: any) => ({
        title: item.title,
        excerpt: item.excerpt,
        category: item.category || 'Journal',
        date: item.date ? new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '',
        readTime: item.readTime,
        image: item.featuredImage ? urlFor(item.featuredImage).url() : '/placeholders/image.jpg',
        slug: item.slug
      }));
    }
  } catch (err) {
    console.error('Error fetching articles from Sanity:', err);
  }

  const displayArticles = articles.length > 0 ? articles : mockArticles;

  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2] border-t border-muted-violet/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Title row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-3">
            <span className="text-xs md:text-sm font-sans font-semibold text-warm-coral uppercase tracking-widest">
              Journal & Insights
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-deep-violet leading-tight">
              Latest from the journal
            </h2>
          </div>
          <Link
            href="/journal"
            className="group inline-flex items-center gap-2 font-sans font-semibold text-deep-violet hover:text-warm-coral transition-colors shrink-0"
          >
            Browse all entries
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>

        {/* 3-Column Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayArticles.map((item, idx) => (
            <article
              key={idx}
              className="flex flex-col bg-white rounded-[24px] border border-muted-violet/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full group"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-w-768px) 100vw, 30vw"
                />
              </div>

              <div className="flex-grow p-8 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-sans font-semibold text-warm-coral uppercase tracking-widest">
                    {item.category}
                  </span>
                  <Link href={`/journal/${item.slug}`}>
                    <h3 className="font-serif text-xl font-bold text-deep-violet leading-tight group-hover:text-warm-coral transition-colors">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted-text font-light leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-muted-violet/5 text-xs font-sans text-muted-text">
                  <span>{item.date}</span>
                  <span>{item.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
