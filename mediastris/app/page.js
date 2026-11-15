'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import {
  ShieldCheck,
  Building2,
  UserCheck,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const serif = cormorant.className;
const sans = jakarta.className;

/* Shared focus ring matching the refined champagne gold accent */
const focus =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B8924A]';

const facts = [
  ['Working with hospitals since', '2010'],
  ['Hospitals supported', '150+'],
  ['Incorporated as Mediastris Healthcare LLP', 'February 2026'],
  ['Where we work', 'Mumbai, Palghar, Dahanu, Surat, Bhopal, Indore'],
];

const services = [
  {
    title: 'Hospital empanelment',
    text: 'Applications for GIC, CGHS, ESIC/ESIS and PMJAY, from first form to approval.',
    href: '/services/onboarding',
  },
  {
    title: 'Insurance desk',
    text: 'Pre-authorizations, TPA coordination and every claim from admission to discharge.',
    href: '/services/insurance',
  },
  {
    title: 'Claim rejection management',
    text: 'We read the denial, build the appeal and chase it until it is settled.',
    href: '/services/claims',
  },
  {
    title: 'Hospital operations',
    text: 'Patient flow, HR systems, facility management and regulatory registrations.',
    href: '/services/operations',
  },
  {
    title: 'Quality and NABH',
    text: 'Gap analysis, SOPs, staff training and audit preparation.',
    href: '/services/quality',
  },
  {
    title: 'Home healthcare',
    text: 'Set up or grow a home care program, with protocols, caregiver training and billing.',
    href: '/services/home-healthcare',
  },
  {
    title: 'Legal and medico-legal',
    text: 'Contracts, consent norms, compliance, and representation in consumer and regulatory cases.',
    href: '/services/legal',
  },
];

const steps = [
  {
    title: 'Find out why it was rejected',
    text: 'A missing signature, a billing code mismatch or a medical necessity dispute. We name the exact reason.',
  },
  {
    title: 'Build the appeal',
    text: 'We work with your medical team to collect the clinical notes and records the insurer needs to see.',
  },
  {
    title: 'Follow up until it moves',
    text: 'The phone calls, portal checks and email chains are ours to handle.',
  },
  {
    title: 'Get the covered amount paid',
    text: 'So the hospital and the patient are not left paying for something the policy covers.',
  },
];

const schemes = [
  ['GIC network', 'General Insurance Council'],
  ['CGHS', 'Central Government Health Scheme'],
  ['ESIC / ESIS', 'Employees’ State Insurance'],
  ['PMJAY', 'Pradhan Mantri Jan Arogya Yojana'],
];

const leaders = [
  {
    name: 'Dr. C. M. Yadav',
    role: 'Co-Founder and CEO',
    text: 'Clinical background with years in health insurance and claim assessment. Knows what a claim needs to be paid.',
  },
  {
    name: 'Muskan Khan',
    role: 'Founder and Legal Advisor',
    text: 'Started in journalism, moved into hospital administration and insurance, then qualified in law (LL.B., LL.M.).',
  },
  {
    name: 'Sophie Paul',
    role: 'Head of Quality Management',
    text: 'Over 10 years in hospital quality and administration. Certified in NABH 5th Edition and Entry Level standards.',
  },
];

