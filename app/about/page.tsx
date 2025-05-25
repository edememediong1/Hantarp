import React from 'react'
import ParallaxBackground from '@/components/parallel_background'
import Mission from '@/components/About/Mission'
import Different from '@/components/About/Different'
import Businesses from '@/components/About/Businesses'
import FeatureListDemo from '@/components/About/FeatureListDemo'

function Page() {
  return (
    <div>
      <ParallaxBackground imageUrl="about_hero.svg" height="350px">
        <div className="flex items-center justify-center  md:justify-start h-full p-8">
          <div className="max-w-xl text-center ">
            <h2 className="text-3xl font-bold mb-4 text-[#FFDAA3]">About Us</h2>
            <p className="text-base text-[#FFDAA3]">
              Home &gt; About us
            </p>
          </div>
        </div>
      </ParallaxBackground>
      <Mission/>
      <Different/>
      <Businesses/>
      <FeatureListDemo/>
    </div>
  )
}

export default Page