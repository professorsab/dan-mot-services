import type React from "react"
import { Car, FileText, Wrench } from "lucide-react"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-gray-900 px-13 pt-24 pb-15  rounded-lg border-b-10 border-red-500 hover:transform hover:scale-105 transition-all duration-300 h-full">
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-transparent flex items-center justify-center">
          <div className="text-red-500">{icon}</div>
        </div>
      </div>

      <h3 className="text-white text-xl font-bold mt-12 mb-6 text-center tracking-wide">{title}</h3>

      <p className="text-gray-300 text-center leading-relaxed text-sm">{description}</p>
    </div>
  )
}

export default function ServicesSection() {
  const services = [
    {
      icon: <Car className="w-10 h-10" />,
      title: "EXPERT OIL CHANGES",
      description:
        "Keep your engine running smoothly with our fast and reliable oil change services. We use top-quality oils and filters to ensure your vehicle performs at its best. Your car's longevity is our priority.",
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "TRUSTED MOT SERVICE",
      description:
        "From rotations to replacements, we provide expert tire services anytime you need them. Our team ensures your tires are in top condition for safety and performance on the road.",
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: "BRAKE REPAIR EXPERT",
      description:
        "Your safety is our priority. We offer professional brake inspections and repairs to keep you in control. Don't wait—faulty brakes can be dangerous. Let us help you stay safe with confidence.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
