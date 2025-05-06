import React from 'react'
import Image from 'next/image'

function Why() {
  return (
    <div className='flex flex-col md:flex-row justify-between bg-[#FFDDA3] text-white'>
        <section className='w-full lg:w-4/5 flex flex-col gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 p-4 sm:p-6 md:p-8'>
            <div>
                <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold text-[#004A61] mb-2'>Why Choose HanTarp</h2>
                <p className=' text-[14px] tracking-tighter w-full text-justify md:text-[18px] lg:text-xl font-medium text-black lg:w-[70%]'>We deliver stress-free IT management—proactive monitoring, enterprise security, and scalable solutions—so your business runs seamlessly while you focus on growth.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 justify-between'>
                <article className='flex flex-col gap-4 w-full border border-neutral-200 rounded-md p-4 lg:w-[420px] hover:bg-[#FFE1B6] '>
                    <div className='flex justify-between gap-4'>
                        <Image src={"24h.svg"} alt='24h icon' width={55} height={55} className=''/>
                        <h2 className='text-[5rem] font-bold text-black opacity-10'>01</h2>
                    </div>
                    <p className='text-[#004A61] font-bold tracking-tighter text-xl'>24/7 Proactive Monitoring 
                    & Support</p>
                    <p className='text-[14px] tracking-tight text-black md:text-[16px]'>Our team detects and resolves issues before
                    they impact your operations.</p>
                </article>
                <article className='flex flex-col gap-4 w-full border border-neutral-200 rounded-md p-4 lg:w-[420px] hover:bg-[#FFE1B6] '>
                    <div className='flex justify-between gap-4'>
                        <Image src={"lockandkey.svg"} alt='icon' width={55} height={55} className=''/>
                        <h2 className='text-[5rem] font-bold text-black opacity-10'>02</h2>
                    </div>
                    <p className='text-[#004A61] font-bold tracking-tighter text-xl'>Enterprise-Grade Cybersecurity</p>
                    <p className='text-[14px] tracking-tight text-black md:text-[16px]'> Protect your data with advanced threat detection,
                    firewalls, and compliance solutions.</p>
                </article>
                <article className='flex flex-col gap-4 w-full border border-neutral-200 rounded-md p-4 lg:w-[420px] hover:bg-[#FFE1B6] '>
                    <div className='flex justify-between gap-4'>
                        <Image src={"cloud.svg"} alt='24h icon' width={55} height={55} className=''/>
                        <h2 className='text-[5rem] font-bold text-black opacity-10'>03</h2>
                    </div>
                    <p className='text-[#004A61] font-bold tracking-tighter text-xl'>Custom Cloud & Hybrid IT Solutions</p>
                    <p className='text-[14px] tracking-tight text-black md:text-[16px]'>Optimized for performance, cost, 
                    and scalability.</p>
                </article>
                <article className='flex flex-col gap-4 w-full border border-neutral-200 rounded-md p-4 lg:w-[420px] hover:bg-[#FFE1B6] '>
                    <div className='flex justify-between gap-4'>
                        <Image src={"it_support.svg"} alt='24h icon' width={55} height={55} className=''/>
                        <h2 className='text-[5rem] font-bold text-black opacity-10'>04</h2>
                    </div>
                    <p className='text-[#004A61] font-bold tracking-tighter text-xl'>Dedicated IT Experts</p>
                    <p className='text-[14px] tracking-tight text-black md:text-[16px]'>No outsourced call centers; real engineers who 
                    understand your business.</p>
                </article>


            </div>
        </section>
        <section className='relative lg:w-1/5 flex items-end justify-center '>
            <Image src={"why-addon.svg"} alt="why image" width={170} height={100} className='hidden lg:block object-cover ' />
        </section>
        
    </div>
  )
}

export default Why