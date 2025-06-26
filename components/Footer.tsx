import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
    const whatsappNumber = "+18328766234"
    const whatsappMessage = "Hello Hantarp! I'm interested in your services.\nHere's what I want..."
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  return (
    <footer className='bg-[#004A61] lg:h-[80vh] text-white grid grid-cols-1  justify-around p-4 md:p-8 items-center gap-8'>
        <section className='grid grid-cols-1 lg:grid-cols-6  gap-8 justify-center w-full items-baseline'>
            <article className='col-span-2'>
                <h2 className='text-2xl md:text-3xl font-bold mb-3 '>HanTarp LLC</h2>
                <p className='text-[14px] tracking-tighter md:text-justify'>HanTarp LLC is a proactive managed IT services provider (MSP) specializing in secure, scalable solutions for businesses. We eliminate downtime through 24/7 monitoring, enterprise-grade cybersecurity, and strategic cloud consulting—so you can focus on growth without tech disruptions.</p>
            </article>
            <article className='col-span-2 lg:col-span-1 flex flex-col gap-4 text-[14px] w-full lg:pl-4'>
                <Link href='/'>Home</Link>
                <Link href='/about'>About Us</Link>
                <Link href='/services'>Service</Link>
                <Link href='/contact'>Contact</Link>
            </article>
            <section className='col-span-2 lg:col-span-1 text-[14px]'>
                <p className='text-xl font-bold mb-3 text-[#FFD488]'>Head Office</p>
                <p className='text-[14px] tracking-tighter '>7322 Southwest Fwy, Houston, TX 77074, USA</p>
            </section>
            <article className='col-span-2 lg:col-span-1'>
                <p className='text-[14px]'>Mobile: +1 (832) 876-6234</p>
            </article>
            <p className='text-[14px] col-span-2 lg:col-span-1'>support@hantarp.com</p>
        </section>
        <section>
            <div className='flex gap-4'>
                <Link href='https://www.linkedin.com/company/hantarp/'>
                    <Image src='linkedin.svg' alt='' width={20} height={20}/>
                </Link>
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className='cursor-pointer'>
                    <Image src='whatsapp.svg' alt="whatsapp logo" width={18} height={18} className=''/>
                </Link>
                <Link href='https://www.linkedin.com/company/hantarp/'>
                    <Image src='instagram.svg' alt='' width={20} height={20}/>
                </Link>
                <Link href='https://www.linkedin.com/company/hantarp/'>
                    <Image src='facebook.svg' alt='' width={20} height={20}/>
                </Link>
                <Link href='https://www.linkedin.com/company/hantarp/'>
                    <Image src='twitter.svg' alt='' width={20} height={20}/>
                </Link>
            </div>
        </section>
    </footer>
  )
}

export default Footer