"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

interface ServiceCardProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  reverse?: boolean
}

function ServiceCard({ title, description, imageSrc, imageAlt, reverse = false }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const textElement = entry.target.querySelector(".text-content")
            const imageElement = entry.target.querySelector(".image-content")

            if (textElement && imageElement) {
              textElement.classList.add(reverse ? "animate-fade-in-right" : "animate-fade-in-left")
              imageElement.classList.add(reverse ? "animate-fade-in-left" : "animate-fade-in-right")
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    if (cardRef.current) observer.observe(cardRef.current)

    return () => observer.disconnect()
  }, [reverse])

  return (
    <div ref={cardRef} className="py-16">
      <div className="container mx-auto px-4">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto ${
            reverse ? "lg:grid-flow-col-dense" : ""
          }`}
        >
          {/* Text Content */}
          <div className={`text-content opacity-0 ${reverse ? "lg:col-start-2" : ""}`}>
            <div className="glass-effect bg-[rgb(0,24,40)]/80 p-8 rounded-xl shadow-2xl border-l-4 border-[rgb(0,192,241)] hover-lift">
              <h2 className="text-3xl font-bold text-[rgb(0,192,241)] mb-6 tracking-wide">{title}</h2>
              <p className="text-lg leading-relaxed text-[rgb(196,203,205)]">{description}</p>
              
              {/* Service features */}
              <div className="mt-6 space-y-2">
                {title.includes("MOT") && (
                  <>
                    <div className="flex items-center text-[rgb(196,203,205)]">
                      <div className="w-2 h-2 bg-[rgb(0,192,241)] rounded-full mr-3"></div>
                      <span>Class 4 MOT Testing</span>
                    </div>
                    <div className="flex items-center text-[rgb(196,203,205)]">
                      <div className="w-2 h-2 bg-[rgb(0,192,241)] rounded-full mr-3"></div>
                      <span>Same Day Certificates</span>
                    </div>
                    
                  </>
                )}
                
                {title.includes("OIL") && (
                  <>
                    <div className="flex items-center text-[rgb(196,203,205)]">
                      <div className="w-2 h-2 bg-[rgb(0,192,241)] rounded-full mr-3"></div>
                      <span>Premium Oil & Filters</span>
                    </div>
                    <div className="flex items-center text-[rgb(196,203,205)]">
                      <div className="w-2 h-2 bg-[rgb(0,192,241)] rounded-full mr-3"></div>
                      <span>Multi-Point Inspections</span>
                    </div>
                    <div className="flex items-center text-[rgb(196,203,205)]">
                      <div className="w-2 h-2 bg-[rgb(0,192,241)] rounded-full mr-3"></div>
                      <span>Service History Updates</span>
                    </div>
                  </>
                )}
                
                {title.includes("BRAKE") && (
                  <>
                    <div className="flex items-center text-[rgb(196,203,205)]">
                      <div className="w-2 h-2 bg-[rgb(0,192,241)] rounded-full mr-3"></div>
                      <span>Brake Pad Replacement</span>
                    </div>
                    <div className="flex items-center text-[rgb(196,203,205)]">
                      <div className="w-2 h-2 bg-[rgb(0,192,241)] rounded-full mr-3"></div>
                      <span>Disc & Drum Services</span>
                    </div>
                    <div className="flex items-center text-[rgb(196,203,205)]">
                      <div className="w-2 h-2 bg-[rgb(0,192,241)] rounded-full mr-3"></div>
                      <span>ABS System Diagnostics</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className={`image-content opacity-0 ${reverse ? "lg:col-start-1" : ""}`}>
            <div className="relative rounded-xl overflow-hidden shadow-2xl group hover-lift">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={imageAlt}
                width={600}
                height={400}
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(0,24,40)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="glass-effect bg-[rgb(0,24,40)]/70 p-3 rounded-lg">
                  <p className="text-[rgb(251,251,251)] text-sm font-medium">Professional {title.toLowerCase()} service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AboutServices() {
  const services = [
    {
      title: "COMPREHENSIVE MOT TESTING",
      description:
        "Our certified MOT testing facility provides thorough vehicle inspections to ensure your car meets UK safety and environmental standards. We offer Class 4 and Class 7 MOT tests with same-day certificates and detailed reports. Our experienced technicians use the latest equipment to provide accurate assessments and can advise on any necessary repairs.",
      imageSrc: "/mot-service.png",
      imageAlt: "Professional MOT testing and inspection service",
      reverse: false,
    },
    {
      title: "EXPERT OIL CHANGES & SERVICING",
      description:
        "Regular servicing is essential for your vehicle's longevity and performance. We provide comprehensive oil changes using premium lubricants and genuine filters. Our full and interim service packages include multi-point inspections, fluid top-ups, and detailed service history updates to keep your vehicle running smoothly and maintain its warranty.",
      imageSrc: "/oil-change.jpg",
      imageAlt: "Professional oil change and vehicle servicing",
      reverse: true,
    },
    {
      title: "PROFESSIONAL BRAKE REPAIRS",
      description:
        "Your safety depends on reliable brakes. Our brake specialists provide expert inspections, repairs, and replacements for all brake system components. From brake pad and disc replacement to brake fluid changes and ABS diagnostics, we ensure your vehicle stops safely and efficiently every time you need it to.",
      imageSrc: "/brake-repair.jpg",
      imageAlt: "Professional brake repair and maintenance service",
      reverse: false,
    },
  ]

  return (
    <section className="relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Image src="/bgaboutservice.jpg" alt="Automotive workshop background" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgb(0,24,40)]/60"></div>
      </div>
      <div className="relative z-10">
        {/* Section header */}
        <div className="text-center py-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(251,251,251)] mb-4 gradient-text">
            Our Professional Services
          </h2>
          <p className="text-xl text-[rgb(196,203,205)] max-w-2xl mx-auto">
            Comprehensive automotive solutions delivered by experienced professionals
          </p>
        </div>
        
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            imageSrc={service.imageSrc}
            imageAlt={service.imageAlt}
            reverse={service.reverse}
          />
        ))}
      </div>
    </section>
  )
}