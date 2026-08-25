export const overrides = {
  name: 'overrides',
  title: 'Availability Overrides',
  type: 'document',
  fields: [
    {
      name: 'date',
      title: 'Override Date (YYYY-MM-DD)',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'status',
      title: 'Status on this Date',
      type: 'string',
      options: {
        list: [
          { title: 'Available (with custom times)', value: 'available' },
          { title: 'Unavailable / Off-day', value: 'unavailable' }
        ]
      },
      initialValue: 'unavailable',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'windows',
      title: 'Custom Availability Windows (if status is available)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'startTime',
              title: 'Start Time (24h format - HH:MM)',
              type: 'string',
              description: 'e.g. 10:00',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'endTime',
              title: 'End Time (24h format - HH:MM)',
              type: 'string',
              description: 'e.g. 15:00',
              validation: (Rule: any) => Rule.required(),
            }
          ]
        }
      ]
    },
    {
      name: 'note',
      title: 'Internal Admin Notes',
      type: 'string',
      description: 'Reason for override, e.g. Doctor appointment, conference',
    }
  ]
};
export const blockedDates = {
  name: 'blockedDates',
  title: 'Blocked Dates / Holidays',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Reason / Label',
      type: 'string',
    },
    {
      name: 'startDate',
      title: 'Start Date (YYYY-MM-DD)',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'endDate',
      title: 'End Date (YYYY-MM-DD)',
      type: 'date',
      description: 'Leave empty for a single-day block',
    },
    {
      name: 'fullDay',
      title: 'Full Day Block',
      type: 'boolean',
      initialValue: true,
    }
  ]
};
