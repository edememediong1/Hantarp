import React from 'react'
import Image from 'next/image'

function Mission() {
  return (
    <div className='md:p-8 p-4 lg:h-screen flex flex-col justify-center gap-8'>
        <section className='flex flex-col gap-4 '>
            <span>
                <h2 className='text-[#004A61] font-bold text-xl'>HanTarp LLC began with a simple mission: </h2>
                <p className='text-[#004A61] font-medium'>To deliver enterprise-grade IT solutions without the enterprise complexity. </p>
            </span>
            <p className='tracking-tighter'>What started as a team of 3 engineers passionate about preventing IT disasters 
has grown into a fully remote MSP serving several clients across</p>
        </section>

        <section className='grid w-full  grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='relative h-[250px]'>
              <Image src='mission1.svg' alt='' fill unoptimized className='object-cover '/>
            </div>
            <div className='relative h-[250px]'>
              <Image src='mission2.svg' alt='' fill unoptimized className='object-cover'/>
            </div>
            <div className='relative h-[250px]'>
              <Image src='mission3.svg' alt='' fill unoptimized className='object-cover'/>
            </div>
          </section>
    </div>
  )
}

export default Mission