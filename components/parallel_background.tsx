"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ParallaxBackgroundProps {
  imageUrl: string
  children: React.ReactNode
  speed?: number // Speed factor for parallax effect (0.5 = half speed, 2 = double speed)
  height?: string // Container height
  className?: string // Additional classes for the container
}

export default function ParallaxBackground({
  imageUrl,
  children,
  speed = 0.5,
  height = "500px",
  className = "",
}: ParallaxBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [offsetY, setOffsetY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Check if element is in viewport
    const checkVisibility = () => {
      if (!container) return

      const rect = container.getBoundingClientRect()
      const isInView = rect.top < window.innerHeight && rect.bottom > 0

      setIsVisible(isInView)
    }

    // Update offset based on scroll position
    const handleScroll = () => {
      if (!isVisible) return

      const scrollY = window.scrollY
      const containerTop = container.offsetTop
      const containerHeight = container.offsetHeight

      // Only update when container is in view
      if (scrollY + window.innerHeight > containerTop && scrollY < containerTop + containerHeight) {
        // Calculate how far we've scrolled into the element
        const relativeY = scrollY - containerTop
        setOffsetY(relativeY * speed)
      }
    }

    // Initial check
    checkVisibility()
    handleScroll()

    // Add event listeners
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("scroll", checkVisibility, { passive: true })
    window.addEventListener("resize", checkVisibility)

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("scroll", checkVisibility)
      window.removeEventListener("resize", checkVisibility)
    }
  }, [speed, isVisible])

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`} style={{ height }}>
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${offsetY}px)`,
          willChange: "transform",
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  )
}
