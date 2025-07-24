"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Helper function to get the correct link based on current page
  const getLink = (section: string) => {
    if (pathname === '/about') {
      return `/#${section}`
    }
    return `#${section}`
  }
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav
        className={`glass-effect backdrop-blur-xl bg-[rgb(0,24,40)]/40 border border-[rgb(196,203,205)]/20 rounded-2xl px-8 py-4 flex items-center justify-between transition-all duration-300 shadow-2xl ${
          isScrolled ? "bg-[rgb(0,24,40)]/60 shadow-xl" : ""
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[rgb(0,192,241)] group-hover:border-[rgb(0,192,241)] transition-colors duration-300">
            <Image 
              src="/Dan updated logo.png" 
              alt="Dan MOT & Services Logo" 
              width={48} 
              height={48} 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-[rgb(251,251,251)] font-bold text-xl tracking-wide group-hover:text-[rgb(0,192,241)] transition-colors duration-300">
            Dan MOT & Services
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-[rgb(251,251,251)]/90 hover:text-[rgb(0,192,241)] transition-all duration-300 text-sm font-medium nav-link"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-[rgb(251,251,251)]/90 hover:text-[rgb(0,192,241)] transition-all duration-300 text-sm font-medium nav-link"
          >
            About Us
          </Link>
          <Link
            href={getLink('services')}
            className="text-[rgb(251,251,251)]/90 hover:text-[rgb(0,192,241)] transition-all duration-300 text-sm font-medium nav-link"
          >
            Services
          </Link>
          <Link
            href={getLink('contact')}
            className="text-[rgb(251,251,251)]/90 hover:text-[rgb(0,192,241)] transition-all duration-300 text-sm font-medium nav-link"
          >
            Contact
          </Link>
          <Link
            href={getLink('contact')}
            className="bg-[rgb(0,192,241)] hover:bg-[rgb(0,170,220)] text-[rgb(251,251,251)] px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[rgb(251,251,251)] hover:text-[rgb(0,192,241)] transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-4 right-4 mt-2 glass-effect bg-[rgb(0,24,40)]/90 rounded-xl p-6 md:hidden">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-[rgb(251,251,251)] hover:text-[rgb(0,192,241)] transition-colors duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-[rgb(251,251,251)] hover:text-[rgb(0,192,241)] transition-colors duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href={getLink('services')}
                className="text-[rgb(251,251,251)] hover:text-[rgb(0,192,241)] transition-colors duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href={getLink('contact')}
                className="text-[rgb(251,251,251)] hover:text-[rgb(0,192,241)] transition-colors duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href={getLink('contact')}
                className="bg-[rgb(0,192,241)] hover:bg-[rgb(0,170,220)] text-[rgb(251,251,251)] px-6 py-3 rounded-lg font-medium transition-all duration-300 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}