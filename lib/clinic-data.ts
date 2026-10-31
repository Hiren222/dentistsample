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
  landmark: string;
  metroInfo: string;
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
  landmark: 'Opposite Starbucks, near 12th Main Junction',
  metroInfo: '3 minutes walk from Indiranagar Metro Station (Purple Line)',
  hours: {
    weekdays: 'Monday – Friday: 8:30 AM – 7:30 PM',
    saturday: 'Saturday: 9:00 AM – 5:00 PM',
    sunday: 'Sunday: 10:00 AM – 2:00 PM (Emergency & By Appointment)',
  },
};

// ----------------------------------------------------
// Home Page 6 Service Grid Items
// ----------------------------------------------------
export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  duration: string;
  startingPrice: string;
  iconName: string;
  benefits: string[];
  idealFor: string;
}

export const CLINIC_SERVICES: ServiceItem[] = [
  {
    id: 'general-checkup',
    title: 'General Checkups',
    shortDesc: 'Comprehensive exam with high-res digital scans, gentle cleaning, and personalized prevention.',
    fullDesc: 'A thorough 45-minute dental wellness checkup featuring zero-radiation intraoral cameras, painless ultrasonic cleaning, and oral cancer screening in a calming environment.',
    duration: '45 mins',
    startingPrice: '₹1,499 (Exam & Scaling)',
    iconName: 'ShieldCheck',
    benefits: ['High-definition digital camera tour', 'Gentle ultrasonic plaque removal', 'Early cavity detection'],
    idealFor: 'Every 6-month wellness check, fresh breath, and early prevention',
  },
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening',
    shortDesc: 'Professional laser whitening that lifts stubborn tea, coffee, and age stains up to 8 shades in 1 hour.',
    fullDesc: 'Safe, in-office laser whitening designed specifically to minimize sensitivity while delivering luminous, long-lasting brightness for weddings and special occasions.',
    duration: '60 mins',
    startingPrice: '₹8,999 (In-office session)',
    iconName: 'Sparkles',
    benefits: ['Up to 8 shades lighter', 'Built-in anti-sensitivity mineral glaze', 'Enamel-safe laser technology'],
    idealFor: 'Chai & coffee lovers, wedding smiles, and photo-ready confidence',
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    shortDesc: 'Permanent titanium tooth replacement that looks, feels, and bites with natural strength.',
    fullDesc: 'Computer-guided 3D implantology for replacing single or multiple missing teeth with permanent biocompatible titanium posts and custom lifelike zirconia crowns.',
    duration: '2 to 3 visits',
    startingPrice: '₹28,000 (0% EMI Available)',
    iconName: 'Activity',
    benefits: ['Prevents bone shrinkage & facial aging', 'Full chewing power restored', 'Lifetime durability guarantee'],
    idealFor: 'Missing teeth, loose dentures, or broken teeth needing replacement',
  },
  {
    id: 'braces-aligners',
    title: 'Braces and Aligners',
    shortDesc: 'Discreet clear aligners and modern ceramic braces to straighten teeth comfortably at any age.',
    fullDesc: 'Custom-engineered transparent aligners with 3D digital smile simulation before you start. Straighten crowding, gaps, or bite issues invisibly without food restrictions.',
    duration: '6 – 10 months',
    startingPrice: '₹3,499/mo (Custom Trays)',
    iconName: 'Smile',
    benefits: ['Virtually invisible on Zoom calls', 'Removable for easy eating & brushing', 'Digital 3D preview before you begin'],
    idealFor: 'Adults and teens seeking straight teeth without metal wires',
  },
  {
    id: 'root-canal',
    title: 'Root Canal Therapy',
    shortDesc: 'Single-visit rotary root canal that relieves severe tooth pain with gentle computer-assisted numbing.',
    fullDesc: 'Forget the old myths—our microscope-assisted rotary root canal relieves pain instead of causing it. We clean out infection safely under profound comfort anesthesia.',
    duration: '60 mins',
    startingPrice: '₹4,500 (Single-visit relief)',
    iconName: 'HeartHandshake',
    benefits: ['Computer-metered painless numbing wand', 'Save your natural tooth', 'Single-visit rotary technology'],
    idealFor: 'Throbbing toothaches, deep decay, or sensitivity to hot liquids',
  },
  {
    id: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    shortDesc: 'Fun, trauma-free dental visits for infants, kids, and teens that build lifelong positive habits.',
    fullDesc: 'A play-filled environment with ceiling cartoon screens, gentle fluoride vitamins, cavity sealants, and caring pediatric specialists who make little ones feel like superheroes.',
    duration: '30 mins',
    startingPrice: '₹999 (Kid friendly visit)',
    iconName: 'CheckCircle2',
    benefits: ['Warm "Tell-Show-Do" communication', 'Protective cavity-defense sealants', 'Ceiling screen cartoons & bravery badges'],
    idealFor: 'Children aged 1 to 14, first dentist visits, and decay prevention',
  },
];

