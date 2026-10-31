export interface ClinicInfo {
  name: string;
  city: string;
  state: string;
  tagline: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  emergencyPhone: string;
  email: string;
  address: string;
  suite: string;
  zip: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

export const DEFAULT_CLINIC: ClinicInfo = {
  name: 'Lumina Dental Studio',
  city: 'Bengaluru',
  state: 'Karnataka',
  tagline: 'Gentle, modern dentistry in a calm sanctuary.',
  phone: '+91 80 4123 4567',
  phoneRaw: '+918041234567',
  whatsapp: '+91 98201 54321',
  whatsappRaw: '919820154321',
  emergencyPhone: '+91 98201 54399',
  email: 'care@luminadental.in',
  address: 'Plot 42, 100 Feet Road, HAL 2nd Stage, Indiranagar',
  suite: 'Above Blue Tokai Coffee, 2nd Floor',
  zip: '560038',
  hours: {
    weekdays: 'Monday – Friday: 8:30 AM – 7:30 PM',
    saturday: 'Saturday: 9:00 AM – 5:00 PM',
    sunday: 'Sunday: 10:00 AM – 2:00 PM (Emergency & By Appointment)',
  },
};

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  duration: string;
  benefits: string[];
  idealFor: string;
  startingPrice: string;
}

export const CLINIC_SERVICES: ServiceItem[] = [
  {
    id: 'checkups',
    title: 'General Checkups & Cleanings',
    shortDesc:
      'Thorough, gentle examinations with 3D digital imaging, ultrasonic plaque removal, and oral health wellness counseling.',
    fullDesc:
      'Our comprehensive checkups use ultra-low-radiation digital sensors and high-definition intraoral cameras. We assess teeth, gums, and oral soft tissues while explaining everything clearly without jargon.',
    iconName: 'ShieldCheck',
    duration: '45 - 60 mins',
    benefits: ['Zero-scrape ultrasonic scaling', 'Complimentary enamel remineralization', 'Early cavity detection with laser fluorescence'],
    idealFor: 'Routine 6-month wellness visits and preventive care',
    startingPrice: '₹1,499 (Consultation + 3D scan included)',
  },
  {
    id: 'whitening',
    title: 'Teeth Whitening',
    shortDesc:
      'Safe, enamel-friendly in-office laser treatments and custom home kits that brighten your smile up to 8 shades.',
    fullDesc:
      'Using the latest Phillips Zoom Whitespeed and gentle potassium nitrate desensitizers, our whitening safely lifts coffee, chai, and age stains without painful tooth zings.',
    iconName: 'Sparkles',
    duration: '60 mins',
    benefits: ['Immediate same-day results', 'Anti-sensitivity protective gel', 'Custom take-home maintenance kit included'],
    idealFor: 'Weddings, celebrations, or refreshing chai and coffee stains',
    startingPrice: '₹8,999',
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    shortDesc:
      'Permanent, natural-looking titanium and zirconia root replacements topped with bespoke handcrafted porcelain crowns.',
    fullDesc:
      'Guided by 3D Cone Beam CT imaging, our implant procedures are planned with millimeter precision. They look, feel, and function just like natural healthy teeth.',
    iconName: 'Activity',
    duration: 'Single or multi-stage',
    benefits: ['Preserves natural jawbone density', 'Lifelong durability with proper care', 'No dietary restrictions or slipping dentures'],
    idealFor: 'Single missing tooth, multiple teeth, or full arch restoration',
    startingPrice: 'From ₹28,000 (0% EMI available)',
  },
  {
    id: 'aligners',
    title: 'Braces & Clear Aligners',
    shortDesc:
      'Virtually invisible orthodontic aligners engineered for rapid, discreet teeth straightening without metal wires.',
    fullDesc:
      'We use high-precision 3D digital impressions (no gooey impression trays) to simulate your complete smile transformation before you even begin wearing your first set of trays.',
    iconName: 'Smile',
    duration: '4 to 12 months average',
    benefits: ['Removable for easy dining and brushing', 'Smooth BPA-free medical-grade polymer', 'Virtual progress check-ins available'],
    idealFor: 'Crowded teeth, gaps, overbite, or relapse after traditional braces',
    startingPrice: 'From ₹3,499/month with 0% EMI',
  },
  {
    id: 'root-canal',
    title: 'Gentle Root Canal Therapy',
    shortDesc:
      'Pain-relieving endodontic treatment utilizing modern rotary instruments and profound localized numbness to save your tooth.',
    fullDesc:
      'Root canals actually eliminate pain rather than cause it. We isolate the inflamed nerve, gently disinfect the canal system, and seal it with biocompatible gutta-percha in a single relaxed appointment.',
    iconName: 'HeartHandshake',
    duration: '60 - 75 mins',
    benefits: ['Immediate relief from acute toothaches', 'Save your natural tooth from extraction', 'Soothing painless anesthesia protocol'],
    idealFor: 'Deep decay, cracked teeth, or infected dental pulp',
    startingPrice: 'From ₹5,500 (Single-sitting option)',
  },
  {
    id: 'pediatric',
    title: 'Pediatric Dentistry',
    shortDesc:
      'Fun, anxiety-free dental visits tailored for children and teens, fostering positive oral hygiene habits for life.',
    fullDesc:
      'Our pediatric operatory features cozy sensory environments, ceiling-mounted entertainment, tell-show-do gentle communication, and preventive fluoride varnishes and sealants.',
    iconName: 'CheckCircle2',
    duration: '30 - 45 mins',
    benefits: ['Painless fluoride and protective sealants', 'Gentle child-centered dental education', 'Treasure chest prizes & certificate of bravery'],
    idealFor: 'Infants, toddlers, school-age kids, and teens',
    startingPrice: '₹1,200 (Preventive sealants included)',
  },
];

