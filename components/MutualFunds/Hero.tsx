'use client'

import { ArrowRight } from 'lucide-react'
import FintechIllustration from './FintechIllustration'

export default function Hero() {
    return (
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#2C476A] to-[#314d73]">

            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div>

                        <p className="text-[#9abd2d] text-lg font-semibold tracking-wide lg:text-2xl">
                            Smart Investment Solutions
                        </p>

                        <h1 className="mt-6 text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
                            Grow Your Wealth With
                            Mutual Funds
                        </h1>

                        <p className="mt-8 text-lg sm:text-xl text-white/85 leading-9 max-w-2xl">
                            Mutual funds provide a smart and secure way to grow your money through professionally managed investments and diversified portfolios.
                        </p>

                        <div className="flex flex-wrap gap-5 mt-10">

                            <button className="bg-[#9abd2d] hover:bg-[#89ab24] transition-all duration-300 text-[#2C476A] px-8 py-4 rounded-2xl font-bold flex items-center gap-2">
                                Start Investing
                                <ArrowRight size={20} />
                            </button>

                            <button className="border border-white text-white hover:bg-white hover:text-[#2C476A] transition-all duration-300 px-8 py-4 rounded-2xl font-semibold">
                                Explore Plans
                            </button>

                        </div>

                    </div>

                    {/* RIGHT ILLUSTRATION */}
                    <div className="relative flex justify-center">

                        <div className="relative w-full max-w-[550px] h-auto">

                            <FintechIllustration />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}