export const availability = {
  name: 'availability',
  title: 'Weekly Availability Template',
  type: 'document',
  fields: [
    {
      name: 'dayOfWeek',
      title: 'Day of the Week',
      type: 'string',
      options: {
        list: [
          { title: 'Monday', value: 'monday' },
          { title: 'Tuesday', value: 'tuesday' },
          { title: 'Wednesday', value: 'wednesday' },
          { title: 'Thursday', value: 'thursday' },
          { title: 'Friday', value: 'friday' },
          { title: 'Saturday', value: 'saturday' },
          { title: 'Sunday', value: 'sunday' }
        ]
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'windows',
      title: 'Availability Windows',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'startTime',
              title: 'Start Time (24h format - HH:MM)',
              type: 'string',
              description: 'e.g. 09:00',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'endTime',
              title: 'End Time (24h format - HH:MM)',
              type: 'string',
              description: 'e.g. 17:00',
              validation: (Rule: any) => Rule.required(),
            }
          ]
        }
      ]
    },
    {
      name: 'sessionDuration',
      title: 'Custom Session Duration for this day (Minutes)',
      type: 'number',
    },
    {
      name: 'bufferTime',
      title: 'Custom Buffer Time for this day (Minutes)',
      type: 'number',
    },
    {
      name: 'active',
      title: 'Active status for this day',
      type: 'boolean',
      initialValue: true,
    }
  ]
};
