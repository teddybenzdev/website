import React, { useLayoutEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useLayoutEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav 
        ref={navRef}
        className={`pointer-events-auto transition-all duration-500 flex items-center justify-between px-6 py-3 rounded-[2rem] w-full max-w-7xl ${
          isScrolled 
            ? 'bg-background/80 backdrop-blur-xl border border-primary/20 text-dark shadow-md' 
            : 'bg-transparent text-dark border border-transparent'
        }`}
      >
        <div className="flex items-center gap-2">
          {/* Status Indicator inside logo area */}
          <div className="relative flex h-3 w-3 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-50"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </div>
          <span className="font-sans font-bold tracking-tight text-lg">Teddy Benz</span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium tracking-wide opacity-80">
          {/* Links intentionally removed per user request */}
        </div>

        <a 
          href="https://marketstack.ai/audit" 
          target="_blank" 
          rel="noreferrer"
          className="relative overflow-hidden group bg-accent text-background px-5 py-2.5 rounded-full flex items-center gap-2 font-sans font-semibold text-sm hover:scale-[1.03] transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
        >
          <span className="absolute inset-x-0 bottom-0 h-full w-full -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] bg-primary object-cover rounded-full pointer-events-none"></span>
          <span className="relative z-10 flex items-center gap-2">
            AI Audit <ArrowUpRight size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </a>
      </nav>
    </div>
  );
}
