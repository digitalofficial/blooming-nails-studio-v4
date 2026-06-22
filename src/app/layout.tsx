import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blooming Nails Studio | Nail Salon in Tucson, AZ",
  description:
    "Blooming Nails Studio is a premium nail salon in Tucson, AZ offering manicures, pedicures, gel nails, acrylics, dip powder, nail art, and more. Book your appointment today.",
  keywords: [
    "nail salon",
    "Tucson",
    "manicure",
    "pedicure",
    "gel nails",
    "acrylic nails",
    "nail art",
    "dip powder",
    "Blooming Nails Studio",
  ],
  openGraph: {
    title: "Blooming Nails Studio | Nail Salon in Tucson, AZ",
    description:
      "Premium nail salon in Tucson, AZ. Manicures, pedicures, gel, acrylics, nail art & more.",
    type: "website",
    locale: "en_US",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NailSalon",
  name: "Blooming Nails Studio",
  description:
    "Premium nail salon in Tucson, AZ offering manicures, pedicures, gel nails, acrylics, dip powder, and nail art.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tucson",
    addressRegion: "AZ",
    addressCountry: "US",
  },
  telephone: "+1-520-555-0199",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "11:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
  url: "https://bloomingnailsstudio.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-base text-text font-body antialiased">{children}</body>
    </html>
  );
}