// ----------------------------------------------------
// Doctors & Specialists
// ----------------------------------------------------
export interface Doctor {
  id: string;
  name: string;
  role: string;
  degrees: string;
  experience: string;
  photo: string;
  bio: string;
  quote: string;
  specialties: string[];
}

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-elena',
    name: 'Dr. Elena Vance, BDS, MDS',
    role: 'Lead Cosmetic Dentist & Clinical Director',
    degrees: 'BDS (RGUHS Bengaluru), MDS Conservative Dentistry',
    experience: '12+ Years Experience',
    photo: '/images/dr_elena.jpg',
    bio: 'Dedicated to minimally invasive smile design and gentle preventive dentistry. Dr. Vance has transformed over 3,000 smiles across Bengaluru with her calming, step-by-step bedside approach.',
    quote: 'My clinical philosophy is simple: dentistry should be gentle, transparent, and completely free from fear.',
    specialties: ['Digital Smile Design', 'Micro-Veneers', 'Pain-Free Whitening', 'Anxiety Care'],
  },
  {
    id: 'dr-marcus',
    name: 'Dr. Marcus Chen, BDS, DICOI',
    role: 'Implantologist & Oral Surgeon',
    degrees: 'BDS, Fellowship in Guided Implantology (USA)',
    experience: '14+ Years Experience',
    photo: '/images/dr_marcus.jpg',
    bio: 'A pioneer in 3D computer-guided dental implants and painless extractions. Known for his precision technique, patient comfort protocols, and single-day tooth restorations.',
    quote: 'Using 3D computer navigation allows us to place implants with micron precision, zero guesswork, and virtually no post-procedure discomfort.',
    specialties: ['Guided 3D Implants', 'Single-Day Teeth', 'Wisdom Tooth Care', 'Bone Grafting'],
  },
  {
    id: 'dr-sophia',
    name: 'Dr. Sophia Patel, BDS, M.Orth',
    role: 'Orthodontist & Clear Aligner Specialist',
    degrees: 'BDS, M.Orth (All India Rank 14), Diamond Aligner Provider',
    experience: '9+ Years Experience',
    photo: '/images/dr_sophia.jpg',
    bio: 'Passionate about crafting naturally harmonious smiles for adults and teens using invisible clear aligners. Has treated over 1,200 alignment cases with predictable digital planning.',
    quote: 'Straightening your teeth is not just about aesthetics—it creates a balanced bite that protects your natural teeth for a lifetime.',
    specialties: ['Invisible Aligners', 'Clear Ceramic Braces', 'Teens & Adult Ortho', 'Bite Correction'],
  },
];

export const CLINIC_DOCTORS = DOCTORS;

