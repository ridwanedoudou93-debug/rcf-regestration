/**
 * buildGooglePayload.js
 * Adapts internal application state to the format required by the Google Apps Script backend.
 */

import { calculatePriority } from './leadScoring';

/**
 * Transforms raw form data into the specific JSON structure expected by the Google Sheets backend.
 * @param {Object} formData - Data collected from FormRenderer.
 * @returns {Object} - Transformed payload.
 */
export function buildGooglePayload(formData) {
  const { formType, formTitle, fullName, phone, wilaya, answers } = formData;
  
  // Use existing priority logic
  const priority = calculatePriority(formType, answers);
  
  return {
    formType,
    formTitle,
    fullName,
    phone,
    email: answers.email || '', // Optional email
    wilaya,
    source: "RCF Exhibition QR",
    timestamp: new Date().toISOString(),
    priority,
    status: "New",
    answers: {
      ...answers // Preserve all fields exactly as stored (including arrays/checkboxes)
    }
  };
}
