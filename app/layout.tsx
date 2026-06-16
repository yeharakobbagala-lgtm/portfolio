import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yehara Kobbagala | Full-Stack Developer & Computer Science Undergraduate",
  description: "Professional developer portfolio of Yehara Kobbagala. Specialized in scalable full-stack applications, enterprise APIs (Spring Boot, FastAPI), and AI-driven agricultural solutions.",
  keywords: ["Yehara Kobbagala", "Computer Science Undergraduate Portfolio", "Full-Stack Developer", "IIT Sri Lanka Student", "Computer Science Undergraduate", "Spring Boot", "FastAPI", "React Developer", "AI Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-bg-space">{children}</body>
    </html>
  );
}
