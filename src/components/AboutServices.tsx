"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

interface ServiceSectionProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  reverse?: boolean
  bgColor: "dark" | "light"
}

function ServiceSection({ title, description, imageSrc, imageAlt, reverse = false, bgColor }: ServiceSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

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

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [reverse])

  const isDark = bgColor === "dark"

  return (
    <div ref={sectionRef} className={`py-16 ${isDark ? "bg-gray-900" : "bg-gray-100"} relative overflow-hidden`}>
      {/* Red accent line */}
      <div className={`absolute ${reverse ? "right-0" : "left-0"} top-0 w-1 h-full bg-red-500`}></div>

      <div className="container mx-auto px-4">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:grid-flow-col-dense" : ""}`}
        >
          {/* Text Content */}
          <div className={`text-content ${reverse ? "lg:col-start-2" : ""}`}>
            <div className={`p-8 ${isDark ? "bg-black" : "bg-white"} rounded-lg shadow-lg border-l-4 border-red-500`}>
              <h2 className="text-3xl font-bold text-red-500 mb-6 tracking-wide">{title}</h2>
              <p className={`text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>{description}</p>
            </div>
          </div>

          {/* Image Content */}
          <div className={`image-content ${reverse ? "lg:col-start-1" : ""}`}>
            <div className="relative rounded-lg overflow-hidden shadow-2xl group">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={imageAlt}
                width={600}
                height={400}
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
      title: "EXPERT OIL CHANGES",
      description:
        "At Elite Precision Solutions, we make fixing your car perfect. Keep simple and cheap-free... whether you're thinking of new chapter or upgrading for your family's needs. With proper like the modern, special house, we offer helping you settle into a place that truly feels like home.",
      imageSrc: "/oilchange.jpg",
      imageAlt: "Professional oil change service",
      reverse: false,
      bgColor: "dark" as const,
    },
    {
      title: "TRUSTED MOT SERVICE",
      description:
        "Unlock the potential of prime commercial real estate with Creative Properties. Whether you're investing in office spaces, retail hubs, or industrial complexes, we deliver market expertise, seamless transactions, and a commitment to maximizing your returns and help you promise and deliver that bring growth.",
      imageSrc: "/mot.png",
      imageAlt: "MOT testing and inspection service",
      reverse: true,
      bgColor: "light" as const,
    },
    {
      title: "BRAKE REPAIR EXPERT",
      description:
        "At Elite Precision Solutions, we make fixing your car perfect. Keep simple and cheap-free... whether you're thinking of new chapter or upgrading for your family's needs. With proper like the modern, special house, we offer helping you settle into a place that truly feels like home.",
      imageSrc: "/brakerepair.jpg",
      imageAlt: "Professional brake repair service",
      reverse: false,
      bgColor: "dark" as const,
    },
  ]

  return (
    <section className="relative">
      {services.map((service, index) => (
        <ServiceSection
          key={index}
          title={service.title}
          description={service.description}
          imageSrc={service.imageSrc}
          imageAlt={service.imageAlt}
          reverse={service.reverse}
          bgColor={service.bgColor}
        />
      ))}
    </section>
  )
}
