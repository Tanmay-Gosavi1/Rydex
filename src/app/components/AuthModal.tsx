'use client'
import axios from 'axios'
import { motion , AnimatePresence } from 'framer-motion'
import { Lock, Mail, User, X } from 'lucide-react'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'


type propType =  {
    isOpen : boolean ,
    onClose : ()=>void
}

type stepType = "login" | "signup" | "otp" ;

const AuthModal = ({isOpen , onClose} : propType) => {
  const router = useRouter();
  const [step , setStep] = useState<stepType>("login");
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [username , setUserName] = useState('');
  const [loading , setLoading] = useState(false);
  const [err , setErr] = useState('');

  const handleSignup = async () => {
    setErr('');
    const payload = { username , email, password };
    setLoading(true);
    try {
      const res = await axios.post('/api/auth/register' , payload);
      if(res.data.success){
        const loginRes = await signIn('credentials' , { email, password, redirect: false });
        if(loginRes?.error){
          setErr(loginRes.error);
          return;
        }
        router.refresh();
        onClose();
      }

    } catch (error: unknown) {
      console.error(error);
      if (axios.isAxiosError(error)) {
        setErr(error.response?.data?.error || 'An error occurred during signup');
      } else {
        setErr('An error occurred during signup');
      }
    }finally {
      setLoading(false);
    }
  }

  const handleLogin = async () => {
    setErr('');
    setLoading(true);
    const res = await signIn('credentials' , { email, password, redirect: false })
    if(res?.error){
      setErr(res.error);
    } else {
      router.refresh();
      onClose();
    }
    setLoading(false);
  }

  const handleGoogleLogin = async () => {
    setLoading(true);
    await signIn('google', { callbackUrl: '/' });
    setLoading(false);
  }

  return (
    <AnimatePresence>
    {isOpen && (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-90"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{duration : 0.45 , ease : 'easeInOut'}}
            className='fixed inset-0 flex items-center justify-center z-99'
          >
            <div className='relative rounded-2xl bg-white p-6 sm:p-8 w-full max-w-md border border-gray-200 text-black' 
              onClick={(e) => e.stopPropagation()}>
              {/* X div */}
              <div className='absolute top-5 right-5 text-gray-600 cursor-pointer transition-all hover:text-gray-900'
                onClick={onClose}>
                <X />
              </div>

              {/* Content */}
              <div className='flex flex-col items-center justify-center'>
                <h1 className='text-2xl uppercase font-bold mb-1 tracking-widest'>
                  Rydex
                </h1>
                <p className='text-md text-gray-600'>
                  Premium vehicle booking
                </p>
              </div>

              {/* OAuth */}
              <div>
                <button className='w-full text-sm mt-6 px-4 py-2 bg-black text-white rounded-lg hover:scale-105 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2' 
                  onClick={handleGoogleLogin}>
                  <Image src='/google.png' alt='Google' width={14} height={14}/>
                  Continue with Google
                </button>
              </div>

              {/* Line divider */}
              <div className='flex items-center justify-center gap-4 py-6'>
                <div className='bg-gray-500 w-full h-[0.1]'/>
                <p className='text-xs text-gray-500'>OR</p>
                <div className='bg-gray-500 w-full h-[0.1]'/>
              </div>

              {/* Form */}
              <div>
                {/* /Login */}
                {step === 'login' && (
                  <motion.div
                    initial={{ opacity: 0, x:30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, ease: 'easeInOut' }}
                    className='flex flex-col items-center justify-center gap-3'>
                      <h1 className='text-center font-medium mb-3'>Welcome back</h1>
                      <div className='w-full border border-gray-300 rounded-lg px-3 py-2 flex items-center gap-3'>
                        <Mail size={18} className='text-gray-400'/>
                        <input type='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} className='w-full outline-none text-gray-500 text-sm font-medium'/>
                      </div>
                      <div className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black flex items-center gap-3'>
                        <Lock size={18} className='text-gray-400'/>
                        <input type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} className='w-full outline-none text-gray-500 text-sm font-medium'/>
                      </div>
                      {err && (
                        <div className='w-full bg-red-100 text-red-500 text-sm px-3 py-2 rounded-lg mt-2 border-dashed border border-red-400 flex items-center justify-center'>
                          {err}
                        </div>
                      )}
                      <button className='w-full text-sm mt-2 px-4 py-2 bg-black text-white rounded-lg hover:scale-105 transition-all duration-200 cursor-pointer disabled:bg-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50' 
                        onClick={handleLogin} disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                      </button>
                      <p className='text-xs text-gray-500 mt-4'>Don&#39;t have an account? <span className='text-black font-medium cursor-pointer text-sm hover:underline transition-all duration-200' 
                        onClick={() => setStep('signup')}>Sign up</span></p>
                  </motion.div>
                )}

                {/* /Signup */}
                {step === 'signup' && (
                  <motion.div
                    initial={{ opacity: 0, x:30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, ease: 'easeInOut' }}
                    className='flex flex-col items-center justify-center gap-3'>
                      <h1 className='text-center mb-3 font-medium'>Create an account</h1>
                      <div className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black flex items-center gap-3'>
                        <User size={18} className='text-gray-400'/>
                        <input type='text' placeholder='Enter your name' value={username} onChange={(e) => setUserName(e.target.value)} className='w-full outline-none text-gray-500 text-sm font-medium'/>
                      </div>
                      <div className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black flex items-center gap-3'>
                        <Mail size={18} className='text-gray-400'/>
                        <input type='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} className='w-full outline-none text-gray-500 text-sm font-medium'/>
                      </div>
                      <div className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black flex items-center gap-3'>
                        <Lock size={18} className='text-gray-400'/>
                        <input type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} className='w-full outline-none text-gray-500 text-sm font-medium'/>
                      </div>

                      {err && (
                        <div className='w-full bg-red-100 text-red-500 text-sm px-3 py-2 rounded-lg mt-2 border-dashed border border-red-400 flex items-center justify-center'>
                          {err}
                        </div>
                      )}

                      <button className='w-full text-sm mt-2 px-4 py-2 bg-black text-white rounded-lg hover:scale-105 transition-all duration-200 cursor-pointer disabled:bg-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50' 
                        disabled={loading} onClick={handleSignup}>
                        {loading ? 'Signing up...' : 'Sign up'}
                      </button>
                      <p className='text-xs text-gray-500 mt-4'>Already have an account? <span className='text-black font-medium cursor-pointer text-sm hover:underline transition-all duration-200' 
                        onClick={() => setStep('login')}>Login </span></p>
                  </motion.div>
                )}
              </div>

            </div>

          </motion.div>
        </motion.div>
      </>
    )}
    </AnimatePresence>
  )
}

export default AuthModal