export interface DoctorProfile {
  id: string;
  name: string;
  role: string;
  degrees: string;
  experience: string;
  bio: string;
  quote: string;
  photo: string;
  specialties: string[];
}

export const DOCTORS: DoctorProfile[] = [
  {
    id: 'dr-elena',
    name: 'Dr. Elena Vance',
    role: 'Lead Cosmetic & Restorative Dentist',
    degrees: 'BDS, MDS - Aesthetic Dentistry & Prosthodontics',
    experience: '14+ Years Clinical Experience',
    bio: 'Dr. Vance founded Lumina with the belief that a visit to the dentist should feel as restorative as a wellness retreat. An accredited international fellow, she specializes in minimally invasive veneer transformations and pain-free restorative care.',
    quote: '"My goal is for you to walk out feeling not just relieved, but truly excited to share your smile with the world."',
    photo: '/images/dr_elena.jpg',
    specialties: ['Aesthetic Smile Design', 'Ceramic Veneers', 'Minimally Invasive Restorations'],
  },
  {
    id: 'dr-marcus',
    name: 'Dr. Marcus Thorne',
    role: 'Implantologist & Clear Aligner Specialist',
    degrees: 'BDS, MDS - Orthodontics & Implantology (AIIMS Fellow)',
    experience: '12+ Years Clinical Experience',
    bio: 'Dr. Thorne completed advanced fellowships in guided implantology and 3D digital orthodontics. Known for his calm bedside manner and surgical precision, he takes time to walk every patient through their digital 3D model before treatment.',
    quote: '"Precision technology combined with deep empathy is the key to gentle, predictable dental health."',
    photo: '/images/dr_marcus.jpg',
    specialties: ['Guided Dental Implants', 'Clear Aligner Orthodontics', 'Full-Mouth Rehabilitation'],
  },
  {
    id: 'dr-sophia',
    name: 'Dr. Sophia Patel',
    role: 'Pediatric & Family Dentistry Lead',
    degrees: 'BDS, MDS - Pedodontics & Preventive Dentistry',
    experience: '9+ Years Clinical Experience',
    bio: 'Specializing in Pediatric Dentistry, Dr. Patel creates fun, stress-free experiences for kids of all ages. Parents praise her remarkable ability to soothe nervous children and turn dental visits into positive adventures.',
    quote: '"When children learn to love taking care of their teeth early, they carry confidence and wellness for a lifetime."',
    photo: '/images/dr_sophia.jpg',
    specialties: ['Gentle Child Dentistry', 'Preventive Sealants', 'Special Needs & Sensory-Friendly Care'],
  },
];

