import type { Metadata } from 'next';
import Link from 'next/link';
import Countdown from '@/components/league/Countdown';

export const metadata: Metadata = {
  title: 'הליגה | Israel Enduro Series',
  description: 'לוח תחרויות ליגת האנדורו הישראלית 2026, הרשמה לתחרויות, תוצאות ודירוג',
};

const events = [
  {
    id: 1,
    name: 'מרוץ #1 — גליל עליון',
    date: '15 מרץ 2026',
    location: 'יער ביריה',
    status: 'upcoming',
    registrationOpen: true,
    image: '/media/attachments/ELI02940-Edit.jpg',
  },
  {
    id: 2,
    name: 'מרוץ #2 — כרמל',
    date: '12 אפריל 2026',
    location: 'יער הכרמל',
    status: 'upcoming',
    registrationOpen: false,
    image: '/media/attachments/065A6836.JPG',
  },
  {
    id: 3,
    name: 'מרוץ #3 — גולן',
    date: '17 מאי 2026',
    location: 'רמת הגולן',
    status: 'upcoming',
    registrationOpen: false,
    image: '/media/attachments/065A7008.JPG',
  },
  {
    id: 4,
    name: 'מרוץ #4 — ירושלים',
    date: '14 יוני 2026',
    location: 'הרי ירושלים',
    status: 'upcoming',
    registrationOpen: false,
    image: '/media/attachments/ELI02266.jpg',
  },
  {
    id: 5,
    name: 'מרוץ #5 — גמר העונה',
    date: '18 יולי 2026',
    location: 'יעד יפורסם',
    status: 'upcoming',
    registrationOpen: false,
    image: '/media/attachments/ELI02362-Edit.jpg',
  },
];

const categories = [
  { name: 'ילדים', age: '7–9', description: 'מסלול קצר ומותאם לרוכבים צעירים', color: 'primary' },
  { name: 'נוער', age: '10–15', description: 'מסלול בינוני עם אתגרים מגוונים', color: 'accent' },
  { name: 'חובבים', age: '16+', description: 'לרוכבים מתחילים עד בינוניים', color: 'primary' },
  { name: 'תחרותי', age: '16+', description: 'לרוכבים מנוסים, מסלול מאתגר במלואו', color: 'accent' },
  { name: 'מאסטרס', age: '40+', description: 'לוותיקים שעדיין דורסים את השביל', color: 'primary' },
];

const stats = [
  { value: '5', label: 'תחרויות בעונה' },
  { value: '5', label: 'קטגוריות גיל' },
  { value: '100+', label: 'רוכבים' },
  { value: '2026', label: 'עונה' },
];

