/**
 * googleSheetsApi.js
 * Handles direct communication with the Google Apps Script endpoint.
 */

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxbbag97sXW4gqGm_ohBCSpCEQBfjCPNUTe4LCCV7wJMTlt4yTNHT9gA_2AG4JBzuviPA/exec';

/**
 * Sends a lead payload to the Google Apps Script backend.
 * @param {Object} payload - The transformed lead data.
 * @returns {Promise<Object>} - The response from the server.
 */
export async function sendLeadToGoogleSheets(payload) {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Apps Script requires no-cors for simple redirects, or proper CORS handling
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // Note: with mode 'no-cors', the response type is 'opaque', meaning we can't read the body.
    // However, if the request is successful, it will still trigger the success flow.
    // For a production system where we need to parse JSON, the Apps Script must handle CORS correctly.
    // Assuming the endpoint handles CORS or we use a standard fetch if CORS is enabled:
    
    /* 
    If CORS is enabled on the script side:
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return await response.json();
    */

    // Given the constraints and typical Apps Script behavior:
    return { success: true, message: 'Request sent to Google Sheets' };
  } catch (error) {
    console.error('Google Sheets API Error:', error);
    throw error;
  }
}
