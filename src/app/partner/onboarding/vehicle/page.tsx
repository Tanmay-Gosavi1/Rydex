'use client'
import {motion } from 'framer-motion'
import { ArrowBigLeft, BatteryCharging, Bike, Car, CarFront, Crown } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const VEHICLE_TYPES = [
  { label: 'Mini', value: 'mini', logo: Car },
  { label: 'Sedan', value: 'sedan', logo: Car },
  { label: 'Prime Sedan', value: 'prime_sedan', logo: Car },
  { label: 'SUV', value: 'suv', logo: CarFront },
  { label: 'Prime SUV', value: 'prime_suv', logo: CarFront }, // fallback if custom, lucide doesn't have exact
  { label: 'Bike', value: 'bike', logo: Bike },
  { label: 'E-Bike', value: 'ebike', logo: Bike },
  { label: 'Electric Car', value: 'electric', logo: BatteryCharging },
  { label: 'Luxury', value: 'luxury', logo: Crown },
];


const Page = () => {
  const router = useRouter() ;
  const [vehicleType , setVehicleType] = useState(VEHICLE_TYPES[0].value);
  const [vehicleNumber , setVehicleNumber] = useState('');
  const [vehicleModel , setVehicleModel] = useState('');    


  return (
    <div className='min-h-screen flex items-center justify-center'>
        <motion.div 
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className='w-full max-w-xl shadow-lg shadow-black/20 flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-200'>
            <div className='relative w-full flex flex-col items-center justify-center '>
                <span 
                    onClick={() => router.push('/')}
                    className='absolute top-0 left-0 p-2 rounded-full flex items-center justify-center border border-gray-400 w-8 h-8 cursor-pointer hover:bg-gray-100 transition-all duration-200'>
                    <ArrowBigLeft className='text-gray-500'/>
                </span>

                <h1 className='text-xs text-gray-500'>Step 1 of 3</h1>
                <h1 className='text-lg font-semibold tracking-wide'>Vehicle Details</h1>
                <p className='text-xs text-gray-600 tracking-wide'>Add your vehicle information</p>
            </div>

            {/* Form */}
            <div className='my-3'>
                {/* Vehicle Type */}
                <div className='my-2'>
                    <h1 className='text-base font-medium mb-1'>Vehicle Type</h1>
                    <div className='flex gap-2 flex-wrap'>
                        {VEHICLE_TYPES.map((type , idx) => {
                            const isSelected = vehicleType === type.value;
                            return (
                                <div key={idx} 
                                    className={`border ${isSelected ? 'bg-black text-white' : ''} border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:shadow-md w-24 h-22 transition-all duration-200`}
                                    onClick={() => setVehicleType(type.value)}
                                >
                                    <type.logo size={20}/>
                                    <p className='text-sm font-medium'>{type.label}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Vehicle Number */}
                <div className='my-4 '>
                    <h1 className='text-base font-medium mb-1'>Vehicle Number
                        <span className='text-red-500 text-xs absolute'>*</span>
                    </h1>
                    <input required type='text' value={vehicleNumber} onChange={(e) => setVehicleNumber(e.target.value)} placeholder='Enter your vehicle number' className='w-full text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-200'/>
                </div>

                {/* Vehicle Model */}
                <div className=''>
                    <h1 className='text-base font-medium mb-1'>Vehicle Model
                        <span className='text-red-500 text-xs absolute'>*</span>
                    </h1>
                    <input required type='text' value={vehicleModel} onChange={(e) => setVehicleModel(e.target.value)} placeholder='Enter your vehicle model' className='w-full text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-200'/>
                </div>
            </div>

            <button
                onClick={() => router.push('/partner/onboarding/document')}
                className='w-full py-3 text-white bg-black rounded-2xl hover:scale-105 transition-all duration-200 cursor-pointer mt-5'
            >Continue
            </button>
        </motion.div>
    </div>
  )
}

export default Page