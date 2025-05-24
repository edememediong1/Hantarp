import React from 'react'
import ParallaxBackground from '@/components/parallel_background'
import Contacts from '@/components/Contact/Contacts'

function Page() {
  return (
    <div>
      <ParallaxBackground imageUrl="contact_hero.svg" height="350px">
        <div className="flex items-center justify-center  md:justify-start h-full p-8">
          <div className="max-w-xl text-center ">
            <h2 className="text-3xl font-bold mb-4 text-[#FFDAA3]">Contact Us</h2>
            <p className="text-base text-[#FFDAA3]">
              Home &gt; Contact Us
            </p>
          </div>
        </div>
      </ParallaxBackground>
      <Contacts/>
    </div>
  )
}

export default Page