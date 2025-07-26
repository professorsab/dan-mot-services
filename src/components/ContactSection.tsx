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

    try {
      const res = await fetch("/api/contactus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        throw new Error("Failed to send message.")
      }

      setIsSubmitted(true)
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
    } catch (error) {
      alert("Something went wrong while sending the message.")
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-[rgb(0,24,40)]/50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(251,251,251)] mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-xl text-[rgb(196,203,205)] max-w-2xl mx-auto">
            Book your service, ask questions, or get a quote. We&apos;re here to help with all your automotive needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <div className="glass-effect bg-[rgb(0,24,40)]/80 p-8 rounded-xl border-4 border-[rgb(0,192,241)] hover-lift">
              <h3 className="text-[rgb(0,192,241)] text-2xl font-bold mb-2">Contact Information</h3>
              <p className="text-[rgb(251,251,251)] mb-8">Ready to service your vehicle? Get in touch today!</p>

              <div className="space-y-6">
                <ContactInfo icon={<Phone className="w-5 h-5 text-[rgb(0,192,241)]" />} title="Phone" value="07440398538" />
                <ContactInfo icon={<Mail className="w-5 h-5 text-[rgb(0,192,241)]" />} title="Email" value="danmotservice@yahoo.com" />
                <ContactInfo icon={<MapPin className="w-5 h-5 text-[rgb(0,192,241)] mt-1" />} title="Location" value={
                  <>
                    <p>Unit 21 Page Rd</p>
                    <p>Norwich NR3 2BX</p>
                    <p>United Kingdom</p>
                  </>
                } />
                <ContactInfo icon={<Clock className="w-5 h-5 text-[rgb(0,192,241)]" />} title="Hours" value={
                  <>
                    <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                    <p>Sat: 8:00 AM - 4:00 PM</p>
                    <p>Sun: Emergency Only</p>
                  </>
                } />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="glass-effect bg-[rgb(0,24,40)]/30 p-8 rounded-xl">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-pulse" />
                  <h3 className="text-2xl font-bold text-[rgb(251,251,251)] mb-2">Message Sent!</h3>
                  <p className="text-[rgb(196,203,205)]">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <TextField label="First Name" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="John" required />
                    <TextField label="Last Name" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Smith" required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <TextField label="Email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" required />
                    <TextField label="Phone Number" name="phoneNumber" type="tel" value={formData.phoneNumber} onChange={handleInputChange} placeholder="07440398538" />
                  </div>

                  <div>
                    <label className="block text-[rgb(251,251,251)] text-sm font-medium mb-4">Service Required</label>
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
                            className="text-[rgb(0,192,241)] focus:ring-[rgb(0,192,241)] bg-white/20 border-white/30"
                          />
                          <span className="text-[rgb(251,251,251)] text-sm group-hover:text-[rgb(0,192,241)] transition-colors duration-300">
                            {option.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[rgb(251,251,251)] text-sm font-medium mb-2">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your vehicle and what service you need..."
                      rows={6}
                      className="w-full bg-[rgb(0,24,40)]/50 border-[rgb(196,203,205)]/30 text-[rgb(251,251,251)] placeholder-[rgb(196,203,205)] focus:border-[rgb(0,192,241)] focus:ring-[rgb(0,192,241)]"
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-[rgb(0,192,241)] hover:bg-[rgb(0,170,220)] text-[rgb(251,251,251)] px-8 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover-glow disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-[rgb(251,251,251)] border-t-transparent rounded-full animate-spin"></div>
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

function TextField({ label, name, value, onChange, placeholder, required = false, type = "text" }: any) {
  return (
    <div>
      <label className="block text-[rgb(251,251,251)] text-sm font-medium mb-2">{label}</label>
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-[rgb(0,24,40)]/50 border-[rgb(196,203,205)]/30 text-[rgb(251,251,251)] placeholder-[rgb(196,203,205)] focus:border-[rgb(0,192,241)] focus:ring-[rgb(0,192,241)]"
        placeholder={placeholder}
        required={required}
      />
    </div>
  )
}

function ContactInfo({ icon, title, value }: { icon: React.ReactNode, title: string, value: React.ReactNode }) {
  return (
    <div className="flex items-start space-x-4 group">
      <div className="w-12 h-12 bg-[rgb(0,192,241)]/20 rounded-full flex items-center justify-center group-hover:bg-[rgb(0,192,241)]/30 transition-colors duration-300">
        {icon}
      </div>
      <div>
        <p className="text-[rgb(251,251,251)] font-semibold">{title}</p>
        <div className="text-[rgb(196,203,205)] text-sm">{value}</div>
      </div>
    </div>
  )
}