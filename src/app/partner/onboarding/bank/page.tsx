'use client'
import {motion } from 'framer-motion'
import { ArrowBigLeft, Banknote, Code, IdCard, Phone, Quote, User } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'



const Page = () => {
  const router = useRouter() ;
  const [accountHolderName , setAccountHolderName] = useState('');
  const [bankAccountNumber , setBankAccountNumber] = useState('');
  const [ifscCode , setIfscCode] = useState('');
  const [mobileNumber , setMobileNumber] = useState('');
  const [upiId , setUpiId] = useState('');
  


  return (
    <div className='min-h-screen flex items-center justify-center'>
        <motion.div 
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className='w-full max-w-xl shadow-lg shadow-black/20 flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-200'>
            <div className='relative w-full flex flex-col items-center justify-center '>
                <span 
                    onClick={() => router.push('/partner/onboarding/document')}
                    className='absolute top-0 left-0 p-2 rounded-full flex items-center justify-center border border-gray-400 w-8 h-8 cursor-pointer hover:bg-gray-100 transition-all duration-200'>
                    <ArrowBigLeft className='text-gray-500'/>
                </span>

                <h1 className='text-xs text-gray-500'>Step 3 of 3</h1>
                <h1 className='text-lg font-semibold tracking-wide'>Bank & Payout Setup</h1>
                <p className='text-xs text-gray-600 tracking-wide'>Used for partner payouts</p>
            </div>

            {/* Form */}
            <div className='my-3 space-y-5 w-full'>

                <div className='mb-5'>
                    <label htmlFor="ahn" className='text-md font-medium'>
                    Account Holder Name
                    <span className='text-red-500 text-xs absolute'>*</span> 
                    </label>
                    <div className='flex items-center gap-2'>
                        <div className='w-9 h-9 rounded-full bg-black text-white flex items-center justify-center p-1'>
                            <User size={18} />
                        </div>
                        <input 
                            type="text" 
                            id='ahn' 
                            placeholder='Name as per bank records' 
                            className='w-full text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/50 transition-all duration-200'
                            value={accountHolderName}
                            onChange={(e) => setAccountHolderName(e.target.value)}
                        />
                    </div>
                </div>

                <div className='mb-5'>
                    <label htmlFor="ban" className='text-md font-medium'>
                    Bank Account Number 
                    <span className='text-red-500 text-xs absolute'>*</span>
                    </label>
                    <div className='flex items-center gap-2'>
                        <div className='w-9 h-9 rounded-full bg-black text-white flex items-center justify-center p-1'>
                            <Banknote size={18} />
                        </div>
                        <input 
                            type="text" 
                            id='ban' 
                            placeholder='Bank account number' 
                            className='w-full text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/50 transition-all duration-200'
                            value={bankAccountNumber}
                            onChange={(e) => setBankAccountNumber(e.target.value)}
                        />  
                    </div>
                </div>

                <div className='mb-5'>
                    <label htmlFor="ifsc" className='text-md font-medium'>
                    IFSC Code 
                    <span className='text-red-500 text-xs absolute'>*</span>
                    </label>
                    <div className='flex items-center gap-2'>
                        <div className='w-9 h-9 rounded-full bg-black text-white flex items-center justify-center p-1'>
                            <Code size={18} />
                        </div>
                        <input 
                            type="text" 
                            id='ifsc' 
                            placeholder='IFSC code' 
                            className='w-full text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/50 transition-all duration-200'
                            value={ifscCode}
                            onChange={(e) => setIfscCode(e.target.value)}
                        />
                    </div>
                </div>

                <div className='mb-5'>
                    <label htmlFor="mobile" className='text-md font-medium'>
                    Mobile Number 
                    <span className='text-red-500 text-xs absolute'>*</span>
                    </label>
                    <div className='flex items-center gap-2'>
                        <div className='w-9 h-9 rounded-full bg-black text-white flex items-center justify-center p-1'>
                            <Phone size={18} />
                        </div>
                        <input 
                            type="text" 
                            id='mobile' 
                            placeholder='Mobile number' 
                            className='w-full text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/50 transition-all duration-200'
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                        />
                    </div>
                </div>

                <div className='mb-2'>
                    <label htmlFor="upi" className='text-md font-medium'>
                    UPI ID (Optional) 
                    </label>
                    <div className='flex items-center gap-2'>
                        <div className='w-9 h-9 rounded-full bg-black text-white flex items-center justify-center p-1'>
                            <IdCard size={18} />
                        </div>
                        <input 
                            type="text" 
                            id='upi' 
                            placeholder='UPI ID' 
                            className='w-full text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/50 transition-all duration-200'
                            value={upiId}
                            onChange={(e) => setUpiId(e.target.value)}
                        />
                    </div>
                </div>

            </div>

            <div className='text-xs text-gray-500 flex items-center gap-1'>
                <Quote size={12}/>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe esse in ab et quam! Consectetur.
            </div>

            <button
                className='w-full py-3 text-white bg-black rounded-2xl hover:scale-105 transition-all duration-200 cursor-pointer mt-5'
            >Continue
            </button>
        </motion.div>
    </div>
  )
}

export default Page