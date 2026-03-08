import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'צור קשר | Israel Enduro Series',
  description: 'צרו קשר עם אנדורו ישראל - שאלות על תחרויות, בניית מסלולים או שיתופי פעולה',
};

const faqItems = [
  {
    question: 'מה זה אנדורו?',
    answer: 'אנדורו הוא תחרות אופני הרים שבה מתחרים נגד השעון במקטעי ירידה (Special Stages), כשהעליות הן לא תחרותיות ומאפשרות התאוששות.',
  },
  {
    question: 'מאיזה גיל אפשר להתחרות?',
    answer: 'רוכבים חובבים יכולים להתחרות מגיל 7, ורוכבים בקטגוריה התחרותית מגיל 9 ומעלה.',
  },
  {
    question: 'איזה ציוד צריך?',
    answer: 'אופני הרים תקינים, קסדה מלאה (full face) או קסדה רגילה עם מגן סנטר, כפפות, ומגני ברכיים ומרפקים מומלצים.',
  },
  {
    question: 'כמה עולה להירשם לתחרות?',
    answer: 'מחירי ההרשמה משתנים לפי קטגוריה וסוג התחרות. כל הפרטים מתפרסמים בעמוד ההרשמה של כל תחרות.',
  },
  {
    question: 'איך מחשבים את הדירוג?',
    answer: 'הדירוג מחושב על פי מקומות בתחרויות. נקודות ניתנות לפי המיקום בכל תחרות, ובסוף העונה מסכמים את הנקודות.',
  },
  {
    question: 'מעוניינים בבניית מסלול - איך מתחילים?',
    answer: 'צרו קשר דרך הטופס או בווטסאפ ונקבע פגישת היכרות. נשמח לשמוע על הפרויקט ולהציע פתרון מותאם.',
  },
];

export default function ContactPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative h-[50vh] flex flex-col justify-end pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/media/490230152_1240292684767786_7398679026191781788_n.jpg")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-[#020617]" />
        <div className="relative z-10 text-center px-4">
          <span className="text-primary font-mono text-sm tracking-widest uppercase block mb-3">דברו איתנו</span>
          <h1 className="text-6xl md:text-8xl font-brand text-white tracking-tighter leading-none">
            צור קשר
          </h1>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-heading-he text-foreground mb-6">פרטי התקשרות</h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">אימייל</h3>
                    <a href="mailto:Israelenduroseries@gmail.com" className="text-primary hover:underline">
                      Israelenduroseries@gmail.com
                    </a>
                  </div>
                </div>

                {/* Social */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-2">רשתות חברתיות</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://www.instagram.com/israelenduro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground-muted hover:text-primary transition-colors"
                      >
                        Instagram
                      </a>
                      <a
                        href="https://www.facebook.com/share/1A6oa31xaw/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground-muted hover:text-primary transition-colors"
                      >
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>

                {/* Company */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">החברה</h3>
                    <p className="text-foreground-muted">אנדורו ישראל בע"מ</p>
                    <p className="text-foreground-muted text-sm">Israel Enduro Ltd</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card">
              <h2 className="text-2xl font-heading-he text-foreground mb-6">שלחו הודעה</h2>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-foreground text-sm font-medium mb-2">
                      שם מלא
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-primary transition-colors"
                      placeholder="השם שלך"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-foreground text-sm font-medium mb-2">
                      אימייל
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-foreground text-sm font-medium mb-2">
                    נושא
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">בחר נושא</option>
                    <option value="league">שאלה על הליגה/תחרויות</option>
                    <option value="registration">בעיה בהרשמה</option>
                    <option value="trails">בניית מסלולים</option>
                    <option value="sponsorship">שיתוף פעולה / חסות</option>
                    <option value="other">אחר</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-foreground text-sm font-medium mb-2">
                    הודעה
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="מה תרצו לשאול או להגיד?"
                  />
                </div>

                <button type="submit" className="btn btn-accent w-full text-lg py-4">
                  שליחה
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading-he text-foreground mb-8 text-center">שאלות נפוצות</h2>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="card">
                <h3 className="text-foreground font-bold text-lg mb-2 flex items-start gap-3">
                  <span className="text-primary">Q:</span>
                  {item.question}
                </h3>
                <p className="text-foreground-muted pr-7 font-medium">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
