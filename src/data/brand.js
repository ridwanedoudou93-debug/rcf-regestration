/**
 * brand.js
 * All brand colors, company info, and repeated Arabic UI text.
 * Edit this file to change brand identity across the entire app.
 */

export const colors = {
  primaryBlue: '#123A63',
  primaryOrange: '#F58220',
  white: '#FFFFFF',
  lightGray: '#F8FAFC',
  textDark: '#0F172A',
  textMuted: '#64748B',
  border: '#E2E8F0',
  successGreen: '#10B981',
  errorRed: '#EF4444',
  orangeLight: '#FFF7ED',
  blueLight: '#EFF6FF',
};

export const company = {
  nameEn: 'El Ridwane Chaud & Froid (RCF)',
  nameAr: 'شركة الرضوان للتبريد والتدفئة',
  shortName: 'RCF',
  tagline: 'خبرة تثق بها... وجودة تعتمد عليها',
  fields: 'قطع غيار | تبريد | تدفئة | كهرومنزلي | معدات صيانة',
  source: 'RCF Exhibition QR',
};

export const ui = {
  // Landing page
  welcomeTitle: 'مرحبًا بكم في RCF',
  welcomeSubtitle: 'شركة الرضوان للتبريد والتدفئة',
  welcomeDescription: 'اختر نوع اهتمامك حتى نتواصل معك بالطريقة المناسبة',
  landingFooterNote: 'املأ النموذج في أقل من دقيقة وسيتواصل معك فريقنا.',

  // Buttons
  next: 'التالي',
  previous: 'السابق',
  submit: 'إرسال المعلومات',
  backToHome: 'العودة للصفحة الرئيسية',

  // Validation
  required: 'هذا الحقل مطلوب',
  invalidPhone: 'يرجى إدخال رقم هاتف صحيح',
  invalidEmail: 'يرجى إدخال بريد إلكتروني صحيح',
  genericError: 'حدث خطأ، يرجى المحاولة مرة أخرى',

  // Success
  successTitle: 'شكرًا لك',
  successMessage: 'تم تسجيل معلوماتك بنجاح. سيتواصل معك فريق RCF قريبًا حسب نوع اهتمامك.',
  successDone: 'تم بنجاح',

  // Progress
  stepOf: (current, total) => `الخطوة ${current} من ${total}`,

  // Footer
  footerText: 'RCF | التبريد | التدفئة | الكهرومنزلي',
};
