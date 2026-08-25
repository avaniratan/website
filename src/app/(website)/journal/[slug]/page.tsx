import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/client';
import { urlFor } from '@/sanity/image';
import { PortableText } from 'next-sanity';

interface ArticleDetailProps {
  params: Promise<{ slug: string }>;
}

const mockArticles: Record<string, { title: string; category: string; date: string; readTime: string; image: string; content: string[] }> = {
  'navigating-workplace-burnout': {
    title: 'Navigating Workplace Burnout: Signals and Restoration Steps',
    category: 'Mental Wellness',
    date: 'Aug 14, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop',
    content: [
      'Workplace burnout is more than standard physical fatigue. It is a state of emotional, physical, and mental exhaustion caused by excessive and prolonged stress. It occurs when you feel overwhelmed, emotionally drained, and unable to meet constant demands.',
      'As the stress continues, you begin to lose the interest and motivation that led you to take on a certain role in the first place. Burnout reduces productivity and saps your energy, leaving you feeling increasingly helpless, hopeless, cynical, and resentful.',
      'To begin recovery, establish strict boundary lines around your calendar. This includes declaring a hard end to your work day, shutting down laptop notifications, and scheduling non-negotiable restoration segments where you disconnect completely.'
    ]
  },
  'attachment-styles-relationship-dynamics': {
    title: 'Understanding Attachment Styles in Modern Relationship Dynamics',
    category: 'Relationships',
    date: 'Jul 28, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1469571486090-7db333758b20?q=80&w=1200&auto=format&fit=crop',
    content: [
      'Attachment theory, originally developed by John Bowlby, describes the dynamics of long-term interpersonal relationships between humans. How we bond with parental figures in infancy sets the structural template for our adult relationship habits.',
      'Anxious attachment styles often exhibit a fear of abandonment and hyper-vigilance towards emotional shifts in a partner. Conversely, avoidant attachment styles tend to retract and isolate when emotional intimacy increases, framing dependency as a safety threat.',
      'By identifying these defensive loops, couples can establish secure patterns. Secure communication involves expressing core needs clearly without defensive criticism or stonewalling.'
    ]
  },
  'grounding-techniques-panic-anxiety': {
    title: 'Practical Grounding Techniques for Panic and Severe Anxiety',
    category: 'Anxiety',
    date: 'Jun 10, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=1200&auto=format&fit=crop',
    content: [
      'When panic attacks strike, the nervous system enters an active fight-or-flight survival loop. Heart rate rises, breathing becomes shallow, and logical thinking is temporarily bypassed as the amygdala signals a high-priority threat.',
      'Grounding techniques are somatic practices designed to anchor your mind back to the physical present. The classic 5-4-3-2-1 sensory method is highly effective: identify five things you can see, four you can touch, three you can hear, two you can smell, and one you can taste.',
      'Additionally, employing deep belly breathing with prolonged exhalations directly stimulates the vagus nerve, sending chemical signals to lower heart rates and restore safety equilibrium.'
    ]
  }
};

const portableTextComponents = {
  block: {
    normal: ({ children }: any) => <p className="mb-6">{children}</p>,
    h1: ({ children }: any) => <h1 className="font-serif text-3xl font-bold mt-8 mb-4 text-deep-violet">{children}</h1>,
    h2: ({ children }: any) => <h2 className="font-serif text-2xl font-bold mt-8 mb-4 text-deep-violet">{children}</h2>,
    h3: ({ children }: any) => <h3 className="font-serif text-xl font-bold mt-6 mb-3 text-deep-violet">{children}</h3>,
  },
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full aspect-[16/9] rounded-[24px] overflow-hidden my-8 shadow-md">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || 'Blog Image'}
            fill
            className="object-cover"
          />
        </div>
      );
    }
  }
};

export default async function JournalArticlePage({ params }: ArticleDetailProps) {
  const { slug } = await params;
  let article = null;
  let isMock = false;

  try {
    const fetched = await client.fetch(
      `*[_type == "blog" && slug.current == $slug && published == true][0] {
        title,
        "category": categories[0],
        "date": publishedDate,
        "readTime": string(readingTime) + " min read",
        featuredImage,
        body
      }`,
      { slug }
    );
    if (fetched) {
      article = {
        title: fetched.title,
        category: fetched.category || 'Journal',
        date: fetched.date ? new Date(fetched.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '',
        readTime: fetched.readTime,
        image: fetched.featuredImage ? urlFor(fetched.featuredImage).url() : '/placeholders/image.jpg',
        body: fetched.body
      };
    }
  } catch (err) {
    console.error('Error fetching article detail from Sanity:', err);
  }

  // Fallback to mock data
  if (!article) {
    const mock = mockArticles[slug];
    if (mock) {
      isMock = true;
      article = {
        title: mock.title,
        category: mock.category,
        date: mock.date,
        readTime: mock.readTime,
        image: mock.image,
        body: mock.content
      };
    }
  }

  if (!article) {
    notFound();
  }

  return (
    <article className="py-16 md:py-24 max-w-3xl mx-auto px-6">
      
      {/* Back button */}
      <div className="mb-8">
        <Link href="/journal" className="text-sm font-sans text-muted-text hover:text-warm-coral transition-colors">
          &larr; Back to Journal
        </Link>
      </div>

      {/* Header */}
      <header className="flex flex-col gap-4 mb-10">
        <span className="text-xs font-sans font-semibold text-warm-coral uppercase tracking-widest">
          {article.category}
        </span>
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-deep-violet leading-tight">
          {article.title}
        </h1>
        <div className="flex items-center gap-4 text-xs font-sans text-muted-text">
          <span>{article.date}</span>
          <span>&bull;</span>
          <span>{article.readTime}</span>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative w-full aspect-[16/9] rounded-[24px] overflow-hidden mb-12 shadow-md">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          sizes="(max-w-768px) 100vw, 800px"
        />
      </div>

      {/* Article Body Content */}
      <div className="prose prose-stone max-w-none text-base md:text-lg text-muted-text font-light leading-relaxed flex flex-col gap-6">
        {isMock ? (
          (article.body as string[]).map((para, idx) => (
            <p key={idx}>{para}</p>
          ))
        ) : (
          <PortableText value={article.body} components={portableTextComponents} />
        )}
      </div>

    </article>
  );
}