export default function LeaguePage() {
  return (
    <div className="bg-background min-h-screen">

      {/* Hero — Full Bleed */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/media/attachments/ELI02940-Edit.jpg")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#020617]" />

        <div className="relative z-10 flex flex-col items-center gap-8 px-4">
          <div className="animate-fade-in-down">
            <span className="bg-accent text-black font-black text-xs px-5 py-1.5 uppercase tracking-[0.25em] transform -skew-x-12 inline-block">
              עונה 2026 — מרוץ ראשון בעוד...
            </span>
          </div>

          <Countdown />

          <div className="animate-fade-in-up delay-200">
            <h1 className="text-5xl md:text-8xl font-brand text-white leading-none tracking-tighter mb-2">
              ליגת<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #06b6d4' }}>האנדורו</span><br />
              <span className="text-accent">הישראלית</span>
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
            <a
              href="#register"
              className="btn btn-accent text-lg min-w-[220px] shadow-[0_0_40px_rgba(245,158,11,0.5)]"
            >
              הרשמה למרוץ #1
            </a>
            <a
              href="#events"
              className="btn btn-outline text-lg min-w-[180px]"
            >
              לוח המרוצים
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-accent py-8 border-y border-accent/50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-brand text-black font-black leading-none">{stat.value}</div>
                <div className="text-black/70 text-sm font-bold uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Calendar */}
      <section id="events" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-primary font-mono text-sm tracking-widest uppercase block mb-2">עונה 2026</span>
              <h2 className="text-4xl md:text-5xl font-brand text-white">לוח התחרויות</h2>
            </div>
            <span className="hidden md:block h-px flex-1 bg-white/10 mx-8 mb-3" />
            <span className="text-white/30 font-mono text-sm">5 מרוצים</span>
          </div>

          <div className="space-y-4">
            {events.map((event, index) => (
              <div
                key={event.id}
                className="group relative rounded-2xl overflow-hidden border border-white/8 hover:border-primary/40 transition-all duration-500"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ backgroundImage: `url("${event.image}")` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/95 to-transparent" />

                <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-6 md:p-8">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all">
                      <span className="text-white/40 font-black text-xl group-hover:text-primary transition-colors">
                        #{index + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl md:text-2xl mb-3 font-heading-he">{event.name}</h3>
                      <div className="flex flex-wrap gap-3 text-sm font-semibold">
                        <span className="flex items-center gap-2 bg-white/5 border border-white/8 px-3 py-1 rounded-full text-white/70">
                          <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {event.date}
                        </span>
                        <span className="flex items-center gap-2 bg-white/5 border border-white/8 px-3 py-1 rounded-full text-white/70">
                          <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {event.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 md:flex-shrink-0">
                    {event.registrationOpen ? (
                      <>
                        <span className="flex items-center gap-2 text-green-400 text-sm font-bold uppercase tracking-wider">
                          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                          הרשמה פתוחה
                        </span>
                        <a href="#register" className="btn btn-accent px-8 py-2 text-base">
                          להרשמה
                        </a>
                      </>
                    ) : (
                      <span className="text-white/30 text-sm font-medium uppercase tracking-wider border border-white/10 px-4 py-2 rounded-full">
                        בקרוב
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary font-mono text-sm tracking-widest uppercase block mb-3">קטגוריות תחרות</span>
            <h2 className="text-4xl md:text-5xl font-brand text-white">לכל גיל יש מקום</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {categories.map((cat, i) => (
              <div
                key={cat.name}
                className="relative border border-white/8 rounded-2xl p-6 hover:-translate-y-2 hover:border-accent/40 transition-all duration-300 group overflow-hidden bg-white/2"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-4xl font-brand text-white/5 absolute top-4 right-4">{String(i + 1).padStart(2, '0')}</div>
                <div className={`w-8 h-1 ${cat.color === 'accent' ? 'bg-accent' : 'bg-primary'} mb-5 rounded-full`} />
                <h3 className="text-white font-bold text-xl mb-1">{cat.name}</h3>
                <div className={`text-sm font-mono mb-3 ${cat.color === 'accent' ? 'text-accent' : 'text-primary'}`}>{cat.age}</div>
                <p className="text-white/50 text-sm leading-relaxed">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration */}
      <section id="register" className="py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: 'url("/media/490471597_1243822961081425_3652582145712550382_n.jpg")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-[#020617]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <div className="border border-primary/20 rounded-3xl p-10 md:p-16 text-center bg-[#020617]/60 backdrop-blur-md">
            <span className="text-primary font-mono text-sm tracking-widest uppercase block mb-4">מרוץ #1 — 15 מרץ 2026</span>
            <h2 className="text-4xl md:text-5xl font-brand text-white mb-6">מוכנים לזנק?</h2>
            <p className="text-white/50 text-lg mb-10 max-w-md mx-auto leading-relaxed">
              מערכת ההרשמה מאובטחת וקלה לשימוש. בחרו קטגוריה והבטיחו את מקומכם.
            </p>

            <a
              href="https://example.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent text-xl px-12 py-5 shadow-[0_0_60px_rgba(245,158,11,0.4)] hover:shadow-[0_0_80px_rgba(245,158,11,0.6)] transition-all"
            >
              הרשמה למרוץ #1
            </a>

            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-white/30">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              הרשמה מאובטחת
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
