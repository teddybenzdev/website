import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MousePointer2, MapPin, Building2, Target, Zap, Bot, Database } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Value Prop: Software Development
const TelemetryTypewriter = () => {
  const fullText = "> pulling parcel data...\n> running comps on 14 lots.\n> flag: no legal road access.\n> report ready.";
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col pt-4">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-2 w-2 rounded-full bg-accent animate-pulse"></div>
        <span className="font-data text-xs font-semibold tracking-widest uppercase opacity-70">Live Feed</span>
      </div>
      <div className="bg-dark text-[#a6accd] rounded-[2rem] p-6 h-48 overflow-hidden font-data text-sm leading-relaxed border border-primary/20 relative shadow-inner">
        <div className="whitespace-pre-wrap">{text}<span className="inline-block w-2.5 h-4 bg-accent ml-1 animate-pulse"></span></div>
      </div>
    </div>
  );
};

// Value Prop: Agentic Workflows (New visual graph pipeline)
const AgenticWorkflowVisual = () => {
  const container = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 });

      // Node flow: Input (left) -> LLM (center) -> Action (right)
      tl.set(dotRef.current, { x: 0, opacity: 0 })
        .to(dotRef.current, { opacity: 1, duration: 0.2 })
        .to(dotRef.current, { x: 90, duration: 0.8, ease: "power1.inOut" }) // Move to center node
        .to(dotRef.current, { scale: 1.5, opacity: 0.5, yoyo: true, repeat: 1, duration: 0.2 }) // Pulse
        .to(dotRef.current, { x: 180, duration: 0.8, ease: "power1.inOut", delay: 0.2 }) // Move to right node
        .to(dotRef.current, { scale: 1.5, opacity: 0.5, yoyo: true, repeat: 1, duration: 0.2 }) // Pulse
        .to(dotRef.current, { opacity: 0, duration: 0.2, delay: 0.2 });

    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="relative w-full h-full flex flex-col items-center justify-center mt-6">
      <div className="relative flex items-center justify-between w-full max-w-[200px]">
        {/* Background track line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 -translate-y-1/2 z-0"></div>

        {/* Nodes */}
        <div className="relative z-10 bg-background border border-primary/20 rounded-full p-2 text-dark/70">
          <Database size={20} />
        </div>
        <div className="relative z-10 bg-accent text-background rounded-full p-2 shadow-[0_0_15px_#CC5833]">
          <Bot size={20} />
        </div>
        <div className="relative z-10 bg-background border border-primary/20 rounded-full p-2 text-dark/70">
          <Zap size={20} />
        </div>

        {/* Moving Dot */}
        <div
          ref={dotRef}
          className="absolute top-1/2 left-[12px] w-2 h-2 bg-accent rounded-full -translate-y-1/2 z-20 shadow-[0_0_5px_#CC5833]"
        ></div>
      </div>

      <div className="mt-8 flex justify-center">
        <a
          href="https://marketstack.ai"
          target="_blank"
          rel="noreferrer"
          className="bg-primary text-background px-6 py-2 rounded-full font-sans text-sm font-semibold tracking-wide hover:scale-105 transition-transform"
        >
          Automate Processes
        </a>
      </div>
    </div>
  );
};

