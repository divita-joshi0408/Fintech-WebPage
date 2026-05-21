'use client'

import {
    ShieldCheck,
    TrendingUp,
    Wallet,
    BadgeCheck,
} from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
    {
        icon: <TrendingUp size={34} />,
        title: 'Professional Management',
        description:
            'Experienced fund managers handle your investments strategically for long-term wealth growth.',
    },
    {
        icon: <ShieldCheck size={34} />,
        title: 'Risk Diversification',
        description:
            'Your investments are spread across multiple assets to reduce market risk and volatility.',
    },
    {
        icon: <Wallet size={34} />,
        title: 'SIP Investment',
        description:
            'Invest small amounts regularly through SIP and build wealth consistently over time.',
    },
    {
        icon: <BadgeCheck size={34} />,
        title: 'Complete Transparency',
        description:
            'Track fund performance anytime with clear reports and regular investment updates.',
    },
]

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.6, ease: 'easeOut' as const } 
    },
}

export default function Features() {
    return (
        <section className="py-20 lg:py-28 bg-[#f8fbff] overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="text-center">

                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-[#9abd2d] font-semibold text-lg lg:text-xl uppercase tracking-wider"
                    >
                        Key Features
                    </motion.p>

                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-4 text-3xl lg:text-5xl font-bold text-[#2C476A]"
                    >
                        Benefits Of Mutual Funds
                    </motion.h2>

                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
                >

                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className="bg-white rounded-[32px] p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                        >

                            <div className="w-16 h-16 rounded-2xl bg-[#9abd2d]/10 text-[#9abd2d] flex items-center justify-center">
                                {feature.icon}
                            </div>

                            <h3 className="mt-8 text-2xl font-bold text-[#2C476A]">
                                {feature.title}
                            </h3>

                            <p className="mt-5 text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>

                        </motion.div>
                    ))}

                </motion.div>

            </div>

        </section>
    )
}