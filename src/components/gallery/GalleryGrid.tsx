'use client';

import { useState } from 'react';

const allPhotos = [
  { id: 1, src: '/media/attachments/ELI02940-Edit.jpg', title: 'אנדורו בפעולה', category: 'תחרויות' },
  { id: 2, src: '/media/attachments/ELI02266.jpg', title: 'מהירות ושליטה', category: 'תחרויות' },
  { id: 3, src: '/media/attachments/ELI02362-Edit.jpg', title: 'ירידה טכנית', category: 'תחרויות' },
  { id: 4, src: '/media/attachments/065A2238.JPG', title: 'מרוץ האנדורו', category: 'תחרויות' },
  { id: 5, src: '/media/attachments/065A1478.JPG', title: 'רוכב בשביל', category: 'תחרויות' },
  { id: 6, src: '/media/attachments/065A1536.JPG', title: 'עלייה מאתגרת', category: 'תחרויות' },
  { id: 7, src: '/media/490471597_1243822961081425_3652582145712550382_n.jpg', title: 'תחרות גליל', category: 'תחרויות' },
  { id: 8, src: '/media/490740531_1242492204547834_5530152158111977810_n.jpg', title: 'קפיצה', category: 'תחרויות' },
  { id: 9, src: '/media/490230152_1240292684767786_7398679026191781788_n.jpg', title: 'ליגת האנדורו', category: 'תחרויות' },
  { id: 10, src: '/media/555562726_1389336546530065_3668533277932394742_n.jpg', title: 'עונת 2025', category: 'תחרויות' },
  { id: 11, src: '/media/492708138_1263384125791975_1971121234159436649_n.jpg', title: 'פינישר', category: 'תחרויות' },
  { id: 12, src: '/media/493852615_1257787606351627_2824045707202836729_n.jpg', title: 'זוכים', category: 'תחרויות' },
  { id: 13, src: '/media/493306293_1256599586470429_881094978152022092_n.jpg', title: 'מרוץ נוער', category: 'תחרויות' },
  { id: 14, src: '/media/attachments/065A7008.JPG', title: 'בניית שביל', category: 'מסלולים' },
  { id: 15, src: '/media/attachments/065A6836.JPG', title: 'תשתית מסלול', category: 'מסלולים' },
  { id: 16, src: '/media/attachments/065A6430.JPG', title: 'עיצוב שביל', category: 'מסלולים' },
  { id: 17, src: '/media/580560225_1430349969095389_1869120062711159751_n.jpg', title: 'שביל חדש', category: 'מסלולים' },
  { id: 18, src: '/media/490107325_1242492127881175_5265523208783072571_n.jpg', title: 'מסלול הגליל', category: 'מסלולים' },
  { id: 19, src: '/media/attachments/497849464_1273242188139502_6705586983613860401_n.jpg', title: 'פרויקט מסלול', category: 'מסלולים' },
  { id: 20, src: '/media/493316509_1257368983060156_1923384067234906664_n.jpg', title: 'שביל אנדורו', category: 'מסלולים' },
];

const CATEGORIES = ['הכל', 'תחרויות', 'מסלולים'];

export default function GalleryGrid() {
  const [active, setActive] = useState('הכל');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === 'הכל' ? allPhotos : allPhotos.filter(p => p.category === active);

  return (
    <>
      {/* Filters */}
      <div className="flex gap-3 justify-center mb-12 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`flex-shrink-0 px-8 py-2.5 font-brand text-sm uppercase tracking-widest transition-all duration-300 border ${
              active === cat
                ? 'bg-accent text-black border-accent'
                : 'bg-transparent border-white/15 text-white/50 hover:border-accent/50 hover:text-white'
            }`}
            style={{ clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 space-y-3">
        {filtered.map((photo) => (
          <div
            key={photo.id}
            className="group relative overflow-hidden rounded-lg cursor-pointer break-inside-avoid"
            onClick={() => setLightbox(photo.src)}
          >
            <img
              src={photo.src}
              alt={photo.title}
              className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-bold text-sm">{photo.title}</p>
                <p className="text-accent text-xs font-mono uppercase tracking-wider">{photo.category}</p>
              </div>
            </div>
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-black/60 backdrop-blur-sm rounded-full p-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-pointer backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={lightbox}
            alt=""
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
