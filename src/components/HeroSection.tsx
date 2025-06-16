import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/coverphoto.jpg" alt="Car underside in garage" fill className="object-cover" priority />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 bottom-[-2] text-left text-white">
        <h1 className="text-5xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          Expert Repairs,
          <br />
          <span className="text-red-500">Trusted Care</span>
        </h1>

        <p className="text-xl md:text-xl mb-8 max-w-2xl leading-relaxed">
          We believe in providing exceptional service that keeps your vehicle running smoothly. Trust our experienced
          team for all your automotive needs.
        </p>

        <Button
          size="lg"
          className="bg-red-500 hover:bg-red-600 text-white px-8 text-lg font-semibold rounded-md transition-all duration-300 transform hover:scale-105"
        >
          Book to Secure Your Slot
        </Button>
      </div>
    </section>
  )
}
