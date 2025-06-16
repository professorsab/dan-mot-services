import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 text-center">
        {/* Company Info - Centered */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span className="font-semibold text-lg">Dan MOT & Services LTD</span>
          </div>
          <div className="space-y-1 text-red-500">
            <p>enquiry@danmot.com</p>
            <p>(508) 795-3948</p>
          </div>
        </div>

        {/* Support and Social - Side by side centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-md mx-auto mb-8">
          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <div className="space-y-2">
              <Link href="#about" className="block text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="#services" className="block text-gray-300 hover:text-white transition-colors">
                Our Services
              </Link>
              <Link href="#contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Stay with us</h4>
            <div className="flex justify-center space-x-4 mb-4">
              <Link href="#" className="text-red-500 hover:text-red-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-red-500 hover:text-red-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
            <div className="space-y-1 text-red-500 text-sm">
              <p>danmotltd</p>
              <p>danmotservices</p>
            </div>
          </div>
        </div>

        {/* Copyright - Centered */}
        <div className="border-t border-gray-800 pt-8 text-gray-400">
          <p>© 2025 Dan MOT & Services LTD.</p>
          <p>All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
