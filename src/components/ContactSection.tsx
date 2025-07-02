"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react"

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  subject: string
  message: string
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "general",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubjectChange = (subject: string) => {
    setFormData((prev) => ({
      ...prev,
      subject,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        subject: "general",
        message: "",
      })
    }, 7000)
  }

  return (
    <section id="contact" className="py-20 relative">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Book your service, ask questions, or get a quote. We're here to help with all your automotive needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="glass-effect bg-gray-900/80 p-8 rounded-xl border-4 border-red-500 hover-lift">
              <h3 className="text-red-500 text-2xl font-bold mb-2">Contact Information</h3>
              <p className="text-white mb-8">Ready to service your vehicle? Get in touch today!</p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center group-hover:bg-red-500/30 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-gray-300">07440398538</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center group-hover:bg-red-500/30 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-300">enquiry@danmot.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center group-hover:bg-red-500/30 transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-red-500 mt-1" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Location</p>
                    <div className="text-gray-300 text-sm">
                      <p>132 Dartmouth Street</p>
                      <p>Boston, Massachusetts 02156</p>
                      <p>United States</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center group-hover:bg-red-500/30 transition-colors duration-300">
                    <Clock className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Hours</p>
                    <div className="text-gray-300 text-sm">
                      <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                      <p>Sat: 8:00 AM - 4:00 PM</p>
                      <p>Sun: Emergency Only</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass-effect bg-white/10 p-8 rounded-xl">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-pulse" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-300">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">First Name</label>
                      <Input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full bg-white/20 border-white/30 text-white placeholder-gray-300 focus:border-red-500 focus:ring-red-500"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Last Name</label>
                      <Input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full bg-white/20 border-white/30 text-white placeholder-gray-300 focus:border-red-500 focus:ring-red-500"
                        placeholder="Smith"
                        required
                      />
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-white/20 border-white/30 text-white placeholder-gray-300 focus:border-red-500 focus:ring-red-500"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="w-full bg-white/20 border-white/30 text-white placeholder-gray-300 focus:border-red-500 focus:ring-red-500"
                        placeholder="07440398538"
                      />
                    </div>
                  </div>

                  {/* Subject Selection */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-4">Service Required</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { value: "general", label: "General Inquiry" },
                        { value: "mot", label: "MOT Test" },
                        { value: "service", label: "Car Service" },
                        { value: "brake", label: "Brake Repair" },
                      ].map((option) => (
                        <label key={option.value} className="flex items-center space-x-2 cursor-pointer group">
                          <input
                            type="radio"
                            name="subject"
                            value={option.value}
                            checked={formData.subject === option.value}
                            onChange={() => handleSubjectChange(option.value)}
                            className="text-red-500 focus:ring-red-500 bg-white/20 border-white/30"
                          />
                          <span className="text-white text-sm group-hover:text-red-400 transition-colors duration-300">
                            {option.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                    <div>
                    <label className="block text-white text-sm font-medium mb-2">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your vehicle and what service you need..."
                      rows={6}
                      className="w-full bg-white/20 border-white/30 text-white placeholder-gray-300 focus:border-red-500 focus:ring-red-500"
                    />
                    </div>

                  {/* Submit Button */}
                  <div className="flex justify-end">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover-glow disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </div>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}