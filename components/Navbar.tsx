'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useClinic } from '@/lib/clinic-context';
import { Phone, Calendar, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking?: () => void;
}

export function Navbar({ onOpenBooking }: NavbarProps = {}) {
  const { clinic } = useClinic();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Exactly 4 primary navigation links as required
  const navLinks = [
    { label: 'Services', href: '/services' },
    { label: 'About Us', href: '/about' },
    { label: 'Dental Tips', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 shadow-sm border-b border-slate-200/80 glass-nav py-3'
          : 'bg-white/85 border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 md:gap-8">
          {/* Zone 1: Single element Brand Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-slate-900 font-semibold text-lg sm:text-xl tracking-tight whitespace-nowrap shrink-0 transition-opacity hover:opacity-90"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-600 text-white shadow-sm shadow-teal-600/30">
              <Sparkles className="w-4 h-4 text-teal-100" />
            </span>
            <span>{clinic.name}</span>
          </Link>

          {/* Zone 2: Exactly 4 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`hover:text-teal-600 transition-colors whitespace-nowrap shrink-0 relative py-1 ${
                    isActive
                      ? 'text-teal-600 font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-teal-600'
                      : 'after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-teal-600 after:transition-all hover:after:w-full'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Actions (Direct Call & Book Appointment) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Quick phone link */}
            <a
              href={`tel:${clinic.phoneRaw}`}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-teal-600 transition-colors whitespace-nowrap"
              title="Call our clinic"
            >
              <Phone className="w-3.5 h-3.5 text-teal-600" />
              <span>{clinic.phone}</span>
            </a>

            {/* Primary Action Button -> /booking or smooth scroll on home */}
            {onOpenBooking && pathname === '/' ? (
              <button
                type="button"
                onClick={onOpenBooking}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 active:bg-teal-800 rounded-xl shadow-sm shadow-teal-600/20 transition-all hover:shadow-md whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            ) : (
              <Link
                href="/booking"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 active:bg-teal-800 rounded-xl shadow-sm shadow-teal-600/20 transition-all hover:shadow-md whitespace-nowrap shrink-0"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </Link>
            )}

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-white border-b border-slate-200 shadow-xl transition-all">
          <div className="flex flex-col space-y-2 pt-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                pathname === '/' ? 'text-teal-600 bg-teal-50 font-bold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                  pathname === link.href ? 'text-teal-600 bg-teal-50 font-bold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={`tel:${clinic.phoneRaw}`}
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 rounded-xl"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                <span>Call {clinic.phone}</span>
              </a>
              <Link
                href="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-xl shadow-sm text-center"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Online</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