export interface Testimonial {
  id: string;
  name: string;
  cityArea: string;
  treatment: string;
  rating: number;
  date: string;
  quote: string;
  highlight: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    name: 'Priya Sharma',
    cityArea: 'Indiranagar, Bengaluru',
    treatment: 'Clear Aligners & Whitening',
    rating: 5,
    date: '3 weeks ago',
    highlight: 'Zero dental anxiety for the first time in my life.',
    quote:
      'I used to avoid dental visits for years due to severe phobia. Dr. Elena and the Lumina team completely changed that. From the noise-canceling headphones to the warm herbal tea in the lounge, everything is thoughtfully designed for comfort.',
  },
  {
    id: 'rev-2',
    name: 'Rahul Venkatesh',
    cityArea: 'Koramangala, Bengaluru',
    treatment: 'Dental Implant Restoration',
    rating: 5,
    date: '1 month ago',
    highlight: 'Flawless implant procedure without any pain.',
    quote:
      'Dr. Marcus explained every step on the 3D CT scanner before touching my tooth. The computer-guided implant was completely painless and healed seamlessly. My new tooth matches my natural teeth so perfectly that even my family cannot tell the difference.',
  },
  {
    id: 'rev-3',
    name: 'Ananya & Kabir Deshmukh',
    cityArea: 'Whitefield, Bengaluru',
    treatment: 'Family & Pediatric Checkups',
    rating: 5,
    date: '2 months ago',
    highlight: 'My 6-year-old actually asks when we can go back!',
    quote:
      'Dr. Sophia has a magical touch with children. She let my daughter hold the mirror and explained everything like a fun game. For the first time ever, no tears, no tantrums—just big smiles and proud little teeth.',
  },
  {
    id: 'rev-4',
    name: 'Rohan Mehta',
    cityArea: 'HSR Layout, Bengaluru',
    treatment: 'Emergency Root Canal',
    rating: 5,
    date: '2 months ago',
    highlight: 'Relieved my severe toothache within two hours.',
    quote:
      'I woke up on a Saturday morning with unbearable throbbing nerve pain. Called their emergency line and was in the chair within two hours. Dr. Elena relieved the pressure immediately and saved my molar with zero discomfort.',
  },
];

export interface FaqItem {
  id: string;
  question: string;
  category: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Pain & Comfort',
    question: 'Will my dental procedure hurt?',
    answer:
      'Not at all. Painless, gentle care is the foundation of Lumina Dental Studio. We use computer-controlled local anesthetic delivery (The Wand) that eliminates the pinch of traditional needles, alongside topical numbing gels. We also offer relaxing comfort amenities—including noise-canceling Bose headphones, weighted blankets, warm aromatherapy towels, and gentle relaxation protocols for anxious patients.',
  },
  {
    id: 'faq-2',
    category: 'Costs & Pricing',
    question: 'How much will my treatment cost?',
    answer:
      'We believe in 100% price transparency. Before any treatment begins, you will receive a printed or digital itemized estimate with your exact consultation cost, treatment breakdown, and cashless insurance benefits. There are never any surprise fees or hidden charges. We also offer flexible 0% interest EMI options through major credit cards and Bajaj Finserv.',
  },
  {
    id: 'faq-3',
    category: 'Insurance & Payment',
    question: 'Which dental insurance and payment modes do you accept?',
    answer:
      'We accept all major corporate health insurance and dental OPD reimbursement plans (including Star Health, HDFC ERGO, ICICI Lombard, Medi Assist, Paramount TPA, and Vidal Health). Our front desk assists with complete cashless claims documentation. For payments, we accept UPI (Google Pay, PhonePe, Paytm), all major credit/debit cards, Net Banking, and 0% interest monthly EMIs.',
  },
  {
    id: 'faq-4',
    category: 'First Visit',
    question: 'What should I expect during my first visit?',
    answer:
      'Your first visit is a relaxed, unhurried 45-to-60 minute appointment. You will be greeted with refreshing beverages, followed by high-definition 3D digital imaging, gentle ultrasonic cleaning, oral cancer screening, and a one-on-one conversation with your dentist to discuss your personal health goals and any questions you have.',
  },
  {
    id: 'faq-5',
    category: 'Emergencies',
    question: 'What should I do if I have a dental emergency?',
    answer:
      'Call our dedicated emergency phone line immediately at +91 98201 54399. We reserve same-day emergency slots every morning and afternoon for severe toothaches, knocked-out teeth, broken restorations, or dental trauma. If you have a knocked-out permanent tooth, keep it moist in cold milk or saline and visit our clinic immediately.',
  },
  {
    id: 'faq-6',
    category: 'Pediatric Care',
    question: 'At what age should my child first see a dentist?',
    answer:
      'The Indian Society of Pedodontics and Preventive Dentistry recommends children have their first dental visit when their first tooth erupts, or by their first birthday. Early visits allow us to verify healthy jaw development, offer personalized teething and nutrition advice, and help your child build positive, joyful memories at the dentist.',
  },
];
