import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MousePointer2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Value Prop 1: Land Development
const DiagnosticShuffler = () => {
  const [cards, setCards] = useState([
    { id: 1, title: 'Subdivisions', data: 'Zoning & Platting', color: 'bg-primary' },
    { id: 2, title: 'Manufactured Homes', data: 'Turnkey Packages', color: 'bg-dark' },
    { id: 3, title: 'New Construction', data: 'Ground-up Builds', color: 'bg-accent' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const newCards = [...prev];
        const last = newCards.pop();
        newCards.unshift(last);
        return newCards;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-64 w-full flex items-center justify-center pt-8">
      {cards.map((card, i) => {
        const isTop = i === 0;
        return (
          <div
            key={card.id}
            className={`absolute top-0 w-[90%] p-6 rounded-[2rem] shadow-xl text-background transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${card.color}`}
            style={{
              transform: `translateY(${i * 20}px) scale(${1 - i * 0.05})`,
              zIndex: 10 - i,
              opacity: 1 - i * 0.2
            }}
          >
            <div className="font-data text-xs opacity-70 mb-2">00{card.id} // SECURE</div>
            <h4 className="font-sans font-bold text-xl">{card.title}</h4>
            <p className="font-sans text-sm mt-1 opacity-90">{card.data}</p>
          </div>
        );
      })}
    </div>
  );
};

// Value Prop 2: Software Development
const TelemetryTypewriter = () => {
  const fullText = "> Initializing software stack...\n> Deploying custom architectures.\n> Refactoring legacy systems.\n> Status: OPTIMAL.";
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

// Value Prop 3: Agentic Workflows
const CursorProtocolScheduler = () => {
  const container = useRef(null);
  const cursorRef = useRef(null);
  const targetDayRef = useRef(null);
  const buttonRef = useRef(null);
  const [activeDay, setActiveDay] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
      
      tl.set(cursorRef.current, { x: 200, y: 150, opacity: 0 })
        .set(buttonRef.current, { scale: 1 })
        .to(cursorRef.current, { opacity: 1, duration: 0.3 })
        // Move to Wednesday (index 3)
        .to(cursorRef.current, { 
          x: 120, y: 65,
          duration: 1, 
          ease: "power2.inOut" 
        })
        // Click day
        .to(cursorRef.current, { scale: 0.9, duration: 0.1 })
        .call(() => setActiveDay(3))
        .to(cursorRef.current, { scale: 1, duration: 0.1 })
        // Move to button
        .to(cursorRef.current, {
          x: 140, y: 130,
          duration: 0.8,
          ease: "power2.inOut",
          delay: 0.3
        })
        // Click button
        .to(cursorRef.current, { scale: 0.9, duration: 0.1 })
        .to(buttonRef.current, { scale: 0.95, duration: 0.1 }, "<")
        .to(cursorRef.current, { scale: 1, duration: 0.1 })
        .to(buttonRef.current, { scale: 1, duration: 0.1 }, "<")
        // Fade out
        .to(cursorRef.current, { opacity: 0, duration: 0.3, delay: 0.2 })
        .call(() => setActiveDay(null));

    }, container);
    return () => ctx.revert();
  }, []);

  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <div ref={container} className="relative w-full h-full flex flex-col justify-center mt-6">
      <div className="grid grid-cols-7 gap-1.5 mb-6">
        {days.map((day, i) => (
          <div 
            key={i} 
            ref={i === 3 ? targetDayRef : null}
            className={`h-10 rounded-xl flex items-center justify-center font-data text-sm transition-colors duration-300 ${
              activeDay === i ? 'bg-accent text-background border-accent' : 'bg-background border border-primary/20 text-dark/60'
            }`}
          >
            {day}
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button 
          ref={buttonRef}
          className="bg-primary text-background px-6 py-2 rounded-full font-sans text-sm font-semibold tracking-wide"
        >
          Deploy Agent
        </button>
      </div>
      
      {/* Animated Cursor */}
      <div ref={cursorRef} className="absolute top-0 left-0 z-10 drop-shadow-lg text-dark">
        <MousePointer2 fill="#1A1A1A" size={24} />
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
    <section id="features" ref={container} className="py-32 px-6 max-w-7xl mx-auto relative z-20">
      
      <div className="mb-20 max-w-2xl">
        <h2 className="font-sans font-bold text-4xl mb-4">Functional Subsystems</h2>
        <p className="font-drama italic text-2xl text-dark/70">Building across domains with strict precision.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="feature-card bg-background border border-primary/10 rounded-[2.5rem] p-8 shadow-xl flex flex-col">
          <h3 className="font-sans font-bold text-2xl mb-2">Land Development</h3>
          <p className="font-sans text-sm opacity-70 mb-8 max-w-[200px]">Physical transformation engineered for scale and durability.</p>
          <div className="mt-auto">
            <DiagnosticShuffler />
          </div>
        </div>

        {/* Card 2 */}
        <div className="feature-card bg-background border border-primary/10 rounded-[2.5rem] p-8 shadow-xl flex flex-col">
          <h3 className="font-sans font-bold text-2xl mb-2">Software Dev</h3>
          <p className="font-sans text-sm opacity-70 mb-8 max-w-[200px]">Robust digital architectures and clean systems.</p>
          <div className="mt-auto h-full min-h-[220px]">
            <TelemetryTypewriter />
          </div>
        </div>

        {/* Card 3 */}
        <div className="feature-card bg-background border border-primary/10 rounded-[2.5rem] p-8 shadow-xl flex flex-col relative overflow-hidden">
          <h3 className="font-sans font-bold text-2xl mb-2">Agentic Workflows</h3>
          <p className="font-sans text-sm opacity-70 mb-8 max-w-[200px]">Automating complexity through intelligent protocols.</p>
          <div className="mt-auto h-full min-h-[200px]">
            <CursorProtocolScheduler />
          </div>
        </div>
      </div>
      
    </section>
  );
}
