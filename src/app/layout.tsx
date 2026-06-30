import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FAIITA - Federation of All India IT Associations",
  description:
    "Uniting 50,000+ IT entrepreneurs across 25 states in India. Find IT dealers, distributors, resellers, and stay updated with industry news and events.",
  keywords: [
    "FAIITA",
    "IT dealers India",
    "IT association",
    "computer dealers",
    "IT resellers",
    "technology dealers India",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
