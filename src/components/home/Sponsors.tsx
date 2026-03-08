'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/effects';

const sponsors = [
  { name: 'Sponsor 1', logo: null },
  { name: 'Sponsor 2', logo: null },
  { name: 'Sponsor 3', logo: null },
  { name: 'Sponsor 4', logo: null },
  { name: 'Sponsor 5', logo: null },
  { name: 'Sponsor 6', logo: null },
];

export default function Sponsors() {
  return (
    <section className="py-24 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-heading-he text-foreground mb-4">
              שותפים לדרך
            </h2>
            <p className="text-foreground-muted text-lg font-medium">
              תודה לנותני החסות שמאפשרים לנו להרים את הרף בכל שנה מחדש.
            </p>
          </div>
          <Link href="/contact" className="text-primary hover:text-white transition-colors font-semibold flex items-center gap-2 group">
            הצטרפו כנותני חסות
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index} 
              className="bg-background hover:bg-white/5 transition-colors aspect-[3/2] flex items-center justify-center p-6 group relative"
            >
               {/* Shine effect */}
               <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
               
               {sponsor.logo ? (
                 <img
                   src={sponsor.logo}
                   alt={sponsor.name}
                   className="max-h-12 w-auto opacity-40 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500"
                 />
               ) : (
                 <span className="text-foreground-muted/40 font-bold text-xl group-hover:text-foreground transition-colors duration-300">
                   {sponsor.name}
                 </span>
               )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
