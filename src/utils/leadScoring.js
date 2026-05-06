/**
 * leadScoring.js
 * Priority logic based on form answers.
 */

export const calculatePriority = (formType, answers) => {
  if (formType === 'visitor') {
    const highNeeds = ['شراء مباشر', 'طلب أسعار', 'البحث عن مورد دائم'];
    if (highNeeds.includes(answers.needType)) return 'High';
    if (answers.needType === 'طلب كتالوج') return 'Medium';
    return 'Low';
  }

  if (formType === 'company') {
    const highPartnerships = ['شراكة طويلة المدى', 'شراء بالجملة', 'توزيع منتجات RCF'];
    const isHighPartnership = answers.partnershipType?.some(p => highPartnerships.includes(p));
    
    if (isHighPartnership || answers.expectedVolume === 'كبير') return 'High';
    if (answers.expectedVolume === 'متوسط') return 'Medium';
    return 'Low';
  }

  if (formType === 'talent') {
    const highExp = ['من 3 إلى 5 سنوات', 'أكثر من 5 سنوات'];
    if (highExp.includes(answers.experienceLevel) || answers.availability === 'نعم، فورًا') {
      return 'High';
    }
    
    const isMediumExp = answers.experienceLevel === 'من 1 إلى 3 سنوات';
    const hasTraits = answers.selfTraits?.includes('جاد') && answers.selfTraits?.includes('أتعلم بسرعة');
    
    if (isMediumExp || hasTraits) return 'Medium';
    return 'Low';
  }

  return 'Low';
};
