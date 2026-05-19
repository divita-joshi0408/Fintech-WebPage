// 'use client'

// const faqs = [
//     {
//         question: 'What is Peer-To-Peer Lending?',
//         answer:
//             'Peer-To-Peer lending is a digital platform that directly connects lenders and borrowers without traditional banking intermediaries.',
//     },
//     {
//         question: 'Is the platform secure?',
//         answer:
//             'Yes, our platform uses secure encryption, borrower verification, and advanced risk assessment systems.',
//     },
//     {
//         question: 'How can lenders earn returns?',
//         answer:
//             'Lenders earn returns through interest paid by borrowers on funded loans.',
//     },
//     {
//         question: 'Can I start with small investments?',
//         answer:
//             'Yes, our platform allows flexible investment amounts for better accessibility and diversification.',
//     },
// ]

// export default function FAQ() {
//     return (
//         <section className="py-24 bg-[#f8fbff]">
//             <div className="max-w-5xl mx-auto px-6 lg:px-8">

//                 <div className="text-center">
//                     <p className="text-[#9abd2d] font-semibold text-lg">
//                         Frequently Asked Questions
//                     </p>

//                     <h2 className="mt-4 text-4xl lg:text-6xl font-bold text-[#2C476A]">
//                         Everything You
//                         Need To Know
//                     </h2>
//                 </div>

//                 <div className="mt-16 space-y-6">
//                     {faqs.map((faq, index) => (
//                         <div
//                             key={index}
//                             className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
//                         >
//                             <h3 className="text-2xl font-bold text-[#2C476A]">
//                                 {faq.question}
//                             </h3>
//                             <p className="mt-4 text-gray-600 leading-8 text-lg">
//                                 {faq.answer}
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }


'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
    {
        question: 'What is Peer-To-Peer Lending?',
        answer:
            'Peer-To-Peer lending is a digital platform that directly connects lenders and borrowers without traditional banking intermediaries.',
    },
    {
        question: 'Is the platform secure?',
        answer:
            'Yes, our platform uses secure encryption, borrower verification, and advanced risk assessment systems.',
    },
    {
        question: 'How can lenders earn returns?',
        answer:
            'Lenders earn returns through interest paid by borrowers on funded loans.',
    },
    {
        question: 'Can I start with small investments?',
        answer:
            'Yes, our platform allows flexible investment amounts for better accessibility and diversification.',
    },
]

export default function FAQ() {

    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="py-24 bg-[#f8fbff]">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">

                <div className="text-center">
                    <p className="text-[#9abd2d] font-semibold text-lg sm:text-xl lg:text-3xl">
                        Frequently Asked Questions
                    </p>

                    <h2 className="mt-4 text-3xl lg:text-5xl font-bold text-[#2C476A] leading-tight">
                        Everything You
                        Need To Know
                    </h2>
                </div>

                <div className="mt-16 space-y-6">

                    {faqs.map((faq, index) => {

                        const isOpen = openIndex === index

                        return (
                            <div
                                key={index}
                                className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300"
                            >

                                {/* QUESTION */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between text-left p-6 lg:p-8"
                                >

                                    <h3 className="text-xl lg:text-2xl font-bold text-[#2C476A] pr-5">
                                        {faq.question}
                                    </h3>

                                    <ChevronDown
                                        className={`text-[#9abd2d] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                                            }`}
                                        size={30}
                                    />
                                </button>

                                {/* ANSWER */}
                                <div
                                    className={`
                                        grid transition-all duration-300 ease-in-out
                                        ${isOpen
                                            ? 'grid-rows-[1fr] opacity-100'
                                            : 'grid-rows-[0fr] opacity-0'
                                        }
                                    `}
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-6 lg:px-8 pb-6 lg:pb-8 text-gray-600 leading-8 text-base lg:text-lg">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    )
}