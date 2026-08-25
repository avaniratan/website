export const services = {
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Service Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'fullDescription',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'icon',
      title: 'Icon Name (Lucide standard)',
      type: 'string',
      description: 'e.g., Flame, ShieldAlert, Heart, Activity, Brain, Shuffle',
    },
    {
      name: 'cardColor',
      title: 'Card Background Accent',
      type: 'string',
      description: 'Options: lavender, blush, sage, beige, peach, stone',
      initialValue: 'beige',
    },
    {
      name: 'sessionDuration',
      title: 'Session Duration (Minutes)',
      type: 'number',
      initialValue: 50,
    },
    {
      name: 'sessionMode',
      title: 'Session Mode',
      type: 'string',
      description: 'Online, In-person, or Hybrid',
      initialValue: 'Hybrid',
    },
    {
      name: 'fee',
      title: 'Fee / Pricing Display',
      type: 'string',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Inactive', value: 'inactive' }
        ]
      },
      initialValue: 'active',
    },
    {
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }
  ]
};
