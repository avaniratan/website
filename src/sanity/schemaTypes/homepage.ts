export const homepage = {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'heroSupportingText',
      title: 'Hero Supporting Text',
      type: 'text',
    },
    {
      name: 'heroPortrait',
      title: 'Hero Portrait Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'heroCtaLabel',
      title: 'Hero CTA Label',
      type: 'string',
      initialValue: 'Book an Appointment',
    },
    {
      name: 'heroSecondaryCtaLabel',
      title: 'Hero Secondary CTA Label',
      type: 'string',
      initialValue: 'Meet Avani',
    },
    {
      name: 'aboutEyebrow',
      title: 'About Eyebrow',
      type: 'string',
      initialValue: 'Hi, I’m Avani.',
    },
    {
      name: 'aboutHeading',
      title: 'About Heading',
      type: 'string',
    },
    {
      name: 'aboutIntroduction',
      title: 'About Introduction',
      type: 'text',
    },
    {
      name: 'aboutImage',
      title: 'About Therapy Room Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'credentials',
      title: 'Credentials & Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value', type: 'string', description: 'e.g., PhD or 9+ Years' },
            { name: 'label', title: 'Label', type: 'string', description: 'e.g., Experience' }
          ]
        }
      ]
    },
    {
      name: 'approachHeading',
      title: 'Approach Heading',
      type: 'string',
    },
    {
      name: 'approachParagraph',
      title: 'Approach Paragraph',
      type: 'text',
    },
    {
      name: 'approachImage',
      title: 'Approach Warm Interior Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'showTestimonials',
      title: 'Show Testimonials Section',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'showJournal',
      title: 'Show Journal Preview Section',
      type: 'boolean',
      initialValue: true,
    }
  ]
};
