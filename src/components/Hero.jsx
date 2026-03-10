import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const container = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered fade up for text parts
      gsap.from('.hero-element', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.2
      });
    }, container);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative h-[100dvh] w-full overflow-hidden flex items-end">
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80&w=2000" 
          alt="Dark forest organic texture" 
          className="w-full h-full object-cover scale-[1.02]"
        />
        {/* Heavy Primary to Black/Transparent gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent overlay-blend"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-24 md:pb-32 lg:w-2/3 lg:mx-0 lg:ml-[10%]">
        <div className="flex flex-col items-start gap-4">
          <p className="hero-element font-data text-accent tracking-widest uppercase text-xs md:text-sm font-semibold">
            Teddy Benz — Developer / Consultant
          </p>
          
          <h1 className="flex flex-col leading-[1.1] md:leading-[1.05] text-background">
            <span className="hero-element font-sans font-bold text-4xl md:text-6xl tracking-tight">
              The land is the
            </span>
            <span className="hero-element font-drama italic text-7xl md:text-[8rem] lg:text-[10rem] pr-4 mt-[-0.1em]">
              Algorithm.
            </span>
          </h1>

          <p className="hero-element font-sans text-background/80 text-lg md:text-xl max-w-md mt-4 font-light leading-relaxed">
            Re-engineering physical space and digital systems. From subdivisions to agentic workflows.
          </p>

          <div className="hero-element mt-8">
            <a 
              href="https://marketstack.ai"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center group overflow-hidden bg-accent text-background px-8 py-4 rounded-[2rem] font-sans font-bold tracking-wide hover:scale-[1.03] transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            >
              <span className="absolute inset-0 w-full h-full -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] bg-primary"></span>
              <span className="relative z-10 flex items-center gap-3">
                Initiate AI Audit <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
