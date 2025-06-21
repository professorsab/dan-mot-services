import Header from "@/components/Header"
import AboutHero from "@/components/AboutHero"
import AboutServices from "@/components/AboutServices"
import Footer from "@/components/Footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <AboutHero />
      <AboutServices />
      <Footer />
    </main>
  )
}
