import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const tiers = [
  {
    name: "Blueprint",
    desc: "Strategic analysis and architectural planning for land or digital systems.",
    price: "Audit",
    features: [
      "Systemic limitation discovery",
      "Process documentation",
      "Technology stack review",
      "Actionable deployment roadmap"
    ],
    highlighted: false,
    cta: "Request Audit"
  },
  {
    name: "Execution",
    desc: "Full-scale implementation of physical subdivisions or digital workflows.",
    price: "Build",
    features: [
      "End-to-end development",
      "Custom agentic integrations",
      "Zoning & regulatory management",
      "Priority technical support",
      "Performance optimization"
    ],
    highlighted: true,
    cta: "Initiate Build"
  },
  {
    name: "Autonomous",
    desc: "Long-term partnership scaling properties and intelligent systems.",
    price: "Scale",
    features: [
      "Continuous system refinement",
      "Dedicated operational retainer",
      "Predictive analytics scaling",
      "New construction pipeline"
    ],
    highlighted: false,
    cta: "Discuss Retainer"
  }
];

export default function Pricing() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto relative z-20">
      
      <div className="mb-20 text-center max-w-2xl mx-auto">
        <h2 className="font-sans font-bold text-4xl md:text-5xl mb-4 text-dark">Engagement Protocols</h2>
        <p className="font-sans text-lg opacity-70">Structured pipelines for transformation.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {tiers.map((tier, i) => (
          <div 
            key={i}
            className={`rounded-[2.5rem] p-8 md:p-10 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-2 ${
              tier.highlighted 
                ? 'bg-primary text-background shadow-2xl scale-105 border-2 border-accent/20 relative z-10' 
                : 'bg-background text-dark border border-primary/10 shadow-lg relative z-0'
            }`}
          >
            {tier.highlighted && (
              <div className="absolute top-0 right-8 transform -translate-y-1/2">
                <span className="bg-accent text-background text-xs font-bold uppercase tracking-widest py-1.5 px-3 rounded-full">
                  Recommended
                </span>
              </div>
            )}
            
            <h3 className="font-sans font-bold text-2xl mb-2">{tier.name}</h3>
            <p className="font-sans text-sm opacity-80 mb-6 h-10">{tier.desc}</p>
            
            <div className="mb-8 border-b border-current pb-8 opacity-20"></div>
            
            <div className="font-drama italic text-5xl mb-8">
              {tier.price}
            </div>
            
            <ul className="space-y-4 mb-10 h-[220px]">
              {tier.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check size={18} className={`mt-0.5 ${tier.highlighted ? 'text-accent' : 'text-primary'}`} />
                  <span className="font-sans text-sm opacity-90 leading-tight">{feat}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="https://marketstack.ai"
              target="_blank"
              rel="noreferrer"
              className={`w-full flex items-center justify-center gap-2 py-4 rounded-full font-sans font-bold transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.03] ${
                tier.highlighted 
                  ? 'bg-accent text-background hover:shadow-lg hover:shadow-accent/30' 
                  : 'bg-dark text-background hover:bg-primary'
              }`}
            >
              {tier.cta} <ArrowRight size={16} />
            </a>
          </div>
        ))}
      </div>
      
    </section>
  );
}
