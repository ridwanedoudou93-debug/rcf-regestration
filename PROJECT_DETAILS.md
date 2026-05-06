# Project Documentation: RCF Registration System

## 1. Overview
**Project Name**: rcf-regestration  
**Client**: El Ridwane Chaud & Froid (RCF) - شركة الرضوان للتبريد والتدفئة  
**Core Purpose**: A high-conversion lead capture web application designed for the Algerian market, specifically for use during exhibitions and via QR code marketing. It categorizes and scores potential leads (customers, partners, and job seekers) in real-time.

---

## 2. Technical Stack
- **Frontend Framework**: [React 19](file:///c%3A/Users/user/Desktop/rcf/rcf%20regestration/package.json)
- **Build Tool**: [Vite](file:///c%3A/Users/user/Desktop/rcf/rcf%20regestration/vite.config.js)
- **Icons**: [Lucide-React](file:///c%3A/Users/user/Desktop/rcf/rcf%20regestration/package.json)
- **State Management**: React Hooks (`useState`, `useEffect`)
- **Styling**: Vanilla CSS with CSS Variables for brand identity.
- **Language/Localization**: Arabic (RTL support) as the primary interface.

---

## 3. Key Features
### 🚀 Dynamic Form Engine
The application uses a schema-driven approach. All form steps, fields, and options are defined in [formSchemas.js](file:///c%3A/Users/user/Desktop/rcf/rcf%20regestration/src/data/formSchemas.js), allowing for easy updates without changing the core component logic.

### 🧠 Intelligent Lead Scoring
The system automatically prioritizes submissions using logic in [leadScoring.js](file:///c%3A/Users/user/Desktop/rcf/rcf%20regestration/src/utils/leadScoring.js):
- **High Priority**: Direct purchase intent, large volume partnerships, or candidates with 5+ years of experience.
- **Medium Priority**: Catalog requests or candidates with 1-3 years of experience.
- **Low Priority**: General inquiries or inexperienced talent.

### 🏢 Multi-Path User Experience
Users choose one of three specialized paths on the [LandingPage](file:///c%3A/Users/user/Desktop/rcf/rcf%20regestration/src/pages/LandingPage.jsx):
1. **Visitor (زائر)**: Focused on retail sales and technician inquiries.
2. **Company (شركة)**: Focused on B2B, distribution, and wholesale opportunities.
3. **Talent (كفاءة)**: A streamlined recruitment intake for HR.

### 💾 Robust Data Handling
Submissions are managed by [submissionService.js](file:///c%3A/Users/user/Desktop/rcf/rcf%20regestration/src/services/submissionService.js). Currently, data is persisted to `localStorage` (key: `rcf_leads`) with a simulated delay to mimic a backend API, making it ready for future integration with Google Sheets or a database.

---

## 4. Architecture & Directory Structure
- **[src/data/](file:///c%3A/Users/user/Desktop/rcf/rcf%20regestration/src/data/)**: The "brain" of the app.
    - `brand.js`: Contains all colors, company strings, and UI translations.
    - `formSchemas.js`: Defines the structure of all three registration paths.
- **[src/components/](file:///c%3A/Users/user/Desktop/rcf/rcf%20regestration/src/components/)**: Reusable UI logic.
    - `FormRenderer.jsx`: Manages step navigation and form state.
    - `FieldRenderer.jsx`: Handles input types (text, radio, checkbox, select, tel).
    - `ProgressSteps.jsx`: Visual indicator of form progress.
- **[src/utils/](file:///c%3A/Users/user/Desktop/rcf/rcf%20regestration/src/utils/)**: Pure helper functions.
    - `validators.js`: Real-time validation for phone numbers and required fields.
    - `leadScoring.js`: Business logic for prioritizing leads.

---

## 5. Brand Identity
The app's visual identity is centralized in [brand.js](file:///c%3A/Users/user/Desktop/rcf/rcf%20regestration/src/data/brand.js).
- **Primary Colors**: Deep Blue (`#123A63`) and Vibrant Orange (`#F58220`).
- **Typography**: Optimized for Arabic readability.
- **Tagline**: "خبرة تثق بها... وجودة تعتمد عليها" (Expertise you trust... Quality you rely on).

---

## 6. Maintenance & Scalability
- **Adding a field**: Simply add a new object to the `steps` array in [formSchemas.js](file:///c%3A/Users/user/Desktop/rcf/rcf%20regestration/src/data/formSchemas.js).
- **Changing colors**: Update the `colors` object in [brand.js](file:///c%3A/Users/user/Desktop/rcf/rcf%20regestration/src/data/brand.js).
- **Exporting Data**: Leads can be retrieved from the browser's Local Storage under the key `rcf_leads`.
