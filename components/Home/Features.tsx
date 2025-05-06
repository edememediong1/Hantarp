import React from 'react'
import Link from 'next/link'
import Image from 'next/image'  
import { Button } from '../ui/button'


function Features() {
  return (
    <div className='bg-[#004A61] p-4 md:p-8 space-y-8'>
        <section className='flex flex-col md:flex-row'>
            <article className="h-[400px] flex flex-col justify-center gap-8 w-full md:w-1/2 " >
                <h2 className="font-bold text-[#FFD488] text-4xl">Key Features</h2>
                <p className="text-[18px] md:text-xl text-white lg:w-[70%]">We deliver enterprise-grade IT solutions that work tirelessly in the background. so your business stays secure, efficient, and always ahead.</p>
                <Link href='/contact' >
                    <Button className='bg-[#FFD488] p-4 rounded-2xl w-[160px] text-black'>Discover More</Button>
                </Link>
            </article>
            <div className='grid w-full grid-cols-1 md:grid-cols-2 md:w-1/2 h-full gap-4'>
                <article className='relative h-[400px]'>
                    <Image 
                    src={'time.svg'} 
                    unoptimized 
                    fill
                    alt='time' 
                    className="object-cover"
                    />
                    <p className='absolute bottom-0 bg-[rgb(7,38,48)] p-6 text-white w-[70%]'>
                        24/7 Proactive Monitoring 
                    </p>
                </article>
                <article className='relative h-[400px]'>
                    <Image
                        src={'flat-rate.svg'}
                        fill
                        unoptimized
                        alt='flat-rate'
                        className='object-cover' 
                    />
                    <p className='absolute bottom-0 bg-[rgb(7,38,48)] p-6 text-white w-[70%]'>
                        Flat-Rate Pricing 
                        with Zero Surprises
                    </p>
                </article>
            </div>
        </section>
        <section className='grid w-full grid-cols-1 md:grid-cols-3 h-full gap-4'>
            <article className='relative h-[325px]'>
                <Image 
                src={'pic1.svg'} 
                unoptimized 
                fill
                alt='pic1'
                className="object-cover"
                />
                <p className='absolute bottom-0 bg-[rgb(7,38,48)] p-6 text-white w-[70%]'>
                    Industry-Tailored IT Solutions
                </p>
            </article>
            <article className='relative h-[325px]'>
                <Image
                    src={'pic2.svg'}
                    fill
                    unoptimized
                    alt='pic2'
                    className='object-cover' 
                />
                <p className='absolute bottom-0 bg-[rgb(7,38,48)] p-6 text-white w-[70%]'>
                    Rapid Response Guarantee
                </p>
            </article>
            <article className='relative h-[325px]'>
                <Image
                    src={'pic3.svg'}
                    fill
                    unoptimized
                    alt='pic3'
                    className='object-cover' 
                />
                <p className='absolute bottom-0 bg-[rgb(7,38,48)] p-6 text-white w-[70%]'>
                    Cybersecurity That Adapts
                </p>
            </article>
        </section>
    </div>
  )
}

export default Features