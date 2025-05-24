import React from 'react'
import Image from 'next/image'

function Tailored() {
  return (
    <div className='px-4 py-8 md:p-8 space-y-4'>
        <section className='space-y-2'>
            <h2 className='font-bold text-[1.5rem] tracking-tighter text-[#004A61]'>Managed IT Services Tailored to Your Business</h2>
            <p className='text-[14px] md:text-[18px] md:w-[80%]'>Proactive, Secure, and Scalable Solutions That Keep Your Operations Running 24/7</p>
        </section>
        <div className='grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4  h-full gap-6'>
            <article className='relative h-[350px]'>
                <Image 
                src={'service1.svg'} 
                unoptimized 
                fill
                alt='time' 
                className="object-cover"
                />
                <p className='absolute bottom-0 bg-[rgb(7,38,48)] p-4 text-white w-full sm:w-[70%]'>
                    24/7 Managed IT Support
                </p>
            </article>
            <article className='relative h-[350px]'>
                <Image
                    src={'service2.svg'}
                    fill
                    unoptimized
                    alt='flat-rate'
                    className='object-cover' 
                />
                <p className='absolute bottom-0 bg-[rgb(7,38,48)] p-4 text-white w-full sm:w-[70%]'>
                    Cybersecurity & Compliance
                </p>
            </article>
            <article className='relative h-[350px]'>
                <Image
                    src={'service3.svg'}
                    fill
                    unoptimized
                    alt='flat-rate'
                    className='object-cover' 
                />
                <p className='absolute bottom-0 bg-[rgb(7,38,48)] p-4 text-white w-full sm:w-[70%]'>
                    Cloud & Hybrid IT Solutions
                </p>
            </article>
            <article className='relative h-[350px]'>
                <Image
                    src={'service4.svg'}
                    fill
                    unoptimized
                    alt='flat-rate'
                    className='object-cover' 
                />
                <p className='absolute bottom-0 bg-[rgb(7,38,48)] p-4 text-white w-full sm:w-[70%]'>
                    Strategic IT Consulting
                </p>
            </article>
        </div>
    </div>
  )
}

export default Tailored