/* Subtle viewport reveal wrapper — restrained, editorial motion */
function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className={`${sans} w-screen bg-[#FAF8F4] text-[#0D1B2A] antialiased selection:bg-[#B8924A]/20 selection:text-[#0D1B2A]`}>
      {/* =====================================================================
          HERO SECTION — Asymmetric Editorial Composition + Architectural Framing
         ===================================================================== */}
      <section className="relative overflow-hidden bg-[#FAF8F4] border-b border-[#0D1B2A]/12">
        {/* Subtle vertical editorial grid lines */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-12"
        >
          <div className="col-span-4 border-l border-[#0D1B2A]/[0.04]" />
          <div className="col-span-4 border-l border-[#0D1B2A]/[0.04]" />
          <div className="col-span-4 border-l border-r border-[#0D1B2A]/[0.04]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-20 lg:pt-24 lg:pb-28">
          
          {/* Asymmetric Editorial Top Grid */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Left Column: Oversized Editorial Headline & Thesis */}
            <div className="lg:col-span-7 lg:pr-6 z-10">
              <div className="w-12 h-[2px] bg-[#B8924A] mb-8" />

              <h1
                className={`${serif} text-4xl sm:text-6xl lg:text-[4.25rem] font-semibold text-[#0D1B2A] tracking-[-0.02em] leading-[1.05]`}
              >
                Comprehensive Healthcare Solutions. Seamless Hospital Operations
              </h1>

              <p className="mt-7 text-lg sm:text-xl text-[#4A5568] max-w-xl leading-relaxed font-normal">
                A denied claim isn't a final verdict—it is just the beginning of the negotiation. Let us do the talking.
              </p>
            </div>

            {/* Right Column: Asymmetric Framed Photography with Overlapping Architectural Accent */}
            <div className="lg:col-span-5 relative">
              {/* Offset Champagne Brass Frame */}
              <div
                aria-hidden="true"
                className="hidden sm:block absolute -top-4 -right-4 w-full h-full border border-[#B8924A]/60 pointer-events-none"
              />

              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#0D1B2A] shadow-2xl">
                <img
                  src="/office.jpg"
                  alt=""
                  className="w-full h-full object-cover object-center scale-[1.01] hover:scale-105 transition-transform duration-1000 ease-out"
                />
                {/* Subtle bottom dark vignette for depth */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/55 via-[#0D1B2A]/10 to-transparent"
                />
              </div>

              {/* Overlapping Midnight Navy Editorial Corner Accent */}
              
            </div>
          </div>

          {/* Integrated Dual-Track Audience Pathways — Structured Architectural Split */}
          <div className="relative top-20 z-20 mt-14 lg:-mt-10 lg:mr-16 bg-[#0D1B2A] text-white shadow-[0_24px_60px_-15px_rgba(13,27,42,0.3)] border border-[#0D1B2A]">
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/15">
              {/* Pathway 1: Hospitals & Clinics */}
              <div className="group p-8 sm:p-10 lg:p-11 flex flex-col justify-between transition-colors duration-300 hover:bg-[#13263A]">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF6A]">
                      For Providers
                    </span>
                    <Building2 className="w-5 h-5 text-[#D4AF6A] stroke-[1.5]" />
                  </div>
                  <h3 className={`${serif} text-2xl sm:text-3xl font-semibold text-white`}>
                    Hospitals & Clinics
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3 mb-8 max-w-md">
                    Minimize claim denials, expedite pre-authorizations, and boost revenue cycle management efficiency.
                  </p>
                </div>

                <div>
                  <button
                    type="button"
                    className={`w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-4 bg-[#B8924A] hover:bg-[#C9A35B] text-[#0D1B2A] font-semibold py-3.5 px-6 text-sm tracking-wide transition-all duration-300 ${focus}`}
                  >
                    <span>Hospital Solutions</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Pathway 2: Patients & Families */}
              <div className="group p-8 sm:p-10 lg:p-11 flex flex-col justify-between transition-colors duration-300 hover:bg-[#13263A]">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF6A]">
                      For Individuals
                    </span>
                    <UserCheck className="w-5 h-5 text-[#D4AF6A] stroke-[1.5]" />
                  </div>
                  <h3 className={`${serif} text-2xl sm:text-3xl font-semibold text-white`}>
                    Patients & Families
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3 mb-8 max-w-md">
                    Struggling with rejected insurance claims or confusing paperwork? Let our experts handle your appeal.
                  </p>
                </div>

                <div>
                  <button
                    type="button"
                    className={`w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-4 bg-transparent hover:bg-white text-white hover:text-[#0D1B2A] border border-white/40 hover:border-white font-semibold py-3.5 px-6 text-sm tracking-wide transition-all duration-300 ${focus}`}
                  >
                    <span>Get Patient Assistance</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          OUR MISSION — Editorial Manifesto with Oversized Serif & Whitespace
         ===================================================================== */}
      <section className="py-24 sm:py-32 lg:py-36 px-6 lg:px-12 bg-[#FAF8F4]">
        <Reveal className="max-w-6xl mx-auto">
          <div className="mt-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-3 pt-2">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#B8924A]" />
                <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0D1B2A]">
                  Our Mission
                </h2>
              </div>
            </div>

            <div className="lg:col-span-9 relative">
              <span
                aria-hidden="true"
                className={`${serif} block text-6xl sm:text-7xl leading-none text-[#B8924A]/45 select-none mb-2`}
              >
                &ldquo;
              </span>
              <blockquote
                className={`${serif} text-2xl sm:text-4xl lg:text-[2.75rem] font-normal text-[#0D1B2A] leading-[1.28] tracking-[-0.01em]`}
              >
                "To empower the healthcare ecosystem by bridging the gap between clinical excellence and operational efficiency through transparent processes and patient-centric solutions."
              </blockquote>
              <div className="mt-10 w-full h-[1px] bg-gradient-to-r from-[#0D1B2A]/25 via-[#B8924A]/40 to-transparent" />
            </div>
          </div>
        </Reveal>
      </section>

      {/* =====================================================================
          COMPANY FACTS — Institutional Credibility & Typographic Ledger
         ===================================================================== */}
      <section className="py-24 sm:py-32 px-6 lg:px-12 bg-[#F3EFE6] border-y border-[#0D1B2A]/10 text-[#0D1B2A]">
        <div className="max-w-7xl mx-auto">
          <Reveal className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-6 lg:sticky lg:top-28">
              <div className="w-10 h-[2px] bg-[#B8924A] mb-6" />
              <h2
                className={`${serif} text-3xl sm:text-4xl lg:text-[2.85rem] font-semibold leading-[1.15] text-[#0D1B2A]`}
              >
                We have spent sixteen years inside hospital insurance desks, claim files and accreditation audits. More than 150 hospitals rely on that experience.
              </h2>
            </div>

            <dl className="lg:col-span-6 border-t border-[#0D1B2A]/20">
              {facts.map(([label, value], idx) => (
                <div
                  key={label}
                  className="py-7 sm:py-8 border-b border-[#0D1B2A]/20 grid sm:grid-cols-12 gap-3 sm:gap-6 items-baseline group"
                >
                  <dt className="sm:col-span-5 text-xs sm:text-sm uppercase tracking-[0.12em] text-[#526071] font-medium">
                    {label}
                  </dt>
                  <dd
                    className={`${serif} sm:col-span-7 text-2xl sm:text-3xl font-semibold text-[#0D1B2A] leading-tight transition-colors duration-300 group-hover:text-[#8E6B29]`}
                  >
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* =====================================================================
          SERVICES — Advisory Practice Index (Editorial Consulting Layout)
         ===================================================================== */}
      <section className="py-24 sm:py-32 px-6 lg:px-12 bg-[#FAF8F4] text-[#0D1B2A]">
        <div className="max-w-7xl mx-auto">
          <Reveal className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <div className="w-10 h-[2px] bg-[#B8924A] mb-6" />
                <h2
                  className={`${serif} text-3xl sm:text-4xl lg:text-[2.85rem] font-semibold leading-[1.12] text-[#0D1B2A]`}
                >
                  What we take off your desk
                </h2>
                <p className="mt-5 text-[#4A5568] text-base leading-relaxed max-w-sm">
                  Hand us one part of the work or several. Each service has its own page with the details.
                </p>
              </div>
            </div>

            <ul className="lg:col-span-8 border-t border-[#0D1B2A]/20">
              {services.map((s, index) => (
                <li key={s.title} className="border-b border-[#0D1B2A]/20">
                  <Link
                    href={s.href}
                    className={`group relative grid sm:grid-cols-12 gap-4 sm:gap-6 py-7 sm:py-8 px-4 -mx-4 items-baseline transition-colors duration-300 hover:bg-[#F3EFE6] ${focus}`}
                  >
                    {/* Subtle left accent bar on hover */}
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#B8924A] scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100"
                    />

                    <span className="sm:col-span-1 text-xs font-semibold tracking-[0.18em] text-[#B8924A]">
                      0{index + 1}
                    </span>

                    <span
                      className={`${serif} sm:col-span-5 text-2xl sm:text-[1.65rem] font-semibold text-[#0D1B2A] leading-snug transition-transform duration-300 group-hover:translate-x-1`}
                    >
                      {s.title}
                    </span>

                    <span className="sm:col-span-5 text-sm sm:text-base text-[#4A5568] leading-relaxed">
                      {s.text}
                    </span>

                    <span className="sm:col-span-1 flex sm:justify-end items-center text-[#0D1B2A]/40 group-hover:text-[#0D1B2A] transition-colors">
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* =====================================================================
          HOW IT WORKS — Connected Claim Recovery Timeline + Documentary Artifact
         ===================================================================== */}
      <section className="py-24 sm:py-32 px-6 lg:px-12 bg-[#0D1B2A] text-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="max-w-2xl">
              <div className="w-10 h-[2px] bg-[#B8924A] mb-6" />
              <h2 className={`${serif} text-3xl sm:text-5xl font-semibold text-white leading-tight`}>
                How it Works
              </h2>
              <p className="mt-4 text-lg text-slate-300 leading-relaxed">
                What happens after a claim is rejected. It is rarely the end of the road.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 lg:mt-20 grid lg:grid-cols-12 gap-14 lg:gap-16 items-start">
            {/* Left Column: Documentary Rejection Notice Artifact */}
            <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="relative bg-[#FAF8F4] text-[#0D1B2A] p-7 sm:p-9 border border-[#B8924A]/40 shadow-[12px_12px_0_0_rgba(184,146,74,0.22)]">
                {/* Top documentary header bar */}
                <div className="flex items-center justify-between pb-4 border-b border-[#0D1B2A]/15">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#526071]">
                    Sample rejection notice
                  </p>
                  <span className="w-2 h-2 rounded-full bg-[#B8924A]" />
                </div>

                <dl className="mt-5 text-sm divide-y divide-[#0D1B2A]/12">
                  <div className="py-3.5 flex justify-between gap-4">
                    <dt className="text-[#526071] font-medium">Claim no.</dt>
                    <dd className="font-semibold tracking-wider text-[#0D1B2A]">XXXX-0412</dd>
                  </div>
                  <div className="py-3.5 flex justify-between gap-4">
                    <dt className="text-[#526071] font-medium">Reason</dt>
                    <dd className="font-semibold text-right text-[#0D1B2A]">
                      Discharge summary not signed
                    </dd>
                  </div>
                  <div className="py-3.5 flex justify-between gap-4">
                    <dt className="text-[#526071] font-medium">Action needed</dt>
                    <dd className="font-semibold text-right text-[#0D1B2A]">
                      Resubmit with signed summary
                    </dd>
                  </div>
                </dl>

                <div className="mt-10 pt-2 flex justify-end">
                  <span
                    className={`${serif} -rotate-6 border-[3px] border-[#991B1B] text-[#991B1B] px-5 py-1 text-2xl font-bold tracking-[0.22em] select-none`}
                  >
                    REJECTED
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Right Column: Connected Four-Step Process Timeline */}
            <div className="lg:col-span-7">
              <ol className="relative border-l border-[#B8924A]/45 ml-3 sm:ml-4 pl-8 sm:pl-12 space-y-12">
                {steps.map((s, idx) => (
                  <li key={s.title} className="relative group">
                    <Reveal delay={idx * 90}>
                      {/* Step Node */}
                      <span className="absolute -left-[45px] sm:-left-[61px] top-1 flex items-center justify-center w-6 h-6 bg-[#0D1B2A] border border-[#B8924A] text-[11px] font-semibold text-[#D4AF6A] transition-colors duration-300 group-hover:bg-[#B8924A] group-hover:text-[#0D1B2A]">
                        {idx + 1}
                      </span>

                      <h3
                        className={`${serif} text-2xl sm:text-[1.75rem] font-semibold text-white leading-snug`}
                      >
                        {s.title}
                      </h3>
                      <p className="mt-2.5 text-slate-300 text-base leading-relaxed max-w-xl">
                        {s.text}
                      </p>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          EMPANELMENT — Structured Architectural Matrix of Healthcare Schemes
         ===================================================================== */}
      <section className="py-24 sm:py-32 px-6 lg:px-12 bg-[#FAF8F4] text-[#0D1B2A]">
        <div className="max-w-7xl mx-auto">
          <Reveal className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <div className="w-10 h-[2px] bg-[#B8924A] mb-6" />
              <h2
                className={`${serif} text-3xl sm:text-4xl lg:text-[2.85rem] font-semibold leading-[1.14] text-[#0D1B2A]`}
              >
                Patients look for one sign before choosing a hospital: cashless facility available.
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-[#4A5568] text-base leading-relaxed">
                Getting empanelled means forms, registry codes and long waits. We run the application so your administrative team does not have to keep chasing its status.
              </p>
              <Link
                href="/services/onboarding"
                className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#0D1B2A] border-b-2 border-[#B8924A] pb-1 hover:text-[#8E6B29] transition-colors ${focus}`}
              >
                <span>How onboarding works</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <dl className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#0D1B2A]/20">
              {schemes.map(([name, full], idx) => (
                <div
                  key={name}
                  className="group p-8 sm:p-9 border-r border-b border-[#0D1B2A]/20 bg-[#FAF8F4] hover:bg-[#F3EFE6] transition-colors duration-300 flex flex-col justify-between min-h-[190px]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.2em] text-[#B8924A]">
                      0{idx + 1}
                    </span>
                    <span className="w-6 h-[1px] bg-[#0D1B2A]/20 group-hover:w-10 group-hover:bg-[#B8924A] transition-all duration-300" />
                  </div>

                  <div className="mt-8">
                    <dt className={`${serif} text-2xl sm:text-3xl font-semibold text-[#0D1B2A]`}>
                      {name}
                    </dt>
                    <dd className="mt-2 text-sm text-[#4A5568] leading-snug">{full}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* =====================================================================
          LEADERSHIP — Partner Profiles (Typographic Hierarchy, No Stock Faces)
         ===================================================================== */}
      <section className="py-24 sm:py-32 px-6 lg:px-12 bg-[#F3EFE6] border-t border-[#0D1B2A]/12 text-[#0D1B2A]">
        <div className="max-w-7xl mx-auto">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#0D1B2A]/15">
            <div>
              <div className="w-10 h-[2px] bg-[#B8924A] mb-6" />
              <h2
                className={`${serif} text-3xl sm:text-4xl lg:text-[2.85rem] font-semibold text-[#0D1B2A] leading-tight`}
              >
                Who you will be working with
              </h2>
            </div>

            <Link
              href="/about"
              className={`inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#0D1B2A] border-b-2 border-[#B8924A] pb-1 hover:text-[#8E6B29] transition-colors self-start md:self-auto ${focus}`}
            >
              <span>About the company and team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-3 gap-10 lg:gap-12">
            {leaders.map((p, idx) => (
              <Reveal key={p.name} delay={idx * 100}>
                <article className="h-full flex flex-col justify-between pt-6 border-t-2 border-[#0D1B2A]">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8E6B29]">
                      {p.role}
                    </p>
                    <h3 className={`${serif} text-2xl sm:text-3xl font-semibold text-[#0D1B2A] mt-2`}>
                      {p.name}
                    </h3>
                    <div className="w-8 h-[1px] bg-[#0D1B2A]/20 my-5" />
                    <p className="text-[#4A5568] text-base leading-relaxed">{p.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          CONTACT CTA — High-Contrast Architectural Closing Banner
         ===================================================================== */}
      <section className="relative py-24 sm:py-28 px-6 lg:px-12 bg-[#0D1B2A] text-white overflow-hidden">
        {/* Subtle geometric corner line */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 w-1/3 h-full border-l border-white/[0.06]"
        />

        <Reveal className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="w-12 h-[2px] bg-[#B8924A] mb-7" />
            <h2
              className={`${serif} text-3xl sm:text-5xl font-semibold leading-[1.12] text-white`}
            >
              Have a rejected claim or a hospital to onboard? Tell us which.
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center lg:items-start xl:items-center gap-6 lg:justify-end">
            <Link
              href="/contact"
              className={`inline-flex items-center gap-3 bg-[#B8924A] hover:bg-[#C9A35B] text-[#0D1B2A] font-semibold px-8 py-4 text-sm tracking-wide transition-colors duration-300 ${focus}`}
            >
              <span>Contact our team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/patients"
              className={`text-sm font-medium text-white underline underline-offset-8 decoration-1 decoration-[#B8924A] hover:text-[#D4AF6A] transition-colors py-2 ${focus}`}
            >
              I am a patient
            </Link>
          </div>
        </Reveal>
      </section>

      {/* =====================================================================
          FOOTER — Refined Editorial Colophon
         ===================================================================== */}
      <footer className="bg-[#08111B] text-slate-400 pt-16 pb-12 px-6 lg:px-12 border-t border-white/10 text-sm">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          <div className="md:col-span-5 pr-4">
            <div className="flex items-center gap-2.5 text-white font-semibold text-xl mb-4">
              <ShieldCheck className="w-5 h-5 text-[#B8924A]" />
              <span className={`${serif} text-2xl tracking-tight`}>MediAstris</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Providing end-to-end medical pre-authorizations, claim filing, and reimbursement recovery for health institutions and individual insured clients.
            </p>
          </div>

          <div className="md:col-span-2">
            <h5 className="text-xs uppercase tracking-[0.18em] text-[#D4AF6A] font-semibold mb-4">
              Services
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>Hospital Revenue Cycle</li>
              <li>Pre-Authorization Desk</li>
              <li>Claim Denial Appeals</li>
              <li>Patient Reimbursement</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h5 className="text-xs uppercase tracking-[0.18em] text-[#D4AF6A] font-semibold mb-4">
              Company
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>About Us</li>
              <li>Partner Hospitals</li>
              <li>Privacy Policy</li>
              <li>HIPAA Compliance</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h5 className="text-xs uppercase tracking-[0.18em] text-[#D4AF6A] font-semibold mb-4">
              Support
            </h5>
            <p className="text-xs text-slate-300">Email: xyz@abc.com</p>
            <p className="text-xs text-slate-300 mt-2">Helpdesk: 123456789</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} MediAstris Inc. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}