const cards = [
    {
        title: 'Lender',
        desc: 'People who want to grow their money by lending digitally.',
    },
    {
        title: 'Our Platform',
        desc: 'We securely connect lenders and verified borrowers.',
    },
    {
        title: 'Borrower',
        desc: 'Borrowers get quick and transparent access to funds.',
    },
]

export default function WhatIsP2P() {
    return (
        <section className="py-24 bg-[#f8fafc]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">

                <h2 className="text-5xl font-bold text-[#2C476A]">
                    What is Peer-to-Peer Lending?
                </h2>

                <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg leading-8">
                    Peer-to-Peer lending is a modern financial system where lenders and borrowers connect directly through a digital platform without traditional banks.
                </p>

                <div className="grid lg:grid-cols-3 gap-8 mt-16">
                    {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-[30px] shadow-lg hover:shadow-2xl transition-all duration-300"
            >

            <div className="w-20 h-20 rounded-full bg-[#9abd2d]/10 flex items-center justify-center text-[#9abd2d] text-3xl font-bold mx-auto">
                {index + 1}
              </div>

              <h3 className="text-2xl font-bold text-[#2C476A] mt-8">
                {card.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {card.desc}
              </p>
            </div>
          ))}
            </div>
        </div>
    </section >
  )
}