'use client'

import { ShieldCheck } from 'lucide-react'

export default function Security() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="bg-gradient-to-r from-[#2C476A] to-[#355784] rounded-[40px] p-10 lg:p-16 relative overflow-hidden">

                    <div className="absolute top-0 right-0 w-80 h-80 bg-[#9abd2d]/20 rounded-full blur-3xl" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-14 items-center">

                        <div>
                            <p className="text-[#9abd2d] font-semibold text-lg">
                                Security & Transparency
                            </p>

                            <h2 className="mt-5 text-4xl lg:text-6xl font-bold text-white leading-tight">
                                Safe & Trusted
                                Digital Lending
                            </h2>

                            <p className="mt-6 text-white/80 text-lg leading-8">
                                We use advanced technology, secure payment gateways, borrower verification systems, and transparent processes to create a trusted lending ecosystem.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-10 shadow-2xl">

                            <div className="w-20 h-20 rounded-full bg-[#9abd2d]/10 flex items-center justify-center">
                                <ShieldCheck size={40} className="text-[#9abd2d]" />
                            </div>
                            <h3 className="mt-8 text-3xl font-bold text-[#2C476A]">
                                Protected Transactions
                            </h3>

                            <div className="space-y-5 mt-8 text-gray-600 text-lg">
                                <p>✔ Secure digital onboarding</p>
                                <p>✔ Smart borrower risk assessment</p>
                                <p>✔ Transparent repayment tracking</p>
                                <p>✔ Encrypted payment systems</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}