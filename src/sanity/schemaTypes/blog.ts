export const blog = {
  name: 'blog',
  title: 'Blog / Journal',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'imageAlt',
      title: 'Image Alt Text',
      type: 'string',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'Dr. Avani',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'body',
      title: 'Body Text',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } }
      ]
    },
    {
      name: 'publishedDate',
      title: 'Published Date',
      type: 'date',
    },
    {
      name: 'readingTime',
      title: 'Reading Time (Minutes)',
      type: 'number',
      initialValue: 5,
    },
    {
      name: 'seoTitle',
      title: 'SEO Title Override',
      type: 'string',
    },
    {
      name: 'seoDescription',
      title: 'SEO Description Override',
      type: 'text',
    },
    {
      name: 'published',
      title: 'Published Status',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      initialValue: false,
    }
  ]
};
