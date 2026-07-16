import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, Instagram, Facebook, Linkedin, Github } from 'lucide-react';

const XIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function Hero() {
  const container = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered fade up for text parts
      gsap.from('.hero-element', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2
      });

      // Image reveal
      gsap.from('.hero-image', {
        scale: 1.05,
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out',
        delay: 0.4
      });
    }, container);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative w-full overflow-hidden bg-background">
      
      {/* Content Container - Flex layout for centering */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-12 md:pt-40 md:pb-16 lg:pb-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Side: Copy & Buttons */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8 w-full lg:w-1/2 order-1 lg:pl-12">
          
          <div className="flex flex-col items-center lg:items-start gap-2 w-full">
            <p className="hero-element font-data text-accent tracking-widest uppercase text-xs md:text-sm font-semibold mb-2">
              AI &times; Real Estate &mdash; Builder / Land Investor
            </p>
            
            <h1 className="flex flex-col leading-[1.1] md:leading-[1.05] text-dark">
              <span className="hero-element font-sans font-bold text-5xl md:text-6xl lg:text-[6.5rem] tracking-tighter pr-0 mt-[-0.1em] whitespace-nowrap">
                Teddy Benz
              </span>
            </h1>
          </div>

          {/* Buttons */}
          <div className="hero-element w-full sm:w-auto z-20 relative flex flex-col sm:flex-row items-center gap-4 mt-2">
            <a 
              href="https://marketstack.ai/audit"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center relative overflow-hidden group bg-accent w-full sm:w-auto text-background px-8 py-4 rounded-[2rem] font-sans font-bold tracking-wide hover:scale-[1.03] transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] shadow-lg hover:shadow-accent/40"
            >
              <span className="absolute inset-0 w-full h-full -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] bg-primary/95 pointer-events-none rounded-[2rem]"></span>
              <span className="relative z-10 flex items-center gap-3">
                Get AI Audit <ArrowUpRight size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            {/* Social Icons (Icon Only) */}
            <div className="flex items-center justify-center gap-3 mt-4 sm:mt-0 px-2 lg:ml-2">
              <a href="https://teddybe.nz/instagram" className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center text-dark/70 hover:bg-accent hover:border-accent hover:text-background hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"><Instagram size={20} /></a>
              <a href="https://teddybe.nz/facebook" className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center text-dark/70 hover:bg-accent hover:border-accent hover:text-background hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"><Facebook size={20} /></a>
              <a href="https://teddybe.nz/linkedin" className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center text-dark/70 hover:bg-accent hover:border-accent hover:text-background hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"><Linkedin size={20} /></a>
              <a href="https://teddybe.nz/x" className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center text-dark/70 hover:bg-accent hover:border-accent hover:text-background hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"><XIcon size={18} /></a>
              <a href="https://teddybe.nz/github" className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center text-dark/70 hover:bg-accent hover:border-accent hover:text-background hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"><Github size={20} /></a>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="hero-image relative w-full max-w-[320px] lg:max-w-[360px] xl:max-w-[400px] mx-auto lg:mr-12 xl:mr-16 lg:mx-0 shadow-2xl rounded-[3rem] overflow-hidden border-2 border-primary/5 order-2 flex-shrink-0 aspect-[4/5]">
          <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none bg-stone-500 mix-blend-overlay"></div>
          
          <img 
            src="/teddybenz.jpg" 
            alt="Teddy Benz Profile" 
            className="w-full h-full object-cover object-top grayscale-[15%] contrast-110"
          />
          
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-dark/20 to-transparent pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
}
