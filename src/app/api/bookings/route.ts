import { NextResponse } from 'next/server';
import { writeClient } from '@/sanity/client';
import { bookingFormSchema } from '@/lib/validation/booking';
import { logLeadToGoogleSheet } from '@/lib/google-sheets';
import { addMinutes, parse, format } from 'date-fns';

const fallbackServices: Record<string, { name: string; sessionDuration: number }> = {
  'anxiety-overwhelm': {
    name: 'Anxiety & Overwhelm Consultation',
    sessionDuration: 50
  },
  'burnout-exhaustion': {
    name: 'Burnout & Exhaustion Healing',
    sessionDuration: 50
  },
  'relationship-dynamics': {
    name: 'Relationship Repair Therapy',
    sessionDuration: 50
  }
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // 1. Zod validation check
    const validation = bookingFormSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json({ error: validation.error.format() }, { status: 400 });
    }

    const data = validation.data;

    // 2. Fetch service duration to calculate endTime
    const sanityService = await writeClient.fetch(
      `*[_type == "services" && _id == $serviceId][0]`,
      { serviceId: data.serviceId }
    );
    const service = sanityService && !Array.isArray(sanityService)
      ? sanityService
      : fallbackServices[data.serviceId];

    if (!service) {
      return NextResponse.json({ error: 'Selected service type does not exist.' }, { status: 400 });
    }

    const duration = service.sessionDuration || 50;
    const formatStr = 'HH:mm';
    const parsedStart = parse(data.startTime, formatStr, new Date());
    const parsedEnd = addMinutes(parsedStart, duration);
    const endTime = format(parsedEnd, formatStr);

    // 3. SECURE COLLISION CHECK: Check inside Sanity transaction context
    // Query if slot is already reserved by any active session
    const existingOverlaps = await writeClient.fetch(
      `*[_type == "bookings" && appointmentDate == $date && status in ["confirmed", "pending"] && startTime == $start]`,
      { date: data.appointmentDate, start: data.startTime }
    );

    if (existingOverlaps.length > 0) {
      return NextResponse.json({
        error: 'This slot has already been reserved. Please pick another date or time.'
      }, { status: 409 });
    }

    // 4. Generate readable reference ID
    const randomHex = Math.floor(100000 + Math.random() * 900000).toString();
    const reference = `AVN-${randomHex}`;

    // 5. Insert Booking into database
    const newBooking = {
      _type: 'bookings',
      bookingReference: reference,
      clientName: data.clientName,
      email: data.email,
      phone: data.phone,
      service: {
        _type: 'reference',
        _ref: data.serviceId
      },
      sessionMode: data.sessionMode,
      appointmentDate: data.appointmentDate,
      startTime: data.startTime,
      endTime,
      message: data.message || '',
      status: 'confirmed',
      timezone: 'Asia/Kolkata'
    };

    await writeClient.create(newBooking);

    // Await the Apps Script call so serverless runtimes do not drop it early.
    const leadSyncedToGoogleSheet = await logLeadToGoogleSheet({
      bookingReference: reference,
      clientName: data.clientName,
      email: data.email,
      phone: data.phone,
      serviceName: service.name,
      sessionMode: data.sessionMode,
      appointmentDate: data.appointmentDate,
      startTime: data.startTime,
      endTime,
      message: data.message
    });

    return NextResponse.json({
      success: true,
      booking: {
        reference,
        clientName: data.clientName,
        appointmentDate: data.appointmentDate,
        startTime: data.startTime,
        endTime,
        serviceName: service.name,
        sessionMode: data.sessionMode,
        leadSyncedToGoogleSheet
      }
    });

  } catch (error: unknown) {
    console.error('Error reserving booking slot:', error);
    return NextResponse.json({
      error: 'An internal server error occurred while finalizing booking.'
    }, { status: 500 });
  }
}
