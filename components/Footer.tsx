'use client';

import React from 'react';
import { useClinic } from '@/lib/clinic-context';
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Heart,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  AlertTriangle,
} from 'lucide-react';

export function Footer() {
  const { clinic } = useClinic();

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Emergency Contact Banner */}
        <div className="bg-gradient-to-r from-teal-950/80 via-slate-800 to-amber-950/40 rounded-3xl p-6 sm:p-8 border border-teal-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-white font-bold text-base sm:text-lg">
                Experiencing a Dental Emergency or Severe Pain?
              </p>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                We reserve daily emergency slots for urgent toothaches, broken restorations, or trauma.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${clinic.emergencyPhone}`}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-md transition-all whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span>Emergency Line: {clinic.emergencyPhone}</span>
            </a>
          </div>
        </div>

        {/* Main 4-Column Footer Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pt-4">
          {/* Brand & Mission (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 text-white font-bold text-xl tracking-tight">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-500 text-white shadow-sm">
                <Sparkles className="w-4 h-4 text-teal-100" />
              </span>
              <span>{clinic.name}</span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Modern dental wellness in a calm, soothing sanctuary. We believe healthcare should be
              gentle, completely transparent, and deeply personal.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-teal-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-teal-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-teal-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-teal-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => handleScroll('#services')}
                  className="hover:text-teal-400 transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#why-us')}
                  className="hover:text-teal-400 transition-colors"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#transformations')}
                  className="hover:text-teal-400 transition-colors"
                >
                  Before & After
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#team')}
                  className="hover:text-teal-400 transition-colors"
                >
                  Meet Our Doctors
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#reviews')}
                  className="hover:text-teal-400 transition-colors"
                >
                  Patient Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#faq')}
                  className="hover:text-teal-400 transition-colors"
                >
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Dental Treatments */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Treatments</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => handleScroll('#services')}
                  className="hover:text-teal-400 transition-colors"
                >
                  Routine Checkups & Scans
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#services')}
                  className="hover:text-teal-400 transition-colors"
                >
                  Laser Teeth Whitening
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#services')}
                  className="hover:text-teal-400 transition-colors"
                >
                  3D Guided Dental Implants
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#services')}
                  className="hover:text-teal-400 transition-colors"
                >
                  Clear Aligner Systems
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#services')}
                  className="hover:text-teal-400 transition-colors"
                >
                  Gentle Root Canal Therapy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('#services')}
                  className="hover:text-teal-400 transition-colors"
                >
                  Pediatric Child Dentistry
                </button>
              </li>
            </ul>
          </div>

          {/* Studio Contact */}
          <div className="space-y-3 text-sm text-slate-400">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Studio Info</h4>
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
              <span>
                {clinic.address}, {clinic.suite}
                <br />
                {clinic.city}, {clinic.state} {clinic.zip}
              </span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-teal-400 shrink-0" />
              <a href={`tel:${clinic.phoneRaw}`} className="hover:text-white transition-colors">
                {clinic.phone}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-teal-400 shrink-0" />
              <a href={`mailto:${clinic.email}`} className="hover:text-white transition-colors">
                {clinic.email}
              </a>
            </p>
            <p className="flex items-start gap-2 text-xs">
              <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
              <span>Mon-Fri: 8:30am - 7:30pm | Sat: 9am - 5pm</span>
            </p>
          </div>
        </div>

        {/* Legal, Accreditations & Copyright */}
        <div className="pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {clinic.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>IDA Accredited</span>
            <span>·</span>
            <span>ISO 9001 Certified Sterilization</span>
            <span>·</span>
            <span>Privacy Policy</span>
            <span>·</span>
            <span>Terms of Care</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
