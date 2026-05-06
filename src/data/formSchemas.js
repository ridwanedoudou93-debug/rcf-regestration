/**
 * formSchemas.js
 * All form types, steps, fields, and options.
 * To change questions or add new form types, edit ONLY this file.
 */

const wilayaOptions = [
  'الجزائر', 'البليدة', 'بومرداس', 'تيبازة', 'وهران', 'قسنطينة',
  'سطيف', 'عنابة', 'باتنة', 'بسكرة', 'ورقلة', 'غرداية',
  'تمنراست', 'تلمسان', 'مستغانم', 'الشلف', 'تيارت', 'بجاية',
  'جيجل', 'أخرى'
];

export const formTypes = [
  {
    id: 'visitor',
    title: 'زائر / زبون',
    description: 'أبحث عن منتجات، أسعار، أو تعامل تجاري',
    icon: 'Store',
  },
  {
    id: 'company',
    title: 'شركة / شراكة',
    description: 'أرغب في التعاون، التوزيع، أو التعامل مع RCF',
    icon: 'Handshake',
  },
  {
    id: 'talent',
    title: 'كفاءة / فرصة عمل',
    description: 'أرغب في الانضمام إلى فريق RCF',
    icon: 'Star',
  },
];

export const formSchemas = {
  visitor: {
    formType: 'visitor',
    title: 'زائر / زبون',
    subtitle: 'للراغبين في المنتجات، الأسعار، أو التعامل التجاري',
    steps: [
      {
        title: 'معلومات أساسية',
        fields: [
          {
            name: 'fullName',
            label: 'الاسم واللقب',
            type: 'text',
            required: true,
          },
          {
            name: 'phone',
            label: 'رقم الهاتف',
            type: 'tel',
            required: true,
          },
          {
            name: 'wilaya',
            label: 'الولاية',
            type: 'select',
            required: true,
            options: wilayaOptions,
          },
        ],
      },
      {
        title: 'نوع الزائر',
        fields: [
          {
            name: 'visitorType',
            label: 'أنت تمثل؟',
            type: 'radio',
            required: true,
            options: ['فرد', 'تقني', 'صاحب ورشة صيانة', 'تاجر', 'شركة', 'موزع', 'آخر'],
          },
          {
            name: 'interestedFields',
            label: 'ما المجال الذي يهمك؟',
            type: 'checkbox',
            required: true,
            options: [
              'قطع غيار الثلاجات', 'قطع غيار الغسالات', 'قطع غيار الأفران',
              'قطع غيار المكيفات', 'معدات التبريد', 'معدات التدفئة',
              'معدات الصيانة', 'منتجات صناعية', 'أخرى'
            ],
          },
        ],
      },
      {
        title: 'نوع الاحتياج',
        fields: [
          {
            name: 'needType',
            label: 'ما نوع احتياجك؟',
            type: 'radio',
            required: true,
            options: [
              'شراء مباشر', 'طلب أسعار', 'معرفة المنتجات المتوفرة',
              'البحث عن مورد دائم', 'طلب كتالوج', 'استفسار فقط'
            ],
          },
          {
            name: 'followUp',
            label: 'هل تريد أن يتواصل معك فريق RCF؟',
            type: 'radio',
            required: true,
            options: ['نعم، في أقرب وقت', 'نعم، بعد المعرض', 'لا، أريد فقط معلومات'],
          },
          {
            name: 'contactPreference',
            label: 'أفضل طريقة للتواصل',
            type: 'radio',
            required: true,
            options: ['اتصال هاتفي', 'WhatsApp', 'Email'],
          },
        ],
      },
    ],
  },

  company: {
    formType: 'company',
    title: 'شركة / شراكة',
    subtitle: 'للشركات، الموزعين، الموردين، والمتعاونين المحتملين',
    steps: [
      {
        title: 'معلومات التواصل',
        fields: [
          {
            name: 'fullName',
            label: 'الاسم واللقب',
            type: 'text',
            required: true,
          },
          {
            name: 'phone',
            label: 'رقم الهاتف',
            type: 'tel',
            required: true,
          },
          {
            name: 'email',
            label: 'البريد الإلكتروني',
            type: 'email',
            required: false,
          },
          {
            name: 'wilaya',
            label: 'الولاية / مكان النشاط',
            type: 'select',
            required: true,
            options: wilayaOptions,
          },
        ],
      },
      {
        title: 'معلومات الشركة',
        fields: [
          {
            name: 'companyName',
            label: 'اسم الشركة',
            type: 'text',
            required: true,
          },
          {
            name: 'companyType',
            label: 'نوع الشركة',
            type: 'radio',
            required: true,
            options: [
              'شركة توزيع', 'متجر قطع غيار', 'ورشة صيانة', 'شركة صيانة',
              'شركة تركيب أنظمة تبريد وتكييف', 'مؤسسة صناعية',
              'مورد / مصنع', 'شركة خدمات', 'أخرى'
            ],
          },
          {
            name: 'experienceInField',
            label: 'هل لديكم خبرة سابقة في هذا المجال؟',
            type: 'radio',
            required: true,
            options: [
              'نعم، أكثر من 5 سنوات', 'نعم، من 1 إلى 5 سنوات',
              'خبرة بسيطة', 'لا، نريد الدخول للمجال'
            ],
          },
        ],
      },
      {
        title: 'نوع الشراكة',
        fields: [
          {
            name: 'partnershipType',
            label: 'ما نوع الشراكة التي تهمك؟',
            type: 'checkbox',
            required: true,
            options: [
              'توزيع منتجات RCF', 'شراء بالجملة', 'تزويد RCF بمنتجات',
              'تعاون في مشاريع', 'صيانة وتركيب', 'تمثيل تجاري في ولاية معينة',
              'شراكة تقنية', 'شراكة طويلة المدى', 'أخرى'
            ],
          },
          {
            name: 'interestedFields',
            label: 'ما المنتجات أو المجالات التي تهم شركتكم؟',
            type: 'checkbox',
            required: true,
            options: [
              'الكهرومنزلي', 'التبريد', 'التدفئة', 'المكيفات',
              'قطع الغيار', 'معدات الصيانة', 'التبريد الصناعي',
              'التدفئة الصناعية', 'غير ذلك'
            ],
          },
        ],
      },
      {
        title: 'المتابعة',
        fields: [
          {
            name: 'expectedVolume',
            label: 'حجم التعامل المتوقع',
            type: 'radio',
            required: true,
            options: ['صغير', 'متوسط', 'كبير', 'حسب العرض والأسعار', 'غير محدد حاليًا'],
          },
          {
            name: 'goal',
            label: 'ما الهدف من التواصل مع RCF؟',
            type: 'radio',
            required: true,
            options: [
              'طلب اجتماع', 'طلب قائمة أسعار', 'طلب كتالوج',
              'مناقشة شراكة', 'زيارة مقر الشركة', 'تواصل أولي فقط'
            ],
          },
          {
            name: 'notes',
            label: 'ملاحظة إضافية',
            type: 'textarea',
            required: false,
          },
        ],
      },
    ],
  },

  talent: {
    formType: 'talent',
    title: 'كفاءة / فرصة عمل',
    subtitle: 'للراغبين في الانضمام إلى فريق RCF أو التعاون معنا',
    steps: [
      {
        title: 'معلومات شخصية',
        fields: [
          {
            name: 'fullName',
            label: 'الاسم واللقب',
            type: 'text',
            required: true,
          },
          {
            name: 'phone',
            label: 'رقم الهاتف',
            type: 'tel',
            required: true,
          },
          {
            name: 'wilaya',
            label: 'الولاية',
            type: 'select',
            required: true,
            options: wilayaOptions,
          },
          {
            name: 'ageRange',
            label: 'العمر',
            type: 'radio',
            required: true,
            options: ['أقل من 20', '20 - 25', '26 - 30', '31 - 40', 'أكثر من 40'],
          },
        ],
      },
      {
        title: 'الدراسة والتخصص',
        fields: [
          {
            name: 'educationLevel',
            label: 'المستوى الدراسي',
            type: 'radio',
            required: true,
            options: ['متوسط', 'ثانوي', 'تكوين مهني', 'جامعي', 'ماستر / مهندس', 'آخر'],
          },
          {
            name: 'specialty',
            label: 'ما هو تخصصك؟',
            type: 'select',
            required: true,
            options: [
              'مبيعات', 'تسويق', 'إدارة', 'محاسبة', 'مخزن',
              'توزيع / لوجستيك', 'تقني تبريد وتكييف', 'صيانة كهرومنزلية',
              'كهرباء', 'ميكانيك', 'إعلام آلي', 'تصميم / سوشيال ميديا', 'آخر'
            ],
          },
          {
            name: 'experienceLevel',
            label: 'مستوى الخبرة',
            type: 'radio',
            required: true,
            options: [
              'بدون خبرة', 'أقل من سنة', 'من 1 إلى 3 سنوات',
              'من 3 إلى 5 سنوات', 'أكثر من 5 سنوات'
            ],
          },
        ],
      },
      {
        title: 'نوع الفرصة',
        fields: [
          {
            name: 'opportunityType',
            label: 'نوع الفرصة التي تبحث عنها',
            type: 'radio',
            required: true,
            options: [
              'عمل دائم', 'تدريب', 'تربص', 'عمل جزئي',
              'فرصة للتعلم والتطور', 'تعاون حر / Freelance'
            ],
          },
          {
            name: 'preferredDepartment',
            label: 'ما المجال الذي تريد العمل فيه داخل RCF؟',
            type: 'checkbox',
            required: true,
            options: [
              'المبيعات', 'خدمة الزبائن', 'التوزيع', 'المخزن',
              'الصيانة', 'الإدارة', 'التسويق', 'المحاسبة',
              'التقنية', 'التكوين والتدريب'
            ],
          },
        ],
      },
      {
        title: 'الجاهزية والمهارات',
        fields: [
          {
            name: 'drivingLicense',
            label: 'هل لديك رخصة سياقة؟',
            type: 'radio',
            required: true,
            options: ['نعم', 'لا'],
          },
          {
            name: 'fieldWorkAvailability',
            label: 'هل يمكنك العمل خارج المكتب أو في الميدان؟',
            type: 'radio',
            required: true,
            options: ['نعم', 'لا', 'حسب طبيعة العمل'],
          },
          {
            name: 'availability',
            label: 'هل أنت متاح حاليًا؟',
            type: 'radio',
            required: true,
            options: ['نعم، فورًا', 'خلال أسبوع', 'خلال شهر', 'غير متاح حاليًا لكن مهتم'],
          },
          {
            name: 'selfTraits',
            label: 'كيف تقيّم نفسك؟',
            type: 'checkbox',
            required: true,
            options: [
              'منظم', 'جاد', 'أتعلم بسرعة', 'جيد في التواصل',
              'أتحمل الضغط', 'أحب العمل الميداني', 'أحب العمل التقني',
              'أحب البيع والإقناع'
            ],
          },
        ],
      },
      {
        title: 'السيرة الذاتية',
        fields: [
          {
            name: 'canSendCV',
            label: 'هل يمكنك إرسال CV؟',
            type: 'radio',
            required: true,
            options: ['نعم', 'لا', 'أرسله لاحقًا'],
          },
          {
            name: 'cvLinkOrNotes',
            label: 'رابط CV أو ملاحظة',
            type: 'textarea',
            required: false,
          },
        ],
      },
    ],
  },
};
