<div className="relative z-20 mt-44 lg:-mt-10 lg:mr-16 bg-[#0D1B2A] text-white shadow-[0_24px_60px_-15px_rgba(13,27,42,0.3)] border border-[#0D1B2A]">
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