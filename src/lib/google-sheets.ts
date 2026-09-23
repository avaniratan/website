/**
 * Sends booking/lead data to a Google Apps Script Web App, which appends
 * it as a row in a Google Sheet. See scripts/google-apps-script.gs for the
 * companion script to deploy on the Sheet side.
 *
 * Configure GOOGLE_SHEETS_WEBHOOK_URL in your environment to enable this.
 * If unset or failing, bookings still succeed but the route can report/log
 * the sync status for debugging.
 */
export async function logLeadToGoogleSheet(lead: {
  bookingReference: string;
  clientName: string;
  email: string;
  phone: string;
  serviceName: string;
  sessionMode: string;
  appointmentDate: string;
  startTime: string;
  endTime: string;
  message?: string;
}): Promise<boolean> {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn('Google Sheets lead sync skipped: GOOGLE_SHEETS_WEBHOOK_URL is not set.');
    return false;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: process.env.GOOGLE_SHEETS_WEBHOOK_SECRET || '',
        timestamp: new Date().toISOString(),
        ...lead
      })
    });

    const text = await response.text();
    let payload: { success?: boolean; error?: string } | null = null;

    try {
      payload = JSON.parse(text);
    } catch {
      payload = null;
    }

    if (!response.ok || payload?.success === false) {
      console.error('Google Sheets lead sync failed:', {
        status: response.status,
        error: payload?.error || text || response.statusText
      });
      return false;
    }

    return true;
  } catch (error) {
    // Never fail the booking flow because of the sheet sync
    console.error('Error logging lead to Google Sheet:', error);
    return false;
  }
}
