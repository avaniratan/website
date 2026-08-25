import { addMinutes, parse, format } from 'date-fns';

export interface TimeSlot {
  startTime: string; // HH:MM
  endTime: string;   // HH:MM
}

/**
 * Generate available time slots based on windows, duration, and buffers.
 */
export function generateSlots(
  startTimeStr: string,
  endTimeStr: string,
  durationMinutes: number,
  bufferMinutes: number
): TimeSlot[] {
  const slots: TimeSlot[] = [];
  const formatStr = 'HH:mm';

  let current = parse(startTimeStr, formatStr, new Date());
  const end = parse(endTimeStr, formatStr, new Date());

  while (current < end) {
    const slotEnd = addMinutes(current, durationMinutes);
    if (slotEnd <= end) {
      slots.push({
        startTime: format(current, formatStr),
        endTime: format(slotEnd, formatStr)
      });
    }
    // Advance current slot by duration + buffer
    current = addMinutes(slotEnd, bufferMinutes);
  }

  return slots;
}

/**
 * Calculate list of slots checking for template, overrides, blocked dates, and existing bookings.
 */
export function calculateAvailableSlots({
  dateStr,
  dayOfWeek,
  weeklyTemplate,
  override,
  blockedDatesList,
  existingBookings
}: {
  dateStr: string;
  dayOfWeek: string;
  weeklyTemplate?: { windows?: { startTime: string; endTime: string }[]; sessionDuration?: number; bufferTime?: number; active?: boolean };
  override?: { status: string; windows?: { startTime: string; endTime: string }[] };
  blockedDatesList: { startDate: string; endDate?: string; fullDay?: boolean }[];
  existingBookings: { startTime: string; endTime: string }[];
}): TimeSlot[] {
  
  // 1. Check if the date is blocked full-day
  const isBlocked = blockedDatesList.some(b => {
    if (b.fullDay !== false) {
      if (b.endDate) {
        return dateStr >= b.startDate && dateStr <= b.endDate;
      }
      return b.startDate === dateStr;
    }
    return false;
  });

  if (isBlocked) return [];

  // 2. Determine active windows on this date (Check overrides first)
  let activeWindows: { startTime: string; endTime: string }[] = [];
  let duration = 50;
  let buffer = 10;

  if (override) {
    if (override.status === 'unavailable') {
      return []; // Off day override
    }
    activeWindows = override.windows || [];
  } else if (weeklyTemplate && weeklyTemplate.active !== false) {
    activeWindows = weeklyTemplate.windows || [];
    duration = weeklyTemplate.sessionDuration || duration;
    buffer = weeklyTemplate.bufferTime || buffer;
  } else {
    // No templates or override on this day means unavailable by default
    return [];
  }

  // 3. Generate all theoretically possible slots
  let allSlots: TimeSlot[] = [];
  activeWindows.forEach(window => {
    const windowSlots = generateSlots(window.startTime, window.endTime, duration, buffer);
    allSlots = [...allSlots, ...windowSlots];
  });

  // 4. Filter out slots overlapping with existing bookings
  const available = allSlots.filter(slot => {
    const isBooked = existingBookings.some(booking => {
      // Direct overlap test
      return (
        (slot.startTime >= booking.startTime && slot.startTime < booking.endTime) ||
        (slot.endTime > booking.startTime && slot.endTime <= booking.endTime) ||
        (booking.startTime >= slot.startTime && booking.startTime < slot.endTime)
      );
    });
    return !isBooked;
  });

  return available;
}
