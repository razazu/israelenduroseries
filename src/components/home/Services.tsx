'use client';

import Link from 'next/link';

const services = [
  {
    title: 'RACE LEAGUE',
    subtitle: 'SEASON 2026',
    description: '5 Pro-level stages across the country. UCI standards.',
    link: '/league',
    icon: '01'
  },
  {
    title: 'TRAIL BUILDING',
    subtitle: 'INFRASTRUCTURE',
    description: 'Professional trail design & construction for municipalities.',
    link: '/trails',
    icon: '02'
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-background-secondary border-t border-white/5">
      <div className="container-box">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">What We Do</span>
            <h2 className="font-heading text-4xl md:text-5xl text-white">
              CORE DISCIPLINES
            </h2>
          </div>
          <div className="h-px bg-white/20 w-full md:w-64 mb-2" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {services.map((service) => (
            <Link 
              key={service.title} 
              href={service.link}
              className="group relative bg-background p-12 hover:bg-white/5 transition-colors aspect-[4/3] flex flex-col justify-between"
            >
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs text-gray-500 border border-gray-800 px-2 py-1">
                  {service.icon}
                </span>
                <svg className="w-6 h-6 text-gray-600 group-hover:text-primary transition-colors transform group-hover:-translate-y-1 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              <div>
                <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2 block">
                  {service.subtitle}
                </span>
                <h3 className="font-heading text-3xl md:text-4xl text-white mb-4 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-300 ease-out" />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
