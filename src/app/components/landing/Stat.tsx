'use client'
import { motion } from 'framer-motion'
/* ─────────────────── Stats Banner ─────────────────── */
const stats = [
    { value: '500+', label: 'Vehicles Available' },
    { value: '10K+', label: 'Happy Customers' },
    { value: '4.8★', label: 'Average Rating' },
    { value: '24/7', label: 'Customer Support' },
]

const StatsBanner = () => (
    <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <p className="text-4xl font-black mb-1">{s.value}</p>
                        <p className="text-gray-400 text-sm">{s.label}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
)

export default StatsBanner