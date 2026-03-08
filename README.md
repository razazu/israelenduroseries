# Israel Enduro Series — האתר הרשמי

האתר הרשמי של ליגת האנדורו הישראלית. בנוי עם Next.js, Tailwind CSS v4, TypeScript.

## קישורים

- **Production:** https://israelenduroseries-qwu25atx5-razazulai-gmailcoms-projects.vercel.app
- **GitHub:** https://github.com/razazu/israelenduroseries
- **Vercel Dashboard:** https://vercel.com/razazulai-gmailcoms-projects/israelenduroseries

## מבנה הפרויקט

```
src/
├── app/
│   ├── page.tsx          # דף הבית
│   ├── league/           # ליגה + קאונטדאון
│   ├── trails/           # בניית מסלולים
│   ├── gallery/          # גלריה
│   └── contact/          # צור קשר
├── components/
│   ├── home/             # Hero, WhatIsEnduro, Sponsors
│   ├── layout/           # Header, Footer
│   ├── league/           # Countdown
│   └── gallery/          # GalleryGrid (lightbox)
public/
└── media/
    ├── logo/             # IES LOGO.png + variants
    └── attachments/      # תמונות מרוצים ומסלולים
```

## פיתוח מקומי

```bash
npm install
npm run dev
# → http://localhost:3000
```

## פריסה

כל push ל-`master` מפרס אוטומטית לוורסל.

```bash
git add .
git commit -m "תיאור"
git push
```

## סטאק

- **Next.js 16.1.5** + Turbopack
- **Tailwind CSS v4** (עם `@tailwindcss/postcss`)
- **TypeScript**
- **Vercel** לפריסה
- שפה: עברית + RTL (`dir="rtl"`)

## הערות טכניות

- משתמש ב-`<img>` רגיל במקום `next/image` (תאימות Turbopack)
- קאונטדאון עם `dir="ltr"` כדי שהימים יהיו משמאל
- תפריט מובייל: opacity + pointer-events (לא transform, שבור ב-RTL)
- `vercel.json` עם `"framework": "nextjs"` נדרש לזיהוי נכון
