"use client"

import Image from 'next/image'

import HeroSection from '@/components/HeroSection'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'



export default function Home() {
  return (
  <>
   <HeroSection />
   <Features />
   <Testimonials />
   
  </>
  )
}
