'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { Sparkles, MoveHorizontal, CheckCircle2, Info } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  treatment: string;
  duration: string;
  visits: string;
  description: string;
  beforeFilter: string; // CSS filter to simulate pre-treatment condition
}

const CASES: CaseStudy[] = [
  {
    id: 'whitening',
    title: 'Professional Laser Whitening',
    treatment: 'In-Office Zoom Whitespeed + Desensitizing Protocol',
    duration: '60 minutes',
    visits: '1 single visit',
    description: 'Safe removal of deep chai, coffee, and aging stains resulting in a 7-shade brighter natural smile without tooth sensitivity.',
    beforeFilter: 'sepia(45%) saturate(140%) brightness(88%) contrast(105%)',
  },
  {
    id: 'veneers',
    title: 'Minimal-Prep Ceramic Veneers',
    treatment: '4 Handcrafted Porcelain Front Veneers',
    duration: '2 weeks total',
    visits: '2 visits',
    description: 'Closed central gap and perfected symmetrical tooth contours while conserving 95% of natural healthy tooth structure.',
    beforeFilter: 'sepia(30%) brightness(92%) contrast(100%) blur(0.3px)',
  },
  {
    id: 'aligners',
    title: 'Clear Aligner Orthodontics',
    treatment: 'Custom Clear Trays + Gentle Teeth Alignment',
    duration: '7 months',
    visits: 'Virtual check-ins',
    description: 'Resolved anterior crowding and mild crossbite discreetly without metal brackets or dietary restrictions.',
    beforeFilter: 'sepia(20%) brightness(90%) contrast(110%)',
  },
];

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = CASES[activeCaseIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(clamped);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleEnd]);

  return (
    <section id="transformations" className="py-20 bg-stone-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-bold tracking-widest text-teal-600 uppercase mb-2">
            Real Transformations
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            See the radiant difference for yourself
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
            Drag the slider horizontally to compare before and after results from our real clinical cases.
          </p>
        </div>

        {/* Interactive Case Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CASES.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => setActiveCaseIndex(idx)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                activeCaseIndex === idx
                  ? 'bg-teal-600 text-white shadow-sm shadow-teal-600/30'
                  : 'bg-white text-slate-700 border border-slate-200/90 hover:bg-slate-50'
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        {/* Main Comparison Component */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Interactive Image Container */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 select-none cursor-ew-resize touch-none"
              onMouseDown={(e) => {
                setIsDragging(true);
                handleMove(e.clientX);
              }}
              onTouchStart={(e) => {
                setIsDragging(true);
                handleMove(e.touches[0].clientX);
              }}
            >
              {/* "After" Image (Full background) */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/images/after.jpg"
                  alt="Smile Transformation After Result"
                  fill
                  className="object-cover object-center pointer-events-none"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 1024px) 100vw, 750px"
                />
                <span className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  After Lumina Care
                </span>
              </div>

              {/* "Before" Image (Clipped overlay) */}
              <div
                className="absolute inset-0 h-full overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="relative w-full h-full min-w-[700px] sm:min-w-[800px] lg:min-w-[900px]">
                  <Image
                    src="/images/after.jpg"
                    alt="Smile Before Treatment"
                    fill
                    style={{ filter: activeCase.beforeFilter }}
                    className="object-cover object-center pointer-events-none"
                    referrerPolicy="no-referrer"
                    sizes="(max-width: 1024px) 100vw, 750px"
                  />
                </div>
                <span className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  Before Treatment
                </span>
              </div>

              {/* Slider Split Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Center Drag Handle Handle Pill */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-teal-600 shadow-xl border-2 border-white flex items-center justify-center cursor-ew-resize">
                  <MoveHorizontal className="w-5 h-5" />
                </div>
              </div>

              {/* Help tip overlay */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md text-slate-700 text-[11px] font-medium px-3.5 py-1 rounded-full shadow-xs border border-slate-200/80 flex items-center gap-1.5 pointer-events-none">
                <MoveHorizontal className="w-3.5 h-3.5 text-teal-600" />
                <span>Drag handle left or right to inspect</span>
              </div>
            </div>
          </div>

          {/* Right Column: Case Details & Stats */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs space-y-5">
              <div className="flex items-center gap-2 text-teal-600 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Case Profile</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 leading-snug">
                {activeCase.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {activeCase.description}
              </p>

              <div className="space-y-3 pt-3 border-t border-slate-100 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Treatment Plan</span>
                  <span className="font-semibold text-slate-800 text-right">
                    {activeCase.treatment}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Total Duration</span>
                  <span className="font-semibold text-slate-800">
                    {activeCase.duration}
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Visits Required</span>
                  <span className="font-semibold text-slate-800">
                    {activeCase.visits}
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <div className="flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-100">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>100% Patient Satisfaction Rating</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-teal-50/60 rounded-2xl border border-teal-100 flex items-start gap-3">
              <Info className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
              <p className="text-xs text-slate-600 leading-relaxed">
                Every smile is unique. We provide complimentary 3D simulations during your initial
                consultation so you can preview your custom outcome before treatment begins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
