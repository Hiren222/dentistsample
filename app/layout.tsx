import type { Metadata } from 'next';
import { Outfit, DM_Sans } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Lumina Dental Studio | Gentle, Modern Dentistry in Indiranagar, Bengaluru',
  description:
    'Experience calm, painless dental care in Indiranagar, Bengaluru. Advanced checkups, clear aligners, teeth whitening, implants, and pediatric dentistry. Book online.',
  keywords: [
    'Bangalore dentist',
    'dental clinic Indiranagar',
    'painless dentistry Bangalore',
    'teeth whitening Bangalore',
    'clear aligners India',
    'Lumina Dental Studio Bengaluru',
  ],
  authors: [{ name: 'Lumina Dental Studio' }],
  openGraph: {
    title: 'Lumina Dental Studio | Gentle, Modern Dentistry in Indiranagar, Bengaluru',
    description:
      'Experience calm, modern dental care in Bengaluru. Gentle checkups, clear aligners, teeth whitening, and pain-free dental treatments.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Lumina Dental Studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumina Dental Studio | Gentle, Modern Dentistry in Bengaluru',
    description:
      'Calm, soothing dental care designed around patient comfort in Indiranagar, Bengaluru.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Lumina Dental Studio',
  description:
    'Modern, gentle, and calming dental care in Indiranagar, Bengaluru. Pain-free checkups, cosmetic teeth whitening, clear aligners, and dental implants.',
  url: 'https://ais-dev-pz7qxicvmfdf65dpyuwpne-830537469365.asia-southeast1.run.app',
  image: '/images/hero.jpg',
  telephone: '+91-80-4123-4567',
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Plot 42, 100 Feet Road, HAL 2nd Stage, Indiranagar',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560038',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 12.9784,
    longitude: 77.6408,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:30',
      closes: '19:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday'],
      opens: '10:00',
      closes: '14:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '486',
    bestRating: '5',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${outfit.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-screen font-sans selection:bg-teal-500/20 selection:text-teal-900"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
