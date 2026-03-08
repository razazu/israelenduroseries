'use client';

import { useEffect, useState } from 'react';

export default function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Blob 1 - Primary */}
      <div
        className="blob blob-primary w-[500px] h-[500px] -top-20 -right-20 opacity-20"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />

      {/* Blob 2 - Accent */}
      <div
        className="blob blob-accent w-[400px] h-[400px] top-1/3 -left-40 opacity-15"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      />

      {/* Blob 3 - Primary */}
      <div
        className="blob blob-primary w-[300px] h-[300px] bottom-1/4 right-1/4 opacity-10"
        style={{ transform: `translateY(${scrollY * -0.08}px)` }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-30" />
    </div>
  );
}
