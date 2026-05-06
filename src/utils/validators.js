/**
 * validators.js
 * Validation logic for form fields.
 */

export const validateField = (value, field) => {
  if (field.required && (!value || (Array.isArray(value) && value.length === 0))) {
    return 'هذا الحقل مطلوب';
  }

  if (field.type === 'tel' && value) {
    const phoneRegex = /^(00213|\+213|0)(5|6|7)[0-9]{8}$/;
    if (!phoneRegex.test(value.replace(/\s/g, ''))) {
      return 'يرجى إدخال رقم هاتف صحيح';
    }
  }

  if (field.type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return 'يرجى إدخال بريد إلكتروني صحيح';
    }
  }

  return null;
};