// Value Prop: Land Development Visual
const LandDevelopmentVisual = () => {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(".house-line", { opacity: 0 });
      gsap.set(".house-fill", { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 95%",
          end: "center 50%",
          scrub: 1.5,
        }
      });

      // Blueprint fade in
      tl.fromTo(".blueprint-grid",
        { opacity: 0 },
        { opacity: 0.2, duration: 1, ease: "none" }
      )
      // Path drawing
      .to(".house-line", {
        strokeDashoffset: 0,
        opacity: 1, // crossfade in just for safety
        duration: 4,
        stagger: 0.2,
        ease: "power1.inOut"
      }, "+=0.2")
      // Fills pop in
      .to(".house-fill", {
        opacity: 1,
        duration: 2,
        stagger: 0.1,
        ease: "none"
      }, "-=2")
      // Finishing touch
      .to(".blueprint-grid", {
        scale: 1.05,
        duration: 2,
        ease: "none"
      }, "<");
      
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="relative w-full h-full min-h-[340px] bg-dark rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center p-8 border border-background/10 shadow-inner">
      
      {/* Blueprint Grid */}
      <div 
        className="blueprint-grid absolute inset-0 opacity-0 pointer-events-none origin-bottom" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, rgba(204,88,51,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(204,88,51,0.1) 1px, transparent 1px)', 
          backgroundSize: '1.5rem 1.5rem' 
        }}
      ></div>

      <div className="relative z-10 w-full flex-grow flex items-center justify-center drop-shadow-[0_4px_25px_rgba(204,88,51,0.2)]">
        <svg viewBox="0 0 100 100" className="w-full max-w-[280px] h-auto text-accent" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          
          {/* Foundation */}
          <path className="house-line transition-opacity" style={{ strokeDasharray: 100, strokeDashoffset: 100 }} pathLength="100" d="M 10,85 L 90,85" />
          
          {/* Walls */}
          <path className="house-line transition-opacity" style={{ strokeDasharray: 100, strokeDashoffset: 100 }} pathLength="100" d="M 20,85 L 20,45 L 80,45 L 80,85" />
          
          {/* Main Roof */}
          <path className="house-line transition-opacity" style={{ strokeDasharray: 150, strokeDashoffset: 150 }} pathLength="150" d="M 10,48 L 50,15 L 90,48" />
          <path className="house-line transition-opacity" style={{ strokeDasharray: 150, strokeDashoffset: 150 }} pathLength="150" d="M 17,45 L 50,18 L 83,45" />

          {/* Chimney */}
          <path className="house-line transition-opacity" style={{ strokeDasharray: 100, strokeDashoffset: 100 }} pathLength="100" d="M 70,30 L 70,12 L 80,12 L 80,38" />
          <path className="house-line transition-opacity" style={{ strokeDasharray: 100, strokeDashoffset: 100 }} pathLength="100" d="M 68,12 L 82,12 M 72,12 L 72,5 M 78,12 L 78,5" />
          
          {/* Door */}
          <path className="house-line transition-opacity" style={{ strokeDasharray: 100, strokeDashoffset: 100 }} pathLength="100" d="M 40,85 L 40,60 L 60,60 L 60,85" />
          <path className="house-line transition-opacity" style={{ strokeDasharray: 100, strokeDashoffset: 100 }} pathLength="100" d="M 42,62 L 58,62 L 58,85 M 42,85 L 42,62" />
          
          {/* Door Knob */}
          <circle className="house-fill" cx="44" cy="74" r="1.5" fill="currentColor" stroke="none" />
          
          {/* Windows - Left */}
          <path className="house-line transition-opacity" style={{ strokeDasharray: 100, strokeDashoffset: 100 }} pathLength="100" d="M 24,68 L 36,68 L 36,52 L 24,52 Z" />
          <path className="house-line transition-opacity" style={{ strokeDasharray: 100, strokeDashoffset: 100 }} pathLength="100" d="M 30,52 L 30,68 M 24,60 L 36,60" />

          {/* Windows - Right */}
          <path className="house-line transition-opacity" style={{ strokeDasharray: 100, strokeDashoffset: 100 }} pathLength="100" d="M 64,68 L 76,68 L 76,52 L 64,52 Z" />
          <path className="house-line transition-opacity" style={{ strokeDasharray: 100, strokeDashoffset: 100 }} pathLength="100" d="M 70,52 L 70,68 M 64,60 L 76,60" />
          
          {/* Top Attic Window */}
          <circle className="house-line transition-opacity" style={{ strokeDasharray: 50, strokeDashoffset: 50 }} pathLength="50" cx="50" cy="36" r="5" />
          <path className="house-line transition-opacity" style={{ strokeDasharray: 50, strokeDashoffset: 50 }} pathLength="50" d="M 45,36 L 55,36 M 50,31 L 50,41" />

          {/* Fills fading in */}
          <rect className="house-fill" x="20" y="45" width="60" height="40" fill="currentColor" fillOpacity="0.03" stroke="none" />
          <polygon className="house-fill" points="10,48 50,15 90,48" fill="currentColor" fillOpacity="0.08" stroke="none" />
          <rect className="house-fill" x="70" y="12" width="10" height="18" fill="currentColor" fillOpacity="0.1" stroke="none" />
          <rect className="house-fill" x="40" y="60" width="20" height="25" fill="currentColor" fillOpacity="0.05" stroke="none" />
          
        </svg>
      </div>
    </div>
  );
};

