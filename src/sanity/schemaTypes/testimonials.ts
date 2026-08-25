export const testimonials = {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'clientName',
      title: 'Client Name (or Anonymous label)',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'designation',
      title: 'Designation / Detail',
      type: 'string',
      description: 'e.g. Anxiety Client, 6 months therapy',
    },
    {
      name: 'published',
      title: 'Published Toggle',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'featured',
      title: 'Featured Toggle',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }
  ]
};