// ----------------------------------------------------
// Patient Testimonials
// ----------------------------------------------------
export interface Testimonial {
  id: string;
  name: string;
  cityArea: string;
  rating: number;
  treatment: string;
  date: string;
  highlight: string;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    name: 'Ananya Deshmukh',
    cityArea: 'Indiranagar, Bengaluru',
    rating: 5,
    treatment: 'Clear Aligners & Whitening',
    date: '2 weeks ago',
    highlight: 'I had dental phobia for 10 years until I found Lumina.',
    quote: 'I avoided dental clinics because of bad childhood experiences. Dr. Elena and her team were unbelievably gentle. The warm numbing wand felt like nothing at all, and watching Netflix on the ceiling screen made my aligner scan a breeze!',
  },
  {
    id: 'rev-2',
    name: 'Vikram Sundaram',
    cityArea: 'Koramangala, Bengaluru',
    rating: 5,
    treatment: 'Dental Implant Restoration',
    date: '1 month ago',
    highlight: 'Zero pain during or after my implant placement.',
    quote: 'Dr. Marcus showed me the complete 3D surgical plan on a 4K screen before touching anything. The procedure took under 40 minutes, and I had zero post-op pain. I can bite into crusty sourdough again without hesitation.',
  },
  {
    id: 'rev-3',
    name: 'Deepika & Aarav (Age 7)',
    cityArea: 'Whitefield, Bengaluru',
    rating: 5,
    treatment: 'Pediatric Care & Cavity Sealants',
    date: '3 weeks ago',
    highlight: 'My 7-year-old actually asks when we are visiting again!',
    quote: 'The staff treated my son like an astronaut going on a space mission. No scary needles, no tears, just patience, fun balloons, and painless cavity sealants. Every clinic in Bangalore should follow this model.',
  },
  {
    id: 'rev-4',
    name: 'Rohan Mehta',
    cityArea: 'HSR Layout, Bengaluru',
    rating: 5,
    treatment: 'Emergency Root Canal',
    date: 'Last month',
    highlight: 'Walked in with excruciating pain, walked out smiling.',
    quote: 'Woke up on a Sunday morning with throbbing toothache. Lumina accommodated me within 30 minutes. Dr. Elena relieved the nerve pressure immediately with their single-visit rotary system. Completely transparent pricing with no hidden charges.',
  },
];

// ----------------------------------------------------
// Frequently Asked Questions
// ----------------------------------------------------
export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Comfort & Pain',
    question: 'Will my dental treatment hurt?',
    answer: 'No. We follow a strict Pain-Free Clinical Protocol. We apply a warming topical anesthetic gel before using computerized, metered micro-numbing wands that eliminate the sharp pinch of traditional needles. If at any moment you feel uneasy, you raise your left hand and we pause immediately.',
  },
  {
    id: 'faq-2',
    category: 'Cost & Transparency',
    question: 'How much do treatments cost, and are there surprise fees?',
    answer: 'We provide itemized, written quotes before starting any treatment. Routine checkups and ultrasonic cleanings start at ₹1,499. If additional treatment is needed, we offer transparent tier pricing with zero hidden consumables fees, plus 0% interest EMI options.',
  },
  {
    id: 'faq-3',
    category: 'Insurance & Claims',
    question: 'Do you accept corporate insurance and cashless claims?',
    answer: 'Yes! We support all major Indian insurance third-party administrators (Medi Assist, Vidal, Star Health, ICICI Lombard) with detailed medical reimbursement documentation, itemized GST bills, and digital diagnostic X-rays provided within 24 hours.',
  },
  {
    id: 'faq-4',
    category: 'First Visit',
    question: 'What happens during my first visit to Lumina?',
    answer: 'Your first visit is a relaxed, zero-pressure 45-minute wellness session. We take digital 3D intraoral scans to show you your teeth on a private monitor, complete gentle ultrasonic cleaning, discuss your personal goals, and answer all questions.',
  },
  {
    id: 'faq-5',
    category: 'Emergencies',
    question: 'What should I do if I have a sudden dental emergency?',
    answer: 'Call our direct emergency line at +91 98201 54399. We reserve daily emergency priority slots for sudden toothaches, broken teeth, or sports injuries with same-day pain relief guaranteed.',
  },
  {
    id: 'faq-6',
    category: 'Children & Families',
    question: 'At what age should my child first visit the dentist?',
    answer: 'The Indian Dental Association recommends a first dental visit by age 1 or when the first baby tooth appears. Our gentle pediatric visits focus on getting your child comfortable with the chair, checking enamel health, and teaching fun brushing habits.',
  },
];

// ----------------------------------------------------
// Detailed Services (Filterable Services Page)
// ----------------------------------------------------
export interface ServiceStep {
  stepNumber: string;
  stepTitle: string;
  stepDesc: string;
}

