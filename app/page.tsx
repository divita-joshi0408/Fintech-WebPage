import Hero from '@/components/landing/Hero'
import Stats from '@/components/landing/Stats'
import WhatIsP2P from '@/components/landing/WhatIsP2P'
import HowItWorks from '@/components/landing/HowItWorks'
import Benefits from '@/components/landing/Benefits'
// import Security from '@/components/landing/Security'
import FAQ from '@/components/landing/FAQ'
import CTA from '@/components/landing/CTA'

export default function LendenPage() {
  return (
    <main className="bg-white overflow-hidden">
      <Hero />
      <Stats />
      <WhatIsP2P />
      <HowItWorks />
      <Benefits />
      {/* <Security /> */}
      <FAQ />
     <CTA /> 
    </main>
  )
}