/**
 * Google Apps Script — deploy this bound to a Google Sheet to receive
 * booking leads from the Next.js API route (src/lib/google-sheets.ts).
 *
 * Setup:
 * 1. Open (or create) a Google Sheet to store leads.
 * 2. Extensions -> Apps Script, paste this file's contents, replacing any boilerplate.
 * 3. Set SHARED_SECRET below to a random string of your choice.
 * 4. Deploy -> New deployment -> Type: "Web app".
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the deployment's Web app URL.
 * 6. In your Next.js project's environment variables, set:
 *      GOOGLE_SHEETS_WEBHOOK_URL=<the web app URL>
 *      GOOGLE_SHEETS_WEBHOOK_SECRET=<the same SHARED_SECRET value>
 * 7. Redeploy the Next.js app so the new env vars take effect.
 */

const SHARED_SECRET = 'replace-with-a-long-random-string';
const SHEET_NAME = 'Leads';
const HEADERS = [
  'Timestamp',
  'Booking Reference',
  'Client Name',
  'Email',
  'Phone',
  'Service',
  'Session Mode',
  'Appointment Date',
  'Start Time',
  'End Time',
  'Message'
];

function doGet() {
  return jsonResponse({
    success: true,
    message: 'Google Sheets lead webhook is deployed.',
    sheetName: SHEET_NAME
  });
}

function doPost(e) {
  try {
    if (!e.postData || !e.postData.contents) {
      return jsonResponse({ success: false, error: 'Missing request body' });
    }

    const payload = JSON.parse(e.postData.contents);

    if (SHARED_SECRET && payload.secret !== SHARED_SECRET) {
      return jsonResponse({ success: false, error: 'Unauthorized' });
    }

    const sheet = getOrCreateSheet();

    sheet.appendRow([
      payload.timestamp || new Date().toISOString(),
      payload.bookingReference || '',
      payload.clientName || '',
      payload.email || '',
      payload.phone || '',
      payload.serviceName || '',
      payload.sessionMode || '',
      payload.appointmentDate || '',
      payload.startTime || '',
      payload.endTime || '',
      payload.message || ''
    ]);

    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ success: false, error: String(error) });
  }
}

function getOrCreateSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }

  return sheet;
}

function jsonResponse(body) {
  const output = ContentService.createTextOutput(JSON.stringify(body));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}
