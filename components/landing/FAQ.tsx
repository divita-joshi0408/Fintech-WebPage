'use client'

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
    return (
        <section className="py-24 bg-[#f8fbff]">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">

                <div className="text-center">
                    <p className="text-[#9abd2d] font-semibold text-lg">
                        Frequently Asked Questions
                    </p>

                    <h2 className="mt-4 text-4xl lg:text-6xl font-bold text-[#2C476A]">
                        Everything You
                        Need To Know
                    </h2>
                </div>

                <div className="mt-16 space-y-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
                        >
                            <h3 className="text-2xl font-bold text-[#2C476A]">
                                {faq.question}
                            </h3>
                            <p className="mt-4 text-gray-600 leading-8 text-lg">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}