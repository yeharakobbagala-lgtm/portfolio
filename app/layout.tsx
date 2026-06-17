import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yehara Kobbegala | Full-Stack Developer & Computer Science Undergraduate",
  description: "Professional developer portfolio of Yehara Kobbegala. Specialized in scalable full-stack applications, enterprise APIs (Spring Boot, FastAPI), and AI-driven agricultural solutions.",
  keywords: ["Yehara Kobbegala", "Computer Science Undergraduate Portfolio", "Full-Stack Developer", "IIT Sri Lanka Student", "Computer Science Undergraduate", "Spring Boot", "FastAPI", "React Developer", "AI Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${robotoSans.variable} ${robotoMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-bg-space">{children}</body>
    </html>
  );
}
