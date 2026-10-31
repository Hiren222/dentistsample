'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BLOG_POSTS, BlogPost } from '@/lib/clinic-data';
import { useClinic } from '@/lib/clinic-context';
import {
  BookOpen,
  Clock,
  Sparkles,
  CheckCircle2,
  Search,
  ArrowRight,
  X,
  MessageCircle,
  HelpCircle,
  Calendar,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MobileFloatingCta } from '@/components/MobileFloatingCta';

export default function BlogPage() {
  const { clinic } = useClinic();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const categories = ['All', 'Whitening Tips', 'Everyday Care', 'Emergency & Pain', 'Kids Dental', 'Aligners'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.problemSolved.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.shortSummary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9] text-slate-800">
      <Navbar />

      <main className="flex-grow pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-teal-600 uppercase mb-2 block">
              Everyday Oral Wellness
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
              Dental tips & hacks in plain, simple English
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
              Practical advice for real everyday problems—from tea stains and bleeding gums to kids
              who hate brushing. No lecturing, just easy tips that work.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="max-w-4xl mx-auto mb-12 space-y-4">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search tips (e.g. chai stains, wisdom tooth, bleeding gums, aligners)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 text-sm rounded-2xl border border-slate-200 bg-white shadow-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-semibold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                    selectedCategory === cat
                      ? 'bg-teal-600 text-white shadow-xs'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    {/* Category & Read Time */}
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                      <span className="font-semibold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-md">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5 leading-snug hover:text-teal-600 transition-colors">
                      {post.title}
                    </h2>

                    {/* Real Problem Addressed */}
                    <p className="text-xs font-medium text-amber-900 bg-amber-50/80 border border-amber-200/60 p-2.5 rounded-xl mb-3">
                      <strong>Fixes:</strong> {post.problemSolved}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {post.shortSummary}
                    </p>

                    {/* Quick Checklist (To avoid boring paragraphs!) */}
                    <div className="pt-3 border-t border-slate-100 mb-6">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Quick Takeaways:
                      </p>
                      <ul className="space-y-1.5">
                        {post.quickChecklist.slice(0, 3).map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setActivePost(post)}
                      className="text-xs font-bold text-teal-700 hover:text-teal-800 inline-flex items-center gap-1 group"
                    >
                      <span>Read Complete Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                    <span className="text-[11px] text-slate-400 font-medium">By {clinic.name}</span>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
              <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-base font-bold text-slate-900">No guides matching your search</p>
              <p className="text-xs text-slate-500 mt-1">
                Try searching for &quot;stains&quot;, &quot;aligners&quot;, or &quot;gums&quot;, or reset your filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-4 px-4 py-2 bg-slate-100 text-slate-700 text-xs font-semibold rounded-xl hover:bg-slate-200 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Have a personal tooth concern banner */}
          <div className="mt-16 bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Have a specific question about your teeth?
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Send a quick message to our care coordinator on WhatsApp for friendly advice.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`https://wa.me/${clinic.whatsappRaw}?text=Hi,%20I%20have%20a%20question%20regarding%20my%20teeth.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 px-5 py-3 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Visit</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Full Post Reader Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
              <span className="font-semibold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-md">
                {activePost.category}
              </span>
              <span>·</span>
              <span>{activePost.readTime}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 leading-snug">
              {activePost.title}
            </h2>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 mb-6">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-1">
                Everyday Problem:
              </p>
              <p className="text-sm text-amber-950 font-medium">
                {activePost.problemSolved}
              </p>
            </div>

            {/* Quick Action Checklist */}
            <div className="p-5 bg-teal-50/60 rounded-2xl border border-teal-100 mb-6">
              <p className="text-xs font-bold uppercase tracking-wider text-teal-900 mb-3">
                Key Action Takeaways:
              </p>
              <ul className="space-y-2">
                {activePost.quickChecklist.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Content in simple everyday English */}
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed mb-8">
              {activePost.content.map((para, pIdx) => (
                <p key={pIdx}>{para}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500">
                Need professional help with this? Our Indiranagar team is here.
              </p>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Link
                  href="/booking"
                  className="flex-1 sm:flex-none text-center px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
                >
                  Book a Consultation
                </Link>
                <button
                  onClick={() => setActivePost(null)}
                  className="px-4 py-2.5 bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-semibold rounded-xl transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <MobileFloatingCta />
    </div>
  );
}
