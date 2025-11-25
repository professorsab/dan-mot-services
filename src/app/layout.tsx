import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dan MOT & Services | MOT Testing, Car Servicing & Vehicle Repairs in Norwich",
  description:
    "Trusted MOT Testing, oil changes, vehicle repairs, and car servicing in Norwich. Experienced technicians, same-day certificates, and professional automotive care.",
  keywords: [
    "MOT Norwich",
    "Oil Change Norwich",
    "Vehicle Repairs Norwich",
    "Brake Repair Norwich",
    "Tyre Services Norwich",
    "Car Servicing Norwich",
    "Auto Garage Norwich",
    "Dan MOT & Services"
  ],
  authors: [{ name: "Dan MOT & Services", url: "https://mot-norwich.co.uk/" }],
  creator: "Dan MOT & Services",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://mot-norwich.co.uk"),
  openGraph: {
    title: "Dan MOT & Services | Norwich Car Workshop & MOT Specialists",
    description:
      "Your reliable Norwich MOT and car servicing experts. Book your MOT test, oil change, or vehicle repair today.",
    url: "https://mot-norwich.co.uk",
    siteName: "Dan MOT & Services",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Ensure this exists in /public
        width: 1200,
        height: 630,
        alt: "Dan MOT & Services Workshop in Norwich",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@YourTwitterHandle", // Replace with your business Twitter
    title: "Dan MOT & Services | Norwich MOT, Car Servicing & Repairs",
    description:
      "Expert MOT testing, car servicing, and vehicle repairs in Norwich. Same-day MOT certificates and professional service.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "Dan MOT & Services",
    image: "https://mot-norwich.co.uk/og-image.jpg",
    "@id": "https://mot-norwich.co.uk/",
    url: "https://mot-norwich.co.uk/",
    telephone: "+44 1234 567890", // Replace with actual phone
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Example Street",
      addressLocality: "Norwich",
      postalCode: "NR1 1AA",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.6309, // Replace with actual coordinates
      longitude: 1.2974,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    priceRange: "££",
    serviceType: [
      "MOT Testing",
      "Oil Changes",
      "Car Servicing",
      "Brake Repairs",
      "Tyre Services",
      "General Vehicle Repairs"
    ],
    offers: {
      "@type": "Offer",
      url: "https://mot-norwich.co.uk/",
      priceCurrency: "GBP",
      eligibleRegion: {
        "@type": "Place",
        name: "Norwich",
      },
    },
    sameAs: [
      "https://www.facebook.com/YourBusinessPage",
      "https://www.instagram.com/YourBusinessPage",
      "https://www.yell.com/biz/dan-mot-and-services-norwich", // Example local listing
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
