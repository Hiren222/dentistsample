'use client';

import React, { useState } from 'react';
import { useClinic } from '@/lib/clinic-context';
import { CLINIC_SERVICES, DOCTORS } from '@/lib/clinic-data';
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Download,
  ExternalLink,
  Car,
} from 'lucide-react';

interface BookingContactSectionProps {
  preselectedService?: string;
  preselectedDoctor?: string;
}

export function BookingContactSection({
  preselectedService,
  preselectedDoctor,
}: BookingContactSectionProps) {
  const { clinic } = useClinic();

  // Pre-filled from props when mounted
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: 'morning',
    service: preselectedService || 'General Checkups & Cleanings',
    doctor: preselectedDoctor || 'Any Specialist Available',
    patientType: 'new',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState<{
    reference: string;
    fullName: string;
    service: string;
    doctor: string;
    date: string;
    time: string;
    phone: string;
    email: string;
  } | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a contact phone number';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select a preferred date';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const randomCode = 'LUM-' + Math.floor(10000 + Math.random() * 90000);
      setSubmittedBooking({
        reference: randomCode,
        fullName: formData.fullName,
        service: formData.service,
        doctor: formData.doctor,
        date: formData.preferredDate,
        time:
          formData.preferredTime === 'morning'
            ? 'Morning (8:30 AM – 11:30 AM)'
            : formData.preferredTime === 'midday'
            ? 'Midday (11:30 AM – 2:30 PM)'
            : 'Evening (3:30 PM – 7:00 PM)',
        phone: formData.phone,
        email: formData.email,
      });
      setIsSubmitting(false);
    }, 700);
  };

  // Generate downloadable .ics iCalendar file
  const downloadCalendarInvite = () => {
    if (!submittedBooking) return;
    const dateFormatted = submittedBooking.date.replace(/-/g, '');
    const startTime = `${dateFormatted}T100000`;
    const endTime = `${dateFormatted}T110000`;

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Lumina Dental Studio//Appointment//EN',
      'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT',
      `SUMMARY:Dental Appointment: ${submittedBooking.service} - ${clinic.name}`,
      `DESCRIPTION:Appointment Reference: ${submittedBooking.reference}\\nDoctor: ${submittedBooking.doctor}\\nClinic Phone: ${clinic.phone}\\nPlease arrive 10 minutes early.`,
      `LOCATION:${clinic.name}, ${clinic.address}, ${clinic.suite}, ${clinic.city}, ${clinic.state} ${clinic.zip}`,
      `DTSTART:${startTime}`,
      `DTEND:${endTime}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `lumina-appointment-${submittedBooking.reference}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Get tomorrow's date string for input min attribute
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-widest text-teal-600 uppercase mb-2">
            Schedule Your Visit
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Book your appointment at {clinic.name}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
            Choose your preferred time, date, and treatment. Our care coordinators will confirm your
            slot with zero waiting on arrival.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Booking Form */}
          <div className="lg:col-span-7 bg-[#FAFAF9] rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-md">
            {!submittedBooking ? (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-teal-600" />
                    <span className="font-bold text-slate-900 text-base">
                      Online Appointment Request
                    </span>
                  </div>
                  <span className="text-xs text-slate-500">
                    Takes &lt; 60 seconds
                  </span>
                </div>

                {/* Patient Type Radio */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-700">
                    Are you a new or returning patient?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, patientType: 'new' })}
                      className={`py-2.5 px-4 text-xs font-semibold rounded-xl border text-center transition-all ${
                        formData.patientType === 'new'
                          ? 'bg-teal-50 border-teal-500 text-teal-800'
                          : 'bg-white border-slate-200 text-slate-600'
                      }`}
                    >
                      New Patient (First Visit)
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, patientType: 'returning' })}
                      className={`py-2.5 px-4 text-xs font-semibold rounded-xl border text-center transition-all ${
                        formData.patientType === 'returning'
                          ? 'bg-teal-50 border-teal-500 text-teal-800'
                          : 'bg-white border-slate-200 text-slate-600'
                      }`}
                    >
                      Returning Patient
                    </button>
                  </div>
                </div>

                {/* Full Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="e.g. Priya Sharma"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
                      }}
                      className={`w-full px-4 py-3 text-sm rounded-xl border bg-white text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                        errors.fullName
                          ? 'border-rose-400'
                          : 'border-slate-200'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 98201 00000"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      className={`w-full px-4 py-3 text-sm rounded-xl border bg-white text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                        errors.phone
                          ? 'border-rose-400'
                          : 'border-slate-200'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-slate-700 mb-1.5"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="priya.sharma@example.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    className={`w-full px-4 py-3 text-sm rounded-xl border bg-white text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                      errors.email
                        ? 'border-rose-400'
                        : 'border-slate-200'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Service & Doctor Dropdowns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      Desired Dental Service
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      {CLINIC_SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Emergency Consultation">Emergency Toothache Care</option>
                      <option value="General Consultation">Comprehensive Second Opinion</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="doctor"
                      className="block text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      Preferred Specialist
                    </label>
                    <select
                      id="doctor"
                      value={formData.doctor}
                      onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="Any Specialist Available">First Available Doctor</option>
                      {DOCTORS.map((d) => (
                        <option key={d.id} value={d.name}>
                          {d.name} ({d.role.split('&')[0].trim()})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Preferred Date & Time Window */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="preferredDate"
                      className="block text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      Preferred Date *
                    </label>
                    <input
                      id="preferredDate"
                      type="date"
                      min={minDate}
                      value={formData.preferredDate}
                      onChange={(e) => {
                        setFormData({ ...formData, preferredDate: e.target.value });
                        if (errors.preferredDate) setErrors({ ...errors, preferredDate: '' });
                      }}
                      className={`w-full px-4 py-3 text-sm rounded-xl border bg-white text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                        errors.preferredDate
                          ? 'border-rose-400'
                          : 'border-slate-200'
                      }`}
                    />
                    {errors.preferredDate && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.preferredDate}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="preferredTime"
                      className="block text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      Preferred Time Slot
                    </label>
                    <select
                      id="preferredTime"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="morning">Morning (8:30 AM – 11:30 AM)</option>
                      <option value="midday">Midday (11:30 AM – 2:30 PM)</option>
                      <option value="afternoon">Evening (3:30 PM – 7:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-slate-700 mb-1.5"
                  >
                    Personal Preferences or Dental Concerns (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="e.g. Mild dental anxiety, preference for noise-canceling headphones, corporate insurance queries..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 text-base font-bold text-white bg-teal-600 hover:bg-teal-700 active:bg-teal-800 disabled:opacity-70 rounded-xl shadow-md shadow-teal-600/25 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Confirming your reservation...</span>
                    </span>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5" />
                      <span>Request Appointment Now</span>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-500">
                  🔒 Your private health information is 100% confidential. Zero spam.
                </p>
              </form>
            ) : (
              /* Success Confirmation Card */
              <div className="py-6 px-4 sm:px-6 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-600 mx-auto flex items-center justify-center border border-teal-200 shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
                    Booking Request Confirmed
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                    Thank you, {submittedBooking.fullName}!
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                    We have reserved your slot. A care coordinator from {clinic.name} has dispatched
                    a confirmation text and WhatsApp.
                  </p>
                </div>

                {/* Reservation Summary Box */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200 text-left max-w-md mx-auto space-y-2.5 text-xs">
                  <div className="flex justify-between pb-2 border-b border-slate-100">
                    <span className="text-slate-500">Reference Code</span>
                    <span className="font-mono font-bold text-teal-700">
                      {submittedBooking.reference}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Treatment</span>
                    <span className="font-semibold text-slate-900">
                      {submittedBooking.service}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Specialist</span>
                    <span className="font-semibold text-slate-900">
                      {submittedBooking.doctor}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Date</span>
                    <span className="font-semibold text-slate-900">
                      {submittedBooking.date}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Time Window</span>
                    <span className="font-semibold text-slate-900">
                      {submittedBooking.time}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-slate-100">
                    <span className="text-slate-500">Location</span>
                    <span className="font-semibold text-slate-900 text-right">
                      {clinic.address}, {clinic.suite}, {clinic.city}
                    </span>
                  </div>
                </div>

                {/* Calendar Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={downloadCalendarInvite}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold rounded-xl shadow-sm transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Calendar Invite (.ics)</span>
                  </button>

                  <button
                    onClick={() => setSubmittedBooking(null)}
                    className="w-full sm:w-auto px-4 py-2.5 text-xs font-medium text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
                  >
                    Book Another Appointment
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Contact Details, Opening Hours & Embedded Map */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact & Location Card */}
            <div className="bg-[#FAFAF9] rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs space-y-6">
              <h3 className="text-lg font-bold text-slate-900">
                Clinic Location & Hours
              </h3>

              <div className="space-y-4 text-sm">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      {clinic.address}, {clinic.suite}
                    </p>
                    <p className="text-xs text-slate-500">
                      {clinic.city}, {clinic.state} {clinic.zip}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
                      <Car className="w-3 h-3" />
                      <span>Dedicated patient parking available at the building</span>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Clinic Landline</p>
                    <a
                      href={`tel:${clinic.phoneRaw}`}
                      className="font-bold text-slate-900 hover:text-teal-600 transition-colors"
                    >
                      {clinic.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Direct WhatsApp</p>
                    <a
                      href={`https://wa.me/${clinic.whatsappRaw}?text=Hi,%20I%20would%20like%20to%20connect%20with%20your%20clinic.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 hover:underline"
                    >
                      {clinic.whatsapp}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Email Inquiries</p>
                    <a
                      href={`mailto:${clinic.email}`}
                      className="font-medium text-slate-800 hover:text-teal-600 transition-colors"
                    >
                      {clinic.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours Table */}
              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-teal-600" />
                    <span>Office Hours</span>
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                    Open Today
                  </span>
                </div>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Monday – Friday</span>
                    <span className="font-semibold text-slate-800">
                      8:30 AM – 7:30 PM
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Saturday</span>
                    <span className="font-semibold text-slate-800">
                      9:00 AM – 5:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Sunday</span>
                    <span className="text-slate-500">
                      10:00 AM – 2:00 PM (Emergency & Appointment)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Stylized Map Placeholder */}
            <div className="bg-[#FAFAF9] rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs relative">
              <div className="relative h-56 bg-teal-50/40 flex items-center justify-center p-4">
                {/* Stylized geometric map lines */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#0d9488_1px,transparent_1px),linear-gradient(to_bottom,#0d9488_1px,transparent_1px)] bg-[size:24px_24px]" />

                <div className="relative z-10 text-center space-y-2 p-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-md border border-slate-200 max-w-xs">
                  <div className="w-8 h-8 rounded-full bg-teal-600 text-white mx-auto flex items-center justify-center shadow-md">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-xs">
                      {clinic.name}
                    </p>
                    <p className="text-[11px] text-slate-500">
                      {clinic.address}, {clinic.city}
                    </p>
                  </div>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      `${clinic.name} ${clinic.address} ${clinic.city} ${clinic.state}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-teal-600 hover:underline pt-1"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
