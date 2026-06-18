"use client";

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Connect from "./components/Connect";
import BackgroundDecorations from "./components/BackgroundDecorations";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundDecorations />
      <Navbar />

      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Connect />
        <Footer />
      </div>
    </main>
  );
}
