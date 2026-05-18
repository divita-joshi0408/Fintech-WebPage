'use client'

import { motion } from 'framer-motion'
import {
    UserPlus,
    Search,
    BadgeCheck,
    IndianRupee
} from 'lucide-react'

const steps = [
    {
        icon: UserPlus,
        title: 'Create Account',
        description:
            'Sign up in minutes with our fully digital onboarding process and complete KYC verification securely.',
    },
    {
        icon: Search,
        title: 'Choose Opportunity',
        description:
            'Explore verified borrowers and investment opportunities based on your risk preference.',
    },
    {
        icon: BadgeCheck,
        title: 'Smart Verification',
        description:
            'Every borrower is carefully analyzed using technology-driven risk assessment models.',
    },
    {
        icon: IndianRupee,
        title: 'Earn Returns',
        description:
            'Start earning attractive returns while helping borrowers access quick financing.',
    },
]

export default function HowItWorks() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-[#9abd2d] font-semibold text-lg">
                        Simple Lending Process
                    </p>

                    <h2 className="mt-4 text-4xl lg:text-6xl font-bold text-[#2C476A] leading-tight">
                        How Peer-To-Peer
                        Lending Works
                    </h2>
                    <p className="mt-6 text-lg text-gray-600 leading-8">
                        Our digital lending platform connects lenders and borrowers directly through a secure and transparent process.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
                    {steps.map((step, index) => {
                        const Icon = step.icon

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-[#9abd2d]/10 flex items-center justify-center">
                                    <Icon className="text-[#9abd2d]" size={30} />
                                </div>

                                <div className="mt-8">
                                    <h3 className="text-2xl font-bold text-[#2C476A]">
                                        {step.title}
                                    </h3>

                                    <p className="mt-4 text-gray-600 leading-8">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}