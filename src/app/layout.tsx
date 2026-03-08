import type { Metadata } from "next";
import { Rubik, Karantina, Secular_One } from "next/font/google";
import "./globals.css";
import { Header, Footer, WhatsAppButton } from "@/components/layout";
import { ScrollProgress, ParallaxBackground } from "@/components/effects";

// Rubik for Body text - Sharp, Geometric, Modern Hebrew
const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-rubik",
  display: "swap",
});

// Secular One for Hebrew Headings - Bold, Impactful
const secularOne = Secular_One({
  subsets: ["hebrew", "latin"],
  weight: ["400"],
  variable: "--font-secular",
  display: "swap",
});

// Karantina for English Brand/Headings - Industrial & Aggressive
const karantina = Karantina({
  subsets: ["hebrew", "latin"],
  weight: ["400", "700"],
  variable: "--font-karantina",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Israel Enduro Series | ליגת האנדורו הישראלית",
  description: "ליגת האנדורו הישראלית - תחרויות אופני הרים מקצועיות לכל הגילאים. הרשמה לתחרויות, תוצאות, דירוג ובניית מסלולים מקצועית.",
  keywords: ["אנדורו", "אופני הרים", "תחרויות אופניים", "ישראל", "enduro", "MTB", "mountain bike", "Israel"],
  authors: [{ name: "Israel Enduro Ltd" }],
  openGraph: {
    title: "Israel Enduro Series | ליגת האנדורו הישראלית",
    description: "ליגת האנדורו הישראלית - תחרויות אופני הרים מקצועיות לכל הגילאים",
    type: "website",
    locale: "he_IL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${rubik.variable} ${secularOne.variable} ${karantina.variable} antialiased font-sans`}
      >
        <ScrollProgress />
        <ParallaxBackground />
        <Header />
        <main className="relative z-10 min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
