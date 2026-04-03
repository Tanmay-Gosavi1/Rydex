import React from 'react'
import { LoaderPinwheel, Mail, MapPin, Phone } from "lucide-react"


// /* ─────────────────── Features Section ─────────────────── */
// const features = [
//     {
//         icon: Shield,
//         title: 'Fully Insured',
//         desc: 'Every vehicle in our fleet is fully insured so you can drive with complete peace of mind.',
//         color: 'bg-blue-50 text-blue-600'
//     },
//     {
//         icon: Zap,
//         title: 'Instant Booking',
//         desc: 'Book in under 2 minutes. Confirm your dates, pay online, and hit the road.',
//         color: 'bg-yellow-50 text-yellow-600'
//     },
//     {
//         icon: CreditCard,
//         title: 'Secure Payments',
//         desc: 'Powered by Razorpay — UPI, cards, net banking, all accepted with bank-grade security.',
//         color: 'bg-green-50 text-green-600'
//     },
//     {
//         icon: Clock,
//         title: 'Flexible Hours',
//         desc: 'Rent by the day or week. Our flexible plans fit your schedule perfectly.',
//         color: 'bg-purple-50 text-purple-600'
//     },
//     {
//         icon: Headphones,
//         title: '24/7 Support',
//         desc: 'Our support team is always available to assist you before, during, and after your trip.',
//         color: 'bg-red-50 text-red-600'
//     },
//     {
//         icon: Award,
//         title: 'Top Rated',
//         desc: 'Consistently rated 4.8/5 by thousands of happy customers across Bangalore.',
//         color: 'bg-orange-50 text-orange-600'
//     },
// ]

// const containerVariants = {
//     hidden: {},
//     visible: { transition: { staggerChildren: 0.1 } }
// }
// const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
// }

// const Features = () => {
//     const ref = useRef(null)
//     const [inView, setInView] = useState(false)

//     useEffect(() => {
//         const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold: 0.15 })
//         if (ref.current) obs.observe(ref.current)
//         return () => obs.disconnect()
//     }, [])

//     return (
//         <section id="features" className="py-20 bg-gray-50">
//             <div className="max-w-7xl mx-auto px-6">
//                 <div className="text-center mb-14">
//                     <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-2">Why Rentify</p>
//                     <h2 className="text-4xl font-black">Everything you need for a<br />perfect rental experience</h2>
//                 </div>

//                 <motion.div
//                     ref={ref}
//                     className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//                     variants={containerVariants}
//                     initial="hidden"
//                     animate={inView ? 'visible' : 'hidden'}
//                 >
//                     {features.map((f, i) => (
//                         <motion.div key={i} variants={itemVariants} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
//                             <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${f.color}`}>
//                                 <f.icon size={22} />
//                             </div>
//                             <h3 className="text-lg font-bold mb-2">{f.title}</h3>
//                             <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             </div>
//         </section>
//     )
// }

// /* ─────────────────── Stats Banner ─────────────────── */
// const stats = [
//     { value: '500+', label: 'Vehicles Available' },
//     { value: '10K+', label: 'Happy Customers' },
//     { value: '4.8★', label: 'Average Rating' },
//     { value: '24/7', label: 'Customer Support' },
// ]

// const StatsBanner = () => (
//     <section className="py-16 bg-black text-white">
//         <div className="max-w-7xl mx-auto px-6">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//                 {stats.map((s, i) => (
//                     <motion.div
//                         key={i}
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: i * 0.1 }}
//                     >
//                         <p className="text-4xl font-black mb-1">{s.value}</p>
//                         <p className="text-gray-400 text-sm">{s.label}</p>
//                     </motion.div>
//                 ))}
//             </div>
//         </div>
//     </section>
// )




/* ─────────────────── Footer ─────────────────── */
const Footer = () => {
    // const navigate = useNavigate()
    // const { isAuthenticated, isAdmin } = useAuth()

    return (
        <footer id="help" className="bg-black text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-12 border-b border-white/10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <LoaderPinwheel className="h-7 w-7" />
                            <span className="text-xl font-bold">Rydex</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-5">
                            Premium vehicle rentals in Bangalore. Drive your dream car today.
                        </p>
                        {/* <div className="flex gap-3">
                            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div> */}
                    </div>

                    

                    {/* Vehicle Types */}
                    <div>
                        <h4 className="font-bold mb-4">Vehicle Types</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            {['Sedan Cars', 'SUVs', 'Luxury Cars', 'Motorcycles', 'Scooters', 'Electric Vehicles'].map((t, i) => (
                                <li key={i}>
                                    <a href="#vehicles" className="hover:text-white transition-colors">{t}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold mb-4">Contact Us</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex items-center gap-2">
                                <Mail size={15} />
                                <span>support@rentify.in</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={15} />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin size={15} className="mt-0.5 flex-shrink-0" />
                                <span>100 Feet Road, Indiranagar,<br />Bangalore — 560038</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Rentify. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
