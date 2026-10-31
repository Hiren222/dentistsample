'use client';

import React from 'react';
import { useClinic } from '@/lib/clinic-context';
import { Calendar, Phone, MessageCircle } from 'lucide-react';

interface MobileFloatingCtaProps {
  onOpenBooking: () => void;
}

export function MobileFloatingCta({ onOpenBooking }: MobileFloatingCtaProps) {
  const { clinic } = useClinic();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Quick Call */}
        <a
          href={`tel:${clinic.phoneRaw}`}
          className="flex flex-col items-center justify-center p-2 rounded-xl text-slate-700 hover:bg-slate-100 shrink-0 text-[10px] font-medium"
          aria-label="Call clinic"
        >
          <Phone className="w-4 h-4 text-teal-600" />
          <span>Call</span>
        </a>

        {/* Quick WhatsApp */}
        <a
          href={`https://wa.me/${clinic.whatsappRaw}?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-2 rounded-xl text-slate-700 hover:bg-slate-100 shrink-0 text-[10px] font-medium"
          aria-label="WhatsApp clinic"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600" />
          <span>WhatsApp</span>
        </a>

        {/* Primary Book Now CTA */}
        <button
          onClick={onOpenBooking}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-bold text-sm rounded-xl shadow-md shadow-teal-600/30 whitespace-nowrap"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Appointment</span>
        </button>
      </div>
    </div>
  );
}
