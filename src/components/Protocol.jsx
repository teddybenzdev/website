import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const protocols = [
  {
    step: '01',
    title: 'Strategic Architecture',
    desc: 'Auditing constraints to formulate the blueprint. Both physical terrain and digital infrastructure require deep systemic understanding.',
    visual: 'geometric'
  },
  {
    step: '02',
    title: 'Precision Build',
    desc: 'Execution governed by logic. Iterative development, clear milestones, absolute adherence to the master algorithm.',
    visual: 'scanning'
  },
  {
    step: '03',
    title: 'Agentic Lifecycle',
    desc: 'Transition from passive to autonomous. Imbuing workflows and real estate with systems that self-optimize over time.',
    visual: 'waveform'
  }
];

export default function Protocol() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Pinning the whole section to scroll through cards
      cardsRef.current.forEach((card, index) => {
        if (index === 0) return; // Skip the first as it's the base
        
        const previousCard = cardsRef.current[index - 1];

        gsap.to(previousCard, {
          scale: 0.9,
          opacity: 0.5,
          filter: 'blur(20px)',
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          }
        });
      });

      // SVG animations
      gsap.to('.rotate-slow', {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'none',
        transformOrigin: "50% 50%"
      });

      gsap.to('.scan-line', {
        y: 200,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });

      gsap.to('.pulse-path', {
        strokeDashoffset: 0,
        duration: 2,
        repeat: -1,
        ease: 'power2.inOut',
        yoyo: true
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  const renderVisual = (type) => {
    switch(type) {
      case 'geometric':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full opacity-20">
            <g className="rotate-slow">
              <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <rect x="40" y="40" width="120" height="120" fill="none" stroke="currentColor" strokeWidth="2" className="rotate-slow" style={{animationDirection: "reverse"}} />
              <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="4" />
            </g>
          </svg>
        );
      case 'scanning':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full opacity-20 relative">
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
            <rect width="200" height="200" fill="url(#grid)" />
            <line x1="0" y1="0" x2="200" y2="0" stroke="currentColor" strokeWidth="4" className="scan-line text-accent shadow-[0_0_15px_currentColor]" />
          </svg>
        );
      case 'waveform':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full opacity-30">
            <path 
              className="pulse-path"
              d="M 10 100 L 50 100 L 70 50 L 90 150 L 110 80 L 130 100 L 190 100" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="4" 
              strokeLinejoin="round"
              strokeDasharray="300"
              strokeDashoffset="300"
            />
          </svg>
        );
      default: return null;
    }
  };

  return (
    <section id="protocol" ref={containerRef} className="relative w-full bg-background mt-20">
      <div className="absolute top-10 left-0 right-0 text-center z-50 pointer-events-none opacity-50 font-data text-sm">
        SYSTEM_ARCHIVE // SCROLL TO PROGRESS
      </div>

      {protocols.map((protocol, index) => (
        <div 
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          className="sticky top-0 h-[100dvh] w-full flex items-center justify-center p-6 bg-background origin-top overflow-hidden"
          style={{ zIndex: index + 10 }}
        >
          {/* Background Visual Box */}
          <div className="absolute right-0 opacity-40 w-full md:w-1/2 h-full -z-10 flex items-center justify-center text-primary pointer-events-none">
            {renderVisual(protocol.visual)}
          </div>

          <div className="w-full max-w-5xl flex flex-col md:flex-row items-start justify-between gap-12 pt-20">
            <div className="md:w-1/3">
              <div className="font-data text-6xl md:text-8xl font-bold text-primary/10 tracking-tighter mb-4">
                {protocol.step}
              </div>
            </div>
            
            <div className="md:w-2/3 bg-background/80 backdrop-blur-md p-8 rounded-[2rem] border border-primary/20 shadow-2xl">
              <h2 className="font-sans font-bold text-3xl md:text-5xl mb-6 text-dark tracking-tight">
                {protocol.title}
              </h2>
              <p className="font-sans text-lg md:text-xl text-dark/80 leading-relaxed font-light">
                {protocol.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
