'use client'

import { ArrowRight, ShieldCheck, TrendingUp, Wallet } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section className="relative min-h-[620px] lg:min-h-[720px] flex items-center overflow-hidden bg-[#2C476A]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                    src="/images/mutual_funds_hero.png"
                    alt="Mutual Funds platform illustration"
                    fill
                    className="object-cover object-[75%_center] lg:object-cover"
                    priority
                />
                {/* Modern gradient overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#2C476A] via-[#2C476A]/95 to-transparent sm:from-[#2C476A] sm:via-[#2C476A]/90 lg:from-[#2C476A]/95 lg:via-[#2C476A]/45 lg:to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        
                        {/* Animated Badge */}
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 bg-[#9abd2d]/10 border border-[#9abd2d]/30 text-[#9abd2d] px-4 py-2 rounded-full w-fit mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#9abd2d] animate-pulse" />
                            <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase">
                                Premium Wealth Management
                            </span>
                        </motion.div>

                        {/* Animated Title */}
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
                        >
                            Grow Your Wealth With <br />
                            <span className="text-[#9abd2d] relative inline-block">
                                Mutual Funds
                                <span className="absolute bottom-1 left-0 w-full h-[4px] bg-[#9abd2d]/40 rounded-full" />
                            </span>
                        </motion.h1>

                        {/* Animated Description */}
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed max-w-xl"
                        >
                            Start your financial journey with a smart, secure, and diversified portfolio managed by professionals. Build long-term wealth effortlessly.
                        </motion.p>

                        {/* Animated CTAs */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-wrap gap-4 mt-8"
                        >
                            <button className="bg-[#9abd2d] hover:bg-[#89ab24] text-[#2C476A] px-8 py-4 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-[#9abd2d]/25 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
                                Start Investing
                                <ArrowRight size={20} />
                            </button>

                            <button className="border border-white/30 bg-white/5 backdrop-blur-md text-white hover:bg-white hover:text-[#2C476A] hover:border-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
                                Explore Plans
                            </button>
                        </motion.div>

                        {/* Trust Badges */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 text-white/70"
                        >
                            <div className="flex items-center gap-2">
                                <ShieldCheck size={18} className="text-[#9abd2d]" />
                                <span className="text-sm font-medium">SEBI Registered</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <TrendingUp size={18} className="text-[#9abd2d]" />
                                <span className="text-sm font-medium">Top Performing Funds</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Wallet size={18} className="text-[#9abd2d]" />
                                <span className="text-sm font-medium">SIP starting at ₹500</span>
                            </div>
                        </motion.div>

                    </div>

                    {/* RIGHT SPACE (Occupied by background illustration on desktop) */}
                    <div className="hidden lg:block lg:col-span-5" />

                </div>
            </div>
        </section>
    )
}