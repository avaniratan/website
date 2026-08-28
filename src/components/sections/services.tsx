import React from 'react';
import Link from 'next/link';
import * as Icons from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
  colorTheme: string;
  slug: string;
}

const colorMap: Record<string, { bg: string; hover: string; border: string; text: string; iconBg: string }> = {
  lavender: {
    bg: 'bg-[#F2EFF5]',
    hover: 'hover:bg-[#EAE4F0]',
    border: 'border-[#DDD5E6]',
    text: 'text-[#4A3B58]',
    iconBg: 'bg-[#E1D9EB]'
  },
  blush: {
    bg: 'bg-[#F9EFF0]',
    hover: 'hover:bg-[#F2DFE1]',
    border: 'border-[#EAD3D5]',
    text: 'text-[#583B3E]',
    iconBg: 'bg-[#EFD5D8]'
  },
  sage: {
    bg: 'bg-[#EEF3F0]',
    hover: 'hover:bg-[#E1EAE4]',
    border: 'border-[#D5E2D9]',
    text: 'text-[#3B5845]',
    iconBg: 'bg-[#D9E6DD]'
  },
  beige: {
    bg: 'bg-[#FAF5EE]',
    hover: 'hover:bg-[#F2EADA]',
    border: 'border-[#EBE0CD]',
    text: 'text-[#584D3B]',
    iconBg: 'bg-[#EFE3CF]'
  },
  peach: {
    bg: 'bg-[#FAF1ED]',
    hover: 'hover:bg-[#F5E2DA]',
    border: 'border-[#EDD4C7]',
    text: 'text-[#5E4237]',
    iconBg: 'bg-[#F2DCD0]'
  },
  stone: {
    bg: 'bg-[#F2F2F2]',
    hover: 'hover:bg-[#E6E6E6]',
    border: 'border-[#DBDBDB]',
    text: 'text-[#3E3E3E]',
    iconBg: 'bg-[#E1E1E1]'
  }
};

function ServiceCard({ title, description, iconName, colorTheme, slug }: ServiceCardProps) {
  const theme = colorMap[colorTheme] || colorMap.beige;
  
  // Resolve Lucide Icon dynamically
  const IconComponent = (Icons as any)[iconName] || Icons.HelpCircle;

  return (
    <div
      className={`group flex flex-col justify-between p-8 rounded-[24px] border ${theme.bg} ${theme.border} ${theme.hover} transition-all duration-300 shadow-sm hover:shadow-md h-full`}
    >
      <div>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${theme.iconBg} ${theme.text}`}>
          <IconComponent className="w-6 h-6" />
        </div>

        <h3 className="font-serif text-xl md:text-2xl font-semibold mb-3 text-deep-violet">
          {title}
        </h3>

        <p className="text-sm md:text-base text-muted-text font-light leading-relaxed">
          {description}
        </p>
      </div>

      <div className="pt-6">
        <Link
          href={`/services#${slug}`}
          className="group inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold uppercase tracking-wider text-deep-violet hover:text-warm-coral transition-colors"
        >
          Explore More
          <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}

export function AreasOfSupport() {
  const defaultServices = [
    {
      title: 'Anxiety & Overwhelm',
      description: 'Break free from chronic worry, panic, nervous tension, and physical stress markers in a structured, soothing manner.',
      iconName: 'Flame',
      colorTheme: 'lavender',
      slug: 'anxiety-overwhelm'
    },
    {
      title: 'Burnout & Exhaustion',
      description: 'Regain your energy, rediscover boundaries, align career needs with body signals, and re-establish daily rest models.',
      iconName: 'ShieldAlert',
      colorTheme: 'blush',
      slug: 'burnout-exhaustion'
    },
    {
      title: 'Relationship Dynamics',
      description: 'Understand attachment patterns, establish safe boundary habits, repair communication breakdowns, and foster mutual respect.',
      iconName: 'Heart',
      colorTheme: 'sage',
      slug: 'relationship-dynamics'
    },
    {
      title: 'ADHD & Executive Functioning',
      description: 'Understand attention, motivation, procrastination, emotional regulation, and the patterns that make everyday life feel harder than it should.',
      iconName: 'Compass',
      colorTheme: 'beige',
      slug: 'adhd-executive-functioning'
    },
    {
      title: 'Attachment Patterns & Relationships',
      description: 'Understand how early relational experiences shape the way you connect, communicate, seek reassurance, handle conflict, and experience closeness.',
      iconName: 'Users',
      colorTheme: 'peach',
      slug: 'attachment-patterns-relationships'
    },
    {
      title: 'Depression & Low Mood',
      description: 'Slowly rebuild daily cycles, identify cognitive traps, restore motivation, and navigate the fog of apathy step-by-step.',
      iconName: 'Activity',
      colorTheme: 'stone',
      slug: 'depression-low-mood'
    },
    {
      title: 'OCD & Intrusive Thoughts',
      description: 'Employ exposure therapy structures to quiet compulsive routines, safely manage intrusive fears, and lower anxiety levels.',
      iconName: 'Brain',
      colorTheme: 'lavender',
      slug: 'ocd-intrusive-thoughts'
    },
    {
      title: 'Life Transitions',
      description: 'Navigate complex life changes, role shifts, career redirection, relocation, grief, and self-identity re-discovery.',
      iconName: 'Shuffle',
      colorTheme: 'stone',
      slug: 'life-transitions'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Centered Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs md:text-sm font-sans font-semibold text-warm-coral uppercase tracking-widest">
            Ways I can support you
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-deep-violet leading-tight">
            Areas of support & specialized care
          </h2>
          <p className="text-sm md:text-base text-muted-text font-light">
            Therapeutic assistance customized for your exact mental well-being goals.
          </p>
        </div>

        {/* 3-Column Grid on Desktop, 1-Column on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {defaultServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              iconName={service.iconName}
              colorTheme={service.colorTheme}
              slug={service.slug}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