export interface DetailedService {
  id: string;
  title: string;
  category: 'all' | 'everyday' | 'cosmetic' | 'straightening' | 'pain-relief' | 'kids';
  categoryLabel: string;
  realProblem: string;
  quickSummary: string;
  howItsDone: ServiceStep[];
  duration: string;
  painLevel: string;
  recovery: string;
  startingPrice: string;
  visitsRequired: string;
  iconName: string;
}

export const DETAILED_SERVICES: DetailedService[] = [
  {
    id: 'checkups',
    title: 'Painless Teeth Cleaning & 3D Scan',
    category: 'everyday',
    categoryLabel: 'Everyday Care',
    realProblem: 'Yellow tartar buildup, bad breath, bleeding gums when brushing, or you haven’t seen a dentist in years and dread being scolded.',
    quickSummary: 'A gentle ultrasonic wash that dissolves tartar without scraping your enamel, paired with a painless 3D camera scan to check every corner.',
    howItsDone: [
      { stepNumber: '1', stepTitle: 'Digital Camera Tour', stepDesc: 'We take high-res photos on a screen so you see exactly what we see. No mystery, no pressure.' },
      { stepNumber: '2', stepTitle: 'Ultrasonic Gentle Wash', stepDesc: 'A tiny humming tip sprays cool water to melt away stubborn calculus and tea stains smoothly.' },
      { stepNumber: '3', stepTitle: 'Enamel Polishing', stepDesc: 'A gentle mint buffing paste smooths tooth surfaces so plaque cannot easily stick.' },
      { stepNumber: '4', stepTitle: 'Zero-Judgment Advice', stepDesc: 'Simple home hacks to keep your breath fresh and gums pink—explained in 2 minutes.' },
    ],
    duration: '45 mins',
    painLevel: 'Zero pain (pleasant cool water sensation)',
    recovery: 'Immediate (eat right away)',
    startingPrice: '₹1,499 (Scan + clean included)',
    visitsRequired: '1 visit every 6 months',
    iconName: 'ShieldCheck',
  },
  {
    id: 'whitening',
    title: 'Laser Teeth Whitening',
    category: 'cosmetic',
    categoryLabel: 'Cosmetic',
    realProblem: 'Stains from daily chai, coffee, turmeric, or smoking making you cover your mouth when laughing in photos or attending weddings.',
    quickSummary: 'Safe in-office laser whitening that lifts years of deep enamel stains in 1 hour without harming your tooth structure.',
    howItsDone: [
      { stepNumber: '1', stepTitle: 'Lip & Gum Protection', stepDesc: 'We coat your gums with a soothing protective gel so only teeth touch the whitening foam.' },
      { stepNumber: '2', stepTitle: 'Active Whitening Foam', stepDesc: 'A gentle peroxide solution is painted evenly across your front teeth.' },
      { stepNumber: '3', stepTitle: 'Laser Activation (3x 15 mins)', stepDesc: 'A safe cool blue LED light gently accelerates stain breakup while you watch Netflix.' },
      { stepNumber: '4', stepTitle: 'Anti-Sensitivity Mineral Glaze', stepDesc: 'We apply a calming potassium glaze to lock in enamel minerals and stop tooth zings.' },
    ],
    duration: '60 mins',
    painLevel: 'Comfortable (anti-sensitivity gel included)',
    recovery: 'Immediate (avoid black coffee for 48 hours)',
    startingPrice: '₹8,999 (In-office session)',
    visitsRequired: '1 single appointment',
    iconName: 'Sparkles',
  },
  {
    id: 'aligners',
    title: 'Invisible Clear Aligners',
    category: 'straightening',
    categoryLabel: 'Smile Straightening',
    realProblem: 'Crooked or crowded front teeth, a gap between front teeth, or you hate the idea of metal wires and brackets for office meetings.',
    quickSummary: 'Crystal-clear, removable trays engineered from 3D scans that nudge your teeth into alignment without anyone noticing you wear them.',
    howItsDone: [
      { stepNumber: '1', stepTitle: '3-Minute 3D Laser Scan', stepDesc: 'No gooey putty trays. A quick laser wand builds a digital 3D clone of your smile.' },
      { stepNumber: '2', stepTitle: 'Preview Before You Start', stepDesc: 'See a 3D video of your teeth moving into place and know the exact finish date.' },
      { stepNumber: '3', stepTitle: 'Wear Custom Clear Trays', stepDesc: 'Pop in smooth plastic trays for 20-22 hours a day. Take them out whenever eating or drinking.' },
      { stepNumber: '4', stepTitle: 'Switch Every 10 Days', stepDesc: 'Each new tray gently guides your teeth closer to your dream smile.' },
    ],
    duration: '6 to 10 months total',
    painLevel: 'Mild gentle pressure on day 1 of each tray',
    recovery: 'Eat all your favourite foods (just take trays out)',
    startingPrice: 'From ₹3,499/month (0% interest EMI)',
    visitsRequired: 'Quick check-in every 6 weeks',
    iconName: 'Smile',
  },
  {
    id: 'implants',
    title: 'Permanent Dental Implants',
    category: 'everyday',
    categoryLabel: 'Tooth Replacement',
    realProblem: 'Missing tooth making it hard to chew your favourite food, or feeling self-conscious when smiling; tired of loose dentures.',
    quickSummary: 'A titanium artificial root placed in the jaw that fuses naturally, topped with a custom ceramic tooth that looks and bites just like a real one.',
    howItsDone: [
      { stepNumber: '1', stepTitle: '3D Bone & Nerve Map', stepDesc: 'High-precision 3D scan finds the exact safe millimeter to place the implant.' },
      { stepNumber: '2', stepTitle: 'Painless Guided Placement', stepDesc: 'Profound local numbing ensures zero pain while the titanium root is securely positioned.' },
      { stepNumber: '3', stepTitle: 'Natural Bone Bonding', stepDesc: 'Your jaw fuses to the implant over a few weeks, creating permanent stability.' },
      { stepNumber: '4', stepTitle: 'Custom Ceramic Tooth', stepDesc: 'A handcrafted zirconia crown matching your exact tooth color is locked into place.' },
    ],
    duration: '2 to 3 easy visits',
    painLevel: 'Pain-free during surgery (like a simple filling)',
    recovery: 'Mild tenderness for 2 days (normal eating on day 3)',
    startingPrice: '₹28,000 (Implant + Crown)',
    visitsRequired: '3 visits over 3 months',
    iconName: 'Activity',
  },
  {
    id: 'root-canal',
    title: 'Single-Sitting Rotary Root Canal',
    category: 'pain-relief',
    categoryLabel: 'Pain Relief',
    realProblem: 'Throbbing, sharp toothache keeping you awake at night, severe pain when sipping cold water or tea, or pain when biting down.',
    quickSummary: 'Forget old root canal horror stories! Modern rotary instruments remove the tiny infected nerve in 45 minutes, ending your pain immediately.',
    howItsDone: [
      { stepNumber: '1', stepTitle: 'Profound Comfort Numbing', stepDesc: 'We apply gum-numbing gel first, then gently numb the tooth so you feel zero sensation.' },
      { stepNumber: '2', stepTitle: 'Micro-Cleansing', stepDesc: 'Whisper-quiet flexible nickel-titanium instruments clean and disinfect the nerve canal.' },
      { stepNumber: '3', stepTitle: 'Hermetic Bio-Seal', stepDesc: 'The clean canal is sealed with a soothing biocompatible natural rubber filler.' },
      { stepNumber: '4', stepTitle: 'Tooth Shield Crown', stepDesc: 'A sturdy ceramic cap is bonded on top so you can chew rotis and nuts safely.' },
    ],
    duration: '50 to 60 mins',
    painLevel: 'Relieves pain immediately (feels like getting a filling)',
    recovery: 'Tender for 24 hours, back to normal chewing right away',
    startingPrice: '₹4,500 (Treatment + medication)',
    visitsRequired: 'Single visit for 90% of cases',
    iconName: 'HeartHandshake',
  },
  {
    id: 'kids',
    title: 'Fun & Fearless Kids Dentistry',
    category: 'kids',
    categoryLabel: 'Pediatric Care',
    realProblem: 'Your child is afraid of the dentist, drinks fruit juices/milk at night, or has white chalky spots and early cavities on baby teeth.',
    quickSummary: 'A happy, playful checkup with cartoon ceiling screens, yummy bubblegum fluoride vitamins, and friendly dentists who explain everything with toys.',
    howItsDone: [
      { stepNumber: '1', stepTitle: 'Magic Chair Ride', stepDesc: 'We let your child play with the chair buttons and count their teeth with a tooth mirror.' },
      { stepNumber: '2', stepTitle: 'Tooth Vitamins Paint', stepDesc: 'We paint delicious fruit-flavored fluoride varnish that hardens baby tooth enamel in 30 seconds.' },
      { stepNumber: '3', stepTitle: 'Painless Cavity Shield', stepDesc: 'Protective clear sealants are flowed into deep chewing grooves to block sugar decay.' },
      { stepNumber: '4', stepTitle: 'Super-Patient Gift', stepDesc: 'Every brave child earns a sparkling sticker and a fun pediatric gift.' },
    ],
    duration: '30 mins',
    painLevel: 'Zero pain (pure fun & games)',
    recovery: 'Immediate (can eat snacks within 30 minutes)',
    startingPrice: '₹999 (Checkup & Fluoride)',
    visitsRequired: '1 visit every 6 months',
    iconName: 'Smile',
  },
];

