'use client';

import React from 'react';
import { useClinic } from '@/lib/clinic-context';
import { Cpu, HeartPulse, Clock, CircleDollarSign, Check, X } from 'lucide-react';

export function WhyChooseUs() {
  const { clinic } = useClinic();

  const benefits = [
    {
      icon: Cpu,
      title: 'Modern Minimally-Invasive Technology',
      desc: 'High-definition 3D digital imaging, gentle ultrasonic tools, and painless laser dentistry eliminate discomfort and ensure pinpoint diagnosis without outdated guesswork.',
      badge: 'Advanced Care',
    },
    {
      icon: HeartPulse,
      title: 'Gentle, Pain-Free Philosophy',
      desc: 'We utilize computerized local anesthetic delivery (The Wand) that eliminates the sting of traditional needles, alongside complimentary warm blankets and streaming headsets.',
      badge: 'Zero Fear',
    },
    {
      icon: Clock,
      title: 'Flexible Early & Weekend Hours',
      desc: 'We offer appointments starting at 8:30 AM on weekdays and Saturday clinic hours, ensuring dental wellness fits seamlessly around your family and work schedule.',
      badge: 'Convenient',
    },
    {
      icon: CircleDollarSign,
      title: 'Transparent, No-Surprise Pricing',
      desc: 'You receive clear, itemized treatment estimates before any procedure begins. We assist with cashless health insurance and offer accessible 0% EMI options.',
      badge: '100% Upfront',
    },
  ];

  const comparison = [
    {
      feature: 'Anesthetic Delivery',
      traditional: 'Traditional manual needle injections with noticeable pinch',
      lumina: 'Computer-regulated microscopic flow (The Wand) with zero sting',
    },
    {
      feature: 'Impression Taking',
      traditional: 'Cold, gooey plaster trays causing gag reflexes',
      lumina: 'Instant 3D digital laser scanning in less than 2 minutes',
    },
    {
      feature: 'Atmosphere & Senses',
      traditional: 'Sterile chemical smell and harsh fluorescent overheads',
      lumina: 'Soothing organic aromatherapy, warm blankets, and garden views',
    },
    {
      feature: 'Pricing Clarity',
      traditional: 'Surprise bills arriving in the mail weeks later',
      lumina: 'Printed upfront itemized cost with insurance verified beforehand',
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-widest text-teal-600 uppercase mb-2">
            The {clinic.name} Standard
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Why patients in {clinic.city} feel calm in our chairs
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
            We designed every detail of our studio to replace dental anxiety with tranquility,
            combining genuine human warmth with the world’s most advanced dental equipment.
          </p>
        </div>

        {/* 4 Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAFAF9] rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 text-teal-600 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-teal-700 bg-teal-50/70 px-2 py-0.5 rounded-md">
                      {b.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                    {b.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quiet Editorial Comparison Matrix */}
        <div className="bg-[#FAFAF9] rounded-3xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="max-w-3xl mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              A gentle contrast to traditional dentistry
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              See how our calm-first protocols ensure you feel respected and relaxed every minute.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
                  <th className="py-3 px-4 font-semibold w-1/4">Experience Aspect</th>
                  <th className="py-3 px-4 font-semibold w-3/8 text-slate-400">
                    Traditional Dental Clinics
                  </th>
                  <th className="py-3 px-4 font-semibold w-3/8 text-teal-700 bg-teal-50/70 rounded-t-lg">
                    {clinic.name}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/80 transition-colors">
                    <td className="py-4 px-4 font-medium text-slate-900 align-top">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 text-slate-500 align-top">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-slate-800 bg-teal-50/40 align-top font-medium">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{row.lumina}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
