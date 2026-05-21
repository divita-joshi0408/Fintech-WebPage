'use client'

import {
    ShieldCheck,
    TrendingUp,
    Wallet,
    BadgeCheck,
} from 'lucide-react'

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

export default function Features() {
    return (
        <section className="py-20 lg:py-28 bg-[#f8fbff]">

            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="text-center">

                    <p className="text-[#9abd2d] font-semibold text-lg lg:text-3xl">
                        Key Features
                    </p>

                    <h2 className="mt-4 text-3xl lg:text-5xl font-bold text-[#2C476A]">
                        Benefits Of Mutual Funds
                    </h2>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[32px] p-8 shadow-lg hover:-translate-y-2 transition-all duration-300 border border-gray-100"
                        >

                            <div className="w-16 h-16 rounded-2xl bg-[#9abd2d] text-[#2C476A] flex items-center justify-center">
                                {feature.icon}
                            </div>

                            <h3 className="mt-8 text-2xl font-bold text-[#2C476A]">
                                {feature.title}
                            </h3>

                            <p className="mt-5 text-gray-600 leading-8">
                                {feature.description}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}