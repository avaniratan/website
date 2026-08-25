export const resources = {
  name: 'resources',
  title: 'Resources',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'resourceType',
      title: 'Resource Type',
      type: 'string',
      options: {
        list: [
          { title: 'PDF / Workbook', value: 'pdf' },
          { title: 'External Link / Article', value: 'link' },
          { title: 'Audio / Guided Meditation', value: 'audio' }
        ]
      },
      initialValue: 'pdf',
    },
    {
      name: 'fileUpload',
      title: 'File (if downloadable PDF/audio)',
      type: 'file',
    },
    {
      name: 'externalLink',
      title: 'External Link',
      type: 'url',
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'e.g., Mindfulness, Relationships, Worksheets',
    },
    {
      name: 'published',
      title: 'Published Status',
      type: 'boolean',
      initialValue: true,
    }
  ]
};