// ----------------------------------------------------
// Clinic Journey & Awards (About Us Page)
// ----------------------------------------------------
export interface ClinicMilestone {
  year: string;
  title: string;
  desc: string;
}

export const CLINIC_JOURNEY: ClinicMilestone[] = [
  {
    year: '2016',
    title: 'Started with 1 Chair in Indiranagar',
    desc: 'Dr. Elena Vance founded Lumina with a single dental chair and one clear mission: to make dental visits completely anxiety-free for working professionals in Bengaluru.',
  },
  {
    year: '2019',
    title: 'First Clinic to Adopt Painless Computer Numbing',
    desc: 'Invested in computer-controlled local anesthesia systems so patients no longer felt the dreaded needle prick. Word spread fast among nervous patients.',
  },
  {
    year: '2021',
    title: 'Expanded to Full Multi-Specialty Dental Studio',
    desc: 'Dr. Marcus Chen and Dr. Sophia Patel joined as partners, bringing guided 3D implant surgery and invisible aligners under one serene roof.',
  },
  {
    year: '2023',
    title: 'ISO 9001 Certified 6-Stage Sterilization Lab',
    desc: 'Built an open-view sterilization theatre with hospital-grade autoclaves so patients can see every single instrument sterile-sealed before their eyes.',
  },
  {
    year: '2025',
    title: 'Over 5,000 Happy Bengaluru Smiles',
    desc: 'Celebrated treating 5,000+ local patients with a 4.9-star rating across Google reviews and expanded weekend family appointment hours.',
  },
];

