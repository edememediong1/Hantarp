import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer  from "@/components/Footer";
import { Montserrat } from "next/font/google";
import { SanityLive } from "@/sanity/lib/live";

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})



export const metadata: Metadata = {
  title: "HanTarp LLC",
  description: "HanTarp LLC is a proactive managed IT services provider (MSP) specializing in secure, scalable solutions for businesses. We eliminate downtime through 24/7 monitoring, enterprise-grade cybersecurity, and strategic cloud consulting—so you can focus on growth without tech disruptions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={montserrat.className}
      >
        <Navbar />
        {children}
        <SanityLive/>
        <Footer/>
      </body>
    </html>
  );
}
