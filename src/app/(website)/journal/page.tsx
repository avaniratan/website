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

export default async function JournalPage() {
  let allArticles: any[] = [];

  try {
    const fetched = await client.fetch(
      `*[_type == "blog" && published == true] | order(publishedDate desc, _createdAt desc) {
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
      allArticles = fetched.map((item: any) => ({
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
    console.error('Error fetching journal page articles from Sanity:', err);
  }

  const displayArticles = allArticles.length > 0 ? allArticles : mockArticles;

  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-8">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
        <span className="text-xs md:text-sm font-sans font-semibold text-warm-coral uppercase tracking-widest">
          Insights & Writing
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-deep-violet">
          The Therapy Journal
        </h1>
        <p className="text-sm md:text-base text-muted-text font-light leading-relaxed">
          Reflections, guides, and articles exploring mental resilience, boundary work, and personal evolution.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayArticles.map((article, idx) => (
          <article
            key={idx}
            className="flex flex-col bg-white rounded-[24px] border border-muted-violet/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full group"
          >
            <div className="relative w-full aspect-[16/10] overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-w-768px) 100vw, 30vw"
              />
            </div>

            <div className="flex-grow p-8 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-3">
                <span className="text-xs font-sans font-semibold text-warm-coral uppercase tracking-widest">
                  {article.category}
                </span>
                <Link href={`/journal/${article.slug}`}>
                  <h3 className="font-serif text-xl font-bold text-deep-violet leading-tight hover:text-warm-coral transition-colors">
                    {article.title}
                  </h3>
                </Link>
                <p className="text-sm text-muted-text font-light leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-muted-violet/5 text-xs font-sans text-muted-text">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}
