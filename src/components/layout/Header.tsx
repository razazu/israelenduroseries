'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/league', label: 'הליגה' },
  { href: '/trails', label: 'מסלולים' },
  { href: '/gallery', label: 'מדיה' },
  { href: '/contact', label: 'צור קשר' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMenuOpen
            ? 'bg-[#020617]/95 backdrop-blur-md border-b border-white/10 py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">

            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0" onClick={() => setIsMenuOpen(false)}>
              <img
                src="/media/logo/ies-logo-trans-white (1).png"
                alt="Israel Enduro Series"
                className="h-10 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-bold text-white/70 hover:text-white transition-colors relative group py-2"
                >
                  {link.label}
                  <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
              <Link
                href="/league#register"
                className="btn btn-accent text-sm px-6 py-2"
                style={{ clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}
              >
                הרשמה 2026
              </Link>
            </nav>

            {/* Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px]"
              aria-label="פתח תפריט"
            >
              <span className={`block w-7 h-[2px] bg-white transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
              <span className={`block w-7 h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block w-7 h-[2px] bg-white transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu — full screen overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-[#020617] transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-topo-brand opacity-10 pointer-events-none" />

        <div className="flex flex-col justify-center h-full px-8 pt-20 pb-12 gap-2">
          {navLinks.map((link, idx) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center gap-4 py-4 border-b border-white/8 group transition-all duration-300 ${
                isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              }`}
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <span className="text-primary font-mono text-xs opacity-50 flex-shrink-0">
                0{idx + 1}
              </span>
              <span className="text-3xl font-heading-he text-white group-hover:text-accent transition-colors">
                {link.label}
              </span>
            </Link>
          ))}

          <div className="mt-8">
            <Link
              href="/league#register"
              onClick={() => setIsMenuOpen(false)}
              className="btn btn-accent w-full text-xl py-4 text-center block"
            >
              הרשמה עכשיו
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
