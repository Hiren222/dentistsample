'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DOCTORS } from '@/lib/clinic-data';
import { GraduationCap, Quote, ArrowRight } from 'lucide-react';

interface TeamSectionProps {
  onSelectDoctorForBooking: (doctorName: string) => void;
}

export function TeamSection({ onSelectDoctorForBooking }: TeamSectionProps) {
  return (
    <section id="team" className="py-20 md:py-28 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-widest text-teal-600 uppercase mb-2">
            Compassionate Caregivers
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Meet our gentle dental specialists
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
            Our clinicians combine premier credentials with a warm, empathetic bedside
            manner that puts nervous patients at ease.
          </p>
        </div>

        {/* 3 Dentist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCTORS.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-[#FAFAF9] rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo container */}
                <div className="relative aspect-[4/3] w-full bg-slate-100">
                  <Image
                    src={doctor.photo}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-slate-700 border border-slate-200/80 shadow-xs">
                    {doctor.experience}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {doctor.name}
                    </h3>
                    <p className="text-sm font-medium text-teal-600 mt-0.5">
                      {doctor.role}
                    </p>
                  </div>

                  {/* Education & credentials */}
                  <div className="flex items-start gap-2 text-xs text-slate-500">
                    <GraduationCap className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>{doctor.degrees}</span>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {doctor.bio}
                  </p>

                  {/* Quote */}
                  <div className="p-3 bg-teal-50/70 rounded-2xl border border-teal-100 relative">
                    <Quote className="w-4 h-4 text-teal-400 absolute top-2 right-2 opacity-50" />
                    <p className="text-xs italic text-teal-900 leading-relaxed pr-3">
                      {doctor.quote}
                    </p>
                  </div>

                  {/* Specialties tags */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Specialties:
                    </span>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-600">
                      {doctor.specialties.map((spec, sIdx) => (
                        <React.Fragment key={sIdx}>
                          {sIdx > 0 && <span className="text-slate-300">·</span>}
                          <span>{spec}</span>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => onSelectDoctorForBooking(doctor.name)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-teal-700 hover:text-white hover:bg-teal-600 bg-white border border-teal-200/80 rounded-xl transition-all shadow-xs"
                >
                  Book with {doctor.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Banner linking to full About Us Page */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#FAFAF9] border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
              Clinic Story & Accreditations
            </span>
            <h4 className="text-lg font-bold text-slate-900 mt-2">
              Discover our journey, awards, and comfort sanctuary
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
              Learn how we grew from a single dental chair in Indiranagar to a state-of-the-art practice with IDA Karnataka recognition and ISO 9001 certified sterilization.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs whitespace-nowrap shadow-sm hover:shadow-md transition-all shrink-0"
          >
            <span>Read Our Full Story & Awards</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
