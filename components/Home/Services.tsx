import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'

function Services() {
  return (
    <div >
        <section className='flex justify-between w-screen h-[350px] items-center'>
            <article className='flex flex-col gap-4 w-full md:w-3/5 lg:w-1/2 md:p-8 lg:pl-14 p-4'>
                <h2 className='text-4xl font-bold '>Our Services</h2>
                <p className=' text-[18px] md:text-xl font-medium md:w-[95%] lg:w-[70%] tracking-tighter'>End-to-End IT Infrastructure Management for Uninterrupted Business Operations</p>
                <Button className='bg-[#FFD488] p-4 rounded-2xl w-[160px] text-black'>
                    <Link href={'/contact'}>Discover More</Link>
                </Button>
            </article>
            <Image
                src={'service-addon.svg'}
                alt='addon image'
                width={500}
                height={100}
                className='hidden md:block w-2/5'
             /> 
        </section>
        <section className=' grid grid-cols-1 md:grid-cols-2 md:gap-12 p-4 md:p-8 text-white'>
          <article className='relative h-[370px] gap-4 '>
            <Image src={'bgcard_1.svg'} alt='' fill className='object-cover '/>
            <div className='absolute top-0 bottom-0 left-0 w-full h-full bg-black/30 flex flex-col gap-4 p-8'>
              <h2 className="text-2xl font-bold text-[#FFDAA3]">Managed IT Services</h2>
              <div>
                <h3 className='font-bold'>24/7 Network Monitoring & Maintenance</h3>
                <ul className='list-disc pl-2 tracking-tighter'>
                  <li>Real-time monitoring of servers, workstations, and devices</li>
                  <li>Automated alerts and rapid resolution to prevent downtime.</li>
                </ul>
              </div>
              <div>
                <h3 className='font-bold'>Helpdesk & Technical Support</h3>
                <ul className='list-disc pl-2 tracking-tighter'>
                  <li>Real-time monitoring of servers, workstations, and devices</li>
                  <li>Automated alerts and rapid resolution to prevent downtime.</li>
                </ul>
              </div>
            </div>
          </article>

          {/*  */}
          <article className='relative h-[370px] gap-4 '>
            <Image src={'bgcard_1.svg'} alt='' fill className='object-cover '/>
            <div className='absolute top-0 left-0 w-full h-full bg-black/30 flex flex-col gap-4 p-8'>
              <h2 className='text-2xl font-bold text-[#FFDAA3]'>Managed IT Services</h2>
              <div>
                <h3 className='font-bold'>24/7 Network Monitoring & Maintenance</h3>
                <ul className='list-disc pl-2 tracking-tighter'>
                  <li>Real-time monitoring of servers, workstations, and devices</li>
                  <li>Automated alerts and rapid resolution to prevent downtime.</li>
                </ul>
              </div>
              <div>
                <h3 className='font-bold'>Helpdesk & Technical Support</h3>
                <ul className='list-disc pl-2 tracking-tighter'>
                  <li>Real-time monitoring of servers, workstations, and devices</li>
                  <li>Automated alerts and rapid resolution to prevent downtime.</li>
                </ul>
              </div>
            </div>
          </article>
          {/*  */}
          <article className='relative h-[370px] gap-4 '>
            <Image src={'bgcard_1.svg'} alt='' fill className='object-cover '/>
            <div className='absolute top-0 left-0 w-full h-full bg-black/30 flex flex-col gap-4 p-8'>
              <h2 className='text-2xl font-bold text-[#FFDAA3]'>Managed IT Services</h2>
              <div>
                <h3 className='font-bold'>24/7 Network Monitoring & Maintenance</h3>
                <ul className='list-disc pl-2 tracking-tighter'>
                  <li>Real-time monitoring of servers, workstations, and devices</li>
                  <li>Automated alerts and rapid resolution to prevent downtime.</li>
                </ul>
              </div>
              <div>
                <h3 className='font-bold'>Helpdesk & Technical Support</h3>
                <ul className='list-disc pl-2 tracking-tighter'>
                  <li>Real-time monitoring of servers, workstations, and devices</li>
                  <li>Automated alerts and rapid resolution to prevent downtime.</li>
                </ul>
              </div>
            </div>
          </article>

          {/*  */}
          <article className='relative h-[370px] gap-4 '>
            <Image src={'bgcard_1.svg'} alt='' fill className='object-cover '/>
            <div className='absolute top-0 left-0 w-full h-full bg-black/30 flex flex-col gap-4 p-8'>
              <h2 className='text-2xl font-bold text-[#FFDAA3]'>Managed IT Services</h2>
              <div>
                <h3 className='font-bold'>24/7 Network Monitoring & Maintenance</h3>
                <ul className='list-disc pl-2 tracking-tighter'>
                  <li>Real-time monitoring of servers, workstations, and devices</li>
                  <li>Automated alerts and rapid resolution to prevent downtime.</li>
                </ul>
              </div>
              <div>
                <h3 className='font-bold'>Helpdesk & Technical Support</h3>
                <ul className='list-disc pl-2 tracking-tighter'>
                  <li>Real-time monitoring of servers, workstations, and devices</li>
                  <li>Automated alerts and rapid resolution to prevent downtime.</li>
                </ul>
              </div>
            </div>
          </article>

        </section>
    </div>
  )
}

export default Services