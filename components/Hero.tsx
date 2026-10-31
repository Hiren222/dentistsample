'use client';

import React from 'react';
import Image from 'next/image';
import { useClinic } from '@/lib/clinic-context';
import { Calendar, Phone, ShieldCheck, HeartHandshake, Star, MessageCircle, Clock, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  const { clinic } = useClinic();

  const trustBadges = [
    {
      icon: ShieldCheck,
      title: '10+ Years Experience',
      desc: 'Board-certified specialists',
    },
    {
      icon: Star,
      title: '5,000+ Happy Patients',
      desc: '4.9★ verified Google rating',
    },
    {
      icon: HeartHandshake,
      title: 'Gentle, Pain-Free Care',
      desc: 'Computer-guided comfort numbing',
    },
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FAFAF9]">
      {/* Subtle organic background glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 -z-10 w-full max-w-7xl h-96 bg-gradient-to-br from-teal-500/10 via-teal-100/30 to-amber-100/20 rounded-full blur-3xl pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, subhead, CTAs, trust badges */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Location & calm reassurance notice */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-800 bg-teal-50 border border-teal-200/80 rounded-full px-3.5 py-1.5 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-teal-500" />
              <span>Modern Dental Sanctuary in {clinic.city}, {clinic.state}</span>
              <span className="text-teal-400">·</span>
              <span className="text-slate-600">Accepting New Patients</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] [text-wrap:balance]">
              Healthy smiles{' '}
              <span className="relative whitespace-nowrap text-teal-600">
                start here.
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3 text-teal-300/60 -z-10"
                  viewBox="0 0 250 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 9C60 3 190 2 247 9"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl [text-wrap:balance]">
              Step into a calm, anxiety-free dental experience designed around your peace of mind.
              From routine wellness visits to cosmetic transformations, our gentle team provides
              pain-free care using state-of-the-art technology.
            </p>

            {/* Availability indicator */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
              <Clock className="w-4 h-4 text-teal-600 shrink-0" />
              <span>
                Next available opening:{' '}
                <strong className="font-semibold text-slate-900">
                  Tomorrow at 10:30 AM
                </strong>{' '}
                · Zero wait-time policy
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-teal-600 hover:bg-teal-700 active:bg-teal-800 rounded-xl shadow-md shadow-teal-600/25 hover:shadow-lg transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </button>

              <a
                href={`tel:${clinic.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-slate-800 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl shadow-xs hover:shadow-md transition-all whitespace-nowrap"
              >
                <Phone className="w-5 h-5 text-teal-600" />
                <span>Call Us: {clinic.phone}</span>
              </a>

              <a
                href={`https://wa.me/${clinic.whatsappRaw}?text=Hi%20${encodeURIComponent(
                  clinic.name
                )},%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/70 hover:bg-emerald-100 rounded-xl transition-colors whitespace-nowrap"
                title="Chat with our patient care coordinator on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-slate-200">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {trustBadges.map((badge, idx) => {
                  const Icon = badge.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-teal-50 border border-teal-100 text-teal-600 shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 leading-tight">
                          {badge.title}
                        </p>
                        <p className="text-xs text-slate-500 mt-0.5 leading-tight">
                          {badge.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Hero High-Res Image with Calm Reassurance Overlays */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer soft shadow and border container */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100 aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/3]">
                <Image
                  src="/images/hero.jpg"
                  alt="Happy smiling patient in modern soothing dental clinic"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  referrerPolicy="no-referrer"
                />

                {/* Floating comfort reassurance badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 p-3.5 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-slate-200/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="text-xs">
                    <p className="font-semibold text-slate-900">
                      Complimentary Comfort Menu
                    </p>
                    <p className="text-slate-500">
                      Noise-canceling Bose headsets · Weighted blankets · Warm herbal tea
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative accent card */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-white px-4 py-2.5 rounded-2xl shadow-md border border-slate-200 items-center gap-2">
                <div className="flex -space-x-1.5 overflow-hidden">
                  <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-teal-500 text-[10px] text-white font-bold flex items-center justify-center">4.9</div>
                </div>
                <div className="text-xs">
                  <p className="font-bold text-slate-900">Top Rated Clinic</p>
                  <p className="text-[11px] text-slate-500">{clinic.city} Readers&apos; Choice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
