/**
 * submissionService.js
 * Isolated submission logic for future Google Sheets integration.
 * Currently saves to localStorage.
 */

import { calculatePriority } from '../utils/leadScoring';

export const submitLead = async (formData) => {
  try {
    const priority = calculatePriority(formData.formType, formData.answers);
    
    const lead = {
      timestamp: new Date().toISOString(),
      ...formData,
      status: "New",
      priority,
      source: "RCF Exhibition QR"
    };

    // Log to console for debugging
    console.log("Submitting Lead:", lead);

    // Save to localStorage
    const existingLeads = JSON.parse(localStorage.getItem('rcf_leads') || '[]');
    existingLeads.push(lead);
    localStorage.setItem('rcf_leads', JSON.stringify(existingLeads));

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));

    return { success: true };
  } catch (error) {
    console.error("Submission Error:", error);
    return { success: false, error: error.message };
  }
};
