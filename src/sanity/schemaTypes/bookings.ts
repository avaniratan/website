export const bookings = {
  name: 'bookings',
  title: 'Bookings',
  type: 'document',
  fields: [
    {
      name: 'bookingReference',
      title: 'Booking Reference',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      readOnly: true,
    },
    {
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule: any) => Rule.required().email(),
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'service',
      title: 'Selected Service / Session Type',
      type: 'reference',
      to: [{ type: 'services' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'sessionMode',
      title: 'Session Mode',
      type: 'string',
      description: 'e.g. Online, In-person',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'appointmentDate',
      title: 'Appointment Date (YYYY-MM-DD)',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'startTime',
      title: 'Start Time (HH:MM)',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'endTime',
      title: 'End Time (HH:MM)',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'timezone',
      title: 'Client Timezone',
      type: 'string',
      initialValue: 'Asia/Kolkata',
    },
    {
      name: 'message',
      title: 'Optional Message / Notes from Client',
      type: 'text',
    },
    {
      name: 'status',
      title: 'Booking Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending / Unconfirmed', value: 'pending' },
          { title: 'Confirmed', value: 'confirmed' },
          { title: 'Cancelled', value: 'cancelled' },
          { title: 'Completed', value: 'completed' },
          { title: 'Rescheduled', value: 'rescheduled' },
          { title: 'No-Show', value: 'noshow' }
        ]
      },
      initialValue: 'confirmed',
    },
    {
      name: 'adminNotes',
      title: 'Internal Admin Notes',
      type: 'text',
    }
  ]
};
