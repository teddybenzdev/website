import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Socials from './components/Socials';
import Features from './components/Features';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useLayoutEffect(() => {
    // Global ScrollTrigger setup if needed
    const ctx = gsap.context(() => {});
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background text-dark relative">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
