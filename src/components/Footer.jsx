import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Extracted CTA Over Background */}
      <div className="w-full flex justify-center py-20 md:py-24 relative z-10 px-6">
        <a 
          href="https://marketstack.ai/audit"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center relative overflow-hidden group bg-accent text-background px-10 py-5 rounded-[2.5rem] font-sans font-bold tracking-wide hover:scale-[1.03] transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] shadow-lg hover:shadow-accent/40 w-full sm:w-auto"
        >
          <span className="absolute inset-0 w-full h-full -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] bg-primary/95 pointer-events-none rounded-[2.5rem]"></span>
          <span className="relative z-10 flex items-center gap-3 text-lg">
            Get AI Audit <ArrowUpRight size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </span>
        </a>
      </div>

      <footer className="bg-dark text-background rounded-t-[4rem] px-6 py-20 md:py-24 relative overflow-hidden">
        
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center justify-center text-center gap-12">
        <div className="flex flex-col items-center">
          <h2 className="font-sans font-bold text-3xl mb-2">Teddy Benz</h2>
          <p className="font-drama italic text-xl opacity-70">
            Structuring logic across physical land and digital primitives.
          </p>
          
          <div className="mt-8 flex items-center gap-3">
            <div className="relative flex h-3 w-3 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
            </div>
            <span className="font-data text-xs uppercase tracking-widest text-[#10b981]">System Operational</span>
          </div>
        </div>

      </div>

      <div className="max-w-4xl mx-auto relative z-10 mt-16 pt-8 border-t border-background/10 flex flex-col items-center justify-center gap-4 font-sans text-xs opacity-40">
        <p>&copy; {new Date().getFullYear()} Teddy Benz. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
        </div>
      </div>
      
      </footer>
    </div>
  );
}
