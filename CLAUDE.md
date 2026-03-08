# Israel Enduro Series — הוראות לקלוד

## פרויקט
האתר הרשמי של ליגת האנדורו הישראלית.
- **Production:** https://israelenduroseries-qwu25atx5-razazulai-gmailcoms-projects.vercel.app
- **GitHub:** https://github.com/razazu/israelenduroseries
- **Vercel project:** `israelenduroseries` תחת `razazulai-gmailcoms-projects`

## סטאק
- Next.js 16.1.5 + Turbopack
- Tailwind CSS v4 (`@import "tailwindcss"` + `@tailwindcss/postcss`)
- TypeScript, dir="rtl" (עברית)
- Vercel לפריסה

## כללים קריטיים

### תמונות
- **תמיד `<img>` רגיל** — לא `next/image` (שבור עם Turbopack)
- כל המדיה נמצאת ב-`/public/media/` ו-`/public/media/attachments/`
- לוגו ראשי: `/media/logo/IES LOGO.png`

### RTL / עברית
- כל הטקסט בעברית
- `dir="ltr"` על קאונטדאון (כדי שימים יהיו משמאל)
- תפריט מובייל: opacity + pointer-events (לא translate-x — שבור ב-RTL)

### Vercel
- `vercel.json` עם `"framework": "nextjs"` חובה (אחרת Vercel לא מזהה Next.js)
- SSO Protection: כבוי (הוסר דרך API)
- כל push ל-master מפרס אוטומטית

## מבנה קבצים חשובים

```
src/app/globals.css          ← כל ה-custom CSS classes
src/components/layout/       ← Header (client), Footer
src/components/home/         ← Hero, WhatIsEnduro, Sponsors
src/components/league/       ← Countdown (client)
src/components/gallery/      ← GalleryGrid (client, lightbox)
src/app/league/page.tsx      ← דף הליגה עם קאונטדאון
src/app/trails/page.tsx      ← דף המסלולים
src/app/gallery/page.tsx     ← דף הגלריה
src/app/contact/page.tsx     ← דף יצירת קשר
vercel.json                  ← framework: nextjs
```

## CSS Classes מותאמות (globals.css)
- `.btn`, `.btn-accent`, `.btn-outline`, `.btn-primary`
- `.bg-topo`, `.bg-topo-brand` — תבנית טופוגרפית
- `.glass-card`, `.card`
- `.text-gradient-primary`
- `.countdown-box`
- `.font-brand`, `.font-mono`

## טיפים לפיתוח
- אם build נכשל: `rm -rf .next` ואז `npm run dev`
- אם יש שגיאת CSS בטurbopack: מחק cache ואתחל שוב
- Server מתחיל על :3000, אם תפוס עולה ל-:3001

## פריסה
```bash
git add [files]
git commit -m "תיאור"
git push
# → Vercel מפרס אוטומטית
```
או ידנית: `vercel --prod --yes`
