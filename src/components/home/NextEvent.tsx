'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ScrollReveal, CountUp } from '@/components/effects';

const nextEvent = {
  name: 'מרוץ #1 - גליל עליון',
  date: '15 מרץ 2026',
  location: 'יער ביריה',
  registrationOpen: true,
  spotsLeft: 45,
  targetDate: new Date('2026-03-15T09:00:00'),
};

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}

export default function NextEvent() {
  const countdown = useCountdown(nextEvent.targetDate);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-background-secondary/50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up">
          <div className="glass-card rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              
              {/* Event Info Column */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />
                
                <span className="inline-flex items-center gap-2 text-primary font-mono text-sm tracking-widest uppercase mb-6">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Upcoming Event
                </span>

                <h2 className="text-4xl md:text-5xl font-heading-he text-foreground mb-6 leading-none">
                  {nextEvent.name}
                </h2>

                <div className="flex flex-col gap-4 mb-10 text-lg text-foreground-muted">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-semibold">{nextEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-semibold">{nextEvent.location}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <Link href="/league#register" className="btn btn-accent text-lg px-8">
                    הרשמה
                  </Link>
                  <Link href="/league" className="btn btn-outline px-8">
                    פרטים נוספים
                  </Link>
                </div>
              </div>

              {/* Countdown / Visual Column */}
              <div className="relative bg-black/40 p-8 md:p-12 lg:p-16 flex flex-col items-center justify-center border-t lg:border-t-0 lg:border-r border-white/5">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mb-12">
                  {[
                    { value: countdown.days, label: 'ימים' },
                    { value: countdown.hours, label: 'שעות' },
                    { value: countdown.minutes, label: 'דקות' },
                    { value: countdown.seconds, label: 'שניות' },
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <div className="text-4xl md:text-5xl font-black text-white tabular-nums tracking-tight">
                        {item.value.toString().padStart(2, '0')}
                      </div>
                      <div className="text-white/40 text-xs font-bold uppercase tracking-widest mt-2">{item.label}</div>
                    </div>
                  ))}
                </div>

                {nextEvent.registrationOpen && (
                  <div className="w-full bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-foreground-muted font-semibold">סטטוס הרשמה</span>
                      <span className="flex items-center gap-2 text-green-400 text-sm font-bold uppercase tracking-wider">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        פתוח
                      </span>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-primary to-accent h-full w-[70%]" />
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-foreground-muted font-semibold">נרשמו: 105</span>
                      <span className="text-xs text-accent font-bold">נותרו <CountUp end={nextEvent.spotsLeft} duration={1500} /> מקומות</span>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
