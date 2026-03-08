import Link from 'next/link';

const pillars = [
  {
    href: '/league',
    image: '/media/attachments/ELI02940-Edit.jpg',
    tag: 'עונה 2026',
    title: 'ליגת האנדורו הישראלית',
    description: '5 תחרויות מקצועיות ברחבי הארץ. מגיל 7 ועד מאסטרס. דירוג ארצי ואווירה שאי אפשר לתאר.',
    cta: 'לוח המרוצים',
    accent: 'border-accent',
    tagColor: 'bg-accent text-black',
  },
  {
    href: '/trails',
    image: '/media/attachments/065A7008.JPG',
    tag: 'בניית שבילים',
    title: 'בניית מסלולים מקצועית',
    description: 'היחידים בישראל המתמחים בבניית שבילי אנדורו. עובדים עם קקל, רשות הטבע והגנים, עיריות ומועצות.',
    cta: 'הפרויקטים שלנו',
    accent: 'border-primary',
    tagColor: 'bg-primary text-black',
  },
  {
    href: '/gallery',
    image: '/media/attachments/ELI02362-Edit.jpg',
    tag: 'קהילה',
    title: 'תרבות הרכיבה הישראלית',
    description: 'אנדורו זה לא רק תחרות — זה חוויה. שביל, נוף, אדרנלין, וקהילה של אנשים שמבינים אותך.',
    cta: 'גלריה',
    accent: 'border-white/20',
    tagColor: 'bg-white/10 text-white',
  },
];

export default function WhatIsEnduro() {
  return (
    <>
      {/* What is Enduro */}
      <section className="py-24 bg-[#020617] relative overflow-hidden">
        <div className="absolute inset-0 bg-topo-brand opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <span className="text-primary font-mono text-sm tracking-widest uppercase block mb-4">מה זה אנדורו?</span>
              <h2 className="text-4xl md:text-5xl font-brand text-white leading-tight mb-6">
                הספורט שמשלב<br />
                <span className="text-accent">כוח, טכניקה</span><br />
                ואהבת שטח
              </h2>
              <div className="space-y-4 text-white/60 text-lg leading-relaxed">
                <p>
                  אנדורו הוא ענף אופני הרים שבו מתחרים נגד השעון במקטעי <strong className="text-white/90">ירידה טכנית</strong> — מה שנקרא Special Stages — בעוד שהעליות חופשיות ומאפשרות התאוששות.
                </p>
                <p>
                  זה לא רק תחרות. זה <strong className="text-white/90">אורח חיים</strong>. רוכבים שיוצאים לשטח, מגלים שבילים חדשים, דוחפים את הגבולות שלהם, ובסוף היום יושבים ביחד עם חיוך גדול על הפנים.
                </p>
                <p>
                  Israel Enduro Series מביאה את החוויה הזו לישראל — עם מסלולים מקצועיים, תחרויות מסודרות, ו<strong className="text-white/90">קהילה שמחכה לך</strong>.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/league" className="btn btn-accent">
                  הצטרפו לליגה
                </Link>
                <Link href="/contact" className="btn btn-outline">
                  שאלות? דברו איתנו
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="/media/490740531_1242492204547834_5530152158111977810_n.jpg"
                  alt="אנדורו ישראל"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 to-transparent" />
              </div>
              {/* Floating stat */}
              <div className="absolute bottom-6 right-6 bg-accent text-black px-6 py-4 rounded-xl">
                <div className="text-3xl font-brand font-black leading-none">100+</div>
                <div className="text-sm font-bold">רוכבים בליגה</div>
              </div>
              <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md border border-white/20 text-white px-5 py-3 rounded-xl">
                <div className="text-2xl font-brand font-black leading-none text-primary">5</div>
                <div className="text-xs font-bold text-white/70">תחרויות בעונה</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pillars */}
      <section className="py-8 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4">
            {pillars.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className={`group relative overflow-hidden rounded-2xl border ${p.accent} hover:border-opacity-100 transition-all duration-500`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block ${p.tagColor}`}>
                    {p.tag}
                  </span>
                  <h3 className="text-white font-bold text-xl mb-2 leading-tight">{p.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">{p.description}</p>
                  <span className="text-accent text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                    {p.cta}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Landscape Strip */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/media/490230152_1240292684767786_7398679026191781788_n.jpg")' }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-brand text-white mb-4">
            מגליל עד גולן.<br />
            <span className="text-accent">ישראל היא אחת ממדינות האנדורו הטובות בעולם.</span>
          </h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
            שבילים טכניים, נופים מדהימים, ואקלים שמאפשר לרכוב כמעט כל השנה. אנחנו כאן כדי לנגיש את זה לכולם.
          </p>
        </div>
      </section>
    </>
  );
}
