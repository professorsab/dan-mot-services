"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen m-0 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/coverphoto.jpg" alt="Car underside in garage" fill className="object-cover" priority />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[rgb(0,24,40)]/60">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-[rgb(0,192,241)]/30 rounded-full animate-float"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 bottom-[-70px] text-left text-[rgb(251,251,251)]">
        <h1 className="text-5xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          Expert Repairs,
          <br />
          <span className="text-[rgb(0,192,241)] typewriter inline-block max-w-fit">Trusted Care</span>
        </h1>

        <p className="text-xl md:text-xl mb-8 max-w-2xl leading-relaxed">
          We believe in providing exceptional service that keeps your vehicle running smoothly. Trust our experienced
          team for all your automotive needs.
        </p>

        <div className={`transition-all duration-1000 delay-400 ${isVisible ? "animate-bounce-in" : "opacity-0"}`}>
          <Button
            size="lg"
            className="bg-[rgb(0,192,241)] hover:bg-[rgb(0,170,220)] text-[rgb(251,251,251)] px-10 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl animate-pulse-glow relative overflow-hidden group"
          >
            <span className="relative z-10">Book to Secure Your Slot</span>
            <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
        </div>
      </div>
    </section>
  )
}