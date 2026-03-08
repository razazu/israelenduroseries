import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'בניית מסלולים | Israel Enduro Series',
  description: 'בניית מסלולי אופניים מקצועיים בסגנון אנדורו - היחידים בארץ. עובדים עם קקל, עיריות ומועצות אזוריות.',
};

const services = [
  {
    title: 'תכנון מסלולים',
    description: 'תכנון מקצועי לפי תקנים בינלאומיים ודרישות הלקוח',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: 'בניית תשתיות',
    description: 'בניית מסלולים, קפיצות, ברמים ואלמנטים טכניים ברמה הגבוהה ביותר',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'שיקום מסלולים',
    description: 'שיקום ושדרוג מסלולים קיימים לעמידה בתקנים ובטיחות מרבית',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'ייעוץ והדרכה',
    description: 'ייעוץ לרשויות ולגופים ציבוריים בנושא תשתיות רכיבה',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

const process = [
  { step: 1, title: 'פגישת היכרות', description: 'הבנת הצרכים והיעדים' },
  { step: 2, title: 'סקר שטח', description: 'מיפוי ובחינת האפשרויות' },
  { step: 3, title: 'תכנון', description: 'תוכניות מפורטות והצעת מחיר' },
  { step: 4, title: 'ביצוע', description: 'בנייה על ידי צוות מקצועי' },
  { step: 5, title: 'מסירה', description: 'בדיקות, הדרכה ומסירה' },
];

const clients = [
  'קרן קיימת לישראל (קקל)',
  'רשות הטבע והגנים',
  'עיריות ומועצות אזוריות',
  'פארקים ויערות',
  'אתרי נופש',
];

const projects = [
  {
    name: 'פרויקט יער ביריה',
    description: 'בניית מסלול אנדורו באורך 3 ק"מ עם אלמנטים טכניים מתקדמים ותשתית ניקוז מקצועית',
    image: '/media/attachments/065A7008.JPG',
    tags: ['3 ק"מ', 'אנדורו', 'גליל עליון'],
  },
  {
    name: 'פרויקט הכרמל',
    description: 'שדרוג ושיקום מסלולים קיימים בפארק הכרמל לעמידה בתקני בטיחות בינלאומיים',
    image: '/media/attachments/065A6836.JPG',
    tags: ['שיקום', 'כרמל', 'בטיחות'],
  },
  {
    name: 'מסלול רמת הגולן',
    description: 'תכנון ובניית שביל חדש עם ויו פנורמי ואלמנטים טכניים לרמות שונות',
    image: '/media/attachments/065A6430.JPG',
    tags: ['חדש', 'גולן', 'טכני'],
  },
];

export default function TrailsPage() {
  return (
    <div className="bg-background min-h-screen">

      {/* Hero */}
      <section className="relative h-[65vh] flex flex-col justify-end pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/media/attachments/065A7008.JPG")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-[#020617]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <span className="text-accent font-mono text-sm tracking-widest uppercase block mb-3">בניית שבילים</span>
          <h1 className="text-5xl md:text-7xl font-brand text-white tracking-tighter leading-none mb-4">
            בניית<br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #06b6d4' }}>מסלולים</span>
          </h1>
          <p className="text-white/60 text-xl max-w-xl font-medium">
            היחידים בארץ המתמחים בבניית מסלולי אופניים בסגנון אנדורו
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary font-mono text-sm tracking-widest uppercase block mb-3">מה אנחנו עושים</span>
            <h2 className="text-4xl font-brand text-white">השירותים שלנו</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="group border border-white/8 rounded-2xl p-7 hover:border-accent/40 hover:-translate-y-2 transition-all duration-300 bg-white/2 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
                <div className="w-14 h-14 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary font-mono text-sm tracking-widest uppercase block mb-3">פרויקטים</span>
            <h2 className="text-4xl font-brand text-white">פרויקטים נבחרים</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.name} className="group relative overflow-hidden rounded-2xl border border-white/8 hover:border-primary/30 transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs bg-accent/20 text-accent border border-accent/30 px-2 py-0.5 rounded-full font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-white font-bold text-xl mb-1">{project.name}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary font-mono text-sm tracking-widest uppercase block mb-3">איך עובדים</span>
            <h2 className="text-4xl font-brand text-white">תהליך העבודה</h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-9 left-12 right-12 h-px bg-white/10" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {process.map((item) => (
                <div key={item.step} className="relative text-center group">
                  <div className="w-18 h-18 bg-[#0a0f1e] border border-white/10 group-hover:border-accent/50 rounded-full flex items-center justify-center mx-auto mb-5 relative z-10 transition-colors w-16 h-16">
                    <span className="text-2xl font-brand text-accent">{item.step}</span>
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-white/40 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-brand text-white mb-10 text-center">הלקוחות שלנו</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {clients.map((client) => (
              <div key={client} className="flex items-center gap-3 bg-white/3 border border-white/8 rounded-full px-6 py-3 hover:border-primary/40 transition-colors">
                <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white/70 font-semibold text-sm">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url("/media/attachments/ELI02362-Edit.jpg")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-brand text-white mb-4">מעוניינים בפרויקט?</h2>
          <p className="text-white/50 text-lg mb-10">נשמח לשמוע על הפרויקט שלכם ולהציע פתרון מותאם</p>
          <Link href="/contact" className="btn btn-accent text-xl px-12 py-5">
            צרו קשר
          </Link>
        </div>
      </section>
    </div>
  );
}
