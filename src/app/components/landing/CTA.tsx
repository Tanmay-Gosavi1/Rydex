'use client'
import { motion } from "framer-motion"
import { useRouter } from "next/navigation";

const CTA = () => {
    const router = useRouter();

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-3xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-black text-white rounded-3xl p-12 md:p-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4">Ready to hit the road?</h2>
                    <p className="text-gray-300 text-lg mb-8">Join thousands of happy customers. Sign up and get your first rental discount.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => router.push('/partner/onboarding/vehicle')}
                            className="px-8 py-4 bg-white text-black rounded-xl font-bold hover:bg-gray-100 transition-all duration-200 cursor-pointer hover:scale-105"
                        >
                            {'Become a Partner'}
                        </button>
                        <a href="#features" className="px-8 py-4 border border-white/30 text-white rounded-xl font-bold hover:bg-white/10 transition-all duration-200 cursor-pointer hover:scale-105">
                            Learn More
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default CTA