'use client'
import { usePathname, useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import { useState , useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    LoaderPinwheel, ChevronDown, Menu, X,
    Car,
    Bike,
    CarFront,
} from 'lucide-react'
import Link from 'next/link'
import AuthModal from './AuthModal'


const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'Bookings', href: '/#bookings' },
    { label: 'About Us', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
]

const Navbar = () => {
    const { data: session } = useSession()
    const user = session?.user
    const isAuthenticated = Boolean(user)
    const isAdmin = user?.role === 'admin'

    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const router = useRouter()
    const pathname = usePathname()
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [userDropOpen, setUserDropOpen] = useState(false)

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handler)
        return () => window.removeEventListener('scroll', handler)
    }, [])

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            const target = e.target as Element | null
            if (!target?.closest('#user-drop-btn')) setUserDropOpen(false)
        }
        document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler)
    }, [])

    const handleNavigate = (path: string) => {
        router.push(path)
    }

    const handleLogout = async () => {
        await signOut({ callbackUrl: '/' })
    }

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                <div className="flex items-center justify-between h-16 sm:h-18">

                    {/* Logo */}
                    <Link href="/"className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <LoaderPinwheel className="h-6 w-6 sm:h-7 sm:w-7" />
                        <span className="text-xl sm:text-2xl font-bold tracking-tight">Rydex</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((nav , idx) => {
                            const href = nav.href;
                            const isActive = pathname === href;
                            return (<Link key={idx} href={href}
                                className="text-sm font-semibold text-gray-700 hover:text-black transition-colors relative group">
                                {nav.label}
                                {isActive && <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-black rounded-full" />}
                                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300 rounded-full" />
                            </Link>)
                        })}
                    </nav>

                    {/* Auth */}
                    <div className="hidden md:flex items-center gap-3">
                        {!isAuthenticated ? (
                            <button onClick={() => setIsAuthOpen(true)}
                                className="px-5 py-2.5 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-all hover:scale-105 cursor-pointer active:scale-95">
                                Get Started
                            </button>
                        ) : (
                            <div className="relative" id="user-drop-btn">
                                <button onClick={() => setUserDropOpen((v) => !v)}
                                    className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
                                    <div className="w-8 h-8 rounded-lg bg-black text-white text-sm font-bold flex items-center justify-center">
                                        {user?.name?.charAt(0).toUpperCase()}
                                    </div>
                                    <div className="text-left hidden sm:block">
                                        <p className="text-sm font-semibold leading-none">{user?.name}</p>
                                        <p className="text-xs text-gray-500 mt-0.5 truncate max-w-30">{user?.email}</p>
                                    </div>
                                    <ChevronDown size={14} className={`text-gray-500 transition-transform ${userDropOpen ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {userDropOpen && (
                                        <motion.div initial={{ opacity: 0, y: 8, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 8, scale: 0.95 }} transition={{ duration: 0.15 }}
                                            className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden z-50">

                                            <button onClick={() => { handleNavigate('/partner/onboarding/vehicle'); setUserDropOpen(false) }}
                                                className="relative w-full px-4 py-3 text-sm font-medium text-left hover:bg-green-50 h-10 transition-colors flex items-center cursor-pointer ">
                                                    <div className='absolute top-3 left-2 w-5 h-5 flex items-center justify-center rounded-full bg-black text-white'>
                                                        <span><Car size={14}/></span>
                                                    </div>
                                                    <div className='absolute top-3 left-5 w-5 h-5 flex items-center justify-center rounded-full bg-black text-white '>
                                                        <span><Bike size={14}/></span>
                                                    </div>
                                                    <div className='absolute top-3 left-8 w-5 h-5 flex items-center justify-center rounded-full bg-black text-white'>
                                                        <span><CarFront size={14}/></span>
                                                    </div>
                                                    <h1 className='absolute top-3 left-15'>Become a partner</h1>
                                            </button>

                                            <div className="border-t border-gray-100" />
                                            <button onClick={() => { handleNavigate('/profile'); setUserDropOpen(false) }}
                                                className="w-full px-4 py-3 text-sm font-medium text-left hover:bg-gray-50 transition-colors">My Profile</button>
                                            <div className="border-t border-gray-100" />
                                            <button onClick={() => { handleLogout(); setUserDropOpen(false) }}
                                                className="w-full px-4 py-3 text-sm font-medium text-left text-red-600 hover:bg-red-50 transition-colors">Logout</button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )}
                    </div>

                    {/* Mobile hamburger */}
                    <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg">
                        <div className="px-5 py-4 flex flex-col gap-1">
                            {NAV_LINKS.map((l, idx) => (
                                <Link key={idx} href={l.href} onClick={() => setMenuOpen(false)}
                                    className="py-3 px-3 text-sm font-semibold text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-colors">
                                    {l.label}
                                </Link>
                            ))}
                            <div className="pt-3 border-t border-gray-100 mt-2">
                                {!isAuthenticated ? (
                                    <button onClick={() => { setIsAuthOpen(true); setMenuOpen(false) }}
                                        className="w-full py-3 bg-black text-white text-sm font-semibold rounded-xl">Get Started</button>
                                ) : (
                                    <div className="space-y-1">
                                        <button onClick={() => { handleNavigate('/partner/dashboard/vehicle'); setMenuOpen(false) }}
                                            className="w-full py-3 px-3 text-sm font-semibold text-left hover:bg-gray-50 rounded-lg">Dashboard</button>
                                        <button onClick={() => { handleLogout(); setMenuOpen(false) }}
                                            className="w-full py-3 px-3 text-sm font-semibold text-left text-red-600 hover:bg-red-50 rounded-lg">Logout</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
        </header>
    )
}

export default Navbar