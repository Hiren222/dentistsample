'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { DETAILED_SERVICES, DetailedService } from '@/lib/clinic-data';
import { useClinic } from '@/lib/clinic-context';
import {
  ShieldCheck,
  Sparkles,
  Activity,
  Smile,
  HeartHandshake,
  CheckCircle2,
  Clock,
  Zap,
  ArrowRight,
  Filter,
  Check,
  AlertCircle,
  Calendar,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MobileFloatingCta } from '@/components/MobileFloatingCta';

export default function ServicesPage() {
  const { clinic } = useClinic();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'everyday', label: 'Everyday Care' },
    { id: 'cosmetic', label: 'Teeth Whitening' },
    { id: 'straightening', label: 'Clear Aligners' },
    { id: 'pain-relief', label: 'Toothache Relief' },
    { id: 'kids', label: 'Kids Dental' },
  ];

  const filteredServices =
    activeCategory === 'all'
      ? DETAILED_SERVICES
      : DETAILED_SERVICES.filter((s) => s.category === activeCategory);

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
    <div className="min-h-screen flex flex-col bg-[#FAFAF9] text-slate-800">
      <Navbar />

      <main className="flex-grow pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-teal-600 uppercase mb-2 block">
              Clear & Simple Dental Care
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
              See how our treatments work—step by step
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
              No scary medical jargon. No boring walls of text. Just real solutions for everyday
              dental problems, exactly how long it takes, and what it costs.
            </p>
          </div>

          {/* Interactive Category Filter Bar */}
          <div className="flex items-center justify-center mb-12">
            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-white rounded-2xl border border-slate-200/90 shadow-xs max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all whitespace-nowrap ${
                    activeCategory === cat.id
                      ? 'bg-teal-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Detailed Service Cards Grid */}
          <div className="space-y-12">
            {filteredServices.map((service, index) => {
              const Icon = getIcon(service.iconName);
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-xs hover:shadow-md transition-shadow"
                >
                  {/* Top Bar: Icon, Title, and Quick Specs */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-100 text-teal-600 flex items-center justify-center shrink-0">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-md">
                            {service.categoryLabel}
                          </span>
                          <span className="text-xs text-slate-400">·</span>
                          <span className="text-xs font-medium text-slate-500">
                            {service.visitsRequired}
                          </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 shrink-0">
                      <div className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                        <span className="text-slate-400 block">Typical Cost</span>
                        <span className="font-bold text-slate-900">{service.startingPrice}</span>
                      </div>
                      <Link
                        href={`/booking?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center gap-2 px-5 py-3 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold rounded-xl shadow-xs transition-colors whitespace-nowrap"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Book This Treatment</span>
                      </Link>
                    </div>
                  </div>

                  {/* Real World Problem Box */}
                  <div className="mt-6 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-amber-900">
                        The Real-World Problem It Fixes:
                      </p>
                      <p className="text-sm text-amber-950 font-medium mt-0.5">
                        {service.realProblem}
                      </p>
                    </div>
                  </div>

                  {/* Quick Summary */}
                  <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {service.quickSummary}
                  </p>

                  {/* How It Is Done: 4 Step Visual Cards */}
                  <div className="mt-8">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-teal-600" />
                      <span>How it is done (No surprises):</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {service.howItsDone.map((step) => (
                        <div
                          key={step.stepNumber}
                          className="bg-[#FAFAF9] rounded-2xl p-4 sm:p-5 border border-slate-200/80 relative"
                        >
                          <div className="w-6 h-6 rounded-full bg-teal-600 text-white text-xs font-bold flex items-center justify-center mb-3">
                            {step.stepNumber}
                          </div>
                          <p className="text-sm font-bold text-slate-900 mb-1">
                            {step.stepTitle}
                          </p>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {step.stepDesc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Quick Info Strip */}
                  <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-teal-600 shrink-0" />
                      <span className="text-slate-500">Visit Time:</span>
                      <strong className="text-slate-900 font-semibold">{service.duration}</strong>
                    </div>

                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="text-slate-500">Pain Level:</span>
                      <strong className="text-slate-900 font-semibold">{service.painLevel}</strong>
                    </div>

                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                      <span className="text-slate-500">Recovery:</span>
                      <strong className="text-slate-900 font-semibold">{service.recovery}</strong>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Need Advice Banner */}
          <div className="mt-16 bg-teal-50 rounded-3xl p-8 border border-teal-100 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Not sure which treatment fits your teeth?
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Book a relaxed 30-minute checkup with Dr. Elena or Dr. Marcus. We explain all your
                options first before touching a single tool.
              </p>
            </div>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold rounded-xl shadow-xs transition-colors shrink-0"
            >
              <span>Schedule a Checkup</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <MobileFloatingCta />
    </div>
  );
}