export interface ClinicAward {
  title: string;
  organization: string;
  giver?: string;
  year: string;
  badge: string;
  description: string;
}

export const CLINIC_AWARDS: ClinicAward[] = [
  {
    title: 'Best Patient Comfort & Anxiety-Free Clinic',
    organization: 'Bengaluru Healthcare Guild',
    giver: 'Bengaluru Healthcare Guild',
    year: '2024',
    badge: 'Gold Standard',
    description: 'Awarded for exceptional commitment to needle-free and computerized gentle anesthesia protocols in Karnataka.',
  },
  {
    title: 'Excellence in Digital & Aesthetic Dentistry',
    organization: 'IDA Karnataka State Dental Conference',
    giver: 'IDA Karnataka State Dental Conference',
    year: '2023',
    badge: 'Excellence Trophy',
    description: 'Recognized for 3D digital smile simulation workflow and minimally invasive ceramic veneers.',
  },
  {
    title: 'Top Rated Clear Aligner Provider in Karnataka',
    organization: 'Clear Smile Alliance India',
    giver: 'Clear Smile Alliance India',
    year: '2024',
    badge: 'Diamond Tier',
    description: 'Honored for achieving predictable, fast smile alignment across over 1,200 successful patient cases.',
  },
  {
    title: 'Cleanest Clinic Hygiene & Sterilization Certification',
    organization: 'National Healthcare Quality Council',
    giver: 'National Healthcare Quality Council',
    year: '2022 – 2025',
    badge: 'ISO 9001:2015',
    description: 'Hospital-grade 6-stage instrument autoclaving with transparent visual verification for every patient.',
  },
];

