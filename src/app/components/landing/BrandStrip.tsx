'use client'
import { motion } from "framer-motion"
import Image from "next/image"

/* ─────────────────── Brand Strip ─────────────────── */
const brands = [
    { name: 'Toyota', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg' },
    { name: 'Honda', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_Logo.svg' },
    { name: 'BMW', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg' },
    { name: 'Mercedes', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg' },
    { name: 'Audi', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg' },
    // { name: 'Hyundai', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Hyundai_Motor_Company_logo.svg' },
    // { name: 'Kia', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Kia-logo.svg' },
    { name: 'Ford', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg' },
    // { name: 'Suzuki', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Suzuki_logo_2.svg' },
    { name: 'Mahindra', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Mahindra_Logo.svg' },
]
const allBrands = [...brands, ...brands]

const BrandStrip = () => (
    <section id="brands-section" className="py-14 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">Trusted brands in our fleet</p>
        </div>
        <div className="relative">
            <motion.div
                className="flex items-center gap-16"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
                style={{ width: 'max-content' }}
            >
                {allBrands.map((brand, i) => (
                    <div key={i} className="flex items-center justify-center w-28 h-14 grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100 flex-shrink-0">
                        <Image
                            src={brand.logo}
                            alt={brand.name}
                            className="max-h-10 max-w-full object-contain"
                            onError={(e) => {
                                e.target.style.display = 'none'
                                e.target.nextSibling.style.display = 'flex'
                            }}
                            priority={true}
                                width={120}
                                height={120}
                        />
                        <span style={{ display: 'none' }} className="text-sm font-bold text-gray-500 items-center justify-center">{brand.name}</span>
                    </div>
                ))}
            </motion.div>
            {/* Fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-gray-50 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-gray-50 to-transparent" />
        </div>
    </section>
)

export default BrandStrip