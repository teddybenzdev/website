import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Twitter, Github, Instagram, Facebook } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const socials = [
  { name: 'Instagram', icon: Instagram, href: 'https://teddybe.nz/instagram' },
  { name: 'Facebook', icon: Facebook, href: 'https://teddybe.nz/facebook' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://teddybe.nz/linkedin' },
  { name: 'X', icon: Twitter, href: 'https://teddybe.nz/x' },
  { name: 'GitHub', icon: Github, href: 'https://teddybe.nz/github' },
];

export default function Socials() {
  return (
    <section className="w-full relative z-20 px-6 pt-2 pb-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {socials.map((social, idx) => {
          const Icon = social.icon;
          return (
            <a 
              key={idx}
              href={social.href}
              className="social-chip group flex items-center justify-center md:justify-start gap-3 bg-background border border-primary/10 rounded-full px-5 py-4 shadow-md hover:shadow-lg w-full hover:border-accent/40 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-1"
            >
              <div className="bg-dark/5 p-1.5 rounded-full group-hover:bg-accent/10 transition-colors">
                <Icon size={16} className="text-dark opacity-80 group-hover:text-accent transition-colors" />
              </div>
              <span className="font-sans font-semibold text-sm text-dark/90">{social.name}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
