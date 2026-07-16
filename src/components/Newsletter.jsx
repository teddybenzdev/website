import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="newsletter" className="px-6 pb-16 max-w-7xl mx-auto relative z-20">
      <div className="bg-primary text-background rounded-[2.5rem] shadow-2xl border border-primary/10 px-8 py-8 md:px-12 md:py-10 flex flex-col gap-5">

        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
          <h2 className="font-sans font-bold text-3xl md:text-4xl flex-shrink-0">Newsletter</h2>

          <div className="w-full md:flex-1">
            {submitted ? (
              <div className="flex items-center gap-3 bg-background/10 border border-background/20 rounded-full px-5 py-3">
                <div className="bg-accent/20 p-2 rounded-full text-accent"><Check size={18} /></div>
                <p className="font-sans text-sm opacity-90">You're in. First one lands in your inbox soon.</p>
              </div>
            ) : (
              <form
                name="newsletter"
                className="flex flex-col sm:flex-row gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  autoComplete="name"
                  className="w-full sm:flex-1 sm:min-w-0 bg-background/10 border border-background/20 rounded-full px-5 py-3 font-sans text-sm text-background placeholder:text-background/50 focus:outline-none focus:border-accent transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  autoComplete="email"
                  className="w-full sm:flex-1 sm:min-w-0 bg-background/10 border border-background/20 rounded-full px-5 py-3 font-sans text-sm text-background placeholder:text-background/50 focus:outline-none focus:border-accent transition-colors"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto flex-shrink-0 flex items-center justify-center gap-2 bg-accent text-background px-6 py-3 rounded-full font-sans font-bold tracking-wide hover:scale-[1.03] transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] shadow-lg hover:shadow-accent/40"
                >
                  Subscribe <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        <p className="font-sans text-base opacity-80 leading-relaxed text-center">
          I buy land and build the AI that vets it. Get the build notes: real parcels, what the due-diligence agent caught, and what broke along the way.
        </p>

      </div>
    </section>
  );
}
