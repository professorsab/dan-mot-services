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
          alt="Professional automotive workshop"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[rgb(0,24,40)]/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Welcome Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-[rgb(251,251,251)] mb-4 animate-fade-in-up">
            WELCOME TO
          </h1>
          <p className="text-2xl text-[rgb(0,192,241)] font-bold animate-fade-in-up gradient-text">
            DAN MOT & SERVICES
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div ref={textRef} className="opacity-0">
            <div className="glass-effect bg-[rgb(0,24,40)]/70 border border-[rgb(196,203,205)]/10 shadow-xl p-8 rounded-xl space-y-6 text-[rgb(251,251,251)] leading-relaxed backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-[rgb(0,192,241)] mb-6">Your Trusted Automotive Partner</h2>
              
              <p className="text-lg">
                At Dan MOT & Services, we believe that quality workmanship, honest service, and genuine customer care 
                are the foundation of a successful automotive business. Our team of skilled and experienced technicians 
                is dedicated to keeping your vehicle safe, reliable, and running at its best.
              </p>

              <p className="text-lg">
                Whether you need a routine MOT test, comprehensive service, brake repair, or emergency assistance, 
                we handle every job with the same level of professional care and attention to detail. We understand 
                that vehicle problems can be stressful and inconvenient.
              </p>

              <p className="text-lg">
                That&apos;s why we&apos;re committed to providing clear communication, transparent pricing, and efficient service 
                to get you back on the road with complete confidence in your vehicle&apos;s safety and performance.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-[rgb(0,192,241)]/20 rounded-lg">
                  <div className="text-2xl font-bold text-[rgb(0,192,241)]">20+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-[rgb(0,192,241)]/20 rounded-lg">
                  <div className="text-2xl font-bold text-[rgb(0,192,241)]">1000+</div>
                  <div className="text-sm">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="opacity-0">
            <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 border-4 border-[rgb(0,192,241)] hover-glow">
              <Image
                src="/dan-himself.jpg"
                alt="Dan working professionally on a car engine"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(0,24,40)]/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="glass-effect bg-[rgb(0,24,40)]/50 p-4 rounded-lg">
                  <h3 className="text-[rgb(251,251,251)] font-bold text-lg">Dan - Owner & Lead Technician</h3>
                  <p className="text-[rgb(196,203,205)] text-sm">Certified automotive specialist with 20+ years experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}