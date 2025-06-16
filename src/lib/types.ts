import type React from "react"
// Contact form types
export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  subject: "general" | "oil" | "brake" | "tire"
  message: string
}

// Service card types
export interface Service {
  icon: React.ReactNode
  title: string
  description: string
}

// Navigation types
export interface NavItem {
  href: string
  label: string
}
