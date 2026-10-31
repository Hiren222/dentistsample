'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ServicesSection } from '@/components/ServicesSection';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider';
import { TeamSection } from '@/components/TeamSection';
import { ReviewsSection } from '@/components/ReviewsSection';
import { HowItWorks } from '@/components/HowItWorks';
import { FaqSection } from '@/components/FaqSection';
import { BookingContactSection } from '@/components/BookingContactSection';
import { Footer } from '@/components/Footer';
import { MobileFloatingCta } from '@/components/MobileFloatingCta';

export default function DentalClinicPage() {
  const [selectedService, setSelectedService] = useState<string | undefined>();
  const [selectedDoctor, setSelectedDoctor] = useState<string | undefined>();

  const scrollToBooking = (service?: string, doctor?: string) => {
    if (service) setSelectedService(service);
    if (doctor) setSelectedDoctor(doctor);
    const bookingEl = document.getElementById('contact');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9] text-slate-800">
      {/* 1. Header with exactly 4 nav links */}
      <Navbar onOpenBooking={() => scrollToBooking()} />

      <main className="flex-grow">
        {/* 2. Hero */}
        <Hero onOpenBooking={() => scrollToBooking()} />

        {/* 3. Services */}
        <ServicesSection
          onSelectServiceForBooking={(serviceTitle) => scrollToBooking(serviceTitle)}
        />

        {/* 4. Why Choose Us */}
        <WhyChooseUs />

        {/* 5. Before & After */}
        <BeforeAfterSlider />

        {/* 6. Meet the Team */}
        <TeamSection
          onSelectDoctorForBooking={(doctorName) => scrollToBooking(undefined, doctorName)}
        />

        {/* 7. Patient Reviews */}
        <ReviewsSection />

        {/* 8. How It Works */}
        <HowItWorks onOpenBooking={() => scrollToBooking()} />

        {/* 9. FAQ */}
        <FaqSection />

        {/* 10. Booking / Contact */}
        <BookingContactSection
          key={`${selectedService || 'default'}-${selectedDoctor || 'any'}`}
          preselectedService={selectedService}
          preselectedDoctor={selectedDoctor}
        />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Mobile Floating "Book Now" Button */}
      <MobileFloatingCta onOpenBooking={() => scrollToBooking()} />
    </div>
  );
}
