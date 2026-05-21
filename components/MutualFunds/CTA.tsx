'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CTA() {
    return (
        <section className="py-20 lg:py-28 bg-[#2C476A] relative overflow-hidden">
            {/* Subtle background glow circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#9abd2d]/10 rounded-full blur-[100px] pointer-events-none select-none" />

            <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">

                <motion.p 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-[#9abd2d] font-semibold text-lg lg:text-xl uppercase tracking-wider"
                >
                    Start Today
                </motion.p>

                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="mt-5 text-3xl lg:text-5xl font-bold text-white leading-tight"
                >
                    Build Your Financial <br />
                    Future With Confidence
                </motion.h2>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="mt-8 text-white/80 text-lg leading-relaxed max-w-2xl mx-auto"
                >
                    Start investing in mutual funds today and achieve your financial goals with professional guidance and smart investment strategies.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                >
                    <button className="mt-10 bg-[#9abd2d] hover:bg-[#89ab24] text-[#2C476A] px-10 py-5 rounded-2xl font-bold text-lg inline-flex items-center gap-3 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-[#9abd2d]/25 cursor-pointer">
                        Invest Now
                        <ArrowRight size={22} />
                    </button>
                </motion.div>

            </div>

        </section>
    )
}