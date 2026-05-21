'use client'

import Image from 'next/image'
import { BadgeCheck } from 'lucide-react'
import { motion } from 'framer-motion'

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
        <section className="py-20 lg:py-28 bg-white overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* IMAGE */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative w-full h-[300px] sm:h-[420px] lg:h-[500px] rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 bg-[#2C476A]/5">
                            <Image
                                src="/images/mutual_funds_about.png"
                                alt="Mutual Funds Growth Illustration"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </motion.div>

                    {/* CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >

                        <p className="text-[#9abd2d] font-semibold text-xl lg:text-2xl">
                            Why Mutual Funds?
                        </p>

                        <h2 className="mt-5 text-3xl lg:text-5xl font-bold text-[#2C476A] leading-tight">
                            Smart Investing <br />
                            For Your Future
                        </h2>

                        <p className="mt-8 text-gray-600 text-lg leading-relaxed">
                            Mutual funds simplify investing by pooling money from multiple investors into professionally managed portfolios. They help reduce risks while maximizing long-term financial growth.
                        </p>

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">

                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-center gap-4 bg-[#f8fbff] p-5 rounded-2xl border border-gray-100 hover:border-[#9abd2d]/30 hover:shadow-md transition-all duration-300"
                                >
                                    <div className="w-10 h-10 rounded-full bg-[#9abd2d]/20 flex items-center justify-center shrink-0">
                                        <BadgeCheck size={20} className="text-[#9abd2d]" />
                                    </div>

                                    <p className="font-semibold text-[#2C476A]">
                                        {benefit}
                                    </p>
                                </motion.div>
                            ))}

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    )
}