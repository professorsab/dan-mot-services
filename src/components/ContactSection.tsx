"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20 bg-gray-200 relative">
      {/* Background with overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gray-300"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Information - Takes 2 columns */}
          <div className="lg:col-span-2 bg-gray-900 p-8 rounded-lg border-4 border-red-500">
            <h3 className="text-red-500 text-xl font-bold mb-2">Contact Information</h3>
            <p className="text-white mb-8 text-sm">Need a Quick Fix? Start a Chat Now!</p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-white" />
                <span className="text-white">07440398538</span>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-white" />
                <span className="text-white">demo@gmail.com</span>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-white mt-1" />
                <div className="text-white text-sm">
                  <p>132 Dartmouth Street Boston,</p>
                  <p>Massachusetts 02156 United</p>
                  <p>States</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Takes 3 columns */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">First Name</label>
                  <Input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-white border-gray-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Last Name</label>
                  <Input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-white border-gray-300"
                    required
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white border-gray-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Phone Number</label>
                  <Input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full bg-white border-gray-300"
                  />
                </div>
              </div>

              {/* Subject Selection */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-4">Select Subject?</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { value: "general", label: "General Inquiry" },
                    { value: "oil", label: "Oil Change" },
                    { value: "brake", label: "Brake Repair" },
                    { value: "tire", label: "Tire Service" },
                  ].map((option) => (
                    <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="subject"
                        value={option.value}
                        checked={formData.subject === option.value}
                        onChange={() => handleSubjectChange(option.value)}
                        className="text-red-500 focus:ring-red-500"
                      />
                      <span className="text-gray-700 text-sm">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message..."
                  rows={6}
                  className="w-full bg-white border-gray-300"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <Button type="submit" className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 font-semibold">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
