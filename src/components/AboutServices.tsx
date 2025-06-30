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
            <div className="bg-black p-8 rounded-lg shadow-2xl border-l-4 border-red-500">
              <h2 className="text-3xl font-bold text-red-500 mb-6 tracking-wide">{title}</h2>
              <p className="text-lg leading-relaxed text-gray-300">{description}</p>
            </div>
          </div>

          {/* Image Content */}
          <div className={`image-content opacity-0 ${reverse ? "lg:col-start-1" : ""}`}>
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
        "At Elite Property Solutions, we make finding your perfect home simple and stress-free — whether you're starting a new chapter or upgrading for your family's needs. With properties like this modern, spacious house, we offer trusted deals, personalized support, and a commitment to helping you settle into a place that truly feels like home.",
      imageSrc: "/oil-change.jpg",
      imageAlt: "Professional oil change service",
      reverse: false,
    },
    {
      title: "TRUSTED MOT SERVICE",
      description:
        "Unlock the potential of prime commercial real estate with Creative Properties. Whether you're investing in office spaces, retail hubs, or industrial complexes, we deliver market expertise, seamless transactions, and a commitment to maximizing your returns and help you promise and deliver that bring growth.",
      imageSrc: "/mot-service.png",
      imageAlt: "MOT testing and inspection service",
      reverse: true,
    },
    {
      title: "BRAKE REPAIR EXPERT",
      description:
        "At Elite Property Solutions, we make finding your perfect home simple and stress-free — whether you're starting a new chapter or upgrading for your family's needs. With properties like this modern, spacious house, we offer trusted deals, personalized support, and a commitment to helping you settle into a place that truly feels like home.",
      imageSrc: "/brake-repair.jpg",
      imageAlt: "Professional brake repair service",
      reverse: false,
    },
  ]

  return (
    <section className="relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Image src="/bgaboutservice.jpg" alt="Engine background" fill className="object-cover" />
        <div className="absolute inset-0 bg-white/50"></div>
      </div>
      <div className="relative z-10">
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
