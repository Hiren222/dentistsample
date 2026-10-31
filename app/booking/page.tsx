'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MobileFloatingCta } from '@/components/MobileFloatingCta';
import { useClinic } from '@/lib/clinic-context';
import { CLINIC_SERVICES, CLINIC_DOCTORS } from '@/lib/clinic-data';
import {
  Calendar,
  Clock,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Sparkles,
  MapPin,
  MessageCircle,
  HelpCircle,
  CreditCard,
  Heart,
  ChevronRight,
  Send,
  AlertCircle,
} from 'lucide-react';

function BookingContent() {
  const { clinic } = useClinic();
  const searchParams = useSearchParams();

  // Read preselected params if user clicked "Book This" on services or team page
  const initialService = searchParams.get('service') || '';
  const initialDoctor = searchParams.get('doctor') || '';

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedService, setSelectedService] = useState(initialService);
  const [selectedDoctor, setSelectedDoctor] = useState(initialDoctor);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('morning');
  const [anxietyLevel, setAnxietyLevel] = useState('none');
  const [notes, setNotes] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmedBookingId, setConfirmedBookingId] = useState('');

  // Validate minimum date to today
  const todayStr = new Date().toISOString().split('T')[0];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Please enter your name';
    if (!phone.trim()) {
      errs.phone = 'Please enter your 10-digit mobile number';
    } else {
      const clean = phone.replace(/[^0-9]/g, '');
      if (clean.length < 10) errs.phone = 'Valid 10-digit phone number is required';
    }
    if (!preferredDate) errs.preferredDate = 'Please select your preferred date';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setConfirmedBookingId(`ADS-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSubmitted(true);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9] text-slate-800">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-6">
            <Link href="/" className="hover:text-teal-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-teal-700 font-semibold">Book an Appointment</span>
          </nav>

          {/* Page Intro Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>Zero Waiting Room Delay Policy</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
              Book your calm, pain-free dental visit
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed [text-wrap:balance]">
              Pick a date that suits you. We will verify your slot and message you instant
              confirmation via WhatsApp or SMS.
            </p>
          </div>

          {/* Success Voucher View */}
          {isSubmitted ? (
            <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-teal-100 shadow-xl shadow-teal-900/5 text-center">
              <div className="w-16 h-16 rounded-2xl bg-teal-500 text-white flex items-center justify-center mx-auto mb-6 shadow-md shadow-teal-500/20">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                Booking Received · ID: {confirmedBookingId}
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-4 mb-2">
                Thank you, {fullName.split(' ')[0]}!
              </h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-8">
                Your appointment request for{' '}
                <strong className="text-slate-900 font-semibold">{preferredDate}</strong> (
                {preferredTime === 'morning'
                  ? 'Morning: 9 AM - 1 PM'
                  : preferredTime === 'afternoon'
                  ? 'Afternoon: 2 PM - 5 PM'
                  : 'Evening: 5 PM - 8 PM'}
                ) is received. Our clinic manager will reach out via WhatsApp at{' '}
                <strong className="text-slate-900 font-semibold">{phone}</strong> within 15 minutes.
              </p>

              {/* Booking Summary Card */}
              <div className="bg-stone-50 rounded-2xl p-5 border border-slate-200 text-left space-y-3 mb-8 text-sm">
                <div className="flex justify-between border-b border-slate-200 pb-2.5">
                  <span className="text-slate-500">Service:</span>
                  <span className="font-semibold text-slate-900">
                    {selectedService || 'General Consultation & 3D Scan'}
                  </span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2.5">
                  <span className="text-slate-500">Doctor Preference:</span>
                  <span className="font-semibold text-slate-900">
                    {selectedDoctor || 'Next Available Specialist'}
                  </span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2.5">
                  <span className="text-slate-500">Clinic Location:</span>
                  <span className="font-semibold text-slate-900 text-right">
                    {clinic.address}, {clinic.city}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Comfort Numbing Promise:</span>
                  <span className="font-semibold text-teal-700 flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-teal-600 text-teal-600" /> Pain-Free Protocol
                  </span>
                </div>
              </div>

              {/* Fast Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/${clinic.whatsappRaw}?text=Hi%20${encodeURIComponent(
                    clinic.name
                  )},%20I%20just%20submitted%20booking%20ID%20${confirmedBookingId}%20for%20${encodeURIComponent(
                    fullName
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-colors"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: The Interactive Form */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                  Tell us when you’d like to come in
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mb-8">
                  No advance payment needed. Free cancellations anytime up to 2 hours before.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Mobile */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.fullName
                            ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                            : 'border-slate-200 focus:border-teal-500 focus:ring-teal-100'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        10-Digit Mobile / WhatsApp <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">
                          +91
                        </span>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                            if (errors.phone) setErrors({ ...errors, phone: '' });
                          }}
                          placeholder="98765 43210"
                          className={`w-full pl-12 pr-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                            errors.phone
                              ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                            : 'border-slate-200 focus:border-teal-500 focus:ring-teal-100'
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email (Optional) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address <span className="text-slate-400 font-normal lowercase">(optional for digital x-ray & invoices)</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="rahul.sharma@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all"
                    />
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      What are you visiting us for?
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 bg-white"
                    >
                      <option value="">-- General Dental Consultation & Checkup (₹500) --</option>
                      {CLINIC_SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title} ({s.startingPrice})
                        </option>
                      ))}
                      <option value="Emergency Toothache Relief">Sudden Toothache / Emergency Care</option>
                      <option value="Second Opinion on Dental Work">Second Opinion on existing quote</option>
                    </select>
                  </div>

                  {/* Doctor Preference */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Doctor Preference
                    </label>
                    <select
                      value={selectedDoctor}
                      onChange={(e) => setSelectedDoctor(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 bg-white"
                    >
                      <option value="">Any Available Specialist (Fastest booking)</option>
                      {CLINIC_DOCTORS.map((doc) => (
                        <option key={doc.id} value={doc.name}>
                          {doc.name} — {doc.role} ({doc.experience})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Date & Time of Day */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Preferred Date <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="date"
                        min={todayStr}
                        value={preferredDate}
                        onChange={(e) => {
                          setPreferredDate(e.target.value);
                          if (errors.preferredDate) setErrors({ ...errors, preferredDate: '' });
                        }}
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all bg-white ${
                          errors.preferredDate
                            ? 'border-rose-400 focus:ring-rose-200'
                            : 'border-slate-200 focus:border-teal-500 focus:ring-teal-100'
                        }`}
                      />
                      {errors.preferredDate && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.preferredDate}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Preferred Time Slot
                      </label>
                      <div className="grid grid-cols-3 gap-1.5">
                        {[
                          { id: 'morning', label: 'Morning', hours: '9 AM - 1 PM' },
                          { id: 'afternoon', label: 'Afternoon', hours: '2 PM - 5 PM' },
                          { id: 'evening', label: 'Evening', hours: '5 PM - 8 PM' },
                        ].map((slot) => (
                          <button
                            type="button"
                            key={slot.id}
                            onClick={() => setPreferredTime(slot.id)}
                            className={`p-2 rounded-xl text-center border text-xs transition-all ${
                              preferredTime === slot.id
                                ? 'bg-teal-50 border-teal-500 text-teal-800 font-bold'
                                : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                            }`}
                          >
                            <span className="block font-semibold">{slot.label}</span>
                            <span className="block text-[10px] text-slate-400 mt-0.5">{slot.hours}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Dental Fear / Anxiety Level Check */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Do you feel nervous about dental visits?
                    </label>
                    <p className="text-xs text-slate-500 mb-2.5">
                      We never judge! If you are anxious, we allocate 15 extra minutes, use warming gel, and give you control to pause anytime.
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'none', label: '😊 Feeling Fine', desc: 'Standard comfortable visit' },
                        { id: 'mild', label: '😬 A bit nervous', desc: 'Extra gentle reminders' },
                        { id: 'high', label: '🫣 Very anxious', desc: 'Painless wand & slow pace' },
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.id}
                          onClick={() => setAnxietyLevel(item.id)}
                          className={`p-3 rounded-xl border text-left transition-all ${
                            anxietyLevel === item.id
                              ? 'bg-amber-50/70 border-amber-400 text-amber-900 font-semibold'
                              : 'bg-stone-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <span className="block text-xs font-bold">{item.label}</span>
                          <span className="block text-[11px] text-slate-500 mt-0.5 leading-tight">
                            {item.desc}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Notes / Special Requests */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Anything specific you’d like the doctor to know?
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Pain in lower left tooth when drinking cold water, or need quotation for braces..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-bold text-base shadow-md shadow-teal-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Confirm Appointment Request</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    🔒 Your contact details are kept strictly private under medical confidentiality.
                  </p>
                </form>
              </div>

              {/* Right Column: Reassurances, Promises & FAQs */}
              <div className="lg:col-span-5 space-y-6">
                {/* What Happens Next Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-4">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-teal-600" />
                    <span>What happens after you book?</span>
                  </h3>
                  <div className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center shrink-0 text-xs">
                        1
                      </span>
                      <div>
                        <strong className="text-slate-900 font-semibold block">
                          Instant WhatsApp / SMS confirmation
                        </strong>
                        We lock in your doctor and send Google Maps location with parking instructions.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center shrink-0 text-xs">
                        2
                      </span>
                      <div>
                        <strong className="text-slate-900 font-semibold block">
                          Gentle checkup & 3D scan
                        </strong>
                        You sit in our ergonomic memory foam chair. We show your teeth on a private TV screen.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center shrink-0 text-xs">
                        3
                      </span>
                      <div>
                        <strong className="text-slate-900 font-semibold block">
                          Upfront pricing before any treatment
                        </strong>
                        Zero surprises. You choose whether to proceed today or take time to think it over.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Painless Guarantee Card */}
                <div className="bg-teal-50/70 rounded-3xl p-6 border border-teal-200/80 space-y-3">
                  <div className="flex items-center gap-2.5 text-teal-900 font-bold text-sm">
                    <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0" />
                    <span>Our Pain-Free Clinical Promise</span>
                  </div>
                  <p className="text-xs sm:text-sm text-teal-950 leading-relaxed">
                    We use computerized topical numbing so you never feel an injection pinch. If you feel any discomfort at any second, just raise your hand and we pause immediately.
                  </p>
                </div>

                {/* Payment Options */}
                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-teal-600" />
                    <span>Payment & Insurance Support</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We support UPI (GPay, PhonePe, Paytm), All Credit & Debit Cards, Cashless Corporate Insurance claims, and 0% Interest EMI options on aligners and implants.
                  </p>
                </div>

                {/* Need immediate help? */}
                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm text-center">
                  <p className="text-xs font-medium text-slate-500 mb-1">
                    Have severe pain or an urgent emergency?
                  </p>
                  <p className="text-sm font-bold text-slate-900 mb-4">
                    Call our emergency desk directly
                  </p>
                  <a
                    href={`tel:${clinic.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors"
                  >
                    <Phone className="w-4 h-4 text-teal-400" />
                    <span>Call Now: {clinic.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <MobileFloatingCta onOpenBooking={() => window.scrollTo({ top: 120, behavior: 'smooth' })} />
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#FAFAF9]">
          <div className="w-8 h-8 border-3 border-teal-600 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <BookingContent />
    </Suspense>
  );
}
