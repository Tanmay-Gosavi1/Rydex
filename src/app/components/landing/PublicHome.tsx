'use client'
import Hero from './Hero'
import VehicleSlider from '../VehicleSlider'
import AuthModal from '../AuthModal'
import { useState } from 'react'


const PublicHome = () => {
    const [isAuthOpen , setIsAuthOpen] = useState(false);
  return (
    <div>
        <Hero openAuth={()=>setIsAuthOpen(true)} />
        {/* <section id='bookings'>
            <VehicleSlider />
        </section> */}
        <section id='about' className='h-0' />
        <section id='contact' className='h-0' />
        <AuthModal isOpen={isAuthOpen} onClose={()=>setIsAuthOpen(false)}/>
    </div>
  )
}

export default PublicHome