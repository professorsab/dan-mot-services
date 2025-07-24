"use client"

import Link from "next/link"
import { Facebook, Instagram, Phone, Mail, MapPin, ArrowUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (footerRef.current) observer.observe(footerRef.current)
    return () => observer.disconnect()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer ref={footerRef} className="bg-[rgb(0,24,40)] text-[rgb(251,251,251)] py-16 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(0,192,241)]/10 via-transparent to-[rgb(0,192,241)]/5"></div>
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 bg-[rgb(0,192,241)]/5 rounded-full animate-float"
            style={{
              left: `${10 + i * 20}%`,
              top: `${20 + i * 15}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Company Info */}
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="flex items-center justify-center space-x-3 mb-6 group cursor-pointer hover:scale-105 transition-transform duration-300">
            <div className="w-3 h-3 bg-[rgb(0,192,241)] rounded-full animate-pulse"></div>
            <span className="font-bold text-2xl tracking-wide group-hover:text-[rgb(0,192,241)] transition-colors duration-300">
              Dan MOT & Services LTD
            </span>
          </div>

          <div className="space-y-3">
            {[
              { icon: Mail, text: "enquiry@danmot.com" },
              { icon: Phone, text: "(508) 795-3948" },
              { icon: MapPin, text: "132 Dartmouth Street, Boston MA" },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-center space-x-2 text-[rgb(0,192,241)] hover:text-[rgb(0,170,220)] transition-all duration-300 cursor-pointer group ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <item.icon className="w-4 h-4 group-hover:animate-pulse" />
                <p className="group-hover:scale-105 transition-transform duration-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Links and Social */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {/* Support Links */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <h4 className="font-bold text-xl mb-6 text-[rgb(0,192,241)]">Support</h4>
            <div className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "#services", label: "Our Services" },
                { href: "#contact", label: "Contact Us" },
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block text-[rgb(196,203,205)] hover:text-[rgb(0,192,241)] transition-all duration-300 transform hover:translate-x-2 hover:scale-105"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h4 className="font-bold text-xl mb-6 text-[rgb(0,192,241)]">Services</h4>
            <div className="space-y-3">
              {["MOT Testing", "Oil Changes", "Brake Repairs"].map((service, index) => (
                <p
                  key={index}
                  className="text-[rgb(196,203,205)] hover:text-[rgb(0,192,241)] transition-all duration-300 cursor-pointer hover:scale-105"
                >
                  {service}
                </p>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div
            className={`transition-all duration-1000 delay-700 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            <h4 className="font-bold text-xl mb-6 text-[rgb(0,192,241)]">Stay with us</h4>
            <div className="flex justify-center space-x-6 mb-6">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="text-[rgb(0,192,241)] hover:text-[rgb(0,170,220)] transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                >
                  <social.icon className="w-8 h-8" />
                </Link>
              ))}
            </div>
            <div className="space-y-2 text-[rgb(0,192,241)] text-sm">
              <p className="hover:text-[rgb(0,170,220)] transition-colors duration-300 cursor-pointer">@danmotltd</p>
              <p className="hover:text-[rgb(0,170,220)] transition-colors duration-300 cursor-pointer">@danmotservices</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`border-t border-[rgb(0,24,40)] pt-8 transition-all duration-1000 delay-900 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-[rgb(196,203,205)] text-sm">
            <p>© 2025 Dan MOT & Services LTD. All Rights Reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-[rgb(0,192,241)] transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-[rgb(0,192,241)] transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[rgb(0,192,241)] hover:bg-[rgb(0,170,220)] text-[rgb(251,251,251)] p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl z-50 animate-bounce"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>
    </footer>
  )
}