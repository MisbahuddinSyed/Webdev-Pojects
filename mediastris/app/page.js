import React from 'react';
import {
  ShieldCheck,
  Building2,
  UserCheck,
  CheckCircle2,
  Clock,
  FileText,
  TrendingUp,
  PhoneCall,
  ArrowRight,
  Sparkles,
  Lock,
} from 'lucide-react';

export default function HomePage() {
  return (


    <>

      <section className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat text-white ">
        <img className='w-full h-full object-cover opacity-20' src="/office.jpg" alt="" />
        <div className="absolute inset-0 bg-blue-900/50"></div>

        <div className="absolute top-60 left-[25%] max-w-6xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium border border-blue-500/20">
            <Sparkles className="w-4 h-4" /> End-to-End Health Insurance Management
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
            Seamless Insurance Pre-Approvals & Fast Claim Settlements
          </h1>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            We partner with hospitals to optimize pre-authorization workflows and guide patients through hassle-free claim approvals and appeal recoveries.
          </p>


          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto pt-8 text-left">
            <div className="bg-slate-800/90 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors shadow-lg">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">For Providers</span>
              <h3 className="text-2xl font-bold text-white mt-1">Hospitals & Clinics</h3>
              <p className="text-slate-400 text-sm mt-2 mb-6">
                Minimize claim denials, expedite pre-authorizations, and boost revenue cycle management efficiency.
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 px-4 rounded-xl text-sm flex items-center justify-center gap-2">
                Hospital Solutions <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-slate-800/90 p-8 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-colors shadow-lg">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-4">
                <UserCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">For Individuals</span>
              <h3 className="text-2xl font-bold text-white mt-1">Patients & Families</h3>
              <p className="text-slate-400 text-sm mt-2 mb-6">
                Struggling with rejected insurance claims or confusing paperwork? Let our experts handle your appeal.
              </p>
              <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2.5 px-4 rounded-xl text-sm flex items-center justify-center gap-2">
                Get Patient Assistance <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-white border-y border-slate-200 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-blue-600">98.5%</div>
            <div className="text-sm font-medium text-slate-600 mt-1">Pre-Approval Success</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-blue-600">$45M+</div>
            <div className="text-sm font-medium text-slate-600 mt-1">Claims Processed</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-blue-600">120+</div>
            <div className="text-sm font-medium text-slate-600 mt-1">Partner Hospitals</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-blue-600">&lt; 24 Hrs</div>
            <div className="text-sm font-medium text-slate-600 mt-1">Turnaround Time</div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Comprehensive Insurance Assistance
          </h2>
          <p className="text-slate-600 mt-4 text-lg">
            We bridging communication gaps between medical providers, patients, and third-party insurance administrators.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Pre-Authorization Desk</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Faster approval requests for planned surgeries and emergency admissions directly to insurance providers.
            </p>
            <ul className="space-y-2 pt-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> 24/7 Desk Support
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Query Verification
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Claim Denial Management</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We audit rejected claims, identify billing errors, gather necessary medical documentation, and file strong appeals.
            </p>
            <ul className="space-y-2 pt-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Document Re-Audit
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Legal & TPA Coordination
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Patient Reimbursement</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Step-by-step guidance for individuals navigating out-of-pocket medical bill claims with private insurers.
            </p>
            <ul className="space-y-2 pt-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Policy Coverage Check
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Claim Form Filing
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900">How We Streamline The Process</h2>
            <p className="text-slate-600 mt-3">From submission to final disbursement in 3 simple steps.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center space-y-3">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mx-auto">1</div>
              <h4 className="font-bold text-lg text-slate-900">Document Audit</h4>
              <p className="text-slate-600 text-sm">We collect discharge summaries, bills, and pre-authorization notes for verification.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center space-y-3">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mx-auto">2</div>
              <h4 className="font-bold text-lg text-slate-900">Insurance Submission</h4>
              <p className="text-slate-600 text-sm">Our medical coding team submits structured files directly to the insurer/TPA.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center space-y-3">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mx-auto">3</div>
              <h4 className="font-bold text-lg text-slate-900">Approval & Payout</h4>
              <p className="text-slate-600 text-sm">We track settlement timelines to ensure full authorization approval without delay.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="bg-blue-600 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
          <div className="inline-flex items-center gap-2 bg-blue-500/30 px-4 py-1.5 rounded-full text-xs font-semibold">
            <Lock className="w-3.5 h-3.5" /> HIPAA Compliant & Secure
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold">Ready to Expedite Your Medical Claims?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-base">
            Whether you are a hospital administrator looking to reduce denial rates or a patient struggling with an unpaid claim, our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="w-full sm:w-auto bg-white text-blue-600 font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-md">
              Schedule Free Consultation
            </button>
            <button className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white font-medium px-8 py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2">
              <PhoneCall className="w-4 h-4" /> Call Helpline
            </button>
          </div>
        </div>
      </section>


      <footer className="bg-slate-900 text-slate-400 py-12 px-6 border-t border-slate-800 text-sm">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-lg mb-3">
              <ShieldCheck className="w-5 h-5 text-blue-500" /> MediClaim Pro
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Providing end-to-end medical pre-authorizations, claim filing, and reimbursement recovery for health institutions and individual insured clients.
            </p>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-3">Services</h5>
            <ul className="space-y-2 text-xs">
              <li>Hospital Revenue Cycle</li>
              <li>Pre-Authorization Desk</li>
              <li>Claim Denial Appeals</li>
              <li>Patient Reimbursement</li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-3">Company</h5>
            <ul className="space-y-2 text-xs">
              <li>About Us</li>
              <li>Partner Hospitals</li>
              <li>Privacy Policy</li>
              <li>HIPAA Compliance</li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-3">Support</h5>
            <p className="text-xs">Email: support@mediclaimpro.com</p>
            <p className="text-xs mt-1">Helpdesk: 1-800-MED-CLAIM</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} MediClaim Pro Inc. All rights reserved.
        </div>
      </footer>
    </>

  );
}