import React from 'react'
import ParallaxBackground from '@/components/parallel_background'
import Tailored from '@/components/Services/Tailored'
import Core_Services from '@/components/Services/Core_Services'

function Page() {
  return (
    <div>
      <ParallaxBackground imageUrl="service_hero.svg" height="350px">
        <div className="flex items-center justify-center  md:justify-start h-full p-8">
          <div className="max-w-xl text-center ">
            <h2 className="text-3xl font-bold mb-4 text-[#FFDAA3]">Services</h2>
            <p className="text-base text-[#FFDAA3]">
              Home &gt; Services
            </p>
          </div>
        </div>
      </ParallaxBackground>
      <Tailored/>
      <Core_Services/>
    </div>
  )
}

export default Page