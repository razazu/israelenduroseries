'use client';

import { useState, useEffect } from 'react';

const NEXT_RACE_DATE = new Date('2026-03-15T08:00:00');

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: false });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const diff = NEXT_RACE_DATE.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: true });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
        expired: false,
      });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  if (timeLeft.expired) {
    return (
      <div className="text-accent font-brand text-2xl tracking-widest animate-pulse">
        המרוץ מתחיל עכשיו!
      </div>
    );
  }

  const units = [
    { value: timeLeft.days, label: 'ימים' },
    { value: timeLeft.hours, label: 'שעות' },
    { value: timeLeft.minutes, label: 'דקות' },
    { value: timeLeft.seconds, label: 'שניות' },
  ];

  return (
    <div className="flex items-start gap-2 sm:gap-3 justify-center" dir="ltr">
      {units.map(({ value, label }, i) => (
        <div key={label} className="flex items-start gap-2 sm:gap-3">
          <div className="flex flex-col items-center gap-1.5">
            <div className="bg-black/50 border border-white/20 backdrop-blur-md rounded-lg w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center">
              <span className="text-2xl sm:text-4xl font-brand text-accent tabular-nums">
                {String(value).padStart(2, '0')}
              </span>
            </div>
            <span className="text-white/40 text-[9px] sm:text-[10px] uppercase tracking-[0.15em]">{label}</span>
          </div>
          {i < units.length - 1 && (
            <span className="text-accent text-2xl sm:text-3xl font-bold mt-3 sm:mt-4">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
