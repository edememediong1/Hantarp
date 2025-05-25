"use client"

import { cn } from "@/lib/utils"

interface FeatureItem {
  title: string
  description: string
}

interface FeatureListProps {
  features: FeatureItem[]
  className?: string
}

export default function FeatureList({ features, className }: FeatureListProps = { features: [] }) {
  return (
    <div className={cn("w-full mx-auto", className)}>
      {/* Container that changes from vertical to horizontal based on screen size */}
      <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-4">
        {/* Vertical line for mobile */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-black md:hidden"></div>

        {/* Horizontal line for desktop */}
        <div
          className="hidden md:block absolute left-0 right-0 top-4 h-0.5 bg-black w-full"
          style={{ margin: "0 auto" }}
        ></div>

        {features.map((feature, index) => (
          <div
            key={index}
            className={cn(
              "relative flex-1",
              // Mobile (vertical) styling
              "pl-12 pb-8",
              // Desktop (horizontal) styling
              "md:pl-0 md:pb-0 md:pt-12 md:text-center",
            )}
          >
            {/* Bullet point - positioned differently based on screen size */}
            <div className="absolute left-0 top-1 md:left-1/2 md:top-0 md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#FFDAA3] flex items-center justify-center text-black">
              {index + 1}
            </div>

            {/* Content */}
            <div className="space-y-1">
              <h3 className="text-lg font-medium text-[#004A61]">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
