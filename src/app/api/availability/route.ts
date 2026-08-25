import { NextResponse } from 'next/server';
import { format, parseISO } from 'date-fns';
import { client } from '@/sanity/client';
import { calculateAvailableSlots } from '@/lib/booking/generator';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const dateStr = searchParams.get('date'); // YYYY-MM-DD

  if (!dateStr || !/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    return NextResponse.json({ error: 'Valid date parameter YYYY-MM-DD is required.' }, { status: 400 });
  }

  try {
    const parsedDate = parseISO(dateStr);
    const dayName = format(parsedDate, 'eeee').toLowerCase(); // e.g. monday

    // Fetch template, overrides, blocked dates, and bookings concurrently
    const [weeklyTemplate, override, blockedDatesList, existingBookings] = await Promise.all([
      client.fetch(
        `*[_type == "availability" && dayOfWeek == $dayName][0]`,
        { dayName }
      ),
      client.fetch(
        `*[_type == "overrides" && date == $dateStr][0]`,
        { dateStr }
      ),
      client.fetch(
        `*[_type == "blockedDates" && (startDate == $dateStr || (startDate <= $dateStr && endDate >= $dateStr))]`
      ),
      client.fetch(
        `*[_type == "bookings" && appointmentDate == $dateStr && status in ["confirmed", "pending"]] {
          startTime,
          endTime
        }`,
        { dateStr }
      )
    ]);

    const slots = calculateAvailableSlots({
      dateStr,
      dayOfWeek: dayName,
      weeklyTemplate,
      override,
      blockedDatesList,
      existingBookings
    });

    return NextResponse.json({ slots });
  } catch (error: any) {
    console.error('Error fetching availability:', error);
    return NextResponse.json({ error: 'Failed to calculate slot availability.' }, { status: 500 });
  }
}
