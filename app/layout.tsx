import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Roboto_Mono } from "next/font/google";
import { personal } from "@/lib/data/personal";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: personal.seo.title,
  description: personal.seo.description,
  keywords: [...personal.seo.keywords],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#04030a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${robotoMono.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen bg-bg-space text-white">{children}</body>
    </html>
  );
}
