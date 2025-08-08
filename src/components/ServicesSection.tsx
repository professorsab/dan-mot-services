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
      className="opacity-0 bg-[rgb(0,24,40)]/90 backdrop-blur-sm p-8 rounded-xl border-b-4 border-[rgb(0,192,241)] hover:transform hover:scale-105 hover-glow transition-all duration-500 h-full group relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(0,192,241)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Rotating gear decoration */}
      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
        <Settings className="w-12 h-12 text-[rgb(0,192,241)] animate-rotate" />
      </div>

      <div className="relative z-10">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-[rgb(0,192,241)]/10 rounded-full flex items-center justify-center group-hover:bg-[rgb(0,192,241)]/20 transition-colors duration-300">
            <div className="text-[rgb(0,192,241)] group-hover:scale-110 transition-transform duration-300">{icon}</div>
          </div>
        </div>

        <h3 className="text-[rgb(251,251,251)] text-xl font-bold mb-4 text-center tracking-wide group-hover:text-[rgb(0,170,220)] transition-colors duration-300">
          {title}
        </h3>

        <p className="text-[rgb(196,203,205)] text-center leading-relaxed text-sm mb-6 group-hover:text-[rgb(196,203,205)] transition-colors duration-300">
          {description}
        </p>

        {/* Service features */}
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-sm text-[rgb(196,203,205)] group-hover:text-[rgb(196,203,205)] transition-colors duration-300">
              <div className="w-1.5 h-1.5 bg-[rgb(0,192,241)] rounded-full mr-3 flex-shrink-0"></div>
              {feature}
            </li>
          ))}
        </ul>

        {/* Progress bar animation */}
        <div className="my-6 h-1 bg-[rgb(0,24,40)] rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[rgb(0,192,241)] to-[rgb(0,170,220)] rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"></div>
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
        "MOT Testing",
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
      title: "VEHICLE REPAIRS",
      description: "Comprehensive vehicle repair services for all makes and models. Our skilled technicians handle everything from diagnostics to major repairs with precision.",
      features: [
        "Diagnostic Services",
        "Brake System Repairs",
        "Exhaust & Clutch Work",
        "Suspension Repairs",
        "Oil & Filter Exchange",
        "Shocks & Struts",
        "Welding Services",
        "Gearbox & Cambelt"
      ]
    },
  ]

  return (
    <section id="services" className="py-10 relative">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[rgb(0,24,40)]/40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(251,251,251)] mb-4 gradient-text">
            Our Expert Services
          </h2>
          <p className="text-xl text-[rgb(196,203,205)] max-w-2xl mx-auto">
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
      </div>
    </section>
  )
}