'use client'
import {motion } from 'framer-motion'
import { ArrowBigLeft, CloudUpload, Quote } from 'lucide-react'
import { useRouter } from 'next/navigation'



const Page = () => {
  const router = useRouter() ;
  


  return (
    <div className='min-h-screen flex items-center justify-center'>
        <motion.div 
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className='w-full max-w-xl shadow-lg shadow-black/20 flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-200'>
            <div className='relative w-full flex flex-col items-center justify-center '>
                <span 
                    onClick={() => router.push('/partner/onboarding/vehicle')}
                    className='absolute top-0 left-0 p-2 rounded-full flex items-center justify-center border border-gray-400 w-8 h-8 cursor-pointer hover:bg-gray-100 transition-all duration-200'>
                    <ArrowBigLeft className='text-gray-500'/>
                </span>

                <h1 className='text-xs text-gray-500'>Step 2 of 3</h1>
                <h1 className='text-lg font-semibold tracking-wide'>Upload Documents</h1>
                <p className='text-xs text-gray-600 tracking-wide'>Required for verification</p>
            </div>

            {/* Form */}
            <div className='my-3 space-y-5 w-full'>

                {/* Aadhar */}
                <div className='flex items-center justify-between hover:bg-gray-100 hover:shadow-lg shadow-gray-200 hover:cursor-pointer transition-all duration-200 w-full border-dashed border-2 border-black/80 rounded-lg p-3'>
                    <div className='flex flex-col '>
                        <h1 className='text-md font-semibold'>
                            Aadhar / ID Proof
                            <span className='text-red-500 text-xs absolute'>*</span>
                        </h1>
                        <p className='text-sm text-gray-600'>Government ID</p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <span className='text-sm text-gray-600'>Upload</span>
                        <div className='w-9 h-9 text-white bg-black rounded-full flex items-center justify-center  hover:scale-105 cursor-pointer transition-all duration-200'>
                            <CloudUpload size={17}/>
                        </div>
                    </div>
                </div>
                {/* Driving License */}
                <div className='flex items-center justify-between hover:bg-gray-100 hover:shadow-lg shadow-gray-200 hover:cursor-pointer transition-all duration-200 w-full border-dashed border-2 border-black/80 rounded-lg p-3'>
                    <div className='flex flex-col '>
                        <h1 className='text-md font-semibold'>
                            Driving License
                            <span className='text-red-500 text-xs absolute'>*</span>
                        </h1>
                        <p className='text-sm text-gray-600'>Valid government-issued license</p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <span className='text-sm text-gray-600'>Upload</span>
                        <div className='w-9 h-9 text-white bg-black rounded-full flex items-center justify-center  hover:scale-105 cursor-pointer transition-all duration-200'>
                            <CloudUpload size={17}/>
                        </div>
                    </div>
                </div>

                {/* Rc Certi */}
                <div className='flex items-center justify-between hover:bg-gray-100 hover:shadow-lg shadow-gray-200 hover:cursor-pointer transition-all duration-200 w-full border-dashed border-2 border-black/80 rounded-lg p-3'>
                    <div className='flex flex-col '>
                        <h1 className='text-md font-semibold'>
                            Vehicle RC
                            <span className='text-red-500 text-xs absolute'>*</span>
                        </h1>
                        <p className='text-sm text-gray-600'>Vehicle Registration Certificate</p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <span className='text-sm text-gray-600'>Upload</span>
                        <div className='w-9 h-9 text-white bg-black rounded-full flex items-center justify-center  hover:scale-105 cursor-pointer transition-all duration-200'>
                            <CloudUpload size={17}/>
                        </div>
                    </div>
                </div>

            </div>

            <div className='text-xs text-gray-500 flex items-center gap-1'>
                <Quote size={12}/>
                Documents are secured stored & manually verified by our team.
            </div>

            <button
                onClick={() => router.push('/partner/onboarding/bank')}
                className='w-full py-3 text-white bg-black rounded-2xl hover:scale-105 transition-all duration-200 cursor-pointer mt-5'
            >Continue
            </button>
        </motion.div>
    </div>
  )
}

export default Page