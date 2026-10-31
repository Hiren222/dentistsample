'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DOCTORS, CLINIC_JOURNEY, CLINIC_AWARDS } from '@/lib/clinic-data';
import { useClinic } from '@/lib/clinic-context';
import {
  Award,
  Heart,
  Clock,
  Sparkles,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  Coffee,
  Headphones,
  Tv,
  ArrowRight,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MobileFloatingCta } from '@/components/MobileFloatingCta';

export default function AboutPage() {
  const { clinic } = useClinic();

  const comfortFeatures = [
    {
      icon: Headphones,
      title: 'Noise-Canceling Bose Headsets',
      desc: 'Listen to calming Spotify music or a podcast so you never hear the dental drill.',
    },
    {
      icon: Tv,
      title: 'Ceiling Entertainment Screens',
      desc: 'Watch Netflix, YouTube, or nature documentaries while relaxing comfortably in the chair.',
    },
    {
      icon: Coffee,
      title: 'Warm Tea & Calm Lounge',
      desc: 'No clinical chemical smell. Enjoy fresh chamomile tea and a tranquil living room vibe.',
    },
    {
      icon: Heart,
      title: 'The Zero-Judgment Guarantee',
      desc: 'Haven’t been to a dentist in 5 years? Nervous? We never lecture, scold, or shame you. Ever.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9] text-slate-800">
      <Navbar />

      <main className="flex-grow pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-teal-600 uppercase mb-2 block">
              About {clinic.name}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
              We built a dental studio for people who dislike the dentist
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
              Founded in Indiranagar, Bengaluru, our practice was born with one simple mission:
              provide world-class, painless dental care with genuine human warmth.
            </p>
          </div>

          {/* Section 1: Meet the Dentists (Very small, punchy briefs) */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Meet your gentle doctors
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Small briefs, big hearts. Here are the friendly faces caring for your smile.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {DOCTORS.map((doctor) => (
                <div
                  key={doctor.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    {/* Doctor Photo */}
                    <div className="relative aspect-[4/3] w-full bg-slate-100">
                      <Image
                        src={doctor.photo}
                        alt={doctor.name}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 400px"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-teal-700 border border-slate-200 shadow-xs">
                        {doctor.experience}
                      </span>
                    </div>

                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{doctor.name}</h3>
                        <p className="text-xs font-semibold text-teal-600 mt-0.5">{doctor.role}</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">{doctor.degrees}</p>
                      </div>

                      {/* Very small brief: 3 quick bullet highlights to avoid boring paragraphs */}
                      <ul className="space-y-2 text-xs text-slate-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                          <span>
                            <strong>Superpower:</strong>{' '}
                            {doctor.id === 'dr-elena'
                              ? 'Artistic natural smile design & pain-free gentle touch.'
                              : doctor.id === 'dr-marcus'
                              ? 'Pinpoint 3D implants & computer-guided invisible aligners.'
                              : 'Turning nervous children into laughing, brave little patients.'}
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                          <span>
                            <strong>Care Style:</strong> Explains every step in simple words before touching any instrument.
                          </span>
                        </li>
                      </ul>

                      {/* Doctor Quote */}
                      <p className="p-3 rounded-xl bg-teal-50/70 border border-teal-100/70 text-xs italic text-teal-900 leading-relaxed">
                        {doctor.quote}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      href={`/booking?doctor=${encodeURIComponent(doctor.name)}`}
                      className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 text-xs font-semibold text-teal-700 hover:text-white hover:bg-teal-600 bg-teal-50 border border-teal-200/60 rounded-xl transition-all"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book with {doctor.name.split(' ')[1]}</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Journey of the Clinic */}
          <div className="mb-20 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-xs">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold tracking-widest text-teal-600 uppercase mb-1 block">
                Our Story
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                The journey of {clinic.name}
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                How a small 2-chair clinic in Indiranagar grew into Bengaluru’s favorite fear-free dental home.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {CLINIC_JOURNEY.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAFAF9] rounded-2xl p-6 border border-slate-200/80 flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block px-3 py-1 bg-teal-600 text-white font-mono font-bold text-xs rounded-lg mb-4">
                      {item.year}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-medium text-slate-400">
                    Milestone 0{idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Awards & Accreditations */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold tracking-widest text-teal-600 uppercase mb-1 block">
                Recognition
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Awards & Accreditations
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Recognized by leading dental associations for hygiene and patient satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CLINIC_AWARDS.map((award, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                        {award.year}
                      </span>
                      <span className="text-xs text-slate-400">·</span>
                      <span className="text-xs text-slate-500 font-medium">
                        {award.organization}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-1.5">
                      {award.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Our Comfort Promise */}
          <div className="bg-[#FAFAF9] rounded-3xl border border-slate-200/90 p-8 sm:p-12 mb-16">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold tracking-widest text-teal-600 uppercase mb-1 block">
                Patient Comfort First
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Our Comfort Sanctuary features
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Everything we have included to replace dental stress with calm.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {comfortFeatures.map((f, idx) => {
                const Icon = f.icon;
                return (
                  <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                      {f.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-teal-600 text-white rounded-3xl p-8 sm:p-12 shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Ready to meet our gentle doctors in Indiranagar?
            </h2>
            <p className="text-sm sm:text-base text-teal-100 max-w-xl mx-auto mb-6">
              Book your visit in under a minute. Zero waiting on arrival, transparent estimates,
              and a calm, welcoming team.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/booking"
                className="px-6 py-3.5 bg-white text-teal-900 hover:bg-teal-50 font-bold text-sm rounded-xl shadow-md transition-all"
              >
                Book Appointment Online
              </Link>
              <Link
                href="/contact"
                className="px-5 py-3.5 bg-teal-700 hover:bg-teal-800 text-white font-medium text-sm rounded-xl transition-all"
              >
                View Clinic Directions
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <MobileFloatingCta />
    </div>
  );
}
