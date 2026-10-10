'use client';

import React, { useState } from 'react';



export default function MembershipOptions({ onClose }) {
    const [billingCycle, setBillingCycle] = useState('annually');

    const tiers = [
        {
            id: 'basic',
            name: 'Basic',
            description: 'Essential features for individuals starting out.',
            monthlyPrice: 9,
            annualPrice: 7,
            features: [
                'Access to core content',
                'Standard community support',
                'Basic resources & templates',
                'Monthly newsletter',
            ],
            buttonText: 'Start Free Trial',
            popular: false,
        },
        {
            id: 'pro',
            name: 'Pro',
            description: 'Perfect for dedicated professionals and growing teams.',
            monthlyPrice: 29,
            annualPrice: 23,
            features: [
                'Everything in Basic',
                'Unlimited premium resources',
                'Priority 24/7 support',
                'Exclusive live Q&A sessions',
                'Private Slack community access',
            ],
            buttonText: 'Upgrade to Pro',
            popular: true,
        },
        {
            id: 'enterprise',
            name: 'Enterprise',
            description: 'Advanced features, dedicated support, and custom setups.',
            monthlyPrice: 79,
            annualPrice: 63,
            features: [
                'Everything in Pro',
                'Dedicated account manager',
                'Custom team workflows',
                '1-on-1 monthly coaching call',
                'Invoicing & custom billing',
            ],
            buttonText: 'Contact Sales',
            popular: false,
        },
    ];

    return (

        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 overflow-y-auto">
            <div className="w-full max-w-5xl rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-10 shadow-2xl text-slate-100 mx-auto">
                {/* Close ("X") Button */}

                <button
                    onClick={onClose}
                    type="button"
                    aria-label="Close"
                    className="absolute top-5 right-5 p-2.5 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>


                {/* Header */}
                <div className="text-center max-w-xl mx-auto mb-8">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
                        Upgrade Your Experience
                    </span>
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
                        Choose Your Membership
                    </h2>
                    <p className="mt-2 text-sm text-slate-400">
                        Get unlimited access to exclusive tools and community benefits. Cancel anytime.
                    </p>

                    {/* Monthly / Annual Toggle */}
                    <div className="mt-6 flex justify-center items-center">
                        <div className="relative flex items-center p-1 rounded-xl bg-slate-800/80 border border-slate-700">
                            <button
                                type="button"
                                onClick={() => setBillingCycle('monthly')}
                                className={`relative px-4 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 ${billingCycle === 'monthly'
                                    ? 'bg-indigo-600 text-white shadow-md'
                                    : 'text-slate-400 hover:text-slate-200'
                                    }`}
                            >
                                Monthly
                            </button>
                            <button
                                type="button"
                                onClick={() => setBillingCycle('annually')}
                                className={`relative flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 ${billingCycle === 'annually'
                                    ? 'bg-indigo-600 text-white shadow-md'
                                    : 'text-slate-400 hover:text-slate-200'
                                    }`}
                            >
                                <span>Annually</span>
                                <span className="px-1.5 py-0.5 text-[10px] font-extrabold bg-emerald-500 text-slate-950 rounded-full">
                                    SAVE 20%
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Pricing Options */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {tiers.map((tier) => {
                        const price = billingCycle === 'annually' ? tier.annualPrice : tier.monthlyPrice;

                        return (
                            <div
                                key={tier.id}
                                className={`relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 ${tier.popular
                                    ? 'bg-slate-800/90 border-2 border-indigo-500 shadow-xl shadow-indigo-500/10'
                                    : 'bg-slate-800/40 border border-slate-700/60 hover:border-slate-600'
                                    }`}
                            >
                                {tier.popular && (
                                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                                        Most Popular
                                    </span>
                                )}

                                <div>
                                    <div className="mb-3">
                                        <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                                        <p className="text-slate-400 text-xs mt-1 min-h-[32px]">{tier.description}</p>
                                    </div>

                                    <div className="flex items-baseline text-white my-4">
                                        <span className="text-4xl font-extrabold tracking-tight">${price}</span>
                                        <span className="text-slate-400 text-xs ml-1">/month</span>
                                        {billingCycle === 'annually' && (
                                            <span className="text-[10px] text-emerald-400 ml-2 font-medium">
                                                Billed yearly
                                            </span>
                                        )}
                                    </div>

                                    <hr className="border-slate-700/60 mb-4" />

                                    <ul className="space-y-2.5 mb-6">
                                        {tier.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start text-xs text-slate-300">
                                                <svg
                                                    className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0 mt-0.5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2.5"
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button
                                    type="button"
                                    className={`w-full py-2.5 px-4 rounded-xl font-semibold text-xs transition-all duration-200 ${tier.popular
                                        ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                                        : 'bg-slate-700 hover:bg-slate-600 text-white'
                                        }`}
                                >
                                    {tier.buttonText}
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* Footer */}
                <div className="mt-8 text-center border-t border-slate-800 pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                    <span>🔒 14-day money-back guarantee • Cancel anytime</span>
                    {onClose && (
                        <button
                            onClick={onClose}
                            className="text-slate-400 hover:text-white underline font-medium transition-colors"
                        >
                            Close
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}