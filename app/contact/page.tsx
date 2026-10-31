'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MobileFloatingCta } from '@/components/MobileFloatingCta';
import { useClinic } from '@/lib/clinic-context';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Navigation,
  Car,
  Train,
  CheckCircle2,
  Send,
  AlertCircle,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';

export default function ContactLocationPage() {
  const { clinic } = useClinic();

  const [senderName, setSenderName] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderSubject, setSenderSubject] = useState('General Enquiry');
  const [senderMessage, setSenderMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !senderPhone.trim() || !senderMessage.trim()) {
      setErrorMsg('Please enter your name, contact phone, and message.');
      return;
    }
    setErrorMsg('');
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9] text-slate-800">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-6">
            <Link href="/" className="hover:text-teal-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-teal-700 font-semibold">Contact & Location</span>
          </nav>

          {/* Page Intro Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold mb-3">
              <MapPin className="w-3.5 h-3.5 text-teal-600" />
              <span>Indiranagar 100 Feet Road, Bengaluru</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
              Visit our clinic or drop us a quick note
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
              We are conveniently located in central Indiranagar with dedicated patient valet parking
              and just 3 minutes away from the Metro station.
            </p>
          </div>

          {/* Quick Contact Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Phone & Urgent Help */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 text-teal-600 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h2 className="text-base font-bold text-slate-900 mb-1">Call Our Reception</h2>
              <p className="text-xs text-slate-500 mb-4">
                Speak directly with our warm reception team for appointments, pricing, or emergency pain guidance.
              </p>
              <div className="space-y-1.5">
                <a
                  href={`tel:${clinic.phoneRaw}`}
                  className="block text-sm font-bold text-teal-700 hover:text-teal-800"
                >
                  {clinic.phone} (Main Desk)
                </a>
                <a
                  href="tel:+919820154399"
                  className="block text-xs font-semibold text-rose-600 hover:text-rose-700"
                >
                  +91 98201 54399 (24/7 Dental Emergency)
                </a>
              </div>
            </div>

            {/* WhatsApp Chat */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h2 className="text-base font-bold text-slate-900 mb-1">WhatsApp Helpdesk</h2>
              <p className="text-xs text-slate-500 mb-4">
                Need to send an X-ray photo, check doctor availability, or reschedule your appointment?
              </p>
              <a
                href={`https://wa.me/${clinic.whatsappRaw}?text=Hi%20${encodeURIComponent(
                  clinic.name
                )},%20I%20have%20a%20question%20regarding%20dental%20care.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>+91 98201 54321 (Chat Now)</span>
              </a>
            </div>

            {/* Email & Estimates */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h2 className="text-base font-bold text-slate-900 mb-1">Email & Insurance</h2>
              <p className="text-xs text-slate-500 mb-4">
                For corporate dental wellness tie-ups, second opinion document reviews, and insurance paperwork.
              </p>
              <a
                href={`mailto:${clinic.email}`}
                className="block text-sm font-bold text-slate-800 hover:text-teal-700 break-all"
              >
                {clinic.email}
              </a>
            </div>
          </div>

          {/* Main Grid: Form on Left + Location & Timings on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
            {/* Left: Message Form */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-9 border border-slate-200/80 shadow-md">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Have a question or looking for a treatment cost estimate? We will reply within 2 business hours.
              </p>

              {submitted ? (
                <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Message Received!</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-4">
                    Thank you {senderName}. Our patient coordinator will contact you at {senderPhone} shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setSenderName('');
                      setSenderPhone('');
                      setSenderEmail('');
                      setSenderMessage('');
                    }}
                    className="text-xs font-semibold text-teal-700 hover:text-teal-800 underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder="e.g. Priya Iyer"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Mobile Number <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 font-semibold">
                          +91
                        </span>
                        <input
                          type="tel"
                          value={senderPhone}
                          onChange={(e) => setSenderPhone(e.target.value)}
                          placeholder="98765 43210"
                          className="w-full pl-11 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Email Address <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      type="email"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="priya@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Topic
                    </label>
                    <select
                      value={senderSubject}
                      onChange={(e) => setSenderSubject(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-teal-500 bg-white"
                    >
                      <option value="General Enquiry">General Clinic Enquiry</option>
                      <option value="Treatment Cost Estimate">Treatment Cost & Quote</option>
                      <option value="Second Opinion Review">Second Opinion Consultation</option>
                      <option value="Invisible Aligners Consultation">Invisible Aligners Consultation</option>
                      <option value="Dental Insurance Coverage">Dental Insurance Query</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      How can we help? <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={3}
                      value={senderMessage}
                      onChange={(e) => setSenderMessage(e.target.value)}
                      placeholder="Tell us what you need or what dental issue you are facing..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-teal-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {submitting ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right: Hours, Address & Commute Details */}
            <div className="lg:col-span-6 space-y-6">
              {/* Clinic Timings */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-teal-600" />
                    <span>Clinic Working Hours</span>
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Open Today
                  </span>
                </div>

                <div className="divide-y divide-slate-100 text-xs sm:text-sm">
                  <div className="py-2.5 flex justify-between items-center">
                    <span className="font-semibold text-slate-800">Monday to Friday</span>
                    <span className="text-slate-600">09:00 AM – 08:30 PM</span>
                  </div>
                  <div className="py-2.5 flex justify-between items-center">
                    <span className="font-semibold text-slate-800">Saturday</span>
                    <span className="text-slate-600">09:00 AM – 07:00 PM</span>
                  </div>
                  <div className="py-2.5 flex justify-between items-center">
                    <span className="font-semibold text-slate-800">Sunday</span>
                    <span className="text-slate-600">10:00 AM – 02:00 PM (Prior Appointment)</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 bg-stone-50 p-3 rounded-xl border border-slate-100">
                  💡 <strong>Early morning & late evening slots available:</strong> Book in advance if you want visits outside your standard office hours.
                </p>
              </div>

              {/* Getting Here: Metro & Parking */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs space-y-4">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-teal-600" />
                  <span>How to Reach Us in Indiranagar</span>
                </h3>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                      <Train className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-slate-900 font-semibold block">Via Namma Metro (Purple Line)</strong>
                      Get down at <strong>Indiranagar Metro Station</strong> (Exit B). Walk 250 meters south along 100 Feet Road (approx. 3 minutes). We are opposite Glen&apos;s Bakehouse.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                      <Car className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-slate-900 font-semibold block">By Car or Cab (Valet Parking Available)</strong>
                      Dedicated covered basement parking with free valet service for all registered clinic patients.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-slate-900 font-semibold block">Full Clinic Address</strong>
                      {clinic.address}, 100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://maps.google.com/?q=100+Feet+Road+Indiranagar+Bengaluru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 font-bold text-xs transition-colors border border-teal-200"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Open in Google Maps / Get Directions</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map Section */}
          <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/80 shadow-md overflow-hidden">
            <div className="flex items-center justify-between mb-4 px-2">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Interactive Landmark Map
                </h3>
                <p className="text-xs text-slate-500">
                  Plot 42, 100 Feet Road, Indiranagar (Near Indiranagar Metro Station)
                </p>
              </div>
              <Link
                href="/booking"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs shadow-xs"
              >
                <span>Book Appointment Here</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 bg-stone-100">
              <iframe
                title="Dental Clinic Location Map"
                src="https://maps.google.com/maps?q=100+Feet+Road,+Indiranagar,+Bengaluru,+Karnataka+560038&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[20%] contrast-[105%]"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <MobileFloatingCta onOpenBooking={() => window.location.href = '/booking'} />
    </div>
  );
}
