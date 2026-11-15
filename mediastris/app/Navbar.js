'use client';

import React from 'react';
import Link from 'next/link';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const serif = cormorant.className;
const sans = jakarta.className;

/* Refined champagne gold focus ring */
const focus =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B8924A]';

export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-6 flex justify-center pointer-events-none">
      <nav
        aria-label="Main Navigation"
        className={`${sans} pointer-events-auto w-full max-w-6xl bg-[#FAF8F4]/95 backdrop-blur-md text-white py-3.5 px-6 sm:px-8 rounded-full border border-white/10 shadow-[0_16px_40px_-10px_rgba(13,27,42,0.35)] flex items-center justify-between gap-6 transition-all duration-300`}
      >
        {/* Brand Logo / Title */}
        <Link href="/" className={`flex items-center gap-2.5 group ${focus}`}>
          <img src="/comp-logo-new.png" className='h-20 w-36' alt="" />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#0D1B2A]">
          <Link
            href="#services"
            className={`hover:text-[#D4AF6A] transition-colors tracking-wide ${focus}`}
          >
            Hospital Services
          </Link>
          <Link
            href="#patients"
            className={`hover:text-[#D4AF6A] transition-colors tracking-wide ${focus}`}
          >
            Patient Support
          </Link>
          <Link
            href="#how-it-works"
            className={`hover:text-[#D4AF6A] transition-colors tracking-wide ${focus}`}
          >
            How It Works
          </Link>
          <Link
            href="#success-stories"
            className={`hover:text-[#D4AF6A] transition-colors tracking-wide ${focus}`}
          >
            Success Stories
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center">
          <Link
            href="/contact"
            className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#0D1B2A] bg-[#B8924A] hover:bg-[#C9A35B] rounded-full shadow-sm transition-all duration-300 ${focus}`}
          >
            Get in Touch
          </Link>
         
        </div>
      </nav>
    </header>
  );
}