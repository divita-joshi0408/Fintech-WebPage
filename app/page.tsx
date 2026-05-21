import Hero from '@/components/landing/Hero'
import Stats from '@/components/landing/Stats'
import WhatIsP2P from '@/components/landing/WhatIsP2P'
import HowItWorks from '@/components/landing/HowItWorks'
import Benefits from '@/components/landing/Benefits'
import Security from '@/components/landing/Security'
import FAQ from '@/components/landing/FAQ'
import CTA from '@/components/landing/CTA'
import Image from 'next/image'

export default function LendenPage() {
  return (
    <main className="bg-white overflow-hidden">
      <Hero />
      <Stats />
      <WhatIsP2P />
      <HowItWorks />
      <Benefits />
      <Security />
      <FAQ />
     <CTA /> 
      {/* Floating LenDen Logo */}
      <div className="fixed bottom-6 right-6 z-50 bg-white p-3 lg:p-5 rounded-full shadow-2xl">
        <Image
          src="/lenden-logo-new.png"
          alt="LenDen Logo"
          width={80}
          height={80}
          className="w-[80px] sm:w-[90px] lg:w-[110px] h-auto object-contain"
        />
      </div>
    </main>
  )
}

