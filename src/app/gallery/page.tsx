import type { Metadata } from 'next';
import GalleryGrid from '@/components/gallery/GalleryGrid';

export const metadata: Metadata = {
  title: 'גלריה | Israel Enduro Series',
  description: 'תמונות וסרטונים מתחרויות ליגת האנדורו הישראלית ופרויקטי בניית מסלולים',
};

export default function GalleryPage() {
  return (
    <div className="bg-background min-h-screen">

      {/* Hero */}
      <section className="relative h-[55vh] flex flex-col justify-end pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/media/attachments/ELI02362-Edit.jpg")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-[#020617]" />
        <div className="relative z-10 text-center px-4">
          <span className="text-primary font-mono text-sm tracking-widest uppercase block mb-3">מדיה</span>
          <h1 className="text-6xl md:text-8xl font-brand text-white tracking-tighter leading-none">
            גלריה
          </h1>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>

      {/* Social CTA */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-brand text-white mb-3">עוד תוכן ברשתות</h2>
          <p className="text-white/40 mb-8">תמונות וסרטונים חדשים עולים כל הזמן לאינסטגרם ופייסבוק</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/israelenduro"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/share/1A6oa31xaw/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Facebook
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
