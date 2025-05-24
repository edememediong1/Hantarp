import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'

function Core_Services() {
  return (
    <div className='bg-[#FFDAA3] p-4 py-8 md:px-8 md:py-16 space-y-6'>
        <h2 className='text-[#004A61] font-bold text-[1.7rem] md:text-4xl tracking-tight'>Our Core Services</h2>
        <section className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <article className='flex flex-col gap-6 rounded-2xl p-4 lg:h-[500px] text-white bg-stone-800 justify-between md:p-8 '>
                <p className='text-[22px] font-bold tracking-tighter'>24/7 Managed IT Support </p>
                
                <ul className='space-y-3 list-inside list-disc'>
                    <p className='font-bold tracking-tighter'>🛡️ Your Always-On IT Department</p>
                    <li>Real-time network monitoring with AI-driven alerts</li>
                    <li>Helpdesk support (remote/onsite) with &lt;30-min response SLA</li>
                    <li>Hardware/software troubleshooting and vendor management</li>
                    <li>&apos;90% of issues resolved before they disrupt your workflow.&apos;</li>
                </ul>
                <Button className='bg-[#FFD488] p-4 rounded-2xl w-[160px] text-black hover:bg-white'>
                    <Link href={'/contact'}>Contact Us</Link>
                </Button>
                <div className='flex justify-end w-full'>
                  <h2 className='text-7xl font-bold '>01</h2>
                </div>   
            </article>
            <article className='flex flex-col gap-6 rounded-2xl p-4 lg:h-[500px] text-white bg-stone-800 justify-between md:p-8 '>
                <p className='text-[22px] font-bold tracking-tighter'>Cybersecurity & Compliance</p>
                
                <ul className='space-y-3 list-inside list-disc'>
                    <p className='font-bold tracking-tighter'>🔒 Enterprise Protection Without the 
     Enterprise Price Tag</p>
                    <li>Endpoint Detection & Response (EDR) + SIEM monitoring</li>
                    <li>Penetration testing and vulnerability assessments</li>
                    <li>HIPAA/GDPR/SOC 2 compliance frameworks</li>
                    <li>&apos;Zero ransomware incidents for clients in 2023&apos;</li>
                </ul>
                <Button className='bg-[#FFD488] p-4 rounded-2xl w-[160px] text-black hover:bg-white'>
                    <Link href={'/contact'}>Contact Us</Link>
                </Button>
                <div className='flex justify-end w-full'>
                  <h2 className='text-7xl font-bold '>02</h2>
                </div>   
            </article>
            <article className='flex flex-col gap-6 rounded-2xl p-4 lg:h-[500px] text-white bg-stone-800 justify-between md:p-8 '>
                <p className='text-[22px] font-bold tracking-tighter'>Cloud & Hybrid IT Solutions</p>
                
                <ul className='space-y-3 list-inside list-disc'>
                    <p className='font-bold tracking-tighter'>☁️ Seamless Migration, Optimized Performance</p>
                    <li>AWS/Azure cloud deployment and cost optimization</li>
                    <li>Business continuity planning with automated backups</li>
                    <li>Secure hybrid infrastructure for distributed teams</li>
                    <li>&apos;Reduce cloud costs by up to 35% with our tuning&apos;</li>
                </ul>
                <Button className='bg-[#FFD488] p-4 rounded-2xl w-[160px] text-black hover:bg-white'>
                    <Link href={'/contact'}>Contact Us</Link>
                </Button>
                <div className='flex justify-end w-full'>
                  <h2 className='text-7xl font-bold '>03</h2>
                </div>   
            </article>
            <article className='flex flex-col gap-6 rounded-2xl p-4 lg:h-[500px] text-white bg-stone-800 justify-between md:p-8 '>
                <p className='text-[22px] font-bold tracking-tighter'>Strategic IT Consulting</p>
                
                <ul className='space-y-3 list-inside list-disc'>
                    <p className='font-bold tracking-tighter'>📊 Align Technology With Business Goals</p>
                    <li>Technology roadmaps for scaling organizations</li>
                    <li>Software/license management and procurement</li>
                    <li>CIO advisory for startups and SMBs</li>
                    <li>&apos;Turn IT from a cost center to a growth engine.&apos;</li>
                </ul>
                <Button className='bg-[#FFD488] p-4 rounded-2xl w-[160px] text-black hover:bg-white'>
                    <Link href={'/contact'}>Contact Us</Link>
                </Button>
                <div className='flex justify-end w-full'>
                  <h2 className='text-7xl font-bold '>04</h2>
                </div>   
            </article>
            
        </section>
    </div>
  )
}

export default Core_Services