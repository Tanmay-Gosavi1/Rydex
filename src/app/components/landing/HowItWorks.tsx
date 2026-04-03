'use client'
import { motion } from 'framer-motion'
const steps = [
    { step: '01', title: 'Choose a Vehicle', desc: 'Browse our fleet and pick the perfect car, bike, or scooty for your trip.' },
    { step: '02', title: 'Book Your Dates', desc: 'Select pickup date, time, and location in just a few clicks.' },
    { step: '03', title: 'Pay Securely', desc: 'Complete payment via UPI, card, or net banking using Razorpay.' },
    { step: '04', title: 'Hit the Road', desc: 'Collect your vehicle and enjoy the ride. Return anytime within your booking window.' },
]

const HowItWorks = () => (
    <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
                <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-2">Simple Process</p>
                <h2 className="text-4xl font-black">How it works</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 }}
                        className="relative"
                    >
                        {i < steps.length - 1 && (
                            <div className="hidden lg:block absolute top-7 left-[calc(50%+2rem)] w-full h-px border-t-2 border-dashed border-gray-200" />
                        )}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center text-xl font-black mb-4 relative z-10">
                                {s.step}
                            </div>
                            <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
)

export default HowItWorks