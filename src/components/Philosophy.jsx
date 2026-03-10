import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const sectionRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const bgRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      // Reveal text
      gsap.from('.reveal-text', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="philosophy"
      ref={sectionRef} 
      className="relative w-full py-40 overflow-hidden bg-dark text-background flex items-center justify-center min-h-screen"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 opacity-20" ref={bgRef}>
        <img 
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000" 
          alt="Organic clinical texture"
          className="w-full h-[130%] object-cover object-center -mt-[15%]"
        />
        <div className="absolute inset-0 bg-dark/60 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full flex flex-col items-center text-center">
        
        <p className="reveal-text font-sans text-xl md:text-2xl text-background/60 font-medium mb-8 max-w-2xl">
          Most developers and consultants focus on: <span className="text-background">isolated deliverables and rigid boundaries.</span>
        </p>
        
        <h2 className="reveal-text font-drama italic text-5xl md:text-7xl lg:text-8xl leading-none mt-4 max-w-4xl">
          We focus on: <br />
          <span className="text-accent not-italic font-sans font-bold tracking-tight inline-block mt-4">integrated</span> systems.
        </h2>

      </div>
    </section>
  );
}
