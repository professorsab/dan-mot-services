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
  title: "Dan MOT & Services | MOT Testing, Car Service & Repairs in Norwich",
  description:
    "Dan MOT & Services is your trusted car workshop in Norwich, UK, offering MOT testing, car servicing, brake repairs, tyre services and more.",
  keywords: [
    "MOT Norwich",
    "Car Service Norwich",
    "Brake Repair Norwich",
    "Tyre Service Norwich",
    "General Car Repairs",
    "Dan MOT & Services",
    "Auto Garage Norwich",
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
    title: "Dan MOT & Services | Norwich Car Workshop",
    description:
      "Your reliable MOT and car servicing experts in Norwich. Book your MOT test or vehicle repair today!",
    url: "https://mot-norwich.co.uk",
    siteName: "Dan MOT & Services",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Add a proper OG image in your /public directory
        width: 1200,
        height: 630,
        alt: "Dan MOT & Services Workshop",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "Dan MOT & Services",
    image: "https://mot-norwich.co.uk/og-image.jpg",
    "@id": "https://mot-norwich.co.uk/",
    url: "https://mot-norwich.co.uk/",
    telephone: "+44 1234 567890", // Replace with your business phone
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Example Street",
      addressLocality: "Norwich",
      postalCode: "NR1 1AA",
      addressCountry: "GB",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
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
      "Car Servicing",
      "Brake Repair",
      "General Vehicle Repairs",
      "Tyre Services",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
