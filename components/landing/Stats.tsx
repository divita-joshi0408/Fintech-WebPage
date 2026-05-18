const stats = [
    {
        title: '₹500Cr+',
        subtitle: 'Loans Facilitated',
    },
    {
        title: '50,000+',
        subtitle: 'Registered Users',
    },
    {
        title: '100%',
        subtitle: 'Digital Process',
    },
    {
        title: 'Secure',
        subtitle: 'Transparent Platform',
    },
]

export default function Stats() {
    return (
        <section className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-100 shadow-md rounded-3xl p-8 text-center hover:-translate-y-2 transition-all duration-300"
                        >
                            <h3 className="text-3xl font-bold text-[#2C476A]">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 mt-2">
                                {item.subtitle}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}