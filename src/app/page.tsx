import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import ServicesSection from "@/components/ServicesSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <div className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat object-cover"
           style={{ backgroundImage: "url('/aboutus.png')" }}>
        <ServicesSection />
      </div>
      <div className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
           style={{ backgroundImage: "url('/gears.png')" }}>
      <ContactSection />
      </div>
     
      <Footer />
    </main>
  )
}
