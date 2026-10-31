'use client';

import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '@/lib/clinic-data';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Quote } from 'lucide-react';

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
    }, 6500);
    return () => clearInterval(interval);
  }, [isAutoplay]);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="reviews" className="py-20 bg-stone-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Google Rating Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-bold tracking-widest text-teal-600 uppercase mb-2">
              Patient Experiences
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
              Loved by nervous patients and confident smiles
            </h2>
          </div>

          {/* Google Rating Badge */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs flex items-center gap-3.5 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center font-bold text-lg text-slate-800 border border-slate-100">
              <span className="text-blue-500 font-extrabold">G</span>
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-slate-900 ml-1">4.9 / 5.0</span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                486+ Verified Google Reviews
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial Carousel Card */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoplay(false)}
          onMouseLeave={() => setIsAutoplay(true)}
        >
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-md relative overflow-hidden min-h-[320px] flex flex-col justify-between">
            {/* Background subtle quote mark */}
            <Quote className="absolute right-6 bottom-6 w-24 h-24 text-teal-500/10 pointer-events-none -scale-x-100" />

            <div>
              {/* Rating and verified info */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-1.5 text-amber-400">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1 text-teal-700 font-semibold bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-100">
                    <CheckCircle2 className="w-3 h-3 text-teal-500" />
                    Verified Patient
                  </span>
                  <span>·</span>
                  <span>{current.treatment}</span>
                  <span>·</span>
                  <span>{current.date}</span>
                </div>
              </div>

              {/* Highlight & Quote */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 leading-snug">
                &ldquo;{current.highlight}&rdquo;
              </h3>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed italic">
                {current.quote}
              </p>
            </div>

            {/* Author Footer & Navigation Controls */}
            <div className="pt-8 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-bold text-slate-900 text-base">
                  {current.name}
                </p>
                <p className="text-xs text-slate-500">
                  {current.cityArea}
                </p>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors"
                  aria-label="Previous Review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors"
                  aria-label="Next Review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Dot Indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === i ? 'w-8 bg-teal-600' : 'w-2 bg-slate-300'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
