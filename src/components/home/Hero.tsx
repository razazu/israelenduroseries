'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-center overflow-hidden bg-[#020617]">

      {/* Background Layers */}
      <div className="absolute inset-0 bg-topo-brand opacity-20" />

      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100 ease-out"
        style={{
          backgroundImage: 'url("/media/490107325_1242492127881175_5265523208783072571_n.jpg")',
          backgroundPosition: 'center center',
          transform: `scale(${1 + scrollY * 0.0005})`,
          opacity: 0.7
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />

      {/* Main Content - Centered & Minimal */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-4">

        {/* Season Badge */}
        <div className="mb-6 animate-fade-in-down">
          <span className="bg-accent text-black font-black text-xs md:text-sm px-4 py-1 uppercase tracking-[0.2em] transform -skew-x-12 inline-block">
            עונה 2026
          </span>
        </div>

        {/* Logo */}
        <div className="relative mb-10 animate-fade-in-down">
          <img
            src="/media/logo/IES LOGO.png"
            alt="Israel Enduro Series"
            className="w-[24rem] md:w-[36rem] h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Minimal CTA */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200">
          <Link
            href="/league#register"
            className="btn btn-accent text-lg min-w-[200px] shadow-[0_0_40px_rgba(245,158,11,0.4)] hover:shadow-[0_0_60px_rgba(245,158,11,0.6)] transition-all duration-300"
          >
            הרשמה עכשיו
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-white/40">
          <span className="text-[10px] uppercase tracking-[0.3em] font-light">גלול</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