export default function Features() {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={container} className="pt-4 pb-16 px-6 max-w-7xl mx-auto relative z-20">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

        {/* Expanded Real Estate Section */}
        <div className="feature-card md:col-span-2 bg-primary text-background border border-primary/10 flex flex-col md:flex-row shadow-2xl overflow-hidden rounded-[2.5rem]">
          <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
            <h3 className="font-sans font-bold text-3xl md:text-4xl mb-4">Land Development</h3>
            <p className="font-sans text-base opacity-80 mb-8 max-w-md leading-relaxed">
              I buy and develop land in the Southeast &mdash; and I'm actively acquiring. Here's exactly what I'm looking for.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-start bg-background/5 border border-background/10 rounded-2xl p-5 hover:bg-background/10 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 group shadow-lg">
                <div className="bg-background/10 group-hover:bg-accent/20 p-3 rounded-xl text-accent transition-colors duration-300"><Target size={22} /></div>
                <div>
                  <h4 className="font-sans font-bold text-lg tracking-wide group-hover:text-accent transition-colors duration-300">My Buybox</h4>
                  <p className="font-sans text-sm opacity-80 leading-relaxed mt-1">10+ acre tracts for subdivision (500+ ft road frontage, near public sewer/utilities). Smaller infill lots for manufactured ($200k+) or stick-built custom homes ($500-900k).</p>
                </div>
              </div>
              <div className="flex gap-4 items-start bg-background/5 border border-background/10 rounded-2xl p-5 hover:bg-background/10 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 group shadow-lg">
                <div className="bg-background/10 group-hover:bg-accent/20 p-3 rounded-xl text-accent transition-colors duration-300"><Building2 size={22} /></div>
                <div>
                  <h4 className="font-sans font-bold text-lg tracking-wide group-hover:text-accent transition-colors duration-300">What I'm Building</h4>
                  <p className="font-sans text-sm opacity-80 leading-relaxed mt-1">Subdivisions, Manufactured Land Home Packages, New Construction Lots.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start bg-background/5 border border-background/10 rounded-2xl p-5 hover:bg-background/10 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 group shadow-lg">
                <div className="bg-background/10 group-hover:bg-accent/20 p-3 rounded-xl text-accent transition-colors duration-300"><MapPin size={22} /></div>
                <div>
                  <h4 className="font-sans font-bold text-lg tracking-wide group-hover:text-accent transition-colors duration-300">Target Locations</h4>
                  <p className="font-sans text-sm opacity-80 leading-relaxed mt-1">Southeast US: South Carolina, North Carolina, Tennessee, Georgia, and Alabama.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <LandDevelopmentVisual />
          </div>

        </div>

        {/* Existing Software Arch Card */}
        <div className="feature-card bg-background border border-primary/10 rounded-[2.5rem] p-8 shadow-xl flex flex-col">
          <h3 className="font-sans font-bold text-2xl mb-2">Software Dev</h3>
          <p className="font-sans text-sm opacity-70 mb-8 max-w-xs">Production systems, not demos. I run my own land business on this stack.</p>
          <div className="mt-auto h-full min-h-[220px]">
            <TelemetryTypewriter />
          </div>
        </div>

        {/* Existing Agentic Config Card */}
        <div className="feature-card bg-background border border-primary/10 rounded-[2.5rem] p-8 shadow-xl flex flex-col relative overflow-hidden">
          <h3 className="font-sans font-bold text-2xl mb-2">Agentic Workflows</h3>
          <p className="font-sans text-sm opacity-70 mb-8 max-w-xs">Agents that do real work &mdash; like the one that runs due diligence on parcels before I buy.</p>
          <div className="mt-auto h-full min-h-[200px]">
            <AgenticWorkflowVisual />
          </div>
        </div>

      </div>
    </section>
  );
}
