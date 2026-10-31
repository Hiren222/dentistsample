'use client';

import React from 'react';
import { useClinic } from '@/lib/clinic-context';
import { CalendarCheck, Coffee, Sparkles, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export function HowItWorks({ onOpenBooking }: HowItWorksProps) {
  const { clinic } = useClinic();

  const steps = [
    {
      number: '01',
      title: 'Book Online',
      subtitle: 'Effortless 60-Second Scheduling',
      icon: CalendarCheck,
      description:
        'Select your preferred day, time slot, and specialist with our live booking calendar. Receive instant digital confirmation and zero tedious paperwork on arrival.',
    },
    {
      number: '02',
      title: 'Relaxing Visit',
      subtitle: 'Gentle, Calming Sanctuary',
      icon: Coffee,
      description:
        'Walk into a tranquil atmosphere with warm herbal tea, noise-canceling headsets, and sensory comfort amenities. Experience computerized pain-free care at your own pace.',
    },
    {
      number: '03',
      title: 'Radiant Smile',
      subtitle: 'Confidence That Lasts',
      icon: Sparkles,
      description:
        'Leave feeling refreshed with bright, healthy teeth and actionable home wellness care. All insurance billing and transparent estimates are finalized with zero surprises.',
    },
  ];

  return (
    <section className="py-20 md:py-28 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-widest text-teal-600 uppercase mb-2">
            The Patient Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Three effortless steps to your best dental visit ever
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
            We stripped away traditional dental friction—leaving only comfort, clarity, and genuine care.
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-[#FAFAF9] rounded-3xl p-8 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Step index & Icon header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-teal-600/30 font-mono">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 text-teal-600 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <p className="text-xs font-bold uppercase tracking-wider text-teal-600 mb-1">
                    {step.title}
                  </p>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.subtitle}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/70">
                  <span className="text-xs font-medium text-slate-500">
                    Step {idx + 1} of 3 · {clinic.name} Care Standard
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800 hover:underline"
          >
            <span>Ready to experience modern dentistry? Reserve your time slot now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
