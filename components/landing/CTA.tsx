// 'use client'

// import { ArrowRight } from 'lucide-react'

// export default function CTA() {
//     return (
//         <section className="py-24 bg-white">
//             <div className="max-w-7xl mx-auto px-6 lg:px-8">

//                 <div
//                     className="
//                     rounded-[40px]
//                     px-10 py-16 lg:px-20 lg:py-20
//                     text-center relative overflow-hidden
//                     border-2 border-[#9abd2d]
//                     bg-white
//                     text-[#2C476A]
//                     transition-all duration-700 ease-in-out
//                     [transform-style:preserve-3d]
//                     [perspective:1000px]
//                     hover:bg-[#9abd2d]
//                     hover:text-white
//                     hover:[transform:rotateY(360deg)]
//                 "
//                 >
//                     {/* glow effect */}
//                     <div className="absolute top-0 right-0 w-80 h-80 bg-[#9abd2d]/10 rounded-full blur-3xl" />

//                     <div className="relative z-10 max-w-4xl mx-auto">
//                         <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
//                             Start Your Smart
//                             Lending Journey Today
//                         </h2>

//                         <p className="mt-8 text-lg leading-8 opacity-90">
//                             Join thousands of investors and borrowers using our secure digital lending ecosystem.
//                         </p>

//                         <div className="flex flex-wrap justify-center gap-5 mt-10">

//                             <button className="bg-white text-[#2C476A] hover:bg-[#2C476A] hover:text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2">
//                                 Start Lending
//                                 <ArrowRight size={18} />
//                             </button>

//                             <button className="border border-white text-[#2C476A] hover:bg-white hover:text-[#2C476A] px-8 py-4 rounded-2xl font-semibold transition-all duration-300">
//                                 Explore Platform
//                             </button>

//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </section>
//     )
// }



'use client'

import { useState } from 'react'

export default function CTA() {
    const [hovered, setHovered] = useState(false)

    const handleFlip = () => {
        if (window.innerWidth < 1024) {
            setHovered(!hovered)
        }
    }

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="[perspective:1200px]">

                    <div
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        onClick={handleFlip}
                        className="
                            relative w-full
                            min-h-[520px]
                            sm:min-h-[480px]
                            lg:h-[420px]
                            rounded-[40px]
                            border-2 border-[#9abd2d]
                            [transform-style:preserve-3d]
                            transition-transform duration-700
                            cursor-pointer
                        "
                        style={{
                            transform: hovered
                                ? 'rotateX(180deg)'
                                : 'rotateX(0deg)',
                        }}
                    >

                        {/* FRONT SIDE */}
                        <div
                            className="
                                absolute inset-0
                                bg-white
                                rounded-[40px]
                                px-6 py-10
                                sm:px-10 sm:py-14
                                lg:px-20 lg:py-20
                                text-center
                                text-[#2C476A]
                                flex flex-col justify-center
                                [backface-visibility:hidden]
                            "
                        >
                            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                                Start Your Smart Lending Journey Today
                            </h2>

                            <p className="mt-8 text-base sm:text-lg opacity-90">
                                Join thousands of investors and borrowers in a secure digital lending ecosystem.
                            </p>

                            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-5 mt-8 lg:mt-10">

                                <button className="bg-white border border-[#2C476A] text-[#2C476A] px-8 py-4 rounded-2xl font-semibold w-full sm:w-auto">
                                    Start Lending
                                </button>

                                <button className="border border-[#2C476A] text-[#2C476A] px-8 py-4 rounded-2xl font-semibold w-full sm:w-auto">
                                    Explore Platform
                                </button>

                            </div>
                        </div>

                        {/* BACK SIDE */}
                        <div
                            className="
                                absolute inset-0
                                bg-[#9abd2d]
                                text-white
                                rounded-[40px]
                                px-6 py-10
                                sm:px-10 sm:py-14
                                lg:px-20 lg:py-20
                                flex flex-col justify-center text-center
                                [backface-visibility:hidden]
                            "
                            style={{
                                transform: 'rotateX(180deg)',
                            }}
                        >
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                                Trusted Lending Platform
                            </h2>

                            <p className="mt-6 text-base sm:text-lg opacity-90 max-w-2xl mx-auto">
                                Transparent interest rates, verified borrowers, and secure transactions all in one place.
                            </p>

                            <div className="mt-8 lg:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">

                                <div className="bg-white/15 rounded-2xl p-4">
                                    <p className="text-2xl font-bold">0%</p>
                                    <p className="text-sm">Hidden Charges</p>
                                </div>

                                <div className="bg-white/15 rounded-2xl p-4">
                                    <p className="text-2xl font-bold">100%</p>
                                    <p className="text-sm">Verified Users</p>
                                </div>

                                <div className="bg-white/15 rounded-2xl p-4">
                                    <p className="text-2xl font-bold">24/7</p>
                                    <p className="text-sm">Support</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}