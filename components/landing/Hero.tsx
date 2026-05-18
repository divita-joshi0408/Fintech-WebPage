'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
    return (
        <section className="relative w-full bg-white pt-20 pb-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">

                {/* ── LEFT SIDE ── */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-[#2C476A]">
                        Grow Your Money
                        <span className="block text-[#2C476A]">
                            Smarter with
                        </span>
                        <span className="text-[#9abd2d]">Peer-to-Peer Lending</span>
                    </h1>

                    <p className="mt-5 text-base lg:text-lg text-gray-600 leading-7 max-w-xl">
                        Connect directly with trusted borrowers and lenders through
                        our secure digital platform. Earn better returns, access quick
                        loans, and experience the future of modern financing.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-7">
                        <button className="bg-[#9abd2d] hover:bg-[#89aa25] text-white px-7 py-3.5 rounded-lg font-semibold text-base flex items-center gap-2 transition-all duration-300">
                            Start Lending
                            <ArrowRight size={16} />
                        </button>
                        <button className="border border-[#2C476A] text-[#2C476A] hover:bg-[#2C476A] hover:text-white px-7 py-3.5 rounded-lg font-semibold text-base transition-all duration-300">
                            Explore Platform
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-6 mt-8 text-sm text-gray-500">
                        <div className="flex items-center gap-1.5">
                            <span className="text-[#9abd2d]">✔</span> 100% Digital
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="text-[#9abd2d]">✔</span> Secure &amp; Transparent
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="text-[#9abd2d]">✔</span> RBI Compliant Platform
                        </div>
                    </div>
                </motion.div>

                {/* ── RIGHT SIDE ── */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center"
                >
                    <div className="relative w-full max-w-[560px] h-[500px]">

                        {/* ── Green dashed circle ── */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div
                                className="w-[360px] h-[360px] rounded-full"
                                style={{
                                    border: '2px dashed #9abd2d',
                                    opacity: 0.5,
                                }}
                            />
                        </div>

                        {/* ── Top-left: 12% Average Returns ── */}
                        <div className="absolute top-0 left-6 bg-white shadow-lg rounded-2xl px-4 py-3 z-20 flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#9abd2d]/10 rounded-full flex items-center justify-center">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M3 17L9 11L13 15L21 7" stroke="#9abd2d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M17 7H21V11" stroke="#9abd2d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div>
                                <p className="text-[#9abd2d] font-bold text-xl leading-none">12%+</p>
                                <p className="text-xs text-gray-500 mt-0.5">Average Returns</p>
                            </div>
                        </div>

                        {/* ── Top-right: Verified Borrowers ── */}
                        <div className="absolute top-0 right-2 bg-white shadow-lg rounded-2xl px-4 py-3 z-20 flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#9abd2d]/10 rounded-full flex items-center justify-center">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 12L11 14L15 10" stroke="#9abd2d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 3L20 7V12C20 16.4 16.5 20.5 12 21.5C7.5 20.5 4 16.4 4 12V7L12 3Z" stroke="#9abd2d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div>
                                <p className="text-[#2C476A] font-bold text-sm leading-none">Verified</p>
                                <p className="text-xs text-gray-500 mt-0.5">Borrowers</p>
                            </div>
                        </div>

                        {/* ── Lender Card (left) ── */}
                        <div className="absolute left-0 top-[80px] bg-white rounded-2xl shadow-xl p-4 w-[170px] z-20">
                            <div className="text-center text-[10px] text-gray-400 mb-1">Lender</div>
                            <div className="w-full h-[130px] relative overflow-hidden rounded-xl bg-gray-50">
                                <Image
                                    src="/images/lender.png"
                                    alt="Lender illustration"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-center text-xs text-gray-500 mt-2">
                                Invest &amp;<br/>Earn Returns
                            </p>
                        </div>

                        {/* ── Borrower Card (right) ── */}
                        <div className="absolute right-0 top-[80px] bg-white rounded-2xl shadow-xl p-4 w-[170px] z-20">
                            <div className="text-center text-[10px] text-gray-400 mb-1">Borrower</div>
                            <div className="w-full h-[130px] relative overflow-hidden rounded-xl bg-gray-50">
                                <Image
                                    src="/images/borrower.png"
                                    alt="Borrower illustration"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-center text-xs text-gray-500 mt-2">
                                Get Funds<br/>Quickly
                            </p>
                        </div>

                        {/* ── Center Shield / LENDEN ── */}
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <div className="bg-white shadow-2xl rounded-2xl w-[140px] h-[140px] flex flex-col items-center justify-center border border-gray-100">
                                <div className="w-12 h-12 bg-[#2C476A] rounded-xl flex items-center justify-center mb-2">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 3L20 7V12C20 16.4 16.5 20.5 12 21.5C7.5 20.5 4 16.4 4 12V7L12 3Z" fill="#9abd2d" stroke="white" strokeWidth="1"/>
                                        <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <h3 className="font-bold text-[#2C476A] text-sm">
                                    LENDEN
                                </h3>
                                <p className="text-[11px] text-gray-400">
                                    Platform
                                </p>
                            </div>
                        </div>

                        {/* ── Connector lines (decorative dashes) ── */}
                        <div className="absolute left-[168px] top-[180px] w-[40px] border-t-2 border-dashed border-[#9abd2d]/40 z-0" />
                        <div className="absolute right-[168px] top-[180px] w-[40px] border-t-2 border-dashed border-[#9abd2d]/40 z-0" />

                        {/* ── Bottom-left: Low Risk ── */}
                        <div className="absolute bottom-6 left-4 bg-white shadow-lg rounded-2xl px-4 py-3 z-20 flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#2C476A]/10 rounded-full flex items-center justify-center">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                    {/* Pie chart: larger slice in blue, smaller in green */}
                                    <path d="M12 2A10 10 0 0 1 22 12H12V2Z" fill="#9abd2d"/>
                                    <path d="M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12H12V2Z" fill="#2C476A"/>
                                    <circle cx="12" cy="12" r="4" fill="white"/>
                                </svg>
                            </div>
                            <div>
                                <p className="font-bold text-[#2C476A] text-sm leading-none">Low Risk</p>
                                <p className="text-xs text-gray-500 mt-0.5">Diversification</p>
                            </div>
                        </div>

                        {/* ── Bottom-right: 100% Digital Process ── */}
                        <div className="absolute bottom-6 right-4 bg-white shadow-lg rounded-2xl px-4 py-3 z-20 flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#9abd2d]/10 rounded-full flex items-center justify-center">
                                <span className="text-[#9abd2d] font-bold text-xs">%</span>
                            </div>
                            <div>
                                <p className="font-bold text-[#9abd2d] text-sm leading-none">100%</p>
                                <p className="text-xs text-gray-500 mt-0.5">Digital Process</p>
                            </div>
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    )
}
