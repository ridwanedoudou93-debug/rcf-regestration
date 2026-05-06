/**
 * submissionService.js
 * Handles data persistence to localStorage and Google Sheets.
 */

import { sendLeadToGoogleSheets } from '../api/googleSheetsApi';
import { buildGooglePayload } from '../utils/buildGooglePayload';

const STORAGE_KEY = 'rcf_leads';

/**
 * Main submission function.
 * 1. Builds the payload.
 * 2. Saves locally to localStorage (offline-first).
 * 3. Attempts to send to Google Sheets.
 * 4. Updates sync status in localStorage.
 */
export const submitLead = async (formData) => {
  let payload;
  try {
    // 1. Build Payload
    payload = buildGooglePayload(formData);
    
    // 2. Save Locally (Initial state: pending_sync)
    const localLead = {
      ...payload,
      syncStatus: 'pending_sync',
      id: `lead_${Date.now()}` // Unique ID for local tracking
    };
    
    saveToLocal(localLead);

    // 3. Send to Google Sheets
    await sendLeadToGoogleSheets(payload);

    // 4. Handle Success
    updateLocalSyncStatus(localLead.id, 'synced');
    return { success: true };

  } catch (error) {
    console.error("Submission Error (Will retry later):", error);
    // Even if remote fails, we return success: true because it's saved locally
    // and will be retried via background sync.
    return { success: true, offline: true };
  }
};

/**
 * Helper to save lead to localStorage.
 */
function saveToLocal(lead) {
  const existingLeads = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  existingLeads.push(lead);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existingLeads));
}

/**
 * Helper to update sync status of a specific lead in localStorage.
 */
function updateLocalSyncStatus(id, status) {
  const existingLeads = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  const updatedLeads = existingLeads.map(lead => 
    lead.id === id ? { ...lead, syncStatus: status } : lead
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedLeads));
}

/**
 * Background Sync: Retries all leads marked as 'pending_sync'.
 */
export const syncPendingLeads = async () => {
  const existingLeads = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  const pendingLeads = existingLeads.filter(lead => lead.syncStatus === 'pending_sync');

  if (pendingLeads.length === 0) return;

  console.log(`🔄 Attempting to sync ${pendingLeads.length} pending leads...`);

  for (const lead of pendingLeads) {
    try {
      // Remove local-only fields before sending
      const { syncStatus, id, ...payload } = lead;
      await sendLeadToGoogleSheets(payload);
      updateLocalSyncStatus(id, 'synced');
      console.log(`✅ Lead ${id} synced successfully.`);
    } catch (error) {
      console.error(`❌ Failed to sync lead ${lead.id}:`, error);
    }
  }
};
