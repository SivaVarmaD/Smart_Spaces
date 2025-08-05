import type { Metadata } from "next";
import { Montserrat, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StickyDemoButton from "./components/StickyDemoButton";
import LiveChat from "./components/LiveChat";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SmartLife Solutions - Home Automation Hyderabad | Smart Home Systems",
  description: "Leading home automation company in Hyderabad. Smart lighting, security systems, door phones, and complete home automation solutions for Banjara Hills, Gachibowli, and Jubilee Hills.",
  keywords: "home automation Hyderabad, smart home systems, indoor monitor, video door phone, smart lighting, home security, Banjara Hills, Gachibowli",
  authors: [{ name: "SmartLife Solutions Pvt. Ltd." }],
  openGraph: {
    title: "SmartLife Solutions - Home Automation Hyderabad",
    description: "Transform your home into an intelligent living space with our advanced automation solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon placeholder - Replace with actual silver 'S' favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Tawk.to live chat placeholder */}
        {/* <script src="https://embed.tawk.to/..."></script> */}
      </head>
      <body className={`${montserrat.variable} ${lora.variable} antialiased bg-gray-50`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <StickyDemoButton />
        <LiveChat />
      </body>
    </html>
  );
}
