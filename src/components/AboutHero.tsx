"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

export default function AboutHero() {
  const textRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (textRef.current) observer.observe(textRef.current)
    if (imageRef.current) observer.observe(imageRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="pt-24 pb-16 relative overflow-hidden min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/aboutUs.png"
          alt="About Us background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Welcome Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-red-500 mb-4 animate-fade-in-up">WELCOME</h1>
          <p className="text-xl text-gray-700 font-medium animate-fade-in-up animation-delay-200">TO OUR COMPANY</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div ref={textRef} className="opacity-0">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                At Dan MOT & Services, we believe that quality work, honest service, and customer care go a long way.
                Our team of skilled and hardworking technicians is dedicated to keeping your vehicle safe, reliable, and
                running smoothly. Whether it&apos;s a routine check-up, a fender bender, or more serious damage, we handle
                every job with the same level of care and attention to detail.
              </p>

              <p className="text-lg">
                We know how stressful car issues can be — that&apos;s why we&apos;re here to guide you through the process,
                explain everything clearly, and get you back on the road with confidence. From start to finish, we&apos;re
                committed to making your experience as straightforward and stress-free as possible.
              </p>

              <p className="text-lg">At Precision Auto Repair, your vehicle is in good hands — and so are you.</p>
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="opacity-0">
            <div className="relative rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 border-4 border-red-500">
              <Image
                src="/dan-himself.jpg"
                alt="Dan working on a car engine"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
