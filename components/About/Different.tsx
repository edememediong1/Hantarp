import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import Image from 'next/image'


function Different() {
  return (
    <div className='bg-[#004A61] flex flex-col md:flex-row justify-between p-4 md:p-8 gap-6'>
        <article className="lg:h-[400px] flex flex-col justify-center gap-4 md:gap-8 w-full  " >
            <h2 className="font-bold text-[#FFD488] text-[1.7rem] md:text-4xl tracking-tight">Why we&apos;re different</h2>
            <p className="text-[16px] text-justify md:text-xl text-white lg:w-[70%]">At HanTarp LLC, we don&apos;t wait for your systems to fail - our proactive monitoring and expert team identify and resolve IT issues before they can disrupt your business. While most IT providers operate in &apos;break-fix&apos; mode, we&apos;ve built our entire service model around prevention. Using advanced AI monitoring tools and 24/7 vigilance, we catch 90% of potential problems - from server anomalies to security vulnerabilities - and address them silently in the background. </p>
            <Link href='/contact' >
                <Button className='bg-[#FFD488] p-4 rounded-2xl w-[160px] text-black hover:bg-white'>Contact Us</Button>
            </Link>
        </article>
        <div className='p-4 flex justify-center items-center'>
          <Image src="smile.svg" alt='' width={200}  height={200} className=""/>
        </div>
        
    </div>
  )
}

export default Different