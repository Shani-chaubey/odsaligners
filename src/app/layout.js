import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AOSInit from "@/components/AOSInit";
import Header1 from "@/components/Header1";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ODS Aligners - Precision Clear Aligners for Clinics and Partners",
  description:
    "Clinically-engineered, quality-controlled aligners trusted by orthodontists and private-label partners worldwide. ISO 13485 Certified, CE Approved.",
  icons: {
    icon: "/images/fevicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSInit />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
