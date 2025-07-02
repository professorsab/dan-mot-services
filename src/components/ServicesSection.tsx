"use client"

import type React from "react"
import { Car, FileText, Wrench, Settings } from "lucide-react"
import { useEffect, useRef } from "react"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  index: number
}

function ServiceCard({ icon, title, description, features, index }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in-up')
            }, index * 200)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [index])

  return (
    <div 
      ref={cardRef}
      className="opacity-0 bg-gray-900/90 backdrop-blur-sm p-8 rounded-xl border-b-4 border-red-500 hover:transform hover:scale-105 hover-glow transition-all duration-500 h-full group relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Rotating gear decoration */}
      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
        <Settings className="w-12 h-12 text-red-500 animate-rotate" />
      </div>

      <div className="relative z-10">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center group-hover:bg-red-500/20 transition-colors duration-300">
            <div className="text-red-500 group-hover:scale-110 transition-transform duration-300">{icon}</div>
          </div>
        </div>

        <h3 className="text-white text-xl font-bold mb-4 text-center tracking-wide group-hover:text-red-400 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-300 text-center leading-relaxed text-sm mb-6 group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>

        {/* Service features */}
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
              {feature}
            </li>
          ))}
        </ul>

        {/* Progress bar animation */}
        <div className="mt-6 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"></div>
        </div>
      </div>
    </div>
  )
}

export default function ServicesSection() {
  const services = [
    {
      icon: <FileText className="w-10 h-10" />,
      title: "MOT TESTING",
      description: "Comprehensive MOT testing to ensure your vehicle meets UK safety standards. Our certified technicians provide thorough inspections and detailed reports.",
      features: [
        "Class 4 & 7 MOT Testing",
        "Pre-MOT Health Checks",
        "Same Day Certificates",
        "Detailed Failure Reports"
      ]
    },
    {
      icon: <Car className="w-10 h-10" />,
      title: "OIL CHANGES & SERVICING",
      description: "Keep your engine running smoothly with our professional oil change and servicing. We use premium oils and genuine parts for optimal performance.",
      features: [
        "Full & Interim Services",
        "Premium Oil & Filters",
        "Multi-Point Inspections",
        "Service History Updates"
      ]
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: "BRAKE REPAIRS",
      description: "Your safety is paramount. Our brake specialists provide expert inspections, repairs, and replacements using quality components.",
      features: [
        "Brake Pad Replacement",
        "Disc & Drum Services",
        "Brake Fluid Changes",
        "ABS System Diagnostics"
      ]
    },
  ]

  return (
    <section id="services" className="py-10 relative">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 gradient-text">
            Our Expert Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional automotive services you can trust, delivered by experienced technicians
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description}
              features={service.features}
              index={index}
            />
          ))}
        </div>

        {/* Call to action */}
        {/* <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">Need a service not listed? Leave us an inquiry and we will get back to you ASAP.</p>
            <a
            href="#contact"
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover-glow inline-block"
            >
            Contact us
            </a>
        </div> */}
      </div>
    </section>
  )
}