// ----------------------------------------------------
// Dental Tips & Blog Posts (Blog Page)
// ----------------------------------------------------
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  problemSolved: string;
  shortSummary: string;
  quickChecklist: string[];
  content: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'chai-stains',
    slug: 'remove-chai-coffee-teeth-stains',
    title: 'How to Remove Stubborn Chai & Coffee Stains (Without Damaging Enamel)',
    category: 'Whitening Tips',
    readTime: '3 min read',
    problemSolved: 'Daily tea or espresso turning your teeth dull and yellow before important events.',
    shortSummary: 'Why home lemon and baking soda scrubs ruin your enamel, and the 4 safe everyday habits to keep your smile bright.',
    quickChecklist: [
      'Drink water immediately after finishing chai or coffee to rinse dark tannins',
      'Never scrub teeth with lemon juice or raw baking soda (acid dissolves enamel permanently)',
      'Use a soft-bristle toothbrush with gentle circular strokes, never horizontal sawing',
      'Schedule a painless ultrasonic cleaning every 6 months to wipe away set-in stains',
    ],
    content: [
      'If you love morning ginger chai or strong filter coffee, you are not alone. Tannins in black tea and coffee bind to microscopic pores in your tooth enamel, creating gradual brownish-yellow staining.',
      'A very common mistake we see in our clinic is patients scrubbing their teeth with DIY internet remedies like crushed charcoal, lemon juice, or coarse baking soda. These are abrasive acids that strip off your protective enamel layer. Once enamel is scraped away, the yellow dentin underneath shows through even more!',
      'Instead, switch to drinking water right after your cup of chai. Switch to a soft or ultra-soft brush, and ask your dentist for a 30-minute ultrasonic polish. Ultrasonic tips use sound vibrations and water to lift tea stains without scratching your tooth surface.',
    ],
  },
  {
    id: 'bleeding-gums',
    slug: 'bleeding-gums-causes-and-quick-fix',
    title: 'Why Do My Gums Bleed When I Brush? (And the Simple 3-Day Fix)',
    category: 'Everyday Care',
    readTime: '4 min read',
    problemSolved: 'Spitting pink foam into the sink when brushing, thinking you should stop brushing that area.',
    shortSummary: 'Bleeding gums are not a sign to stop brushing—it is an early cry for help from irritated gums. Here is how to reverse it in 72 hours.',
    quickChecklist: [
      'Do not avoid the bleeding spot; gentle brushing actually helps it heal',
      'Switch from medium or hard bristles to an ultra-soft toothbrush immediately',
      'Rinse with warm salt water twice daily for 3 days to calm inflammation',
      'Floss once a day before bed to dislodge trapped food where bacteria breed',
    ],
    content: [
      'Seeing pink in the sink when you spit out toothpaste is common, but it is never normal. Many people make the natural mistake of thinking: "Oh, this tooth is bleeding, let me skip brushing here so it heals."',
      'In reality, the exact opposite happens. Bleeding happens because soft plaque bacteria settled along your gumline, causing mild swelling called gingivitis. When you stop brushing there, bacteria multiply even faster.',
      'To fix this at home: Grab an ultra-soft toothbrush. Angle the bristles at 45 degrees towards the gumline and make tiny gentle circles. Rinse with warm salt water after dinner for three days. If bleeding persists after 5 days, a quick 30-minute professional clean will clear the hardened calculus underneath.',
    ],
  },
  {
    id: 'wisdom-tooth',
    slug: 'wisdom-tooth-pain-home-remedy-vs-dentist',
    title: 'Wisdom Tooth Pain: When Warm Salt Water Helps vs When to See a Doctor',
    category: 'Emergency & Pain',
    readTime: '3 min read',
    problemSolved: 'Throbbing ache at the very back of your jaw making it painful to swallow or open your mouth wide.',
    shortSummary: 'How to tell if your wisdom tooth is just cutting through or if a dangerous pocket of infection has trapped food.',
    quickChecklist: [
      'Warm salt water rinses 4 times daily soothe mild erupting gum flaps',
      'If you cannot open your mouth comfortably (trismus), visit the clinic immediately',
      'Never put crushed painkiller pills directly on the gum (it causes chemical burns)',
      'A simple 3D panoramic X-ray reveals whether the tooth is straight or pushing into your molar',
    ],
    content: [
      'Around age 18 to 28, the final molars at the very back attempt to enter the mouth. In modern human jaws, there is often not enough room, leading to "impacted" wisdom teeth that get stuck horizontally.',
      'When the tooth partially pushes through, a small flap of gum sits over it. Small food particles get stuck underneath where your toothbrush cannot reach, causing sudden throbbing swelling called pericoronitis.',
      'If the ache is mild, flushing warm salt water around the back of your mouth keeps it clean. However, if you develop a fever, swelling on your outer cheek, or difficulty opening your mouth to eat, do not delay. A modern digital scan takes 2 minutes and tells us if a gentle minor extraction will give you permanent relief.',
    ],
  },
  {
    id: 'kids-brushing',
    slug: 'make-kids-brush-teeth-without-crying',
    title: 'How to Make Your Child Brush Without Daily Morning Tantrums',
    category: 'Kids Dental',
    readTime: '4 min read',
    problemSolved: 'Tired of fighting with your toddler or 6-year-old every morning and night over brushing.',
    shortSummary: '5 playful psychologist-approved tactics used by pediatric dentists to turn brushing into a game.',
    quickChecklist: [
      'Play their favorite 2-minute song and brush together until the music finishes',
      'Let them "brush your teeth first" with their own brush before you brush theirs',
      'Use a fun fruit-flavored fluoride paste instead of sharp adult mint',
      'Use a sticker reward chart—5 morning/night stars earns a weekend park trip',
    ],
    content: [
      'To a young child, a toothbrush can feel like an intruding foreign object, especially if they are tired at bedtime or rushed before school. Yelling or forcing the brush creates anxiety that lingers for years.',
      'The secret is making it collaborative. Turn on their favorite cartoon theme song (like Baby Shark or Bluey) which is roughly 2 minutes long. When the song is playing, both parent and child brush together in the mirror.',
      'Let your child pick their own toothbrush at the supermarket—whether it has a dinosaur, cartoon superhero, or sparkles. Giving them control over the choice dramatically reduces resistance.',
    ],
  },
  {
    id: 'aligners-worth-it',
    slug: 'are-clear-aligners-worth-it-adults',
    title: 'Are Clear Aligners Worth It for Adults? Real Pros, Cons & Timeline',
    category: 'Aligners',
    readTime: '5 min read',
    problemSolved: 'Wondering if you are "too old" to straighten teeth without looking like a teenager with metal braces.',
    shortSummary: 'Everything you need to know about adult teeth alignment: social life, speech, eating habits, and true costs.',
    quickChecklist: [
      'You are never too old; healthy teeth can be safely shifted at age 25, 45, or 65',
      'Aligners are virtually invisible on Zoom calls, client meetings, and dinners',
      'You must commit to wearing them 20 to 22 hours per day for predictable results',
      'Average treatment is only 6 to 9 months—far faster than old-school metal braces',
    ],
    content: [
      'Over 60% of clear aligner patients today are adults in their 20s, 30s, 40s, and 50s. Many had braces as teenagers but forgot their retainers, while others finally have the budget to fix a crooked front tooth that bothered them for decades.',
      'The biggest advantage of aligners is discretion. They are molded from clear medical-grade polymer. Colleagues sitting across from you in a meeting or lunch will not notice them unless you point them out.',
      'Because they are removable, there are zero dietary restrictions. You can bite into crisp apples, roasted corn, or chewy roti without popping a metal bracket. Simply remove the aligners, enjoy your meal, rinse, and pop them back in.',
    ],
  },
];
