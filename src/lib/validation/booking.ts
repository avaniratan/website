import { z } from 'zod';

export const bookingFormSchema = z.object({
  clientName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid contact number'),
  serviceId: z.string().min(1, 'Please select a session service'),
  sessionMode: z.string().min(1, 'Please choose a session mode'),
  appointmentDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Please pick a valid date'),
  startTime: z.string().regex(/^\d{2}:\d{2}$/, 'Please pick a valid time slot'),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: 'Consent is required to finalize booking'
  })
});


export type BookingFormValues = z.infer<typeof bookingFormSchema>;
