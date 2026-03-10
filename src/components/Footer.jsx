import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-background rounded-t-[4rem] px-6 py-20 md:py-32 mt-20 relative overflow-hidden">
      
      {/* Absolute faint background texture */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noiseFilterFooter">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilterFooter)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        
        {/* Brand Column */}
        <div className="md:col-span-2 flex flex-col justify-between h-full">
          <div>
            <h2 className="font-sans font-bold text-3xl mb-4">Teddy Benz</h2>
            <p className="font-drama italic text-xl opacity-70 max-w-sm">
              Engineering the substrate of tomorrow. Land, Logic, and Autonomous Systems.
            </p>
          </div>
          
          <div className="mt-12 flex items-center gap-3">
            <div className="relative flex h-3 w-3 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
            </div>
            <span className="font-data text-xs uppercase tracking-widest text-[#10b981]">System Operational</span>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex flex-col gap-4">
          <h4 className="font-sans font-bold uppercase tracking-widest text-xs opacity-50 mb-4">Architecture</h4>
          <a href="#features" className="font-sans text-sm hover:text-accent transition-colors">Framework</a>
          <a href="#philosophy" className="font-sans text-sm hover:text-accent transition-colors">Manifesto</a>
          <a href="#protocol" className="font-sans text-sm hover:text-accent transition-colors">Protocol</a>
        </div>
        
        {/* Legal/Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-sans font-bold uppercase tracking-widest text-xs opacity-50 mb-4">Network</h4>
          <a href="https://marketstack.ai" target="_blank" rel="noreferrer" className="font-sans text-sm hover:text-accent transition-colors">MarketStack AI</a>
          <a href="#" className="font-sans text-sm hover:text-accent transition-colors">LinkedIn</a>
          <a href="#" className="font-sans text-sm hover:text-accent transition-colors">Contact Node</a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto relative z-10 mt-24 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-xs opacity-40">
        <p>&copy; {new Date().getFullYear()} Teddy Benz. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
        </div>
      </div>
      
    </footer>
  );
}
