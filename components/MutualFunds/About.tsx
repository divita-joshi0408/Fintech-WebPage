'use client'

import Image from 'next/image'
import { BadgeCheck } from 'lucide-react'

const benefits = [
    'Long-Term Wealth Creation',
    'Tax Saving Opportunities',
    'Low Investment Entry',
    'High Liquidity',
    'Goal Based Planning',
    'Safe & Secure Investing',
]

export default function About() {
    return (
        <section className="py-20 lg:py-28 bg-white">

            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* IMAGE */}
                    <div className="relative">

                        <div className="relative w-full h-[300px] sm:h-[420px] lg:h-[500px] rounded-[40px] overflow-hidden shadow-2xl">

                            <Image
                                src="/images/investment.jpg"
                                alt="Investment"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />

                        </div>

                    </div>

                    {/* CONTENT */}
                    <div>

                        <p className="text-[#9abd2d] font-semibold text-lg lg:text-2xl">
                            Why Mutual Funds?
                        </p>

                        <h2 className="mt-5 text-3xl lg:text-5xl font-bold text-[#2C476A] leading-tight">
                            Smart Investing
                            For Your Future
                        </h2>

                        <p className="mt-8 text-gray-600 text-lg leading-9">
                            Mutual funds simplify investing by pooling money from multiple investors into professionally managed portfolios. They help reduce risks while maximizing long-term financial growth.
                        </p>

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">

                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 bg-[#f8fbff] p-5 rounded-2xl border border-gray-100"
                                >
                                    <div className="w-10 h-10 rounded-full bg-[#9abd2d]/20 flex items-center justify-center">
                                        <BadgeCheck size={20} className="text-[#9abd2d]" />
                                    </div>

                                    <p className="font-semibold text-[#2C476A]">
                                        {benefit}
                                    </p>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}