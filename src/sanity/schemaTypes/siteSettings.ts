export const siteSettings = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'therapistName',
      title: 'Therapist Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'professionalTitle',
      title: 'Professional Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'logoText',
      title: 'Logo Text',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Contact Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'whatsapp',
      title: 'WhatsApp Number',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address / Location',
      type: 'text',
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Platform', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' }
          ]
        }
      ]
    },
    {
      name: 'seoTitle',
      title: 'Default SEO Title',
      type: 'string',
    },
    {
      name: 'seoDescription',
      title: 'Meta Description',
      type: 'text',
    },
    {
      name: 'seoImage',
      title: 'Social Sharing Image',
      type: 'image',
    },
    {
      name: 'bookingTimezone',
      title: 'Booking Timezone',
      type: 'string',
      description: 'e.g., Asia/Kolkata',
      initialValue: 'Asia/Kolkata',
    },
    {
      name: 'minBookingNotice',
      title: 'Minimum Booking Notice (Hours)',
      type: 'number',
      initialValue: 24,
    },
    {
      name: 'maxAdvanceBooking',
      title: 'Maximum Advance Booking Period (Days)',
      type: 'number',
      initialValue: 60,
    },
    {
      name: 'defaultSessionDuration',
      title: 'Default Session Duration (Minutes)',
      type: 'number',
      initialValue: 50,
    },
    {
      name: 'bufferBetweenSessions',
      title: 'Buffer Between Sessions (Minutes)',
      type: 'number',
      initialValue: 10,
    }
  ]
};
