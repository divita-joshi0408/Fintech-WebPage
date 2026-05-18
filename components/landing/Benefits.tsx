'use client'

import { motion } from 'framer-motion'
import {
    ShieldCheck,
    TrendingUp,
    Wallet,
    Clock3
} from 'lucide-react'

const benefits = [
    {
        icon: TrendingUp,
        title: 'Higher Returns',
        description:
            'Earn potentially better returns compared to traditional savings methods.',
    },
    {
        icon: ShieldCheck,
        title: 'Secure Platform',
        description:
            'Start investing with smaller amounts and diversify your portfolio easily.',
    },
    {
        icon: Clock3,
        title: 'Quick Process',
        description:
            'Fast digital approval and seamless onboarding experience for users.',
    },
]

export default function Benefits() {
    return (
        <section className="py-24 bg-[#f8fbff]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-[#9abd2d] font-semibold text-lg">
                        Why Choose Us
                    </p>

                    <h2 className="mt-4 text-4xl lg:text-6xl font-bold text-[#2C476A]">
                        Benefits Of Using
                        Our Platform
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 flex gap-6"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-[#9abd2d]/10 flex items-center justify-center shrink-0">
                                    <Icon className="text-[#9abd2d]" size={30} />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-[#2C476A]">
                                        {benefit.title}
                                    </h3>

                                    <p className="mt-4 text-gray-600 leading-8">
                                        {benefit.description}
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