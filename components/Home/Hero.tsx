import { Button } from "../ui/button"
import Link from "next/link"
import Image from "next/image"

function Hero() {
  return (
    <header className="flex w-full md:h-[130vh] flex-col md:flex-row justify-between items-center bg-[#004A61] text-white">
      <section className="w-full md:w-1/2 flex flex-col justify-center gap-5 sm:gap-6 md:gap-8 lg:gap-10 px-4 py-6 md:p-8">
        <div>
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-[60px] font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[1.23] text-[#FFD488] tracking-tighter">
            Elevate Your Business with Fully
          </h1>
          <p className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[55px] leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[1.23] tracking-tighter">
            Managed IT Solutions from HanTarp
          </p>
        </div>
        <p className="font-medium text-justify text-sm sm:text-base md:text-[16px] lg:text-[18px] max-w-prose tracking-tighter mt-4">
          In today&apos;s fast-paced digital landscape, your IT infrastructure is the backbone of your business. At HanTarp
          LLC, we specialize in proactive, scalable, and secure IT management—so you can focus on growth without
          worrying about downtime, cyber threats, or inefficient systems.
        </p>
        <Link href={"/contact"} className="w-fit">
          <Button className="bg-[#FFD488] text-[#004A61] hover:bg-[#FFD488]/80 hover:text-[#004A61]/80 border-none rounded-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 font-bold text-sm sm:text-base md:text-[14px] lg:text-[16px] leading-normal transition-all duration-300 ease-in-out">
            Request a Custom IT Solution
          </Button>
        </Link>
      </section>
      <section className="relative w-full md:w-1/2 h-[70vh] md:h-[130vh] flex items-center justify-center overflow-hidden">
        <Image src={"hero.svg"} alt="hero image" fill unoptimized className="object-cover w-full h-full" />
      </section>
    </header>
  )
}

export default Hero
