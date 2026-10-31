'use client';

import React, { useState } from 'react';
import { CLINIC_SERVICES, ServiceItem } from '@/lib/clinic-data';
import {
  ShieldCheck,
  Sparkles,
  Activity,
  Smile,
  HeartHandshake,
  CheckCircle2,
  Clock,
  ArrowRight,
  X,
  Calendar,
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceTitle: string) => void;
}

export function ServicesSection({ onSelectServiceForBooking }: ServicesSectionProps) {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Sparkles':
        return Sparkles;
      case 'Activity':
        return Activity;
      case 'Smile':
        return Smile;
      case 'HeartHandshake':
        return HeartHandshake;
      case 'CheckCircle2':
      default:
        return CheckCircle2;
    }
  };

  return (
    <section id="services" className="py-20 bg-stone-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-widest text-teal-600 uppercase mb-2">
            Comprehensive Dental Care
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Gentle treatments for every smile in your family
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
            From routine preventive checkups to transformative cosmetic enhancements, we blend
            advanced digital dentistry with compassionate, pain-free techniques.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CLINIC_SERVICES.map((service) => {
            const Icon = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-teal-400/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Duration Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 text-teal-600 flex items-center justify-center group-hover:scale-105 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-xs">
                      <Icon className="w-6 h-6 transition-colors duration-300" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      {service.duration}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-teal-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  <p className="text-xs font-semibold text-teal-700 bg-teal-50/80 px-2.5 py-1 rounded-md inline-block mb-4">
                    {service.startingPrice}
                  </p>

                  {/* Quick Feature Bullets */}
                  <ul className="space-y-2 mb-6">
                    {service.benefits.slice(0, 2).map((benefit, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-2 text-xs text-slate-500"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 mt-0.5 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="text-xs font-semibold text-teal-700 hover:text-teal-800 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all"
                  >
                    <span>View Treatment Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onSelectServiceForBooking(service.title)}
                    className="px-3.5 py-1.5 text-xs font-semibold text-teal-700 hover:text-white hover:bg-teal-600 bg-teal-50 border border-teal-200/60 rounded-lg transition-colors"
                  >
                    Book
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Details Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close service modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                {React.createElement(getIcon(activeModalService.iconName), { className: 'w-6 h-6' })}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {activeModalService.title}
                </h3>
                <span className="text-xs text-slate-500">
                  Estimated visit: {activeModalService.duration}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              {activeModalService.fullDesc}
            </p>

            <div className="p-3 bg-teal-50 rounded-xl mb-5 border border-teal-100 text-xs">
              <span className="font-bold text-teal-900">Estimated Cost: </span>
              <span className="text-teal-700 font-semibold">{activeModalService.startingPrice}</span>
            </div>

            <div className="space-y-4 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                What makes our approach different:
              </h4>
              <ul className="space-y-2.5">
                {activeModalService.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 bg-stone-50 rounded-xl mb-6 border border-slate-100 text-xs">
              <p className="font-semibold text-slate-900 mb-0.5">
                Ideal For:
              </p>
              <p className="text-slate-600">{activeModalService.idealFor}</p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  const serviceName = activeModalService.title;
                  setActiveModalService(null);
                  onSelectServiceForBooking(serviceName);
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm rounded-xl shadow-md transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Treatment</span>
              </button>
              <button
                onClick={() => setActiveModalService(null)}
                className="py-3 px-4 bg-slate-100 text-slate-700 hover:bg-slate-200 text-sm font-medium rounded-xl transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
