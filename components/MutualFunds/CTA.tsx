'use client'

import { ArrowRight } from 'lucide-react'

export default function CTA() {
    return (
        <section className="py-20 lg:py-28 bg-[#2C476A]">

            <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">

                <p className="text-[#9abd2d] font-semibold text-lg lg:text-2xl">
                    Start Today
                </p>

                <h2 className="mt-5 text-3xl lg:text-5xl font-bold text-white leading-tight">
                    Build Your Financial
                    Future With Confidence
                </h2>

                <p className="mt-8 text-white/80 text-lg leading-9">
                    Start investing in mutual funds today and achieve your financial goals with professional guidance and smart investment strategies.
                </p>

                <button className="mt-10 bg-[#9abd2d] hover:bg-[#89ab24] transition-all duration-300 text-[#2C476A] px-10 py-5 rounded-2xl font-bold text-lg inline-flex items-center gap-3">
                    Invest Now
                    <ArrowRight size={22} />
                </button>

            </div>

        </section>
    )
}