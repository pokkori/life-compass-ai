import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://lifecompass-ai.vercel.app";
const TITLE = "LifeCompass AI — Your AI Thinking Partner for Life's Big Decisions";
const DESC =
  "When you're at a crossroads — career, relationships, where to live — LifeCompass AI helps you think it through. Not advice, not therapy. Just the right questions.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "LifeCompass AI",
    description: "Your AI thinking partner for life's big decisions.",
    url: SITE_URL,
    siteName: "LifeCompass AI",
    locale: "en_US",
    type: "website",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "LifeCompass AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LifeCompass AI",
    description: "Your AI thinking partner for life's big decisions.",
    images: [`${SITE_URL}/opengraph-image.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-stone-950 text-stone-100 antialiased">{children}</body>
    </html>
  );
}
