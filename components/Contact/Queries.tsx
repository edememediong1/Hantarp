import React from 'react'
import Image from 'next/image'



function Queries() {
  return (
    <div className='space-y-4'>
        <p className='text-[#004A61] text-sm md:text-base'>Get in Touch</p>
        <h2 className='text-[1.7rem] md:text-4xl font-bold text-[#004A61]'>Let&apos;s Start the Conversation <br></br> We&apos;re Here to Help!</h2>
        <p className='text-sm'>Whether you have questions about our services or need technical support, our team is ready to provide personalized assistance tailored to your needs</p>
        <section className='space-y-8 mt-6'>
            <article  className='flex gap-2 items-center jus'>
                <span className='bg-[#FFDAA3] p-2 rounded-full h-[40px] w-[40px] flex justify-center items-center'>
                    <Image src='world.svg' alt='icon' width={22} height={22}/>
                </span>
                <span>
                    <p className='font-bold text-base'>Have Queries</p>
                    <p className=''>Chat with live assistant</p>
                </span>
            </article>
            <article  className='flex gap-2 items-center jus'>
                <span className='bg-[#FFDAA3] p-2 rounded-full h-[40px] w-[40px] flex justify-center items-center'>
                    <Image src='map_point.svg' alt='icon' width={22} height={22}/>
                </span>
                <span>
                    <p className='font-bold text-base'>Locate & Visit Us</p>
                    <p className=''>Texas, USA</p>
                </span>
            </article>
            <article  className='flex gap-2 items-center jus'>
                <span className='bg-[#FFDAA3] p-2 rounded-full h-[40px] w-[40px] flex justify-center items-center'>
                    <Image src='phone_icon.svg' alt='icon' width={22} height={22}/>
                </span>
                <span>
                    <p className='font-bold text-base'>Call us Anytime</p>
                    <p className=''>+958 678 5730</p>
                </span>
            </article>
            <article  className='flex gap-2 items-center jus'>
                <span className='bg-[#FFDAA3] p-2 rounded-full h-[40px] w-[40px] flex justify-center items-center'>
                    <Image src='email.svg' alt='icon' width={22} height={22}/>
                </span>
                <span>
                    <p className='font-bold text-base'>Mail Us Anytime</p>
                    <p className=''>support@hantarp.com</p>
                </span>
            </article>


        </section>
    </div>
  )
}

export default Queries